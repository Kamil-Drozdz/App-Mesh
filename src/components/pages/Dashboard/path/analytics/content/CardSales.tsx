import CardContainer from '@/common/CardContainer';
import { DataSales } from '@/data/charts/dataSales';
import { IconSize } from '@/lib/enums/iconSize';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { BiDotsVertical } from 'react-icons/bi';

const CardSales = () => {
  const { data, options } = DataSales();
  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
  return (
    <CardContainer className='basis-1/3 '>
      <div className='flex w-full items-start justify-between'>
        <div>
          <div className='dark:text-white'>Sales</div>
          <p>Last 6 months</p>
        </div>
        <BiDotsVertical size={IconSize.basic} />
      </div>
      <Radar data-testid='sales-chart' className='max-h-[350px]' data={data} options={options} />
    </CardContainer>
  );
};

export default CardSales;
