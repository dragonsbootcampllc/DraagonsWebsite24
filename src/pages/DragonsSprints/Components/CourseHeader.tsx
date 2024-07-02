import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import React from "react";
import talents from "@/pages/json/Team2023.json";
import useTransformTalentData from "@/components/HOOKs/useTransformTalentData";
import { Talent } from "@/components/HOOKs/useTransformTalentData";

function CourseHeader(props) {
  const transformedTalents = useTransformTalentData(talents as Talent[]);

  return (
    <div className='md:p-12 p-2 flex-col   max-w-[1400px] relative flex justify-center  w-full'>
      <div className='grid place-items-center'>
        <div className='text-center capitalize px-3 max-w-5xl'>
          <h1 className='xl:text-7xl capitalize lg:text-5xl py-4 md:py-0 md:text-4xl sm:text-2xl  font-bold'>
            The Developer's Quest with Real-World Scenarios
          </h1>
          {/* Remove description on mobile */}
          <p className='text-base py-2 lg:text-lg font-medium text-gray-200 hidden md:block'>
            Understand career technical paths, with real-world scenarios and
            intensive 2 weeks of learning, practice, and mentorship.
          </p>
        </div>
        <div className='flex-row hidden md:flex relative h-16 mb-10 '>
          <AnimatedTooltip
            items={
              transformedTalents as {
                id: number;
                name: string;
                designation: string;
                image: string;
                link_profile_Linkedin: string;
              }[]
            }
          />
        </div>
      </div>
      <div className='aspect-video rounded-md h-full w-full  bg-slate-200'></div>
    </div>
  );
}

export default CourseHeader;
