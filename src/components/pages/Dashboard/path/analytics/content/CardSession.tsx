import { Chart as ChartJS, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';
import CardContainer from '@/common/CardContainer';
import ProgressBar from '@/common/ProgressBar';
import { DataSession } from '@/data/charts/dataSession';

const CardSession = () => {
  const { data, options, progressData } = DataSession();
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  return (
    <CardContainer className='md:basis-1/2 '>
      <div className='flex flex-col items-stretch justify-center space-y-4 md:flex-row md:space-y-0'>
        <div className='flex basis-1/2 flex-col justify-between space-y-6'>
          <div>
            <h3 className='text-2xl font-semibold dark:text-white'>2.7k</h3>
            <span>Avg Sessions</span>
            <span className='dark:text-green-500'>+5.2%</span> vs last 7 days
          </div>
          <Button className='!w-full !bg-buttonPrimary !text-white hover:dark:!brightness-110'>View Details</Button>
        </div>
        <div className='flex basis-1/2 flex-col items-center justify-center'>
          <h4 className='w-full dark:text-right'>Last 7 days</h4>
          <Bar className='md:max-w-[300px]' data={data} options={options} />
        </div>
      </div>
      <Separator />
      <div className='flex flex-wrap dark:text-white'>
        {progressData.map((item, index) => (
          <div key={index} className='my-2 basis-1/2 space-y-1 px-2 md:basis-1/2'>
            <p>
              {item.name}: {item.value}
              {item.unit}
            </p>
            <ProgressBar width={(item.value / item.goal) * 100} />
          </div>
        ))}
      </div>
    </CardContainer>
  );
};

export default CardSession;
