
"use client";
import Link from "next/link";
// Define the type for our success stories
type SuccessStory = {
    name: string;
    image: string;
    description: string;
};

// Sample data for the success stories
const successStories: SuccessStory[] = [
    { name: 'Jane Doe', image: '/images/jane.jpg', description: 'Jane leveraged her internship to land a full-time position at a leading tech company.' },
    { name: 'John Smith', image: '/images/john.jpg', description: 'John used his apprenticeship experience to start his own successful business.' },
    // Add more success stories here
];

// Sample data for the headline, description, and button text
const headlineText: string = 'Bridging the Gap Between Learning and Industry';
const descriptionText: string = 'We understand the importance of real-world experience in shaping successful tech professionals.';
const ctaApplyText: string = 'Apply Now';
const ctaReadMoreText: string = 'Read More';

const InternshipSection: React.FC = () => {
    return (
        <div className="py-6">
            <div className="container mx-auto flex flex-col gap-9">
                <h2 className="text-4xl md:text-6xl text-center font-semibold">{headlineText}</h2>
                <p className="text-xl text-center mt-4 mb-8">{descriptionText}</p>
                <div className="mb-8">
                    <h3 className="text-3xl text-center font-semibold">Success Stories</h3>
                    {/* Placeholder for Image Slider */}
                    <div className="flex gap-6 overflow-x-auto p-4">
                        {successStories.map((story, index) => (
                            <div key={index} className="min-w-[300px] bg-white shadow-md rounded-md p-4">
                                <img src={story.image} alt={story.name} className="h-40 w-full object-cover rounded-md mb-4" />
                                <h4 className="text-xl font-semibold">{story.name}</h4>
                                <p className="text-gray-700">{story.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center mt-8 flex gap-4 justify-center">
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                        {ctaApplyText}
                    </button>
                    <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-300">
                        {ctaReadMoreText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InternshipSection;
