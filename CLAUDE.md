# Familientisch

Familien-Menüplan als eine HTML-Seite. Live: **https://familientisch.tramo.workers.dev** (Cloudflare Worker).

## Arbeitsweise (Teresas Wunsch)

- **Standard: direkt auf `main` pushen**, ohne Pull Request (außer Teresa sagt etwas anderes).
  Wenn die Sitzung einen eigenen Branch vorgibt, zusätzlich dorthin pushen.
- **Nach jedem Push auf `main` immer zu Cloudflare hochladen** (siehe unten) und die Live-Seite prüfen.
- Am Ende immer die Deploy-URL nennen: https://familientisch.tramo.workers.dev
- Teresa ist Vibe-Coding-Anfängerin: einfache Sprache, kein Jargon. Wenn sie etwas entscheiden muss: nummerierte Liste am Ende.

## Ablauf bei jeder Änderung

1. Quellen ändern (`src/app.html`, Rezepte in `src/*.js` / `src/*.json`), nie `index.html` direkt.
2. `./build.sh` (baut `index.html` und `dist/familientisch.html`).
3. Kurz testen (Playwright ist vorinstalliert; lokal: `npx -y wrangler@4 dev --port 8787`, PIN 1682).
4. Committen, `git push origin HEAD:main`.
5. Hochladen: `CLOUDFLARE_API_TOKEN="$CF_API_TOKEN" npx -y wrangler@4 deploy`
   (der Schlüssel liegt in der Sitzung als `CF_API_TOKEN`). Zusätzlich lädt die GitHub Action
   `.github/workflows/deploy.yml` bei jedem Push auf `main` hoch, sobald das GitHub-Secret
   `CLOUDFLARE_API_TOKEN` angelegt ist. Doppelt hochladen schadet nicht.
6. Live prüfen. Die Seite hat eine PIN-Sperre, deshalb erst den Cookie holen:
   `curl -c jar -X POST https://familientisch.tramo.workers.dev/__pin -d pin=1682`, dann `curl -b jar ...`.
   Achtung: falsche PINs zählen (5 Fehlversuche = 1 Stunde gesperrt für diese IP).

## Aufbau

- `worker.js`: liefert die Dateien aus, PIN-Sperre (PIN 1682, Cookie gut ein Jahr gültig), und
  `/api/state` = gemeinsamer Speicher der Familie (Durable Object `Familie`).
- `wrangler.jsonc`: Cloudflare-Einstellungen. Neue Durable-Object-Klassen brauchen einen neuen `migrations`-Eintrag.
- `.assetsignore`: Dateien, die nicht auf die Webseite gehören (neue interne Dateien hier eintragen!).
- Gemeinsame Daten: plan, checked, pantryBuy, favs, people, ratings, myBreakfast, bfShop, cooks.
  **Beim Testen nie `/api/state` auf der Live-Seite überschreiben**, das sind echte Familiendaten.
- GitHub Pages (teresa-tramontana.github.io/mealplan) ist die alte Adresse und soll abgeschaltet werden;
  dort zeigt die App nur noch den Knopf „Änderungen mitnehmen“.
