import { useTranslation } from 'react-i18next';

export const DataEarnings = () => {
	const { t } = useTranslation();

	const data = {
		labels: [t('App'), t('Service'), t('Products')],
		datasets: [
			{
				label: t('Percentage Share'),
				data: [51, 16, 31],
				backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
				borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
				borderWidth: 1,
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
	};
	return { data, options };
};
