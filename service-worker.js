// service-worker.js

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('app-cache').then(function(cache) {
      return cache.addAll([
        '/', // Mettez ici les URL des ressources à mettre en cache
        './index.html',
        './style.css',
        './scripts.js',
        // Ajoutez ici d'autres ressources statiques à mettre en cache
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
