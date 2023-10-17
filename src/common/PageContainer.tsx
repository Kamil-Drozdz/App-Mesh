import SideNavbar from '@/components/navigation/SideNavbar';
import TopNavbar from '@/components/navigation/TopNavbar';
import { PropsWithChildren } from 'react';
import { Transition } from 'react-transition-group';

const PageContainer = ({ children }: PropsWithChildren) => {
  return (
    <main className='max-w-[1756px] px-6 py-8 dark:bg-darkBlue dark:text-gray-300 bg-lightWhite transition-colors duration-300 ease text-gray-800 min-h-screen space-y-6 h-full lg:ml-72 '>
      <SideNavbar /> <TopNavbar />
      <Transition in={true} timeout={0} appear={true}>
        {(state) => (
          <div
            className={`space-y-6 transition-all ease-in-out duration-500 ${
              state === 'entered' ? 'opacity-100' : 'translate-x-full opacity-30'
            }`}
          >
            {children}
          </div>
        )}
      </Transition>
    </main>
  );
};
export default PageContainer;
