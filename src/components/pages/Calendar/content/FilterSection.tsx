import { ChangeEvent } from 'react';

import { Input } from '@/UI/Input';
import { FilterTypesCalendar } from '@/lib/enums/filterTypesCalendar';

interface FilterSectionProps {
  labels: { name: string; color: string }[];
  selectedFilters: string[];
  setSelectedFilters: (filters: string[]) => void;
  setIsAddEventOpen(isAddEventOpen: boolean): void;
}

const FilterSection = ({ setIsAddEventOpen, labels, selectedFilters, setSelectedFilters }: FilterSectionProps) => {
  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const filterName = event.target.id;

    if (filterName === FilterTypesCalendar.all) {
      if (selectedFilters.includes(FilterTypesCalendar.all)) {
        setSelectedFilters([]);
      } else {
        setSelectedFilters(labels.map((item) => item.name));
      }
    } else if (selectedFilters.includes(filterName)) {
      setSelectedFilters(
        selectedFilters.filter((filter) => filter !== FilterTypesCalendar.all && filter !== filterName)
      );
    } else {
      setSelectedFilters([...selectedFilters, filterName]);
    }
    setIsAddEventOpen(false);
  };
  return (
    <>
      <p className='text-gray-400'>FILTER</p>
      {labels.map((item, index) => (
        <div className='flex items-center space-x-2' key={index}>
          <Input
            id={item.name}
            className={`h-4 w-4 ${item.color}`}
            defaultChecked
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
