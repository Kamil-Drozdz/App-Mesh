import CardContainer from '@/common/CardContainer';
import CardTimelineItem from '@/common/CardUserTimelineItem';
import { data } from '@/data/pages/analytics/dataUserTimeline';
import { IconSize } from '@/lib/iconSize';
import { BiDotsVertical, BiMenu } from 'react-icons/bi';

function CardUserTimeline() {
  return (
    <CardContainer className='basis-1/3 !space-y-0'>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex justify-center items-start space-x-2 '>
          <BiMenu size={IconSize.medium} />
          <h2 className='dark:text-gray-300 text-2xl'>User Timeline</h2>
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
