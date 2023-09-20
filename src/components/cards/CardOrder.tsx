import CardContainer from '@/common/CardContainer';
import { data, options } from '@/data/charts/dataOrder';
import { convert } from '@/lib/convert';
import { totalValue } from '@/lib/entities/totalValue';
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const CardOrder = () => {
	ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

	return (
		<CardContainer className='basis-1/6'>
			<div className='text-white'>Orders</div>
			<h4 className='text-gray-200 text-2xl'>{convert(totalValue(data))}</h4>
			<Bar data={data} options={options} />
		</CardContainer>
	);
};

export default CardOrder;
