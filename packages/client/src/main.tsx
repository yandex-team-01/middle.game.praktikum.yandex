import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  Forum,
  LoginPage,
  RegistrationPage,
  ErrorPage404,
  ErrorPage500,
  Leaderboard,
} from 'src/pages';

import { App } from './App';
import 'normalize.css';
import './index.module.scss';
import BackgroundLayout from './layouts/BackgroundLayout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/forum"
          element={
            <BackgroundLayout>
              <Forum />
            </BackgroundLayout>
          }
        />
        <Route
          path="/login"
          element={
            <BackgroundLayout>
              <LoginPage />
            </BackgroundLayout>
          }
        />
        <Route
          path="/reg"
          element={
            <BackgroundLayout>
              <RegistrationPage />
            </BackgroundLayout>
          }
        />
        <Route
          path="/leaders"
          element={
            <BackgroundLayout>
              <Leaderboard />
            </BackgroundLayout>
          }
        />
        <Route path="/500" element={<ErrorPage500 />} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
