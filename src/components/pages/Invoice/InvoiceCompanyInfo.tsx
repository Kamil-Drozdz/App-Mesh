import { useInvoice } from '@/store/Invoice';
import InvoiceTemplateField from './InvoiceTemplateField';

const InvoiceCompanyInfo = ({isEditable}) => {
    const { invoice } = useInvoice();
  return (
    <div>
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.companyInfo.name}
        name='companyInfo.name'
        isHighlighted={true}
      />
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.companyInfo.address.part1}
        name='companyInfo.address.part1'
      />
      <InvoiceTemplateField
        isEditable={isEditable}
        value={invoice.companyInfo.address.part2}
        name='companyInfo.address.part2'
      />
      <InvoiceTemplateField isEditable={isEditable} value={invoice.companyInfo.contacts} name='companyInfo.contacts' />
    </div>
  );
};

export default InvoiceCompanyInfo;
