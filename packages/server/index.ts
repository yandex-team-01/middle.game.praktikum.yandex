import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import { router } from './routing/routing';

dotenv.config();

//! Временно отключено для тестирования
// import { createClientAndConnect } from './db';

import express from 'express';

const app = express();
app.use(cors());
const port = Number(process.env.PORT) || 3001;

//! Временно отключено для тестирования
// createClientAndConnect();

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
