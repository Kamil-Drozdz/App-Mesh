import { Input } from '@/UI/Input';
import { Separator } from '@/UI/Separator';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/UI/Table';
import CardContainer from '@/common/CardContainer';
import LabelRow from '@/common/LabelRow';
import { Popover, PopoverContent, PopoverTrigger } from '@/UI/Popover';
import { totalValue } from '@/lib/totalValue';
import { Button } from '@/UI/Button';
import clsx from '@/lib/clsx';
import { BiCalendar } from 'react-icons/bi';
import { cloneDeep, set } from 'lodash';
import { format } from 'date-fns';
import { Calendar } from '@/UI/Calendar';

const InvoiceTemplate = ({ isEditable = false, invoice, setInvoice }) => {
  const subTotal = totalValue(invoice.invoiceItems.map((item) => item.rate * item.hours));
  const total = (subTotal * (1 + invoice.tax / 100)).toFixed(2);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInvoice((prevInvoice) => {
      const newInvoice = cloneDeep(prevInvoice);
      set(newInvoice, name, value);
      return newInvoice;
    });
  };

  const renderField = (value, name, isHighlighted = false, additionalText = '', type = 'text') =>
    isEditable ? (
      <Input name={name} placeholder={value} onChange={handleInputChange} id={`input-${value}`} type={type} />
    ) : isHighlighted ? (
      <div className='mb-4 text-xl font-bold'>
        {additionalText}
        {value}
      </div>
    ) : (
      <div>
        {additionalText}
        {value}
      </div>
    );

  return (
    <CardContainer className='w-3/4 space-y-8 print:max-w-none print:space-y-3 print:rounded-none print:border-none print:shadow-none'>
      <div className='mb-4 flex flex-col justify-between space-y-4 print:flex-row md:flex-row md:space-y-0'>
        <div className='pr-8'>
          {renderField(invoice.companyInfo.name, 'companyInfo.name', true)}
          {renderField(invoice.companyInfo.address.part1, 'companyInfo.address.part1')}
          {renderField(invoice.companyInfo.address.part2, 'companyInfo.address.part2')}
          {renderField(invoice.companyInfo.contacts, 'companyInfo.contacts')}
        </div>
        <div>
          {renderField(invoice.invoiceDetails.number, 'invoiceDetails.number', true, 'Invoice #')}
          {!isEditable && (
            <>
              <div> {format(new Date(invoice.invoiceDetails.dateIssued), 'PPP')}</div>
              <div> {format(new Date(invoice.invoiceDetails.dueDate), 'PPP')}</div>
            </>
          )}
          {isEditable && (
            <>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={clsx(
                      'w-full !border-gray-300 !border-opacity-25 !bg-transparent pl-3 text-left font-normal',
                      !invoice.invoiceDetails.dateIssued && 'text-muted-foreground'
                    )}
                  >
                    {invoice.invoiceDetails.dateIssued ? (
                      format(invoice.invoiceDetails.dateIssued, 'PPP')
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <BiCalendar className='ml-auto h-4 w-4 opacity-50' />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='z-[52] w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    initialFocus
                    selected={invoice.invoiceDetails.dateIssued}
                    onSelect={(date) =>
                      setInvoice({
                        ...invoice,
                        invoiceDetails: {
                          ...invoice.invoiceDetails,
                          dateIssued: date,
                        },
                      })
                    }
                    className='rounded-md border bg-white dark:bg-mediumBlue'
                  />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <div>
                    <Button
                      variant={'outline'}
                      className={clsx(
                        'w-full !border-gray-300 !border-opacity-25 !bg-transparent pl-3 text-left font-normal',
                        !invoice.invoiceDetails.dueDate && 'text-muted-foreground'
                      )}
                    >
                      {invoice.invoiceDetails.dueDate ? (
                        format(invoice.invoiceDetails.dueDate, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <BiCalendar className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </div>
                </PopoverTrigger>
                <PopoverContent className='z-[52] w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    initialFocus
                    selected={invoice.invoiceDetails.dueDate}
                    onSelect={(date) =>
                      setInvoice({
                        ...invoice,
                        invoiceDetails: {
                          ...invoice.invoiceDetails,
                          dueDate: date,
                        },
                      })
                    }
                    className='rounded-md border bg-white dark:bg-mediumBlue'
                  />
                </PopoverContent>
              </Popover>
            </>
          )}
        </div>
      </div>
      <Separator />

      <div className='my-4 flex flex-col justify-between space-y-4 print:flex-row md:flex-row md:space-y-0'>
        <div className='pr-8'>
          <div className='mb-4 text-2xl font-medium'>Invoice To:</div>
          {renderField(invoice.clientDetails.name, 'clientDetails.name')}
          {renderField(invoice.clientDetails.address, 'clientDetails.address')}
          {renderField(invoice.clientDetails.phone, 'clientDetails.phone')}
          {renderField(invoice.clientDetails.email, 'clientDetails.email')}
        </div>
        <div>
          <div className='mb-4 text-2xl font-bold'>Payment Details:</div>
          <LabelRow label='Total Due:' value={`$ ${total}`} />

          {renderField(`Method: ${invoice.paymentDetails.method}`, 'paymentDetails.method')}
          {renderField(`Transaction ID: ${invoice.paymentDetails.transactionId}`, 'paymentDetails.transactionId')}
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
          {invoice.invoiceItems.map((item, index) => (
            <TableRow key={index}>
              <TableCell className='font-medium'>{item.task}</TableCell>
              <TableCell>{item.rate}$</TableCell>
              <TableCell>{item.hours}</TableCell>
              <TableCell className='text-right'>{item.rate * item.hours}$</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className='mt-6 flex flex-col justify-between space-y-4 p-2 print:flex-row md:flex-row md:space-y-0'>
        {renderField(invoice.salesperson, 'salesperson')}
        <div>
          <LabelRow label='SubTotal:' value={`$ ${subTotal.toFixed(2)}`} />
          {renderField(invoice.tax, 'tax')}
          <Separator />
          <LabelRow label='Total:' value={`$ ${total}`} />
        </div>
      </div>
      <Separator className='my-4' />
      {renderField(invoice.note, 'note')}
    </CardContainer>
  );
};

export default InvoiceTemplate;
