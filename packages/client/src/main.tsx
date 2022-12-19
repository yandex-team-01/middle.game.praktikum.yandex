import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider, useSSR } from 'react-i18next';
import { i18next } from '../i18next.config';

import { App } from 'src/App';
import 'normalize.css';
import './index.module.scss';
import { setupStore } from 'src/store/store';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { startServiceWorker } from 'src/utils/serviceWorker';
import { PreloadedState } from 'src/store/types';

import { getEnvSsrAndProd } from './utils/getEnvSsrAndProd';

const defineStore = window.__PRELOADED_STATE__ as PreloadedState;
delete window.__PRELOADED_STATE__;
const store = setupStore(defineStore);

const env = getEnvSsrAndProd();

const DOM = () => {
  const { initialI18nStore, initialLanguage } = window;
  useSSR(initialI18nStore!, initialLanguage!);
  delete window.initialI18nStore;
  delete window.initialLanguage;
  return (
    <React.StrictMode>
      <React.Suspense>
        <BrowserRouter>
          <Provider store={store}>
            <I18nextProvider i18n={i18next}>
              <ErrorBoundary>
                <App />
              </ErrorBoundary>
            </I18nextProvider>
          </Provider>
        </BrowserRouter>
      </React.Suspense>
    </React.StrictMode>
  );
};

if (env.isSSR) {
  ReactDOM.hydrateRoot(document.getElementById('root') as HTMLElement, <DOM />);
} else {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <DOM />
  );
}

startServiceWorker();
