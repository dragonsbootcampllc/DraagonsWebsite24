import React from "react";
import { WobbleCard } from "../ui/wobble-card";

const content1 = {
  containerClassName: "col-span-1 lg:col-span-2 h-full bg-gradient-to-r from-purple-700 to-purple-900 min-h-[500px] lg:min-h-[300px]",
  children: (
    <div className="p-6 lg:p-8">
      <h2 className="text-left text-balance text-xl lg:text-3xl font-semibold text-white">
        Progress Bars
      </h2>
      <p className="mt-4 text-left text-base md:text-sm text-neutral-200">
        Show progress towards mastering specific skills.
      </p>
    </div>
  ),
};

const content2 = {
  containerClassName: "bg-gradient-to-r from-purple-700 to-purple-900 col-span-1 min-h-[300px]",
  children: (
    <div className="p-6 lg:p-8">
      <h2 className="text-left text-balance text-xl lg:text-3xl font-semibold text-white">
        Skill Badges
      </h2>
      <p className="mt-4 text-left text-base md:text-sm text-neutral-200">
        Earn badges for completing courses or achieving milestones.
      </p>
    </div>
  ),
};

const content3 = {
  containerClassName: "col-span-1 lg:col-span-3 bg-gradient-to-r from-purple-700 to-purple-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]",
  children: (
    <div className="p-6 lg:p-8">
      <h2 className="text-left text-balance text-xl lg:text-3xl font-semibold text-white">
        Recommended Courses
      </h2>
      <p className="mt-4 text-left text-base md:text-sm text-neutral-200">
        Personalized course suggestions based on current skills and goals.
      </p>
    </div>
  ),
};

export function SkillEnhancement() {
  return (
    <div className="py-6 px-4 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="flex justify-center">
          <WobbleCard children={content1.children} containerClassName={content1.containerClassName} />
        </div>
        <div className="flex justify-center">
          <WobbleCard children={content2.children} containerClassName={content2.containerClassName} />
        </div>
        <div className="flex justify-center">
          <WobbleCard children={content3.children} containerClassName={content3.containerClassName} />
        </div>
      </div>
    </div>
  );
}
