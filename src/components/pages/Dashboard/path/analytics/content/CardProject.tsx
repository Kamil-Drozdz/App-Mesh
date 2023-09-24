import { Button } from '@/UI/Button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/UI/Tooltip';
import CardContainer from '@/common/CardContainer';
import { generateData } from '@/data/pages/ecommerce/dataCompany';
import { generateMeetupData } from '@/data/pages/ecommerce/dataMeetup';

const CardProject = () => {
	const data = generateData(6, generateMeetupData);
	return (
		<CardContainer className='basis-1/3 space-y-3 flex flex-col justify-between'>
			<p className='text-violet-400 bg-gray-600 px-2 text-center rounded-lg w-fit'>03 Sep, 20</p>
			<h2 className='text-gray-300 text-2xl'>App design</h2>
			<span className='font-thin text-sm'>You can Find Only Post and Quotes Related to IOS like ipad app design, iphone app design</span>
			<div className='text-white flex flex-col'>
				<p>TEAM </p>
				<div className='px-2 flex space-x-3'>
					<p className='text-orange-600 px-2 bg-orange-600 bg-opacity-30 w-fit  text-center rounded-lg'>Figma</p>
					<p className='text-violet-600 px-2 bg-violet-600 bg-opacity-30 w-fit  text-center rounded-lg'>Wireframe</p>
				</div>
			</div>
			<p className='text-white'>MEMBERS</p>
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

				<p className='ml-2 text-white'>+4</p>
			</div>
			<div className='flex justify-start items-center space-x-4'>
				<div className='px-2 bg-gray-900 rounded py-1 text-center'>
					<p className='text-gray-500'>Due Date</p> <span className='text-gray-300 font-semibold'>12 Apr, 21</span>
				</div>
				<div className='px-2 bg-gray-900 rounded py-1 text-center'>
					<p className='text-gray-500'>Budget</p> <span className='text-gray-300 font-semibold'>$49251.91 </span>
				</div>
				<div className='px-2 bg-gray-900 rounded py-1 text-center'>
					<p className='text-gray-500'>Cost</p> <span className='text-gray-300 font-semibold'>$840.99 </span>
				</div>
			</div>
			<Button className='bg-violet-500 hover:bg-violet-400 w-full'>Join Team</Button>
		</CardContainer>
	);
};

export default CardProject;
