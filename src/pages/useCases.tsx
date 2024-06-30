"use client";
import Hero from "@/components/JopReady/Hero";
import WhatAreOurProgramsForComponent from "@/components/JopReady/LearningMaterialComponent";
import CTAMaterial from "@/components/JopReady/CTAMaterial/CTAMaterial";
import CallToActionComponent from "@/components/JopReady/CallToActionComponent";
import ModernGrid from "@/components/ModernGrid";
import OFFICE from "@/../public/images/JopReady/image.png";


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

// Define the type for our grid items
type GridItem = {
  id: number;
  title: string;
  description: string;
};

// Define the type for our material object
type MaterialObj = {
  gridItems: GridItem[];
  headlineText: string;
  heroHighlightedText: string;
  descriptionText: string;
  sectionTitle: string;
  sectionDescription: string;
  ReadMoreText: string;
  ApplyNowText: string;
  image: string;
};




const gridItems: GridItem[] = [
  {
    id: 1,
    title: "Students",
    description:
      "preferably CS grads or people that have a good background in it, but we also accept students from other majors.",
  },
  {
    id: 2,
    title: "Career Shifters",
    description:
      "People who are looking to shift their career to software development or data science ",
  },
  {
    id: 3,
    title: " Professionals Shifters",
    description:
      "People that are already working in the tech industry but want to learn new technologies or improve their skills.",
  },
  {
    id: 4,
    title: "Tech Entrepreneurs",
    description:
      "People that are looking to build their own tech startup or improve their existing business.",
  },


];

const MaterialObj: MaterialObj = {
  gridItems: gridItems,
  headlineText: " Transform Your Career with ",
  heroHighlightedText: " Dragons Bootcamp",
  descriptionText:
    "This program is designed to help students, professionals, and entrepreneurs to learn the latest technologies and build projects that can help them to get a job or grow their business.",
  sectionTitle: "Join us and take the first step towards transforming your career!",
  sectionDescription:
    "Don't miss out on the opportunity to be part of a program that adapts to your unique needs and goals.",
  ReadMoreText: "Read More",
  ApplyNowText: "Apply Now",
  image: OFFICE.src,
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
      <ModernGrid />

      <WhatAreOurProgramsForComponent
        gridItems={MaterialObj.gridItems}
        headlineText={MaterialObj.headlineText}
        heroHighlightedText={MaterialObj.heroHighlightedText}
        descriptionText={MaterialObj.descriptionText}
        sectionTitle={MaterialObj.sectionTitle}
        sectionDescription={MaterialObj.sectionDescription}
        ReadMoreText={MaterialObj.ReadMoreText}
        ApplyNowText={MaterialObj.ApplyNowText}
        image={MaterialObj.image}
      />
      <CTAMaterial />
      <CallToActionComponent />
    </div>
  );
};

export default JopReady;