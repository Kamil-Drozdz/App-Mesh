import { useTranslation } from 'react-i18next';

export const DataSession = () => {
  const { t } = useTranslation();
  const data = {
    labels: [t('January'), t('February'), t('March'), t('April'), t('May')],
    datasets: [
      {
        fill: true,
        label: t('Subscription'),
        data: [600, 580, 560, 0, 520, 500],
        backgroundColor: 'rgb(0,92,208)',
        borderColor: 'rgb(100,92,208,27)',
      },
    ],
  };
  const progressData = [
    {
      name: 'Goal',
      value: 100000,
      goal: 200000,
      unit: '$',
    },
    {
      name: 'Users',
      value: 100000,
      goal: 300000,
      unit: 'k',
    },
    {
      name: 'Retention',
      value: 90,
      goal: 100,
      unit: '%',
    },
    {
      name: 'Duration',
      value: 1,
      goal: 2,
      unit: 'yr',
    },
  ];

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

  return { data, options, progressData };
};
