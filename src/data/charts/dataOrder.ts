import { useTranslation } from 'react-i18next';

export const DataOrder = () => {
	const { t } = useTranslation();
	const data = {
		labels: [t('January'), t('February'), t('March'), t('April'), t('May')],
		datasets: [
			{
				label: t('Orders'),
				data: [600, 580, 560, 520, 500],
				backgroundColor: 'rgba(253, 194, 0, 0.6)',
			},
		],
	};

	const options = {
		responsive: true,
		scales: {
			y: {
				beginAtZero: true,
				title: {
					display: true,
					text: t('Orders'),
				},
			},
			x: {
				title: {
					display: true,
					text: t('Month'),
				},
			},
		},

		legend: {
			display: false,
		},
	};

	return { data, options };
};
