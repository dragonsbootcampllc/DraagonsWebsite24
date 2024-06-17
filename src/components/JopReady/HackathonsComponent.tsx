"use client";
import { image } from "@nextui-org/react";
import Link from "next/link";
import HackathonWinner from "@/../public/images/HackathonWinner.png";
import hackathonCroud from "@/../public/images/hackathonCroud.png";
import Gamification from "@/../public/images/Gamification.png";
import ButtonComponent from "../Micros/Button";
import ButtonLite from "../Micros/ButtonLite";
const headlineText: string = "Join the  ";
const HeadLineHighlightedText: string = "Hackathons";
const HeadLineSubText: string = "Revolution";
const descriptionText: string =
  "Through our exciting hackathons and challenges, you can showcase your skills, connect with industry professionals, and win cash prizes while solving real-world problems.";

const hackathonProjects = [
  {
    title: "Compete to ",
    titleHighlightedText: "Win Cash Prizes",
    description:
      "Participate in hackathons and challenges to solve real-world problems and win cash prizes.",
    image: HackathonWinner.src,
  },
  {
    title: "Compeat from ",
    titleHighlightedText: "anywhere easily",
    description:
      "Join hackathons and challenges from anywhere in the world, either online or offline",
    image: hackathonCroud.src,
  },
  {
    title: "Hackathons  full of  Fun", 
    titleHighlightedText: " Gamification and Fun",

    description:
      "Our hackathons and challenges are designed to be fun and engaging, with gamification elements to keep you entertained.",
    image: Gamification.src,
  },
];

const ctaApplyText: string = "Apply now";
const ReadMoreText: string = "Read More";


const HackathonsComponent: React.FC = () => {
  return (
    <div className='py-6' id="HackathonsComponent">
      <div className='container mx-auto flex flex-col justify-center items-center gap-9'>
        <div className='text md:max-w-[1000px]'>
          <div
            style={{ fontFamily: "interV" }}
            className='text-6xl content-center max-w-4xl text-center md:text-7xl z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
            <h1>
              {headlineText}
              <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
                {HeadLineHighlightedText}
              </span>{" "}
              {HeadLineSubText}
            </h1>
          </div>
          <p className='text-xl text-center mt-4 mb-8 text-white/70'>
            {descriptionText}
          </p>
        </div>
        <div className='grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          {hackathonProjects.map((project, index) => (
            <div key={index} className='relative w-full'>
              <div className='flex flex-col w-full h-[600px] hover:scale-[1.03] cursor-pointer transition-all bg-[#08091b] rounded-3xl overflow-hidden'>
                <img
                  src={project.image}
                  alt='Project Image'
                  className='object-cover rounded-3xl absolute bottom-0 w-full h-[100%]'
                />
                <div className='absolute top-2 p-6'>
                  <h3 className='text-2xl md:text-4xl text-center font-semibold'>
                    {project.title}
                    <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
                    {" "}  {project.titleHighlightedText}
              </span>{" "}
                  </h3>
                  
                  <p className='text-lg text-center   mt-4 mb-8 max-w-[600px] text-white/90'>
                  {project.description}
                </p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='cta rounded-xl flex gap-5 pb-10'>
              <Link href='/Pricing' passHref>
                <div className='h-16 w-64'>
                  <ButtonComponent CTAtext={ctaApplyText} />
                </div>
              </Link>
              <div className='h-16 w-64'>
                <ButtonLite CTAtext={ReadMoreText}/>
              </div>
          
      </div>
      </div>
    </div>
  );
};

export default HackathonsComponent;
