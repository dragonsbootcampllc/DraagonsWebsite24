"use client";
import Hero from '@/components/JopReady/Hero'
import PrepareSection from '@/components/JopReady/PrepareSection'
import LearningMaterialComponent from '@/components/JopReady/LearningMaterialComponent'
import InternshipsSection from '@/components/JopReady/InternshipSection'



const JopReady: React.FC = () => {
    return (
        <div className='relative w-full'>
            <Hero />
            <PrepareSection />
            <LearningMaterialComponent />
            <InternshipsSection />
        </div>
    )
}

export default JopReady;