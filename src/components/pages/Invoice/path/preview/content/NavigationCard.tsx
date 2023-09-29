import { Button } from '@/UI/Button';
import CardContainer from '@/common/CardContainer';

const NavigationCard = ({ handlePrint }) => {
	return (
		<CardContainer className='h-fit space-y-4 flex-col min-w-[16rem] w-1/4 print:hidden md:flex hidden'>
			<Button className='!bg-violet-500 hover:!bg-violet-400 w-full !text-white'>Send Invoice</Button>
			<Button onClick={handlePrint} variant='ghost' className='border'>
				Download
			</Button>
			<Button onClick={() => print()} variant='ghost' className='border'>
				Print
			</Button>
			<Button variant='ghost' className='border'>
				Edit
			</Button>
			<Button className='!bg-green-500 hover:!bg-green-400 w-full !text-white'>Add Payment</Button>
		</CardContainer>
	);
};

export default NavigationCard;
