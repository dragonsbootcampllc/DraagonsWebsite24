"use client";
import Hero from '@/components/JopReady/Hero'
import PrepareSection from '@/components/JopReady/PrepareSection'


const JopReady: React.FC = () => {
    return (
        <div className='relative w-full'>
            <Hero />
            <PrepareSection />
        </div>
    )
}

export default JopReady;