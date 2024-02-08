import { Separator } from '@/UI/Separator';
import { TransactionData } from '@/data/pages/ecommerce/dataTransaction';

interface CardTransactionItemProps {
  item: TransactionData;
}
function CardTransactionItem({ item }: CardTransactionItemProps) {
  return (
    <>
      <dl className='hover:bg-lightWhite my-1 flex w-full items-center justify-center px-4 py-1 transition-colors duration-200 ease-in-out hover:dark:bg-secondary'>
        <dd className='flex basis-1/4 items-center justify-center'>
          {parseFloat(item.revenue) >= 499 ? (
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#28c76f] bg-opacity-25 text-[#28c76f] '>
              {item.icon}
            </div>
          ) : (
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-red-500 bg-opacity-25 text-red-500 '>
              {item.icon}
            </div>
          )}
        </dd>
        <div className='flex basis-1/4 space-x-4 text-left'>
          <div className='flex flex-col '>
            <dd>{item.name}</dd>
            <dd className='text-sm text-gray-500'>{item.name}</dd>
          </div>
        </div>
        <div className='flex basis-2/4 items-center justify-end '>
          {parseFloat(item.revenue) >= 499 ? (
            <dt className='ml-2 text-green-500'>+{item.revenue}</dt>
          ) : (
            <dt className='ml-2 text-red-500'>-{item.revenue}</dt>
          )}
        </div>
      </dl>
      <Separator />
    </>
  );
}

export default CardTransactionItem;
