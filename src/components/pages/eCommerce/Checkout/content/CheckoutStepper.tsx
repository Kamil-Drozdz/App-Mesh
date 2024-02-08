import { memo } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutAddress from './CheckoutAddress';
import CheckoutPayment from '../../payments/CheckoutPayment';
import CheckoutStepperItem from './CheckoutStepperItem';
import emptyCart from '@/assets/empty-cart.svg';
import useProductsStore from '@/store/ProductsStore';
import { FormData } from '../CheckoutContent';

interface CheckoutStepperProps {
  activeStep: number;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  formData: FormData;
  errors: Record<string, string>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}
const CheckoutStepper = memo(({ activeStep, setFormData, formData, errors, setErrors }: CheckoutStepperProps) => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  const { cart } = useProductsStore();

  return (
    <>
      {cart.length ? (
        <div data-testid='checkout-items' className=' col-span-2'>
          {activeStep === 1 && (
            <>
              {cart.map((product) => (
                <CheckoutStepperItem key={product.id} product={product} />
              ))}
            </>
          )}
          {activeStep === 2 && (
            <CheckoutAddress errors={errors} setErrors={setErrors} setFormData={setFormData} formData={formData} />
          )}
          <Elements stripe={stripePromise}>{activeStep === 3 && <CheckoutPayment formData={formData} />}</Elements>
        </div>
      ) : (
        <div className='col-span-3 flex h-full min-h-[70vh] w-full flex-col items-center justify-center space-y-4'>
          <img height={300} width={300} className='max-w-[300px]' src={emptyCart} alt='empty cart image' />
          <div>Ups we dont have what you looking for check other item names </div>
        </div>
      )}
    </>
  );
});

export default CheckoutStepper;
