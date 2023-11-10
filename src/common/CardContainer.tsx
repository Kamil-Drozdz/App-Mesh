import clsx from '@/lib/clsx';
import { ReactNode } from 'react';

interface CardContainerProps {
  children: ReactNode;
  className?: string;
}
const CardContainer = ({ children, className }: CardContainerProps) => {
  return (
    <section
      className={clsx(
        'relative space-y-3 rounded-lg bg-secondary p-4 shadow-md shadow-lightGray dark:shadow-black',
        className
      )}
    >
      {children}
    </section>
  );
};

export default CardContainer;
