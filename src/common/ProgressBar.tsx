import { Transition } from 'react-transition-group';


import { getRandomHexColor } from '@/lib/generateRandomColor';
import clsx from '@/lib/clsx';

interface ProgressBarProps {
  className?: string;
  width: number;
}

function ProgressBar({ width, className }: ProgressBarProps) {
  const color = getRandomHexColor();
  const transitionStyles = {
    entering: { width: '0%', backgroundColor: color },
    entered: { width: `${width}%`, backgroundColor: color },
  };

  return (
    <div className='h-1.5 w-full rounded-lg dark:bg-gray-400'>
      <Transition in timeout={300} appear>
        {(state) => (
          <div
            style={{
              ...transitionStyles[state],
            }}
            className={clsx('h-1.5 rounded-lg transition-all duration-1000 ease-in', className)}
          />
        )}
      </Transition>
    </div>
  );
}

export default ProgressBar;
