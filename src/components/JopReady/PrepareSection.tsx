"use client";
import Link from "next/link";
type GridItem = {
    title: string;
    description: string;
};

const gridItems: GridItem[] = [
    { title: 'Hands-on Project', description: 'Gain practical experience by working on real projects.' },
    { title: 'Hackathons and challenges', description: 'Participate in hackathons and challenges to test your skills.' },
    { title: 'Internships and Apprenticeships', description: 'Get opportunities to work in internships and apprenticeships.' },
    { title: 'Resume and interview preparation', description: 'Receive guidance on resume building and interview techniques.' },
    { title: 'Real World Projects', description: 'Work on projects that simulate real-world scenarios.' },
    { title: 'Material', description: 'Access to high-quality learning materials and resources.' }
];
const headingText: string = 'How We Prepare You to be Job Ready';
const buttonText: string = 'Apply Now';

const JobReadyComponent: React.FC = () => {
    return (
        <div className="py-6 ">
            <div className="container mx-auto flex flex-col gap-9">
                <h2 className="text-4xl md:text-6xl text-center font-semibold">{headingText}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {gridItems.map((item, index) => (
                        <div key={index} className="p-4  shadow-md rounded-md">
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default JobReadyComponent;
