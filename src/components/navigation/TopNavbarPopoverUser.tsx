import { auth } from '@/../firebaseConfig';
import { Button } from '@/UI/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/UI/Popover';
import defaultUser from '@/assets/default-user.webp';
import StatusBadge from '@/common/StatusBadge';
import { profileOptions } from '@/data/navigation/topNavbarItems';
import { BasicRoutes } from '@/lib/enums/routes';
import { UserStatuses } from '@/lib/enums/user';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const TopNavbarPopoverUser = ({ currentUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate(`${BasicRoutes.LOGIN}`);
      toast.success("You're now safely logged out. See you next time!");
    } catch (error) {
      toast.error('Error logging out');
      console.log(error);
    }
  };

  return (
    <Popover>
      <PopoverTrigger className='flex items-center md:space-x-2'>
        <div className=' hidden flex-col items-end justify-center md:flex'>
          {currentUser?.displayName ? <p>{currentUser?.displayName}</p> : <p> User</p>}
          {currentUser?.role ? (
            <span className='text-xs dark:text-gray-400'>{currentUser?.role}</span>
          ) : (
            <span className='text-xs dark:text-gray-400'>User</span>
          )}
        </div>
        <div
          className={`relative flex h-10 w-10 items-center justify-center rounded-full dark:text-white ${
            currentUser?.photoURL || 'bg-lightBlue'
          }`}
        >
          <img height={40} width={40} className='rounded-full' src={currentUser?.photoURL || defaultUser} />
          <StatusBadge className='absolute bottom-0 right-0 ' status={UserStatuses.Online} />
        </div>
        <PopoverContent className='z-[52] w-auto p-0 dark:bg-mediumBlue' sideOffset={18} align='center'>
          <div className='min-w-[140px]'>
            {profileOptions.map((item, index) => (
              <div key={index}>
                {item.href ? (
                  <Link
                    className='my-1 flex items-center space-x-3 p-2 hover:bg-violet-500 hover:bg-opacity-20 hover:text-violet-500'
                    to={item.href || ''}
                  >
                    {item.icon}
                    <p className='text-lg'>{item.label}</p>
                  </Link>
                ) : (
                  <Button onClick={handleLogout} className='w-full' variant='destructive'>
                    {item.icon}
                    <p className='ml-2 text-lg'>{item.label}</p>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </PopoverContent>
      </PopoverTrigger>
    </Popover>
  );
};

export default TopNavbarPopoverUser;
