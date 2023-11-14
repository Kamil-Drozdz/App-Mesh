import { useInvoice } from '@/store/Invoice';
import InvoiceTemplateField from './InvoiceTemplateField';

const InvoiceTax = ({ isEditable }) => {
  const { invoice } = useInvoice();
  return (
    <div className='flex items-center text-muted-foreground'>
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.tax}
        name='tax'
        label='Tax'
        className='my-2 mr-2 w-12'
      />
      %
    </div>
  );
};

export default InvoiceTax;
