import InvoiceTemplateField from './InvoiceTemplateField';
import { useInvoice } from '@/store/Invoice';

const InvoiceTo = ({ isEditable }) => {
  const { invoice } = useInvoice();

  return (
    <div className='pr-8'>
      <div className='mb-4 text-xl font-bold'>Invoice To:</div>
      <InvoiceTemplateField isEditable={isEditable} value={invoice.clientDetails.name} name='clientDetails.name' />
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.clientDetails.address}
        name='clientDetails.address'
      />
      <InvoiceTemplateField isEditable={isEditable} value={invoice.clientDetails.phone} name='clientDetails.phone' />
      <InvoiceTemplateField isEditable={isEditable} value={invoice.clientDetails.email} name='clientDetails.email' />
    </div>
  );
};

export default InvoiceTo;
