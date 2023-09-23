import CardContainer from '@/common/CardContainer';
import { DataProfit } from '@/data/charts/dataProfit';
import { convert } from '@/lib/convert';
import { totalValue } from '@/lib/entities/totalValue';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

const CardProfit = () => {
	const data = DataProfit();
	ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

	return (
		<CardContainer className='basis-1/6'>
			<div className='text-white'>Profit</div>
			<h4 className='text-gray-200 text-2xl'>{convert(totalValue(data))}</h4>
			<Line className='md:max-w-[200px] aspect-video' data={data} />
		</CardContainer>
	);
};

export default CardProfit;
