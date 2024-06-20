import EventSponsor from "@/components/Partenrs/EventSponsor";
import GetTalents from "@/components/Partenrs/GetTalents";
import InternProgramManagement from "@/components/Partenrs/InternProgramManagement";
import SoftwareOutsourcing from "@/components/Partenrs/SoftwareOutsourcing";
import YearRoundedInternship from "@/components/Partenrs/YearRoundedInternship";
import Hero from "@/components/JopReady/Hero";
import CTAMaterial from "@/components/JopReady/CTAMaterial/CTAMaterial";


const HeroObj = {
    News: {
        id: 1,
        date: "2020-01-01",
        content: "New Season just landed💯",
        link: "/blog/news",
    },
    heroHeading: "Unlock Innovation with ",
    subHeadingText: " Strategic ",
    heroHighlightedText: "Partnerships ",
    Disctiption: "Collaborate with us to access top talent, cutting-edge technology, and unparalleled support. Together, we can drive success and transform industries",
};


const Partenrs: React.FC = () => {
    return (
        <div className=" ">
            <div className=" flex flex-col gap-[70px] mt-10  h-full w-full relative bg-slate-950 ">
                <div className="absolute inset-0 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:65px_65px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <Hero
                    News={HeroObj.News}
                    subHeadingText={HeroObj.subHeadingText}
                    heroHighlightedText={HeroObj.heroHighlightedText}
                    heroHeading={HeroObj.heroHeading}
                    Disctiption={HeroObj.Disctiption}
                />

                <GetTalents />
                <InternProgramManagement />
                <EventSponsor />
                <SoftwareOutsourcing />
                <YearRoundedInternship />

            </div>
        </div>
    );
}

export default Partenrs;
