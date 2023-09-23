import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/UI/Tooltip';
import organizePhoto from '@/assets/organize.svg';
import CardContainer from '@/common/CardContainer';
import { generateData } from '@/data/pages/ecommerce/dataCompany';
import { generateMeetupData } from '@/data/pages/ecommerce/dataMeetup';
import { AiOutlineCalendar } from 'react-icons/ai';
import { PiMapPinBold } from 'react-icons/pi';

const CardMeetup = () => {
	const data = generateData(8, generateMeetupData);

	return (
		<CardContainer className='basis-1/3 p-0'>
			<div className=' bg-lightBlue flex justify-center rounded-t-lg'>
				<img className=' aspect-video w-full max-w-[300px]' src={organizePhoto} />
			</div>
			<div className='px-4 space-y-4'>
				<div className='flex bg-mediumBlue space-x-4'>
					<div className='flex flex-col justify-center items-center border-r border-gray-700 pr-4'>
						<p>THU</p>
						<span className='font-bold text-lg'>24</span>
					</div>
					<div className='flex flex-col items-center justify-start'>
						<p className='text-left w-full text-lg text-gray-200 font-semibold'>Developer Meetup</p>
						<span className='text-left w-full text-gray-400'>Meet world popular developers</span>
					</div>
				</div>
				<div className='flex'>
					<div className='bg-lightBlue px-2 py-1 text-violet-700 rounded-lg flex justify-center items-center'>
						<AiOutlineCalendar size={21} />
					</div>
					<div className='flex flex-col items-center justify-start px-4'>
						<p className='text-left w-full text-base text-gray-200 font-semibold'>Sat, May 25, 2020</p>
						<span className='text-left w-full text-sm text-gray-400'>10:AM to 6:PM</span>
					</div>
				</div>
				<div className='flex'>
					<div className='bg-lightBlue px-2 py-1 text-violet-700 rounded-lg flex justify-center items-center'>
						<PiMapPinBold size={21} />
					</div>
					<div className='flex flex-col items-center justify-start px-4'>
						<p className='text-left w-full text-base text-gray-200 font-semibold'>Central Park</p>
						<span className='text-left w-full text-sm text-gray-400'>Manhattan, New york City</span>
					</div>
				</div>
				<div className='flex items-center py-4'>
					{data.map((item, index) => (
						<TooltipProvider key={index}>
							<Tooltip>
								<TooltipTrigger asChild>
									<img className='cursor-pointer object-contain rounded-full w-8 h-8 hover:scale-105 -ml-2 ring-2 ring-black hover:-translate-y-2 transition-all duration-200 ease' src={item.photo} alt={item.name} />
								</TooltipTrigger>
								<TooltipContent className='p-2 bg-black' sideOffset={12} side='bottom'>
									<p>{item.name}</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					))}

					<p className='ml-2 text-white'>+48</p>
				</div>
			</div>
		</CardContainer>
	);
};

export default CardMeetup;
