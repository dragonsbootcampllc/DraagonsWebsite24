"use client";
import Hero from "@/components/JopReady/Hero";
import PrepareSection from "@/components/JopReady/PrepareSection";
import LearningMaterialComponent from "@/components/JopReady/LearningMaterialComponent";
import CTAMaterial from "@/components/JopReady/CTAMaterial/CTAMaterial";
import CallToActionComponent from "@/components/JopReady/CallToActionComponent";
import HandsOnProjectsComponent from "@/components/JopReady/HandsOnProjectsComponent";
import HackathonsComponent from "@/components/JopReady/HackathonsComponent";

import ResumeLogo from "@/components/JopReady/WorldWideLogo";
import InternationalLogo from  "@/components/JopReady/WorldWideLogo";
import ManSearchLogo from  "@/components/JopReady/WorldWideLogo";
import WorkingHomeLogo from "@/components/JopReady/WorldWideLogo";
import WorldWideLogo from  "@/components/JopReady/WorldWideLogo";
import OFFICE from "@/../public/images/JopReady/image.png";
import { Disc } from "lucide-react";
const HeroObj = {
  News: {
    id: 1,
    date: "2020-01-01",
    content: "New Season just landed💯",
    link: "/blog/news",
  },
  subHeadingText: " With Dragons Bootcamp in ",
  heroHighlightedText: "Only 6 Month",
  heroHeading: "Become Job Ready ",
  Disctiption: "Join Dragons Bootcamp and become job-ready in just 6 months. Gain essential skills and hands-on experience for a successful career",
};
// Sample data for the grid items
type MaterialObj = {
  gridItems: GridItemV2[];
  headlineText: string;
  heroHighlightedText: string;
  descriptionText: string;
  sectionTitle: string;
  sectionDescription: string;
  ReadMoreText: string;
  ApplyNowText: string;
  image: string;
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

// Define the type for our grid items
type GridItemV2 = {
  id: number; // Update this line
  title: string;
  description: string;
};
const gridItems: GridItemV2[] = [
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

      <LearningMaterialComponent 
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
      <HandsOnProjectsComponent />
      <HackathonsComponent />
    </div>
  );
};
export default JopReady;

