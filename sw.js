const staticCacheName = 'ProjectPassageCache';
const assets = [
    'Arcade/Arcade.html',
    'Arcade/ArcadeScenarios.js',
    'css/ArcadeTheme.css',
    'css/Bitmgothic.woff2',
    'css/CenturyGothic-Bold.woff2',
    'css/Chota_0.7.2.css',
    'css/MenuTheme.css',
    'css/StoryTheme.css',
    'css/SurvivalTheme.css',
    'js/ScriptsArcade.js',
    'js/ScriptsMenu.js',
    'js/ScriptsStory.js',
    'js/ScriptsSurvival.js',
    'resources/arcademode.svg',
    'resources/back.svg',
    'resources/forward.svg',
    'resources/home.png',
    'resources/home.svg',
    'resources/play.svg',
    'resources/playbig.svg',
    'resources/Project_Passage.png',
    'resources/Project_Passage.png',
    'resources/refresh.png',
    'resources/refresh.svg',
    'resources/storymode.svg',
    'resources/survivalmode.svg',
    'Surival/Survival.html',
    'Survival/SurvivalScenarios.js',
    'index.html',
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