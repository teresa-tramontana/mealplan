#!/bin/sh
# Baut index.html (für GitHub Pages) und dist/familientisch.html (Artifact) aus src/
set -e
cd "$(dirname "$0")"
mkdir -p dist
python3 - <<'PY'
app = open("src/app.html", encoding="utf-8").read()
rec = open("src/recipes.js", encoding="utf-8").read()
frag = app.replace("/*RECIPES*/", rec)
open("dist/familientisch.html", "w", encoding="utf-8").write(frag)
page = ('<!doctype html>\n<html lang="de">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
        '<style>[hidden]{display:none!important}body{margin:0}</style>\n</head>\n<body>\n'
        + frag + '\n</body>\n</html>\n')
open("index.html", "w", encoding="utf-8").write(page)
PY
echo "fertig: index.html + dist/familientisch.html"
