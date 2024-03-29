import CardCompanyItem from '@/components/pages/Dashboard/path/ecommerce/content/CardCompanyItem';
import CardContainer from '@/common/CardContainer';
import { CompanyData, DataCompany, generateCompanyData } from '@/data/pages/ecommerce/dataCompany';
import { generateData } from '@/lib/generateData';

function CardCompany() {
  const data: CompanyData[] = generateData(20, generateCompanyData);
  const labels = DataCompany();

  return (
    <CardContainer className='max-h-[40vh] overflow-y-auto py-0 '>
      <ul className='sticky top-0 flex justify-between space-x-2 bg-secondary pt-2 text-[12px] md:justify-center md:space-x-0 md:p-4 md:px-4 md:pt-0 md:text-base'>
        {labels.map((label, index) => (
          <li className=' basis-1/5 text-center' key={index}>
            {label.toLocaleUpperCase()}
          </li>
        ))}
      </ul>
      <ul className='flex flex-col overflow-y-auto text-center'>
        {data.map((item, index) => (
          <li key={index}>
            <CardCompanyItem item={item} />
          </li>
        ))}
      </ul>
    </CardContainer>
  );
}

export default CardCompany;
