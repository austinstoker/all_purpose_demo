'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "76db77e34d9abacf539087b8448a39fd",
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
"assets/assets/fonts/primer_print.ttf": "f4b9a102b98c7f85fa6596b6c5609cd3",
"assets/assets/images/back_icon.png": "b129ae950cbf368891ebb27799ee71f9",
"assets/assets/images/dog/blank_bone.png": "26b219c282497054e3414ecae9c40ec4",
"assets/assets/images/dog/dog_sprite.png": "a3b2c65a96b56ba9180a1d58300003ab",
"assets/assets/images/dog/kitchen_scene.png": "4b44e91b0d707fb5463ebe8938035ee8",
"assets/assets/images/dog/tail_animation.png": "c3fbe76dff9be54f2b640b3e45412b45",
"assets/assets/images/gear_icon.png": "c63035f7578bb78708e1ffce00c11058",
"assets/assets/images/otters/otter_background.png": "373d52dec4b00845e132f9ba73d102e7",
"assets/assets/images/peach/peach_background.png": "39ce2deaddfdde67724bb55a1eb0010b",
"assets/assets/images/question_icon.png": "8346fb2bc6b646cf9f21099c6f97faf8",
"assets/assets/images/replay_icon.png": "18a393b426d82c6135634560ab7781c6",
"assets/assets/images/shark/blank_fish.png": "0e0a52813e0b8b6fe0eb96c08f90a369",
"assets/assets/images/shark/bubble.png": "93d9a6ad8e933373d30b2abca552e15e",
"assets/assets/images/shark/ocean_scene.png": "b544072f946f0c9cf1ee4fa92d65183c",
"assets/assets/images/shark/shark_sprite.png": "4a83e5e6642b0532da030c3eedd69981",
"assets/assets/images/sound_icon.png": "ae0b3cd01a69080a1e237e7cd9005734",
"assets/assets/images/turtles/turtle_background.png": "3432c9c6856333725057d4ea315779dd",
"assets/assets/images/turtles/turtle_sprite.png": "f6b68605cc697b923c01973912a9c7e7",
"assets/FontManifest.json": "4b83ac5a2f10f6efd83eaab2265025a9",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3cff79d77bfa0fef29848bb07f98cddb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2d403e5ac047cb9a9afa8d4ca3120734",
 
"main.dart.js": "f349ed0cd777c711688bc7ff5f37687e",
"manifest.json": "ede90ca43bf15ca70961ee2ad3670206",
"version.json": "cdf0d1a0ea57c03ad50f03414d93f3f4"
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
