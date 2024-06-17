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
    title: "Expert-Authored Content",
    description:
      "Learn from the best with textbooks and resources written by industry leaders.",
  },
  {
    id: 2,
    title: "Always Up-to-Date",
    description:
      "Our curriculum is reshaped regularly to include the latest trends, tools, and technologies.",
  },
  {
    id: 3,
    title: "Hands-On Learning",
    description:
      "Engage in practical coding exercises, real-world projects, and interactive workshops.",
  },
  {
    id: 4,
    title: "Integrated Learning Pathways",
    description:
      "Benefit from our Code Program Plus and Parallel Programs, providing a comprehensive and holistic learning experience.",
  },

  
];

const MaterialObj: MaterialObj = {
  gridItems: gridItems,
  headlineText: " Transform Your Career with ",
  heroHighlightedText: " Dragons Bootcamp",
  descriptionText:
    "This program is designed to help students, professionals, and entrepreneurs to learn the latest technologies and build projects that can help them to get a job or grow their business.",
  sectionTitle: "What You Will Learn",
  sectionDescription:
    "Our curriculum is designed to help you learn the latest technologies and build projects that can help you get a job or grow your business.",
  ReadMoreText: "Read More",
  ApplyNowText: "Apply Now",
  image:OFFICE.src,
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
