import type { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
// @ts-ignore
import { render } from '../public/ssr/entry-server.cjs';
import { renderObject } from './renderObject';
import { defaultStore } from '../constants/defaultStore';

export const renderHtml = (req: Request, res: Response) => {
  const { html, httpContext, helmetContext } = render(req.url, defaultStore);
  const { helmet } = helmetContext;

  if (httpContext.redirectLocation) {
    res.redirect(httpContext.redirectLocation);
    return;
  }

  const template = path.resolve(__dirname, '../public/client/index.html');

  const htmlString = fs.readFileSync(template, 'utf-8');
  let newString = htmlString.replace('<!--ssr-outlet-->', html);
  newString = newString.replace(
    '<!--ssr-redux-->',
    ` <script>window.__PRELOADED_STATE__ = ${renderObject(
      defaultStore
    )}</script>`
  );
  newString = newString.replace(
    '<head>',
    `<head>
    ${helmet.title.toString()}`
  );

  res.send(newString);
};
