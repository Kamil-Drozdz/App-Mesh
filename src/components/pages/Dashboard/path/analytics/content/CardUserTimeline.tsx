import { BiDotsVertical, BiMenu } from 'react-icons/bi';

import CardContainer from '@/common/CardContainer';
import CardTimelineItem from '@/components/pages/Dashboard/path/analytics/content/CardUserTimelineItem';
import { data } from '@/data/pages/analytics/dataUserTimeline';
import { IconSize } from '@/lib/enums/iconSize';

function CardUserTimeline() {
  return (
    <CardContainer className='basis-1/3 !space-y-0'>
      <div className='mb-4 flex items-center justify-between'>
        <div className='flex items-start justify-center space-x-2 '>
          <BiMenu size={IconSize.medium} />
          <h2 className='text-2xl dark:text-gray-300'>User Timeline</h2>
        </div>
        <BiDotsVertical size={IconSize.basic} />
      </div>
      {data.map((item, index) => (
        <CardTimelineItem
          color={item.color}
          key={index}
          timestamp={item.timestamp}
          icon={item.icon}
          images={item.images}
          content={item.content}
          title={item.title}
        />
      ))}
    </CardContainer>
  );
}

export default CardUserTimeline;
