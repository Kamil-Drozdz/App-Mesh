import { useTranslation } from 'react-i18next';
import { BiDotsVertical } from 'react-icons/bi';

import CardContainer from '@/common/CardContainer';
import CardTransactionItem from '@/components/pages/Dashboard/path/ecommerce/content/CardTransactionItem';
import { TransactionData, generateTransactionData } from '@/data/pages/ecommerce/dataTransaction';
import { IconSize } from '@/lib/enums/iconSize';
import { generateData } from '@/lib/generateData';

function CardTransaction() {
  const data: TransactionData[] = generateData(20, generateTransactionData);
  const { t } = useTranslation();
  return (
    <CardContainer className='basis-1/3'>
      <div className='flex w-full items-center justify-between space-y-3'>
        <div className='dark:text-white'>{t('Transaction')}</div>
        <BiDotsVertical size={IconSize.basic} />
      </div>
      <ul className='flex h-[360px] flex-col overflow-y-auto dark:text-center'>
        {data.map((item, index) => (
          <li key={index}>
            <CardTransactionItem item={item} />
          </li>
        ))}
      </ul>
    </CardContainer>
  );
}

export default CardTransaction;
