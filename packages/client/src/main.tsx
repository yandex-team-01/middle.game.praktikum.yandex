import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { i18next } from '../i18next.config';

import { App } from 'src/App';
import 'normalize.css';
import './index.module.scss';
import { setupStore, history } from 'src/store/store';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { startServiceWorker } from 'src/utils/serviceWorker';
import { PreloadedState } from 'src/store/types';

import { ConnectedRouter } from 'connected-react-router';

const defineStore = window.__PRELOADED_STATE__ as PreloadedState;
console.log('window defaultStore', window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;
console.log('window delete defaultStore', window.__PRELOADED_STATE__);
const store = setupStore(defineStore);

console.log('history', history);

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <React.Suspense>
      {/* <BrowserRouter> */}
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <I18nextProvider i18n={i18next}>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </I18nextProvider>
        </ConnectedRouter>
      </Provider>
      {/* </BrowserRouter> */}
    </React.Suspense>
  </React.StrictMode>
);

startServiceWorker();
