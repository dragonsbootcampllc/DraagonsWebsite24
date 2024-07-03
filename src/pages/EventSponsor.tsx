"use client";
import Hero from "@/components/JopReady/Hero";

import TailoredBrandIntegration from "@/components/Eventponsor/TailoredBrandIntegration";
import HostingEvents from "@/components/Eventponsor/HostingEvents";
import CTAMaterial from "@/components/JopReady/CTAMaterial/CTAMaterial";
import CallToActionComponent from "@/components/JopReady/CallToActionComponent";
import HandsOnProjectsComponent from "@/components/JopReady/HandsOnProjectsComponent";
import HackathonsComponent from "@/components/JopReady/HackathonsComponent";

const HeroObj = {
    News: {
        id: 1,
        date: "2020-01-01",
        content: "New Season just landed💯",
        link: "/blog/news",
    },
    subHeadingText: "Empower Your Events Through ",
    heroHighlightedText: "Strategic Sponsorship",
    heroHeading: "",
    Disctiption: "We sponsor events to help you reach your audience and ensure success. Partner with us to elevate your brand and create memorable experiences for your attendees.",
};




const EventSponsor: React.FC = () => {
    return (
        <div className='relative w-full'>
            <Hero
                News={HeroObj.News}
                subHeadingText={HeroObj.subHeadingText}
                heroHighlightedText={HeroObj.heroHighlightedText}
                heroHeading={HeroObj.heroHeading}
                Disctiption={HeroObj.Disctiption}
            />
            <TailoredBrandIntegration />
            <HostingEvents/>
            <CTAMaterial/>
            <CallToActionComponent/>
            <HandsOnProjectsComponent/>
            <HackathonsComponent/>
        </div>
    );
};
export default EventSponsor;

