import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { renderObject } from './utils/renderObject';
import { defaultStore } from './defaultStore';

dotenv.config();

//! Временно отключено для тестирования
// import { createClientAndConnect } from './db';

import express from 'express';

// @ts-ignore
import { render } from '../client/dist/ssr/entry-server.cjs';

const app = express();
app.use(cors());

const port = Number(process.env.PORT) || 3001;

//! Временно отключено для тестирования
// createClientAndConnect();

app.get('/', (req, res) => {

  try {
    render(req.url, defaultStore);
  } catch (error) {
    console.log(error);
  }

  const result = render(req.url, defaultStore);


  console.log('defaultStore server', defaultStore);
  const template = path.resolve(__dirname, '../client/dist/client/index.html');
  const htmlString = fs.readFileSync(template, 'utf-8');
  let newString = htmlString.replace('<!--ssr-outlet-->', result);
  newString = newString.replace(
    '<!--ssr-redux-->',
    ` <script>window.__PRELOADED_STATE__ = ${renderObject(
      defaultStore
    )}</script>`
  );
  console.log('newString', newString);

  res.send(newString);
});

app.use(express.static(path.resolve(__dirname, '../client/dist/client')));

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
});
