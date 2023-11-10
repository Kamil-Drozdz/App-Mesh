import CardChart from '@/components/pages/Dashboard/CardChart';
import { DataSubscribers } from '@/data/charts/dataSubscribers';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { FiUsers } from 'react-icons/fi';

const CardSubscribers = () => {
  const { data, options } = DataSubscribers();
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);
  return (
    <CardChart
      className='md:basis-1/2'
      title='Subscribers Gained'
      data={data}
      iconColor='bg-buttonPrimary text-buttonPrimary'
      icon={<FiUsers size={21} />}
    >
      <Line options={options} data={data} />
    </CardChart>
  );
};

export default CardSubscribers;
