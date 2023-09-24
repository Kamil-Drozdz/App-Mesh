import { useTranslation } from 'react-i18next';

export const DataSales = () => {
	const { t } = useTranslation();
	const data = {
		labels: [t('January'), t('February'), t('March'), t('April'), t('May')],
		datasets: [
			{
				label: '',
				data: [2, 9, 3, 5, 2],
				backgroundColor: 'rgba(13,212,220, 0.2)',
				borderColor: 'rgba(13,212,220, 1)',
				borderWidth: 1,
			},
			{
				label: '',
				data: [9, 3, 3, 9, 4],
				backgroundColor: 'rgb(144,129,223, 0.2)',
				borderColor: 'rgb(144,129,223, 1)',
				borderWidth: 1,
			},
		],
	};
	const options = {
		scales: {
			y: {
				title: {
					display: false,
				},
				ticks: {
					display: false,
				},
			},

			x: {
				title: {
					display: false,
				},
				ticks: {
					display: false,
				},
			},
		},
		plugins: {
			responsive: true,
			legend: {
				display: false,
			},
		},
	};

	return { data, options };
};
