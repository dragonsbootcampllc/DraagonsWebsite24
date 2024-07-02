import React, { useState } from "react";

function OverView({ description,title }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='w-full p-1 bg-purple-800/20 rounded-3xl'>
      <div 
        className='w-full relative bg-purple-800 min-h-[60px] rounded-3xl cursor-pointer'
        onClick={toggleExpand}
      >
        <div className='text-base px-3 md:px-6 absolute  grid place-items-center   lg:text-3xl font-medium text-gray-200 h-full w-full '>
        <span className='w-full'>{title}</span>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-200 text-2xl">
          {isExpanded ? '−' : '+'}
        </div>
      </div>
      {isExpanded && (
        <div className="px-3 md:px-6 py-3">
          {description}
        </div>
      )}
    </div>
  );
}

export default OverView;