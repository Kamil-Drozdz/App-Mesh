import { Button } from '@/UI/Button';
import error from '@/assets/error-404.svg';
import { BasicRoutes, SubRoutes } from '@/lib/routes';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='bg-mediumBlue h-full w-full min-h-screen flex justify-center items-center'>
      <div className='px-6 max-w-[500px] w-full flex flex-col justify-center items-center'>
        <img width={500} height={500} src={error} className='w-full mb-8' />
        <Button
          className='!bg-violet-500 hover:!bg-violet-400 !text-white'
          onClick={() => navigate(`${BasicRoutes.DASHBOARD}${SubRoutes.ECOMMERCE}`)}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
