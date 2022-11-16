const CACHE_NAME = 'huggy-wuggy-cache-v1';

const URLS = [
    '/',
    '/application.tsx',
    '/main.tsx'
]; 

this.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
          console.log("Opened cache");
          return cache.addAll(URLS);
        })
        .catch(err => { 
          console.log(err);
          throw err;
        })
    );
});
this.addEventListener('fetch', event => { 
    event.respondWith( 
        caches.match(event.request) 
            .then(response => { 
                if (response) { 
                    return response; 
                } 

        const fetchRequest = event.request.clone(); 
        return fetch(fetchRequest) 
        .then(response => { 
            if(!response || response.status !== 200 || response.type !== 'basic') { 
              return response; 
            } 

            const responseToCache = response.clone(); 
            caches.open(CACHE_NAME) 
            .then(cache => { 
                cache.put(event.request, responseToCache); 
            }); 
            return response; 
         } 
        ); 
    }) 
  ); 
}); 

this.addEventListener("activate", event => {
    console.log("activate", event);
});
