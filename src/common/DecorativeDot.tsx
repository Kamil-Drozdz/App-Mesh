const DecorativeDot = ({ color }: { color: string }) => {
	return (
		<>
			<span className={`${color} before:translate-x-1/2 -translate-x-1/2 before:translate-y-1/2 bg-opacity-20 w-5 h-5 absolute top-0 rounded-full left-0 before:absolute before:-top-[0.1rem] before:-left-[0.130rem] before:rounded-full before:text-lg before:w-3 before:h-3 z-10`}></span>
			<div className=' w-5 h-5 -translate-x-1/2 absolute top-0 rounded-full bg-white dark:bg-mediumBlue left-0 z-[9]'></div>
		</>
	);
};

export default DecorativeDot;
