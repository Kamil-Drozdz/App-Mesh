import { useTranslation } from 'react-i18next';

export const DataProfit = () => {
	const { t } = useTranslation();
	const data = {
		labels: [t('January'), t('February'), t('March'), t('April'), t('May')],
		responsive: true,

		datasets: [
			{
				label: t('Orders'),
				data: [640, 1200, 1450, 1600, 1650],
				backgroundColor: 'rgba(46, 238, 7, 0.6)',
			},
		],
	};
	return data;
};
