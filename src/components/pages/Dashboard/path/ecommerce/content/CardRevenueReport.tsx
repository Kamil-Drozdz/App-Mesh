import { Button } from '@/UI/Button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/UI/Select';
import { Separator } from '@/UI/Separator';
import CardContainer from '@/common/CardContainer';
import { DataRevenueReport } from '@/data/charts/dataRevenueReport';
import { convert } from '@/lib/convert';
import { totalValue } from '@/lib/entities/totalValue';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

const CardRevenueReport = () => {
	const { options, optionsLine, data } = DataRevenueReport();
	const { t } = useTranslation();
	ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

	return (
		<CardContainer className='md:basis-4/6 flex md:flex-row flex-col'>
			<div className=' px-4 md:w-2/3'>
				<div className='flex justify-between items-center pb-4'>
					<h3 className='dark:text-white'>{t('Revenue Report')}</h3>
				</div>
				<Bar data={data} options={options} />
			</div>
			<Separator orientation='vertical' className='dark:bg-gray-600' />
			<div className='flex flex-col justify-start items-center md:w-1/3 space-y-4 '>
				<Select>
					<SelectTrigger className='w-[180px] border-darkBlue'>
						<SelectValue placeholder={t('Choose Year')} />
					</SelectTrigger>
					<SelectContent className='border-darkBlue'>
						<SelectGroup className='dark:bg-mediumBlue bg-lightWhite dark:text-gray-200'>
							<SelectLabel>{t('Choose Year')}</SelectLabel>
							<SelectItem value='2023'>2023</SelectItem>
							<SelectItem value='2022'>2022</SelectItem>
							<SelectItem value='2021'>2021</SelectItem>
							<SelectItem value='2020'>2020</SelectItem>
							<SelectItem value='2019'>2019</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<div className='dark:text-white text-lg'>$25.852</div>
				<h4 className='dark:text-gray-300 dark:text-base'>
					{t('Budget')} {convert(totalValue(data))}
				</h4>
				<Line className='px-4 w-full' options={optionsLine} data={data} />
				<Button className='!bg-violet-500 hover:!bg-violet-400 !text-white'>{t('Increase Budget')}</Button>
			</div>
		</CardContainer>
	);
};

export default CardRevenueReport;
