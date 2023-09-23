import { Button } from '@/UI/Button';
import Badge from '@/assets/badge.svg';
import CardContainer from '@/common/CardContainer';
import { useTranslation } from 'react-i18next';

const CardCongratulation = () => {
	const { t } = useTranslation();
	return (
		<CardContainer className='md:basis-1/3 '>
			<h5 className='text-white md:w-2/3 w-full'>{t('Congratulations')} 🎉 Kamil!</h5>
			<p className='text-lightGray text-xs'>{t('you have won gold medal!')}</p>
			<h3 className=' text-violet-500'>48.9k</h3>
			<Button className='bg-violet-500 hover:bg-violet-400'>{t('View Sales')}</Button>
			<img className='absolute top-0 right-8 !mt-0' src={Badge} alt='Badge' />
		</CardContainer>
	);
};

export default CardCongratulation;
