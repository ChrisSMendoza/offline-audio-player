window.addEventListener('load', () => {
    var audioPlayer = document.getElementById('audio-player');
    var audioSource = audioPlayer.querySelector('source');

    function updateAudioSource(urls) {
        urls.forEach(url => {
            if (url === '/Larry_June.mp3') {
                audioSource.src = url;
                audioPlayer.load();
            }
        });
    }

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.active.postMessage({
                type: 'CACHE_URLS',
                urls: ['/Larry_June.mp3']
            });

            navigator.serviceWorker.addEventListener('message', event => {
                if (event.data.type === 'CACHED_URLS') {
                    updateAudioSource(event.data.urls);
                }
            });
        });
    }
});
