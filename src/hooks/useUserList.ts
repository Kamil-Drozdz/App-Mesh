import { useRef, useState } from 'react';
import { Player } from '@lordicon/react';

import useFirebaseCachedData from '@/hooks/reusable/useFirebaseCachedData';
import { UserListProps, UserProps } from '@/components/pages/User/List/content/UserList';

function useUserList({ filters }:UserListProps) {
  const playerRef = useRef<Player>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { data: users, loading, error } = useFirebaseCachedData<UserProps[]>('users', 'btRsHRNa7gSCKkWxLXltVbGsCI93');

  const filteredUsers = search
    ? users?.filter((user) => user.displayName.includes(search) || user.email.includes(search))
    : users?.filter(
        (user) =>
          (filters.role === 'All' || user?.role === filters.role) &&
          (filters.plan === 'All' || user?.plan.toLocaleLowerCase() === filters.plan.toLocaleLowerCase())
        //   &&  (filters.status === 'All' || user?.emailVerified.toLocaleLowerCase() === filters.status.toLocaleLowerCase())
      );

  const totalPages = Math.ceil((filteredUsers?.length || 0) / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers?.slice(indexOfFirstItem, indexOfLastItem) || [];

  setTimeout(() => {
    playerRef?.current?.goToLastFrame();
  }, 0);

  return {
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
  };
}

export default useUserList;
