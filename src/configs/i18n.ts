import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import mainRu from 'locales/ru/main';
import mainEn from 'locales/en/main';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en', 'ru'],
    resources: {
      en: {
        translation: {
          main: mainEn,
        },
      },

      ru: {
        translation: {
          main: mainRu,
        },
      },
    },
  });

export default i18n;
