import InvoiceTemplateField from './InvoiceTemplateField';
import { useInvoice } from '@/store/Invoice';

function InvoiceTo({ isEditable }) {
  const { invoice } = useInvoice();

  return (
    <div className='pr-8'>
      <div className='mb-4 text-xl font-bold'>Invoice To:</div>
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.clientDetails.name}
        label='Customer Name'
        name='clientDetails.name'
      />
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.clientDetails.address}
        label='Customer Adress'
        name='clientDetails.address'
      />
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.clientDetails.phone}
        label='Customer Name'
        name='clientDetails.phone'
      />
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.clientDetails.email}
        label='Customer Email'
        name='clientDetails.email'
      />
    </div>
  );
}

export default InvoiceTo;
