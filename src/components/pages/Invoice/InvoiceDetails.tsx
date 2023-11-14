import InvoiceTemplateField from './InvoiceTemplateField';
import { useInvoice } from '@/store/Invoice';
import { Popover, PopoverContent, PopoverTrigger } from '@/UI/Popover';
import { Button } from '@/UI/Button';
import clsx from '@/lib/clsx';
import { BiCalendar } from 'react-icons/bi';
import { Calendar } from '@/UI/Calendar';
const InvoiceDetails = ({ isEditable, parsedDateIssued, parsedDateDue }) => {
  const { invoice, setInvoice } = useInvoice();

  return (
    <div className='self-stretch'>
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.invoiceDetails.number}
        name='invoiceDetails.number'
        readOnly
        isHighlighted={true}
        label='Invoice Number'
      />
      {!isEditable && (
        <>
          <div className='flex items-center'>
            <p className='w-1/4'>Date:</p> <div> {parsedDateIssued ? parsedDateIssued : 'Date not picked'}</div>
          </div>
          <div className='flex items-center'>
            <p className='w-1/4'>Due Date:</p> <div> {parsedDateDue ? parsedDateDue : 'Date not picked'}</div>
          </div>
        </>
      )}
      {isEditable && (
        <div className='space-y-2'>
          <Popover>
            <PopoverTrigger asChild>
              <div className='flex items-center space-x-2'>
                <p className='w-1/4'>Date:</p>
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
              </div>
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
                className='rounded-md border'
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <div className='flex items-center space-x-2'>
                <p className='w-1/4'>Due Date:</p>
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
                className='rounded-md border '
              />
            </PopoverContent>
          </Popover>
        </div>
      )}
    </div>
  );
};

export default InvoiceDetails;
