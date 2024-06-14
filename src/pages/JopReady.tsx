"use client";
import Hero from '@/components/JopReady/Hero'
import PrepareSection from '@/components/JopReady/PrepareSection'
import LearningMaterialComponent from '@/components/JopReady/LearningMaterialComponent'


const JopReady: React.FC = () => {
    return (
        <div className='relative w-full'>
            <Hero />
            <PrepareSection />
            <LearningMaterialComponent/>
        </div>
    )
}

export default JopReady;