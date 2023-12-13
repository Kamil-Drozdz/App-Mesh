import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

import CardChart from '@/components/pages/Dashboard/CardChart';
import { DataOrder } from '@/data/charts/dataOrder';

const CardOrder = () => {
  const { t } = useTranslation();
  const { data, options } = DataOrder();
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  return (
    <CardChart className='basis-1/6' title={t('Orders')} data={data}>
      <Bar data-testid='order-chart' data={data} options={options} />
    </CardChart>
  );
};

export default CardOrder;
