import CardContainer from '@/common/CardContainer';
import { DataOrder } from '@/data/charts/dataOrder';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { FiUsers } from 'react-icons/fi';

const CardSubscribers = () => {
	const { data, options } = DataOrder();
	ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);
	return (
		<CardContainer className='md:basis-1/2 flex flex-col'>
			<div className={`bg-violet-500 text-violet-500 h-12 w-12 rounded-full bg-opacity-25 flex justify-center items-center `}>
				<FiUsers size={21} />
			</div>
			<p className='text-2xl font-semibold text-white'>92.5k</p>
			<span>Subscribers Gained</span>
			<Line options={options} data={data} />
		</CardContainer>
	);
};

export default CardSubscribers;
