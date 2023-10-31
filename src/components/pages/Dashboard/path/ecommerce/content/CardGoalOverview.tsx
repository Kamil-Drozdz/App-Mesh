import CardContainer from '@/common/CardContainer';
import { useTranslation } from 'react-i18next';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const CardGoalOverview = () => {
  const { t } = useTranslation();
  return (
    <CardContainer className=' basis-1/3'>
      <div className='flex w-full items-center justify-between space-y-3'>
        <div className='dark:text-white'>{t('Goal Overview')}</div>
        <AiOutlineQuestionCircle />
      </div>
      <div className='mx-auto flex w-1/2 max-w-[260px] flex-col items-center justify-center md:w-full'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 290 290'>
          <circle
            cx='145'
            cy='145'
            r='120'
            fill='transparent'
            strokeWidth='30'
            stroke='#ff6d0b'
            strokeDasharray='651.592993'
            strokeDashoffset='0'
          />

          <text x='50%' y='50%' textAnchor='middle' dominantBaseline='middle' fontSize='36' fill='currentColor'>
            92%
          </text>
        </svg>
        <div className='flex space-x-4'>
          <div className='w-1/2 p-4'>
            <p className='dark:text-gray-200 md:text-2xl'>{t('Completed')}</p>{' '}
            <div className='dark:text-center dark:text-gray-400 md:text-lg'>786,617</div>
          </div>
          <div className='w-1/2 p-4'>
            <p className='whitespace-nowrap dark:text-gray-200 md:text-2xl'>{t('In Progress')}</p>{' '}
            <div className='dark:text-center dark:text-gray-400 md:text-lg'>13,561</div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default CardGoalOverview;
