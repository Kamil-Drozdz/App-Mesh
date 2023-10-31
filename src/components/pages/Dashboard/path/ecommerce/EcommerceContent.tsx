import CardCompany from './content/CardCompany';
import CardCongratulation from './content/CardCongratulation';
import CardEarnings from './content/CardEarnings';
import CardGoalOverview from './content/CardGoalOverview';
import CardMeetup from './content/CardMeetup';
import CardOrder from './content/CardOrder';
import CardProfit from './content/CardProfit';
import CardRevenueReport from './content/CardRevenueReport';
import CardStatiscits from './content/CardStatiscits';
import CardTransaction from './content/CardTransaction';
import PageContainer from '@/common/PageContainer';

const EcommerceContent = () => {
  return (
    <PageContainer>
      <div className=' flex flex-col items-stretch space-y-6 space-x-0 md:flex-row md:justify-between md:space-y-0 md:space-x-6'>
        <CardCongratulation />
        <CardStatiscits />
      </div>
      <div className=' flex flex-col items-stretch space-y-6 space-x-0 md:flex-row md:justify-between md:space-y-0 md:space-x-6'>
        <div className='space-y-6'>
          <div className='flex flex-col space-x-0 space-y-6 md:flex-row md:justify-between md:space-x-6 md:space-y-0 '>
            <CardOrder />
            <CardProfit />
          </div>
          <CardEarnings />
        </div>
        <CardRevenueReport />
      </div>
      <CardCompany />
      <div className=' flex flex-col items-stretch space-y-6 space-x-0 md:flex-row md:justify-between md:space-y-0 md:space-x-6'>
        <CardGoalOverview />
        <CardTransaction />
        <CardMeetup />
      </div>
    </PageContainer>
  );
};

export default EcommerceContent;
