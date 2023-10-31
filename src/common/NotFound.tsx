import { Button } from '@/UI/Button';
import error from '@/assets/error-404.svg';
import { BasicRoutes, SubRoutes } from '@/lib/enums/routes';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='flex h-full min-h-screen w-full items-center justify-center bg-mediumBlue'>
      <div className='flex w-full max-w-[500px] flex-col items-center justify-center px-6'>
        <img width={500} height={500} src={error} className='mb-8 w-full' />
        <Button
          className='!bg-violet-500 !text-white hover:!bg-violet-400'
          onClick={() => navigate(`${BasicRoutes.DASHBOARD}${SubRoutes.ECOMMERCE}`)}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
