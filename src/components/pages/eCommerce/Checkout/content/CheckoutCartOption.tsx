import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';

const CheckoutCartOption = ({ amount, discount, tax, totalAmount, setActiveStep }) => {
  return (
    <div className='relative col-span-1 h-fit space-y-3 rounded-lg bg-white p-4 dark:bg-mediumBlue'>
      <p className='text-sm font-semibold text-gray-600'>OPTIONS</p>
      <div className='flex w-full items-center justify-between'>
        <p className='text-gray-400'>Coupons</p>
        <span className='text-violet-500'>Apply</span>
      </div>
      <Separator />
      <p className='text-gray-400'>Price Details</p>
      <div className='flex w-full items-center justify-between'>
        <p className='text-gray-400'>Total MRP</p>
        <span>${amount.toFixed(2)}</span>
      </div>
      <div className='flex w-full items-center justify-between'>
        <p className='text-gray-400'>Bag discount</p>
        <span className='text-green-500'>-{discount}$</span>
      </div>
      <div className='flex w-full items-center justify-between'>
        <p className='text-gray-400'>Tax</p>
        <span>${tax}</span>
      </div>
      <div className='flex w-full items-center justify-between'>
        <p className='text-gray-400'>EMI Egibility</p>
        <span className='text-violet-500'>Details</span>
      </div>
      <Separator />
      <div className='flex w-full items-center justify-between'>
        <p className='font-semibold text-gray-400'>Total</p>
        <span className='text-violet-500'>${totalAmount}</span>
      </div>
      <Button
        onClick={() => setActiveStep('Address')}
        className='w-full !bg-violet-500 !text-white hover:!bg-violet-400'
      >
        Place Order
      </Button>
    </div>
  );
};

export default CheckoutCartOption;
