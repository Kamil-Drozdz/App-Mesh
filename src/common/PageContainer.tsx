import { Button } from '@/UI/Button';
import SideNavbar from '@/components/navigation/SideNavbar';
import TopNavbar from '@/components/navigation/TopNavbar';
import useFullScreen from '@/store/FullScreen';
import { useLocation } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { Transition } from 'react-transition-group';
import { BasicRoutes } from '@/lib/enums/routes';

const PageContainer = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const { isFullScreen, toggleFullScreen } = useFullScreen();

  return (
    <main
      className={` ease h-full min-h-screen space-y-6 bg-background px-6 text-foreground transition-all duration-300 ${
        isFullScreen ? 'ml-0 max-w-full pt-2 pb-8' : 'max-w-[1756px] py-8 lg:ml-72'
      }`}
    >
      <SideNavbar />
      <TopNavbar />
      <Transition in={true} timeout={100} appear={true}>
        {(state) => (
          <div
            className={`space-y-6 transition-all duration-500 ease-in-out ${
              state === 'entered' ? 'opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            {children}
          </div>
        )}
      </Transition>
      <Button
        onClick={toggleFullScreen}
        className={`fixed right-8 bottom-8 z-[100] bg-black text-white ${
          pathname === BasicRoutes.UNAUTHORIZED ? 'hidden' : 'hidden md:block'
        } `}
      >
        {isFullScreen ? 'Back to dashboard Mode' : ' Try Fullscreen'}
      </Button>
    </main>
  );
};
export default PageContainer;
