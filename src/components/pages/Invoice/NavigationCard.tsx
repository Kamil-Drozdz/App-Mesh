import { toast } from 'react-toastify';

import { Button } from '@/UI/Button';
import CardContainer from '@/common/CardContainer';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { addItemFirebase } from '@/lib/firebaseHelpers/addItemFirebase';
import useCurrentUser from '@/store/CurrentUser';
import { emptyTemplateInvoice, useInvoice } from '@/store/Invoice';

const NavigationCard = ({ children }) => {
  const { invoice, setInvoice } = useInvoice();
  const { removeItem } = useLocalStorage('savedInvoice');
  const { currentUser } = useCurrentUser();
  const docId = currentUser?.uid || '';

  const handleSendInvoice = () => {
    try {
      addItemFirebase('invoice', docId, invoice)
        .then(() => {
          toast.success("You're Invoice has been send succesfully!");
          removeItem();
        })
        .catch(() => toast.error('Sorry we have problem with send Invoice please try again'));

      setInvoice(emptyTemplateInvoice);
    } catch {
      console.log('error');
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
};

export default NavigationCard;
