import { BiTrendingDown, BiTrendingUp } from 'react-icons/bi';

import { Separator } from '@/UI/Separator';
import { CompanyData } from '@/data/pages/ecommerce/dataCompany';

interface CardCompanyItemProps {
  item: CompanyData;
}
const CardCompanyItem = ({ item }: CardCompanyItemProps) => {
  return (
    <>
      <dl className='my-1 flex w-full items-center justify-center space-x-2 py-1 text-[12px] transition-colors duration-200 ease-in-out hover:dark:bg-secondary md:px-4 md:text-base'>
        <div className='flex basis-1/5 items-center space-x-2 overflow-hidden text-left md:space-x-4'>
          <dt>
            <img
              className='h-10 w-10 rounded-lg'
              width={40}
              height={40}
              src={item.photo}
              alt={`${item.category} photo`}
            />
          </dt>
          <div className='flex flex-col '>
            <dd>{item.name}</dd>
            <dd className='text-[10px] text-gray-400 dark:text-gray-500 md:text-[12px]'>{item.email}</dd>
          </div>
        </div>
        <dd className='flex basis-1/5 items-center justify-center'>
          <div
            className={`hidden h-12 w-12 items-center justify-center rounded-full bg-[#28c76f] bg-opacity-25 text-[#28c76f] md:flex `}
          >
            {' '}
            {item.icon}
          </div>
          <p className='basis-1/3'> {item.category}</p>
        </dd>
        <dd className='basis-1/5'>{item.views}</dd>
        <dd className='basis-1/5'>{item.revenue}</dd>
        <dd className='flex basis-1/5 items-center justify-center '>
          {item.sales}
          {parseFloat(item.sales) >= 50 ? (
            <BiTrendingUp className='ml-2 text-green-500' />
          ) : (
            <BiTrendingDown className='ml-2 text-red-500' />
          )}
        </dd>
      </dl>
      <Separator />
    </>
  );
};

export default CardCompanyItem;
