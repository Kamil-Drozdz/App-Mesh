import { memo } from 'react';

import CheckoutAdressOption from './CheckoutAdressOption';
import CheckoutCartOption from './CheckoutCartOption';
import CheckoutPaymentOption from './CheckoutPaymentOption';
import { totalValue } from '@/lib/totalValue';
import useProductsStore from '@/store/ProductsStore';
import { FormData } from '../CheckoutContent';

interface CheckoutOptionsProps {
  activeStep: number;
  setActiveStep: (step: number) => void;
  errors: Record<string, string>;
  formData: FormData;
}
const CheckoutOptions = memo(({ activeStep, setActiveStep, errors, formData }: CheckoutOptionsProps) => {
  const { cart } = useProductsStore();
  const amount = totalValue(cart.map((product) => product.price * product.userQuantity));
  const discount = 10;
  const tax = 1.3;
  const totalAmount = (amount - discount + tax).toFixed(2);
  return (
    <>
      {cart.length ? (
        <>
          {activeStep === 1 ? (
            <CheckoutCartOption
              amount={amount}
              discount={discount}
              tax={tax}
              totalAmount={totalAmount}
              setActiveStep={setActiveStep}
            />
          ) : null}
          {activeStep === 2 && Object.keys(errors).length === 0 && (
            <CheckoutAdressOption formData={formData} setActiveStep={setActiveStep} errors={errors} />
          )}
          {activeStep === 3 ? <CheckoutPaymentOption totalAmount={totalAmount} cart={cart} /> : null}
        </>
      ) : null}
    </>
  );
});

export default CheckoutOptions;
