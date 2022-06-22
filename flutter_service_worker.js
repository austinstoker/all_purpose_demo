'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "690b48f1940c6c436613e979968dae7f",
"assets/assets/audio/words/all_1.mp3": "bea71ccff65417748e93095186f252fb",
"assets/assets/audio/words/all_2.mp3": "1e9e2f6ce2e2c97cf0b6261a62de7056",
"assets/assets/audio/words/all_3.mp3": "38be61513ae8fbfdfe43deb9346503b0",
"assets/assets/audio/words/back_1.mp3": "7f6a92235131915354de12f4d2fdb6f7",
"assets/assets/audio/words/back_2.mp3": "02da566bf07deb1c3549ac8b23953e5e",
"assets/assets/audio/words/back_3.mp3": "dac12110e635f5612027e6ea0365557c",
"assets/assets/audio/words/ball_1.mp3": "266715807136b93fd1aa39ca85fe6690",
"assets/assets/audio/words/ball_2.mp3": "ef8f8039888fdd6787718491c868b51c",
"assets/assets/audio/words/ball_3.mp3": "0765feae71b35b872607df098d303c5a",
"assets/assets/audio/words/call_1.mp3": "84c060bdb289fca214daa82e5743e0c9",
"assets/assets/audio/words/call_2.mp3": "74c8f155e56fd1b4babf22be71640c75",
"assets/assets/audio/words/call_3.mp3": "cf87ece6fb7f6cc7138fe36a7f66fc2e",
"assets/assets/audio/words/deck_1.mp3": "b115c1e083a72881516ee0d243bee9e3",
"assets/assets/audio/words/deck_2.mp3": "d75e06601f6d7ddacf29c098bff1c6b6",
"assets/assets/audio/words/deck_3.mp3": "23f2145adcc79b06e609b407c8ea755d",
"assets/assets/audio/words/dock_1.mp3": "46a8d8fcc6bd2245eab1d4aa347d05b5",
"assets/assets/audio/words/dock_2.mp3": "03472c733a1e9eca4f027e47fba72b32",
"assets/assets/audio/words/dock_3.mp3": "9540278200a1b749121af6e168464a3b",
"assets/assets/audio/words/duck_1.mp3": "c44882ad9beb4b2988b6fbe23d9c4fb8",
"assets/assets/audio/words/duck_2.mp3": "a7ffc6fdcae310139e0c4fd5e9c08645",
"assets/assets/audio/words/duck_3.mp3": "5750f73dfb80a146b8b23495541a9b3e",
"assets/assets/audio/words/fall_1.mp3": "53697030e95afa4b3cb0101cb4a13403",
"assets/assets/audio/words/fall_2.mp3": "21c1451dc2417efeebb27a8131074f0b",
"assets/assets/audio/words/fall_3.mp3": "0eedeb33d4c5263b18e78fd394a69d90",
"assets/assets/audio/words/hall_1.mp3": "0e5424f594c8c31b66193f95a1057926",
"assets/assets/audio/words/hall_2.mp3": "2424e36e6459d83344da9b8bbe297013",
"assets/assets/audio/words/hall_3.mp3": "0404400d3b4b3ef87654a70e63b6bd28",
"assets/assets/audio/words/jack_1.mp3": "d0ef64e77e1a9be7d107b311def096e3",
"assets/assets/audio/words/jack_2.mp3": "644b5f885223b3d4b7b6929b0a3f8f96",
"assets/assets/audio/words/jack_3.mp3": "6c60bd27f79b44f82eca4ed0120316bf",
"assets/assets/audio/words/kick_1.mp3": "a5114aec364c32ee32ded6d6a3bbc319",
"assets/assets/audio/words/kick_2.mp3": "8de7e10f8905ec9a57bc1b2cf3efe922",
"assets/assets/audio/words/kick_3.mp3": "9c68d7c7d761241ada775e630baee065",
"assets/assets/audio/words/lick_1.mp3": "6d4522e476e1470585510e1ef21e652e",
"assets/assets/audio/words/lick_2.mp3": "a011e4bd556c6465b6470eea32461ac1",
"assets/assets/audio/words/lick_3.mp3": "471037443f7176da1ceb1f3b31c5551e",
"assets/assets/audio/words/lock_1.mp3": "8722e5693cfe6aab8d4e26db80175a7a",
"assets/assets/audio/words/lock_2.mp3": "b0dfe4543b9d8670bc54115ee5b1a7d4",
"assets/assets/audio/words/lock_3.mp3": "6514dda3e852825d99a5e6f501c2edcd",
"assets/assets/audio/words/mall_1.mp3": "72bb9082fc263c2a90bfc3da71e18ce0",
"assets/assets/audio/words/mall_2.mp3": "345dae266e5bee95d0aecb5225bb461e",
"assets/assets/audio/words/mall_3.mp3": "2916a2f41b059f0c73ad622af28e5345",
"assets/assets/audio/words/mock_1.mp3": "c8705cdc1d24272124f0e23405077127",
"assets/assets/audio/words/mock_2.mp3": "a8d12f5411bc88a204d68848dee0f790",
"assets/assets/audio/words/mock_3.mp3": "16cb50e07dca243ec0d814bb01a98ee9",
"assets/assets/audio/words/muck_1.mp3": "5787b3d03b28e5036a0a9a6de1f42092",
"assets/assets/audio/words/muck_2.mp3": "bb990234c299cc155a06762109a7fc67",
"assets/assets/audio/words/muck_3.mp3": "b0e9a145ed21b0832df6ef3e28b420ea",
"assets/assets/audio/words/neck_1.mp3": "b42c3f3ea74cb0d8aba766d5358dfd39",
"assets/assets/audio/words/neck_2.mp3": "caec96ca94e678d564d0c65093286c29",
"assets/assets/audio/words/neck_3.mp3": "33b8a084c7593b36fd38b8d50965aa54",
"assets/assets/audio/words/nick_1.mp3": "3dc771830a59109c0d2ea11879b1684c",
"assets/assets/audio/words/nick_2.mp3": "f306a8521c8cab51ae238cd8332f3a0b",
"assets/assets/audio/words/nick_3.mp3": "576550d1d0a68c4d0ba5df0268eb0515",
"assets/assets/audio/words/pack_1.mp3": "0b1c2ae92dec4e1334098766fefa97ad",
"assets/assets/audio/words/pack_2.mp3": "439610431a3fa1af6e3472ddb3cd391e",
"assets/assets/audio/words/pack_3.mp3": "5703d088c60e9188e242238dceda8879",
"assets/assets/audio/words/pick_1.mp3": "cd8474709d4809dca5b020213749c5f2",
"assets/assets/audio/words/pick_2.mp3": "692e99920bf7a6306254973878a1e60f",
"assets/assets/audio/words/pick_3.mp3": "391413e57f80e00df6b9927c634fe1c0",
"assets/assets/audio/words/rack_1.mp3": "71f3f10b73bdccd89a16b1c4442d67f8",
"assets/assets/audio/words/rack_2.mp3": "100494313bc171bbc57306afab4a4084",
"assets/assets/audio/words/rack_3.mp3": "ffb8d54ae0a07b5abe385cf97bb5b9aa",
"assets/assets/audio/words/rock_1.mp3": "b451a66572203e15aca42a8509a71aa2",
"assets/assets/audio/words/rock_2.mp3": "0dcca77d2bc5032d19073910f6b1a6be",
"assets/assets/audio/words/rock_3.mp3": "ff4bbda84ea76e718ae6ecd69e401f24",
"assets/assets/audio/words/sack_1.mp3": "d6dd476370dfbd25a3bab248a38129fe",
"assets/assets/audio/words/sack_2.mp3": "130164a8466349856d776d739948790e",
"assets/assets/audio/words/sack_3.mp3": "2abf5ed40b84e88b8e6af2a90f3cc7fb",
"assets/assets/audio/words/sick_1.mp3": "6a9001c1a6064cbf8469e2ea28736e3d",
"assets/assets/audio/words/sick_2.mp3": "c968c329c29f3ede6e25301dcd4df7db",
"assets/assets/audio/words/sick_3.mp3": "c01843c9d82b740c9cc964668a3a863d",
"assets/assets/audio/words/sock_1.mp3": "f6162fec52fe0118acce435f732cf0ea",
"assets/assets/audio/words/sock_2.mp3": "1a430f5701857b96e42ea0062eec5755",
"assets/assets/audio/words/sock_3.mp3": "d5d3ddb691d022d57158da8a780728f4",
"assets/assets/audio/words/tall_1.mp3": "df200882a20583a2638612c99127b926",
"assets/assets/audio/words/tall_2.mp3": "3bab4b25b4416a699f6df8b93b3f372e",
"assets/assets/audio/words/tall_3.mp3": "5e80bb8e964d992a512ce63476c10d8c",
"assets/assets/audio/words/tick_1.mp3": "b2af6eff94e1043d35beb168d71b1b1e",
"assets/assets/audio/words/tick_2.mp3": "10260ccd11c1a04fb7f45920e67b728f",
"assets/assets/audio/words/tick_3.mp3": "dcbd19368d2f50bd0255e8ee3b1751e3",
"assets/assets/audio/words/wall_1.mp3": "7290d4364ea1e641a5b216284e95cbf3",
"assets/assets/audio/words/wall_2.mp3": "b45911858855a9057502d9a680940cfc",
"assets/assets/audio/words/wall_3.mp3": "5a0ca5ed49f981f66b4e54871a68c164",
"assets/assets/audio/words/yuck_1.mp3": "8e6897ac523ee4079f8337fe44f124ff",
"assets/assets/audio/words/yuck_2.mp3": "22e6bbb8d485c0384bb3867f14ea4abb",
"assets/assets/audio/words/yuck_3.mp3": "4d76c30f9d363caf0a571bbbfaf39c52",
"assets/assets/images/buttons/back_icon.png": "b129ae950cbf368891ebb27799ee71f9",
"assets/assets/images/buttons/sound_icon.png": "ae0b3cd01a69080a1e237e7cd9005734",
"assets/assets/images/scene.png": "1e90b26df2fc6124912b60b9588ecbd1",
"assets/assets/images/sprite_sheets/BottomTongue-SS.png": "185ffb254efd73aca7852a40604acb42",
"assets/assets/images/sprite_sheets/ColorChange-SS.png": "f05232cff18e3bc5fdb838160cfca46f",
"assets/assets/images/sprite_sheets/MiddleTongue-SS.png": "77281a9cbab4f2e86f704193f483bc37",
"assets/assets/images/sprite_sheets/TopTongue-SS.png": "fb60ad81905dc844a8eae37adc5798c9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "04e29c9d1da2444ff50e4bd0ce100e84",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a0fa2796c922208582352e2bcc4f0cd9",
 
"main.dart.js": "25280b97869bf6d56e014cc60a52e5b8",
"manifest.json": "ea8b7bf41d9ae67f4e564e6b5f63d8a0",
"version.json": "a0fb8654cf0614e18d6a32577cded253"
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
