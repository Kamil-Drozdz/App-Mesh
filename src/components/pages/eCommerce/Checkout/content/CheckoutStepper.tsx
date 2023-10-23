import CheckoutAddress from './CheckoutAddress';
import CheckoutPayment from './CheckoutPayment';
import CheckoutStepperItem from './CheckoutStepperItem';
import emptyCart from '@/assets/empty-cart.svg';
import useProductsStore from '@/store/ProductsStore';

const CheckoutStepper = ({ activeStep, setFormData, formData, errors, setErrors }) => {
  const { cart } = useProductsStore();

  return (
    <>
      {cart.length ? (
        <div className=' col-span-2'>
          {activeStep === 'Cart' && (
            <>
              {cart.map((product) => (
                <CheckoutStepperItem key={product.id} product={product} />
              ))}
            </>
          )}
          {activeStep === 'Address' && (
            <CheckoutAddress errors={errors} setErrors={setErrors} setFormData={setFormData} formData={formData} />
          )}
          {activeStep === 'Payment' && <CheckoutPayment />}
        </div>
      ) : (
        <div className='w-full col-span-3 h-full min-h-[70vh] flex justify-center items-center flex-col space-y-4'>
          <img height={300} width={300} className='max-w-[300px]' src={emptyCart} alt='empty cart image' />
          <div>Ups we dont have what you looking for check other item names </div>
        </div>
      )}
    </>
  );
};

export default CheckoutStepper;
