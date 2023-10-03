import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';
import CardContainer from '@/common/CardContainer';
import useProductsStore from '@/store/useProductsStore';

const CheckoutOptions = ({ activeStep, setActiveStep, formData }) => {
	const { cart } = useProductsStore();
	const amount = cart.reduce((total, product) => total + product.price, 0);
	const discount = 10;
	const tax = 1.3;
	const totalAmount = (amount - discount - tax).toFixed(2);

	const isEmptyFields = formData.fullName !== '' && formData.address !== '' && formData.city !== '' && formData.state !== '' && formData.zipCode !== '' && formData.phone !== '';

	return (
		<>
			{cart.length ? (
				<>
					{activeStep === 'Cart' ? (
						<CardContainer className=' col-span-1 h-fit'>
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
							<div className='w-full  flex justify-between items-center'>
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
						</CardContainer>
					) : null}
					{activeStep === 'Address' && isEmptyFields && (
						<CardContainer>
							<div>
								<h2 className='text-lg font-semibold'>{formData.fullName}</h2>
								<div className='text-gray-400 space-y-2'>
									<p>{formData.address}</p>
									<p>{formData.city}</p>
									<p>{formData.state}</p>
									<p>{formData.zipCode}</p>
									<p>{formData.phone}</p>
								</div>
							</div>
							<Button onClick={() => setActiveStep('Payment')} disabled={!isEmptyFields} className='!bg-violet-500 disabled:opacity-20 hover:!bg-violet-400 !text-white space-x-2 w-full'>
								Deliver to this Adress
							</Button>
						</CardContainer>
					)}
					{activeStep === 'Payment' ? (
						<CardContainer>
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
						</CardContainer>
					) : null}
				</>
			) : null}
		</>
	);
};

export default CheckoutOptions;
