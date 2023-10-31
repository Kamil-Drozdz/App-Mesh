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
        'relative space-y-3 rounded-lg bg-white p-4 shadow-md shadow-lightGray dark:bg-mediumBlue dark:shadow-black',
        className
      )}
    >
      {children}
    </section>
  );
};

export default CardContainer;
