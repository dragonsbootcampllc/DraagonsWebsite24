"use client";
import React from "react";
import Hero from "@/components/JopReady/Hero";
import { LeaderStyles } from "@/components/ThoughtLeader/LeaderStyles";
import CardsMeteors from "@/components/Cards/CardsMeteors";
import OFFICE from "@/../public/images/JopReady/image.png";
import LearningMaterialComponent from "@/components/JopReady/LearningMaterialComponent";
import CanvaReveal from "@/components/Cards/CanvaReveal";
import GlareCards from "@/components/Cards/GlareCards";

const HeroObj = {
  News: {
    id: 1,
    date: "2020-01-01",
    content: "New Season just landed💯",
    link: "/blog/news",
  },
  subHeadingText: " With Dragons Bootcamp in ",
  heroHighlightedText: "Only 6 Month",
  heroHeading: "Become a Leader ",
  Disctiption:
    "At Dragons BootCamp, we empower students to not only become job-ready but also to emerge as thought leaders in the tech industry",
};
const LeaderStyleContent = [
  {
    quote:
      "Inspire and motivate your team by fostering innovation and a clear vision. Boost morale and performance through personalized support.",
    title: "Transformational Leadership",
  },
  {
    quote:
      "Focus on clear roles and expectations, using rewards and penalties to drive performance. Ensure efficiency and stability for short-term goals.",
    title: "Transactional Leadership",
  },
  {
    quote:
      "Adapt your style to your team's needs. Provide support and adjust from directive to supportive to promote growth and responsiveness.",
    title: "Situational Leadership",
  },
  {
    quote:
      "Prioritize your team's needs with empathy and empowerment. Build a supportive environment that fosters growth, collaboration, and trust.",
    title: "Servant Leadership",
  },
];

const communicationSkills = [
  {
    title: "Overcoming Stage Fright",
    points:
      "Causes , Effects of Stage Fright/n Preparation Techniques /n Mindfulness and Relaxation/n Confidence Building",
  },
  {
    title: "Effective Presentations",
    points:
      "Structuring Your Presentation/n Engaging Visuals Audience /nEngagement Body Language /n Handling Q&A Sessions",
  },
  {
    title: "Technical Blogs and Articles",
    points:
      "Identifying Your Audience Clear/n Writing Structuring Content/n Engaging Storytelling SEO/n Best Practices Regular Publishing",
  },
];
const networking = [
  {
    id: 1,
    title: "Networking Best Practices",
    description:
      "Build meaningful relationships by connecting with professionals online and at events. Craft a compelling elevator pitch and follow up thoughtfully to strengthen connections. Focus on mutual benefits and adhere to professional etiquette.",
  },
  {
    id: 2,
    title: "LinkedIn Optimization",
    description:
      "Enhance your LinkedIn profile. Connect with industry leaders, seek endorsements, and engage in relevant groups to expand your network.",
  },
  {
    id: 3,
    title: "Conferences and Meetups",
    description:
      "Network at industry events by identifying relevant opportunities, preparing effectively, and engaging with attendees. Follow up with new connections to exchange insights",
  },
];
const MaterialObj = {
  gridItems: networking,
  headlineText: " Expand Your network ",
  heroHighlightedText: "",
  descriptionText:
    "Dragons BootCamp empowers you to excel in networking by providing tailored guidance and practical skills that amplify your professional connections",
  sectionTitle: "What You Will get",
  sectionDescription:
    "Our Bootcamp tailored to provide you with the skills and confidence to network effectively, building relationships that propel your career forward in the tech industry and beyond",
  ReadMoreText: "Read More",
  ApplyNowText: "Apply Now",
  image: OFFICE.src,
};

const ThoughtLeader = () => {
  return (
    <div>
      <Hero
        News={HeroObj.News}
        subHeadingText={HeroObj.subHeadingText}
        heroHighlightedText={HeroObj.heroHighlightedText}
        heroHeading={HeroObj.heroHeading}
        Disctiption={HeroObj.Disctiption}
      />
      <LeaderStyles content={LeaderStyleContent} />
      <div className='mt-10 flex flex-col justify-center items-center'>
        <div className='px-10'>
          <GlareCards />
        </div>
      </div>
      <div className='mt-10 flex flex-col justify-center items-center'>
        <div className='mt-10 flex flex-col justify-center items-center'>
          <div className='my-10 max-md:mt-20 flex flex-col justify-center items-center text-center'>
            <h1 className='lg:text-6xl text-3xl font-bold mb-6'>
              Communicate with Impact
              <h2 className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
                Develope Essential Communication Skills
              </h2>
            </h1>
          </div>
          <p className='text-xl select-text  text-center mt-4 mb-8 text-white/70'>
            At Dragons BootCamp, we believe effective communication is key to
            leadership and success in tech.
            <br /> Our program helps you master public speaking, clear writing,
            and storytelling to convey ideas and engage audiences confidently
          </p>
        </div>
      </div>
      <div className=' mt-4 p-3 flex flex-row justify-center items-center'>
        {communicationSkills.map((skill, index) => (
          <CardsMeteors key={index} title={skill.title} points={skill.points} />
        ))}
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
      <CanvaReveal
        heroHighlightedText='In Dragons BootCamp, we empower you to excel in content creation and personal branding, equipping you with the skills to thrive in the digital landscape and establish a strong online presence.'
        ctaApplyText='Apply Now'
        ctaBookCallText='Book 1:1 Call'
        ctaHeadline='Empower Your Presence'
        C1='Build Trust and Strong reputation'
        C2='Create Compelling Content'
        C3='Personal Branding'
      />
    </div>
  );
};

export default ThoughtLeader;
