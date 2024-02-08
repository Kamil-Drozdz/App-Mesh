import { Tooltip, TooltipContent, TooltipTrigger } from '@/UI/Tooltip';
import { labels } from '@/data/pages/calendar/calendarData';

export const renderEventContent = (eventInfo) => {
  const { event } = eventInfo;
  const color = labels.find((item) => item.name === event._def.extendedProps.label);

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <Tooltip>
        <TooltipTrigger>
          <div className={`bg-opacity-[12%] ${color?.color} z-1 rounded border border-opacity-10 px-2 font-semibold`}>
            {event.title}
          </div>
        </TooltipTrigger>
        <TooltipContent className=' !bg-black !p-0' side='left'>
          <div className=' bg-lightWhite min-w-[200px] px-6 text-base text-gray-800 dark:bg-secondary dark:text-gray-300'>
            <div className='flex items-center justify-start space-x-2'>
              <span className='font-semibold'>eventURL: </span>
              <a
                target='_blank'
                rel='noreferrer'
                className='!text-blue-500'
                href={event._def.extendedProps.eventUrl}
                onClick={handleLinkClick}
              >
                {event._def.extendedProps.eventUrl}
              </a>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <span className='font-semibold'>Place: </span>
              <p>{event._def.extendedProps.place}</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <span className='font-semibold'>Description: </span>
              <p>{event._def.extendedProps.description}</p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};
