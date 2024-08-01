import { React, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Dropdown = dynamic(() => import("./Dropdown"), { ssr: false });
const NavbarLink = dynamic(() => import("./NavbarLink"), { ssr: false });
const Dropdown_V2 = dynamic(() => import("./Dropdown_V.2"), { ssr: false });

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
import { SiCodementor } from "react-icons/si";
import { PiStudentFill } from "react-icons/pi";

import ButtonComponent from "../Micros/Button";

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
      <motion.img src={Student_img.src} alt="icon" animate={simpleFloatAnimation} />
    ),
  },
  tab2: {
    title: "Partners",
    path: "/Partners",
    description:
      "Enhance your team with our ready-to-deploy graduates skilled in the latest tech trends.",
    Icon: (
      <motion.img src={Student_img2.src} alt="icon" animate={simpleFloatAnimation} />
    ),
  },
  tab1BottomLinks: [
    {
      title: "Become JobReady",
      description: "Get ready for the job market with our career-focused bootcamps.",
      path: "/JobReady",
      Icon: <IoStatsChart />,
    },
    {
      title: "Mentorship",
      description: "Get guidance from industry experts and level up your skills.",
      path: "/mentors",
      Icon: <SiCodementor />,
    },
    {
      title: "Thought Leader",
      description: "Learn from the best in the industry and stay ahead of the curve.",
      path: "#",
      Icon: <IoBusiness />,
    },
    {
      title: "Students activity",
      description: "Get involved in our student community and grow your network.",
      path: "/DSA",
      Icon: <PiStudentFill />,
    },
  ],
  tab2BottomLinks: [
    {
      title: "Events Sponsor",
      description: "Sponsor our events and get access to our top tech talent.",
      path: "/EventSponsor",
      Icon: <IoSearchSharp />,
    },
    {
      title: " Get Talents",
      description: "Hire our top graduates and enhance your team.",
      path: "/GetTalents",
      Icon: <IoShieldCheckmark />,
    },
    {
      title: "Software Outsourcing",
      description: "Outsource your software development to our top graduates and save time and money.",
      path: "/SoftwareOutsourcingPage",
      Icon: <IoShieldCheckmarkOutline />,
    },
    {
      title: " Intern Program Management",
      description: "Manage your intern program with our HRMS and get access to top tech talent.",
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
      <motion.img src={TalentsStudent.src} alt="icon" animate={simpleFloatAnimation} />
    ),
  },
  tab2: {
    title: "Partners",
    path: "#",
    description:
      "Spot and recruit top tech talent seamlessly through our HRMS, enhancing your team with industry-leading expertise.",
    Icon: (
      <motion.img src={TalentsPartners.src} alt="icon" animate={simpleFloatAnimation} />
    ),
  },
};

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSolutionsOpen, setSolutionsOpen] = useState(false);
  const [isTallentsOpen, setTallentsOpen] = useState(false);

  const toggleNavigation = () => {
    setNavOpen(!isNavOpen);
  };
  const closeNavigation = () => {
    setNavOpen(false);
    scrollToTop();
  };

  const toggleSolutions = () => {
    setSolutionsOpen(!isSolutionsOpen);
  };

  const toggleTallents = () => {
    setTallentsOpen(!isTallentsOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-purple-950/20 sticky top-0 px-8 backdrop-blur-3xl bg-opacity-50 border-b border-purple-900/20 py-4 font-inter m-0 z-50 left-1/2 flex justify-center w-full shadow-md">
      <div className="flex gap-3 justify-between items-center max-[1496px]:px-0 max-w-[1400px] box-border w-full h-[2.5rem]">
        <div className="relative max-[1496px]:w-full max-[1496px]:flex max-[1496px]:p-[5%] h-auto justify-between items-center">
          {/* Logo */}
          <div className="left flex gap-3 justify-center relative items-center">
            <Link href="/" className="flex gap-[6px] relative items-center">
              <div className="w-32 relative md:w-48">
                <img className="aspect-auto" src={LogoImage.src} alt="Dragons Bootcamp" />
              </div>
            </Link>
            <div className="border px-2 py-1 text-xs max-[370px]:hidden select-none hover:bg-fuchsia-800 duration-300 cursor-pointer justify-center text-center grid place-items-center m-auto h-6 w-12 relative rounded-full">
              <span className="absolute animate-pulse duration-300">DEMO</span>
            </div>
          </div>

          {/* Hamburger Menu */}
          <button
            className="flex min-[1497px]:hidden flex-col aspect-square w-12 justify-center items-center gap-[6px]"
            onClick={toggleNavigation}
          >
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-[.45s] ${isNavOpen ? "-rotate-45 translate-y-2 delay-300" : "rotate-0 translate-y-0"}`}
            ></span>
            <span
              className={`h-[2px] bg-white transition-all duration-[.45s] ${isNavOpen ? "w-0" : "w-6 delay-300"}`}
            ></span>
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-[.45s] ${isNavOpen ? "rotate-45 -translate-y-2 delay-300" : "rotate-0 translate-y-0"}`}
            ></span>
          </button>
        </div>

        {/* Navigation Links and CTA Button */}
        <div
          className={`flex max-[1496px]:bg-[#2c1a3a] items-center min-[1496px]:justify-end max-[1496px]:flex-col text-lg font-normal h-full max-[1496px]:w-full gap-3 max-[1496px]:gap-0 max-[1496px]:overflow-y-scroll max-[1496px]:overflow-x-hidden w-screen flex-grow text-center transition-all box-border duration-[.45s] ${isNavOpen ? "max-[1496px]:translate-y-0" : "max-[1496px]:-translate-y-[120%]"} top-full left-0 text-black max-[1496px]:flex-col max-[1496px]:absolute max-[1496px]:w-full max-[1496px]:pb-[6.5rem] max-[1496px]:h-[calc(100vh-4.5rem)] max-[1496px]:text-lg max-[1496px]:border-b max-[1496px]:border-black`}
        >
          <NavbarLink path="/useCases" title="Use Cases" toggleNavigation={toggleNavigation} closeNavigation={closeNavigation} />

          {/* Solutions Dropdown */}
          <Dropdown_V2 isTabOpen={isSolutionsOpen} toggleTab={toggleSolutions} closeNav={closeNavigation} data={SolutionTabData} />

          {/* Tallents Dropdown */}
          <Dropdown isTabOpen={isTallentsOpen} closeNav={closeNavigation} toggleTab={toggleTallents} data={TallentsTabData} />

          {/* Static Navigation Links */}
          <NavbarLink path="/events" title="Events" toggleNavigation={toggleNavigation} closeNavigation={closeNavigation} />
          <NavbarLink path="/about" title="About Us" toggleNavigation={toggleNavigation} closeNavigation={closeNavigation} />
          <NavbarLink path="/Pricing" title="Pricing" toggleNavigation={toggleNavigation} closeNavigation={closeNavigation} />

          {/* CTA Button */}
          <div className="h-16 max-w-[350px] relative flex justify-center items-center w-full gap-3">
            <div className="h-12 w-full flex justify-center items-center">
              <Link href="/Pricing">
                <ButtonComponent className="!text-sm" CTAtext="Apply Now" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;