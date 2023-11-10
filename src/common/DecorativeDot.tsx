const DecorativeDot = ({ color }: { color: string }) => {
  return (
    <>
      <span
        className={`${color} absolute top-0 left-0 z-10 h-5 w-5 -translate-x-1/2 rounded-full bg-opacity-20 before:absolute before:-top-[0.1rem] before:-left-[0.130rem] before:h-3 before:w-3 before:translate-x-1/2 before:translate-y-1/2 before:rounded-full before:text-lg`}
      ></span>
      <div className=' absolute top-0 left-0 z-[9] h-5 w-5 -translate-x-1/2 rounded-full bg-secondary'></div>
    </>
  );
};

export default DecorativeDot;
