import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { auth } from '@/../firebaseConfig';
import { Button } from '@/UI/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/UI/Popover';
import StatusBadge from '@/common/StatusBadge';
import { profileOptions } from '@/data/navigation/topNavbarItems';
import { BasicRoutes } from '@/lib/enums/routes';
import { UserStatuses } from '@/lib/enums/user';

function TopNavbarPopoverUser({ currentUser }) {
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
            <span className='text-xs  text-muted-foreground'>{currentUser?.role}</span>
          ) : (
            <span className='text-xs dark:text-gray-400'>user</span>
          )}
        </div>
        <div
          className={`relative flex h-10 w-10 items-center justify-center rounded-full ${
            currentUser?.photoURL || 'bg-secondary'
          }`}
        >
          <img height={40} width={40} className='rounded-full' src={currentUser?.photoURL} />
          <StatusBadge className='absolute bottom-0 right-0 ' status={UserStatuses.Online} />
        </div>
        <PopoverContent className='z-[52] w-auto !bg-secondary !p-0' sideOffset={18} align='center'>
          <div className='min-w-[140px]'>
            {profileOptions.map((item, index) => (
              <div key={index}>
                {item.href ? (
                  <Link
                    className=' my-1 flex items-center space-x-3 p-2 hover:bg-violet-500 hover:bg-opacity-20 hover:text-buttonPrimary'
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
}

export default TopNavbarPopoverUser;
