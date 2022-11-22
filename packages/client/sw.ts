const CACHE_NAME = 'huggy-wuggy-cache-v1';

const putIntoAppCache = async (
  request: RequestInfo,
  response: Response
): Promise<void> => {
  const cache = await caches.open(CACHE_NAME);
  return cache.put(request, response);
};

const canBeCached = (request: Request) =>
  request.method === 'GET' &&
  request.url.startsWith('http') &&
  !request.url.includes('sockjs-node');

self.addEventListener('fetch', (event: FetchEvent) => {
  if (!canBeCached(event.request)) {
    return event.respondWith(fetch(event.request));
  }

  event.respondWith(
    (async () => {
      try {
        const fetchedResponse = await fetch(event.request);
        if (fetchedResponse.ok) {
          putIntoAppCache(event.request, fetchedResponse.clone());
        }
        return fetchedResponse;
      } catch {
        return caches.match(event.request) as PromiseLike<Response>;
      }
    })()
  );
});
