"use client";
import React from "react";
import styles from "@/styles/pricing.module.css";
import Hero from "@/components/JopReady/Hero";
import WhyDragons from "@/components/SoftwareOutsourcingPage/WhyDragons";
import TargetedCompaniesSection from "@/components/SoftwareOutsourcingPage/TargetedCompaniesSection";
import TestmonialSection from "@/components/TestmonialSection/TestmonialSection";
import CallToAction from "@/components/SoftwareOutsourcingPage/CallToActionSection";

const HeroObj = {
  News: {
    id: 1,
    date: "2020-01-01",
    content: "New Season just landed💯",
    link: "/blog/news",
  },
  heroHeading: "Boost Your Business with ",
  subHeadingText: "Expert Software Outsourcing at ",
  heroHighlightedText: "Dragons Bootcamp",
  Disctiption:
    "Join forces with us to leverage top talent, innovative technology, and exceptional support. Let's drive success and transform your business together.",
};

const SoftwareOutsourcingPage: React.FC = () => {
  return (
    <div
      className={`flex flex-col gap-[90px] w-full items-center ${styles.fancyOverlay}`}>
      <Hero
        News={HeroObj.News}
        subHeadingText={HeroObj.subHeadingText}
        heroHighlightedText={HeroObj.heroHighlightedText}
        heroHeading={HeroObj.heroHeading}
        Disctiption={HeroObj.Disctiption}
      />
      <WhyDragons />
      <div className=' w-full relative flex justify-center items-center'>
        <TestmonialSection />
      </div>

      <TargetedCompaniesSection />
      <CallToAction />
    </div>
  );
};

export default SoftwareOutsourcingPage;
