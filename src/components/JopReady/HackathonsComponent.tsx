"use client";
import Link from "next/link";
const headlineText: string = "Join the Hackathon Revolution";
const descriptionText: string = "Through our exciting hackathons and challenges, you can showcase your skills, connect with industry professionals, and win cash prizes while solving real-world problems.";

const hackathonProjects = [
    {
        title: "Real-time Traffic Management System",
        description: "Develop a solution to manage and optimize traffic flow in urban areas using real-time data."
    },
    {
        title: "AI-Based Health Diagnosis Tool",
        description: "Create an AI tool that assists doctors in diagnosing diseases based on patient data and historical records."
    },
    {
        title: "E-commerce Recommendation Engine",
        description: "Build a recommendation engine for an e-commerce platform to enhance user experience and boost sales."
    }
];

const ctaApplyText: string = "Apply now";

const HackathonsComponent: React.FC = () => {
    return (
        <div className="py-6">
            <div className="container mx-auto flex flex-col justify-center items-center gap-9">
                <div className="text md:max-w-[1000px]">
                <h2 className="text-4xl md:text-6xl text-center font-semibold">{headlineText}</h2>
                <p className="text-xl text-center mt-4 mb-8 text-white/70">{descriptionText}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {hackathonProjects.map((project, index) => (
                        <div key={index} className="flex flex-col hover:scale-[1.03] cursor-pointer transition-all bg-[#08091b] justify-center items-center p-6 rounded-lg ">
                            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                            <p className="text-white/70">{project.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Link
                        href="/Pricing"
                        passHref>
                        <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>{ctaApplyText}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HackathonsComponent;
