import React, { useState } from "react";
import { FaCheckCircle, FaLightbulb } from 'react-icons/fa'; // Make sure to install react-icons

function Transformation({Requirements, Outcomes, title}: any) {
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
         
               <div className="px-3 md:px-6 py-6 bg-purple-800/10 rounded-lg shadow-md">
                 <div className="flex flex-col md:flex-row justify-between gap-6">
                   <div className="w-full md:w-1/2  p-4 rounded-lg shadow-sm">
                     <h2 className="text-xl py-2 font-semibold flex items-center text-white/70">
                       Before (Requirements)
                     </h2>
                     <ul className="list-none">
                       {Requirements.map((requirement:any, index:any) => (

                         <li className="py-2 flex items-start" key={index}>
                           <FaCheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                           <span>{requirement}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                   <div className="w-full md:w-1/2  p-4 rounded-lg shadow-sm">
                     <h2 className="text-xl py-2 font-semibold flex items-center text-white/70">
                       After (Outcomes)
                     </h2>
                     <ul className="list-none">
                       {Outcomes.map((outcome:any, index:any) => (

                         <li className="py-2 flex items-start" key={index}>
                           <FaLightbulb className="mr-2 mt-1 text-yellow-500 flex-shrink-0" />
                           <span>{outcome}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 </div>
               </div>
      
 
        )}
    </div>
);

}

export default Transformation;