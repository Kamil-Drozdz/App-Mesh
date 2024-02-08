import { ReactNode } from 'react';

import { convertNumberToThousands } from '@/lib/convertNumberToThousands';
import { totalValue } from '@/lib/totalValue';
import CardContainer from '@/common/CardContainer';

interface CardDataProps {
  className?: string;
  title: string;
  data: {
    labels: string[];
    datasets: {
      fill?: boolean;
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor?: string;
    }[];
  };
  children: ReactNode;
  icon?: ReactNode;
  iconColor?: string;
}
function CardChart({ className, title, data, icon, children, iconColor }: CardDataProps) {
  return (
    <CardContainer className={className}>
      {icon && (
        <div className={`${iconColor} flex h-12 w-12 items-center justify-center rounded-full bg-opacity-25 `}>
          {icon}
        </div>
      )}
      <div className='text-gray-500 dark:text-white'>{title}</div>
      <h4 className='text-2xl font-semibold dark:text-gray-200'>
        {convertNumberToThousands(totalValue(data.datasets[0].data))}
      </h4>
      {children}
    </CardContainer>
  );
}

export default CardChart;
