const cacheName = 'audio-cache-v1';
const filesToCache = [
    '/Its_Friday_But_Sunday.mp3',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll(filesToCache))
    );
});
