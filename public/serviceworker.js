const CACHE_NAME = "Version-1-Animal_app"
const urlsToCache = ['index.html', 'offline.html']

const self = this

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME)
    .then((cache) => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
    }))
}); 

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
    .then(() => {
        return fetch(e.request)
        .catch(() => caches.match('offline.html') )
    }))
}); 

self.addEventListener('activate', (e) => {
    const cacheWhitelist = []
    cacheWhitelist.push(CACHE_NAME)
    e.waitUntil(
        caches.keys()
    .then((cacheNames) => {
        if(!cacheWhitelist.includes(cacheNames)) {
            return caches.delete(cacheNames)
        }
    })
    )
}); 