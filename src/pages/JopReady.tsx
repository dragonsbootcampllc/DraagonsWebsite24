"use client";
import Hero from '../components/JopReady/Hero';

import HiredPeople from '../components/JopReady/HiredPeople';
import InternshipPeople from '../components/JopReady/InternshipPeople';
import ClientProjectsPeople from '../components/JopReady/ClientProjectsPeople';
import PreparationSection from '../components/JopReady/PreparationSection';

const JopReady: React.FC = () => {

    return (
        <div>
            <Hero />
            <div className="my-10">
                <HiredPeople />
            </div>
            <div className="my-10">
                <InternshipPeople />
            </div>
            <div className="my-10">
                <ClientProjectsPeople />
            </div>
            <div className="my-10">
                <PreparationSection />
            </div>
        </div>
    );
};

export default JopReady;
