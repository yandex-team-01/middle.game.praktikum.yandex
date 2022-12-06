import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
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

app.get('/ru/', (req, res) => {
  const result = render(req.url);
  const template = path.resolve(__dirname, '../client/dist/client/index.html');
  const htmlString = fs.readFileSync(template, 'utf-8');
  const newString = htmlString.replace('<!--ssr-outlet-->', result);
  res.send(newString);
});

app.use(express.static(path.resolve(__dirname, '../client/dist/client')));

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
});
