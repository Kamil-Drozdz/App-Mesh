import { BiTrendingDown, BiTrendingUp } from 'react-icons/bi';

const CardCompanyItem = ({ item }) => {
	return (
		<dl className='flex items-center justify-center w-full md:px-4 border-b-[1px] border-gray-600 my-1 py-1 space-x-2 text-[12px] md:text-base'>
			<div className='basis-1/5 flex space-x-2 md:space-x-4 text-left overflow-hidden'>
				<dt>
					<img className='w-8 h-8 rounded-lg' src={item.photo} alt={`${item.category} photo`} />
				</dt>
				<div className='flex flex-col '>
					<dd>{item.name}</dd>
					<dd className='text-[10px] md:text-[12px] text-gray-500'>{item.email}</dd>
				</div>
			</div>
			<dd className='basis-1/5 flex items-center justify-center'>
				<div className={` bg-[#28c76f] text-[#28c76f] hidden w-12 h-12 rounded-full bg-opacity-25 md:flex justify-center items-center `}> {item.icon}</div>
				<p className='basis-1/3'> {item.category}</p>
			</dd>
			<dd className='basis-1/5'>{item.views}</dd>
			<dd className='basis-1/5'>{item.revenue}</dd>
			<dd className='basis-1/5 flex items-center justify-center '>
				{item.sales}
				{parseFloat(item.sales) >= 50 ? <BiTrendingUp className='text-green-500 ml-2' /> : <BiTrendingDown className='text-red-500 ml-2' />}
			</dd>
		</dl>
	);
};

export default CardCompanyItem;
