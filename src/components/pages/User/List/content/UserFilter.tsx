import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/UI/Select';
import CardContainer from '@/common/CardContainer';

export const roles = ['All', 'Author', 'Editor', 'Admin', 'Subscriber'];
export const plans = ['All', 'Basic', 'Company', 'Enterprise', 'Team'];
export const statuses = ['All', 'Pending', 'Inactive', 'Active'];
const UserFilter = ({ filters, setFilters }) => {
	return (
		<CardContainer>
			<p>Search Filter</p>
			<div className='flex space-x-2'>
				<Select onValueChange={e => setFilters({ ...filters, role: e })}>
					<SelectTrigger className='md:w-[150px]  whitespace-nowrap mx-2'>
						<SelectValue
							placeholder={
								<div className='flex justify-center items-center space-x-2'>
									<p>All</p>
								</div>
							}
						/>
					</SelectTrigger>
					<SelectContent className='border-darkBlue'>
						<SelectGroup className='dark:bg-mediumBlue bg-lightWhite dark:text-gray-200'>
							{roles.map(role => (
								<SelectItem value={role} key={role}>
									<div className='flex justify-center items-center space-x-2'>
										<p>{role}</p>
									</div>
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<Select onValueChange={e => setFilters({ ...filters, plan: e })}>
					<SelectTrigger className='md:w-[150px]  whitespace-nowrap mx-2'>
						<SelectValue
							placeholder={
								<div className='flex justify-center items-center space-x-2'>
									<p>All</p>
								</div>
							}
						/>
					</SelectTrigger>
					<SelectContent className='border-darkBlue'>
						<SelectGroup className='dark:bg-mediumBlue bg-lightWhite dark:text-gray-200'>
							{plans.map(plan => (
								<SelectItem value={plan} key={plan}>
									<div className='flex justify-center items-center space-x-2'>
										<p>{plan}</p>
									</div>
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<Select onValueChange={e => setFilters({ ...filters, status: e })}>
					<SelectTrigger className='md:w-[150px]  whitespace-nowrap mx-2'>
						<SelectValue
							placeholder={
								<div className='flex justify-center items-center space-x-2'>
									<p>All</p>
								</div>
							}
						/>
					</SelectTrigger>
					<SelectContent className='border-darkBlue'>
						<SelectGroup className='dark:bg-mediumBlue bg-lightWhite dark:text-gray-200'>
							{statuses.map(status => (
								<SelectItem value={status} key={status}>
									<div className='flex justify-center items-center space-x-2'>
										<p>{status}</p>
									</div>
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</CardContainer>
	);
};

export default UserFilter;
