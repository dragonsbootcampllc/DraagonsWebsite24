import EventSponsor from "@/components/Partenrs/EventSponsor";
import GetTalents from "@/components/Partenrs/GetTalents";
import InternProgramManagement from "@/components/Partenrs/InternProgramManagement";
import SoftwareOutsourcing from "@/components/Partenrs/SoftwareOutsourcing";
import YearRoundedInternship from "@/components/Partenrs/YearRoundedInternship";
import Hero from "@/components/JopReady/Hero";
import HRMSSection from "@/components/GetTalents/HRMSSection";

const HeroObj = {
    News: {
        id: 1,
        date: "2020-01-01",
        content: "New Season just landed💯",
        link: "/blog/news",
    },
    heroHeading: "Empower Your ",
    subHeadingText: " Workforce with  ",
    heroHighlightedText: " Top Talent ",
    Disctiption: "Discover how our HR management system connects you with exceptional talent from Dragons Bootcamp. Streamline your hiring process and elevate your team.",
};


const GetTalentsPage: React.FC = () => {
    return (
        <div className=" ">
            <div className="flex flex-col gap-[90px] bg-fixed bg-cover mt-10 h-full w-full relative">
                <div className="absolute bg-fixed z-[-1] inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_100%_at_70%_10%,_#000_60%,_transparent_100%)]"></div>
                <Hero
                    News={HeroObj.News}
                    subHeadingText={HeroObj.subHeadingText}
                    heroHighlightedText={HeroObj.heroHighlightedText}
                    heroHeading={HeroObj.heroHeading}
                    Disctiption={HeroObj.Disctiption}
                />
                <HRMSSection/>
                <GetTalents />
                <InternProgramManagement />
                <EventSponsor  />
                <SoftwareOutsourcing />
                <YearRoundedInternship />

            </div>
        </div>
    );
}

export default GetTalentsPage;
