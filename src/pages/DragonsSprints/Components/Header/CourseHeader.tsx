import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import React from "react";
import talents from "@/pages/json/Team2023.json";
import useTransformTalentData from "@/components/HOOKs/useTransformTalentData";
import { Talent } from "@/components/HOOKs/useTransformTalentData";
import VideoComponenet from "./VideoComponenet";

function CourseHeader({
  title,
  description,
  duration,
  Instructors,
  Category,
  Level,
  Language,
  HasCertificate,
}: {
  title?: string;
  description?: string;
  duration?: string;
  Instructors?: string[];
  Category?: string[];
  Level?: string[];
  Language?: string[];
  HasCertificate?: boolean;
}) {
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
        <div className='flex gap-8 w-full max-w-2xl flex-row-reverse'>
          <div className='hidden md:flex w-full max-w-28  '>
            <div className='text-base max-w-24 relative w-full h-16 grid bg-slate-500/20 place-items-center p-0 m-0 border-l-4 px-2  py-2 lg:text-lg font-medium text-gray-200 '>
              <p className='absolute pl-1 w-full grid place-items-center h-full'> Dragons's Advisors</p>
            </div>
          </div>
          <div className='flex-row  w-full hidden md:flex relative h-16 mb-10 '>
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
      </div>
      <VideoComponenet
        duration={duration}
        Category={Category}
        Level={Level}
        Language={Language}
        HasCertificate={HasCertificate}
      />
    </div>
  );
}

export default CourseHeader;
