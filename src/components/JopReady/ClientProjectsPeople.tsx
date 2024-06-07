"use client";
import React from 'react';

interface Person {
    name: string;
    role: string;
    description: string;
    url: string;
}

const clientProjectsPeople: Person[] = [
    { name: 'Eve', role: 'Full Stack Developer', description: 'Worked on a project for a real client', url: '/images/JopReady/image1.png' },
    { name: 'Frank', role: 'Mobile Developer', description: 'Developed an app for a local business', url: '/images/JopReady/image2.png' },
    { name: 'Frank', role: 'Mobile Developer', description: 'Developed an app for a local business', url: '/images/JopReady/image3.png' },
    { name: 'Frank', role: 'Mobile Developer', description: 'Developed an app for a local business', url: '/images/JopReady/image4.png' },
    { name: 'Emma ', role: 'Mobile Developer', description: 'Developed an app for a local business', url: '/images/JopReady/image5.png' },
    { name: 'Charlotte ', role: 'Mobile Developer', description: 'Developed an app for a local business', url: '/images/JopReady/image6.png' },
];

const headingText = "People Who Worked on";
const highlightedText = "Real Client";
const subHeadingText = "Projects";

const ClientProjectsPeople: React.FC = () => {
    return (
        <div className="container py-10 mx-auto flex flex-col justify-center items-center gap-5">
            <div className="head">
                <h2 className="text-4xl md:text-6xl font-semibold text-center max-w-[800px]">
                    {headingText} <span className="bg-gradient-to-r from-pink-600 to-blue-500 text-transparent bg-clip-text">{highlightedText}</span> {subHeadingText}
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {clientProjectsPeople.map((person, index) => (
                    <div key={index} className="group rounded-lg relative overflow-hidden">
                        <div className="image rounded-lg w-full overflow-hidden">
                            <img
                                src={person.url}
                                alt={person.name}
                                className="w-full transform group-hover:scale-110 filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                            />
                        </div>
                        <div className="info w-full p-3 absolute bottom-0 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-80 transition-all duration-500 bg-[#030014]">
                            <h3 className="text-xl font-semibold">{person.name}</h3>
                            <p className="text-gray-700">{person.role}</p>
                            <p className="text-gray-500">{person.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClientProjectsPeople;
