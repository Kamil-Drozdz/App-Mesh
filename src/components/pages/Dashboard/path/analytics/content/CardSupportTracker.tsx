import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import CardContainer from '@/common/CardContainer';
import { data, options } from '@/data/charts/dataSupportTracker';

function CardSupportTracker() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <CardContainer className='basis-1/2 '>
      <div className='flex flex-col space-y-2'>
        <div className='flex w-full justify-between'>
          <h3 className='text-2xl font-semibold dark:text-white'>Support Tracker</h3>
          <span>Last 7 Days</span>
        </div>
        <div className='flex h-full items-start justify-center'>
          <div className='space-y-2'>
            <h2 className='font-bold dark:text-3xl dark:text-white'>163</h2>
            <p className='text-lg font-thin'>Tickets</p>
          </div>
          <div className='mx-auto flex w-2/3 items-center justify-center'>
            <Doughnut
              data-testid='support-tracker-chart'
              className='max-h-[250px] max-w-[250px]'
              data={data}
              options={options}
            />
          </div>
        </div>
        <div className='flex items-center justify-between dark:text-center'>
          <div>
            <p className='font-thin'>New Tickets</p>
            <span className='font-bold dark:text-xl dark:text-white'>29</span>
          </div>
          <div>
            <p className='font-thin'>Open Tickets</p>
            <span className='font-bold dark:text-xl dark:text-white'>63</span>
          </div>
          <div>
            <p className='font-thin'>Response Time</p>
            <span className='font-bold dark:text-xl dark:text-white'>1d</span>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

export default CardSupportTracker;
