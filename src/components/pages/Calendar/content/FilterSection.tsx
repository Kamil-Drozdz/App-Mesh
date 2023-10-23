import { Input } from '@/UI/Input';
import { ChangeEvent } from 'react';

interface FilterSectionProps {
  labels: { name: string; color: string }[];
  selectedFilters: string[];
  setSelectedFilters: (filters: string[]) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ labels, selectedFilters, setSelectedFilters }) => {
  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const filterName = event.target.id;

    if (filterName === 'View All') {
      if (selectedFilters.includes('View All')) {
        setSelectedFilters([]);
      } else {
        setSelectedFilters(labels.map((item) => item.name));
      }
    } else {
      if (selectedFilters.includes(filterName)) {
        setSelectedFilters(selectedFilters.filter((filter) => filter !== 'View All' && filter !== filterName));
      } else {
        setSelectedFilters([...selectedFilters, filterName]);
      }
    }
  };
  return (
    <>
      <p className='text-gray-400'>FILTER</p>
      {labels.map((item, index) => (
        <div className='flex space-x-2 items-center' key={index}>
          <Input
            id={item.name}
            className={`w-4 h-4 ${item.color}`}
            defaultChecked={true}
            type='checkbox'
            checked={selectedFilters.includes(item.name)}
            onChange={handleFilterChange}
          />
          <label htmlFor={item.name}> {item.name}</label>
        </div>
      ))}
    </>
  );
};

export default FilterSection;
