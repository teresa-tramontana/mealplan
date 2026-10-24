# Familientisch

Live-Seite: https://familientisch.tramo.workers.dev (Cloudflare Worker, siehe `worker.js` und `wrangler.jsonc`).

- Nach jeder Änderung: `./build.sh`, committen, auf `main` pushen und dann **immer auf Cloudflare hochladen**:
  `CLOUDFLARE_API_TOKEN="$CF_API_TOKEN" npx -y wrangler@4 deploy`
- Die Seite ist mit der PIN 1682 geschützt (in `worker.js`). Zum Prüfen mit curl erst den Cookie holen:
  `curl -c jar -X POST https://familientisch.tramo.workers.dev/__pin -d pin=1682`, dann `curl -b jar ...`.
- Die gemeinsamen Daten der Familie liegen unter `/api/state` (Durable Object). Beim Testen nicht überschreiben.
- Teresa ist Anfängerin: einfache Sprache, kein Jargon, Deploy-URL immer nennen.
