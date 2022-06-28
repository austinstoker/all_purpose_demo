'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e5c2236be523d21899ae5cf9eb6aa388",
"assets/assets/audio/cut.m4a": "b3df809d9ee08f81c94922d19d7e0997",
"assets/assets/audio/exactly_right.m4a": "88c6193027457d1ae765c863b3f37c1f",
"assets/assets/audio/fly_audio/all_1.mp3": "bea71ccff65417748e93095186f252fb",
"assets/assets/audio/fly_audio/all_2.mp3": "1e9e2f6ce2e2c97cf0b6261a62de7056",
"assets/assets/audio/fly_audio/all_3.mp3": "38be61513ae8fbfdfe43deb9346503b0",
"assets/assets/audio/fly_audio/back_1.mp3": "7f6a92235131915354de12f4d2fdb6f7",
"assets/assets/audio/fly_audio/back_2.mp3": "02da566bf07deb1c3549ac8b23953e5e",
"assets/assets/audio/fly_audio/back_3.mp3": "dac12110e635f5612027e6ea0365557c",
"assets/assets/audio/fly_audio/ball_1.mp3": "266715807136b93fd1aa39ca85fe6690",
"assets/assets/audio/fly_audio/ball_2.mp3": "ef8f8039888fdd6787718491c868b51c",
"assets/assets/audio/fly_audio/ball_3.mp3": "0765feae71b35b872607df098d303c5a",
"assets/assets/audio/fly_audio/call_1.mp3": "84c060bdb289fca214daa82e5743e0c9",
"assets/assets/audio/fly_audio/call_2.mp3": "74c8f155e56fd1b4babf22be71640c75",
"assets/assets/audio/fly_audio/call_3.mp3": "cf87ece6fb7f6cc7138fe36a7f66fc2e",
"assets/assets/audio/fly_audio/deck_1.mp3": "b115c1e083a72881516ee0d243bee9e3",
"assets/assets/audio/fly_audio/deck_2.mp3": "d75e06601f6d7ddacf29c098bff1c6b6",
"assets/assets/audio/fly_audio/deck_3.mp3": "23f2145adcc79b06e609b407c8ea755d",
"assets/assets/audio/fly_audio/dock_1.mp3": "46a8d8fcc6bd2245eab1d4aa347d05b5",
"assets/assets/audio/fly_audio/dock_2.mp3": "03472c733a1e9eca4f027e47fba72b32",
"assets/assets/audio/fly_audio/dock_3.mp3": "9540278200a1b749121af6e168464a3b",
"assets/assets/audio/fly_audio/duck_1.mp3": "c44882ad9beb4b2988b6fbe23d9c4fb8",
"assets/assets/audio/fly_audio/duck_2.mp3": "a7ffc6fdcae310139e0c4fd5e9c08645",
"assets/assets/audio/fly_audio/duck_3.mp3": "5750f73dfb80a146b8b23495541a9b3e",
"assets/assets/audio/fly_audio/fall_1.mp3": "53697030e95afa4b3cb0101cb4a13403",
"assets/assets/audio/fly_audio/fall_2.mp3": "21c1451dc2417efeebb27a8131074f0b",
"assets/assets/audio/fly_audio/fall_3.mp3": "0eedeb33d4c5263b18e78fd394a69d90",
"assets/assets/audio/fly_audio/hall_1.mp3": "0e5424f594c8c31b66193f95a1057926",
"assets/assets/audio/fly_audio/hall_2.mp3": "2424e36e6459d83344da9b8bbe297013",
"assets/assets/audio/fly_audio/hall_3.mp3": "0404400d3b4b3ef87654a70e63b6bd28",
"assets/assets/audio/fly_audio/jack_1.mp3": "d0ef64e77e1a9be7d107b311def096e3",
"assets/assets/audio/fly_audio/jack_2.mp3": "644b5f885223b3d4b7b6929b0a3f8f96",
"assets/assets/audio/fly_audio/jack_3.mp3": "6c60bd27f79b44f82eca4ed0120316bf",
"assets/assets/audio/fly_audio/kick_1.mp3": "a5114aec364c32ee32ded6d6a3bbc319",
"assets/assets/audio/fly_audio/kick_2.mp3": "8de7e10f8905ec9a57bc1b2cf3efe922",
"assets/assets/audio/fly_audio/kick_3.mp3": "9c68d7c7d761241ada775e630baee065",
"assets/assets/audio/fly_audio/lick_1.mp3": "6d4522e476e1470585510e1ef21e652e",
"assets/assets/audio/fly_audio/lick_2.mp3": "a011e4bd556c6465b6470eea32461ac1",
"assets/assets/audio/fly_audio/lick_3.mp3": "471037443f7176da1ceb1f3b31c5551e",
"assets/assets/audio/fly_audio/lock_1.mp3": "8722e5693cfe6aab8d4e26db80175a7a",
"assets/assets/audio/fly_audio/lock_2.mp3": "b0dfe4543b9d8670bc54115ee5b1a7d4",
"assets/assets/audio/fly_audio/lock_3.mp3": "6514dda3e852825d99a5e6f501c2edcd",
"assets/assets/audio/fly_audio/mall_1.mp3": "72bb9082fc263c2a90bfc3da71e18ce0",
"assets/assets/audio/fly_audio/mall_2.mp3": "345dae266e5bee95d0aecb5225bb461e",
"assets/assets/audio/fly_audio/mall_3.mp3": "2916a2f41b059f0c73ad622af28e5345",
"assets/assets/audio/fly_audio/mock_1.mp3": "c8705cdc1d24272124f0e23405077127",
"assets/assets/audio/fly_audio/mock_2.mp3": "a8d12f5411bc88a204d68848dee0f790",
"assets/assets/audio/fly_audio/mock_3.mp3": "16cb50e07dca243ec0d814bb01a98ee9",
"assets/assets/audio/fly_audio/muck_1.mp3": "5787b3d03b28e5036a0a9a6de1f42092",
"assets/assets/audio/fly_audio/muck_2.mp3": "bb990234c299cc155a06762109a7fc67",
"assets/assets/audio/fly_audio/muck_3.mp3": "b0e9a145ed21b0832df6ef3e28b420ea",
"assets/assets/audio/fly_audio/neck_1.mp3": "b42c3f3ea74cb0d8aba766d5358dfd39",
"assets/assets/audio/fly_audio/neck_2.mp3": "caec96ca94e678d564d0c65093286c29",
"assets/assets/audio/fly_audio/neck_3.mp3": "33b8a084c7593b36fd38b8d50965aa54",
"assets/assets/audio/fly_audio/nick_1.mp3": "3dc771830a59109c0d2ea11879b1684c",
"assets/assets/audio/fly_audio/nick_2.mp3": "f306a8521c8cab51ae238cd8332f3a0b",
"assets/assets/audio/fly_audio/nick_3.mp3": "576550d1d0a68c4d0ba5df0268eb0515",
"assets/assets/audio/fly_audio/pack_1.mp3": "0b1c2ae92dec4e1334098766fefa97ad",
"assets/assets/audio/fly_audio/pack_2.mp3": "439610431a3fa1af6e3472ddb3cd391e",
"assets/assets/audio/fly_audio/pack_3.mp3": "5703d088c60e9188e242238dceda8879",
"assets/assets/audio/fly_audio/pick_1.mp3": "cd8474709d4809dca5b020213749c5f2",
"assets/assets/audio/fly_audio/pick_2.mp3": "692e99920bf7a6306254973878a1e60f",
"assets/assets/audio/fly_audio/pick_3.mp3": "391413e57f80e00df6b9927c634fe1c0",
"assets/assets/audio/fly_audio/rack_1.mp3": "71f3f10b73bdccd89a16b1c4442d67f8",
"assets/assets/audio/fly_audio/rack_2.mp3": "100494313bc171bbc57306afab4a4084",
"assets/assets/audio/fly_audio/rack_3.mp3": "ffb8d54ae0a07b5abe385cf97bb5b9aa",
"assets/assets/audio/fly_audio/rock_1.mp3": "b451a66572203e15aca42a8509a71aa2",
"assets/assets/audio/fly_audio/rock_2.mp3": "0dcca77d2bc5032d19073910f6b1a6be",
"assets/assets/audio/fly_audio/rock_3.mp3": "ff4bbda84ea76e718ae6ecd69e401f24",
"assets/assets/audio/fly_audio/sack_1.mp3": "d6dd476370dfbd25a3bab248a38129fe",
"assets/assets/audio/fly_audio/sack_2.mp3": "130164a8466349856d776d739948790e",
"assets/assets/audio/fly_audio/sack_3.mp3": "2abf5ed40b84e88b8e6af2a90f3cc7fb",
"assets/assets/audio/fly_audio/sick_1.mp3": "6a9001c1a6064cbf8469e2ea28736e3d",
"assets/assets/audio/fly_audio/sick_2.mp3": "c968c329c29f3ede6e25301dcd4df7db",
"assets/assets/audio/fly_audio/sick_3.mp3": "c01843c9d82b740c9cc964668a3a863d",
"assets/assets/audio/fly_audio/sock_1.mp3": "f6162fec52fe0118acce435f732cf0ea",
"assets/assets/audio/fly_audio/sock_2.mp3": "1a430f5701857b96e42ea0062eec5755",
"assets/assets/audio/fly_audio/sock_3.mp3": "d5d3ddb691d022d57158da8a780728f4",
"assets/assets/audio/fly_audio/tall_1.mp3": "df200882a20583a2638612c99127b926",
"assets/assets/audio/fly_audio/tall_2.mp3": "3bab4b25b4416a699f6df8b93b3f372e",
"assets/assets/audio/fly_audio/tall_3.mp3": "5e80bb8e964d992a512ce63476c10d8c",
"assets/assets/audio/fly_audio/tick_1.mp3": "b2af6eff94e1043d35beb168d71b1b1e",
"assets/assets/audio/fly_audio/tick_2.mp3": "10260ccd11c1a04fb7f45920e67b728f",
"assets/assets/audio/fly_audio/tick_3.mp3": "dcbd19368d2f50bd0255e8ee3b1751e3",
"assets/assets/audio/fly_audio/wall_1.mp3": "7290d4364ea1e641a5b216284e95cbf3",
"assets/assets/audio/fly_audio/wall_2.mp3": "b45911858855a9057502d9a680940cfc",
"assets/assets/audio/fly_audio/wall_3.mp3": "5a0ca5ed49f981f66b4e54871a68c164",
"assets/assets/audio/fly_audio/yuck_1.mp3": "8e6897ac523ee4079f8337fe44f124ff",
"assets/assets/audio/fly_audio/yuck_2.mp3": "22e6bbb8d485c0384bb3867f14ea4abb",
"assets/assets/audio/fly_audio/yuck_3.mp3": "4d76c30f9d363caf0a571bbbfaf39c52",
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
"assets/assets/branding/BrandName.png": "f6ba25a07b23e6b5b243f38537e5818f",
"assets/assets/branding/Butterfly.png": "58d34f3a2408325c2955ada9b861e435",
"assets/assets/branding/ButterflyMed.png": "91d8cb7e98e347e903c313e8b3bdcb1b",
"assets/assets/branding/GB_Brand.png": "c258842a179001602812619ce2e31276",
"assets/assets/branding/Homepage-Image.jpg": "80bd6ed5b4f3a8f230a6c2bafdc96cf0",
"assets/assets/branding/HS_Brand.png": "54f1b1afcc5ba6459f22dfd0fa428f1f",
"assets/assets/branding/Name.svg": "ec9f6d1b1c02f0dda890ed1f0bd75615",
"assets/assets/fonts/primer_print.ttf": "f4b9a102b98c7f85fa6596b6c5609cd3",
"assets/assets/hearts_and_hands_icon.png": "1c38bb6965f172b4fc9949d99ad2f658",
"assets/assets/images/back_icon.png": "b129ae950cbf368891ebb27799ee71f9",
"assets/assets/images/dog/blank_bone.png": "26b219c282497054e3414ecae9c40ec4",
"assets/assets/images/dog/dog_sprite.png": "a3b2c65a96b56ba9180a1d58300003ab",
"assets/assets/images/dog/jumping_dog.png": "a20699b3f9e10f19198e6b7661488e22",
"assets/assets/images/dog/kitchen_scene.png": "4b44e91b0d707fb5463ebe8938035ee8",
"assets/assets/images/dog/tail_animation.png": "c3fbe76dff9be54f2b640b3e45412b45",
"assets/assets/images/fly/Bottom-Fly.png": "a995290a0100ab4322a3789523e932d0",
"assets/assets/images/fly/BottomTongue-SS.png": "185ffb254efd73aca7852a40604acb42",
"assets/assets/images/fly/Chameleon-Mouth-Closed.png": "e1b63a4b1136d3cdfaa415598c418fae",
"assets/assets/images/fly/ColorChange-SS.png": "f05232cff18e3bc5fdb838160cfca46f",
"assets/assets/images/fly/Middle-Fly.png": "2d3c143a7267f4ff902ae8eae9eebac2",
"assets/assets/images/fly/MiddleTongue-SS.png": "77281a9cbab4f2e86f704193f483bc37",
"assets/assets/images/fly/scene.png": "1e90b26df2fc6124912b60b9588ecbd1",
"assets/assets/images/fly/Top-Fly.png": "1bde0e297afcdbfcffca718d859771a5",
"assets/assets/images/fly/TopTongue-SS.png": "fb60ad81905dc844a8eae37adc5798c9",
"assets/assets/images/gear_icon.png": "c63035f7578bb78708e1ffce00c11058",
"assets/assets/images/otters/otter_background.png": "373d52dec4b00845e132f9ba73d102e7",
"assets/assets/images/peaches/basket.png": "4bd35bd6f60d0af0461d22ea2872feac",
"assets/assets/images/peaches/basket_back.png": "45730ff21005a21664f3c51526fe6980",
"assets/assets/images/peaches/peach1.png": "bb6add71e94bb5112d67a1e86c3db5ef",
"assets/assets/images/peaches/peach2.png": "afc4e02b1dabc8911289e37ad2ee586e",
"assets/assets/images/peaches/peach3.png": "786c54608b6d37b20e75930de793b32a",
"assets/assets/images/peaches/peach_background.png": "0a5a800d176cd0424fe3ff3884742963",
"assets/assets/images/pig/Background.png": "42766ccc07d697b4499706a7ac2465dc",
"assets/assets/images/pig/Bb-Pig-1-Cuddle.png": "a212e43557a576c6d553d833c1a95a67",
"assets/assets/images/pig/Bb-Pig-1.png": "9097e73325f8d1d34f32f529bfd0d572",
"assets/assets/images/pig/Bb-Pig-2-Cuddle.png": "a31a43e80a0d205d142b9ddccf2baacb",
"assets/assets/images/pig/Bb-Pig-2.png": "8360313407ed3dc899d4ff0b6d3344cc",
"assets/assets/images/pig/Bb-Pig-3-Cuddle.png": "00c81b4c3de585f1cb35ef30151b46bd",
"assets/assets/images/pig/Bb-Pig-3.png": "7c9eefb1f646bf24d4fe48ca7c0e25ea",
"assets/assets/images/pig/Mom-Pig-1-Cuddle.png": "01fed0dc2a5acf13172a501e5dd4cc4f",
"assets/assets/images/pig/Mom-Pig-1.png": "60fddda03f9a9aaa94d177c40a82ed33",
"assets/assets/images/pig/Mom-Pig-2-Cuddle.png": "220912ef4f41ed6719b6ccff532b0b4a",
"assets/assets/images/pig/Mom-Pig-2.png": "2e3aae04035f5ed90fdbcfbff130f89c",
"assets/assets/images/pig/Mom-Pig-3-Cuddle.png": "0cb5ac2dcfce4de9f0dfd31210bb2441",
"assets/assets/images/pig/Mom-Pig-3.png": "41374141c3c2b8f0626fa80937aed808",
"assets/assets/images/pig/Mom-Pig-4-Cuddle.png": "354b82881df50e503e2d9a6eb3fa6c9e",
"assets/assets/images/pig/Mom-Pig-4.png": "1d96b1657e23814c18e92fc764ac5cb2",
"assets/assets/images/pig/Mom-Pig-5-Cuddle.png": "a1f6044fae85a986287ec34e574e9ef2",
"assets/assets/images/pig/Mom-Pig-5.png": "e8fec90daab46bf9cc7f93f890609ede",
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
"assets/assets/media_type_icons/Audio.png": "7d0059b60cd9602a6f0359c30785b152",
"assets/assets/media_type_icons/Book.png": "e85361b55fbfb766467caf4c968f4fe2",
"assets/assets/media_type_icons/Document.png": "929ea01038296462359d692cee443889",
"assets/assets/media_type_icons/Video.png": "bef99f44e6464ce4c0ee2236a5414e83",
"assets/assets/music_icon.png": "7156fdfed6a2b3a03ca5b5672f4aa53d",
"assets/assets/subject_icons/book_icon.png": "679f4f79fac7cb1e78f21c9bb2e119c8",
"assets/assets/subject_icons/fav_icon.png": "757d8b53a2805e018e5f63bc74089751",
"assets/assets/subject_icons/hearts_and_hands_icon.png": "867a469b7ee3a8d15c80493c3e661fd1",
"assets/assets/subject_icons/help_icon.png": "bb27bbc9a9130886cf2a30749d17bda1",
"assets/assets/subject_icons/info_icon.png": "8bfb2b6c121c513de832de588034675e",
"assets/assets/subject_icons/math_icon.png": "612d3de764fce7175fd9af1225bce7ad",
"assets/assets/subject_icons/science_icon.png": "ee821838eee9831b9351d5d279951b0a",
"assets/FontManifest.json": "4b83ac5a2f10f6efd83eaab2265025a9",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8d6013b5f13727215d90d561f36be1c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
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
"icons/Icon_192.png": "e97bdae81cc77c81519f8b8debe110fa",
"icons/Icon_512.png": "59e8e27eab4c89d526fa08dc5c37335b",
"Icon_16.png": "7ece8a5714b93effa02d6248afa44665",
"index.html": "9460210296d9249e5c6b8fab1fc9ddbf",
 
"main.dart.js": "0b3be75eada1ebb34aa93a24c8b6e245",
"manifest.json": "445d0a3dc6801774979ec43fc42aa107",
"version.json": "a9c7ca6a20d4848184402710f3a594ca"
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
