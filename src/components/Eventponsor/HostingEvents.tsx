"use client";
import React, { useState } from "react";
import Link from "next/link";
import ButtonComponent from "../Micros/Button";
import Image from "next/image";
import { FaLaptopCode } from "react-icons/fa6";

const HandsOnProjectsComponent: React.FC = () => {
    const [showDescriptionIndex, setShowDescriptionIndex] = useState<number | null>(null);

    const content = [
        {
            title: "Robust Digital Platforms",
            description:
                "Utilize our reliable and user-friendly digital platforms to host your online events with ease.",
            image: "/images/JopReady/image.png",
        },
        {
            title: "Interactive Tools",
            description:
                "Engage your audience with interactive tools like live polls, Q&A sessions, and virtual networking opportunities.",
            image: "/images/JopReady/medical-office-manager.webp",
        },
    ];


    const headText = {
        headlineText: "Seamless Online ",
        heroHighlightedText: "Event Hosting",
        subheadlineText: "",
        descriptionText: "Take your events to the next level with our seamless online event hosting services. We offer robust platforms, interactive tools, and full support to ensure smooth, engaging virtual events",
    };


    const ApplyNowText: string = "Apply now";

    const handleMouseEnter = (index: number) => {
        setShowDescriptionIndex(index);
    };

    const handleMouseLeave = () => {
        setShowDescriptionIndex(null);
    };

    return (
        <div className='py-6' >
            <div className='container mx-auto flex flex-col justify-center items-center gap-9'>
                <div className='w-full flex justify-center'>
                    <div className='flex justify-center items-center bg-purple-700 w-[80px] text-center h-[80px] p-2 shadow-2xl shadow-blue-700/40 rounded-3xl md:w-[116px] md:h-[116px]'>
                        <FaLaptopCode className='text-black text-5xl' />
                    </div>
                </div>
                <div className="heading md:max-w-[1000px] text-center">
                    <h1
                        style={{ fontFamily: "interV" }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto z-10 relative mb-3 text-gray-200 font-semibold"
                    >
                        {headText.headlineText}
                        <span className="bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text">
                            {headText.heroHighlightedText}
                        </span>
                        {headText.subheadlineText}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-white/70 mt-4 mb-8">
                        {headText.descriptionText}
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className='relative text-center w-[400px] hover:scale-105 bg-[#08091b] z-10 duration-700 cursor-pointer transition-transform pt-6 rounded-3xl overflow-hidden flex flex-col gap-4 justify-between items-center'
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
                                        } absolute inset-0 rounded-3xl `}
                                    style={{ zIndex: 1 }}></div>
                            </div>
                            <p
                                className={`text-sm md:text-base lg:text-lg z-10 absolute bottom-0 p-4 mb-8 max-w-[600px] transition-transform duration-700 ease-in-out text-white/90 ${showDescriptionIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                            >
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className='cta max-sm:w-full max-sm:px-6 rounded-xl flex flex-col md:flex-row gap-4 md:gap-6 pb-10'>
                    <Link href='/Pricing' passHref>
                        <div className="h-12 w-48 md:h-16 md:w-64">
                            <ButtonComponent CTAtext={ApplyNowText} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HandsOnProjectsComponent;
