import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';
import CardContainer from '@/common/CardContainer';
import ProgressBar from '@/common/ProgressBar';
import { DataSession } from '@/data/charts/dataSession';
import { Chart as ChartJS, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const CardSession = () => {
	const { data, options, progressData } = DataSession();
	ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

	return (
		<CardContainer className='md:basis-1/2 '>
			<div className='flex md:flex-row flex-col space-y-4 md:space-y-0 justify-center items-stretch'>
				<div className='basis-1/2 flex flex-col justify-between space-y-6'>
					<div>
						<h3 className='text-2xl font-semibold dark:text-white'>2.7k</h3>
						<span>Avg Sessions</span>
						<span className='dark:text-green-500'>+5.2%</span> vs last 7 days
					</div>
					<Button className='!bg-violet-500 hover:dark:!bg-violet-400 w-full  !text-white'>View Details</Button>
				</div>
				<div className='flex flex-col justify-center items-center basis-1/2'>
					<h4 className='dark:text-right w-full'>Last 7 days</h4>
					<Bar className='md:max-w-[300px]' data={data} options={options} />
				</div>
			</div>
			<Separator />
			<div className='flex flex-wrap dark:text-white'>
				{progressData.map((item, index) => (
					<div key={index} className='md:basis-1/2 basis-1/2 px-2 my-2 space-y-1'>
						<p>
							{item.name}: {item.value}
							{item.unit}
						</p>
						<ProgressBar width={(item.value / item.goal) * 100} />
					</div>
				))}
			</div>
		</CardContainer>
	);
};

export default CardSession;
