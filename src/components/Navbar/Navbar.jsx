"use client";
import { React, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Dropdown = dynamic(() => import("./Dropdown"), {
  ssr: false,
});

const NavbarLink = dynamic(() => import("./NavbarLink"), {
  ssr: false,
});
const Dropdown_V2 = dynamic(() => import("./Dropdown_V.2"), {
  ssr: false,
});

import LogoImage from "@/../public/Identity/Images/2023/SVG/test.svg";
import Student_img from "@/../public/images/NAV/Solutions/solutionStudents.png";
import Student_img2 from "@/../public/images/NAV/Solutions/solutionPartners.png";
import TalentsStudent from "@/../public/images/NAV/Talents/talentForStudent.png";
import TalentsPartners from "@/../public/images/NAV/Talents/talentForPartner.png";
import {
  IoStatsChart,
  IoPeople,
  IoBusiness,
  IoShieldCheckmark,
  IoSearchSharp,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";

import ButtonComponent from "../Micros/Button";
import ButtonLite from "@/components/Micros/ButtonLite";
import { SiCodementor } from "react-icons/si";
import { PiStudentFill } from "react-icons/pi";

const simpleFloatAnimation = {
  y: ["-20px", "22px"],
  transition: {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 4,
    ease: "easeInOut",
  },
};

const SolutionTabData = {
  title: "Solutions",
  tab1: {
    title: "Students",
    path: "/Students",
    description:
      "Advance your career with Dragoons Bootcamp’s targeted courses in data analysis and full-stack development.",

    Icon: (
      <motion.img
        src={Student_img.src}
        alt='icon'
        animate={simpleFloatAnimation}
      />
    ),
  },
  tab2: {
    title: "Partners",
    path: "/Partners",
    description:
      "Enhance your team with our ready-to-deploy graduates skilled in the latest tech trends.",

    Icon: (
      <motion.img
        src={Student_img2.src}
        alt='icon'
        animate={simpleFloatAnimation}
      />
    ),
  },
  tab1BottomLinks: [
    {
      title: "Become JopReady",
      description:
        "Get ready for the job market with our career-focused bootcamps.",
      path: "/JopReady",
      Icon: <IoStatsChart />,
    },
    {
      title: "Mentorship",
      description:
        "Get guidance from industry experts and level up your skills.",
      path: "/mentors",
      Icon: <SiCodementor />,
    },
    {
      title: "Thought Leader",
      description:
        "Learn from the best in the industry and stay ahead of the curve.",
      path: "#",
      Icon: <IoBusiness />,
    },
    {
      title: "Students activity",
      description:
        "Get involved in our student community and grow your network.",
      path: "/DSA",
      Icon: <PiStudentFill />,
    },
  ],
  tab2BottomLinks: [
    {
      title: "Events Sponsor",
      description: "Sponsor our events and get access to our top tech talent.",
      path: "#",
      Icon: <IoSearchSharp />,
    },
    {
      title: " Get Talents",
      description: "Hire our top graduates and enhance your team ",
      path: "/GetTalents",
      Icon: <IoShieldCheckmark />,
    },
    {
      title: "Software Outsourcing",
      description:
        "Outsource your software development to our top graduates and save time and money.",
      path: "#",
      Icon: <IoShieldCheckmarkOutline />,
    },
    {
      title: " Intern Program Managmenet",
      description:
        "Manage your intern program with our HRMS and get access to top tech talent.",
      path: "#",
      Icon: <IoPeople />,
    },
  ],
};

const TallentsTabData = {
  title: "Talents",
  tab1: {
    title: "Students",
    path: "/Talents",
    description:
      "Our top 3% graduates excel in tech, gaining access to exclusive job opportunities and leading the way in industry success.",

    Icon: (
      <motion.img
        src={TalentsStudent.src}
        alt='icon'
        animate={simpleFloatAnimation}
      />
    ),
  },
  tab2: {
    title: "Partners",
    path: "#",
    description:
      "Spot and recruit top tech talent seamlessly through our HRMS, enhancing your team with industry-leading expertise",

    Icon: (
      <motion.img
        src={TalentsPartners.src}
        alt='icon'
        animate={simpleFloatAnimation}
      />
    ),
  },
};

const Navbar = () => {
  // State hooks for controlling UI elements
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSolutionsOpen, setSolutionsOpen] = useState(false);
  const [isTallentsOpen, setTallentsOpen] = useState(false);

  // Toggles and close for UI elements, making it clear what they do
  // Navbar functions
  const toggleNavigation = () => {
    setNavOpen(!isNavOpen);
  };
  const closeNavigation = () => {
    setNavOpen(false);
    scrollToTop();
  };

  // Solution tab functions
  const toggleSolutions = () => {
    setSolutionsOpen(!isSolutionsOpen);
  };
  const closeSolutions = () => {
    setSolutionsOpen(false);
    closeNavigation();
  };

  // Tallents tab functions
  const toggleTallents = () => {
    setTallentsOpen(!isTallentsOpen);
  };
  const closeTallents = () => {
    setTallentsOpen(false);
    closeNavigation();
  };
  // Function to bring the user to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className='bg-purple-950/20  sticky top-0 px-8 backdrop-blur-3xl bg-opacity-50  border-b border-purple-900/20 py-4   font-inter m-0  z-50 left-1/2 flex justify-center w-full  shadow-md'>
      <div className='flex  gap-3 justify-between items-center  max-[1096px]:px-0 max-w-[1400px] box-border w-full  h-[2.5rem]'>
        <div className='relative max-[1096px]:w-full max-[1096px]:flex max-[1096px]:p-[5%]  h-auto justify-between items-center'>
          {/* Logo */}
          <div className='left flex gap-3 justify-center relative items-center'>
            <Link href='/' className='flex gap-[6px] relative items-center'>
              <div className='w-32 sm:w-36   relative 2xl:w-48'>
                <img
                  className='aspect-auto'
                  src={LogoImage.src}
                  alt='Dragons Bootcamp'
                />
              </div>
            </Link>
            <div
              className={
                "border px-2 py-1 text-xs max-[370px]:hidden select-none hover:bg-fuchsia-800 duration-300 cursor-pointer  justify-center text-center grid place-items-center m-auto h-6 w-12 relative rounded-full"
              }>
              <span className={"absolute animate-pulse duration-300"}>
                DEMO
              </span>
            </div>
          </div>

          {/* Logo and Hamburger Menu */}
          <button
            className='flex min-[1096px]:hidden flex-col aspect-square w-12 justify-center items-center gap-[6px]'
            onClick={toggleNavigation}>
            {/* Simplified class names for readability */}
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-[.45s] ${
                isNavOpen
                  ? "-rotate-45 translate-y-2 delay-300"
                  : "rotate-0 translate-y-0"
              }`}></span>
            <span
              className={`h-[2px] bg-white transition-all duration-[.45s] ${
                isNavOpen ? "w-0" : "w-6 delay-300"
              }`}></span>
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-[.45s] ${
                isNavOpen
                  ? "rotate-45 -translate-y-2 delay-300"
                  : "rotate-0 translate-y-0"
              }`}></span>
          </button>
        </div>

        {/* Navigation Links and CTA Button */}
        <div
          className={`flex max-[1096px]:bg-[#150a30] items-center max-[1096px]:justify-end min-[1096px]:justify-center max-[1096px]:flex-col text-lg md:text-sm lg:text-md  xl:text-lg font-mono h-full flex-grow  gap-0  xl:gap-2  max-[1096px]:overflow-y-scroll max-[1096px]:overflow-x-hidden  text-center duration-[.45s] ${
            isNavOpen
              ? "max-[1096px]:translate-y-0 "
              : "max-[1096px]:-translate-y-[120%]"
          } top-full left-0 right-0 text-black  max-[1096px]:flex-col max-[1096px]:absolute max-[1096px]:w-full max-[1096px]:pb-[6rem]  max-[1096px]:min-h-[calc(100vh-4.5rem)] max-[1096px]:text-lg max-[1096px]:border-b max-[1096px]:border-black`}>
          <NavbarLink
            path='/useCases'
            title='Use Cases'
            toggleNavigation={toggleNavigation}
            closeNavigation={closeNavigation}
          />

          {/* Solutions Dropdown */}
          <Dropdown_V2
            isTabOpen={isSolutionsOpen}
            toggleTab={toggleSolutions}
            closeTab={closeSolutions}
            data={SolutionTabData}
          />

          {/* Tallents Dropdown */}
          <Dropdown
            isTabOpen={isTallentsOpen}
            closeTab={closeTallents}
            toggleTab={toggleTallents}
            data={TallentsTabData}
          />

          {/* Static Navigation Links */}

          <NavbarLink
            path='/events'
            title='Events'
            toggleNavigation={toggleNavigation}
            closeNavigation={closeNavigation}
          />
          <NavbarLink
            path='/about'
            title='About Us'
            toggleNavigation={toggleNavigation}
            closeNavigation={closeNavigation}
          />
          <NavbarLink
            path='/Pricing'
            title='Pricing'
            toggleNavigation={toggleNavigation}
            closeNavigation={closeNavigation}
          />
          {/* CTA Button */}
          <div className='h-16 px-4 max-w-[170px] relative  grid place-items-center   w-full  gap-3'>
           

            <div className='h-12 w-full'>
              <Link href='/Pricing'>
                <ButtonComponent className='!text-sm' CTAtext='Apply Now' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
