import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';

const CheckoutCartOption = ({ amount, discount, tax, totalAmount, setActiveStep }) => {
  return (
    <div className='relative col-span-1 h-fit space-y-3 rounded-lg bg-secondary p-4'>
      <p className='text-sm font-semibold text-gray-600'>OPTIONS</p>
      <div className='flex w-full items-center justify-between'>
        <p className='text-muted-foreground'>Coupons</p>
        <span className='text-buttonPrimary'>Apply</span>
      </div>
      <Separator />
      <p className='text-muted-foreground'>Price Details</p>
      <div className='flex w-full items-center justify-between'>
        <p className='text-muted-foreground'>Total MRP</p>
        <span>${amount.toFixed(2)}</span>
      </div>
      <div className='flex w-full items-center justify-between'>
        <p className='text-muted-foreground'>Bag discount</p>
        <span className='text-green-500'>-{discount}$</span>
      </div>
      <div className='flex w-full items-center justify-between'>
        <p className='text-muted-foreground'>Tax</p>
        <span>${tax}</span>
      </div>
      <div className='flex w-full items-center justify-between'>
        <p className='text-muted-foreground'>EMI Egibility</p>
        <span className='text-buttonPrimary'>Details</span>
      </div>
      <Separator />
      <div className='flex w-full items-center justify-between'>
        <p className='font-semibold text-muted-foreground'>Total</p>
        <span className='text-buttonPrimary'>${totalAmount}</span>
      </div>
      <Button
        onClick={() => setActiveStep('Address')}
        className='!bg-buttonPrimary w-full !text-white hover:brightness-110'
      >
        Place Order
      </Button>
    </div>
  );
};

export default CheckoutCartOption;
