const version = "1.0.1";
const cacheName = `sebastiandoe5`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/.htaccess`,
        `/about.html`,
        `/index.html`,
        `/pageredirects.js`,
        `/script.js`,
        `/sw.js`,
        `/style.css`,
        `/projects/index.html`,
        `/projects/projects.js`,
        `/projects/assets/logos/Auracoin.png`,
        `/projects/assets/logos/AuroraWebcount.png`,
        `/projects/assets/logos/Codepen.png`,
        `/projects/assets/logos/GameProxy.png`,
        `/projects/assets/logos/IP.png`,
        `/projects/assets/logos/LargeTextDisplayer.png`,
        `/projects/assets/logos/MacroClip.png`,
        `/projects/assets/logos/MandarinLearning.png`,
        `/projects/assets/logos/Matera.png`,
        `/projects/assets/logos/Subnodal.png`,
        `/projects/assets/logos/ThumbnailDownloader.png`,
        `/projects/assets/logos/Waterd.png`,
        `/404.html`,
        `/social.js`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});