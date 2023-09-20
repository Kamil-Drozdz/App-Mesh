import { Button } from '@/UI/Button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/UI/Select';
import CardContainer from '@/common/CardContainer';
import { data, options, optionsLine } from '@/data/charts/dataRevenueReport';
import { convert } from '@/lib/convert';
import { totalValue } from '@/lib/entities/totalValue';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

const CardRevenueReport = () => {
	ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

	return (
		<CardContainer className='basis-4/6 flex '>
			<div className='border-r-[1px] px-4 w-2/3  border-gray-600'>
				<div className='flex justify-between items-center pb-4'>
					<h3 className='text-white'>Revenue Report</h3>
				</div>
				<Bar data={data} options={options} />
			</div>
			<div className='flex flex-col  justify-start items-center w-1/3  space-y-4 '>
				<Select>
					<SelectTrigger className='w-[180px] border-darkBlue'>
						<SelectValue placeholder='Choose Year' />
					</SelectTrigger>
					<SelectContent className='border-darkBlue'>
						<SelectGroup className='bg-mediumBlue text-gray-200'>
							<SelectLabel>Choose Year</SelectLabel>
							<SelectItem value='2023'>2023</SelectItem>
							<SelectItem value='2022'>2022</SelectItem>
							<SelectItem value='2021'>2021</SelectItem>
							<SelectItem value='2020'>2020</SelectItem>
							<SelectItem value='2019'>2019</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<div className='text-white text-lg'>$25.852</div>
				<h4 className='text-gray-300 text-base'>Budget {convert(totalValue(data))}</h4>
				<Line options={optionsLine} data={data} />
				<Button className='bg-violet-500 hover:bg-violet-400'>Increase Budget</Button>
			</div>
		</CardContainer>
	);
};

export default CardRevenueReport;
