import { AiFillPlusCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useStripe, CardElement, useElements } from '@stripe/react-stripe-js';

import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import { RadioGroup, RadioGroupItem } from '@/UI/RadioGroup';
import { Separator } from '@/UI/Separator';
import { IconSize } from '@/lib/enums/iconSize';
import { FormData } from '../Checkout/CheckoutContent';
import useProductsStore from '@/store/ProductsStore';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { sendDataToBackend } from '@/lib/sendDataToBackend';
import useCurrentUser from '@/store/CurrentUser';

interface CheckoutPaymentProps {
  formData: FormData;
}

function CheckoutPayment({ formData }: CheckoutPaymentProps) {
  const { cart } = useProductsStore();
  const { currentUser } = useCurrentUser();
  const [optionPayment, setOptionPayment] = useState('');
  const [isGiftCard, setIsGiftCard] = useState(false);
  const [giftCode, setGiftCode] = useState('');
  const stripe = useStripe();
  const navigate = useNavigate();
  const elements = useElements();
  const { setItem, getItem } = useLocalStorage('cart');
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');

  const createPaymentIntent = async () => {
    const response = await sendDataToBackend({ items: cart }, currentUser?.uid, 'create-payment-intent');
    setClientSecret(response.clientSecret);
  };
  useEffect(() => {
    const cart = getItem();

    if (cart) {
      useProductsStore.setState({ cart });
    }
    createPaymentIntent();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) return;
    setItem(cart);

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: formData.fullName,
          email: 'contact@kamildrozdz.pl',
          address: {
            city: formData.city,
            country: 'PL',
            line1: formData.address,
            postal_code: formData.zipCode,
            state: formData.state,
          },
          phone: formData.phone,
        },
      },
    });

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
      setProcessing(false);
    } else {
      if (payload.paymentIntent && payload.paymentIntent.status === 'succeeded') {
        setSucceeded(true);
        useProductsStore.setState({ cart: [] });
        navigate('/ecommerce/success');
      } else {
        navigate('/ecommerce/cancel');
        setError('Payment did not succeed.');
      }
      setProcessing(false);
    }
  };

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const paymentOptions = [
    {
      value: 'credit-card',
      label: 'Credit / Debit / ATM Card',
      additionalOption: (
        <div className={`flex ${optionPayment === 'credit-card' ? 'block' : 'hidden'} w-full items-center space-x-2`}>
          <form className='w-full max-w-[600px]'>
            <CardElement
              id='card-element'
              className='my-2'
              options={{
                style: {
                  base: {
                    color: '#ffffff',
                    fontFamily: 'Arial, sans-serif',
                    fontSmoothing: 'antialiased',
                    fontSize: '16px',
                    '::placeholder': {
                      color: '#ffffff',
                    },
                  },
                  invalid: {
                    color: '#fa755a',
                    iconColor: '#fa755a',
                  },
                },
              }}
              onChange={handleChange}
            />
            {error && (
              <div className='my-2 text-red-400' role='alert'>
                {error}
              </div>
            )}
            {processing ? (
              <div className='mx-3 flex  w-fit items-center justify-center'>
                <ThreeDots visible height='40' width='40' color='#895af6' radius='9' ariaLabel='three-dots-loading' />
              </div>
            ) : (
              <>
                {succeeded ? (
                  <div>Payment succeeded!</div>
                ) : (
                  <Button disabled={processing || disabled || succeeded} onClick={handleSubmit} size='sm'>
                    Continue
                  </Button>
                )}
              </>
            )}
          </form>
        </div>
      ),
    },
    {
      value: 'net-banking',
      label: 'Net Banking',
      additionalOption: null,
    },
    {
      value: 'cash-on-delivery',
      label: 'Cash on delivery',
      additionalOption: null,
    },
  ];

  return (
    <div className='relative h-fit space-y-3 rounded-lg bg-secondary  p-4 '>
      <h2 className='text-lg font-semibold'>Payment options</h2>
      <p className='text-gray-500'> Be sure to click on correct payment option</p>

      <div className='flex items-center justify-between'>
        <RadioGroup onValueChange={(e) => setOptionPayment(e)} className='flex w-full flex-col space-y-1 '>
          <p>{formData.fullName}</p>
          {paymentOptions.map((option) => (
            <div className='flex w-full items-center space-x-2'>
              <div className='flex w-full flex-col'>
                <div className='space-x-2'>
                  <RadioGroupItem className='text-buttonPrimary' value={option.value} id={option.value} />
                  <label className='cursor-pointer' htmlFor={option.value}>
                    {option.label}
                  </label>
                </div>
                {option.additionalOption}
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>
      <Separator />
      <Button onClick={() => setIsGiftCard((prev) => !prev)} className='flex items-center space-x-2 '>
        <AiFillPlusCircle size={IconSize.basic} /> <p>Add a gift card</p>
      </Button>
      {isGiftCard && (
        <Input
          value={giftCode}
          onChange={(e) => setGiftCode(e.target.value)}
          className='h-full'
          type='text'
          placeholder='Enter gift card code'
        />
      )}
    </div>
  );
}

export default CheckoutPayment;
