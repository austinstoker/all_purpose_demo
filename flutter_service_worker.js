'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "121acf028919a767ac036aeacfe0f5da",
"assets/assets/audio/cut.m4a": "b3df809d9ee08f81c94922d19d7e0997",
"assets/assets/audio/exactly_right.m4a": "88c6193027457d1ae765c863b3f37c1f",
"assets/assets/audio/fun.m4a": "6b2bfd365a6799058d2897088de9ccd2",
"assets/assets/audio/good_work.m4a": "81eb8a0b0824da3f36eb7d0b852596e3",
"assets/assets/audio/huh.m4a": "71dce9aa2b81775b5c244633c9a30f19",
"assets/assets/audio/hut.m4a": "d011f15f5155a6a9ac9b1a7fc504c099",
"assets/assets/audio/instructions.m4a": "e512b77ea3d969b552aaabc96ffd906b",
"assets/assets/audio/lets_go.m4a": "e47cba9df5fabce955e1397f3e87b71e",
"assets/assets/audio/man.m4a": "6c774d3b87a8e984607e0271d406488c",
"assets/assets/audio/nut.m4a": "71f8ac8ab5a0926123b2439cd008dad2",
"assets/assets/audio/ran.m4a": "945d3d4587ba810d7d1f0b8b6d98e151",
"assets/assets/audio/retro_chip_power.wav": "71c92d9116d11a635b0cee213548f08f",
"assets/assets/audio/ruff.m4a": "37f8c406f2d520addfce850f60c6b517",
"assets/assets/audio/thats_the_one.m4a": "adc95f7242e836e4d9c1b46802a875dd",
"assets/assets/audio/you_got_it.m4a": "91438b4e7b5c4fd6d3feeba01c68bafb",
"assets/assets/branding/Butterfly.png": "58d34f3a2408325c2955ada9b861e435",
"assets/assets/branding/GB_Brand.png": "c258842a179001602812619ce2e31276",
"assets/assets/branding/Homepage-Image.jpg": "80bd6ed5b4f3a8f230a6c2bafdc96cf0",
"assets/assets/branding/HS_Brand.png": "54f1b1afcc5ba6459f22dfd0fa428f1f",
"assets/assets/fonts/primer_print.ttf": "f4b9a102b98c7f85fa6596b6c5609cd3",
"assets/assets/hearts_and_hands_icon.png": "1c38bb6965f172b4fc9949d99ad2f658",
"assets/assets/images/back_icon.png": "b129ae950cbf368891ebb27799ee71f9",
"assets/assets/images/dog/blank_bone.png": "26b219c282497054e3414ecae9c40ec4",
"assets/assets/images/dog/dog_sprite.png": "a3b2c65a96b56ba9180a1d58300003ab",
"assets/assets/images/dog/jumping_dog.png": "a20699b3f9e10f19198e6b7661488e22",
"assets/assets/images/dog/kitchen_scene.png": "4b44e91b0d707fb5463ebe8938035ee8",
"assets/assets/images/dog/tail_animation.png": "c3fbe76dff9be54f2b640b3e45412b45",
"assets/assets/images/gear_icon.png": "c63035f7578bb78708e1ffce00c11058",
"assets/assets/images/otters/otter_background.png": "373d52dec4b00845e132f9ba73d102e7",
"assets/assets/images/peaches/basket.png": "4bd35bd6f60d0af0461d22ea2872feac",
"assets/assets/images/peaches/basket_back.png": "45730ff21005a21664f3c51526fe6980",
"assets/assets/images/peaches/peach1.png": "bb6add71e94bb5112d67a1e86c3db5ef",
"assets/assets/images/peaches/peach2.png": "afc4e02b1dabc8911289e37ad2ee586e",
"assets/assets/images/peaches/peach3.png": "786c54608b6d37b20e75930de793b32a",
"assets/assets/images/peaches/peach_background.png": "0a5a800d176cd0424fe3ff3884742963",
"assets/assets/images/pig/Background.png": "d924b7027e85aa15cf6cfc7e5b623047",
"assets/assets/images/pig/momPigs.png": "a48503b231b1a378691896d18b42529b",
"assets/assets/images/pig/piglets.png": "da7402bd813661d9f3e838115cdfdac0",
"assets/assets/images/question_icon.png": "8346fb2bc6b646cf9f21099c6f97faf8",
"assets/assets/images/replay_icon.png": "18a393b426d82c6135634560ab7781c6",
"assets/assets/images/shark/blank_fish.png": "0dfc37f81726879ca40d53377a0ac2bf",
"assets/assets/images/shark/bubble.png": "93d9a6ad8e933373d30b2abca552e15e",
"assets/assets/images/shark/ocean_scene.png": "b544072f946f0c9cf1ee4fa92d65183c",
"assets/assets/images/shark/shark_sprite.png": "8096aafd1cf54fcaeead74dc1e399476",
"assets/assets/images/sound_icon.png": "ae0b3cd01a69080a1e237e7cd9005734",
"assets/assets/images/turtles/single_turtle.png": "88de6f3c15f49d7f8841b0d2c478b2c5",
"assets/assets/images/turtles/turtle_background.png": "3432c9c6856333725057d4ea315779dd",
"assets/assets/images/turtles/turtle_sprite.png": "601fcae957a52b7d4d68a75ed3c84b43",
"assets/assets/la_icon.png": "3de22d25a7ea1b9074b87377edee8a6b",
"assets/assets/lomia.pdf": "ba2510175de26bdb35d112bdc5c2a816",
"assets/assets/math_icon.png": "6f08d0d0cfbd7307b1a18e60515e8718",
"assets/assets/music_icon.png": "7156fdfed6a2b3a03ca5b5672f4aa53d",
"assets/assets/subject_icons/book_icon.png": "679f4f79fac7cb1e78f21c9bb2e119c8",
"assets/assets/subject_icons/fav_icon.png": "757d8b53a2805e018e5f63bc74089751",
"assets/assets/subject_icons/hearts_and_hands_icon.png": "867a469b7ee3a8d15c80493c3e661fd1",
"assets/assets/subject_icons/help_icon.png": "bb27bbc9a9130886cf2a30749d17bda1",
"assets/assets/subject_icons/info_icon.png": "8bfb2b6c121c513de832de588034675e",
"assets/assets/subject_icons/math_icon.png": "612d3de764fce7175fd9af1225bce7ad",
"assets/assets/subject_icons/science_icon.png": "ee821838eee9831b9351d5d279951b0a",
"assets/FontManifest.json": "4b83ac5a2f10f6efd83eaab2265025a9",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "7ea23d408dc1df7efe3efdfd211a240e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"icons/Icon_192.png": "e97bdae81cc77c81519f8b8debe110fa",
"icons/Icon_512.png": "59e8e27eab4c89d526fa08dc5c37335b",
"Icon_16.png": "7ece8a5714b93effa02d6248afa44665",
"index.html": "2476b0e2e7ed505b66506dfba1a62104",
 
"main.dart.js": "a7a74f43985da0e5608959fe0566b9e3",
"manifest.json": "445d0a3dc6801774979ec43fc42aa107",
"version.json": "9c0a910246813c1660094cad4a7cd9af"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
 
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
