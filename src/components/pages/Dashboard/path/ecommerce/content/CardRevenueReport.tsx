import { Button } from '@/UI/Button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/UI/Select';
import { Separator } from '@/UI/Separator';
import CardContainer from '@/common/CardContainer';
import { DataRevenueReport } from '@/data/charts/dataRevenueReport';
import { convert } from '@/lib/convert';
import { totalValue } from '@/lib/totalValue';
import useFullScreen from '@/store/FullScreen';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

const CardRevenueReport = () => {
  const { options, optionsLine, data } = DataRevenueReport();
  const { isFullScreen } = useFullScreen();
  const { t } = useTranslation();
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

  return (
    <CardContainer className='flex flex-col md:basis-4/6 md:flex-row'>
      <div className=' px-4 md:w-2/3'>
        <div className='flex items-center justify-between pb-4'>
          <h3 className='dark:text-white'>{t('Revenue Report')}</h3>
        </div>
        <Bar className={`${isFullScreen ? '' : 'w-full max-w-[520px]'}`} data={data} options={options} />
      </div>
      <Separator orientation='vertical' className='dark:bg-gray-600' />
      <div className='flex flex-col items-center justify-start space-y-4 px-4 md:w-1/3'>
        <Select>
          <SelectTrigger className='w-[180px] border-secondary'>
            <SelectValue placeholder={t('Choose Year')} />
          </SelectTrigger>
          <SelectContent className='border-secondary'>
            <SelectGroup>
              <SelectLabel>{t('Choose Year')}</SelectLabel>
              <SelectItem value='2023'>2023</SelectItem>
              <SelectItem value='2022'>2022</SelectItem>
              <SelectItem value='2021'>2021</SelectItem>
              <SelectItem value='2020'>2020</SelectItem>
              <SelectItem value='2019'>2019</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className='text-lg dark:text-white'>$25.852</div>
        <h4 className='dark:text-base dark:text-gray-300'>
          {t('Budget')} {convert(totalValue(data.datasets[0].data))}
        </h4>
        <Line className={`${isFullScreen ? '' : 'w-full max-w-[260px]'}`} options={optionsLine} data={data} />
        <Button className='!bg-buttonPrimary !text-white hover:brightness-110'>{t('Increase Budget')}</Button>
      </div>
    </CardContainer>
  );
};

export default CardRevenueReport;
