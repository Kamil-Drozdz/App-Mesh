import { initialInvoice } from '@/data/pages/invoice/invoiceData';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import InvoiceEdit from './path/edit/InvoiceEdit';
import InvoicePreview from './path/preview/InvoicePreview';
import { BasicRoutes, SubRoutes } from '@/lib/enums/routes';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { toast } from 'react-toastify';

const InvoiceContent = () => {
  const { getItem, setItem, removeItem } = useLocalStorage('savedInvoice');
  const isSavedInvoice = !!getItem();
  const [invoice, setInvoice] = useState(getItem() || initialInvoice);
  const { pathname } = useLocation();

  const handleSendInvoice = () => {
    try {
      toast.success("You're Invoice has been send succesfully!");
      removeItem();
      setInvoice(initialInvoice);
    } catch {
      toast.error('Sorry we have problem with send Invoice please try again');
    }
  }
  if (pathname === `${BasicRoutes.INVOICE}${SubRoutes.PREVIEW}`)
    return (
      <InvoicePreview
        isSavedInvoice={isSavedInvoice}
        handleSendInvoice={handleSendInvoice}
        invoice={invoice}
        setInvoice={setInvoice}
      />
    )
  return (
    <InvoiceEdit
      isSavedInvoice={isSavedInvoice}
      handleSendInvoice={handleSendInvoice}
      invoice={invoice}
      setItem={setItem}
      setInvoice={setInvoice}
    />
  )
}

export default InvoiceContent;
