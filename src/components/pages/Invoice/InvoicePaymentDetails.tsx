import LabelRow from '@/common/LabelRow';
import InvoiceTemplateField from './InvoiceTemplateField';
import { useInvoice } from '@/store/Invoice';

const InvoicePaymentDetails = ({ isEditable, total }) => {
  const { invoice } = useInvoice();
  return (
    <div>
      <div className='mb-4 text-xl font-bold'>Payment Details:</div>
      <LabelRow label='Total Due :' value={`$ ${total}`} />
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.paymentDetails.method}
        label='Payment Method'
        name='paymentDetails.method'
      />

      <div>Transaction ID :</div>
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.paymentDetails.transactionId}
        label='Transaction ID'
        name='paymentDetails.transactionId'
      />
    </div>
  );
};

export default InvoicePaymentDetails;
