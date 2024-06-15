"use client";
import Link from "next/link";
import ImageSliderComponent from "./ImageSlider";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import talents from "@/pages/json/Team2023.json";
import { Talent } from '../HOOKs/useTransformTalentData';

import useTransformTalentData from '../HOOKs/useTransformTalentData';

// Sample data for the headline and button text
const ctaHeadline: string = 'Join 1200+ Students at';
const heroHighlightedText: string = ' Dragons Bootcamp';
const ctaApplyText: string = 'Apply Now';
const ctaBookCallText: string = 'Book a 1:1 Call';
const transformedTalents = useTransformTalentData(talents);

const CallToActionComponent: React.FC = () => {
    return (
        <div className="py-12 text-white">
            <div className="container mx-auto flex flex-col gap-6 items-center text-center">
                <h2 className="text-4xl md:text-6xl font-semibold md:max-w-[1000px]"></h2>
                <div
              style={{ fontFamily: "interV" }}
              className='text-6xl content-center max-w-4xl text-center md:text-7xl z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
              <h1>
              {ctaHeadline}
                <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
                  {heroHighlightedText}
                </span>
              </h1>
            </div>
                <div className="hidden md:block">
       


    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={transformedTalents as { id: number; name: string; designation: string; image: string; }[]} />
    </div>

                <ImageSliderComponent />
                </div>
                <div className="mt-8 flex gap-4 justify-center">
                    <Link
                        href="/Pricing"
                        passHref>
                        <button className='bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>{ctaApplyText}</button>
                    </Link>
                    <button className=" text-blue-600 font-semibold  py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
                        {ctaBookCallText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CallToActionComponent;
