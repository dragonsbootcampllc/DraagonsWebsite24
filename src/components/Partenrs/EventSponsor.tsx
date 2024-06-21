import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Micros/Button";
import ButtonLite from "@/components/Micros/ButtonLite";


const CTA = {
    ctaApplyText: "Apply Now",
    ctaReadMoreText: "Read More",
}

const eventsSponsorData = [
    {
        title: "Tailored Brand Integration",
        description: "Customizing sponsorship packages to seamlessly integrate your brand into event activities and promotions.",
        image: "/images/supportive_community.jpg",

    },
    {
        title: "Brand Visibility",
        description: "Increasing brand exposure through event branding opportunities like logos on banners, promotional items, and digital platforms.",
        image: "/images/learning_companies.jpg",

    },
    {
        title: "Audience Engagement",
        description: "Facilitating interactive activities or workshops to engage attendees and strengthen your brand's connection with the audience.",
        image: "/images/industry_connections.jpg",

    },
];
const headText = {
    headlineText: "Empower",
    heroHighlightedText: "  Your Events ",
    subheadlineText: " Through Strategic Sponsorship",
    descriptionText: "We provide sponsorship for various events to help you reach your audience and make your events successful.",
};
const EventSponsor: React.FC = () => {
    return (
        <div className="w-full container mx-auto  flex flex-col  min-h-screen justify-center items-center gap-8 text-white">
            <div className='heading md:max-w-[1000px] text-center'>
                <h1
                    style={{ fontFamily: "interV" }}
                    className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto z-10 relative mb-3 text-gray-200 font-semibold'>
                    {headText.headlineText}
                    <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
                        {headText.heroHighlightedText}
                    </span>
                    {headText.subheadlineText}
                </h1>
                <p className='text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-white/70 mt-4 mb-8'>
                    {headText.descriptionText}
                </p>
            </div>
            <div className="container  max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                {eventsSponsorData.map((item, index) => (
                    <div key={index} className=" rounded-2xl bg-purple-950 min-h-[400px] hover:shadow-[0_0_.5rem_0rem_rgba(251,53,208,1)]   relative overflow-hidden text-center pt-5 flex flex-col gap-5 cursor-pointer transition-all hover:scale-[1.02] duration-300">
                        <h3 className='font-semibold text-3xl bg-gradient-to-r from-white to-gray-200  text-transparent bg-clip-text'>{item.title}</h3>
                        <p className='text-[14px] text-center text-white/70 font-semibold '>{item.description}</p>
                        <div className="w-full h-full relative">
                            <Image
                                src={item.image}
                                alt={item.title}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                className="absolute bottom-0 left-0 w-full h-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center'>
                <Link href='/Pricing' passHref>
                    <div className='h-12 w-48 md:h-16 md:w-64'>
                        <Button CTAtext={CTA.ctaApplyText} />
                    </div>
                </Link >
                <Link href='/Events' passHref>
                    <div className='h-12 w-48 md:h-16 md:w-64'>
                        <ButtonLite CTAtext={CTA.ctaReadMoreText} />
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default EventSponsor;
