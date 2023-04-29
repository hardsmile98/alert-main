import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import {
  main,
  login,
  register,
} from 'locales';

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
        translation: {
          main: main.en,
          login: login.en,
          register: register.en,
        },
      },

      ru: {
        translation: {
          main: main.ru,
          login: login.ru,
          register: register.ru,
        },
      },
    },
  });

export default i18n;
