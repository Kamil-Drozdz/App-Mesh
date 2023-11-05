import { Button } from '@/UI/Button';
import CardContainer from '@/common/CardContainer';
import { BasicRoutes, SubRoutes } from '@/lib/enums/routes';
import { Link } from 'react-router-dom';

const NavigationCard = ({ handlePrint }) => {
  return (
    <CardContainer className='hidden h-fit w-1/4 min-w-[16rem] flex-col space-y-4 print:hidden md:flex'>
      <Button className='w-full !bg-violet-500 !text-white hover:!bg-violet-400'>Send Invoice</Button>
      <Button onClick={handlePrint} variant='ghost' className='border'>
        Download
      </Button>
      <Button onClick={() => print()} variant='ghost' className='border'>
        Print
      </Button>
      <Link className='w-full' to={`${BasicRoutes.INVOICE}${SubRoutes.EDIT}`}>
        <Button variant='ghost' className='w-full border'>
          Edit
        </Button>
      </Link>
      <Button className='w-full !bg-green-500 !text-white hover:!bg-green-400'>Add Payment</Button>
    </CardContainer>
  );
};

export default NavigationCard;
