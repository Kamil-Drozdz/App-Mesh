import SideNavbar from '@/components/navigation/SideNavbar';
import TopNavbar from '@/components/navigation/TopNavbar';
import { InfinitySpin } from 'react-loader-spinner';

const PageContentSkeleton = () => {
  return (
    <main className='ease min-h-screen max-w-[1756px] space-y-6 bg-lightWhite px-6 py-8 text-gray-800 transition-colors duration-300 dark:bg-darkBlue dark:text-gray-300 lg:ml-72 '>
      <SideNavbar /> <TopNavbar />
      <div className=' flex h-[90vh] flex-col items-center justify-center rounded-lg'>
        <InfinitySpin width='200' color='#4fa94d' />
        <p>Loading Page</p>
      </div>
    </main>
  );
};

export default PageContentSkeleton;
