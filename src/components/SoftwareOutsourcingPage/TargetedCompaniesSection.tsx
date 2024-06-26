import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Micros/Button";
import ButtonLite from "@/components/Micros/ButtonLite";
import TrainingServiceSection from "@/components/Cards/TrainingServiceSection-component/TrainingServiceSection";
import { StaticImageData } from "next/image";
import image1 from "@/../public/images/People_Hiring.jpg";
import image2 from "@/../public/images/hiring-small-business.jpg";
import image3 from "@/../public/images/Hiring_Great_Employee.webp";

interface HeadData {
    badge: string;
    title_1: string;
    title_span: string;
    title_2: string;
    description: string;
}

interface CardData {
    label: string;
    title: string;
    description: string;
    overlayStyle: string;
    image: StaticImageData;
    link: string;
}

const headData: HeadData = {
    badge: "Why Dragons Bootcamp?",
    title_1: "Is Dragons Your Perfect",
    title_span: " Outsourcing Partner?",
    title_2: "",
    description: "From startups to enterprises, Dragons Bootcamp empowers ALL businesses with skilled, scalable software outsourcing.",
};

const cardsData: CardData[] = [
    {
        label: "Book now!",
        title: "Startups",
        description: "New businesses looking to leverage technology to scale rapidly and efficiently.",
        overlayStyle: "radial-gradient(136.22% 75.8% at 50% 27.57%, #171619 0%, rgba(23, 22, 25, 1) 61.62%, rgba(0, 49, 239, 1) 79.17%, rgba(251, 53, 208, 1) 100%)",
        image: image1,
        link: "/Pricing",
    },
    {
        label: "Book now!",
        title: "Enterprises Testing New Tech",
        description: " Large companies wanting to explore new technologies without wasting time and resources. We can develop a test or MVP to validate your ideas.",
        overlayStyle: "radial-gradient(329.95% 173.05% at 50.04% 100%, #fc36d0 0%, rgba(252, 54, 208, 1) 0.52%, rgba(0, 49, 239, 1) 18.71%, rgba(23, 22, 25, 1) 28.65%, rgba(23, 22, 25, 1) 100%)",
        image: image2,
        link: "/Pricing",
    },
    {
        label: "Book now!",
        title: "Busy Professionals",
        description: "Individuals with extensive to-do lists who need expert help to accomplish their goals quickly and effectively.",
        overlayStyle: "radial-gradient(136.22% 75.8% at 50% 27.57%, #171619 0%, rgba(23, 22, 25, 1) 61.62%, rgba(0, 49, 239, 1) 79.17%, rgba(251, 53, 208, 1) 100%)",
        image: image3,
        link: "/Pricing",
    },
];

const CTA = {
    ctaApplyText: "Get Started",
    ctaReadMoreText: "Learn More",
};

const TargetedCompaniesSection: React.FC = () => {
    return (
        <div className="w-full container mx-auto flex flex-col min-h-screen justify-center items-center gap-8 text-white px-4 sm:px-6 lg:px-8">
            <div className='w-full relative flex justify-center'>
                <TrainingServiceSection HeadData={headData} CardsData={cardsData} />
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

export default TargetedCompaniesSection;
