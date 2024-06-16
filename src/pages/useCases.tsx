"use client";
import Hero from "@/components/JopReady/Hero";
import PrepareSection from "@/components/JopReady/PrepareSection";
import LearningMaterialComponent from "@/components/JopReady/LearningMaterialComponent";
import CTAMaterial from "@/components/JopReady/CTAMaterial/CTAMaterial";
import CallToActionComponent from "@/components/JopReady/CallToActionComponent";
import HandsOnProjectsComponent from "@/components/JopReady/HandsOnProjectsComponent";
import HackathonsComponent from "@/components/JopReady/HackathonsComponent";


import InternationalLogo from  "@/components/JopReady/WorldWideLogo";
import ManSearchLogo from  "@/components/JopReady/WorldWideLogo";
import WorkingHomeLogo from "@/components/JopReady/WorldWideLogo";
import WorldWideLogo from  "@/components/JopReady/WorldWideLogo";
import ResumeLogo from "@/components/JopReady/WorldWideLogo";


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

const PrepObj = {
  gridItems: [
    {
      title: "Hands-on Project",
      description: "Gain practical experience by working on real projects.",
      logo: <WorkingHomeLogo />,
    },
    {
      title: "Hackathons and challenges",
      description:
        "Participate in hackathons and challenges to test your skills.",
      logo: <InternationalLogo />,
    },
    {
      title: "Internships and Apprenticeships",
      description:
        "Get opportunities to work in internships and apprenticeships.",
      logo: <WorldWideLogo />,
    },
    {
      title: "interviews preparation",
      description:
        "Receive guidance on resume building and interview techniques.",
      logo: <ResumeLogo />,
    },
    {
      title: "Real World Projects",
      description: "Work on projects that simulate real-world scenarios.",
      logo: <ManSearchLogo />,
    },
    {
      title: "Material",
      description: "Access to high-quality learning materials and resources.",
      logo: <InternationalLogo />,
    },
  ],
  headingText: "How We Prepare You to be",
  heroHighlightedText: " Job Ready ?",
  CTATextBelow: "Offering a complete experience, beyond just the tech.",
  buttonText: "Apply Now",
  subHeadingText: "Add your subheading text here",
  heroHeading: "Add your hero heading here",
  Disctiption: "Add your description here",
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
      <div className='bg-purple-950/20 w-full rounded-t-3xl'>
        <PrepareSection
          gridItems={PrepObj.gridItems}
          headingText={PrepObj.headingText}
          heroHighlightedText={PrepObj.heroHighlightedText}
          CTATextBelow={PrepObj.CTATextBelow}
          buttonText={PrepObj.buttonText}
          subHeadingText={PrepObj.subHeadingText}
          heroHeading={PrepObj.heroHeading}
          Disctiption={PrepObj.Disctiption} 
        />
      </div>

      <LearningMaterialComponent />
      <CTAMaterial />
      <CallToActionComponent />
      <HandsOnProjectsComponent />
      <HackathonsComponent />
    </div>
  );
};

export default JopReady;
