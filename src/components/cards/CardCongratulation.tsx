import Badge from '../../assets/badge.svg';
import { Button } from '@/UI/Button';
import CardContainer from '@/common/CardContainer';

const CardCongratulation = () => {
	return (
		<CardContainer className='basis-1/3'>
			<h5 className='text-white'>Congratulations 🎉 Kamil!</h5>
			<p className='text-lightGray text-xs'>you have won gold medal!</p>
			<h3 className=' text-violet-500'>$48.9k</h3>
			<Button className='bg-violet-500 hover:bg-violet-400'>View Sales</Button>
			<img className='absolute top-0 right-8 !mt-0' src={Badge} />
		</CardContainer>
	);
};

export default CardCongratulation;
