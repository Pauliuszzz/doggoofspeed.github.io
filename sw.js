const staticCacheName = 'PP1.0.1.1';
const assets = [
  'index.html',
  'js/ScriptsArcade.js',
  'js/ScriptsMenu.js',
  'js/ScriptsStory.js',
  'js/ScriptsSurvival.js',
  'css/ArcadeTheme.css',
  'css/Bitmgothic.woff2',
  'css/CenturyGothic-Bold.woff2',
  'css/MenuTheme.css',
  'css/StoryTheme.css',
  'css/SurvivalTheme.css',
  '/surival'
];
// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});