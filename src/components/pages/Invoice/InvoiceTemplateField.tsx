import { cloneDeep, set } from 'lodash';

import clsx from '@/lib/clsx';
import { useInvoice } from '@/store/Invoice';
import InputWithLabel from '@/common/InputWithLabel';

const InvoiceTemplateField = ({
  isEditable,
  value,
  label,
  isHighlighted = false,
  className = '',
  name,
  readOnly = false,
  type = 'text',
}) => {
  const { setInvoice } = useInvoice();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInvoice((prevInvoice) => {
      const newInvoice = cloneDeep(prevInvoice);
      set(newInvoice, name, value);
      return newInvoice;
    });
  };
  return isEditable ? (
    <InputWithLabel
      className={clsx('my-3', className)}
      label={label}
      name={name}
      value={value}
      readOnly={readOnly}
      onChange={handleInputChange}
      id={`input-${label}`}
      type={type}
    />
  ) : isHighlighted ? (
    <div className='mb-4 text-xl font-bold'>{value}</div>
  ) : (
    <div className='break-all'>{value}</div>
  );
};

export default InvoiceTemplateField;
