import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import locales from 'locales';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
    supportedLngs: ['en', 'ru'],
    resources: {
      en: {
        translation: locales.en,
      },

      ru: {
        translation: locales.ru,
      },
    },
  });

export default i18n;
