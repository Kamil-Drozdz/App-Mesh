import { Input } from '@/UI/Input';
import clsx from '@/lib/clsx';
import { delay } from '@/lib/delay';
import { IconSize } from '@/lib/iconSize';
import { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const useSearch = (isIcon = true) => {
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  //useref with delay is due to the autofocus problem regarding Search, due to the component's rerendering there must be such an intention
  useEffect(() => {
    const focusInput = async () => {
      await delay(800);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    focusInput();

    // ... (inny kod)
  }, []);
  //TO CHECK potential rerendering problem
  const SearchInput = ({ className }: { className?: string }) => (
    <div className={clsx('relative m-4', className)}>
      {isIcon && <BiSearch size={IconSize.basic} className='absolute -translate-y-1/2 top-1/2 left-2' />}
      <Input
        value={search}
        ref={inputRef}
        onChange={(e) => setSearch(e.target.value)}
        className={`${isIcon ? 'pl-8' : ''} w-full h-9`}
        placeholder={`${isIcon ? 'Search' : ''}`}
      />
    </div>
  );

  return { search, SearchInput };
};

export default useSearch;
