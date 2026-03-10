self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('zl-bug-v10').then((cache) => {
      return cache.addAll(['/', '/index.html', '/manifest.json']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});