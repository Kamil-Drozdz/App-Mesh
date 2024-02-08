import { memo, useRef } from 'react';
import { Player } from '@lordicon/react';

import { Button } from '@/UI/Button';
import FilterSection from './FilterSection';
import calendarIllustration from '@/assets/calendar-illustration.webp';
import CalendarIcon from '@/assets/lottieJson/system-regular-23-calendar.json';
import { IconSize } from '@/lib/enums/iconSize';

interface CalendarAddEventProps {
  setIsAddEventOpen: (isAddEventOpen: boolean) => void;
  isAddEventOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  labels: { name: string; color: string }[];
  selectedFilters: string[];
  setSelectedFilters: (selectedFilters: string[]) => void;
}
const CalendarAddEvent = memo(
  ({
    setIsAddEventOpen,
    isAddEventOpen,
    setIsOpen,
    labels,
    selectedFilters,
    setSelectedFilters,
  }: CalendarAddEventProps) => {
    const playerRef = useRef<Player>(null);
    const handleAddEvent = () => {
      setIsAddEventOpen(false);
      setIsOpen(true);
    };

    return (
      <div
        className={`absolute top-0 left-0 z-[2] h-full rounded-l-lg border bg-inherit p-4 md:relative md:mt-3 md:h-auto md:rounded-l-none md:border-none md:p-2   ${
          isAddEventOpen ? 'translate-x-0' : '-translate-x-[130%]'
        } ease min-w-[12rem] flex-col justify-between transition-transform duration-300 md:flex md:translate-x-0`}
      >
        <div className='md:h-full'>
          <Button
            onMouseEnter={() => playerRef.current?.playFromBeginning()}
            onClick={handleAddEvent}
            className='mb-4 w-full space-x-2 !bg-buttonPrimary !text-white hover:brightness-110'
          >
            <Player ref={playerRef} colorize='white' size={IconSize.basic} icon={CalendarIcon} />
            <p> Add Event</p>
          </Button>
          <FilterSection
            setIsAddEventOpen={setIsAddEventOpen}
            labels={labels}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
        <img className='xs:hidden sm:block' height={200} width={200} src={calendarIllustration} />
      </div>
    );
  }
);

export default CalendarAddEvent;
