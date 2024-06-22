"use client";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import React, { ReactElement, ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Bootcamp6Month from "@/../public/assets/6MonthBootcamp.png";
import DragonsSprints from "@/../public/assets/DragonsSprints.png";
import fundamentals from "@/../public/assets/fundamentals.png";
import TechFocused from "@/../public/images/DSA/Tech.png";
import Gamification from "@/../public/images/DSA/Gamification.png";
import Collage from "@/../public/images/DSA/Collage.png";

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
import TrainingServiceSection from "@/components/Cards/TrainingServiceSection-component/TrainingServiceSection";
const StudentActivitySection = dynamic(
  () =>
    import(
      "../components/Cards/TrainingServiceSection-component/TrainingServiceSection"
    ),
  { ssr: false }
);
const HeadData = {
  badge: "Training Service Section",
  title_1: "Empower Your ",
  title_span: "Tech Career",
  title_2: " Career with Us!",
  description:
    "Select a program that aligns with your goals. Whether you're a Beginner or looking to join our intensive six-month Bootcamp, we offer a variety of options tailored to your needs.",
};

const CardsData = [
  {
    label: "Comming Soon",
    isDisabled: true,
    title: "Fundamental track",
    description:
      "Be a real software engineer and master problem-solving, data structures, algorithms, and more to become a proficient software engineer.",
    overlayStyle:
      "radial-gradient(136.22% 75.8% at 50% 27.57%, #171619 0%, rgba(23, 22, 25, 1) 61.62%, rgba(0, 49, 239, 1) 79.17%, rgba(251, 53, 208, 1) 100%)",
    image: fundamentals,
  },
  {
    label: "Special",
    isPremier: true,
    title: "Dragon's Bootcamp",
    description:
      " Our six-month, full-time program is designed to help you master the skills needed to launch a career in software engineering.",
    overlayStyle:
      "radial-gradient(329.95% 173.05% at 50.04% 100%, #fc36d0 0%, rgba(252, 54, 208, 1) 0.52%, rgba(0, 49, 239, 1) 18.71%, rgba(23, 22, 25, 1) 28.65%, rgba(23, 22, 25, 1) 100%)",
    image: Bootcamp6Month,
  },
  {
    label: "Demo Available",
    title: "Dragon's Sprints",
    description:
      "Short-term, intensive programs designed to help you master a specific skill or technology.",
    overlayStyle:
      "radial-gradient(136.22% 75.8% at 50% 27.57%, #171619 0%, rgba(23, 22, 25, 1) 61.62%, rgba(0, 49, 239, 1) 79.17%, rgba(251, 53, 208, 1) 100%)",
    image: DragonsSprints,
  },
];

const HeadDataStudentActivity = {
  badge: "Student Activity Section",
  title_1: "Tech-Driven  ",
  title_span: " Student ",
  title_2: "Initiative",
  description:"Our students are constantly working on projects, attending workshops, and participating in hackathons. Check out some of their latest activities.",
};

const CardsDataStudentActivity = [
  {
    title: "Tech-Focused Activities",
    description:
      "DSA drives tech prowess through hands-on activities, enhancing student skills in collaboration with colleges",
    image: TechFocused.src,
  },
  {
    title: "Gamification and Digital Profiling",
    description:
      "Using gamification, DSA records profiles and activities, ensuring comprehensive documentation and quality assurance.",
    image: Gamification.src,
  },
  {
    title: "Quality Control Collaboration",
    description:
      "DSA partners with colleges for quality control, ensuring activities align with educational standards and industry needs.",
    image: Collage.src,
  },
];

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
        <TrainingServiceSection
          HeadData={HeadData}
          CardsData={CardsData}
        />
      </div>

      <div className='mt-12 w-full flex justify-center items-center'>
        <GridSection />
      </div>

      <div className='mt-28 w-full flex justify-center items-center'>
        <TestmonialSection />
      </div>

      <div className='mb-28 w-full flex justify-center items-center'>
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
      <div className='w-full flex justify-center'>
        <StudentActivitySection
         HeadData={HeadDataStudentActivity} CardsData={CardsDataStudentActivity}
        />
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
