import { BiSearch } from 'react-icons/bi';

import { Input } from '@/UI/Input';
import clsx from '@/lib/clsx';
import { IconSize } from '@/lib/enums/iconSize';

interface SearchInputProps {
  className?: string;
  isIcon?: boolean;
  search: string;
  setSearch: (search: string) => void;
}
export function SearchInput({ className, isIcon = true, search, setSearch, ...props }: SearchInputProps) {
  return (
    <div className={clsx('relative m-4', className)}>
      {isIcon && <BiSearch size={IconSize.basic} className='absolute top-1/2 left-2 -translate-y-1/2' />}
      <Input
        {...props}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`${isIcon ? 'pl-8' : ''} h-9 w-full`}
        placeholder={`${isIcon ? 'Search' : ''}`}
      />
    </div>
  );
}
