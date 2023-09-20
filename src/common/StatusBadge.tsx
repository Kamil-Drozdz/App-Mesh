import clsx from '../lib/clsx';
import { UserStatuses } from '../lib/entities/user';

interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	status: UserStatuses;
}

export default function StatusBadge({ status, className, ...props }: StatusBadgeProps) {
	return (
		<div className={clsx('flex items-center justify-center rounded-full border-[2px] h-[11px] w-[11px]', status === UserStatuses.Online && 'bg-green-600', status === UserStatuses.Offline && 'bg-gray-500', status === UserStatuses.DND && 'bg-red-600', status === UserStatuses.Idle && 'bg-yellow-600', className)} {...props}>
			{status === UserStatuses.Offline && <div className='h-1.5 w-1.5 rounded-full bg-midground'></div>}
			{status === UserStatuses.DND && <div className='h-0.5 w-1.5 rounded-sm bg-midground'></div>}
			{status === UserStatuses.Idle && <div className='absolute -left-0.5 -top-0.5 h-2 w-2 rounded-full bg-midground'></div>}
		</div>
	);
}
