import CardContainer from '@/common/CardContainer';
import { DataStatistic } from '@/data/pages/ecommerce/dataStatistic';
import { useTranslation } from 'react-i18next';

const CardStatiscits = () => {
	const { t } = useTranslation();
	const statisticItem = DataStatistic();

	return (
		<CardContainer className='md:basis-2/3'>
			<div className='flex justify-between items-center pb-4'>
				<h3 className='dark:text-white'> {t('Statistic')}</h3>
				<p className='text-xs text-gray-400'> {t('Updated 1 month ago')}</p>
			</div>
			<ul className='flex flex-row md:basis-1 justify-end md:justify-between flex-wrap'>
				{statisticItem.map((item, index) => (
					<li key={index} className='flex justify-between md:justify-center px-2 space-x-2 md:space-x-5 py-2 basis-1/4 grow w-full'>
						<div className={`${item.color} h-12 w-12 rounded-full bg-opacity-25 flex justify-center items-center `}> {item.icon}</div>
						<div className='md:basis-2/3 basis-1 text-end md:text-left'>
							<p className='text-lg dark:text-white'>{item.amount}</p>
							<span className='text-base text-gray-400'>{item.resources}</span>
						</div>
					</li>
				))}
			</ul>
		</CardContainer>
	);
};

export default CardStatiscits;
