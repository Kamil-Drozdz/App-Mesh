import { stepperHeader } from '@/data/pages/ecommerce/dataCheckout';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const CheckoutStepperHeader = ({ setActiveStep, activeStep }) => {
  return (
    <div className='flex flex-col items-start justify-center space-y-4 md:flex-row md:justify-start md:space-y-0 md:space-x-2'>
      {stepperHeader.map((item, index) => (
        <div
          onClick={() => setActiveStep(item.name)}
          key={index}
          className='flex cursor-pointer items-center space-x-4'
        >
          <div className='flex items-center space-x-4'>
            <div
              className={`${
                activeStep === item.name ? 'bg-violet-500 ' : 'dark:bg-gray-800 bg-gray-300'
              } rounded p-2 transition-colors duration-200 ease-in`}
            >
              {item.icon}
            </div>
            <div className='flex flex-col justify-center leading-none'>
              <p
                className={`${
                  activeStep === item.name ? 'text-violet-500' : 'dark:text-white'
                } transition-colors duration-200 ease-in `}
              >
                {item.name}
              </p>
              <span className='text-sm text-gray-500'>{item.description}</span>
            </div>
          </div>
          {index !== stepperHeader.length - 1 && <MdOutlineKeyboardArrowRight className='hidden md:block' />}
        </div>
      ))}
    </div>
  );
};

export default CheckoutStepperHeader;
