import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/UI/Select';
import CardContainer from '@/common/CardContainer';

export const roles = ['All', 'Author', 'Editor', 'Admin', 'Subscriber'];
export const plans = ['All', 'Basic', 'Company', 'Enterprise', 'Team'];
export const statuses = ['All', 'Pending', 'Inactive', 'Active'];
function UserFilter({ filters, setFilters }) {
  return (
    <CardContainer>
      <p>Search Filter</p>
      <div className='flex space-x-2'>
        <Select onValueChange={(e) => setFilters({ ...filters, role: e as string })}>
          <SelectTrigger className='mx-2  whitespace-nowrap md:w-[150px]'>
            <SelectValue
              placeholder={
                <div className='flex items-center justify-center space-x-2'>
                  <p>All</p>
                </div>
              }
            />
          </SelectTrigger>
          <SelectContent className='border-secondary'>
            <SelectGroup className='bg-secondary'>
              {roles.map((role) => (
                <SelectItem className='hover:bg-primary-foreground' value={role} key={role}>
                  <div className='flex items-center justify-center space-x-2 '>
                    <p>{role}</p>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={(e) => setFilters({ ...filters, plan: e as string })}>
          <SelectTrigger className='mx-2  whitespace-nowrap md:w-[150px]'>
            <SelectValue
              placeholder={
                <div className='flex items-center justify-center space-x-2'>
                  <p>All</p>
                </div>
              }
            />
          </SelectTrigger>
          <SelectContent className='border-secondary'>
            <SelectGroup className='bg-secondary'>
              {plans.map((plan) => (
                <SelectItem className='hover:bg-primary-foreground' value={plan} key={plan}>
                  <div className='flex items-center justify-center space-x-2'>
                    <p>{plan}</p>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={(e) => setFilters({ ...filters, status: e as string })}>
          <SelectTrigger className='mx-2  whitespace-nowrap md:w-[150px]'>
            <SelectValue
              placeholder={
                <div className='flex items-center justify-center space-x-2'>
                  <p>All</p>
                </div>
              }
            />
          </SelectTrigger>
          <SelectContent className='border-secondary'>
            <SelectGroup className='bg-secondary'>
              {statuses.map((status) => (
                <SelectItem className='hover:bg-primary-foreground' value={status} key={status}>
                  <div className='flex items-center justify-center space-x-2'>
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
}

export default UserFilter;
