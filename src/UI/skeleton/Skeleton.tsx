import clsx from '@/lib/clsx';

function Skeleton({ SkeletonLength, className }: { className?: string; SkeletonLength: number }) {
  return (
    <div className={clsx(className)}>
      {Array.from({ length: SkeletonLength }, (_, i) => i).map((i) => (
        <div
          key={i}
          role='status'
          className='m-4 flex animate-pulse flex-wrap items-start justify-start gap-2 rounded-lg bg-stone-900 p-2'
        >
          <div className='flex w-full items-center'>
            <div className='flex w-full items-center justify-center rounded bg-gray-300 p-2 dark:bg-gray-700'>
              <svg
                className='aspect-video w-full text-gray-200 dark:text-gray-600'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 18'
              >
                <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
              </svg>
            </div>
          </div>
          <div className='flex w-full flex-col'>
            <div className='w-full'>
              <div className='mt-4 mb-4 h-2.5 w-1/3 rounded-lg bg-gray-200 dark:bg-gray-700'></div>
              <div className='mt-4 mb-4 h-2.5 w-1/6 rounded-lg bg-gray-200 dark:bg-gray-700'></div>
              <div className='mt-4 mb-4 h-2.5 w-full rounded-lg bg-gray-200 dark:bg-gray-700'></div>
              <div className='mt-4 mb-4 h-2.5 w-24 rounded-lg bg-gray-200 dark:bg-gray-700'></div>
              <div className='mt-4 mb-4 h-2.5 w-24 rounded-lg bg-gray-200 dark:bg-gray-700'></div>
            </div>
            <div className='flex w-full items-center space-x-2'>
              <div className='mt-4 mb-4 h-8 w-24 rounded-lg bg-gray-200 dark:bg-gray-700'></div>
              <div className='mt-4 mb-4 h-8 w-24 rounded-lg bg-gray-200 dark:bg-gray-700'></div>
              <div className='mt-4 mb-4 h-8 w-8 rounded-lg bg-gray-200 dark:bg-gray-700'></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
