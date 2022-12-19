import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import https from 'https';
import { cookieParser, auth } from './middlewares';

import i18nextMiddleware from 'i18next-http-middleware';
import Backend from 'i18next-fs-backend';

import { i18next } from './i18next.config';

import express from 'express';
import { router } from './routing/routing';
import { dbConnect } from './db';
import { apiRouter } from './routing/index.router';

// Времено отключено для тестирования
// import { dbConnect } from './db';

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

  // Времено отключено для тестирования
  // await dbConnect();

  app.use(
    '/assets',
    express.static(path.resolve(__dirname, 'public/client/assets'))
  );

  app.use(cookieParser);
  app.use(auth);
  app.use("/api", apiRouter);
  app.use(router);

  const bootstrap = () => {
    app
      .disable('x-powered-by')
      // @ts-ignore
      .use(i18nextMiddleware.handle(i18next))
      .use(
        '/locales',
        express.static(path.resolve(__dirname, 'public/client/locales'))
      )
      .use(function (req, res, next) {
        router(req, res, next);
      });
  };

  i18next
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init(
      {
        defaultNS: 'translation',
        fallbackNS: 'translation',
        ns: ['translation'],
        backend: {
          loadPath: `public/client/locales/{{lng}}/{{ns}}.json`,
          addPath: `public/client/locales/{{lng}}/{{ns}}.missing.json`,
        },
      },
      bootstrap
    );

  server.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
  });
}

init();
