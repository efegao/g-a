const CACHE_NAME = 'garson-asistani-v1';
const assetsToCache = [
  '/',
  '/index.html', // veya ana dosyanın adı neyse
  'https://cdn.tailwindcss.com'
];

// Dosyaları önbelleğe al
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// İnternet yokken önbellekten sun
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});