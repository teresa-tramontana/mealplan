"""Holt die Rezepte aus dem Tramontana Master Chef Archiv und speichert sie in src/masterchef.json.
Wenn die Seite nicht erreichbar ist, bleibt die alte Datei bestehen."""
import json, sys, urllib.request

URL = "https://tramontana.cc/api/recipes"
OUT = "src/masterchef.json"

try:
    req = urllib.request.Request(URL, headers={"User-Agent": "Familientisch/1.0"})
    data = json.load(urllib.request.urlopen(req, timeout=20))
    assert isinstance(data, list) and data
except Exception as e:  # noqa: BLE001
    print(f"Master Chef nicht erreichbar ({e}), behalte gespeicherte Rezepte.")
    sys.exit(0)

keep = ["id", "number", "title", "servings", "ingredients", "instructions", "cuisine", "type"]
data = [{k: r.get(k) for k in keep} for r in data]
with open(OUT, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=1)
print(f"{len(data)} Master-Chef-Rezepte gespeichert.")
