import { format, parseISO } from 'date-fns';

import { Separator } from '@/UI/Separator';
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from '@/UI/Table';
import CardContainer from '@/common/CardContainer';
import LabelRow from '@/common/LabelRow';
import InvoiceTemplateField from './InvoiceTemplateField';
import { useInvoice } from '@/store/Invoice';
import InvoiceItemsList from './InvoiceItemsList';
import InvoiceListItemsAdd from './InvoiceListItemsAdd';
import { totalValue } from '@/lib/totalValue';
import InvoiceCompanyInfo from './InvoiceCompanyInfo';
import InvoiceDetails from './InvoiceDetails';
import InvoiceTo from './InvoiceTo';
import InvoicePaymentDetails from './InvoicePaymentDetails';
import InvoiceTax from './InvoiceTax';
import InvoiceSalesperson from './InvoiceSalesperson';

function InvoiceTemplate({ isEditable = false }) {
  const { invoice } = useInvoice();
  const subTotal = totalValue(
    invoice.invoiceItems.map((item) => (item.rate !== null && item.hours !== null ? item.rate * item.hours : 0))
  );

  const total = (subTotal * (1 + invoice.tax / 100)).toFixed(2);

  const parsedDateIssued =
    typeof invoice.invoiceDetails.dateIssued === 'string'
      ? format(parseISO(invoice.invoiceDetails.dateIssued), 'PPP')
      : format(invoice.invoiceDetails.dateIssued, 'PPP');

  const parsedDateDue =
    typeof invoice.invoiceDetails.dueDate === 'string'
      ? format(parseISO(invoice.invoiceDetails.dueDate), 'PPP')
      : format(invoice.invoiceDetails.dueDate, 'PPP');

  return (
    <CardContainer className='space-y-8 print:w-full print:space-y-3 print:rounded-none print:border-none print:shadow-none md:w-3/4 '>
      <div className='mb-4 flex flex-col items-start justify-between space-y-4 print:flex-row print:space-y-0 md:flex-row md:space-y-0'>
        <InvoiceCompanyInfo isEditable={isEditable} />
        <InvoiceDetails isEditable={isEditable} parsedDateIssued={parsedDateIssued} parsedDateDue={parsedDateDue} />
      </div>
      <Separator />
      <div className='my-4 flex flex-col items-start justify-between space-y-4 print:flex-row print:space-y-0 md:flex-row md:space-y-0'>
        <InvoiceTo isEditable={isEditable} />
        <InvoicePaymentDetails total={total} isEditable={isEditable} />
      </div>
      <Separator />
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-1/4'>TASK DESCRIPTION</TableHead>
            <TableHead> RATE</TableHead>
            <TableHead>HOURS</TableHead>
            <TableHead className='text-right'>TOTAL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoice.invoiceItems.map((item, index) => (
            <InvoiceItemsList key={index} item={item} isEditable={isEditable} index={index} />
          ))}
          <InvoiceListItemsAdd isEditable={isEditable} />
        </TableBody>
      </Table>
      <div className='mt-6 flex flex-col justify-between space-y-4 p-2 print:flex-row md:flex-row md:space-y-0'>
        <InvoiceSalesperson isEditable={isEditable} />
        <div>
          <LabelRow label='SubTotal:' value={` $ ${subTotal.toFixed(2)}`} />
          <InvoiceTax isEditable={isEditable} />
          <Separator />
          <LabelRow label='Total:' value={`$ ${total}`} />
        </div>
      </div>
      <Separator className='my-4' />
      <InvoiceTemplateField isEditable={isEditable} label='Note' value={invoice.note} name='note' className='w-full' />
    </CardContainer>
  );
}

export default InvoiceTemplate;
