import { useTranslation } from 'react-i18next';

export const DataOrder = () => {
  const { t } = useTranslation();
  const data = {
    labels: [t('January'), t('February'), t('March'), t('April'), t('May')],
    datasets: [
      {
        fill: true,
        label: t('Orders'),
        data: [600, 580, 560, 0, 520, 500],
        backgroundColor: 'rgb(226,108,27,0.5)',
        borderColor: 'rgb(226,108,27)',
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
