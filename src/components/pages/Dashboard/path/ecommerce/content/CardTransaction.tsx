import CardContainer from '@/common/CardContainer';
import CardTransactionItem from '@/common/CardTransactionItem';
import { generateData } from '@/data/pages/ecommerce/dataCompany';
import { generateTransactionData } from '@/data/pages/ecommerce/dataTransaction';
import { IconSize } from '@/lib/entities/iconSize';
import { useTranslation } from 'react-i18next';
import { BiDotsVertical } from 'react-icons/bi';

const CardTransaction = () => {
	const data = generateData(20, generateTransactionData);
	const { t } = useTranslation();
	return (
		<CardContainer className='basis-1/3'>
			<div className='space-y-3 flex justify-between items-center w-full'>
				<div className='dark:text-white'>{t('Transaction')}</div>
				<BiDotsVertical size={IconSize.basic} />
			</div>
			<ul className='flex flex-col dark:text-center overflow-y-auto h-[360px]'>
				{data.map((item, index) => (
					<li key={index}>
						<CardTransactionItem item={item} />
					</li>
				))}
			</ul>
		</CardContainer>
	);
};

export default CardTransaction;
