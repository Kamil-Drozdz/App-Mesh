import TopNavbar from './TopNavbar';
import CardCompany from './cards/CardCompany';
import CardBody from './cards/CardCongratulation';
import CardEarnings from './cards/CardEarnings';
import CardOrder from './cards/CardOrder';
import CardProfit from './cards/CardProfit';
import CardRevenueReport from './cards/CardRevenueReport';
import CardStatiscits from './cards/CardStatiscits';

const DashboardContent = () => {
	return (
		<main className='ml-72 px-6 py-8 bg-darkBlue text-lightGray min-h-screen space-y-6'>
			<TopNavbar />
			<div className='flex justify-between items-stretch space-x-6'>
				<CardBody />
				<CardStatiscits />
			</div>
			<div className='flex justify-between  space-x-6 '>
				<div className='space-y-6'>
					<div className='flex justify-between  space-x-6 '>
						<CardOrder />
						<CardProfit />
					</div>
					<CardEarnings />
				</div>
				<CardRevenueReport />
			</div>
			<CardCompany />
		</main>
	);
};

export default DashboardContent;
