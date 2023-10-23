import leftDecore from '@/assets/decore-left.webp';
import rightDecore from '@/assets/decore-right.webp';
import CardContainer from '@/common/CardContainer';
import { IconSize } from '@/lib/iconSize';
import useCurrentUser from '@/store/CurrentUser';
import { useTranslation } from 'react-i18next';
import { PiMedal } from 'react-icons/pi';

const CardCongratulations = () => {
  const { currentUser } = useCurrentUser();
  const { t } = useTranslation();
  return (
    <CardContainer className='md:basis-1/2 p-0'>
      <div className='bg-[#645cd0] w-full rounded-lg text-white h-full'>
        <img height={150} width={150} className='absolute top-0 right-0 max-w-[150px]' src={rightDecore} />
        <img height={150} width={150} className='absolute top-0 left-0 max-w-[150px]' src={leftDecore} />
        <div className='text-center mx-auto p-4 space-y-4'>
          <div className=' flex justify-center items-center'>
            <div className=' flex justify-center items-center w-16 h-16 bg-[#7067f1] shadow-lg shadow-[#22292f3d] rounded-full '>
              <PiMedal size={IconSize.medium} />
            </div>
          </div>
          <h1 className='text-2xl font-semibold'>
            {t('Congratulations')} {currentUser?.displayName || 'User'},
          </h1>
          <p className='md:w-1/2 mx-auto'>{t('accessRestrictionMessage')}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default CardCongratulations;
