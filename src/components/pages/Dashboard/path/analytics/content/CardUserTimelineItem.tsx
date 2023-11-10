import DecorativeDot from '../../../../../../common/DecorativeDot';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/UI/Tooltip';

function CardTimelineItem({ title, timestamp, content, images, icon, color }) {
  return (
    <div className='relative border-l-[1px] border-gray-300 pl-10 pb-4 dark:border-gray-600 '>
      <DecorativeDot color={color} />
      <div className='flex items-center justify-between !leading-none'>
        <p className='dark:text-white'>{title}</p>
        <p className='text-sm !leading-none text-gray-400'>{timestamp}</p>
      </div>
      <p className='my-1'>{content}</p>
      {icon && (
        <div className='flex items-center justify-start space-x-2'>
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
                    className='ease h-8 w-8 cursor-pointer rounded-full object-contain ring-2 ring-secondary transition-all duration-200 hover:-translate-y-2 hover:scale-105'
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
        </div>
      )}
    </div>
  );
}
export default CardTimelineItem;
