"use client";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import React, { ReactElement, ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = dynamic(() => import("../components/Hero/Hero"), { ssr: false });
const TechStack = dynamic(() => import("../components/TechStack/TechStack"), {
  ssr: false,
});

import { Numbers } from "../components/Numbers/Numbers";
import { TrustedSection } from "../components/Trusted/TrustedSection";
import WebinarsSection from "@/components/WebinarsSection/WebinarsSection";
const TestmonialSection = dynamic(
  () => import("../components/TestmonialSection/TestmonialSection"),
  { ssr: false }
);
const GridSection = dynamic(
  () => import("../components/GridSection/GridSection"),
  { ssr: false }
);
const TrainingServiceSection = dynamic(
  () =>
    import(
      "../components/Cards/TrainingServiceSection-component/TrainingServiceSection"
    ),
  { ssr: false }
);

// Dynamic imports
const Sec2Summary = dynamic(() => import("../components/WhatWeDo"), {
  ssr: false,
});

export default function Home() {
  const [popup, setPopup] = useState<ReactNode>(null);

  const handel_popup = (component: ReactNode) => {
    setPopup(component);
  };

  return (
    <div className={`overflow-x-hidden ${styles.container}`}>
      <div className='relative w-full pt-12'>
        <Hero />
      </div>

      <div className='w-full flex justify-center'>
        <TrainingServiceSection />
      </div>

      <div className='mt-12 w-full flex justify-center items-center'>
        <GridSection />
      </div>

      <div className='mt-28 w-full flex justify-center items-center'>
        <TestmonialSection />
      </div>

      <div className='my-28 w-full flex justify-center items-center'>
        <WebinarsSection handel_popup={handel_popup} />
      </div>

      <div className='relative flex justify-center flex-col'>
        <div className='w-auto relative'>
        <TechStack
  MainText={[
    "Explore our robust ",
    <span key='coloredText' className='header text-purple-800'>
      Tech Stack
    </span>,
    " with latest technologies.",
  ]}
/>

        </div>
      </div>

      {/* <div className='my-28 w-full flex justify-center items-center'>
        <VideoSection />
      </div> */}

      <TrustedSection />

      <Numbers />

      <div className='w-full flex-wrap gap-2 mb-20 mt-12 max-w-[1400px] flex mx-auto justify-center'>
        <div className='mx-12 sm:mx-0 sm:mt-10 sm:flex justify-left sm:space-x-6 text-sm'>
          <Link legacyBehavior href='/Talents' passHref>
            <div className='select-none font-bold max-w-sm sm:mt-0 shadow-md hover:shadow-gray-500/50 ring-2 ring-slate-900 hover:bg-purple-300/10 focus:outline-none focus:ring-2 opacity-90 focus:ring-offset-2 active:scale-95 duration-100 text-gray-200 h-12 px-3 sm:px-16 rounded-lg w-full flex items-center justify-center sm:w-auto highlight-white/20'>
              See All Talents
            </div>
          </Link>
        </div>
      </div>

     

      {popup && popup}
    </div>
  );
}
