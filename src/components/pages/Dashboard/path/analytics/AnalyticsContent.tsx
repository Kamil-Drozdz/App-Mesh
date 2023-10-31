import CardCongratulations from './content/CardCongratulations';
import CardOrders from './content/CardOrders';
import CardProject from './content/CardProject';
import CardSales from './content/CardSales';
import CardSession from './content/CardSession';
import CardSubscribers from './content/CardSubscribers';
import CardSupportTracker from './content/CardSupportTracker';
import CardUserTimeline from './content/CardUserTimeline';
import PageContainer from '@/common/PageContainer';

const AnalyticsContent = () => {
  return (
    <PageContainer>
      <div className=' flex flex-col items-stretch space-y-6 space-x-0 md:flex-row md:justify-between md:space-y-0 md:space-x-6'>
        <CardCongratulations />
        <div className='flex w-full flex-col space-y-6 md:basis-1/2 md:flex-row md:space-y-0 md:space-x-6'>
          <CardSubscribers />
          <CardOrders />
        </div>
      </div>
      <div className='flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6 '>
        <CardSession />
        <CardSupportTracker />
      </div>
      <div className='flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6 '>
        <CardUserTimeline />
        <CardSales />
        <CardProject />
      </div>
    </PageContainer>
  );
};

export default AnalyticsContent;
