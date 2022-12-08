import type { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
// @ts-ignore
import { render } from '../../client/dist/ssr/entry-server.cjs';
import { renderObject } from './renderObject';
import { defaultStore } from '../constants/defaultStore';
import { allRoutes } from '../constants/allRoutes';

export const renderHtml = (req: Request, res: Response) => {
  if (!allRoutes.find(url => url === req.url)) {
    res.redirect('/404');
    return;
  }

  const html = render(req.url, defaultStore);

  const template = path.resolve(
    __dirname,
    '../../client/dist/client/index.html'
  );

  const htmlString = fs.readFileSync(template, 'utf-8');
  let newString = htmlString.replace('<!--ssr-outlet-->', html);
  newString = newString.replace(
    '<!--ssr-redux-->',
    ` <script>window.__PRELOADED_STATE__ = ${renderObject(
      defaultStore
    )}</script>`
  );

  res.send(newString);
};
