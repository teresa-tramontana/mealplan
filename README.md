# Familientisch

Wochenplan fürs Abendessen: 2 Erwachsene + 1 Kleinkind (2 Jahre), jedes Gericht unter 30 Minuten.

- **Woche:** 7 Gerichte aus 40 internationalen Rezepten, jedes einzeln tauschbar.
- **Koch-Video:** Jeder Schritt als animierte Szene im Story-Stil, mit Vorlesen und Kochwecker.
- **Entdecken:** Gerichte swipen (rechts = Herz) oder als Pinnwand durchschauen. Herz-Gerichte und ähnliche Gerichte kommen beim Mischen öfter dran.
- **Teilen:** Jedes Gericht mit Zutaten und Schritten per WhatsApp verschicken.
- **Einkauf:** Zutaten der Woche automatisch zusammengezählt, nach Supermarkt-Abteilung sortiert.

Rezepte ändern: `src/recipes.js`. Aussehen: `src/app.html`. Danach `./build.sh` ausführen.

## Mit der Familie teilen

Haken und getauschte Gerichte werden über eine kostenlose Google Firebase Realtime Database geteilt.
Die Anleitung steht in der App (oben auf „Nur auf diesem Handy“ tippen). Die Datenbank-Adresse
steht bewusst nicht im Code, sondern nur auf den verbundenen Handys (per Familien-Link `?db=...`).
