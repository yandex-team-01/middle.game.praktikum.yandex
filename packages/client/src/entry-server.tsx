import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { I18nextProvider } from 'react-i18next';
import { i18next } from '../i18next.config';
import { ErrorBoundary } from './components/ErrorBoundary';
import { setupStore } from './store/store';

import ReactDOMServer from 'react-dom/server';

import { App } from './App';

const store = setupStore();

export const render = (url: string) => {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <React.Suspense>
        <StaticRouter location={url}>
          <Provider store={store}>
            <I18nextProvider i18n={i18next}>
              <ErrorBoundary>
                <App />
              </ErrorBoundary>
            </I18nextProvider>
          </Provider>
        </StaticRouter>
      </React.Suspense>
    </React.StrictMode>
  );
};
