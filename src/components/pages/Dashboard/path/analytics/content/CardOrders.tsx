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
import { BsBox } from 'react-icons/bs';

import CardChart from '@/components/pages/Dashboard/CardChart';
import { DataOrder } from '@/data/charts/dataOrder';

const CardOrders = () => {
  const { data, options } = DataOrder();
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);
  return (
    <CardChart
      className='md:basis-1/2'
      title='Orders Received'
      data={data}
      iconColor='bg-orange-500 text-orange-500'
      icon={<BsBox size={21} />}
    >
      <Line data-testid='orders-chart' options={options} data={data} />
    </CardChart>
  );
};

export default CardOrders;
