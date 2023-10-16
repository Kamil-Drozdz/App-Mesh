import clsx from '@/lib/clsx';

function Skeleton({ SkeletonLength, className }: { className?: string; SkeletonLength: number }) {
  return (
    <div className={clsx(className)}>
      {Array.from({ length: SkeletonLength }, (_, i) => i).map((i) => (
        <div
          key={i}
          role='status'
          className='animate-pulse m-4 p-2 bg-stone-900 rounded-lg flex justify-start items-start gap-2 flex-wrap'
        >
          <div className='flex items-center w-full'>
            <div className='flex items-center justify-center w-full p-2 bg-gray-300 rounded dark:bg-gray-700'>
              <svg
                className='w-full aspect-video text-gray-200 dark:text-gray-600'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 18'
              >
                <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
              </svg>
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <div className='w-full'>
              <div className='h-2.5 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-1/3 mb-4'></div>
              <div className='h-2.5 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-1/6 mb-4'></div>
              <div className='h-2.5 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-4'></div>
              <div className='h-2.5 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-24 mb-4'></div>
              <div className='h-2.5 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-24 mb-4'></div>
            </div>
            <div className='flex items-center w-full space-x-2'>
              <div className='h-8 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-24 mb-4'></div>
              <div className='h-8 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-24 mb-4'></div>
              <div className='h-8 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-8 mb-4'></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
