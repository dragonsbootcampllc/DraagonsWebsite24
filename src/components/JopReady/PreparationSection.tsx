"use client";
import ResumeLogo from "./ResumeLogo";
import InternationalLogo from "./InternationalLogo";
import ManSearchLogo from './ManSearchLogo';
import WorkingHomeLogo from './WorkingHomeLogo';
import WorldWideLogo from './WorldWideLogo';
const headingText = "How Do We Prepare You to be";
const highlightedText = "Job-Ready?";
interface Person {
    logo: JSX.Element;
    description: string;
}
const preparationSteps: Person[] = [
    {description:"Hands-on projects with real clients", logo:<WorkingHomeLogo /> },
    {description:"Internship opportunities with top companies",logo:<WorldWideLogo /> },
    {description:"Career guidance and mentorship",  logo:<ManSearchLogo /> },
    {description:"Resume and interview preparation", logo:<ResumeLogo /> },
    {description:"Continuous learning and development", logo:<InternationalLogo/>},
];

const PreparationSection: React.FC = () => {
    return (
        <div className="container py-10 mx-auto flex flex-col justify-center items-center gap-7">
            <div className="head">
                <h2 className="text-4xl md:text-6xl font-semibold text-center max-w-[800px]">
                    {headingText} <span className="bg-gradient-to-r from-pink-600 to-blue-500 text-transparent bg-clip-text">{highlightedText}</span>
                </h2>
            </div>
            <div className={`grid grid-col-1 md:grid-cols-6 gap-5`}>
                {preparationSteps.map((step, index) => (
                    <div key={index} className={`text-lg mt-2 p-6 h-64 rounded-xl flex ${index<=2? `col-span-2`:`col-span-3`} flex-col gap-5 justify-center items-center text-center bg-[#08091b] `} >
                        <div className="icon ">
                            {step.logo}
                        </div>
                        <div className="text text-white/70">
                            {step.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PreparationSection;
