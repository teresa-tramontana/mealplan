// Übersetzt die Rezepte aus dem Tramontana Master Chef (MASTERCHEF, beim Bauen eingefügt)
// in das Format der App. Mengen werden auf 2 Große + 1 Kleines umgerechnet.
(function () {
  if (typeof MASTERCHEF === "undefined" || !Array.isArray(MASTERCHEF)) return;
  const FAMILY = 2.5;
  const PALETTES = [
    ["#9C3527", "#EBE6DA", "#5E564B", "#D8D3C8"], ["#B0784F", "#F4F1EA", "#6F8F4E", "#D8C3A5"],
    ["#7A4E33", "#EBE6DA", "#C69A6A", "#F4F1EA"], ["#C8743F", "#F4F1EA", "#8C5A3C", "#E2D3BC"],
    ["#5E564B", "#D8D3C8", "#9C3527", "#F4F1EA"], ["#A39788", "#F4F1EA", "#B5482F", "#EBE6DA"]
  ];
  const UNITS = "kg|g|ml|l|EL|TL|Prisen?|Bund|Dosen?|Packung(?:en)?|Pck\\.?|Stk\\.?|Stück|Zehen?|Becher|Gläser|Glas|Scheiben?|Tassen?|Handvoll|Zweige?|Blätter|Blatt|Stangen?|Knollen?|Köpfe|Kopf|Würfel|Spritzer|Schuss|cm";
  const RX = new RegExp("^\\s*(\\d+(?:[.,]\\d+)?(?:\\s*-\\s*\\d+)?|½|¼|¾|1/2|1/4)?\\s*(" + UNITS + ")?\\.?\\s+(.+)$", "i");
  const FRAC = { "½": 0.5, "¼": 0.25, "¾": 0.75, "1/2": 0.5, "1/4": 0.25 };

  function aisle(name, unit) {
    const n = name.toLowerCase();
    if (/hack|faschiert|fleisch|huhn|hühn|hähnchen|hendl|chicken|rind|schwein|kalb|lamm|speck|bacon|lachs|shrimp|garnele|fisch|wurst|würst|schinken|short rib|mark|ente|pute/.test(n)) return "meat";
    if (/salz|pfeffer|öl\b|olivenöl|zucker|mehl|pulver|gewürz|essig|sirup|zimt|chili|sojasauce|soja|brühe|fond|vanille|backpulver|natron|honig|senf|lorbeer|muskat|kümmel|curry|safran|oregano|thymian getrocknet|paste|fischsauce|worcester|ketchup|mayonnaise|stärke|hefe/.test(n)) return "pantry";
    if (/tiefkühl|\btk\b/.test(n)) return "frozen";
    if (/milch|sahne|obers|käse|butter|joghurt|\beier?\b|sourcream|sauerrahm|rahm|mascarpone|parmesan|mozzarella|crème|creme|quark|topfen|ricotta|feta|halloumi|tofu/.test(n)) return "fresh";
    if (/brot|semmel|tortilla|wrap|toast|brioche|bun|baguette|pita|blätterteig|teig/.test(n)) return "bread";
    if (/^dosen?$/i.test(unit || "") || /nudel|pasta|spaghetti|tagliatelle|penne|rigatoni|linguine|orzo|reis|risotto|ramen|bohnen|linsen|kichererbsen|passiert|tomatenmark|kokosmilch|mais|chips|wein|datteln|nüsse|nuss|erdnuss|mandel|rosinen|kakao|schokolade|kekse|löffelbiskuit|haferflocken|grieß/.test(n)) return "dry";
    return "veg";
  }
  function parseIng(s, factor) {
    const m = String(s).match(RX);
    if (!m || !m[1]) return [String(s).trim(), 0, "", aisle(String(s), "")];
    let q = m[1].includes("-") ? parseFloat(m[1].split("-")[1].replace(",", ".")) : (FRAC[m[1]] ?? parseFloat(m[1].replace(",", ".")));
    let unit = (m[2] || "Stk").replace(/\.$/, "");
    const name = m[3].trim();
    if (/^(prisen?|schuss|spritzer)$/i.test(unit)) return [name, 0, "", aisle(name, unit)];
    q = q * factor;
    q = /^(g|ml)$/i.test(unit) ? Math.max(10, Math.round(q / 10) * 10) : /^(kg|l)$/i.test(unit) ? Math.round(q * 10) / 10 : Math.max(0.5, Math.round(q * 2) / 2);
    return [name, q, unit, aisle(name, unit)];
  }
  function icon(t) {
    t = t.toLowerCase();
    if (/servier|anricht|garnier|bestreu|verteil.*teller/.test(t)) return "serve";
    if (/ofen|back|überback|grill/.test(t)) return "oven";
    if (/reis/.test(t) && /koch|quell/.test(t)) return "rice";
    if (/koch|köchel|sied|blanchier|aufgieß|aufkoch|schmor|simmer/.test(t)) return "boil";
    if (/brat|röst|anschwitz|pfanne|dünst/.test(t)) return "pan";
    if (/schneid|hack|würfel|reib|hobel|schäl|zerkleiner/.test(t)) return "chop";
    return "mix";
  }
  function minutes(t) {
    let m = 0;
    const h = t.match(/(\d+(?:[.,]\d+)?)\s*(?:-\s*\d+\s*)?(stunden|std)/i); if (h) m += parseFloat(h[1].replace(",", ".")) * 60;
    const mi = t.match(/(\d+)\s*(?:-\s*(\d+)\s*)?(minuten|min\b)/i); if (mi) m += parseInt(mi[2] || mi[1], 10);
    return m;
  }
  const CUISINE_TAG = { "Italienisch": "mediterran", "Österreichisch": "österreichisch", "Orientalisch": "orientalisch", "Israelisch": "orientalisch",
    "Georgisch": "orientalisch", "Mexikanisch": "lateinamerika", "Französisch": "französisch", "Englisch": "britisch", "Amerikanisch": "amerikanisch" };

  MASTERCHEF.forEach((x, i) => {
    if (!x || !x.title || !Array.isArray(x.instructions)) return;
    const factor = FAMILY / (x.servings || 4);
    const ingredients = (x.ingredients || []).map(s => parseIng(s, factor));
    const steps = x.instructions.map(t => { const m = minutes(t); return { icon: icon(t), text: t, items: [], ...(m && m <= 240 ? { timer: m * 60 } : {}) }; });
    const time = steps.reduce((s, st) => s + (st.timer || 0) / 60, 0);
    const all = (x.title + " " + (x.ingredients || []).join(" ")).toLowerCase();
    const tags = ["masterchef"];
    const ct = CUISINE_TAG[x.cuisine] || (/asiat|thai|japan|vietnam|indones|korea|chines/i.test(x.cuisine || "") ? "asiatisch" : null);
    if (ct) tags.push(ct);
    if (/hack|faschiert/.test(all)) tags.push("faschiert");
    if (/huhn|hühn|hähnchen|hendl|chicken/.test(all)) tags.push("huhn");
    if (/lachs|fisch|garnele|shrimp/.test(all)) tags.push("fisch");
    if (/nudel|pasta|spaghetti|tagliatelle|penne|orzo|ramen|rigatoni|linguine/.test(all)) tags.push("pasta");
    if (/one.?pan|one.?pot/.test(all)) tags.push("onepot");
    if (x.type === "Dessert") tags.push("süß");
    if (!/fleisch|hack|huhn|hühn|hähnchen|chicken|rind|schwein|speck|bacon|lachs|shrimp|garnele|fisch|wurst|schinken|mark|beef|rib/.test(all)) tags.push("vegetarisch");
    const soup = /suppe|tom kha|ramen/i.test(x.title);
    const pepper = /paprika(?!pulver)/i.test((x.ingredients || []).join(" "));
    RECIPES.push({
      id: "mc-" + x.id, name: x.title, origin: x.cuisine || "Master Chef", time: time >= 20 ? Math.round(time) : null, mc: true,
      course: x.type, colors: PALETTES[i % PALETTES.length], kid: "", ingredients, steps, tags,
      // In den Wochenplan kommen nur Hauptspeisen bis etwa eine Stunde, ohne Suppe und ohne Paprika.
      week: x.type === "Hauptspeise" && !soup && !pepper && (!time || time <= 60)
    });
  });
})();
