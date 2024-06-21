import React from "react";
import { Meteors } from "../ui/meteors";

interface ManagingandToolingProps {
  title: string;
  Details: string;
}

export const ManagingandTooling: React.FC<ManagingandToolingProps> = ({ title, Details }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-xs relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            {title}
          </h1>
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            {Details}
          </p>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};
