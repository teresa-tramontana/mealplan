# Familientisch

Wochenplan fürs Abendessen: 2 Erwachsene + 1 Kleinkind (2 Jahre). Schnelle Familiengerichte plus das Tramontana-Master-Chef-Archiv.

- **Woche:** 7 Gerichte aus allen passenden Rezepten (eigene + Master Chef), jedes einzeln tauschbar.
- **Koch-Video:** Jeder Schritt als animierte Szene im Story-Stil, mit Vorlesen und Kochwecker.
- **Entdecken:** Gerichte swipen (rechts = Herz) oder als Pinnwand durchschauen. Herz-Gerichte und ähnliche Gerichte kommen beim Mischen öfter dran.
- **Teilen:** Jedes Gericht mit Zutaten und Schritten per WhatsApp verschicken.
- **Aktionen:** Beim Bauen holt `tools/scout_deals.py` die aktuellen Aktionen von BILLA und Gurkerl; die Einkaufsliste zeigt passende Angebote.
- **Einkauf:** Zutaten der Woche automatisch zusammengezählt, nach Supermarkt-Abteilung sortiert.

Rezepte ändern: `src/recipes.js`; 20 Rezepte nach Simple Home Edit (übersetzt, mit Quellenlink) in `src/simplehomeedit.js`. Master-Chef-Rezepte kommen beim Bauen automatisch von tramontana.cc (`tools/fetch_masterchef.py`, Umrechnung in `src/masterchef.js`). Aussehen: `src/app.html`. Danach `./build.sh` ausführen.

## Mit der Familie teilen

Läuft auf Cloudflare: https://familientisch.tramo.workers.dev (Familien-PIN nötig, einmal pro Gerät).

Woche, Haken, Herzen, Bewertungen und eigene Frühstücksrezepte liegen in einer kleinen Datenbank
bei Cloudflare (Durable Object, siehe `worker.js`). Alle, die die App öffnen, sehen denselben Stand.
Hochladen: `npx wrangler deploy`.

## Wöchentliches Update

Jeden Sonntag früh legt eine Claude-Automatik 10 neue Gerichte an und holt neue Aktionen (`./build.sh`), dann wird auf `main` gepusht.
