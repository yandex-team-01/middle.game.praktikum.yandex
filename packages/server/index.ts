import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import https from 'https';
import { cookieParser, auth } from './middlewares';

import express from 'express';
import { router } from './routing/routing';
import { dbConnect } from './db';
import { apiRouter } from './routing/index.router';

dotenv.config();

const key = fs.readFileSync('../../key.pem');

const cert = fs.readFileSync('../../cert.pem');

const app = express();
const server = https.createServer({ key: key, cert: cert }, app);
app.use(cors());
app.use(express.json());

const port = Number(process.env.PORT) || 3001;

async function init() {
  await dbConnect();

  app.use(
    '/assets',
    express.static(path.resolve(__dirname, 'public/client/assets'))
  );
  app.use(
    '/locales',
    express.static(path.resolve(__dirname, 'public/client/locales'))
  );

  app.use(cookieParser);
  app.use(auth);
  app.use("/api", apiRouter);
  app.use(router);
  app.get('/', (_req, res) => {
    res.send('this is an secure server');
  });

  server.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
  });
}

init();
