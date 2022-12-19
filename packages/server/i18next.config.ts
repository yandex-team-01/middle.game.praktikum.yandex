import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const options: any = {
  fallbackLng: 'en',
  supportedLngs: ['en', 'ru'],
  load: 'languageOnly', // мы предоставляем только en, ru -> нет прочих, таких как en-US, de-DE
  ns: ['translation'],
  defaultNS: 'translation',

  saveMissing: true,
  debug: true,

  interpolation: {
    escapeValue: false, // не нужно для react
    formatSeparator: ',',
    // @ts-ignore
    format: ({ value, format, lng }: any) => {
      if (format === 'uppercase') return value.toUpperCase();
      return value;
    },
  },
  useSuspense: process && !process.release,
};

// для браузера используйте http-бэкэнд для загрузки переводов и детектора LNG браузера
if (process && !process.release) {
  i18n.use(Backend).use(initReactI18next).use(LanguageDetector);
}

// инициализировать, если он еще не инициализирован
if (!i18n.isInitialized) {
  i18n.init(options);
}

export default i18n;
