import TopNavbar from '@/components/TopNavbar';
import { PropsWithChildren } from 'react';
import { Transition } from 'react-transition-group';

const PageContainer = ({ children }: PropsWithChildren) => {
	return (
		<main className='max-w-[1756px] px-6 py-8 bg-darkBlue text-lightGray min-h-screen space-y-6 h-full lg:ml-72 '>
			<TopNavbar />
			<Transition in={true} appear={true}>
				{state => <div className={`space-y-6 transition-all ease-in-out duration-500 transform  ${state === 'entered' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-30'}`}>{children}</div>}
			</Transition>
		</main>
	);
};
export default PageContainer;
