import { memo, useRef } from 'react';
import { Player } from '@lordicon/react';

import { Button } from '@/UI/Button';
import { tags } from '@/data/pages/todo/tags';
import TodoIcon from '@/assets/lottieJson/system-regular-17-assignment.json';
import { IconSize } from '@/lib/enums/iconSize';

interface TodoAddEventProps {
  isAddEventOpen: boolean;
  handleOpenSideBar: () => void;
  activeTag: string;
  filterByTag: (tag: string) => void;
}
const TodoAddEvent = memo(({ isAddEventOpen, handleOpenSideBar, activeTag, filterByTag }: TodoAddEventProps) => {
  const playerRef = useRef<Player>(null);
  return (
    <div
      className={`md:min-h-auto absolute top-0 left-0 z-[1] h-full min-h-[340px] min-w-[12rem] rounded-l-lg border-[1px] bg-inherit p-2 md:relative md:rounded-l-none md:border-none md:p-0 ${
        isAddEventOpen ? 'translate-x-0' : '-translate-x-[130%]'
      } ease transition-transform duration-300 md:translate-x-0`}
    >
      <Button
        onMouseEnter={() => playerRef.current?.playFromBeginning()}
        onClick={handleOpenSideBar}
        className='mb-4 w-full space-x-2 !bg-buttonPrimary !text-white hover:brightness-110'
      >
        <Player ref={playerRef} colorize='white' size={IconSize.basic} icon={TodoIcon} />
        <p> Add Event</p>
      </Button>
      <p className='text-gray-400'>Tags</p>
      <ul className='mt-2 space-y-2'>
        {tags.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => filterByTag(item.name)}
              className={`${
                activeTag === item.name ? `${item.color} ` : 'border-transparent'
              } flex cursor-pointer items-center space-x-2 border-l-[1px] !bg-transparent p-2`}
            >
              <div className={`h-3 w-3 rounded-full ${item.color} `} />
              <p> {item.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TodoAddEvent;
