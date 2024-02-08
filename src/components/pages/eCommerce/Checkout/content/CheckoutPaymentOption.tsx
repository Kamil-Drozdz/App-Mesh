import { Separator } from '@/UI/Separator';

function CheckoutPaymentOption({ totalAmount, cart }) {
  return (
    <div className='relative h-fit space-y-3 rounded-lg bg-secondary p-4'>
      <div>
        <h2 className='text-lg font-semibold'>Price Details</h2>
        <div className='w-full space-y-2 text-gray-400'>
          <div className='flex items-center justify-between'>
            <p>
              Price of
              {cart.length} items
            </p>
            <p>${totalAmount}</p>
          </div>
          <div className='flex items-center justify-between'>
            <p>Delivery Charges</p>
            <p className='text-green-500'>Free</p>
          </div>
          <Separator />
          <div className='flex items-center justify-between'>
            <p>Amount Payable</p>
            <p>${totalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPaymentOption;
