import PageContainer from './PageContainer';
import { Button } from '@/UI/Button';
import unauthorizedPhoto from '@/assets/unauthorized-error.webp';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <PageContainer>
      <img
        className='mx-auto my-auto h-[50%] object-contain'
        width={500}
        height={500}
        src={unauthorizedPhoto}
        alt='named you shall not pass'
      />
      <h2 className='text:sm flex flex-col items-center justify-center text-secondary-foreground md:text-2xl'>
        You Shall not pass!
        <Link to='/login'>
          <Button className=' mx-2 mt-4 rounded-lg bg-orange-600 p-2 font-semibold text-primary'>Log In</Button>
        </Link>
      </h2>
    </PageContainer>
  );
};

export default Unauthorized;
