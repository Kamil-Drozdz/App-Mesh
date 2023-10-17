import CardChart from '@/common/CardChart';
import { DataProfit } from '@/data/charts/dataProfit';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

const CardProfit = () => {
  const data = DataProfit();
  const { t } = useTranslation();
  ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

  return (
    <CardChart className='basis-1/6' title={t('Profit')} data={data}>
      <Line className='md:max-w-[300px] ' data={data} />
    </CardChart>
  );
};

export default CardProfit;
