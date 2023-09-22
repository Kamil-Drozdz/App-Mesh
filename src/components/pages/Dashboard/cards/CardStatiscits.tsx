import CardContainer from '@/common/CardContainer';
import { DataStatistic } from '@/data/cards/dataStatistic';
import { useTranslation } from 'react-i18next';

const CardStatiscits = () => {
	const { t } = useTranslation();
	const statisticItem = DataStatistic();

	return (
		<CardContainer className='md:basis-2/3'>
			<div className='flex justify-between items-center pb-4'>
				<h3 className='text-white'> {t('Statistic')}</h3>
				<p className='text-xs'> {t('Updated 1 month ago')}</p>
			</div>
			<ul className='flex flex-row md:basis-1 justify-end md:justify-between  flex-wrap'>
				{statisticItem.map((item, index) => (
					<li key={index} className='flex px-2 space-x-5 basis-1/4 py-2'>
						<div className={`${item.color}  h-12 w-12  rounded-full bg-opacity-25 flex justify-center items-center `}> {item.icon}</div>
						<div className='md:basis-2/3 basis-1  text-end md:text-left'>
							<p className='text-lg text-white'>{item.amount}</p>
							<span className='text-base'>{item.resources}</span>
						</div>
					</li>
				))}
			</ul>
		</CardContainer>
	);
};

export default CardStatiscits;
