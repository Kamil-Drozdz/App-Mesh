import InvoiceEditCard from './content/InvoiceEditCard';
import NavigationCard from '../../NavigationCard';
import PageContainer from '@/common/PageContainer';

const InvoiceEditContent = () => {
  const handlePrint = () => {};

  return (
    <PageContainer>
      <div className='flex space-x-6'>
        <InvoiceEditCard />
        <NavigationCard handlePrint={handlePrint} />
      </div>
    </PageContainer>
  );
};

export default InvoiceEditContent;
