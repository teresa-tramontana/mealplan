// Cloudflare Worker: liefert die App aus und speichert die gemeinsamen Daten der Familie.
// Gespeichert wird in einem Durable Object (kleine Datenbank bei Cloudflare). Alle Handys
// lesen und schreiben dort, deshalb sehen alle dasselbe.
import { DurableObject } from "cloudflare:workers";

const MAX_BODY = 512 * 1024;
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, PUT, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};
const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status, headers: { ...CORS, "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith("/api/state")) return env.ASSETS.fetch(request);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });

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
