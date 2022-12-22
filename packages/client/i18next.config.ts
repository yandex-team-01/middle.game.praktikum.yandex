import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

export { i18next };
i18next
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru'],
    saveMissing: true,
    debug: false,
  });
