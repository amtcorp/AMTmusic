// service-worker.js

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('app-cache').then(function(cache) {
      return cache.addAll([
        'https://amtcorp.github.io/AMTmusic/index.html',
        'https://amtcorp.github.io/AMTmusic/style.css',
        'https://amtcorp.github.io/AMTmusic/script.js',
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
