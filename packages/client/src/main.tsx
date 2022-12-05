import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { i18next } from '../i18next.config';

import { App } from './App';
import 'normalize.css';
import './index.module.scss';
import { setupStore } from './store/store';
import { ErrorBoundary } from './components/ErrorBoundary';
import { startServiceWorker } from './utils/serviceWorker';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
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

startServiceWorker();
