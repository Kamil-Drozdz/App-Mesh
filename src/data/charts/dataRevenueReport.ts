import { useTranslation } from 'react-i18next';

export const DataRevenueReport = () => {
  const { t } = useTranslation();

  const data = {
    labels: [t('January'), t('February'), t('March'), t('April'), t('May')],
    datasets: [
      {
        label: t('Earnings'),
        data: [1500, 1600, 1700, 1800, 3200],
        backgroundColor: '#8b5cf6',
      },
      {
        label: t('Expense'),
        data: [-1200, -1300, -1400, -1600, -1800],
        backgroundColor: ' #f97316',
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const optionsLine = {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return { options, optionsLine, data };
};
