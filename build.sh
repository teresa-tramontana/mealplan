#!/bin/sh
# Baut index.html (GitHub Pages) und dist/familientisch.html (Artifact) aus src/.
# Holt vorher die aktuellen Rezepte aus dem Tramontana Master Chef (falls erreichbar).
set -e
cd "$(dirname "$0")"
mkdir -p dist
python3 tools/fetch_masterchef.py || true
python3 tools/scout_deals.py || true
python3 - <<'PY'
import json, os
app = open("src/app.html", encoding="utf-8").read()
rec = open("src/recipes.js", encoding="utf-8").read() + "\n" + open("src/simplehomeedit.js", encoding="utf-8").read()
# Rezepte nach Carolina Gelen (NYT Cooking), frei übertragen und für die Familie angepasst
if os.path.exists("src/carolinagelen.json"):
    rec += "\nconst CAROLINA = " + open("src/carolinagelen.json", encoding="utf-8").read() + ";\nCAROLINA.forEach(r => RECIPES.push(Object.assign({ kid: \"\" }, r, { tags: r.tags.concat(\"carolinagelen\") })));\nRECIPES.forEach(r => { if (r.source && /Carolina Gelen/.test(r.source.name) && !r.tags.includes(\"carolinagelen\")) r.tags.push(\"carolinagelen\"); });\n"
# Ausführliche Kochschritte mit {Zutat}-Platzhaltern (ersetzen die kurzen Schritte)
if os.path.exists("src/steps_detail.json"):
    rec += "\nconst DETAIL_STEPS = " + open("src/steps_detail.json", encoding="utf-8").read() + ";\nRECIPES.forEach(r => { const d = DETAIL_STEPS[r.id]; if (d) r.steps = d; });\n"
mc = open("src/masterchef.json", encoding="utf-8").read()
conv = open("src/masterchef.js", encoding="utf-8").read()
deals = open("src/angebote.json", encoding="utf-8").read() if os.path.exists("src/angebote.json") else "{}"
photos = sorted(f[:-4] for f in os.listdir("img") if f.endswith(".jpg"))
js = rec + "\nconst MASTERCHEF = " + mc + ";\nconst PHOTOS = " + json.dumps(photos) + ";\nconst ANGEBOTE = " + deals + ";\n" + conv
frag = app.replace("/*RECIPES*/", js)
open("dist/familientisch.html", "w", encoding="utf-8").write(frag)
page = ('<!doctype html>\n<html lang="de">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
        '<meta name="description" content="Wochenplan, Koch-Anleitungen und Einkaufsliste für zwei Große und ein Kleines.">\n'
        '<meta name="theme-color" content="#FFFFFF">\n'
        '<link rel="manifest" href="manifest.webmanifest">\n'
        '<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">\n'
        '<meta name="apple-mobile-web-app-capable" content="yes">\n'
        '<meta name="mobile-web-app-capable" content="yes">\n'
        '<meta name="apple-mobile-web-app-title" content="Familientisch">\n'
        '<meta name="apple-mobile-web-app-status-bar-style" content="default">\n'
        '<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 32 32%27%3E%3Ccircle cx=%2716%27 cy=%2716%27 r=%2715%27 fill=%27%23FBFAF8%27/%3E%3Ccircle cx=%2716%27 cy=%2716%27 r=%2710%27 fill=%27none%27 stroke=%27%23E2DFD8%27/%3E%3Cellipse cx=%2713%27 cy=%2714%27 rx=%275%27 ry=%274%27 fill=%27%238FA48B%27/%3E%3Cellipse cx=%2719%27 cy=%2719%27 rx=%274%27 ry=%273.5%27 fill=%27%23C98D6B%27/%3E%3C/svg%3E">\n'
        '<style>[hidden]{display:none!important}body{margin:0}</style>\n</head>\n<body>\n'
        + frag + '\n<script>if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).then(r => r.update()).catch(() => {});</script>\n</body>\n</html>\n')
open("index.html", "w", encoding="utf-8").write(page)
PY
echo "fertig: index.html + dist/familientisch.html"
