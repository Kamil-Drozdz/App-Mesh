import { Input } from '@/UI/Input';
import { cloneDeep, set } from 'lodash';
import clsx from '@/lib/clsx';
import { useInvoice } from '@/store/Invoice';

const InvoiceTemplateField = ({
  isEditable,
  value,
  name,
  isHighlighted = false,
  className = '',
  additionalText = '',
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
    <Input
      className={clsx('my-2', className)}
      name={name}
      placeholder={value}
      onChange={handleInputChange}
      id={`input-${value}`}
      type={type}
    />
  ) : isHighlighted ? (
    <div className='mb-4 text-xl font-bold'>
      {additionalText}
      {value}
    </div>
  ) : (
    <div>
      {additionalText}
      {value}
    </div>
  );
};

export default InvoiceTemplateField;
