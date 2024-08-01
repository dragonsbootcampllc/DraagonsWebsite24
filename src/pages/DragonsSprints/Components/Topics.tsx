import Image from "next/image";
import React, { useState, useCallback, memo } from "react";

type TopicCardProps = {
  topic: {
    image: string;
    title: string;
    id?: string;
  };
};

const TopicCard = memo(({ topic }: TopicCardProps) => (
  <div className='p-2 bg-purple-800/20 rounded-3xl relative'>
    <div className='rounded-3xl block box-content relative overflow-hidden bg-purple-800/20 aspect-[2/3]'>
      <Image
        src={topic.image}
        className='hover:scale-110 relative block duration-300'
        alt={topic.title}
        layout='fill'
        objectFit="cover"
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
    </div>
    <div className='py-1'>
      <h1 className='xl:text-lg capitalize px-2 sm:text-xs py-4 md:py-0 font-bold'>
        {topic.title}
      </h1>
    </div>
  </div>
));

TopicCard.displayName = 'TopicCard';

function Topics({ Topics, title }: { Topics: any[], title: string }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  return (
    <div className='w-full p-1 bg-purple-800/20 rounded-3xl'>
      <div
        className='w-full relative bg-purple-800 min-h-[60px] rounded-3xl cursor-pointer'
        onClick={toggleExpand}>
        <div className='text-base px-3 md:px-6 absolute grid place-items-center lg:text-3xl font-medium text-gray-200 h-full w-full'>
          <span className='w-full'>{title}</span>
        </div>
        <div className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-200 text-2xl'>
          {isExpanded ? "−" : "+"}
        </div>
      </div>
      {isExpanded && (
        <div className='px-3 md:px-6 relative py-3'>
          <div className='grid grid-cols-1 relative sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {Topics && Topics.map((topic, index) => (
              <TopicCard key={topic.id || index} topic={topic} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(Topics);