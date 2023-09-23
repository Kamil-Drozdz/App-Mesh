import CardCompany from './content/CardCompany';
import CardCongratulation from './content/CardCongratulation';
import CardEarnings from './content/CardEarnings';
import CardGoalOverview from './content/CardGoalOverview';
import CardOrder from './content/CardOrder';
import CardProfit from './content/CardProfit';
import CardRevenueReport from './content/CardRevenueReport';
import CardStatiscits from './content/CardStatiscits';
import CardTransaction from './content/CardTransaction';
import PageContainer from '@/common/PageContainer';

const EcommerceContent = () => {
	return (
		<PageContainer>
			<div className=' flex-col flex md:flex-row  md:justify-between items-stretch space-y-6 md:space-y-0 space-x-0 md:space-x-6'>
				<CardCongratulation />
				<CardStatiscits />
			</div>
			<div className=' flex-col flex md:flex-row  md:justify-between items-stretch space-y-6 md:space-y-0 space-x-0 md:space-x-6'>
				<div className='space-y-6'>
					<div className='flex md:flex-row flex-col md:justify-between space-x-0  md:space-x-6  space-y-6 md:space-y-0 '>
						<CardOrder />
						<CardProfit />
					</div>
					<CardEarnings />
				</div>
				<CardRevenueReport />
			</div>
			<CardCompany />
			<div className=' flex-col flex md:flex-row  md:justify-between items-stretch space-y-6 md:space-y-0 space-x-0 md:space-x-6'>
				<CardGoalOverview />
				<CardTransaction />
				<div className='basis-1/3'> C</div>
			</div>
		</PageContainer>
	);
};

export default EcommerceContent;
