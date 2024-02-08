import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import NavigationCard from '../../NavigationCard';
import PageContainer from '@/common/PageContainer';
import { Button } from '@/UI/Button';
import { BasicRoutes, SubRoutes } from '@/lib/enums/routes';
import InvoiceTemplate from '../../InvoiceTemplate';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useInvoice } from '@/store/Invoice';

function InvoiceEditContent() {
  const { invoice } = useInvoice();
  const { setItem } = useLocalStorage('savedInvoice');

  const handleSave = () => {
    try {
      toast.success("You're Invoice has been saved!");
      setItem(invoice);
    } catch {
      toast.error('Sorry we have problem with save Invoice please try again');
    }
  };
  return (
    <PageContainer>
      <div className='flex space-x-6'>
        <InvoiceTemplate isEditable />
        <NavigationCard>
          <Link className='w-full' to={`${BasicRoutes.INVOICE}${SubRoutes.PREVIEW}`}>
            <Button variant='ghost' className='w-full border'>
              Preview
            </Button>
          </Link>
          <Button variant='ghost' onClick={handleSave} className='w-full border'>
            Save
          </Button>
        </NavigationCard>
      </div>
    </PageContainer>
  );
}

export default InvoiceEditContent;
