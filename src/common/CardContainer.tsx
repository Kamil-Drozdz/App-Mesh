import clsx from '@/lib/clsx';
import { ReactNode } from 'react';

interface CardContainerProps {
	children: ReactNode;
	className?: string;
}
const CardContainer = ({ children, className }: CardContainerProps) => {
	return <section className={clsx('relative bg-mediumBlue p-4 rounded-lg space-y-3 shadow-lg shadow-black', className)}>{children}</section>;
};

export default CardContainer;
