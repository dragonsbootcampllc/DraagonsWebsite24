"use client";
import Link from "next/link";

const headlineText: string = "Transform your Knowledge into Action";
const descriptionText: string = "Our hands-on project approach goes beyond theoretical learning, giving you the opportunity to apply your knowledge in practical scenarios and develop valuable skills that employers are seeking.";
const ctaApplyText: string = 'Apply Now';
const ctaReadMoreText: string = 'Read more';
const content = [
    {
        title: "Skill Development",
        description: "Engaging in hands-on projects allows you to hone essential technical skills, problem-solving abilities, and collaboration techniques. These are vital competencies sought after by employers in the tech sector.",
        image: "/images/JopReady/image.png"
    },
    {
        title: "Real-world Experience, and Get Paid",
        description: "For students interested in freelancing or contracting opportunities, we offer the option to work on contracting projects. These projects involve collaborating with real clients to deliver custom software solutions, websites, or applications. Students have the chance to earn income while gaining valuable professional experience.",
        image: "/images/JopReady/medical-office-manager.webp",

    }
];

const HandsOnProjectsComponent: React.FC = () => {
    return (
        <div className="py-6">
            <div className="container mx-auto flex flex-col justify-center items-center gap-9">
                <h2 className="text-4xl md:text-6xl text-center font-semibold md:max-w-[1000px]">{headlineText}</h2>
                <p className="text-xl text-center mb-8 md:max-w-[1000px] text-white/70">{descriptionText}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {content.map((item, index) => (
                        <div key={index} className="text-center bg-[#08091b] hover:scale-[1.03] cursor-pointer transition-all pt-6 rounded-xl overflow-hidden flex flex-col gap-4 justify-between items-center">
                            <div className="text">
                                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                                <p className="text-white/70">{item.description}</p>
                            </div>
                            <div className="image">
                                <img src={item.image} alt="image" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex gap-4 justify-center">
                    <Link
                        href="/Pricing"
                        passHref>
                        <button className='bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>{ctaApplyText}</button>
                    </Link>
                    <button className=" text-blue-600 font-semibold  py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
                        {ctaReadMoreText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HandsOnProjectsComponent;
