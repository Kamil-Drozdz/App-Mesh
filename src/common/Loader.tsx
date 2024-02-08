import { ThreeCircles } from 'react-loader-spinner';

function Loader() {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center bg-background'>
      <ThreeCircles height='100' width='100' color='#4fa94d' visible ariaLabel='three-circles-rotating' />
      <h1 className='text-center text-2xl font-semibold text-primary'>Loading...</h1>
    </div>
  );
}

export default Loader;
