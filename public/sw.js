const CACHE_NAME = 'cdcounter-cache-v1'
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/icon-144x144.png',
  '/icon-192x192.png',
  '/screenshot1.png',
]

self.addEventListener('install', (evt) => {
  evt.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)))
  self.skipWaiting()
})

self.addEventListener('activate', (evt) => {
  evt.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((cached) => cached || fetch(evt.request)),
  )
})
