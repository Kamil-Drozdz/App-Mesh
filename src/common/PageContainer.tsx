import TopNavbar from '@/components/TopNavbar';
import { PropsWithChildren } from 'react';

const PageContainer = ({ children }: PropsWithChildren) => {
	return (
		<main className='max-w-[1756px] px-6 py-8 bg-darkBlue text-lightGray min-h-screen space-y-6 h-full lg:ml-72'>
			<TopNavbar />
			{children}
		</main>
	);
};

export default PageContainer;
