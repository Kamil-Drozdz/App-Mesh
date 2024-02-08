import { useTranslation } from 'react-i18next';

import { Button } from '@/UI/Button';
import Badge from '@/assets/badge.svg';
import CardContainer from '@/common/CardContainer';
import useCurrentUser from '@/store/CurrentUser';

function CardCongratulation() {
  const { currentUser } = useCurrentUser();
  const { t } = useTranslation();

  return (
    <CardContainer className='md:basis-1/3 '>
      <h5 className='w-full dark:text-white md:w-2/3'>
        {t('Congratulations')} 🎉
        {currentUser?.displayName || 'User'}!
      </h5>
      <p className='dark:text-lightGray text-xs text-gray-400'>{t('you have won gold medal!')}</p>
      <h3 className=' text-buttonPrimary'>48.9k</h3>
      <Button className='!bg-buttonPrimary !text-white hover:brightness-110'>{t('View Sales')}</Button>
      <img className='absolute top-0 right-8 !mt-0' src={Badge} alt='Badge' />
    </CardContainer>
  );
}

export default CardCongratulation;
