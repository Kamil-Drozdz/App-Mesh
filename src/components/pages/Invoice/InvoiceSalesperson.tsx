import { useInvoice } from '@/store/Invoice';
import InvoiceTemplateField from './InvoiceTemplateField';

function InvoiceSalesperson({ isEditable }) {
  const { invoice } = useInvoice();
  return (
    <div className='flex h-auto w-full items-end justify-start'>
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.salesperson}
        name='salesperson'
        label='Salesperson'
        className='h-fit min-w-[200px]'
      />
    </div>
  );
}

export default InvoiceSalesperson;
