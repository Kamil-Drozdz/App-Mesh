import PageContainer from './PageContainer';
import { Button } from '@/UI/Button';
import unauthorizedPhoto from '@/assets/unauthorized-error.png';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
	return (
		<PageContainer>
			<img className='mx-auto my-auto h-[50%] object-contain' src={unauthorizedPhoto} alt='named you shall not pass'></img>
			<h2 className='text:sm flex flex-col items-center justify-center text-gray-300 md:text-2xl'>
				You Shall not pass!
				<Link to='/login'>
					<Button className=' mx-2 mt-4 rounded-lg bg-orange-600 p-2 font-semibold text-black'>Log In</Button>
				</Link>
			</h2>
		</PageContainer>
	);
};

export default Unauthorized;
