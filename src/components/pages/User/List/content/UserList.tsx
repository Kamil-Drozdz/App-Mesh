import LeftAddSidebar from './LeftAddSidebar';
import UserListTableBody from './UserListTableBody';
import { db } from '@/../firebaseConfig';
import { Button } from '@/UI/Button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/UI/Select';
import { Table, TableCaption, TableHead, TableHeader, TableRow } from '@/UI/Table';
import CardContainer from '@/common/CardContainer';
import Pagination from '@/common/Pagination';
import useSearch from '@/hooks/useSearch';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export interface UserProps {
	displayName: string;
	email: string;
	role: string;
	plan: string;
	emailVerified: string;
}

const numbers = [10, 25, 50, 100];

const UserList = ({ filters }) => {
	const [users, setUsers] = useState<UserProps[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<null | string>(null);
	const [isOpen, setIsOpen] = useState(false);
	const { search, SearchInput } = useSearch(false);

	useEffect(() => {
		setLoading(true);
		const docRef = doc(db, 'users', 'btRsHRNa7gSCKkWxLXltVbGsCI93');
		const unsubscribeSnapshot = onSnapshot(
			docRef,
			docSnap => {
				setLoading(false);
				if (docSnap.exists()) {
					setUsers(docSnap.data().users);
				} else {
					setError('Document does not exist');
				}
			},
			err => {
				setLoading(false);
				setError(err.message);
			}
		);

		return () => {
			unsubscribeSnapshot();
		};
	}, []);
	const filteredUsers = search ? users.filter(user => user.displayName.includes(search) || user.email.includes(search)) : users.filter(user => (filters.role === 'All' || user.role === filters.role) && (filters.plan === 'All' || user.plan.toLocaleLowerCase() === filters.plan.toLocaleLowerCase()) && (filters.status === 'All' || user.emailVerified.toLocaleLowerCase() === filters.status.toLocaleLowerCase()));
	const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<CardContainer>
			<LeftAddSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
			<Table>
				<TableCaption className='mb-4 '>
					<div className=' flex justify-between items-center'>
						<div className='flex items-center'>
							<p> Show</p>
							<Select onValueChange={e => setItemsPerPage(Number(e))}>
								<SelectTrigger className='md:w-[100px]  whitespace-nowrap mx-2'>
									<SelectValue
										placeholder={
											<div className='flex justify-center items-center space-x-2'>
												<p>{numbers[0]}</p>
											</div>
										}
									/>
								</SelectTrigger>
								<SelectContent className='border-darkBlue'>
									<SelectGroup className='dark:bg-mediumBlue bg-lightWhite dark:text-gray-200'>
										{numbers.map(number => (
											<SelectItem value={number} key={number}>
												<div className='flex justify-center items-center space-x-2'>
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
							<SearchInput className='min-w-[200px]' />
							<Button onClick={() => setIsOpen(prev => !prev)} className='!bg-violet-500 hover:bg-violet-400 w-full !text-white h-full'>
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
			<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} currentItems={currentItems} totalPages={totalPages} />
		</CardContainer>
	);
};

export default UserList;
