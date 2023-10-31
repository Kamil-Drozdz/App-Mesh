import leftDecore from '@/assets/decore-left.webp';
import rightDecore from '@/assets/decore-right.webp';
import CardContainer from '@/common/CardContainer';
import { IconSize } from '@/lib/enums/iconSize';
import useCurrentUser from '@/store/CurrentUser';
import { useTranslation } from 'react-i18next';
import { PiMedal } from 'react-icons/pi';

const CardCongratulations = () => {
  const { currentUser } = useCurrentUser();
  const { t } = useTranslation();
  return (
    <CardContainer className='p-0 md:basis-1/2'>
      <div className='h-full w-full rounded-lg bg-[#645cd0] text-white'>
        <img height={150} width={150} className='absolute top-0 right-0 max-w-[150px]' src={rightDecore} />
        <img height={150} width={150} className='absolute top-0 left-0 max-w-[150px]' src={leftDecore} />
        <div className='mx-auto space-y-4 p-4 text-center'>
          <div className=' flex items-center justify-center'>
            <div className=' flex h-16 w-16 items-center justify-center rounded-full bg-[#7067f1] shadow-lg shadow-[#22292f3d] '>
              <PiMedal size={IconSize.medium} />
            </div>
          </div>
          <h1 className='text-2xl font-semibold'>
            {t('Congratulations')} {currentUser?.displayName || 'User'},
          </h1>
          <p className='mx-auto md:w-1/2'>{t('accessRestrictionMessage')}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default CardCongratulations;
