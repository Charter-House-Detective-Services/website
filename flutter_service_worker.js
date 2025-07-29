'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "574f6b827daa5a5bdd37ef454f93f5cf",
"assets/AssetManifest.bin.json": "c19747c37e95a5c8d4eebb6e0f4a0f48",
"assets/AssetManifest.json": "1230fd57a34aced542983386703fa034",
"assets/assets/Arjun%2520Kapse.jpg": "1fd69906c5494ee8ec3fcb1c0926345d",
"assets/assets/Cabin.jpg": "112d051fb3f76a2ef2da1eb106519d8a",
"assets/assets/clients/523479-hdfc-ergo.png": "5a11ac8d6a45795630d7e85e4e44812a",
"assets/assets/clients/acko-seeklogo.png": "a60617ab0c3f57b0a2d8cac2585e4765",
"assets/assets/clients/bajaj-allianz-life-insurance-seeklogo.png": "af37b50299188f36175cf9e67c223a94",
"assets/assets/clients/bajaj-finserv-seeklogo.png": "5ec7b0cf5cf190e4683b382473298b14",
"assets/assets/clients/blue-dart-express-seeklogo.png": "b8a335c3f453776b84ad70e6265807d9",
"assets/assets/clients/cholamandalam-finance-seeklogo.png": "592a4abd4a20528c19fddb6ce3389208",
"assets/assets/clients/digit-insurance-seeklogo.png": "ef1b8cb859c5ee0e0c620a536b6a3c22",
"assets/assets/clients/Godfrey_phillips_logo.png": "4b2a7c26e55555ff88a8639a60cffa70",
"assets/assets/clients/icici-lombard-seeklogo.png": "df8507b8a5bcc155a46772b172da94c0",
"assets/assets/clients/itc-limited-seeklogo.png": "77d464294e5f00310461e03293a54181",
"assets/assets/clients/magma-health-insurance-logo-web142-1727952862.png": "c287a83e577ab5a4b8c96115c4ac6dc3",
"assets/assets/clients/reliance-general-insurance-seeklogo.png": "aef5c3439eadfafff3accf2d37104b89",
"assets/assets/clients/royal-sundaram-seeklogo.png": "0ae8fb38aee6f69e8336839d9c65b71a",
"assets/assets/clients/sigma.png": "d41ab668581aecb6b6aedc1759db95ed",
"assets/assets/clients/tata-aig-seeklogo.png": "2ecff44fe62f8d23f116f2065c03dc7e",
"assets/assets/clients/USGI-logo.png": "f66cd1df4e02e3f132f5a8f713f45523",
"assets/assets/clients/xiaomi-seeklogo.png": "b07928b8ea7697aaabd5a31904f3d709",
"assets/assets/clients/zurich-seeklogo.png": "380b9f7e1142dbd8573a90065f4507ba",
"assets/assets/Conference%2520room.jpg": "35e68899f0ab94e6d191657b3c2caca5",
"assets/assets/IMG20250408195554.jpg": "072d30ec73a7e83e401c3428b6e8ff80",
"assets/assets/IMG_20220220_104615__02.jpg": "6e5fc7314017246067f6a4a142b5cd77",
"assets/assets/IMG_20220220_104615__03.jpg": "c6ce9b5000aa7a261e021ec09ec500fc",
"assets/assets/Lobby%2520Logo.jpg": "11153d240ed0bd219d8bd500cc85686f",
"assets/assets/Main%2520working%2520space.jpg": "3f5ebfad69dfa58d7804587ff6ef7d89",
"assets/assets/Office%2520people%2520working.jpg": "31c39d0fce6d19cdae98e4e558fc42b1",
"assets/assets/Only%2520Logo%2520Orange.png": "a9d846dda00f49f61f7ae73a65a2a509",
"assets/assets/Orange%2520and%2520Blue-Green%2520Logo%2520diff%2520font%2520only%2520ch.png": "e4bbc24e6573a289864554af3467b9eb",
"assets/assets/Orange%2520and%2520Blue-Green%2520Logo%2520diff%2520font.png": "b7e03ae8931421ed158c4c9d4be2dab9",
"assets/assets/Orange%2520and%2520Blue-Green%2520Logo.png": "b884ff2150405aa910aaf9babbbd776e",
"assets/assets/Prasad%2520Kasture.jpeg": "fa4457b375ff405b3765daaf5500f7d0",
"assets/assets/Pratik%2520Kasture.jpg": "d8b9c8d9f42e3af62eb86d8844001179",
"assets/assets/PXL_20221225_015435508.PORTRAIT.jpg": "03b9128901bea09bef0dca7339b1e2fb",
"assets/assets/Rahul%2520Vaidya.jpg": "3811573006fa3818ff853912fc0a7bca",
"assets/assets/Rajesh%2520Gathekar.jpg": "514215117a82e9acdd7b588ed4fc4ecc",
"assets/assets/Service%2520images/Corporate/buildings.jpg": "ea7dac1e88b02c892f0a5890e185ac30",
"assets/assets/Service%2520images/Health/top-view-health-insurance-form-eyeglasses-with-stethoscope-wooden-background-business-healthcare-concept-savings-flat-lay-c.jpg": "80bfdebb28d75ee583eb899d70807315",
"assets/assets/Service%2520images/Marine/ChatGPT%2520Image%2520May%252010,%25202025,%252004_01_15%2520PM.png": "4e26ca19fa7cf2f5bfd17fb88aa47a6f",
"assets/assets/Service%2520images/Marine/ChatGPT%2520Image%2520rotated.png": "87664562a09cd7828575f57456e924b8",
"assets/assets/Service%2520images/Marine/India%2520topo%2520map.jpg": "f281df525c626b1d981286fa9b40064f",
"assets/assets/Service%2520images/Marine/scenic%2520truck.jpg": "ff808fea2c456782fbf424cf5e7824f4",
"assets/assets/Service%2520images/Marine/trucks%2520port.jpg": "2f841f5cfc022e8b88bb2117c037cf17",
"assets/assets/Service%2520images/Marine/trucks.jpg": "5bb94cc9768cdf618fe3bb7c270aa8ae",
"assets/assets/Service%2520images/Motor-MACT/bike%2520crash.jpg": "720ed9e33069f2eb3678b2a05cbe6136",
"assets/assets/Service%2520images/Motor-MACT/car%2520accident.jpg": "5fb8a02c453fcbe1f1949a14a5c16c7c",
"assets/assets/Service%2520images/Motor-MACT/Files.jpg": "d1f78cd7d810e3fb951d4a5ca4ccb0eb",
"assets/assets/Service%2520images/Motor-MACT/gavel.jpg": "add1951694dd61fc5c14672b4974845c",
"assets/assets/Service%2520images/Motor-MACT/hammer%2520and%2520gavel.jpg": "b3a012c241a4db3f2165cfbe5b20a742",
"assets/assets/Service%2520images/social/wheat.jpg": "003c0a200d5ac9594d831205921022aa",
"assets/assets/Suyog%2520Kasture.jpg": "a29f8d6af608852ce07fda15dc48ef5d",
"assets/assets/Vipin%2520Sindra.jpeg": "a6728de6cda3bb6c409d42a4f0c089bc",
"assets/assets/WhatsApp%2520Image%25202025-04-08%2520at%252012.05.23.jpeg": "f8f86a2cf9305c12ef4aaad3a1180c98",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1d4b0b85bd6994adc0f436fd917d9308",
"assets/NOTICES": "60e046115e7d01bfa4a9cfe5fb3ec69d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "e1bb2bed366d9ba57ddabeeb8aeb5a04",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "36d448129ff70f2014a1fc28fdb3b7c8",
"/": "36d448129ff70f2014a1fc28fdb3b7c8",
"main.dart.js": "ff47881957b3da02701eb69ae2e05eb2",
"manifest.json": "c80858525e438d628e190526d779f5e4",
"version.json": "fb0d6e23ca5bfcd36b512234bcb14efa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
