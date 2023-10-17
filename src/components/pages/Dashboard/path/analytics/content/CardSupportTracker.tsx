import CardContainer from '@/common/CardContainer';
import { data, options } from '@/data/charts/dataSupportTracker';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const CardSupportTracker = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <CardContainer className='basis-1/2 '>
      <div className='flex flex-col space-y-2'>
        <div className='w-full flex justify-between'>
          <h3 className='text-2xl font-semibold dark:text-white'>Support Tracker</h3>
          <span>Last 7 Days</span>
        </div>
        <div className='flex items-start justify-center h-full'>
          <div className='space-y-2'>
            <h2 className='dark:text-3xl font-bold dark:text-white'>163</h2>
            <p className='text-lg font-thin'>Tickets</p>
          </div>
          <div className='w-2/3 mx-auto flex justify-center items-center'>
            <Doughnut className='max-w-[250px] max-h-[250px]' data={data} options={options} />
          </div>
        </div>
        <div className='flex justify-between items-center dark:text-center'>
          <div>
            <p className='font-thin'>New Tickets</p>
            <span className='dark:text-xl font-bold dark:text-white'>29</span>
          </div>
          <div>
            <p className='font-thin'>Open Tickets</p>
            <span className='dark:text-xl font-bold dark:text-white'>63</span>
          </div>
          <div>
            <p className='font-thin'>Response Time</p>
            <span className='dark:text-xl font-bold dark:text-white'>1d</span>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default CardSupportTracker;
