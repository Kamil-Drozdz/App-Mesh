import { initialInvoice } from '@/data/pages/invoice/invoiceData';
import InvoiceTemplate from '../../../InvoiceTemplate';
import { useState } from 'react';

const InvoicePreviewCard = () => {
  const [invoice, setInvioce] = useState(initialInvoice);
  return <InvoiceTemplate isEditable={false} invoice={invoice} setInvoice={setInvioce} />;
};

export default InvoicePreviewCard;
