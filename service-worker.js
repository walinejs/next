const prefix = `workbox`;self.addEventListener("install",(()=>self.skipWaiting())),self.addEventListener("activate",(()=>{const e=[prefix,"precache-v2","undefined"!=typeof registration?registration.scope:""].filter((e=>e&&e.length>0)).join("-");self.caches.open(e).then((e=>e.keys())).then((e=>e.forEach((e=>cache.delete(e))))).then((()=>{self.clients.claim().then((()=>{})).then((()=>self.registration.unregister())).then((()=>self.clients.matchAll())).then((e=>e.forEach((e=>e.navigate(e.url)))))}))}));