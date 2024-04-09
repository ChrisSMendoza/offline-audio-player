const cacheName = 'audio-cache-v1';
const filesToCache = [
    '/Larry_June.mp3',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll(filesToCache))
    );
});
