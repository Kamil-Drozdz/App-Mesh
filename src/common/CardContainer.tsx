import clsx from '@/lib/clsx';
import { ReactNode } from 'react';

interface CardContainerProps {
	children: ReactNode;
	className?: string;
}
const CardContainer = ({ children, className }: CardContainerProps) => {
	return <section className={clsx('relative dark:bg-mediumBlue bg-white p-4 rounded-lg space-y-3 shadow-md dark:shadow-black shadow-lightGray', className)}>{children}</section>;
};

export default CardContainer;
