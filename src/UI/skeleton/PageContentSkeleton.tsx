import SideNavbar from '@/components/navigation/SideNavbar';
import TopNavbar from '@/components/navigation/TopNavbar';
import { InfinitySpin } from 'react-loader-spinner';

const PageContentSkeleton = () => {
  return (
    <main className='max-w-[1756px] px-6 py-8 dark:bg-darkBlue dark:text-gray-300 bg-lightWhite transition-colors duration-300 ease text-gray-800 min-h-screen space-y-6 lg:ml-72 '>
      <SideNavbar /> <TopNavbar />
      <div className=' h-[90vh] rounded-lg flex flex-col justify-center items-center'>
        <InfinitySpin width='200' color='#4fa94d' />
        <p>Loading Page</p>
      </div>
    </main>
  );
};

export default PageContentSkeleton;
