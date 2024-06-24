import React from "react";
import { Meteors } from "../ui/meteors";

interface CardsMeteorsProps {
  title: string;
  points: string;
}

const CardsMeteors: React.FC<CardsMeteorsProps> = ({ title, points }) => {
  // Split the points string by newline characters to create an array
  const pointsArray = points.split("/n");

  return (
    <div className="w-full max-w-xs h-80 p-4">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              {title}
            </h1>

            <ul className="font-normal text-base text-slate-500 mb-4 relative z-50 list-disc list-inside">
              {pointsArray.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          
          {/* Meteors effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default CardsMeteors;
