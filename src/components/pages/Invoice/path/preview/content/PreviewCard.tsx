import { Separator } from '@/UI/Separator';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/UI/Table';
import CardContainer from '@/common/CardContainer';
import LabelRow from '@/common/LabelRow';
import { invoices } from '@/data/pages/invoice/invoiceData';
import { totalValue } from '@/lib/totalValue';

const PreviewCard = () => {
  const subTotal = totalValue(invoices.map((invoice) => invoice.rate * invoice.hours));
  const tax = 23;
  const total = (subTotal * (1 + tax / 100)).toFixed(2);
  return (
    <CardContainer className='space-y-8 print:max-w-none print:space-y-3 print:rounded-none print:border-none print:shadow-none md:max-w-[75%]'>
      <div className='mb-4 flex flex-col justify-between space-y-4 print:flex-row md:flex-row md:space-y-0'>
        <div className=' pr-8'>
          <div className='mb-4 text-xl font-bold'>Name company</div>
          <p>Office 149, 450 South Brand Brooklyn</p>
          <p>San Diego County, CA 91905, USA</p>
          <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
        </div>
        <div>
          <div className='mb-4 text-2xl font-bold'>Invoice #342324</div>
          <LabelRow label='Date Issued:' className='space-x-2' value='19 Oct 2019' />
          <LabelRow label='Due Date:' className='space-x-2' value='03 Nov 2019' />
        </div>
      </div>
      <Separator />
      <div className='my-4 flex flex-col justify-between space-y-4 print:flex-row md:flex-row md:space-y-0'>
        <div className=' pr-8'>
          <div className='mb-4 text-2xl font-medium'>Invoice To:</div>
          <p className='font-semibold'>Tony Herrera</p>
          <p>Leonard-Garcia and Sons</p>
          <p>5345 Robert Squares Denmark</p>
          <p>(955) 676-1076</p>
          <p>smithtiffany@powers.com</p>
        </div>
        <div>
          <div className='mb-4 text-2xl font-bold'>Payment Details:</div>
          <LabelRow label='Total Due:' className='space-x-2' value={`$ ${total}`} />
          <LabelRow label='Bank name:' className='space-x-2' value='American Bank' />
          <LabelRow label='Country:' className='space-x-2' value='United States' />
          <LabelRow label='IBAN:' className='space-x-2' value='ETD95476213874685' />
        </div>
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
          {invoices.map((invoice, index) => (
            <TableRow key={index}>
              <TableCell className='font-medium'>{invoice.task}</TableCell>
              <TableCell>{invoice.rate}$</TableCell>
              <TableCell>{invoice.hours}</TableCell>
              <TableCell className='text-right'>{invoice.rate * invoice.hours}$</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='mt-6 flex flex-col justify-between space-y-4 p-2 print:flex-row md:flex-row md:space-y-0'>
        <LabelRow label='Salesperson:' className='space-x-2' value='Kamil Dróżdż' />
        <div>
          <LabelRow label='SubTotal:' className='w-full justify-between space-x-2' value={`$ ${subTotal.toFixed(2)}`} />
          <LabelRow label='Tax:' className='w-full justify-between space-x-2' value={`${tax}%`} />
          <Separator />
          <LabelRow label='Total:' className='w-full justify-between space-x-2' value={`$ ${total}`} />
        </div>
      </div>
      <Separator className='my-4' />
      <LabelRow
        label='Note:'
        className='space-x-2'
        value='It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!'
      />
    </CardContainer>
  );
};

export default PreviewCard;
