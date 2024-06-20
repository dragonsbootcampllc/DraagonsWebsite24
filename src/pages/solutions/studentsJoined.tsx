"use client";
import Link from "next/link";
import React from "react";
import talents from "@/pages/json/Team2023.json";
import { Talent } from "../../components/HOOKs/useTransformTalentData";
import useTransformTalentData from "@/components/HOOKs/useTransformTalentData";
import ButtonComponent from "@/components/Micros/Button";
import ButtonLiteComponent from "@/components/Micros/ButtonLite";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

// Sample data for the headline and button text
const ctaHeadline: string = "Join 1200+ Students at";
const heroHighlightedText: string = " Dragons Bootcamp";
const ctaApplyText: string = "Apply Now";
const ctaBookCallText: string = "Book 1:1 Call";
const transformedTalents  = useTransformTalentData(talents as Talent[]);

const StudentsJoined: React.FC = () => {
  return (
    <div className='py-12 text-white ' id="CallToActionComponent">
      <div className='container mx-auto max-w-[1400px] flex flex-col gap-6 items-center text-center px-4'>
        <div className='w-full flex justify-center'>
          <div className='bg-purple-700 w-[116px] h-[116px] p-2 shadow-2xl shadow-blue-700/40 rounded-[2rem]'></div>
        </div>

        <div
          style={{ fontFamily: "interV" }}
          className='text-4xl md:text-6xl lg:text-7xl content-center max-w-4xl text-center z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'
        >
          <h1>
            {ctaHeadline}
            <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
              {heroHighlightedText}
            </span>
          </h1>
        </div>
        <div className='max-w-[1400px]'>
          <div className='flex-row hidden md:flex items-center justify-center mb-10 w-full'>
            <AnimatedTooltip
              items={transformedTalents as {
                id: number;
                name: string;
                designation: string;
                image: string;
                link_profile_Linkedin: string;
              }[]}
            />
          </div>
          <div className='mt-8 flex flex-col md:flex-row gap-4 justify-center'>
            <Link href='/Pricing' passHref>
              <div className='h-16 w-full md:w-64'>
                <ButtonComponent CTAtext={ctaApplyText} />
              </div>
            </Link>
            <Link href='/Pricing' passHref>
              <div className='h-16 w-full md:w-64'>
                <ButtonLiteComponent CTAtext={ctaBookCallText} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default StudentsJoined;
