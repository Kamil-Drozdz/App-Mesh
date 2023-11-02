import clsx from '../lib/clsx';
import { UserStatuses } from '../lib/enums/user';

interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  status: UserStatuses;
}

export default function StatusBadge({ status, className, ...props }: StatusBadgeProps) {
  return (
    <div
      className={clsx(
        'flex h-[11px] w-[11px] items-center justify-center rounded-full border-[2px] border-darkBlue',
        status === UserStatuses.Online && 'bg-green-600',
        status === UserStatuses.Offline && 'bg-gray-500',
        status === UserStatuses.DND && 'bg-red-600',
        status === UserStatuses.Idle && 'bg-yellow-600',
        className
      )}
      {...props}
    >
      {status === UserStatuses.Offline && <div className='bg-midground h-1.5 w-1.5 rounded-full'></div>}
      {status === UserStatuses.DND && <div className='bg-midground h-0.5 w-1.5 rounded-sm'></div>}
      {status === UserStatuses.Idle && (
        <div className='bg-midground absolute -left-0.5 -top-0.5 h-2 w-2 rounded-full'></div>
      )}
    </div>
  );
}
