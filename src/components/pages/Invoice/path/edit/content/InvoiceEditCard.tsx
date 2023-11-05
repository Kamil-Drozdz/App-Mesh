import { initialInvoice } from '@/data/pages/invoice/invoiceData';
import InvoiceTemplate from '../../../InvoiceTemplate';
import { useState } from 'react';

const InvoiceEditCard = () => {
  const [invoice, setInvoice] = useState(initialInvoice);

  return <InvoiceTemplate isEditable={true} invoice={invoice} setInvoice={setInvoice} />;
};

export default InvoiceEditCard;
