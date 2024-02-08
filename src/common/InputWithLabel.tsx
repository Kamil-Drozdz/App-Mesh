import { ChangeEventHandler, KeyboardEventHandler } from 'react';

import { Input } from '@/UI/Input';
import clsx from '@/lib/clsx';

interface InputWithLabelProps {
  value: string | number | null;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
  id: string;
  type: string;
  name?: string;
  readOnly?: boolean;
  className?: string;
  bgColor?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}
function InputWithLabel({
  onKeyDown,
  value,
  name,
  onChange,
  readOnly,
  label,
  id,
  type,
  className,
  bgColor = 'bg-secondary',
}: InputWithLabelProps) {
  return (
    <div className={clsx('relative', className)}>
      <Input
        type={type}
        id={id}
        name={name}
        value={value || ''}
        readOnly={readOnly}
        onKeyDown={onKeyDown}
        onChange={onChange}
        className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-secondary-foreground focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-muted-foreground dark:focus:border-blue-500'
        placeholder=' '
      />
      <label
        htmlFor={id}
        className={`absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform ${bgColor}  px-2 text-sm text-primary duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500`}
      >
        {label}
      </label>
    </div>
  );
}

export default InputWithLabel;
