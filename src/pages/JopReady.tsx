"use client";
import Hero from '@/components/JopReady/Hero'
import PrepareSection from '@/components/JopReady/PrepareSection'
import LearningMaterialComponent from '@/components/JopReady/LearningMaterialComponent'
import InternshipsSection from '@/components/JopReady/InternshipSection'
import CallToActionComponent from '@/components/JopReady/CallToActionComponent'
import HandsOnProjectsComponent from '@/components/JopReady/HandsOnProjectsComponent'
import HackathonsComponent from '@/components/JopReady/HackathonsComponent'




const JopReady: React.FC = () => {
    return (
        <div className='relative w-full'>
            <Hero />
            <PrepareSection />
            <LearningMaterialComponent />
            <InternshipsSection />
            <CallToActionComponent />
            <HandsOnProjectsComponent />
            <HackathonsComponent />
        </div>
    )
}

export default JopReady;