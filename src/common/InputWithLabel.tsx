import { Input } from '@/UI/Input';
import clsx from '@/lib/clsx';
import { ChangeEventHandler, KeyboardEventHandler } from 'react';

interface InputWithLabelProps {
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
  id: string;
  type: string;
  className?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}
const InputWithLabel = ({ onKeyDown, value, onChange, label, id, type, className }: InputWithLabelProps) => {
  return (
    <div className={clsx('relative', className)}>
      <Input
        type={type}
        id={id}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
        placeholder=' '
      />
      <label
        htmlFor={id}
        className='absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-mediumBlue peer-focus:dark:text-blue-500'
      >
        {label}
      </label>
    </div>
  );
};

export default InputWithLabel;
