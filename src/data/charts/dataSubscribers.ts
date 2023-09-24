import { useTranslation } from 'react-i18next';

export const DataSubscribers = () => {
	const { t } = useTranslation();
	const data = {
		labels: [t('January'), t('February'), t('March'), t('April'), t('May')],
		datasets: [{ fill: true, label: t('Subscription'), data: [6003, 11580, 13260, 11110, 23520, 11500], backgroundColor: 'rgb(139,92,246,0.5)', borderColor: 'rgb(139,92,246)' }],
	};

	const options = {
		responsive: true,
		scales: {
			y: {
				beginAtZero: true,
				title: {
					display: false,
				},
			},
			x: {
				title: {
					display: false,
				},
			},
		},

		legend: {
			display: false,
		},
	};

	return { data, options };
};
