#!/bin/sh
# Baut index.html (GitHub Pages) und dist/familientisch.html (Artifact) aus src/.
# Holt vorher die aktuellen Rezepte aus dem Tramontana Master Chef (falls erreichbar).
set -e
cd "$(dirname "$0")"
mkdir -p dist
python3 tools/fetch_masterchef.py || true
python3 - <<'PY'
import json, os
app = open("src/app.html", encoding="utf-8").read()
rec = open("src/recipes.js", encoding="utf-8").read()
mc = open("src/masterchef.json", encoding="utf-8").read()
conv = open("src/masterchef.js", encoding="utf-8").read()
photos = sorted(f[:-4] for f in os.listdir("img") if f.endswith(".jpg"))
js = rec + "\nconst MASTERCHEF = " + mc + ";\nconst PHOTOS = " + json.dumps(photos) + ";\n" + conv
frag = app.replace("/*RECIPES*/", js)
open("dist/familientisch.html", "w", encoding="utf-8").write(frag)
page = ('<!doctype html>\n<html lang="de">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
        '<style>[hidden]{display:none!important}body{margin:0}</style>\n</head>\n<body>\n'
        + frag + '\n</body>\n</html>\n')
open("index.html", "w", encoding="utf-8").write(page)
PY
echo "fertig: index.html + dist/familientisch.html"
