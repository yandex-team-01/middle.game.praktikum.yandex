import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// import { serverRouting } from './src/components/Routing/ServerRouting';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = p => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8');
const { render } = await import('./dist/ssr/entry-server.cjs');

// determine routes to pre-render from src/pages
// const routesToPrerender = fs.readdirSync(toAbsolute('src/pages')).map(file => {
//   const name = file.replace(/\.tsx$/, '').toLowerCase();
//   return name === 'home' ? `/` : `/${name}`;
// });

const routesToPrerender = ['/', '/game'];
// console.log('serverRouting', serverRouting);
console.log('------------------------');
console.log('routesToPrerender', routesToPrerender);

(async () => {
  // pre-render each route...
  for (const url of routesToPrerender) {
    const appHtml = await render(url);
    console.log('appHtml', appHtml);

    const html = template.replace(`<!--ssr-outlet-->`, appHtml);

    const filePath = `dist/client${url === '/' ? '/index' : url}.html`;
    fs.writeFileSync(toAbsolute(filePath), html);
    // console.log('pre-rendered:', filePath);
  }
})();
