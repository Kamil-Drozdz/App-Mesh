import { AiFillPlusCircle } from 'react-icons/ai';

import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import { RadioGroup, RadioGroupItem } from '@/UI/RadioGroup';
import { Separator } from '@/UI/Separator';
import { IconSize } from '@/lib/enums/iconSize';

const CheckoutPayment = () => {
  return (
    <div className='relative h-fit space-y-3 rounded-lg bg-secondary  p-4 '>
      <h2 className='text-lg font-semibold'>Payment options</h2>
      <p className='text-gray-500'> Be sure to click on correct payment option</p>

      <div className='flex items-center justify-between'>
        <RadioGroup className='flex w-full flex-col space-y-1 '>
          <p>John Doe</p>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem className='text-buttonPrimary' value='debet-card' id='debet-card' />
            <label className='cursor-pointer' htmlFor='debet-card'>
              US Unlocked Debit Card 12XX XXXX XXXX 0000
            </label>
          </div>
          <div className='flex items-center space-x-2'>
            <p className='text-sm text-muted-foreground'>Enter CCV: </p>
            <Input className='h-full' type='password' name='ccv' id='ccv' /> <Button size='sm'>Continue</Button>
          </div>
          <Separator />
          <div className='flex items-center space-x-2'>
            <RadioGroupItem className='text-buttonPrimary' value='credit-card' id='credit-card' />
            <label className='cursor-pointer' htmlFor='credit-card'>
              Credit / Debit / ATM Card
            </label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem className='text-buttonPrimary' value='net-banking' id='net-banking' />
            <label className='cursor-pointer' htmlFor='net-banking'>
              Net Banking
            </label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem className='text-buttonPrimary' value='emi' id='emi' />
            <label className='cursor-pointer' htmlFor='emi'>
              EMI (Easy Installment)
            </label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem className='text-buttonPrimary' value='cash-on-delivery' id='cash-on-delivery' />
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
