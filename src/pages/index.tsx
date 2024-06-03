"use client";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = dynamic(() => import("../components/Hero/Hero"), { ssr: false });
const TechStack = dynamic(() => import("../components/TechStack/TechStack"), {
  ssr: false,
});

import { Numbers } from "../components/Numbers/Numbers";
import { TrustedSection } from "../components/Trusted/TrustedSection";
import { VideoSection } from "../components/VideoSection/VideoSection";
const TestmonialSection = dynamic(
  () => import("../components/TestmonialSection/TestmonialSection"),
  { ssr: false },
);
const GridSection = dynamic(
  () => import("../components/GridSection/GridSection"),
  { ssr: false },
);
const TrainingServiceSection = dynamic(
  () =>
    import(
      "../components/Cards/TrainingServiceSection-component/TrainingServiceSection"
    ),
  { ssr: false },
);

// Dynamic imports
const Sec2Summary = dynamic(() => import("../components/WhatWeDo"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={`overflow-x-hidden ${styles.container}`}>
      <div className="relative w-full pt-12">
        <Hero />
      </div>

      <div className="w-full flex justify-center">
        <TrainingServiceSection />
      </div>

      <div className="mt-12 w-full flex justify-center items-center">
        <GridSection />
      </div>

      <div className="mt-28 w-full flex justify-center items-center">
        <TestmonialSection />
      </div>

      <div className="relative flex justify-center flex-col">
        <div className="w-auto relative">
          <TechStack
            MainText={[
              <span key="coloredText" className="header text-red-400">
                Technologies
              </span>,
              " You Will Explore with Us",
            ]}
          />
        </div>
      </div>

      {/* <div className='my-28 w-full flex justify-center items-center'>
        <VideoSection />
      </div> */}

      <TrustedSection />

      <Numbers />

      <div className="w-full flex-wrap gap-2 mb-20 mt-12 max-w-[1400px] flex mx-auto justify-center">
        <div className="mx-12 sm:mx-0 sm:mt-10 sm:flex justify-left sm:space-x-6 text-sm">
          <Link legacyBehavior href="/Talents" passHref>
            <div className="select-none font-bold max-w-sm sm:mt-0 shadow-md hover:shadow-gray-500/50 ring-2 ring-slate-900 hover:bg-purple-300/10 focus:outline-none focus:ring-2 opacity-90 focus:ring-offset-2 active:scale-95 duration-100 text-gray-200 h-12 px-3 sm:px-16 rounded-lg w-full flex items-center justify-center sm:w-auto highlight-white/20">
              See All Talents
            </div>
          </Link>
        </div>
      </div>

      <div className="relative pt-20">
        <div className="absolute right-2 -top-[50px] sepia-0 backdrop-opacity-95">
          <Image
            className="relative z-20 bounce-2 box2"
            src="/images/dragon2.png"
            alt="Header Image"
            height={160}
            width={240}
            priority
          />
        </div>

        <div
          className="backdrop-blur-xl w-full h-full bg-gray-700/5"
          style={{
            boxSizing: "border-box",
            filter: "drop-shadow(0px 0px 10px, #000000)",
          }}
        >
          <Sec2Summary
            MainPTexe="Dragons is a Bootcamp and activity program, that helps people to take their first step toward their career, Listen from people of the same age, speakers working in top companies and people can help you grow as a person."
            MainText={[
              "Give People ",
              <span key="coloredText" className="header text-red-400">
                Hope and Trust
              </span>,
              " ,and See What Happens🚀",
            ]}
            ActionButton="Join Us Now"
            action="/Join"
          />
        </div>
      </div>
    </div>
  );
}
