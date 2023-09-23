import CardContainer from '@/common/CardContainer';
import { DataOrder } from '@/data/charts/dataOrder';
import { convert } from '@/lib/convert';
import { totalValue } from '@/lib/entities/totalValue';
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

const CardOrder = () => {
	const { t } = useTranslation();
	const { data, options } = DataOrder();
	ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

	return (
		<CardContainer className='basis-1/6'>
			<div className='text-white'>{t('Orders')}</div>
			<h4 className='text-gray-200 text-2xl'>{convert(totalValue(data))}</h4>
			<Bar data={data} options={options} />
		</CardContainer>
	);
};

export default CardOrder;
