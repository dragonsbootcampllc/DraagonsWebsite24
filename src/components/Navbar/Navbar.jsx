'use client'
import { React, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Dropdown = dynamic(() => import("./Dropdown"), {
  ssr: false,
});

const NavbarLink = dynamic(() => import("./NavbarLink"), {
  ssr: false,
});
const Dropdown_V2 = dynamic(() => import("./Dropdown_V.2"), {
  ssr: false,
});

import levelUp_O2_img from '@/../public/assets/Dash/ESGNAV/o2.png';
import LogoImage from "@/../public/Identity/Images/2023/SVG/test.svg";
import sustracker_img from '@/../public/assets/Dash/ESGNAV/sustracker.png';
import datalab_img from '@/../public/assets/Dash/SolutionNAV/lab.png';
import pulse_img from '@/../public/assets/Premasset/279b4dee-988e-4168-9745-09c71397741a.png';
import resources_img from '@/../public/assets/Dash/academy/resources.png';
import workshop_img from '@/../public/assets/Dash/academy/workshop.png';
import {
  IoLeaf,
  IoStatsChart,
  IoEarth,
  IoPeople,
  IoBusiness,
  IoDocumentText,
  IoShieldCheckmark,
  IoAnalytics,
  IoTrendingUp,
  IoWarning,
  IoSearchSharp,
  IoShieldCheckmarkOutline,
  IoWarningOutline
} from 'react-icons/io5';

import {
  FaChalkboardTeacher,
  FaBlog,
  FaBroadcastTower,
  FaRobot,
} from "react-icons/fa";
import business_img from '@/../public/assets/Dash/Solutions/Biz.png';
import ESG_img from '@/../public/assets/Dash/Solutions/ESG.png';
import ButtonComponent from "../Micros/Button";
import ButtonLite from "@/components/Micros/ButtonLite";
import Button from "@/components/Micros/Button";


const simpleFloatAnimation = {
  y: ["-20px", "22px"],
  transition: {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 4,
    ease: "easeInOut",
  },
};
const UseCasesTabData = {
  title: "Use Cases",
  tab1: {
    title: "LevelUp O2®",
    path: "service/levelup-o2",
    description: "AI-driven carbon accounting for your entire value chain.",
    Icon: <motion.img src={levelUp_O2_img} alt="icon" animate={simpleFloatAnimation} />,
  },
  tab2: {
    title: "SusTracker AI®",
    path: "esg-software/sustainability-tracker",
    description: "Streamline ESG management for enhanced real-time insights.",
    Icon: <motion.img src={sustracker_img} alt="icon" animate={simpleFloatAnimation} />,
  },
};

const SolutionTabData = {
  title: "Solutions",
  tab1: {
    title: "Students",
    path: "http://dragons.divzoon.com/solutions/students/",
    description:
      "Advance your career with Dragoons Bootcamp’s targeted courses in data analysis and full-stack development.",
    Icon: <motion.img src={pulse_img} alt="icon" animate={simpleFloatAnimation} />,
  },
  tab2: {
    title: "Partners",
    path: "http://dragons.divzoon.com/solutions/partners/",
    description:
      "Enhance your team with our ready-to-deploy graduates skilled in the latest tech trends.",
    Icon: <motion.img src={datalab_img} alt="icon" animate={simpleFloatAnimation} />,
  },
  categories: [
    {
      title: "Become JopReady",
      path: "/JopReady",
      color: "#9b59b6",
      links: [
        {
          Icon: IoStatsChart,
          title: "Get Set for Success: Preparation Strategies",
          path: "/JopReady#PrepareSection"
        },
        {
          Icon: IoAnalytics,
          title: "Learning Resources: Your Knowledge Toolkit",
          path: "/JopReady#LearningMaterialComponent"
        },
        {
          Icon: IoEarth,
          title: "Real-World Experience: Hands-On Projects",
          path: "/JopReady#HandsOnProjectsComponent"
        },
        {
          Icon: IoLeaf,
          title: "Next Steps: Your Call to Action",
          path: "/JopReady#CallToActionComponent"
        },
      ]
    },
    {
      title: "Levelling-Up",
      path: "/JopReady",
      color: "#9b59b6",
      links: [
        {
          Icon: IoBusiness,
          title: "ESG Governance",
          path: "/JopReady#PrepareSection"
        },
        {
          Icon: IoDocumentText,
          title: "ESG Data Management",
          path: "/JopReady#LearningMaterialComponent"
        },
        {
          Icon: IoWarning,
          title: "Greenwashing Controls",
          path: "services/greenwashing-controls"
        },
        {
          Icon: IoShieldCheckmark,
          title: "ESG Disclosures & Reporting",
          path: "services/esg-disclosures-&-reporting"
        },
      ]
    },
    {
      title: "Assurance",
      path: "JopReady.tsx",
      color: "#9b59b6",
      links: [
        {
          Icon: IoTrendingUp,
          title: "ESG Third-Party Assurance",
          path: "services/esg-third-party-assurance"
        },
        {
          Icon: IoPeople,
          title: "ESG Supply Chain Audits",
          path: "services/esg-supply-chain-audits"
        },
        {
          Icon: IoLeaf,
          title: "Corporate Sustainability Due Diligence",
          path: "services/corporate-sustainability-due-diligence"
        },
      ]
    },
  ],
  moreLinks2: {
    title: "Some Business Services",
    links: [
      {
        title: "Internal Audit",
        Icon: IoSearchSharp,
        path: "service/internal-audit",
      },
      {
        title: "Compliance",
        Icon: IoShieldCheckmarkOutline,
        path: "service/compliance",
      },
      {
        title: "Risk management",
        Icon: IoWarningOutline,
        path: "service/risk-management",
      }
    ],
  }
};

const TallentsTabData = {
  title: "Tallents",
  tab1: {
    title: "ESG Services",
    path: "/Talents",
    description:
      "ESG Services assist companies in implementing sustainable and ethical operational practices.",
    Icon: <motion.img src={ESG_img} alt="icon" animate={simpleFloatAnimation} />,
  },
  tab2: {
    title: "Business Assurance",
    path: "service/business",
    description:
      "Business Services offer essential support for enhancing company efficiency and growth.",
    Icon: <motion.img src={business_img} alt="icon" animate={simpleFloatAnimation} />,
  },

};





const Navbar = () => {
  // State hooks for controlling UI elements
  const [isNavOpen, setNavOpen] = useState(false);
  const [isUseCasesOpen, setUseCasesOpen] = useState(false);
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

  // Use cases tab functions
  const toggleUseCases = () => {
    setUseCasesOpen(!isUseCasesOpen);
  };
  const closeUseCases = () => {
    setUseCasesOpen(false);
    closeNavigation();
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
    <nav className="bg-purple-900 px-12 backdrop-blur-3xl bg-opacity-50  border-b border-white/20 py-4 fixed top-0 font-inter m-auto -translate-x-1/2 z-50 left-1/2 flex justify-center w-full  shadow-md">
      <div className="flex gap-5 justify-between items-center  max-[1496px]:px-0 max-w-[1400px] box-border w-full  h-[4.5rem]">
        <div className="z-50 max-[1496px]:w-full max-[1496px]:flex max-[1496px]:p-[5%] max-[1496px]:h-full justify-between items-center">
          {/* Logo */}
          <div className="left flex gap-3 justify-center items-center">
            <Link href="/" className="flex gap-[6px] items-center">
              <div className="w-32 md:w-48">
                <img
                  className="aspect-square"
                  src={LogoImage.src}
                  alt="Dragons Bootcamp"
                />
              </div>
            </Link>
            <div
              className={
                "border px-2 py-1 text-xs max-[370px]:hidden select-none hover:bg-fuchsia-800 duration-300 cursor-pointer  justify-center text-center grid place-items-center m-auto h-6 w-12 relative rounded-full"
              }
            >
              <span className={"absolute"}>DEMO</span>
            </div>
          </div>

          {/* Logo and Hamburger Menu */}
          <button
            className="flex min-[1497px]:hidden flex-col aspect-square w-12 justify-center items-center gap-[6px]"
            onClick={toggleNavigation}
          >
            {/* Simplified class names for readability */}
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-[.45s] ${isNavOpen
                ? "-rotate-45 translate-y-2 delay-300"
                : "rotate-0 translate-y-0"
                }`}
            ></span>
            <span
              className={`h-[2px] bg-white transition-all duration-[.45s] ${isNavOpen ? "w-0" : "w-6 delay-300"
                }`}
            ></span>
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-[.45s] ${isNavOpen
                ? "rotate-45 -translate-y-2 delay-300"
                : "rotate-0 translate-y-0"
                }`}
            ></span>
          </button>
        </div>

        {/* Navigation Links and CTA Button */}
        <div
          className={`flex max-[1496px]:bg-[#2c1a3a] items-center min-[1496px]:justify-end max-[1496px]:flex-col text-[20px] font-normal h-full max-[1496px]:w-full gap-5 max-[1496px]:gap-0 max-[1496px]:overflow-y-scroll max-[1496px]:overflow-x-hidden w-screen  flex-grow text-center transition-all box-border duration-[.45s] ${isNavOpen
            ? "max-[1496px]:translate-y-0"
            : "max-[1496px]:-translate-y-[120%]"
            } top-full left-0 text-black  max-[1496px]:flex-col max-[1496px]:absolute max-[1496px]:w-full max-[1496px]:pb-[6.5rem] max-[1496px]:h-[calc(100vh-4.5rem)] max-[1496px]:text-lg max-[1496px]:border-b max-[1496px]:border-black`}
        >
          {/* Use Cases Dropdown */}
          <Dropdown
            isTabOpen={isUseCasesOpen}
            closeTab={closeUseCases}
            toggleTab={toggleUseCases}
            data={UseCasesTabData}
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
            path="/events"
            title="Events"
            toggleNavigation={toggleNavigation}
            closeNavigation={closeNavigation}
          />
          <NavbarLink
            path="/aboutUs"
            title="About Us"
            toggleNavigation={toggleNavigation}
            closeNavigation={closeNavigation}
          />
          <NavbarLink
            path="/Pricing "
            title="Pricing "
            toggleNavigation={toggleNavigation}
            closeNavigation={closeNavigation}
          />
          {/* CTA Button */}
          <div className='h-16 max-w-[350px] flex max-[402px]:flex-col px-5 w-full justify-between gap-3'>
            <ButtonLite
              CTAtext="Boot a Demo"
            />
            <ButtonComponent
              CTAtext="Apply Now"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;