import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { i18next } from '../i18next.config';
import { ErrorBoundary } from './components/ErrorBoundary';
import { setupStore } from './store/store';

import { renderToString } from 'react-dom/server'
import { App } from './App'

const store = setupStore();

// @ts-ignore
export const render = () => renderToString(
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
)