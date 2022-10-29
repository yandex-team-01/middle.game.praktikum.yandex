import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import 'normalize.css';
import './index.module.scss';
import { setupStore } from './store/store';
import { ErrorBoundary } from './components/ErrorBoundary';

const store = setupStore();
import {ErrorPage404} from './pages/404'
import {ErrorPage500} from './pages/500'
import {Forum} from './pages/Forum'


import 'normalize.css'
import './index.module.scss'
import {BackgroundLayout} from './layouts/BackgroundLayout'
import {RegistrationPage} from './pages/RegistrationPage'
import {LoginPage} from './pages/LoginPage';
import {GameScreen} from './pages/GameScreen'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
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
        <Route path="/500" element={<ErrorPage500 />} />
        <Route path="*" element={<ErrorPage404 />} />
        <Route path="/game" element={<BackgroundLayout><GameScreen /></BackgroundLayout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
