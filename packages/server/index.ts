import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import express from 'express';
import { router } from './routing/routing';
import { dbConnect } from './db';
import { apiRouter } from './routing/index.router';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = Number(process.env.PORT) || 3001;

async function init() {
  await dbConnect();

  app.use("/api", apiRouter);

  app.use(
    '/assets',
    express.static(path.resolve(__dirname, 'public/client/assets'))
  );
  app.use(
    '/locales',
    express.static(path.resolve(__dirname, 'public/client/locales'))
  );

  app.use(router);

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
  });
}

init();
