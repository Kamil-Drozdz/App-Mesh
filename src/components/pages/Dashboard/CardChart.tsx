import { ReactNode } from 'react';

import CardContainer from '../../../common/CardContainer';
import { convert } from '@/lib/convert';
import { totalValue } from '@/lib/totalValue';

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
const CardChart = ({ className, title, data, icon, children, iconColor }: CardDataProps) => {
  console.log(test);
  return (
    <CardContainer className={className}>
      {icon && (
        <div className={`${iconColor} flex h-12 w-12 items-center justify-center rounded-full bg-opacity-25 `}>
          {icon}
        </div>
      )}
      <div className='text-gray-500 dark:text-white'>{title}</div>
      <h4 className='text-2xl font-semibold dark:text-gray-200'>{convert(totalValue(data.datasets[0].data))}</h4>
      {children}
    </CardContainer>
  );
};

export default CardChart;
