import CardCompanyItem from '@/common/CardCompanyItem';
import CardContainer from '@/common/CardContainer';
import { CompanyData, DataCompany, generateCompanyData, generateData } from '@/data/pages/ecommerce/dataCompany';

const CardCompany = () => {
	const data: CompanyData[] = generateData(20, generateCompanyData);
	const labels = DataCompany();

	return (
		<CardContainer className='max-h-[40vh] overflow-y-auto py-0 '>
			<ul className='flex md:px-4 sticky top-0 dark:bg-mediumBlue bg-white md:p-4 pt-2 md:pt-0 text-[12px] justify-between md:justify-center md:text-base space-x-2 md:space-x-0'>
				{labels.map((label, index) => (
					<li className='basis-1/5 text-center ' key={index}>
						{label.toLocaleUpperCase()}
					</li>
				))}
			</ul>
			<ul className='flex flex-col text-center overflow-y-auto'>
				{data.map((item, index) => (
					<li key={index}>
						<CardCompanyItem item={item} />
					</li>
				))}
			</ul>
		</CardContainer>
	);
};

export default CardCompany;
