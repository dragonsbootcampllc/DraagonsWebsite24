import React from "react";
import Hero from "@/components/JopReady/Hero";
import { TrustedSection } from "../components/Trusted/TrustedSection";
import LearningMaterialComponent from "@/components/JopReady/LearningMaterialComponent";
import OFFICE from "@/../public/images/Gallery/18.png";
import HackathonsComponent from "@/components/JopReady/HackathonsComponent";
import PartnerSlider from "@/components/PartnerSlider";

const DSA = () => {

  const HeroObj = {
    News: {
      id: 1,
      date: "2024-01-01",
      content: "New Season just landed💯",
      link: "#",
    },
    subHeadingText: "",
    heroHighlightedText: "Connect, Create, Innovate",
    heroHeading: "Dragons Student Activities: ",
    Disctiption: "Join our tech-focused student community. Connect with peers, discuss latest trends, and build lasting friendships. Participate in a wide range of activities designed to enhance your skills and network.",
  };

  type GridItemV2 = {
    id: number;
    title: string;
    description: string;
  };

  const gridItems: GridItemV2[] = [
    {
      id: 1,
      title: "Hackathons",
      description: "Participate in our thrilling hackathons where you can team up with fellow students to solve real-world problems. Showcase your coding skills, collaborate, and compete for exciting prizes. It's a fantastic opportunity to innovate and bring your ideas to life.",
    },
    {
      id: 2,
      title: "Info Sessions",
      description: "Stay informed with our info sessions. We regularly host sessions where industry experts share their insights on the latest trends in technology. Learn about new tools, frameworks, and best practices that are shaping the tech world.",
    },
    {
      id: 3,
      title: "Meetings",
      description: "Join our regular meetings to connect with peers and mentors. These gatherings are a great way to discuss ongoing projects, share ideas, and get feedback. Whether in person or online, our meetings are designed to foster collaboration and community.",
    },
    {
      id: 4,
      title: "Gamified Profiles",
      description: "Our platform includes gamified profiles to make learning and participation more engaging. Earn points and badges as you take part in activities, complete projects, and contribute to the community. It's a fun way to track your progress and stay motivated.",
    },
  ];

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

  const MaterialObj: MaterialObj = {
    gridItems: gridItems,
    headlineText: "Join us and Learn with ",
    heroHighlightedText: "Dragons Student Activities",
    descriptionText: "Join our tech-focused student community. Connect with peers, discuss latest trends, and build lasting friendships. Participate in a wide range of activities designed to enhance your skills and network.",
    sectionTitle: "What You Will Learn",
    sectionDescription: "Our curriculum is designed to help you learn the latest technologies and build projects that can help you get a job or grow your business.",
    ReadMoreText: "Read More",
    ApplyNowText: "Apply Now",
    image: OFFICE.src,
  };

  return (
    <div className="min-h-screen bg-[#030014] flex flex-col justify-center items-center w-full py-4">
      <Hero
        News={HeroObj.News}
        subHeadingText={HeroObj.subHeadingText}
        heroHighlightedText={HeroObj.heroHighlightedText}
        heroHeading={HeroObj.heroHeading}
        Disctiption={HeroObj.Disctiption}
      />
      <div className="my-20">
        <TrustedSection />
      </div>
      <div className="my-20">
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
      </div>
      <div className="my-20">
        <PartnerSlider />
      </div>
      <div className="w-full">
        <HackathonsComponent />
      </div>
    </div>

  );
};

export default DSA;
