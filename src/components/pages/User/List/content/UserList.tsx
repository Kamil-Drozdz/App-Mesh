import LeftAddSidebar from './LeftAddSidebar';
import UserListTableBody from './UserListTableBody';
import { Button } from '@/UI/Button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/UI/Select';
import { Table, TableCaption, TableHead, TableHeader, TableRow } from '@/UI/Table';
import CardContainer from '@/common/CardContainer';
import Pagination from '@/common/Pagination';
import { SearchInput } from '@/common/SearchInput';
import useFirebaseData from '@/hooks/useFirebaseData';
import { useState } from 'react';

export interface UserProps {
  displayName: string;
  email: string;
  role: string;
  plan: string;
  emailVerified: string;
}

const numbers = [10, 25, 50, 100];

const UserList = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { data: users, loading, error } = useFirebaseData<UserProps[]>('users', 'btRsHRNa7gSCKkWxLXltVbGsCI93');

  const filteredUsers = search
    ? users?.filter((user) => user.displayName.includes(search) || user.email.includes(search))
    : users?.filter(
        (user) =>
          (filters.role === 'All' || user.role === filters.role) &&
          (filters.plan === 'All' || user.plan.toLocaleLowerCase() === filters.plan.toLocaleLowerCase()) &&
          (filters.status === 'All' || user.emailVerified.toLocaleLowerCase() === filters.status.toLocaleLowerCase())
      );

  const totalPages = Math.ceil((filteredUsers?.length || 0) / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers?.slice(indexOfFirstItem, indexOfLastItem) || [];

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
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
                onClick={() => setIsOpen((prev) => !prev)}
                className='h-full w-full !bg-buttonPrimary !text-white hover:brightness-110'
              >
                Add User
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
};

export default UserList;
