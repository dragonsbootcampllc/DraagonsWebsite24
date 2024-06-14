"use client";
import Link from "next/link";
import ResumeLogo from "./ResumeLogo";
import InternationalLogo from "./InternationalLogo";
import ManSearchLogo from './ManSearchLogo';
import WorkingHomeLogo from './WorkingHomeLogo';
import WorldWideLogo from './WorldWideLogo';
type GridItem = {
    title: string;
    description: string;
    logo: JSX.Element;
};

const gridItems: GridItem[] = [
    { title: 'Hands-on Project', description: 'Gain practical experience by working on real projects.', logo: <WorkingHomeLogo /> },
    { title: 'Hackathons and challenges', description: 'Participate in hackathons and challenges to test your skills.', logo: <InternationalLogo /> },
    { title: 'Internships and Apprenticeships', description: 'Get opportunities to work in internships and apprenticeships.', logo: <WorldWideLogo /> },
    { title: 'Resume and interview preparation', description: 'Receive guidance on resume building and interview techniques.', logo: <ResumeLogo /> },
    { title: 'Real World Projects', description: 'Work on projects that simulate real-world scenarios.', logo: <ManSearchLogo /> },
    { title: 'Material', description: 'Access to high-quality learning materials and resources.', logo: <InternationalLogo /> }
];
const headingText: string = 'How We Prepare You to be Job Ready';
const buttonText: string = 'Apply Now';

const JobReadyComponent: React.FC = () => {
    return (
            <div className="container mx-auto py-6 flex flex-col gap-9">
                <h2 className="text-4xl md:text-6xl text-center font-semibold">{headingText}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 gap-6 mb-8">
                    {gridItems.map((item, index) => (
                        <div
                            key={index}
                            className={`text-lg mt-2 p-6 h-64 rounded-xl flex 
                                        ${index <= 1 ? "sm:col-span-3" : index === 2 ? "sm:col-span-6" : "sm:col-span-2"} 
                                        flex-col gap-2 p-4 justify-center items-center text-center bg-[#08091b]`}>
                            <span>{item.logo}</span>
                            <h3 className="text-2xl font-semibold">{item.title}</h3>
                            <p className="text-white/70">{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                        {buttonText}
                    </button>
                </div>
            </div>
    );
}

export default JobReadyComponent;
