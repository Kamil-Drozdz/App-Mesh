import ShopHeader from '../ShopHeader';
import CheckoutStepper from './content/CheckoutStepper';
import CheckoutStepperHeader from './content/CheckoutStepperHeader';
import PageContainer from '@/common/PageContainer';
import { useState } from 'react';

const CheckoutContent = () => {
	const [activeStep, setActiveStep] = useState('Cart');
	return (
		<PageContainer>
			<ShopHeader />
			<CheckoutStepperHeader setActiveStep={setActiveStep} activeStep={activeStep} />
			<CheckoutStepper activeStep={activeStep} />
		</PageContainer>
	);
};

export default CheckoutContent;
