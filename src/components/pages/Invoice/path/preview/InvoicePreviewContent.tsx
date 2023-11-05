import NavigationCard from '../../NavigationCard';
import PageContainer from '@/common/PageContainer';
import InvoicePreviewCard from './content/InvoicePreviewCard';

const InvoicePreviewContent = () => {
  const handlePrint = () => {};

  return (
    <PageContainer>
      <div className='flex space-x-6'>
        <InvoicePreviewCard />
        <NavigationCard handlePrint={handlePrint} />
      </div>

    </PageContainer>
  );
};

export default InvoicePreviewContent;
