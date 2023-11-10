import { Button } from '@/UI/Button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/UI/Tooltip';
import CardContainer from '@/common/CardContainer';
import { MeetupDataProps, generateMeetupData } from '@/data/pages/ecommerce/dataMeetup';
import { generateData } from '@/lib/generateData';

const CardProject = () => {
  const data: MeetupDataProps[] = generateData(6, generateMeetupData);

  return (
    <CardContainer className='flex basis-1/3 flex-col justify-between space-y-3'>
      <p className='w-fit rounded-lg bg-blue-500 bg-opacity-30 px-2 text-center text-blue-500'>03 Sep, 20</p>
      <h2 className='text-2xl dark:text-gray-300'>App design</h2>
      <span className='text-sm font-thin text-gray-400'>
        You can Find Only Post and Quotes Related to IOS like ipad app design, iphone app design
      </span>
      <div className='flex flex-col dark:text-white'>
        <p>TEAM </p>
        <div className='flex space-x-3 px-2'>
          <p className='w-fit rounded-lg bg-orange-600 bg-opacity-30 px-2 text-center text-orange-600'>Figma</p>
          <p className='w-fit rounded-lg bg-violet-600 bg-opacity-30 px-2 text-center text-violet-600'>Wireframe</p>
        </div>
      </div>
      <p className='dark:text-white'>MEMBERS</p>
      <div className='flex items-center py-4'>
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

        <p className='ml-2 text-white'>+4</p>
      </div>
      <div className='flex items-center justify-start space-x-4'>
        <div className='rounded bg-gray-200 px-2 py-1 text-center dark:bg-gray-900'>
          <p className='text-gray-500'>Due Date</p>
          <span className='whitespace-nowrap font-semibold text-gray-400'>12 Apr, 21</span>
        </div>
        <div className='rounded bg-gray-200 px-2 py-1 text-center dark:bg-gray-900'>
          <p className='text-gray-500'>Budget</p>
          <span className='whitespace-nowrap font-semibold  text-gray-400'>$49251.91 </span>
        </div>
        <div className='rounded bg-gray-200 px-2 py-1 text-center dark:bg-gray-900'>
          <p className='text-gray-500'>Cost</p>
          <span className='whitespace-nowrap font-semibold  text-gray-400'>$840.99 </span>
        </div>
      </div>
      <Button className='!bg-buttonPrimary w-full !text-white hover:brightness-110'>Join Team</Button>
    </CardContainer>
  );
};

export default CardProject;
