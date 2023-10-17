import { Separator } from '@/UI/Separator';

const CheckoutPaymentOption = ({ totalAmount, cart }) => {
  return (
    <div className='relative dark:bg-mediumBlue bg-white p-4 rounded-lg space-y-3 h-fit'>
      <div>
        <h2 className='text-lg font-semibold'>Price Details</h2>
        <div className='text-gray-400 space-y-2 w-full'>
          <div className='flex justify-between items-center'>
            <p>Price of {cart.length} items</p>
            <p>${totalAmount}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p>Delivery Charges</p>
            <p className='text-green-500'>Free</p>
          </div>
          <Separator />
          <div className='flex justify-between items-center'>
            <p>Amount Payable</p>
            <p>${totalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPaymentOption;
