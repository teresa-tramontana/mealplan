// node tools/check_steps.js eingabe.json ausgabe.json -> prüft ausführliche Kochschritte mit {Zutat}-Platzhaltern
const fs = require("fs");
const [inp, out] = process.argv.slice(2);
const R = JSON.parse(fs.readFileSync(inp, "utf8"));
let O; try { O = JSON.parse(fs.readFileSync(out, "utf8")); } catch (e) { console.log("FEHLER: " + out + " ist kein gültiges JSON: " + e.message); process.exit(1); }
const ICONS = ["chop", "boil", "pan", "oven", "mix", "serve", "rice"];
let bad = 0;
const err = (id, m) => { bad++; console.log(id + ": " + m); };
for (const r of R) {
  const st = O[r.id];
  if (!Array.isArray(st)) { err(r.id, "fehlt"); continue; }
  if (st.length < 4 || st.length > 10) err(r.id, "Anzahl Schritte " + st.length + " (4–10)");
  const names = r.ingredients.map(i => i[0]), used = new Set();
  st.forEach((s, k) => {
    if (!ICONS.includes(s.icon)) err(r.id, `Schritt ${k + 1}: icon ${s.icon}`);
    if (typeof s.text !== "string" || s.text.length < 20) err(r.id, `Schritt ${k + 1}: Text zu kurz`);
    if (s.timer != null && !(Number.isInteger(s.timer) && s.timer > 0 && s.timer <= 7200)) err(r.id, `Schritt ${k + 1}: timer muss Sekunden (Ganzzahl) sein`);
    for (const m of (s.text || "").matchAll(/\{([^}]*)\}/g)) {
      if (!names.includes(m[1])) err(r.id, `Schritt ${k + 1}: Platzhalter {${m[1]}} ist keine Zutat. Erlaubt: ${names.join(" | ")}`);
      else used.add(m[1]);
    }
    if (/Fürs Kind|für das Kind|Kinderportion/i.test(s.text || "")) err(r.id, `Schritt ${k + 1}: keine Kinder-Hinweise`);
  });
  names.forEach(n => { if (!used.has(n)) err(r.id, `Zutat {${n}} kommt in keinem Schritt vor`); });
}
for (const id of Object.keys(O)) if (!R.find(r => r.id === id)) err(id, "unbekannte id");
console.log(bad ? `${bad} Probleme` : `OK: ${R.length} Rezepte`);
process.exit(bad ? 1 : 0);
