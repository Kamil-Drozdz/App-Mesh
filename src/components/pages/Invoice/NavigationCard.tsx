import { toast } from 'react-toastify';

import { Button } from '@/UI/Button';
import CardContainer from '@/common/CardContainer';
import { useLocalStorage } from '@/hooks/reusable/useLocalStorage';
import { addDocumentFirebase } from '@/lib/firebaseHelpers/addDocumentFirebase';
import useCurrentUser from '@/store/CurrentUser';
import { emptyTemplateInvoice, useInvoice } from '@/store/Invoice';

function NavigationCard({ children }) {
  const { invoice, setInvoice } = useInvoice();
  const { removeItem } = useLocalStorage('savedInvoice');
  const { currentUser } = useCurrentUser();
  const docId = currentUser?.uid || '';

  const handleSendInvoice = () => {
    try {
      addDocumentFirebase('invoice', docId, invoice)
        .then(() => {
          toast.success("You're Invoice has been send succesfully!");
          removeItem();
        })
        .catch(() => toast.error('Sorry we have problem with send Invoice please try again'));

      setInvoice(emptyTemplateInvoice);
    } catch {
      toast.error('Sorry we have problem with send Invoice please try again');
    }
  };
  return (
    <CardContainer className='hidden h-fit w-1/4 min-w-[16rem] flex-col space-y-4 print:hidden md:flex'>
      <Button onClick={handleSendInvoice} className='w-full !bg-buttonPrimary !text-white hover:brightness-110'>
        Send Invoice
      </Button>
      {children}
      <Button className='w-full !bg-green-500 !text-white hover:!bg-green-400'>Add Payment</Button>
    </CardContainer>
  );
}

export default NavigationCard;
