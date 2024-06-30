"use client";
import React, { useState } from "react";
import Link from "next/link";
import ButtonComponent from "../Micros/Button";
import ButtonLite from "../Micros/ButtonLite";

const HandsOnProjectsComponent: React.FC = () => {
  const [showDescriptionIndex, setShowDescriptionIndex] = useState<number | null>(null);

  const content = [
    {
      title: "Webinars",
      description:
        "Engaging one-hour sessions where mentors dive deep into key topics. We prepare you beforehand so you can make the most of these sessions",
      image: "/images/JopReady/image.png",
    },
    {
      title: "After Party",
      description:
        "Post-webinar sessions where we re-explain topics and practice together, ensuring you grasp the concepts thoroughly.",
      image: "/images/JopReady/medical-office-manager.webp",
    },
  ];

  const ReadMoreText: string = "Read More";
  const ApplyNowText: string = "Apply now";

  const handleMouseEnter = (index: number) => {
    setShowDescriptionIndex(index);
  };

  const handleMouseLeave = () => {
    setShowDescriptionIndex(null);
  };

  return (
    <div className='py-6 px-4'>
      <div className='container mx-auto flex flex-col justify-center items-center gap-9'>
        <div className='w-full flex justify-center'>
          <div className='bg-purple-700 w-24 h-24 p-2 shadow-2xl shadow-blue-700/40 rounded-3xl'></div>
        </div>
        <div
          style={{ fontFamily: "interV" }}
          className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-200 font-semibold text-center mb-3'>
          <h1>
            <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
              The Mentor Experience
            </span>
          </h1>
        </div>
        <p className='text-lg md:text-xl text-center mb-8 max-w-3xl text-white/70'>
          Our mentors are integral to the Dragons bootcamp experience. Here's what you can expect:
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {content.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className='relative text-center hover:scale-105 bg-[#08091b] z-10 duration-700 cursor-pointer transition-transform pt-6 rounded-3xl overflow-hidden flex flex-col gap-4 justify-between items-center'>
              <div className='text-center grid place-items-center'>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold'>
                  {item.title}
                </h3>
              </div>
              <div
                className='relative rounded-3xl overflow-hidden'
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}>
                <img src={item.image} alt={item.title} className='w-full h-auto' />
                <div
                  className={`${showDescriptionIndex === index ? "bg-gradient-to-t from-purple-900 via-black/50 to-transparent" : ""} absolute inset-0 rounded-3xl transition-opacity duration-300`}
                  style={{ zIndex: 1 }}
                ></div>
              </div>
              {showDescriptionIndex === index && (
                <p className='text-sm md:text-base lg:text-lg z-10 absolute bottom-0 mt-4 mb-8 max-w-[600px] mx-auto text-white/90'>
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className='cta rounded-xl flex flex-col sm:flex-row gap-4 sm:gap-5 pb-10'>
          <Link href='/Pricing' passHref>
            <div className='h-12 w-48 md:h-14 md:w-56 lg:h-16 lg:w-64'>
              <ButtonComponent CTAtext={ApplyNowText} />
            </div>
          </Link>
          <div className='h-12 w-48 md:h-14 md:w-56 lg:h-16 lg:w-64'>
            <ButtonLite CTAtext={ReadMoreText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandsOnProjectsComponent;
