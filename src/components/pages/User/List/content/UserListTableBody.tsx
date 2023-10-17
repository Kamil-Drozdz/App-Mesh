import { UserProps } from './UserList';
import { Button } from '@/UI/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/UI/Popover';
import { TableCell, TableBody, TableRow } from '@/UI/Table';
import { IconSize } from '@/lib/iconSize';
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
  return (
    <TableBody>
      {currentItems.length > 0 ? (
        currentItems.map((user, index) => (
          <TableRow key={index}>
            <TableCell className=' font-medium text-violet-500'>{user?.displayName}</TableCell>
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
              <p className='text-red-600 px-2 bg-red-600 bg-opacity-30 w-fit text-center rounded-lg'>
                {user?.emailVerified}
              </p>
            </TableCell>
            <Popover>
              <PopoverTrigger className='flex items-center md:space-x-2 w-full p-1.5'>
                <TableCell className='font-medium w-full '>
                  <BiDotsVertical className='inline' />
                </TableCell>
              </PopoverTrigger>
              <PopoverContent
                className='w-auto  min-w-[120px] p-0 z-[52] bg-lightBlue flex flex-col justify-center items-center shadow-md'
                align='center'
              >
                {actions.map((action) => (
                  <Button className='flex w-full !text-gray-400 !bg-lightBlue space-x-2 my-1 justify-center hover:!text-violet-500 hover:!bg-violet-500 hover:!bg-opacity-20'>
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
    </TableBody>
  );
};

export default UserListTableBody;
