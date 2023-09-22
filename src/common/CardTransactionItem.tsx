const CardTransactionItem = ({ item }) => {
	return (
		<dl className='flex items-center justify-center w-full px-4 border-b-[1px] border-gray-600 my-1 py-1'>
			<dd className='basis-1/4 flex items-center justify-center'>{parseFloat(item.revenue) >= 499 ? <div className={`bg-[#28c76f] text-[#28c76f] w-12 h-12 rounded-full bg-opacity-25 flex justify-center items-center `}> {item.icon}</div> : <div className={`bg-red-500 text-red-500 w-12 h-12 rounded-full bg-opacity-25 flex justify-center items-center `}> {item.icon}</div>}</dd>
			<div className='basis-1/4 flex space-x-4 text-left'>
				<div className='flex flex-col '>
					<dd>{item.name}</dd>
					<dd className='text-sm text-gray-500'>{item.name}</dd>
				</div>
			</div>
			<div className='basis-2/4 flex items-center justify-end '>{parseFloat(item.revenue) >= 499 ? <dt className='text-green-500 ml-2'>+{item.revenue}</dt> : <dt className='text-red-500 ml-2'>-{item.revenue}</dt>}</div>
		</dl>
	);
};

export default CardTransactionItem;
