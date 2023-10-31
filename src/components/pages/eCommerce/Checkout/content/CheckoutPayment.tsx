import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import { RadioGroup, RadioGroupItem } from '@/UI/RadioGroup';
import { Separator } from '@/UI/Separator';
import { IconSize } from '@/lib/enums/iconSize';
import { AiFillPlusCircle } from 'react-icons/ai';

const CheckoutPayment = () => {
  return (
    <div className='relative h-fit space-y-3 rounded-lg bg-white p-4 dark:bg-mediumBlue'>
      <h2 className='text-lg font-semibold'>Payment options</h2>
      <p className='text-gray-500'> Be sure to click on correct payment option</p>

      <div className='flex items-center justify-between'>
        <RadioGroup className='flex w-full flex-col space-y-1 '>
          <p>John Doe</p>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem className='text-violet-500' value='debet-card' id='debet-card' />
            <label className='cursor-pointer' htmlFor='debet-card'>
              US Unlocked Debit Card 12XX XXXX XXXX 0000
            </label>
          </div>
          <div className='flex items-center space-x-2'>
            <p className='text-sm text-gray-400'>Enter CCV: </p>
            <Input className='h-full' type='password' name='ccv' id='ccv' /> <Button size='sm'>Continue</Button>
          </div>
          <Separator />
          <div className='flex items-center space-x-2'>
            <RadioGroupItem className='text-violet-500' value='credit-card' id='credit-card' />
            <label className='cursor-pointer' htmlFor='credit-card'>
              Credit / Debit / ATM Card
            </label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem className='text-violet-500' value='net-banking' id='net-banking' />
            <label className='cursor-pointer' htmlFor='net-banking'>
              Net Banking
            </label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem className='text-violet-500' value='emi' id='emi' />
            <label className='cursor-pointer' htmlFor='emi'>
              EMI (Easy Installment)
            </label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem className='text-violet-500' value='cash-on-delivery' id='cash-on-delivery' />
            <label className='cursor-pointer' htmlFor='cash-on-delivery'>
              Cash On Delivery
            </label>
          </div>
        </RadioGroup>
      </div>
      <Separator />
      <Button className='flex items-center space-x-2 '>
        <AiFillPlusCircle size={IconSize.basic} /> <p>Add a gift card</p>
      </Button>
    </div>
  );
};

export default CheckoutPayment;
