const e = 'huggy-wuggy-cache-v1',
  s = async (c, t) => (await caches.open(e)).put(c, t),
  h = c =>
    c.method === 'GET' &&
    c.url.startsWith('http') &&
    !c.url.includes('sockjs-node');
self.addEventListener('fetch', c => {
  if (!h(c.request)) return c.respondWith(fetch(c.request));
  c.respondWith(
    (async () => {
      try {
        const t = await fetch(c.request);
        return t.ok && s(c.request, t.clone()), t;
      } catch {
        return caches.match(c.request);
      }
    })()
  );
});
