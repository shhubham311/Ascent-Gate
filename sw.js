/* Ascent service worker — offline shell cache */
const C = 'ascent-v3';
const ASSETS = ['./', './index.html', './manifest.webmanifest'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(C).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // network-first for the app shell so updates land; cache fallback offline
  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith(
      fetch(req).then(r => { const cp = r.clone(); caches.open(C).then(c => c.put(req, cp)); return r; })
                .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.ok && new URL(req.url).origin === location.origin) { const cp = r.clone(); caches.open(C).then(c => c.put(req, cp)); }
      return r;
    }).catch(() => hit))
  );
});
