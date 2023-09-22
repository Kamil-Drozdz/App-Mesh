import TopNavbar from '../../TopNavbar';
import CardCompany from './cards/CardCompany';
import CardCongratulation from './cards/CardCongratulation';
import CardEarnings from './cards/CardEarnings';
import CardOrder from './cards/CardOrder';
import CardProfit from './cards/CardProfit';
import CardRevenueReport from './cards/CardRevenueReport';
import CardStates from './cards/CardStates';
import CardStatiscits from './cards/CardStatiscits';
import CardTransaction from './cards/CardTransaction';

const DashboardContent = () => {
	return (
		<main className=' px-6 py-8 bg-darkBlue text-lightGray min-h-screen space-y-6'>
			<TopNavbar />
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
				<CardStates />
				<CardTransaction />
				<div className='basis-1/3'> C</div>
			</div>
		</main>
	);
};

export default DashboardContent;
