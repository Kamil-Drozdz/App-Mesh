import i18n from 'i18next';
import merge from 'lodash/merge';
import { initReactI18next } from 'react-i18next';

import { analyticsTranslation } from './analyticsTranslation';
import { ecommerceTranslation } from './ecommerceTranslation';
import { navbarTranslations } from './navbarTranslations';

const resources = merge({}, ecommerceTranslation, navbarTranslations, analyticsTranslation);

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
