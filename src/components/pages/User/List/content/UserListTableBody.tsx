import { UserProps } from './UserList';
import { Button } from '@/UI/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/UI/Popover';
import { TableCell, TableBody, TableRow } from '@/UI/Table';
import { IconSize } from '@/lib/enums/iconSize';
import useCurrentUser from '@/store/CurrentUser';
import { BiDotsVertical, BiUser } from 'react-icons/bi';
import { CgFileDocument } from 'react-icons/cg';
import { FiTrash } from 'react-icons/fi';
import { LuPenSquare } from 'react-icons/lu';
import { SiHashicorp } from 'react-icons/si';

const actions = [
  { label: 'Details', icon: <CgFileDocument /> },
  { label: 'Edit', icon: <LuPenSquare /> },
  { label: 'Delete', icon: <FiTrash /> },
];

interface UserListTableBodyProps {
  currentItems: UserProps[];
}
const UserListTableBody = ({ currentItems }: UserListTableBodyProps) => {
  const { currentUser } = useCurrentUser();
  return (
    <TableBody>
      {currentUser?.role !== 'User' ? (
        <>
          {currentItems.length > 0 ? (
            currentItems.map((user, index) => (
              <TableRow key={index}>
                <TableCell className=' font-medium text-buttonPrimary'>{user?.displayName}</TableCell>
                <TableCell className='font-medium text-gray-400'>{user?.email}</TableCell>
                <TableCell className='font-medium  '>
                  <div className='flex items-center space-x-2 '>
                    {user?.role === 'Admin' ? (
                      <SiHashicorp size={IconSize.basic} className='text-red-400' />
                    ) : (
                      <BiUser size={IconSize.basic} className='text-blue-400' />
                    )}
                    <p>{user?.role}</p>
                  </div>
                </TableCell>
                <TableCell className='font-medium'>{user?.plan}</TableCell>
                <TableCell className='font-medium'>
                  {user?.emailVerified ? (
                    <p className='w-fit rounded-lg bg-green-600 bg-opacity-30 px-2 text-center text-green-600'>
                      active
                    </p>
                  ) : (
                    <p className='w-fit rounded-lg bg-red-600 bg-opacity-30 px-2 text-center text-red-600'>inactive</p>
                  )}
                </TableCell>
                <Popover>
                  <PopoverTrigger className='flex w-full items-center p-1.5 md:space-x-2'>
                    <TableCell className='w-full font-medium '>
                      <BiDotsVertical className='inline' />
                    </TableCell>
                  </PopoverTrigger>
                  <PopoverContent
                    className='z-[52] flex w-auto min-w-[120px] flex-col items-center justify-center !bg-secondary !p-0 shadow-md'
                    align='center'
                  >
                    {actions.map((action) => (
                      <Button className='my-1 flex w-full justify-center space-x-2 !bg-secondary !text-gray-400 hover:!bg-violet-500 hover:!bg-opacity-20 hover:!text-buttonPrimary'>
                        <div>{action.icon}</div>
                        <div className='flex-grow text-center'>
                          <p>{action.label}</p>
                        </div>
                      </Button>
                    ))}
                  </PopoverContent>
                </Popover>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>
                <div>Ups, you have to change filters, users not found</div>
              </TableCell>
            </TableRow>
          )}
        </>
      ) : (
        <TableRow>
          <TableCell>
            <div>You dont have acess to users list</div>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

export default UserListTableBody;
