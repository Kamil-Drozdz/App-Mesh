import CheckoutStepperItem from './CheckoutStepperItem';
import useProductsStore from '@/store/useProductsStore';

const CheckoutStepper = ({ activeStep }) => {
	const { cart } = useProductsStore();

	return (
		activeStep === 'Cart' && (
			<>
				{cart.map(product => (
					<CheckoutStepperItem key={product.id} product={product} />
				))}
			</>
		)
	);
};

export default CheckoutStepper;
