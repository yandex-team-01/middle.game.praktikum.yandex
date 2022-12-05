import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from "react-router-dom/server";
import { I18nextProvider } from 'react-i18next';
import { i18next } from '../i18next.config';
import { ErrorBoundary } from './components/ErrorBoundary';
import { setupStore } from './store/store';

import ReactDOMServer from "react-dom/server";


import { App } from './App';

const store = setupStore();


// Вот тут очень важно - на сервере и на клиенте используются разные роутеры прочитай про это
export const render = (url: string) => ReactDOMServer.renderToString(
  <StaticRouter location={url}>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </I18nextProvider>
    </Provider>
  </StaticRouter>
);
