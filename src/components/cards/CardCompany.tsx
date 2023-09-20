import CardCompanyItem from '@/common/CardCompanyItem';
import CardContainer from '@/common/CardContainer';
import { CompanyData, generateCompanyData, generateData, labels } from '@/data/cards/dataCompany';

const CardCompany = () => {
	const data: CompanyData[] = generateData(20, generateCompanyData);

	return (
		<CardContainer className='max-h-[40vh] overflow-y-auto py-0 '>
			<ul className='flex px-4 sticky top-0 bg-mediumBlue p-4 shadow-lg shadow-mediumBlue'>
				{labels.map((label, index) => (
					<li className='basis-1/5 text-center' key={index}>
						{label}
					</li>
				))}
			</ul>
			<ul className='flex flex-col text-center  overflow-y-auto'>
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
