import clsx from '../lib/clsx';
import { getRandomHexColor } from '@/lib/entities/generateRandomColor';
import { Transition } from 'react-transition-group';

interface ProgressBarProps {
	className?: string;
	width: number;
}

const ProgressBar = ({ width, className }: ProgressBarProps) => {
	const color = getRandomHexColor();
	const transitionStyles = {
		entering: { width: '0%', backgroundColor: color },
		entered: { width: `${width}%`, backgroundColor: color },
	};

	return (
		<div className='w-full bg-gray-400 rounded-lg h-1.5'>
			<Transition in={true} timeout={300} appear={true}>
				{state => (
					<div
						style={{
							...transitionStyles[state],
						}}
						className={clsx(`h-1.5 transition-all duration-1000 ease-in rounded-lg`, className)}></div>
				)}
			</Transition>
		</div>
	);
};

export default ProgressBar;
