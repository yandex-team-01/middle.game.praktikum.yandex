import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import https from 'https';
import i18nextMiddleware from 'i18next-http-middleware';
import Backend from 'i18next-fs-backend';
import helmet from 'helmet';

import { i18next } from './i18next.config';

import { cookieParser, auth } from './middlewares';
import { dbConnect } from './db';

import { router } from './routing/routing';
import { apiRouter } from './routing/index.router';

dotenv.config();

const app = express();

const key = fs.readFileSync(path.resolve(__dirname, 'keys/key.pem'));
const cert = fs.readFileSync(path.resolve(__dirname, 'keys/cert.pem'));
const server = https.createServer({ key: key, cert: cert }, app);

app.use(cors());
app.use(express.json());

const port = Number(process.env.PORT) || 3001;

app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

async function init() {
  await dbConnect();

  app.use(
    '/assets',
    express.static(path.resolve(__dirname, 'public/client/assets'))
  );

  app.use(cookieParser);
  app.use(auth);
  app.use('/api', apiRouter);

  i18next.use(Backend).init(
    {
      debug: false,
      preload: ['en', 'ru'],
      ns: ['translation'],
      defaultNS: 'translation',
      backend: {
        loadPath: `public/client/locales/{{lng}}/{{ns}}.json`,
        addPath: `public/client/locales/{{lng}}/{{ns}}.missing.json`,
      },
    },
    () => {
      app
        .disable('x-powered-by')
        // @ts-ignore
        .use(i18nextMiddleware.handle(i18next))
        .use(
          '/locales',
          express.static(path.resolve(__dirname, 'public/client/locales'))
        )
        .use(router);
    }
  );

  server.listen(port, () => {
    console.log(` ➜ 🎸 Server is listening on port: ${port}`);
  });
}

init();
