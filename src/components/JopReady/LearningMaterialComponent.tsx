"use client";
import Link from "next/link";

// Define the type for our grid items
type GridItem = {
    title: string;
    description: string;
};

// Sample data for the grid items
const gridItems: GridItem[] = [
    { title: 'Expert-Authored Content', description: 'Learn from the best with textbooks and resources written by industry leaders.' },
    { title: 'Always Up-to-Date', description: 'Our curriculum is reshaped regularly to include the latest trends, tools, and technologies.' },
    { title: 'Hands-On Learning', description: 'Engage in practical coding exercises, real-world projects, and interactive workshops.' },
    { title: 'Integrated Learning Pathways', description: 'Benefit from our Code Program Plus and Parallel Programs, providing a comprehensive and holistic learning experience.' },
];

// Sample data for the headline, description, and button text
const headlineText: string = 'Stay Ahead with Cutting-Edge Learning Material';
const descriptionText: string = 'Our Bootcamp offers expert-authored, continuously updated materials, ensuring you learn the latest trends, tools, and technologies for real-world application.';
const sectionTitle: string = 'Learn from Industry Leaders';
const sectionDescription: string = 'With our specially crafted curriculum, offering deep insights and authoritative knowledge for a world-class education.';
const ReadMoreText: string = 'Read More';
const ApplyNowText: string = 'Apply now';

const LearningMaterialComponent: React.FC = () => {
    return (
        <div className="py-6">
            <div className="container mx-auto flex flex-col gap-9">
                <h2 className="text-4xl md:text-6xl text-center font-semibold">{headlineText}</h2>
                <p className="text-xl text-center mt-4 mb-8 text-white/70">{descriptionText}</p>
                <div className="cont flex gap-4">
                    <div className="grid grid-cols-1 gap-4">
                        {gridItems.map((item, index) => (
                            <div key={index} className="text-lg p-6 rounded-xl flex flex-col gap-2 justify-center items-center text-center bg-[#08091b]">
                                <h3 className="text-2xl font-semibold">{item.title}</h3>
                                <p className="text-white/70">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center bg-[#08091b] p-6 rounded-xl">
                        <h3 className="text-3xl font-semibold">{sectionTitle}</h3>
                        <p className="text-lg mt-4 mb-8 text-white/70">{sectionDescription}</p>
                        <button className="bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                            {ReadMoreText}
                        </button>
                        <div className="image">
                            <img src="/public/images/JopReady/image.png" alt="office" />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link
                        href="/Pricing"
                        passHref>
                        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                            {ApplyNowText}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LearningMaterialComponent;
