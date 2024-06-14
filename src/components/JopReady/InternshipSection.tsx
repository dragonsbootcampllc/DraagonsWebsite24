
"use client";
import Link from "next/link";
// Define the type for our success stories
type SuccessStory = {
    name: string;
    image: string;
    description: string;
};

interface Person {
    name: string;
    role: string;
    description: string;
    url: string;
}

const hiredPeople: Person[] = [
    { name: "Alice", role: "Software Engineer", description: "Hired at Google", url: "/images/JopReady/image1.png" },
    { name: "Bob", role: "Frontend Developer", description: "Hired at Facebook", url: "/images/JopReady/image2.png" },
    { name: "Charlotte", role: "Frontend Developer", description: "Hired at Amazon", url: "/images/JopReady/image6.png" },
];

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {hiredPeople.map((person, index) => (
                        <div key={index} className="group rounded-lg relative border-3 shadow-[0_0_0_0_#fff] hover:shadow-[0_0_.5rem_0rem_rgb(234,179,8)] border-[rgba(162,121,0,0.6)] overflow-hidden">
                            <div className="image rounded-lg w-full overflow-hidden">
                                <img
                                    src={person.url}
                                    alt="photo"
                                    className="w-full  transform group-hover:scale-110 filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                                />
                            </div>
                            <div className="info w-full p-3 absolute bottom-0 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-80 transition-all duration-500 bg-[#030014]">
                                <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                                <p className="text-gray-400">{person.role}</p>
                                <p className="text-gray-500">{person.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8 flex gap-4 justify-center">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                        {ctaApplyText}
                    </button>
                    <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300">
                        {ctaReadMoreText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InternshipSection;
