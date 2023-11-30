import CardContainer from '@/common/CardContainer';
import { DataStatistic } from '@/data/pages/ecommerce/dataStatistic';
import { useTranslation } from 'react-i18next';

const CardStatiscits = () => {
  const { t } = useTranslation();
  const statisticItem = DataStatistic();

  return (
    <CardContainer className='md:basis-2/3'>
      <div className='flex items-center justify-between pb-4'>
        <h3 className='dark:text-white'> {t('Statistic')}</h3>
        <p className='text-xs text-gray-400'> {t('Updated 1 month ago')}</p>
      </div>
      <ul className='flex flex-row flex-wrap justify-end md:basis-1 md:justify-between'>
        {statisticItem.map((item, index) => (
          <li
            key={index}
            className='flex w-full grow basis-1/4 justify-between space-x-2 px-2 py-2 md:justify-center md:space-x-5'
          >
            <div className={`${item.color} flex h-12 w-12 items-center justify-center rounded-full bg-opacity-25 `}>
              {item.icon}
            </div>
            <div className='basis-1 text-end md:basis-2/3 md:text-left'>
              <p className='text-lg dark:text-white'>{item.amount}</p>
              <span className='text-base text-gray-400'>{item.resources}</span>
            </div>
          </li>
        ))}
      </ul>
    </CardContainer>
  );
};

export default CardStatiscits;
