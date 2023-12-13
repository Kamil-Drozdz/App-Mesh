import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';

import { Button } from '@/UI/Button';
import { TableCell } from '@/UI/Table';
import InputWithLabel from '@/common/InputWithLabel';
import { Invoice, InvoiceItem, useInvoice } from '@/store/Invoice';

interface InvoiceItemProps {
  task: string;
  rate: number | null;
  hours: number | null;
}
const InvoiceListItemsAdd = ({ isEditable }: { isEditable: boolean }) => {
  const [invoiceItem, setInvoiceItem] = useState<InvoiceItemProps>({ task: '', rate: null, hours: null });
  const { setInvoice } = useInvoice();

  const addInvoiceItem = () => {
    const newItem: InvoiceItem = {
      task: invoiceItem.task,
      rate: invoiceItem.rate,
      hours: invoiceItem.hours,
    };
    setInvoice((prevInvoice: Invoice) => ({
      ...prevInvoice,
      invoiceItems: [...prevInvoice.invoiceItems, newItem],
    }));

    setInvoiceItem({ task: '', rate: null, hours: null });
  };

  return (
    isEditable && (
      <>
        <div className='mt-4 text-sm text-muted-foreground'>add a new invoice to the invoice list </div>
        <tr className='w-full'>
          <TableCell>
            <InputWithLabel
              label='Task'
              id='task'
              type='text'
              value={invoiceItem.task}
              onChange={(e) => setInvoiceItem({ ...invoiceItem, task: e.target.value })}
            />
          </TableCell>
          <TableCell>
            <InputWithLabel
              label='Rate'
              id='rate'
              type='number'
              value={invoiceItem.rate || ''}
              onChange={(e) => setInvoiceItem({ ...invoiceItem, rate: Number(e.target.value) })}
            />
          </TableCell>
          <TableCell>
            <InputWithLabel
              label='Hours'
              id='hours'
              type='number'
              value={invoiceItem.hours || ''}
              onChange={(e) => setInvoiceItem({ ...invoiceItem, hours: Number(e.target.value) })}
            />
          </TableCell>
        </tr>
        <Button
          disabled={invoiceItem.task === '' || invoiceItem.rate === null || invoiceItem.hours === null}
          className='mt-3 !bg-green-500 !text-white hover:!bg-green-400'
          onClick={addInvoiceItem}
        >
          <BiPlus className='mr-2' /> Add Item
        </Button>
      </>
    )
  );
};

export default InvoiceListItemsAdd;
