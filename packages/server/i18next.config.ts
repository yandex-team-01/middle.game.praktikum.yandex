import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

interface FormatProps {
  value: string;
  format: string;
  lng?: string;
}

const options: any = {
  fallbackLng: 'en',
  supportedLngs: ['en', 'ru'],
  load: 'languageOnly', // мы предоставляем только en, ru -> нет прочих, таких как en-US, de-DE
  ns: ['translation'],
  defaultNS: 'translation',

  saveMissing: true,
  debug: false,

  interpolation: {
    escapeValue: false, // не нужно для react
    formatSeparator: ',',
    format: ({ value, format }: FormatProps) => {
      if (format === 'uppercase') return value.toUpperCase();
      return value;
    },
  },
  useSuspense: process && !process.release,
};

// для браузера используйте http-бэкэнд для загрузки переводов и детектора LNG браузера
if (process && !process.release) {
  i18next.use(Backend).use(initReactI18next);
}

// инициализировать, если он еще не инициализирован
if (!i18next.isInitialized) {
  i18next.init(options);
}

export { i18next };
