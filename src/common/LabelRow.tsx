import clsx from '@/lib/clsx';

interface LabelRowProps {
  label: string;
  value: string;
  className?: string;
}
const LabelRow = ({ label, value, className }: LabelRowProps) => {
  return (
    <div className={clsx('flex', className)}>
      <p>{label}</p>
      <div className='font-semibold'>{value}</div>
    </div>
  );
};

export default LabelRow;
