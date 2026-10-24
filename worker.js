// Cloudflare Worker: liefert die App aus und speichert die gemeinsamen Daten der Familie.
// Gespeichert wird in einem Durable Object (kleine Datenbank bei Cloudflare). Alle Handys
// lesen und schreiben dort, deshalb sehen alle dasselbe.
// Davor sitzt eine PIN-Sperre: einmal pro Gerät eingeben, nach 5 Fehlversuchen 1 Stunde gesperrt.
import { DurableObject } from "cloudflare:workers";

const PIN = "1682";
const MAX_TRIES = 5;
const LOCK_MS = 60 * 60 * 1000;
// Cookie hält gut ein Jahr (länger lassen Browser nicht zu). Neue PIN = alle Geräte fragen neu.
const COOKIE = "ft_pin";
const COOKIE_AGE = 400 * 24 * 60 * 60;
// Ohne PIN erlaubt, damit man die App auf den Startbildschirm legen kann
const OPEN = ["/manifest.webmanifest", "/icons/"];

const MAX_BODY = 512 * 1024;
const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
});

// Ein einziges Objekt für die ganze Familie. Änderungen laufen nacheinander, nichts geht verloren.
export class Familie extends DurableObject {
  async read() {
    return (await this.ctx.storage.get("state")) || null;
  }
  // Wert an einer Stelle setzen, z. B. "checked/Milch" oder "plan". Leerer Pfad = alles ersetzen.
  // null löscht die Stelle (wie bei Firebase).
  async write(parts, value) {
    let state = (await this.ctx.storage.get("state")) || {};
    if (!parts.length) state = value && typeof value === "object" ? value : {};
    else {
      let node = state;
      for (const p of parts.slice(0, -1)) {
        if (!node[p] || typeof node[p] !== "object" || Array.isArray(node[p])) node[p] = {};
        node = node[p];
      }
      const last = parts[parts.length - 1];
      if (value === null) delete node[last]; else node[last] = value;
    }
    await this.ctx.storage.put("state", state);
  }
}

// Zählt Fehlversuche pro Internet-Anschluss (IP-Adresse)
export class PinSperre extends DurableObject {
  async check(ok) {
    const now = Date.now();
    let s = (await this.ctx.storage.get("s")) || { fails: 0, until: 0 };
    if (s.until > now) return { ok: false, lockedFor: s.until - now };
    if (ok) { await this.ctx.storage.delete("s"); return { ok: true }; }
    s.fails++;
    if (s.fails >= MAX_TRIES) s = { fails: 0, until: now + LOCK_MS };
    await this.ctx.storage.put("s", s);
    return s.until ? { ok: false, lockedFor: LOCK_MS } : { ok: false, left: MAX_TRIES - s.fails };
  }
}

async function pinToken() {
  const h = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("familientisch|" + PIN));
  return [...new Uint8Array(h)].map(b => b.toString(16).padStart(2, "0")).join("");
}
function hasPin(request, token) {
  return (request.headers.get("Cookie") || "").split(/;\s*/).includes(COOKIE + "=" + token);
}

