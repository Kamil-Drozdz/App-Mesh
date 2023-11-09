import LabelRow from '@/common/LabelRow';
import InvoiceTemplateField from './InvoiceTemplateField';
import { useInvoice } from '@/store/Invoice';

const InvoicePaymentDetails = ({ isEditable, total }) => {
  const { invoice } = useInvoice();
  return (
    <div>
      <div className='mb-4 text-xl font-bold'>Payment Details:</div>
      <LabelRow label='Total Due:' value={`$ ${total}`} />
      <InvoiceTemplateField
        isEditable={isEditable}
        value={`Method: ${invoice.paymentDetails.method}`}
        name='paymentDetails.method'
      />
      <InvoiceTemplateField
        isEditable={isEditable}
        value={`Transaction ID: ${invoice.paymentDetails.transactionId}`}
        name='paymentDetails.transactionId'
      />
    </div>
  );
};

export default InvoicePaymentDetails;
