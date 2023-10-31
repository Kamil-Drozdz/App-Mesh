import { Input } from '@/UI/Input';
import clsx from '@/lib/clsx';
import { delay } from '@/lib/delay';
import { IconSize } from '@/lib/enums/iconSize';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const useSearch = (isIcon = true, ...props) => {
  const [search, setSearch] = useState('');
  const [isFocused, setFocused] = useState(false);
  useEffect(() => {
    const asyncEffect = async () => {
      await delay(800);
      setFocused(true);
    };
    asyncEffect();
  }, []);

  //TO CHECK potential rerendering problem
  const SearchInput = ({ className }: { className?: string }) => (
    <div className={clsx('relative m-4', className)}>
      {isIcon && <BiSearch size={IconSize.basic} className='absolute top-1/2 left-2 -translate-y-1/2' />}
      <Input
        {...props}
        value={search}
        autoFocus={isFocused}
        onChange={(e) => setSearch(e.target.value)}
        className={`${isIcon ? 'pl-8' : ''} h-9 w-full`}
        placeholder={`${isIcon ? 'Search' : ''}`}
      />
    </div>
  );

  return { search, SearchInput };
};

export default useSearch;
