import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Micros/Button";
import ButtonLite from "@/components/Micros/ButtonLite";

interface HiringStep {
    title: string;
    description: string;
    image: string;
}

const CTA = {
    ctaApplyText: "Get Started",
    ctaReadMoreText: "Learn More",
};

const hiringSteps: HiringStep[] = [
    {
        title: "Post Your Job Openings",
        description: "Easily post job openings and reach a wide audience of qualified candidates.",
        image: "/images/People_Hiring.jpg",
    },
    {
        title: "Review Pre-Screened Candidates",
        description: "Quickly review candidates that have been pre-screened to match your criteria.",
        image: "/images/Hiring_Great_Employee.webp",
    },
    {
        title: "Conduct Interviews with Ease",
        description: "Schedule and conduct interviews seamlessly with our integrated tools.",
        image: "/images/hiring-small-business.jpg",
    },
    {
        title: "Seamless Onboarding Experience",
        description: "Ensure a smooth onboarding process for new hires with our efficient system.",
        image: "/images/hiring-vs-onboarding.png",
    },
];

const headText = {
    headlineText: "Simplify Your ",
    heroHighlightedText: "Hiring Process",
    subheadlineText: "",
    descriptionText: "Our streamlined hiring process makes it easy to find and onboard the right candidates. Save time and resources with our efficient system, designed to connect you with top talent quickly.",
};

const HiringProcessSection: React.FC = () => {
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
            <div className="container max-w-[1000px]    mx-auto grid grid-cols-1 md:grid-cols-3  gap-5">
                {hiringSteps.map((item, index) => (
                    <div
                        key={index}
                        className={`row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-purple-800/40 border-white/[0.2] border justify-between flex flex-col  [&>p:text-lg] md:col-span-1 ${index >= 3 ? 'col-span-1 md:col-span-3 text-xl md:text-3xl ' : 'col-span-1 md:text-xl'}   min-h-[400px] hover:shadow-[0_0_.5rem_0rem_rgba(251,53,208,1)] relative overflow-hidden text-center pt-5 flex flex-col gap-5 cursor-pointer transition-all hover:scale-[1.02] duration-300`}
                    >
                        <h3 className="font-sans font-bold   px-3 text-neutral-200 mb-2 mt-2">
                            {item.title}
                        </h3>
                        {/* <p className="font-sans font-normal  text-xs text-neutral-300">
                            {item.description}
                        </p> */}
                        <div className="w-full h-60 sm:h-80 md:h-full relative">
                            <Image
                                src={item.image}
                                alt={item.title}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                className="absolute bottom-0 rounded-3xl left-0 w-full h-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/GetStarted" passHref>
                    <div className="h-12 w-48 md:h-16 md:w-64">
                        <Button CTAtext={CTA.ctaApplyText} />
                    </div>
                </Link>
                <Link href="/HRManagement" passHref>
                    <div className="h-12 w-48 md:h-16 md:w-64">
                        <ButtonLite CTAtext={CTA.ctaReadMoreText} />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HiringProcessSection;