const LOCK_PAGE = `<!doctype html>
<html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#FFFFFF"><meta name="robots" content="noindex">
<link rel="manifest" href="/manifest.webmanifest"><link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">
<title>Familientisch</title>
<style>
:root { --bg: #F4F2EE; --surface: #FBFAF8; --ink: #2E3230; --muted: #5F645F; --line: #E2DFD8; --sage: #8FA48B; --heart: #C4564F; }
@media (prefers-color-scheme: dark) { :root { --bg: #1C1F1D; --surface: #242826; --ink: #ECEAE4; --muted: #9EA39D; --line: #353A37; --sage: #A5BBA1; --heart: #E07B72; } }
* { box-sizing: border-box; }
body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 16px; background: var(--bg); color: var(--ink); font: 16px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; }
form { width: 100%; max-width: 320px; background: var(--surface); border: 1px solid var(--line); border-radius: 20px; padding: 28px 24px; text-align: center; }
h1 { font: 600 24px/1.2 Georgia, serif; margin: 0 0 6px; }
p { margin: 0 0 18px; color: var(--muted); }
input { width: 100%; font-size: 28px; letter-spacing: .5em; text-align: center; padding: 12px 0 12px .5em; border: 1px solid var(--line); border-radius: 12px; background: var(--bg); color: var(--ink); }
input:focus { outline: 2px solid var(--sage); outline-offset: 1px; }
button { width: 100%; margin-top: 14px; padding: 13px; font: inherit; font-weight: 600; border: 0; border-radius: 12px; background: var(--sage); color: #fff; cursor: pointer; }
button:disabled { opacity: .5; }
#msg { min-height: 1.5em; margin: 14px 0 0; color: var(--heart); }
</style></head><body>
<form id="f" method="post" action="/__pin">
  <h1>Familientisch</h1>
  <p>Bitte die Familien-PIN eingeben.</p>
  <input id="pin" name="pin" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="8" autocomplete="off" required autofocus aria-label="PIN">
  <button id="go" type="submit">Öffnen</button>
  <p id="msg" role="status"></p>
</form>
<script>
const f = document.getElementById("f"), msg = document.getElementById("msg"), go = document.getElementById("go");
f.addEventListener("submit", async e => {
  e.preventDefault(); go.disabled = true; msg.textContent = "";
  try {
    const r = await fetch("/__pin", { method: "POST", body: new URLSearchParams({ pin: f.pin.value }) });
    const d = await r.json();
    if (d.ok) { location.reload(); return; }
    msg.textContent = d.message; f.pin.value = "";
  } catch (err) { msg.textContent = "Kein Netz? Bitte nochmal versuchen."; }
  go.disabled = false; f.pin.focus();
});
</script></body></html>`;

function lockedText(ms) {
  const min = Math.ceil(ms / 60000);
  return `Zu viele falsche Versuche. Bitte in ${min} ${min === 1 ? "Minute" : "Minuten"} nochmal probieren.`;
}

async function tryPin(request, env, token) {
  const form = await request.formData().catch(() => null);
  const pin = form ? String(form.get("pin") || "") : "";
  const ip = request.headers.get("CF-Connecting-IP") || "unbekannt";
  const lock = env.PINSPERRE.get(env.PINSPERRE.idFromName(ip));
  const res = await lock.check(pin === PIN);
  if (res.ok) {
    return new Response(JSON.stringify({ ok: true }), { headers: {
      "Content-Type": "application/json", "Cache-Control": "no-store",
      "Set-Cookie": `${COOKIE}=${token}; Max-Age=${COOKIE_AGE}; Path=/; Secure; HttpOnly; SameSite=Lax`
    } });
  }
  const message = res.lockedFor ? lockedText(res.lockedFor)
    : `Falsche PIN. Noch ${res.left} ${res.left === 1 ? "Versuch" : "Versuche"}.`;
  return new Response(JSON.stringify({ ok: false, message }), { status: res.lockedFor ? 429 : 401,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const token = await pinToken();
    if (url.pathname === "/__pin" && request.method === "POST") return tryPin(request, env, token);
    if (!hasPin(request, token) && !OPEN.some(p => url.pathname.startsWith(p))) {
      if (url.pathname.startsWith("/api/")) return json({ error: "PIN fehlt" }, 401);
      return new Response(LOCK_PAGE, { status: 401, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
    }
    if (!url.pathname.startsWith("/api/state")) return env.ASSETS.fetch(request);

    const parts = url.pathname.slice("/api/state".length).split("/").filter(Boolean).map(p => {
      try { return decodeURIComponent(p); } catch (e) { return null; }
    });
    if (parts.some(p => p === null || p === "__proto__" || p === "constructor" || p === "prototype") || parts.length > 4)
      return json({ error: "Ungültiger Pfad" }, 400);

    const db = env.FAMILIE.get(env.FAMILIE.idFromName("familie"));
    if (request.method === "GET") {
      if (parts.length) return json({ error: "Nur ganzer Stand lesbar" }, 400);
      return json(await db.read());
    }
    if (request.method === "PUT") {
      const body = await request.text();
      if (body.length > MAX_BODY) return json({ error: "Zu groß" }, 413);
      let value;
      try { value = JSON.parse(body); } catch (e) { return json({ error: "Kein JSON" }, 400); }
      await db.write(parts, value);
      return json({ ok: true });
    }
    return json({ error: "Nicht erlaubt" }, 405);
  }
};
