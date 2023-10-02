import clsx from '@/lib/clsx';

type BorderedBadgeProps = {
	count?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export default function BorderedBadge({ count, className, ...props }: BorderedBadgeProps) {
	return (
		<div className={clsx(' absolute -bottom-0 -right-1 align-bottom transition-all', 'min-w-[16px] text-center', 'rounded-full px-[4px] py-[0px] text-[11px] font-bold', 'border-1 border-transparent bg-red-500 text-white', count ? 'scale-100 opacity-100' : 'scale-0 opacity-0', className)} {...props}>
			{count && (count > 99 ? '99+' : count)}
		</div>
	);
}
