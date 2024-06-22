import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Micros/Button";
import ButtonLite from "@/components/Micros/ButtonLite";
import { GlareCard } from "../ui/glare-card";

interface GlareCardData {
    imageSrc: string;
    title: string;
    description: string;
    description_Highlighted: string;
}

const content: {
    headlineText: string;
    heroHighlightedText: string;
    subheadlineText: string;
    descriptionText: string;
    ctaApplyText: string;
    ctaReadMoreText: string;
    glareCards: GlareCardData[];
} = {
    headlineText: "Discover",
    heroHighlightedText: " Outstanding Talent",
    subheadlineText: " to Propel Your Business Forward",
    descriptionText: "Access a pool of skilled graduates ready to contribute to your company's success.",
    ctaApplyText: "Apply Now",
    ctaReadMoreText: "Read More",
    glareCards: [
        {
            imageSrc: "/images/talant/Faisel.jpg",
            title: "Faisel Ebrahim",
            description: "Dragons's Tech team Lead at ",
            description_Highlighted: "Neferdata",
        },
        {
            imageSrc: "/images/talant/MoALI.png",
            title: "Mohammed Ali",
            description: "Dragons's Tech team Lead at ",
            description_Highlighted: "LevelUp ESG",
        },
        {
            imageSrc: "/images/talant/AhmedSherif.jpeg",
            title: "Ahmed Sherif",
            description: "Dragons's Tech team Lead at ",
            description_Highlighted: "Actus Go",
        },
    ],
};

const GetTalents: React.FC = () => {
    const {
        headlineText,
        subheadlineText,
        heroHighlightedText,
        descriptionText,
        ctaApplyText,
        ctaReadMoreText,
        glareCards,
    } = content;

    return (
        <div className=" relative w-full rounded-t-3xl my-10 min-h-[700px] md:min-h-[calc(100vh-0rem)] grid place-items-center" id="CTAMaterial">
            <div className="container mx-auto flex flex-col justify-center items-center gap-9 px-4 md:px-6 lg:px-8">
                <div className="heading md:max-w-[1000px] text-center">
                    <h1
                        style={{ fontFamily: "interV" }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto z-10 relative mb-3 text-gray-200 font-semibold"
                    >
                        {headlineText}
                        <span className="bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text">
                            {heroHighlightedText}
                        </span>
                        {subheadlineText}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-white/70 mt-4 mb-8">
                        {descriptionText}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                    {glareCards.map((card, index) => (
                        <GlareCard key={index} className="relative flex flex-col items-start justify-end py-8 px-6">
                            <Image
                                src={card.imageSrc}
                                className="h-full w-full absolute inset-0 object-cover rounded-3xl"
                                alt={`Image of ${card.title}`}
                                width={3388}
                                height={2259}
                            />
                            {card.title && card.description && (
                                <div className="absolute left-0 right-0 grid place-items-center p-4 text-center h-[30%] bg-purple-900/80 backdrop-blur-3xl w-full bottom-0 rounded-b-3xl">
                                    <p className="font-bold text-yellow-300 text-lg md:text-xl lg:text-2xl">
                                        {card.title}
                                    </p>
                                    <p className="font-normal text-sm md:text-base lg:text-lg text-neutral-200">
                                        {card.description}
                                        <span className="font-bold text-purple-100">
                                            {card.description_Highlighted}
                                        </span>
                                    </p>
                                </div>
                            )}
                        </GlareCard>
                    ))}
                </div>

                <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/Pricing" passHref>
                        <div className="h-12 w-48 md:h-16 md:w-64">
                            <Button CTAtext={ctaApplyText} />
                        </div>
                    </Link>
                    <div className="h-12 w-48 md:h-16 md:w-64">
                        <ButtonLite CTAtext={ctaReadMoreText} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetTalents;
