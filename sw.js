const C='sg-v2';
const ASSETS=['./','index.html','manifest.json','icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('sg-')&&k!==C).map(k=>caches.delete(k)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{if(x.ok&&new URL(e.request.url).origin===self.location.origin){const k=x.clone();caches.open(C).then(c=>c.put(e.request,k))}return x}).catch(()=>caches.match('index.html'))))});
