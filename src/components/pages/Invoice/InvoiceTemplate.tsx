import { Separator } from '@/UI/Separator';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/UI/Table';
import CardContainer from '@/common/CardContainer';
import LabelRow from '@/common/LabelRow';
import { Popover, PopoverContent, PopoverTrigger } from '@/UI/Popover';
import { totalValue } from '@/lib/totalValue';
import { Button } from '@/UI/Button';
import clsx from '@/lib/clsx';
import { BiCalendar, BiPlus } from 'react-icons/bi';
import { format, parseISO } from 'date-fns';
import { Calendar } from '@/UI/Calendar';
import { useState } from 'react';
import InputWithLabel from '@/common/InputWithLabel';
import InvoiceTemplateField from './InvoiceTemplateField';
import { Invoice, InvoiceItem, useInvoice } from '@/store/Invoice';

const InvoiceTemplate = ({ isEditable = false }) => {
  const { invoice, setInvoice } = useInvoice();
  const subTotal = totalValue(invoice.invoiceItems.map((item) => item.rate * item.hours));
  const [invoiceItem, setInvoiceItem] = useState({ task: '', rate: 0, hours: 0 });
  const total = (subTotal * (1 + invoice.tax / 100)).toFixed(2);

  const parsedDateIssued =
    typeof invoice.invoiceDetails.dateIssued === 'string'
      ? format(parseISO(invoice.invoiceDetails.dateIssued), 'PPP')
      : format(invoice.invoiceDetails.dateIssued, 'PPP');

  const parsedDateDue =
    typeof invoice.invoiceDetails.dueDate === 'string'
      ? format(parseISO(invoice.invoiceDetails.dueDate), 'PPP')
      : format(invoice.invoiceDetails.dueDate, 'PPP');

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

    setInvoiceItem({ task: '', rate: 0, hours: 0 });
  };

  const removeInvoiceItem = (index) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      invoiceItems: prevInvoice.invoiceItems.filter((_, i) => i !== index),
    }));
  };

  return (
    <CardContainer className='w-3/4 space-y-8 print:w-full print:space-y-3 print:rounded-none print:border-none print:shadow-none '>
      <div className='mb-4 flex flex-col items-start justify-between space-y-4 print:flex-row print:space-y-0 md:flex-row md:space-y-0'>
        <div>
          <InvoiceTemplateField
            isEditable={isEditable}
            value={invoice.companyInfo.name}
            name='companyInfo.name'
            isHighlighted={true}
          />
          <InvoiceTemplateField
            isEditable={isEditable}
            value={invoice.companyInfo.address.part1}
            name='companyInfo.address.part1'
          />
          <InvoiceTemplateField
            isEditable={isEditable}
            value={invoice.companyInfo.address.part2}
            name='companyInfo.address.part2'
          />
          <InvoiceTemplateField
            isEditable={isEditable}
            value={invoice.companyInfo.contacts}
            name='companyInfo.contacts'
          />
        </div>
        <div className='self-stretch'>
          <InvoiceTemplateField
            isEditable={isEditable}
            value={invoice.invoiceDetails.number}
            name='invoiceDetails.number'
            isHighlighted={true}
            additionalText='Invoice #'
          />
          {!isEditable && (
            <>
              <div> {parsedDateIssued ? parsedDateIssued : 'Date not picked'}</div>
              <div> {parsedDateDue ? parsedDateDue : 'Date not picked'}</div>
            </>
          )}
          {isEditable && (
            <div className='space-y-2'>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={clsx(
                      'w-full !border-gray-300 !border-opacity-25 !bg-transparent pl-3 text-left font-normal',
                      !parsedDateIssued && 'text-muted-foreground'
                    )}
                  >
                    {invoice.invoiceDetails.dateIssued ? parsedDateIssued : <span>Pick a date</span>}
                    <BiCalendar className='ml-auto h-4 w-4 opacity-50' />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='z-[52] w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    initialFocus
                    selected={invoice.invoiceDetails.dateIssued || new Date()}
                    onSelect={(date) =>
                      setInvoice({
                        ...invoice,
                        invoiceDetails: {
                          ...invoice.invoiceDetails,
                          dateIssued: date || new Date(),
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
                        !parsedDateDue && 'text-muted-foreground'
                      )}
                    >
                      {invoice.invoiceDetails.dueDate ? parsedDateDue : <span>Pick a date</span>}
                      <BiCalendar className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </div>
                </PopoverTrigger>
                <PopoverContent className='z-[52] w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    initialFocus
                    selected={invoice.invoiceDetails.dueDate || new Date()}
                    onSelect={(date) =>
                      setInvoice({
                        ...invoice,
                        invoiceDetails: {
                          ...invoice.invoiceDetails,
                          dueDate: date || new Date(),
                        },
                      })
                    }
                    className='rounded-md border bg-white dark:bg-mediumBlue'
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
      </div>
      <Separator />
      <div className='my-4 flex flex-col items-start justify-between space-y-4 print:flex-row print:space-y-0 md:flex-row md:space-y-0'>
        <div className='pr-8'>
          <div className='mb-4 text-xl font-bold'>Invoice To:</div>

          <InvoiceTemplateField isEditable={isEditable} value={invoice.clientDetails.name} name='clientDetails.name' />
          <InvoiceTemplateField
            isEditable={isEditable}
            value={invoice.clientDetails.address}
            name='clientDetails.address'
          />
          <InvoiceTemplateField
            isEditable={isEditable}
            value={invoice.clientDetails.phone}
            name='clientDetails.phone'
          />
          <InvoiceTemplateField
            isEditable={isEditable}
            value={invoice.clientDetails.email}
            name='clientDetails.email'
          />
        </div>
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
            <TableRow className='relative' key={index}>
              <TableCell className='font-medium'>{item.task}</TableCell>
              <TableCell>{item.rate}$</TableCell>
              <TableCell>{item.hours}</TableCell>
              <TableCell className='text-right'>{item.rate * item.hours}$</TableCell>
              {isEditable && (
                <TableCell>
                  <Button
                    className='relative h-fit px-2 py-0.5'
                    variant='destructive'
                    onClick={() => removeInvoiceItem(index)}
                  >
                    Remove
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
          {isEditable && (
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
                    value={invoiceItem.rate}
                    onChange={(e) => setInvoiceItem({ ...invoiceItem, rate: Number(e.target.value) })}
                  />
                </TableCell>
                <TableCell>
                  <InputWithLabel
                    label='Hours'
                    id='hours'
                    type='number'
                    value={invoiceItem.hours}
                    onChange={(e) => setInvoiceItem({ ...invoiceItem, hours: Number(e.target.value) })}
                  />
                </TableCell>
              </tr>
              <Button
                disabled={invoiceItem.task === '' || invoiceItem.rate === 0 || invoiceItem.hours === 0}
                className='mt-3'
                variant='secondary'
                onClick={addInvoiceItem}
              >
                <BiPlus className='mr-2' /> Add Item
              </Button>
            </>
          )}
        </TableBody>
      </Table>

      <div className='mt-6 flex flex-col justify-between space-y-4 p-2 print:flex-row md:flex-row md:space-y-0'>
        <div className='flex h-auto w-full items-end justify-start'>
          <InvoiceTemplateField
            isEditable={isEditable}
            value={invoice.salesperson}
            name='salesperson'
            className='h-fit min-w-[200px]'
          />
        </div>
        <div>
          <LabelRow label='SubTotal:' value={` $ ${subTotal.toFixed(2)}`} />
          <div className='flex items-center text-muted-foreground'>
            <InvoiceTemplateField
              isEditable={isEditable}
              value={invoice.tax}
              name='tax'
              className='my-2 mr-2 w-12'
              additionalText='Tax'
            />
            %
          </div>
          <Separator />
          <LabelRow label='Total:' value={`$ ${total}`} />
        </div>
      </div>
      <Separator className='my-4' />
      <InvoiceTemplateField isEditable={isEditable} value={invoice.note} name='note' className='w-full' />
    </CardContainer>
  );
};

export default InvoiceTemplate;
