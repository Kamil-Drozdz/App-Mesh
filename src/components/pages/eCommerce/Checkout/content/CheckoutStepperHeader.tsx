import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { stepperHeader } from '@/data/pages/ecommerce/dataCheckout';
import useProductsStore from '@/store/ProductsStore';
import { useEffect, useState } from 'react';

const CheckoutStepperHeader = ({ setActiveStep, activeStep }) => {
  const { cart } = useProductsStore();
  const [maxReachedStep, setMaxReachedStep] = useState(1);

  useEffect(() => {
    if (activeStep > maxReachedStep) setMaxReachedStep(activeStep);
  }, [activeStep]);

  const handleStepChange = (nextStepNumber) => {
    if (!cart.length && nextStepNumber >= 2) {
      return alert("You don't have items in your cart.");
    }
    if (nextStepNumber <= maxReachedStep) {
      setActiveStep(nextStepNumber);
    }
  };

  return (
    <div className='flex flex-col items-start justify-center space-y-4 md:flex-row md:justify-start md:space-y-0 md:space-x-2'>
      {stepperHeader.map((item, index) => {
        const indexItem = index + 1;
        return (
          <div
            onClick={() => handleStepChange(indexItem)}
            key={index}
            className='flex cursor-pointer items-center space-x-4'
          >
            <div className='flex items-center space-x-4'>
              <div
                className={`${
                  activeStep === indexItem ? 'bg-buttonPrimary ' : 'bg-gray-300 dark:bg-gray-800'
                } rounded p-2 transition-colors duration-200 ease-in`}
              >
                {item.icon}
              </div>
              <div className='flex flex-col justify-center leading-none'>
                <p
                  className={`${
                    activeStep === indexItem ? 'text-buttonPrimary' : 'dark:text-white'
                  } transition-colors duration-200 ease-in `}
                >
                  {item.name}
                </p>
                <span className='text-sm text-gray-500'>{item.description}</span>
              </div>
            </div>
            {index !== stepperHeader.length - 1 && <MdOutlineKeyboardArrowRight className='hidden md:block' />}
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutStepperHeader;
