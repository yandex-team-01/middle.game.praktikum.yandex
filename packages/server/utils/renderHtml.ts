import type { Request, Response } from 'express'; 
import { Resource } from 'i18next'; 
import path from 'path'; 
import fs from 'fs'; 
 
// @ts-ignore 
import { render } from '../public/ssr/entry-server.cjs'; 
import { renderObject } from './renderObject'; 
import { defaultStore } from '../constants/defaultStore'; 
 
export const renderHtml = (req: Request, res: Response) => { 
  const store = defaultStore; 
 
  if (res.locals.user) { 
    store.auth.checkAuth = true; 
    store.auth.auth = true; 
    store.auth.user = res.locals.user; 
  } 
 
  const { html, httpContext } = render(req.url, store, req.i18n); 
 
  if (httpContext.redirectLocation) { 
    res.redirect(httpContext.redirectLocation); 
    return; 
  } 
 
  const initialLanguage = req.i18n.languages[0]; 
 
  // Заполняем initialI18nStore только необходимым словарем 
  const initialI18nStore: Resource = {}; 
  const usedNamespaces = req.i18n.reportNamespaces.getUsedNamespaces(); 
 
  req.i18n.languages.forEach(language => { 
    initialI18nStore[language] = {}; 
 
    usedNamespaces.forEach(namespace => { 
      initialI18nStore[language][namespace] = 
        req.i18n.services.resourceStore.data[language][namespace]; 
    }); 
  }); 
 
  const template = path.resolve(__dirname, '../public/client/index.html'); 
 
  const htmlString = fs.readFileSync(template, 'utf-8'); 
  let newString = htmlString.replace('<!--ssr-outlet-->', html); 
  newString = newString.replace( 
    '<!--ssr-redux-->', 
    `  
    <script> 
    window.__PRELOADED_STATE__ = ${renderObject(store)}; 
    window.initialI18nStore = JSON.parse('${JSON.stringify(initialI18nStore)}'); 
    window.initialLanguage = '${initialLanguage}'; 
    </script> 
    ` 
  ); 
 
  res.send(newString); 
};
