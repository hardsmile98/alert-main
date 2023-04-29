import main from './main';
import login from './login';
import register from './register';
import profile from './profile';
import alerts from './alerts';
import monitor from './monitor';
import monitors from './monitors';

const locales = {
  main,
  login,
  register,
  profile,
  alerts,
  monitor,
  monitors,
};

const formattedLocales = Object.entries(locales)
  .reduce((acc, [key, value]) => ({
    ...acc,
    ru: {
      ...acc.ru,
      [key]: value.ru,
    },
    en: {
      ...acc.en,
      [key]: value.en,
    },
  }), { ru: {}, en: {} });

export default formattedLocales;
