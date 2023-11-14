import { useInvoice } from '@/store/Invoice';
import InvoiceTemplateField from './InvoiceTemplateField';

const InvoiceCompanyInfo = ({ isEditable }) => {
  const { invoice } = useInvoice();

  return (
    <div>
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.companyInfo.name}
        name='companyInfo.name'
        label='Company Name'
        isHighlighted={true}
      />
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.companyInfo.address.part1}
        name='companyInfo.address.part1'
        label='Company Address Line 1'
      />
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.companyInfo.address.part2}
        name='companyInfo.address.part2'
        label='Company Address Line 2'
      />
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.companyInfo.contacts}
        name='companyInfo.contacts'
        label='Company Contact'
        type='number'
      />
    </div>
  );
};

export default InvoiceCompanyInfo;
