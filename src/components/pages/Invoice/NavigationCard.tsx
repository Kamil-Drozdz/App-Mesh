import { Button } from '@/UI/Button';
import CardContainer from '@/common/CardContainer';
import { initialInvoice } from '@/data/pages/invoice/invoiceData';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useInvoice } from '@/store/Invoice';
import { toast } from 'react-toastify';

const NavigationCard = ({ children }) => {
  const { setInvoice } = useInvoice();
  const { removeItem } = useLocalStorage('savedInvoice');

  const handleSendInvoice = () => {
    try {
      toast.success("You're Invoice has been send succesfully!");
      removeItem();
      setInvoice(initialInvoice);
    } catch {
      toast.error('Sorry we have problem with send Invoice please try again');
    }
  };
  return (
    <CardContainer className='hidden h-fit w-1/4 min-w-[16rem] flex-col space-y-4 print:hidden md:flex'>
      <Button onClick={handleSendInvoice} className='w-full !bg-violet-500 !text-white hover:!bg-violet-400'>
        Send Invoice
      </Button>
      {children}
      <Button className='w-full !bg-green-500 !text-white hover:!bg-green-400'>Add Payment</Button>
    </CardContainer>
  );
};

export default NavigationCard;
