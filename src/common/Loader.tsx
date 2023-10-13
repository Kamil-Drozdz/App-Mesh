import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
	return (
		<div className='w-full bg-mediumBlue min-h-screen flex flex-col justify-center items-center'>
			<ThreeCircles height='100' width='100' color='#4fa94d' wrapperStyle={{}} wrapperClass='' visible={true} ariaLabel='three-circles-rotating' outerCircleColor='' innerCircleColor='' middleCircleColor='' />
			<h1 className='text-center text-2xl font-bold text-gray-300'>Loading...</h1>
		</div>
	);
};

export default Loader;
