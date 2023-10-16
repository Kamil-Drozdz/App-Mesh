import { Button } from '@/UI/Button';
import { UserProps } from '@/components/pages/User/List/content/UserList';

interface PaginationProps {
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	totalPages: number;
	currentItems: UserProps[];
}

const Pagination = ({ currentPage, setCurrentPage, totalPages, currentItems }: PaginationProps) => {
	const handlePrevPage = () => setCurrentPage(page => Math.max(page - 1, 1));
	const handleNextPage = () => setCurrentPage(page => Math.min(page + 1, totalPages));
	const isPrevDisabled = currentPage === 1;
	const isNextDisabled = currentItems.length === 0 || currentPage === totalPages;

	return (
		<div className='w-full flex items-center justify-center mt-4'>
			<div className='flex items-center justify-center space-x-3 bg-[#242b3d] px-6 rounded-full'>
				<Button variant='empty' onClick={handlePrevPage} disabled={isPrevDisabled}>
					&lt;
				</Button>
				<span className='w-12 h-12 rounded-full bg-violet-500 text-white flex items-center justify-center'>{currentPage}</span>
				<Button variant='empty' onClick={handleNextPage} disabled={isNextDisabled}>
					&gt;
				</Button>
			</div>
		</div>
	);
};

export default Pagination;
