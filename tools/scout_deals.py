"""Holt die aktuellen Aktionen von BILLA (shop.billa.at/aktionen) und Gurkerl (gurkerl.at/aktionen)
und speichert sie in src/angebote.json. Die App zeigt passende Aktionen in der Einkaufsliste an.
Wenn ein Shop nicht erreichbar ist, bleiben seine alten Einträge bestehen."""
import datetime, json, re, sys, urllib.request

OUT = "src/angebote.json"
UA = {"User-Agent": "Mozilla/5.0 (Familientisch Einkaufsliste)"}


def get(url):
    req = urllib.request.Request(url, headers=UA)
    return urllib.request.urlopen(req, timeout=40).read().decode("utf-8", "ignore")


# Nur Lebensmittel-Kategorien (keine Drogerie, Getränke, Haushalt, Haustier, Fertiggerichte)
FOOD = {"Obst & Gemüse", "Kühlwaren", "Fleisch, Wurst & Fisch", "Vorratsschrank", "Tiefkühl", "Brot & Gebäck", "Rein Pflanzlich"}


def billa():
    html = get("https://shop.billa.at/aktionen")
    m = re.search(r'<script[^>]*id="__NUXT_DATA__"[^>]*>(.*?)</script>', html, re.S)
    arr = json.loads(m.group(1))
    sys.setrecursionlimit(20000)

    def res(i, depth=0):
        v = arr[i]
        if depth > 40:
            return None
        if isinstance(v, dict):
            return {k: (res(x, depth + 1) if isinstance(x, int) else x) for k, x in v.items()}
        if isinstance(v, list):
            if v and isinstance(v[0], str) and v[0] in ("Reactive", "ShallowReactive", "Ref", "ShallowRef"):
                return res(v[1], depth + 1)
            return [res(x, depth + 1) if isinstance(x, int) else x for x in v]
        return v

    out = []
    for i, v in enumerate(arr):
        if not (isinstance(v, dict) and "name" in v and "price" in v and "slug" in v):
            continue
        p = res(i)
        pr = p.get("price") or {}
        reg = pr.get("regular") or {}
        if not reg.get("value") or not (pr.get("crossed") or reg.get("promotionText")):
            continue
        top = ((p.get("parentCategories") or [[{}]])[0] or [{}])[0].get("name", "")
        if top not in FOOD:
            continue
        out.append({
            "markt": "BILLA",
            "name": p["name"],
            "menge": f'{p.get("amount", "")} {p.get("volumeLabelShort", "")}'.strip(),
            "preis": reg["value"] / 100,
            "statt": (pr.get("crossed") or 0) / 100 or None,
            "hinweis": reg.get("promotionText") or "",
            "bis": None,
            "link": f'https://shop.billa.at/produkte/{p["slug"]}',
        })
    return out


def gurkerl():
    html = get("https://www.gurkerl.at/aktionen")
    m = re.search(r'<script[^>]*id="__NEXT_DATA__"[^>]*>(.*?)</script>', html, re.S)
    data = json.loads(m.group(1))
    out = []

    def walk(o):
        if isinstance(o, dict):
            pr = o.get("prices")
            if "name" in o and isinstance(pr, dict) and pr.get("salePrice"):
                out.append({
                    "markt": "Gurkerl",
                    "name": o["name"],
                    "menge": o.get("textualAmount") or "",
                    "preis": pr["salePrice"],
                    "statt": pr.get("originalPrice"),
                    "hinweis": pr.get("saleText") or "",
                    "bis": (pr.get("saleValidTill") or "")[:10] or None,
                    "link": f'https://www.gurkerl.at/{o.get("productId")}-{o.get("slug")}',
                })
            for v in o.values():
                walk(v)
        elif isinstance(o, list):
            for v in o:
                walk(v)

    walk(data)
    seen, uniq = set(), []
    for d in out:
        if d["name"] not in seen:
            seen.add(d["name"])
            uniq.append(d)
    return uniq


try:
    old = json.load(open(OUT, encoding="utf-8"))
except Exception:  # noqa: BLE001
    old = {"angebote": []}

result = {"stand": datetime.date.today().isoformat(), "angebote": []}
for markt, fn in (("BILLA", billa), ("Gurkerl", gurkerl)):
    try:
        items = fn()
        print(f"{markt}: {len(items)} Aktionen")
    except Exception as e:  # noqa: BLE001
        items = [a for a in old.get("angebote", []) if a.get("markt") == markt]
        print(f"{markt} nicht erreichbar ({e}), behalte {len(items)} alte Aktionen.")
    result["angebote"] += items

with open(OUT, "w", encoding="utf-8") as f:
    json.dump(result, f, ensure_ascii=False, indent=0)
