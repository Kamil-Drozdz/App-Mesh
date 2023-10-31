import clsx from '../lib/clsx';
import { getRandomHexColor } from '@/lib/generateRandomColor';
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
    <div className='h-1.5 w-full rounded-lg dark:bg-gray-400'>
      <Transition in={true} timeout={300} appear={true}>
        {(state) => (
          <div
            style={{
              ...transitionStyles[state],
            }}
            className={clsx(`h-1.5 rounded-lg transition-all duration-1000 ease-in`, className)}
          ></div>
        )}
      </Transition>
    </div>
  );
};

export default ProgressBar;
