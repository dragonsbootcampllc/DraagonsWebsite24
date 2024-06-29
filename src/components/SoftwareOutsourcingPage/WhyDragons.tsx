import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Micros/Button";
import ButtonLite from "@/components/Micros/ButtonLite";
import { HoverEffect } from "@/components/ui/card-hover-effect";

interface Strength {
    title: string;
    description: string;
    image: string;
}

const CTA = {
    ctaApplyText: "Get Started",
    ctaReadMoreText: "Learn More",
};

const strengths: Strength[] = [
    {
        title: "Efficient Egyptian Team",
        description: "Our team consists of highly skilled professionals who have successfully completed numerous projects, delivering high-quality results on time.",
        image: "/images/efficient_team.jpg",
    },
    {
        title: "Extensive Project Experience",
        description: "We have a proven track record of handling a wide range of projects across different industries, ensuring we can meet your unique needs.",
        image: "/images/project_experience.jpg",
    },
    {
        title: "Favorable Time Zone Differences",
        description: "Our location allows for flexible working hours that can align with your business operations in Europe and America, providing seamless collaboration.",
        image: "/images/time_zone.jpg",
    },
    {
        title: "Competitive Hourly Rates",
        description: "We offer high-quality services at competitive rates, ensuring you get the best value for your investment.",
        image: "/images/competitive_rates.jpg",
    },
    {
        title: "Cutting-Edge Technology",
        description: "We stay up-to-date with the latest technologies and trends, ensuring we deliver innovative solutions that keep you ahead of the competition.",
        image: "/images/cutting_edge_technology.jpg",
    },
    {
        title: "Dedicated Support",
        description: "Our team is committed to providing continuous support, ensuring your projects run smoothly from start to finish.",
        image: "/images/dedicated_support.jpg",
    },
];

const headText = {
    headlineText: "Why Choose ",
    heroHighlightedText: "Dragons Bootcamp",
    subheadlineText: " for Software Outsourcing?",
    descriptionText: "Discover the key strengths that make Dragons Bootcamp your ideal partner for software outsourcing.",
};

const WhyDragons: React.FC = () => {
    return (
        <div className="w-full container mx-auto flex flex-col min-h-screen justify-center items-center gap-8 text-white px-4 sm:px-6 lg:px-8">
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
            <div className="container max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                {strengths.map((item, index) => (
                    <div
                        key={index}
                        className={`row-span-1 rounded-3xl  shadow-none p-4 bg-purple-800/40 border-white/[0.2] border justify-center  md:col-span-1  min-h-[200px] hover:shadow-[0_0_.5rem_0rem_rgba(251,53,208,1)] relative overflow-hidden text-center pt-5 flex flex-col gap-5 cursor-pointer transition-all hover:scale-[1.02] duration-300`}
                    >
                        <h3 className="font-sans font-bold text-xl px-3 text-white mb-2 mt-2">
                            {item.title}
                        </h3>
                        <p className="font-sans font-normal text-sm text-white/70">
                            {item.description}
                        </p>
                    
                        
                    </div>
                ))}
            </div>
            <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/Pricing" passHref>
                    <div className="h-12 w-48 md:h-16 md:w-64">
                        <Button CTAtext={CTA.ctaApplyText} />
                    </div>
                </Link>
                <Link href="/SupportDevelopment" passHref>
                    <div className="h-12 w-48 md:h-16 md:w-64">
                        <ButtonLite CTAtext={CTA.ctaReadMoreText} />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default WhyDragons;
