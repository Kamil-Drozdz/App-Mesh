import { cardsTranslation } from './cardsTranslation';
import { navbarTranslations } from './navbarTranslations';
import i18n from 'i18next';
import _ from 'lodash';
import { initReactI18next } from 'react-i18next';

const resources = _.merge({}, cardsTranslation, navbarTranslations);

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
	resources,
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
