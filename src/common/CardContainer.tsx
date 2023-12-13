import { ReactNode } from 'react';

import clsx from '@/lib/clsx';

interface CardContainerProps {
  children: ReactNode;
  className?: string;
}
const CardContainer = ({ children, className }: CardContainerProps) => {
  return (
    <section
      className={clsx(
        'shadow-lightGray relative space-y-3 rounded-lg bg-secondary p-4 shadow-md dark:shadow-black',
        className
      )}
    >
      {children}
    </section>
  );
};

export default CardContainer;
