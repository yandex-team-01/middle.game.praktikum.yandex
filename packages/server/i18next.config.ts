import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nextMiddleware from 'i18next-http-middleware';
import Backend from 'i18next-http-backend';

export { i18next };
i18next
  .use(initReactI18next)
  .use(i18nextMiddleware.LanguageDetector)
  .use(Backend)
  .init({
    supportedLngs: ['en', 'ru'],
    fallbackLng: 'en',
    defaultNS: 'translation',
    fallbackNS: 'translation',
    ns: ['translation'],
    backend: {
      loadPath: `public/client/locales/{{lng}}/{{ns}}.json`,
      addPath: `public/client/locales/{{lng}}/{{ns}}.missing.json`,
    },
  });
