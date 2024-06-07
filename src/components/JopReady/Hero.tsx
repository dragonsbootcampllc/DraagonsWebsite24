"use client";
import React from 'react';

const heroHeading = "Welcome to Your Job-Ready Journey";
const heroHighlightedText = "Job-Ready";
const heroDescription = "We help you become job-ready with our comprehensive programs";
const heroImageSrc = "/images/JopReady/Office.png";
const heroImageAlt = "Hero Image";

const Hero: React.FC = () => {
    return (
        <div className="hero py-[60px] md:py-[140px]">
            <div className="container mx-auto flex flex-col justify-between gap-5 md:flex-row items-center">
                <div className="content flex flex-col gap-12">
                    <div className="text text-white flex flex-col gap-7 w-full text-center md:text-left md:max-w-[550px]">
                        <h1 className='text-4xl md:text-6xl font-semibold'>
                            {heroHeading.split(heroHighlightedText).map((part, index) => (
                                <React.Fragment key={index}>
                                    {part}
                                    {index < heroHeading.split(heroHighlightedText).length - 1 && (
                                        <span className="bg-gradient-to-r from-pink-600 to-blue-500 text-transparent bg-clip-text">
                                            {heroHighlightedText}
                                        </span>
                                    )}
                                </React.Fragment>
                            ))}
                        </h1>
                        <p className='text-xl text-white/60'>{heroDescription}</p>
                    </div>
                </div>
                <div className="image rounded-xl overflow-hidden">
                    <img src={heroImageSrc} alt={heroImageAlt} className='flex-shrink-0' />
                </div>
            </div>
        </div>
    );
};

export default Hero;
