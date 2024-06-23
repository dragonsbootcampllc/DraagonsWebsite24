"use client";
import Hero from "@/components/JopReady/Hero";
import PrepareSection from "@/components/JopReady/PrepareSection";
import LearningMaterialComponent from "@/components/JopReady/LearningMaterialComponent";
import CallToActionComponent from "@/components/JopReady/CallToActionComponent";
import HackathonsComponent from "@/components/JopReady/HackathonsComponent";

import ResumeLogo from "@/components/JopReady/WorldWideLogo";
import InternationalLogo from "@/components/JopReady/WorldWideLogo";
import ManSearchLogo from "@/components/JopReady/WorldWideLogo";
import WorkingHomeLogo from "@/components/JopReady/WorldWideLogo";
import WorldWideLogo from "@/components/JopReady/WorldWideLogo";
import OFFICE from "@/../public/images/JopReady/image.png";
import { Disc } from "lucide-react";

const HeroObj = {
  News: {
    id: 1,
    date: "2020-01-01",
    content: "New Season just landed💯",
    link: "/blog/news",
  },
  subHeadingText: "With Dragons Bootcamp in ",
  heroHighlightedText: "Only 6 Months",
  heroHeading: "Launch Your Tech Career ",
  Disctiption: "Join Dragons Bootcamp and become job-ready in just 6 months. Gain essential skills and hands-on experience to kickstart your career in tech.",
};

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
      title: "Supportive Community",
      description: "Join a community where every step forward is celebrated. Our vibrant and supportive network of fellow students is here to lift you up and help you grow, fostering an environment where learning is a shared, uplifting journey.",
      logo: <WorkingHomeLogo />,
    },
    {
      title: "Strong Industry Connections",
      description: "Forge invaluable connections with top companies and industry leaders, opening doors to a world of opportunities. Our robust network paves the way for your career advancement, ensuring you stand out from the crowd.",
      logo: <InternationalLogo />,
    },
    {
      title: "Level Up, Get Seen",
      description: "Track your progress seamlessly and showcase your achievements to our trusted partners, business owners, and recruiters. We ensure your talents are visible, making job hunting smoother and more efficient.",
      logo: <WorldWideLogo />,
    },
    {
      title: "Become a Thought Leader",
      description: "Cultivate your unique voice and refine your communication skills to share profound insights. Establish yourself as a thought leader, respected and recognized as an expert in your field.",
      logo: <ResumeLogo />,
    },
    {
      title: "Real-World Projects",
      description: "Work on projects that simulate real-world scenarios.",
      logo: <ManSearchLogo />,
    },
    {
      title: "Learning Materials",
      description: "Access to high-quality learning materials and resources.",
      logo: <InternationalLogo />,
    },
  ],
  headingText: "What we can offer in ",
  heroHighlightedText: "Dragons Bootcamp",
  CTATextBelow: "Offering a complete experience, beyond just technical skills.",
  buttonText: "Apply Now",
  subHeadingText: "Kickstart Your Career Journey",
  heroHeading: "Become Job Ready in 6 Months",
  Disctiption: "Our comprehensive program equips you with the skills and experience needed to excel in your career.",
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

const JopReady: React.FC = () => {
  return (
    <div className='relative w-full'>
      <div className="mb-24">
        <Hero
          News={HeroObj.News}
          subHeadingText={HeroObj.subHeadingText}
          heroHighlightedText={HeroObj.heroHighlightedText}
          heroHeading={HeroObj.heroHeading}
          Disctiption={HeroObj.Disctiption}
        />
      </div>
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
      <CallToActionComponent />
      <HackathonsComponent />
    </div>
  );
};

export default JopReady;
