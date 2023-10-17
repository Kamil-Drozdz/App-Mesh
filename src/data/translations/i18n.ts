import { analyticsTranslation } from './analyticsTranslation';
import { ecommerceTranslation } from './ecommerceTranslation';
import { navbarTranslations } from './navbarTranslations';
import i18n from 'i18next';
import _ from 'lodash';
import { initReactI18next } from 'react-i18next';

const resources = _.merge({}, ecommerceTranslation, navbarTranslations, analyticsTranslation);

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
