import { Button } from '@/UI/Button';
import SideNavbar from '@/components/navigation/SideNavbar';
import TopNavbar from '@/components/navigation/TopNavbar';
import useFullScreen from '@/store/FullScreen';
import { PropsWithChildren } from 'react';
import { Transition } from 'react-transition-group';

const PageContainer = ({ children }: PropsWithChildren) => {
  const { isFullScreen, toggleFullScreen } = useFullScreen();

  return (
    <main
      className={` px-6  dark:bg-darkBlue dark:text-gray-300 bg-lightWhite transition-all duration-300 ease text-gray-800 min-h-screen space-y-6 h-full  ${
        isFullScreen ? 'ml-0 max-w-full pt-2 pb-8' : 'lg:ml-72 py-8 max-w-[1756px]'
      }`}
    >
      <SideNavbar />
      <TopNavbar />
      <Transition in={true} timeout={100} appear={true}>
        {(state) => (
          <div
            className={`space-y-6 transition-all ease-in-out duration-500 ${
              state === 'entered' ? 'opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            {children}
          </div>
        )}
      </Transition>
      <Button onClick={toggleFullScreen} className='z-[100] fixed right-8 bottom-8'>
        {isFullScreen ? 'Back to dashboard Mode' : ' Try Fullscreen'}
      </Button>
    </main>
  );
};
export default PageContainer;
