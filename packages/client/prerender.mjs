// Файл для того, чтобы создавть все index.html заранее в dist
// Можно сделать auth.html authreg.html и т д, а на сервере заранее отдавать готовые файлы, но пока генерирую index файлы на сервере.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = p => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8');
const { render } = await import('./dist/ssr/entry-server.cjs');

// determine routes to pre-render from src/pages
const routesToPrerender = fs.readdirSync(toAbsolute('src/pages')).map(file => {
  const name = file.replace(/\.tsx$/, '').toLowerCase();
  return name === 'home' ? `/` : `/${name}`;
});

(async () => {
  // pre-render each route...
  for (const url of routesToPrerender) {
    const appHtml = await render(url);

    const html = template.replace(`<!--ssr-outlet-->`, appHtml);

    const filePath = `dist/client${url === '/' ? '/index' : url}.html`;
    fs.writeFileSync(toAbsolute(filePath), html);
    console.log('pre-rendered:', filePath);
  }
})();
