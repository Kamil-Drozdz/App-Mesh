import { useState } from 'react';

import ShopHeader from '../ShopHeader';
import CheckoutOptions from './content/CheckoutOptions';
import CheckoutStepper from './content/CheckoutStepper';
import CheckoutStepperHeader from './content/CheckoutStepperHeader';
import PageContainer from '@/common/PageContainer';

export interface FormData {
  fullName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}

const CheckoutContent = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({ test: '' });

  return (
    <PageContainer>
      <ShopHeader />
      <CheckoutStepperHeader setActiveStep={setActiveStep} activeStep={activeStep} />
      <div className='grid grid-cols-1 space-x-0 space-y-6 md:grid-cols-3 md:space-y-0 md:space-x-6'>
        <CheckoutStepper
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          activeStep={activeStep}
        />
        <CheckoutOptions errors={errors} formData={formData} setActiveStep={setActiveStep} activeStep={activeStep} />
      </div>
    </PageContainer>
  );
};

export default CheckoutContent;
