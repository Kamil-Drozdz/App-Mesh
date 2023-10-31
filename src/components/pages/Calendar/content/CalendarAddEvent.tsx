import { Button } from '@/UI/Button';
import FilterSection from './FilterSection';
import calendarIllustration from '@/assets/calendar-illustration.webp';

const CalendarAddEvent = ({
  setIsAddEventOpen,
  isAddEventOpen,
  setIsOpen,
  labels,
  selectedFilters,
  setSelectedFilters,
}) => {
  return (
    <div
      className={`absolute top-0 left-0 z-[2] h-full rounded-l-lg border bg-inherit p-4 md:relative md:mt-3 md:h-auto md:rounded-l-none md:border-none md:p-2   ${
        isAddEventOpen ? 'translate-x-0' : '-translate-x-[130%]'
      } ease min-w-[12rem] flex-col justify-between transition-transform duration-300 md:flex md:translate-x-0`}
    >
      <div className='md:h-full'>
        <Button
          onClick={() => {
            setIsAddEventOpen(false);
            setIsOpen(true);
          }}
          className='mb-4 w-full !bg-violet-500 !text-white hover:bg-violet-400'
        >
          Add Event
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
};

export default CalendarAddEvent;
