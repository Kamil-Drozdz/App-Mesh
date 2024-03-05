import { memo } from 'react';
import { Player } from '@lordicon/react';

import LeftAddSidebar from './LeftAddSidebar';
import UserListTableBody from './UserListTableBody';
import { Button } from '@/UI/Button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/UI/Select';
import { Table, TableCaption, TableHead, TableHeader, TableRow } from '@/UI/Table';
import CardContainer from '@/common/CardContainer';
import { ErrorComponent } from '@/common/ErrrorComponent';
import Pagination from '@/common/Pagination';
import { SearchInput } from '@/common/SearchInput';
import AvatarIcon from '@/assets/lottieJson/system-regular-8-account.json';
import { IconSize } from '@/lib/enums/iconSize';
import useUserList from '@/hooks/useUserList';

export interface UserListProps {
  filters: { role: string; plan: string; status: string };
}
export interface UserProps {
  displayName: string;
  email: string;
  role: string;
  plan: string;
  emailVerified: string;
}

const numbers = [10, 25, 50, 100];

const UserList = memo(({ filters }: UserListProps) => {
  const {
    playerRef,
    currentPage,
    setCurrentPage,
    setItemsPerPage,
    isOpen,
    setIsOpen,
    search,
    setSearch,
    loading,
    error,
    totalPages,
    currentItems,
  } = useUserList({ filters });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <CardContainer>
      <LeftAddSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Table>
        <TableCaption className='mb-4 '>
          <div className=' flex items-center justify-between'>
            <div className='flex items-center'>
              <p> Show</p>
              <Select onValueChange={(e) => setItemsPerPage(Number(e))}>
                <SelectTrigger className='mx-2  whitespace-nowrap md:w-[80px]'>
                  <SelectValue placeholder={numbers[0]} />
                </SelectTrigger>
                <SelectContent className='border-secondary'>
                  <SelectGroup className='bg-secondary'>
                    {numbers.map((number) => (
                      <SelectItem className='hover:bg-primary-foreground' value={number.toString()} key={number}>
                        <div className='flex items-center justify-center space-x-2'>
                          <p>{number}</p>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <p>entries</p>
            </div>
            <div className='flex items-center'>
              <p>Search:</p>
              <SearchInput search={search} setSearch={setSearch} isIcon={false} className='min-w-[200px]' />
              <Button
                onMouseOver={() => playerRef.current?.playFromBeginning()}
                onClick={() => setIsOpen((prev) => !prev)}
                className='h-full w-full space-x-2 !bg-buttonPrimary !text-white hover:brightness-110'
              >
                <Player ref={playerRef} colorize='white' size={IconSize.basic} icon={AvatarIcon} />
                <p> Add User</p>
              </Button>
            </div>
          </div>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-1/4'>USER</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>ROLE</TableHead>
            <TableHead>PLAN</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead className='text-center'>ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <UserListTableBody currentItems={currentItems} />
      </Table>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentItems={currentItems}
        totalPages={totalPages}
      />
    </CardContainer>
  );
});

export default UserList;
