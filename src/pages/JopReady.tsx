"use client";
import Hero from "@/components/JopReady/Hero";
import PrepareSection from "@/components/JopReady/PrepareSection";
import LearningMaterialComponent from "@/components/JopReady/LearningMaterialComponent";
import CTAMaterial from "@/components/JopReady/CTAMaterial/CTAMaterial";
import CallToActionComponent from "@/components/JopReady/CallToActionComponent";
import HandsOnProjectsComponent from "@/components/JopReady/HandsOnProjectsComponent";
import HackathonsComponent from "@/components/JopReady/HackathonsComponent";

const JopReady: React.FC = () => {
  return (
    <div className='relative w-full'>
      <Hero />
      <div className='bg-purple-950/20 w-full rounded-t-3xl'>
        <PrepareSection />
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
