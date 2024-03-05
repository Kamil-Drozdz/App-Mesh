import { AiFillPlusCircle } from 'react-icons/ai';
import { ThreeDots } from 'react-loader-spinner';
import { CardElement } from '@stripe/react-stripe-js';

import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import { RadioGroup, RadioGroupItem } from '@/UI/RadioGroup';
import { Separator } from '@/UI/Separator';
import { IconSize } from '@/lib/enums/iconSize';
import { FormData } from '../Checkout/CheckoutContent';
import useCheckoutPayment from '@/hooks/useCheckoutPayment';

export interface CheckoutPaymentProps {
  formData: FormData;
}

function CheckoutPayment({ formData }: CheckoutPaymentProps) {
  const {
    optionPayment,
    setOptionPayment,
    isGiftCard,
    setIsGiftCard,
    giftCode,
    setGiftCode,
    handleSubmit,
    handleChange,
    succeeded,
    error,
    processing,
    disabled,
  } = useCheckoutPayment({ formData });

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
