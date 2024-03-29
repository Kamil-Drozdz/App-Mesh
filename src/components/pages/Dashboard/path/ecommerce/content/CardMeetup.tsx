import { AiOutlineCalendar } from 'react-icons/ai';
import { PiMapPinBold } from 'react-icons/pi';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/UI/Tooltip';
import organizePhoto from '@/assets/organize.svg';
import CardContainer from '@/common/CardContainer';
import { generateData } from '@/lib/generateData';
import { MeetupDataProps, generateMeetupData } from '@/data/pages/ecommerce/dataMeetup';

function CardMeetup() {
  const data: MeetupDataProps[] = generateData(8, generateMeetupData);

  return (
    <CardContainer className='basis-1/3 !p-0'>
      <div className=' flex justify-center rounded-t-lg'>
        <img height={200} width={300} className=' aspect-video w-full max-w-[300px]' src={organizePhoto} />
      </div>
      <div className='space-y-4 px-4'>
        <div className='flex space-x-4 '>
          <div className='flex flex-col items-center justify-center border-r border-gray-700 pr-4'>
            <p>THU</p>
            <span className='text-lg font-bold'>24</span>
          </div>
          <div className='flex flex-col items-center justify-start'>
            <p className='w-full text-left text-lg font-semibold dark:text-gray-200'>Developer Meetup</p>
            <span className='w-full text-left text-gray-400'>Meet world popular developers</span>
          </div>
        </div>
        <div className='flex'>
          <div className='flex items-center justify-center rounded-lg bg-violet-700 bg-opacity-30 px-2 py-1 text-violet-700'>
            <AiOutlineCalendar size={21} />
          </div>
          <div className='flex flex-col items-center justify-start px-4'>
            <p className='w-full text-left text-base font-semibold dark:text-gray-200'>Sat, May 25, 2020</p>
            <span className='w-full text-left text-sm text-gray-400'>10:AM to 6:PM</span>
          </div>
        </div>
        <div className='flex'>
          <div className='flex items-center justify-center rounded-lg bg-violet-700 bg-opacity-30 px-2 py-1 text-violet-700'>
            <PiMapPinBold size={21} />
          </div>
          <div className='flex flex-col items-center justify-start px-4'>
            <p className='w-full text-left text-base font-semibold dark:text-gray-200'>Central Park</p>
            <span className='w-full text-left text-sm text-gray-400'>Manhattan, New york City</span>
          </div>
        </div>
        <div className='ml-2 flex items-center py-4'>
          {data.map((item, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <img
                    height={32}
                    width={32}
                    className='ease -ml-2 h-8 w-8 cursor-pointer rounded-full object-contain ring-2 ring-secondary transition-all duration-200 hover:-translate-y-2 hover:scale-105'
                    src={item.photo}
                    alt={item.name}
                  />
                </TooltipTrigger>
                <TooltipContent className='bg-black p-2 text-white' sideOffset={12} side='bottom'>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}

          <p className='ml-2 dark:text-white'>+48</p>
        </div>
      </div>
    </CardContainer>
  );
}

export default CardMeetup;
