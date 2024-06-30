"use client";
import React, { useState } from "react";
import Link from "next/link";
import ButtonComponent from "../Micros/Button";
import ButtonLite from "../Micros/ButtonLite";
import Image from "next/image";

const HandsOnProjectsComponent: React.FC = () => {
  const [showDescriptionIndex, setShowDescriptionIndex] = useState<number | null>(null);

  const content = [
    {
      title: "Hands-on Skill Development",
      description:
        "Develop essential technical skills, problem-solving abilities, and collaboration techniques through hands-on projects.",
      image: "/images/JopReady/image.png",
    },
    {
      title: "Gain Experience & Get Paid",
      description:
        "Gain professional experience and earn income by working on real client projects like custom software solutions, websites, or applications.",
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
    <div className='py-6' id='HandsOnProjectsComponent'>
      <div className='container mx-auto flex flex-col justify-center items-center gap-9'>
        <div className='w-full flex justify-center'>
          <div className='bg-purple-700 w-[80px] h-[80px] p-2 shadow-2xl shadow-blue-700/40 rounded-3xl md:w-[116px] md:h-[116px]'></div>
        </div>
        <div
          style={{ fontFamily: "interV" }}
          className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center max-w-4xl z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
          <h1>
            Put Your Knowledge Into Action with Intensive{" "}
            <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
              Projects
            </span>
          </h1>
        </div>
        <p className='text-lg md:text-xl lg:text-2xl text-center px-6 mb-8 md:max-w-[800px] text-white/70'>
          Our hands-on projects allow you to apply your knowledge in real-world scenarios and develop valuable skills that employers are looking for.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {content.map((item, index) => (
            <div
              key={index}
              className='relative text-center w-full h-full hover:scale-105 bg-[#08091b] z-10 duration-700 cursor-pointer transition-transform pt-6 rounded-3xl overflow-hidden flex flex-col gap-4 justify-between items-center'
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <div className='text-center grid place-items-center'>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold'>
                  {item.title}
                </h3>
              </div>
              <div
                className='relative w-full h-[200px] md:h-[250px] lg:h-[300px] rounded-3xl overflow-hidden'
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}>
                <Image
                  src={item.image}
                  fill={true}
                  className='object-cover rounded-3xl'
                  alt='image'
                />
                <div
                  className={`${showDescriptionIndex === index
                      ? "bg-gradient-to-t from-purple-900 via-black/50 to-transparent"
                      : ""
                    } absolute inset-0 rounded-3xl`}
                  style={{ zIndex: 1 }}></div>
              </div>
              {showDescriptionIndex === index && (
                <p className='text-sm md:text-base lg:text-lg z-10 absolute bottom-0 p-4 mb-8 max-w-[600px] text-white/90'>
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className='cta max-sm:w-full max-sm:px-6 rounded-xl flex flex-col md:flex-row gap-4 md:gap-6 pb-10'>
          <Link href='/Pricing' passHref>
            <div className='w-full md:w-auto h-16'>
              <ButtonComponent CTAtext={ApplyNowText} />
            </div>
          </Link>
          <div className='w-full md:w-auto h-16'>
            <ButtonLite CTAtext={ReadMoreText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandsOnProjectsComponent;
