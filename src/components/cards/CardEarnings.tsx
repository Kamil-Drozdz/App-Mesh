import CardContainer from '@/common/CardContainer';
import { data, options } from '@/data/charts/dataEarnings';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

const CardEarnings = () => {
	ChartJS.register(ArcElement, Tooltip, Legend);

	return (
		<CardContainer className='flex w-full justify-between '>
			<div className='space-y-3'>
				<div className='text-white'>Earnings</div>
				<p className='text-sm text-gray-400'>This month</p>
				<span className='text-white'>$4055.56</span>
				<p className='text-sm text-gray-600'>68.2% more earnings than last month.</p>
			</div>
			<div>
				<Pie className='h-48' options={options} data={data} />
			</div>
		</CardContainer>
	);
};

export default CardEarnings;
