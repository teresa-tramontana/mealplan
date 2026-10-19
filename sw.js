// Damit die App auch ohne Internet startet: zuerst online laden, sonst die gespeicherte Version zeigen.
const CACHE = "familientisch-v2";
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(["./", "manifest.webmanifest", "icons/icon-192.png"]))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  // Die Seite selbst immer frisch vom Server holen (nicht aus dem Browser-Zwischenspeicher), damit Änderungen sofort ankommen
  e.respondWith(fetch(e.request, e.request.mode === "navigate" ? { cache: "no-cache" } : {}).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request.mode === "navigate" ? "./" : e.request, copy)); }
    return r;
  }).catch(() => caches.match(e.request.mode === "navigate" ? "./" : e.request)));
});
