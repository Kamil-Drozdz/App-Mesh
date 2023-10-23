import DecorativeDot from './DecorativeDot';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/UI/Tooltip';

function CardTimelineItem({ title, timestamp, content, images, icon, color }) {
  return (
    <div className='relative pl-10 pb-4 border-l-[1px] dark:border-gray-600 border-gray-300 '>
      <DecorativeDot color={color} />
      <div className='flex justify-between items-center !leading-none'>
        <p className='dark:text-white'>{title}</p>
        <p className='text-gray-400 text-sm !leading-none'>{timestamp}</p>
      </div>
      <p className='my-1'>{content}</p>
      {icon && (
        <div className='flex justify-start items-center space-x-2'>
          {icon} <p>data.json</p>
        </div>
      )}
      {images && (
        <div className='flex items-center py-4'>
          {images.map((item, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <img
                    width={32}
                    height={32}
                    className='cursor-pointer object-contain rounded-full w-8 h-8 hover:scale-105 ring-2 ring-black hover:-translate-y-2 transition-all duration-200 ease'
                    src={item.photo}
                    alt={item.name}
                  />
                </TooltipTrigger>
                <TooltipContent className='p-2 bg-black text-white' sideOffset={12} side='bottom'>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      )}
    </div>
  );
}
export default CardTimelineItem;
