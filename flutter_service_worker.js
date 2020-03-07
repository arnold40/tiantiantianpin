'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "477556aaa4a127da69ae98d7859af3ea",
"/main.dart.js": "77a016438e2df25a5122d19363a9f023",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "cdbb02523aa6dd903948dce2a855a654",
"/.git/config": "1995cb95be7b1806f164189b4280074e",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"/.git/objects/b4/8acf073fb1aa25d5bafd3d10baee6d6e6d9aa4": "0704c1a356893e2eec09b83091c9323d",
"/.git/objects/e2/afadb0137988a6ba530f9d568507271de0d02d": "e7a2e7320b826209f7924fe7b70726b8",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/objects/c8/c5c83a530fe519575e835b22bf6339ae62142a": "a9bda3c49ab2f091a5dd734c4369977c",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/5e/cd1b38a926f88c049b0eae0250b57a0a674dfc": "01760380604fd46503c4f6b52d75f4a5",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/d2/08af2d5879d938bc33363c59a08fb199fb3507": "b0749d7024017682be3a674bf36882c4",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/b0/4da76411a91656a9ef835aaa41b9fe16553105": "43fa77f79e945cfbc24d99e270e6cb08",
"/.git/objects/23/3e80d739e8fb5d18f1acd4af1b5e33f48541fd": "51496299640dd46b79d3e02410459be9",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/objects/7f/5003200918fc224b4346317cc3e91b03f7c3b6": "575828513cda5b49962095d54415ceb9",
"/.git/objects/7f/5cb8ff6baba2f1a2e08bfb55c2ee36dc15da23": "cc3d063ff7cdde1619e1755ce8515978",
"/.git/objects/8e/33694e6bed0fb67bdee3676418c1589ee7dcb4": "f898bde01004005dd2abe375bdce4f91",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
"/.git/logs/HEAD": "46f8000af03068371c77f3b2a04fb7e3",
"/.git/logs/refs/heads/master": "46f8000af03068371c77f3b2a04fb7e3",
"/.git/logs/refs/remotes/origin/master": "afd6e61589c085ee35ab8b4f238748c4",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/refs/heads/master": "6c15146a73f0f9a789acf48aa06c8f45",
"/.git/refs/remotes/origin/master": "93be24447e75be97576a4bf8b67e9aac",
"/.git/index": "8ef8a1ba2059c51bee67fea0b9f74048",
"/.git/COMMIT_EDITMSG": "34cb7eb4bb394b3cf7c92347c4d47f06",
"/.git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"/assets/LICENSE": "1a80be6c5724a31e6f9c9e06dba53b63",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
