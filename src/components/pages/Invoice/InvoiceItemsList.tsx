import { Button } from '@/UI/Button';
import { TableCell, TableRow } from '@/UI/Table';
import { useInvoice } from '@/store/Invoice';

interface InvoiceItemsList {
  isEditable: boolean;
  item: {
    task: string;
    rate: number | null;
    hours: number | null;
  };
  index: number;
}
const InvoiceItemsList = ({ isEditable, item, index }: InvoiceItemsList) => {
  const { setInvoice } = useInvoice();

  const removeInvoiceItem = (index) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      invoiceItems: prevInvoice.invoiceItems.filter((_, i) => i !== index),
    }));
  };
  return (
    <TableRow className='relative'>
      <TableCell className='font-medium'>{item.task}</TableCell>
      <TableCell>{item.rate}$</TableCell>
      <TableCell>{item.hours}</TableCell>
      <TableCell className='text-right'>
        {item?.rate !== null && item?.hours !== null ? item.rate * item.hours : 0}$$
      </TableCell>
      {isEditable && (
        <TableCell>
          <Button className='relative h-fit px-2 py-0.5' variant='destructive' onClick={() => removeInvoiceItem(index)}>
            Remove
          </Button>
        </TableCell>
      )}
    </TableRow>
  );
};

export default InvoiceItemsList;
