import PageContainer from './PageContainer';
import { BasicRoutes } from '@/lib/routes';
import { useNavigate } from 'react-router-dom';

function NotFound() {
	const navigate = useNavigate();

	return (
		<PageContainer>
			<div className='h-full w-full min-h-screen flex flex-col justify-center items-center'>
				<h1 className='text-2xl'>404 - Page Not Found</h1>
				<button onClick={() => navigate(`${BasicRoutes.HOME}`)}>Return to Home</button>
			</div>
		</PageContainer>
	);
}

export default NotFound;
