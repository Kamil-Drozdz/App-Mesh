import CheckoutAdressOption from './CheckoutAdressOption';
import CheckoutCartOption from './CheckoutCartOption';
import CheckoutPaymentOption from './CheckoutPaymentOption';
import { totalValue } from '@/lib/totalValue';
import useProductsStore from '@/store/ProductsStore';

const CheckoutOptions = ({ activeStep, setActiveStep, formData }) => {
	const { cart } = useProductsStore();
	const amount = totalValue(cart.map(product => product.price));

	const discount = 10;
	const tax = 1.3;
	const totalAmount = (amount - discount - tax).toFixed(2);

	const isEmptyFields = formData.fullName !== '' && formData.address !== '' && formData.city !== '' && formData.state !== '' && formData.zipCode !== '' && formData.phone !== '';

	return (
		<>
			{cart.length ? (
				<>
					{activeStep === 'Cart' ? <CheckoutCartOption amount={amount} discount={discount} tax={tax} totalAmount={totalAmount} setActiveStep={setActiveStep} /> : null}
					{activeStep === 'Address' && isEmptyFields && <CheckoutAdressOption formData={formData} setActiveStep={setActiveStep} isEmptyFields={isEmptyFields} />}
					{activeStep === 'Payment' ? <CheckoutPaymentOption totalAmount={totalAmount} cart={cart} /> : null}
				</>
			) : null}
		</>
	);
};

export default CheckoutOptions;
