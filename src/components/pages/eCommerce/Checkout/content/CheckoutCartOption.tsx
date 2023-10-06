import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';

const  CheckoutCartOption = ({amount,discount,tax,totalAmount,setActiveStep}) => {
	return (
		<div className='relative dark:bg-mediumBlue bg-white p-4 rounded-lg space-y-3 col-span-1 h-fit'>
			<p className='text-gray-600 text-sm font-semibold'>OPTIONS</p>
			<div className='w-full flex justify-between items-center'>
				<p className='text-gray-400'>Coupons</p>
				<span className='text-violet-500'>Apply</span>
			</div>
			<Separator />
			<p className='text-gray-400'>Price Details</p>
			<div className='w-full flex justify-between items-center'>
				<p className='text-gray-400'>Total MRP</p>
				<span>${amount.toFixed(2)}</span>
			</div>
			<div className='w-full flex justify-between items-center'>
				<p className='text-gray-400'>Bag discount</p>
				<span className='text-green-500'>-{discount}$</span>
			</div>
			<div className='w-full flex justify-between items-center'>
				<p className='text-gray-400'>Tax</p>
				<span>${tax}</span>
			</div>
			<div className='w-full flex justify-between items-center'>
				<p className='text-gray-400'>EMI Egibility</p>
				<span className='text-violet-500'>Details</span>
			</div>
			<Separator />
			<div className='w-full flex justify-between items-center'>
				<p className='text-gray-400 font-semibold'>Total</p>
				<span className='text-violet-500'>${totalAmount}</span>
			</div>
			<Button onClick={() => setActiveStep('Address')} className='!bg-violet-500 hover:!bg-violet-400 !text-white w-full'>
				Place Order
			</Button>
		</div>
	);
};

export default CheckoutCartOption;
