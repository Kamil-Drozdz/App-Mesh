import CardContainer from '@/common/CardContainer';
import { statisticItem } from '@/data/cards/dataStatistic';

const CardStatiscits = () => {
	return (
		<CardContainer className='basis-2/3'>
			<div className='flex justify-between items-center pb-4'>
				<h3 className='text-white'>Statistic</h3>
				<p className='text-xs'>Updated 1 month ago</p>
			</div>
			<ul className='flex'>
				{statisticItem.map((item, index) => (
					<li key={index} className='flex px-2 space-x-5 basis-1/4 py-2'>
						<div className={`${item.color} w-12 h-12 rounded-full bg-opacity-25 flex justify-center items-center `}> {item.icon}</div>
						<div>
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
