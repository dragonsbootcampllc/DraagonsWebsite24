"use client";
import Hero from "@/components/JopReady/Hero";
import PrepareSection from "@/components/JopReady/PrepareSection";
import LearningMaterialComponent from "@/components/JopReady/LearningMaterialComponent";
import CTAMaterial from "@/components/JopReady/CTAMaterial/CTAMaterial";
import CallToActionComponent from "@/components/JopReady/CallToActionComponent";
import ModernGrid from "@/components/ModernGrid";

const HeroObj = {
  News: {
    id: 1,
    date: "2020-01-01",
    content: "New Season just landed💯",
    link: "/blog/news",
  },
  heroHeading: " Transform ",
  heroHighlightedText: " Dragons Bootcamp",
  subHeadingText: " Your Career with",
  Disctiption: "This program is designed to help students, professionals, and entrepreneurs to learn the latest technologies and build projects that can help them to get a job or grow their business.",
};



const JopReady: React.FC = () => {
  return (
    <div className='relative w-full'>
      <Hero 
       News={HeroObj.News}
       subHeadingText={HeroObj.subHeadingText}
       heroHighlightedText={HeroObj.heroHighlightedText}
       heroHeading={HeroObj.heroHeading}
        Disctiption={HeroObj.Disctiption}
      />
        <ModernGrid/>

      <LearningMaterialComponent />
      <CTAMaterial />
      <CallToActionComponent />
    </div>
  );
};

export default JopReady;
