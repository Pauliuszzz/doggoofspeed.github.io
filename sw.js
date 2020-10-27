const staticCacheName = 'ProjectPassageCache';
const assets = [
    'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    '/Arcade/Arcade.html',
    '/Arcade/ArcadeScenarios.js',
    '/css/ArcadeTheme.css',
    '/css/Bitmgothic.woff2',
    '/css/CenturyGothic-Bold.woff2',
    '/css/MenuTheme.css',
    '/css/Pixel.woff2',
    '/css/StoryTheme.css',
    '/css/SurvivalTheme.css',
    '/js/ScriptsArcade.js',
    '/js/ScriptsMenu.js',
    '/js/ScriptsStory.js',
    '/js/ScriptsSurvival.js',
    '/resources/abtnsfx.ogg',
    '/resources/aendcard.ogg',
    '/resources/btnsfx1.ogg',
    '/resources/btnsfx2.ogg',
    '/resources/btnsfx3.ogg',
    '/resources/btnsfx4.ogg',
    '/resources/deadCard.ogg',
    '/resources/endCard.ogg',
    '/resources/forward.svg',
    '/resources/help.svg',
    '/resources/home.png',
    '/resources/home.svg',
    '/resources/Project_Passage.png',
    '/resources/refresh.png',
    '/resources/refresh.svg',
    '/Story/Scenarios/M1Scenarios.js',
    '/Story/Scenarios/M2Scenarios.js',
    '/Story/Scenarios/M3Scenarios.js',
    '/Story/Scenarios/M4Scenarios.js',
    '/Story/Scenarios/M5Scenarios.js',
    '/Story/M1.html',
    '/Story/M2.html',
    '/Story/M3.html',
    '/Story/M4.html',
    '/Story/M5.html',
    '/Survival/Hardcore.html',
    '/Survival/Survival.html',
    '/Survival/SurvivalScenarios.js',
    '/index.html',
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