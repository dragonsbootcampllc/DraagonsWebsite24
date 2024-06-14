"use client";
import Hero from '@/components/JopReady/Hero'
import PrepareSection from '@/components/JopReady/PrepareSection'
import LearningMaterialComponent from '@/components/JopReady/LearningMaterialComponent'
import InternshipsComponent from '@/components/JopReady/InternshipSection'



const JopReady: React.FC = () => {
    return (
        <div className='relative w-full'>
            <Hero />
            <PrepareSection />
            <LearningMaterialComponent />
            <InternshipsComponent />
        </div>
    )
}

export default JopReady;