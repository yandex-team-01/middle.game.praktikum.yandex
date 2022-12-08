import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { I18nextProvider } from 'react-i18next';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { setupStore } from 'src/store/store';
import { App } from 'src/App';
import { i18next } from '../i18next.config';

import 'normalize.css';
import './index.module.scss';

import ReactDOMServer from 'react-dom/server';
import { PreloadedState } from 'src/store/types';

export const render = (url: string, defaultStore: PreloadedState) => {
  const store = setupStore(defaultStore);

  console.log('defaultStore', defaultStore);

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
