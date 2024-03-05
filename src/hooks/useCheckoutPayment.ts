import { useEffect, useState } from 'react';
import { useStripe, CardElement, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

import useProductsStore from '@/store/ProductsStore';
import { useLocalStorage } from '@/hooks/reusable/useLocalStorage';
import { sendDataToBackend } from '@/lib/sendDataToBackend';
import useCurrentUser from '@/store/CurrentUser';
import { CheckoutPaymentProps } from '@/components/pages/eCommerce/payments/CheckoutPayment';

function useCheckoutPayment({ formData }:CheckoutPaymentProps) {
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

  return {
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
  };
}

export default useCheckoutPayment;
