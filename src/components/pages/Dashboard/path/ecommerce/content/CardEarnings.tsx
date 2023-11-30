import CardContainer from '@/common/CardContainer';
import { DataEarnings } from '@/data/charts/dataEarnings';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

const CardEarnings = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const { t } = useTranslation();
  const { data, options } = DataEarnings();

  return (
    <CardContainer className='flex w-full flex-col justify-between md:flex-row '>
      <div className='space-y-3'>
        <div className='font-semibold text-gray-500 dark:text-white'>{t('Earnings')}</div>
        <p className='text-sm dark:text-gray-400'>{t('This month')}</p>
        <span className='font-semibold text-gray-500 dark:text-white'>$4055.56</span>
        <p className='text-sm text-gray-400 dark:text-gray-600'>
          <strong>68.2%</strong> {t('more earnings than last month')}.
        </p>
      </div>
      <div>
        <Pie data-testid='earnings-chart' className='md:h-48' options={options} data={data} />
      </div>
    </CardContainer>
  );
};

export default CardEarnings;
