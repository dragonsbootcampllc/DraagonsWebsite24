
import Hero_2 from "@/components/Hero/Hero_2";
import BackEndCards from "@/components/BackEnd/Cards";
import LearningMaterialComponent from "@/components/JopReady/LearningMaterialComponent";
import CallToActionComponent from "@/components/JopReady/CallToActionComponent";
import React from "react";
import Link from "next/link";
import Button from "@/components/Micros/Button";
import ButtonLite from "@/components/Micros/ButtonLite";

import OFFICE from "@/../public/images/JopReady/image.png";



const heroObj = {
    News: {
        id: 2,
        date: "2020-01-01",
        content: "New Season just landed💯",
        link: "/blog/news",
    },
    hero_heading: "Master Data Analysis: ",
    sub_heading_text: "Your Path to Proficiency and ",
    hero_highlighted_text: "Beyond",
    description: "Master data analysis from Python basics to advanced techniques with our comprehensive solution. Dive into hands-on learning for actionable insights!",
};


const PreRequiremets: React.FC = () => {

    const CTA = {
        ctaApplyText: "Apply Now",
        ctaReadMoreText: "Read More",
    }
    const headText = {
        heroHighlightedText: "Foundational Skills ",
        headlineText: "for Data",
        subheadlineText: " Analysis Bootcamp",
        descriptionText: "Prepare for success with vital skills in Python, mathematics, statistics, problem-solving, computer literacy, and a proactive learning mindset for your data analysis bootcamp journey.",
    };

    const cardsData = [
        {
            title: "Basic Programming Knowledge",
            text: "Master Python essentials for data analysis. Gain hands-on experience with coding and debugging.",
        },
        {
            title: "Mathematical and Statistical Fundamentals",
            text: "Explore basic mathematics and statistics. Learn descriptive statistics and probability concepts.",
        },
        {
            title: "Analytical Mindset",
            text: "Develop problem-solving skills. Enhance attention to detail in data interpretation.",

        },
        {
            title: "Computer Literacy",
            text: "Navigate software and manage files efficiently. Familiarity with spreadsheets and basic operations.",

        },
        {
            title: "Willingness to Learn",
            text: "Foster curiosity and persistence in tackling challenges. Explore optional skills like databases and version control.",

        },
    ];

    return (
        <div className=" flex flex-col container mx-auto min-h-screen justify-center items-center gap-8 text-white">
            <div className='heading md:max-w-[1000px] text-center'>
                <h1
                    style={{ fontFamily: "interV" }}
                    className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto z-10 relative mb-3 text-gray-200 font-semibold'>
                    <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
                        {headText.heroHighlightedText}
                    </span>
                    {headText.headlineText}
                    {headText.subheadlineText}
                </h1>
                <p className='text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-white/70 mt-4 mb-8'>
                    {headText.descriptionText}
                </p>
            </div>

            <div className="container  max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-4 md:gap-5">
                {cardsData.map(({ title, text }, index) => (
                    <div

                        key={index}
                        className={` bg-purple-950 hover:scale-[1.03] cursor-pointer transition-all ${index <= 1 ? "col-span-2 lg:col-span-3" : "col-span-2"} overflow-hidden bg-purple-950 rounded-3xl h-[250px] text-left flex flex-col justify-between`}
                    >
                        <div className="p-5  flex flex-col gap-4 items-center justify-center text-center">
                            <h1 className="text-3xl">{title}</h1>
                            <p className="text-[20px] text-white/70">{text}</p>
                        </div>

                    </div>
                ))}
            </div>
            <div className='text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center'>
                <Link href='/Pricing' passHref>
                    <div className='h-12 w-48 md:h-16 md:w-64'>
                        <Button CTAtext={CTA.ctaApplyText} />
                    </div>
                </Link >
                <Link href='/InternProgramManagement' passHref>
                    <div className='h-12 w-48 md:h-16 md:w-64'>
                        <ButtonLite CTAtext={CTA.ctaReadMoreText} />
                    </div>
                </Link>
            </div>
        </div>
    );
}


const DataObj = {
    DataObj: [
        {
            title: "Month 1: Introduction to Python for Data Analysis",
            description: "Master Python fundamentals and data handling. Learn to use Jupyter Notebooks for interactive coding.",
            link: "#",
        },
        {
            title: "Month 2: Statistics and Probability",
            description: "Dive into descriptive and inferential statistics. Explore probability concepts essential for analysis.",
            link: "#",
        },
        {
            title: "Month 3: Data Analysis with Pandas",
            description: "Introduce Pandas for data manipulation. Learn advanced techniques in data cleaning and wrangling.",
            link: "#",
        },
        {
            title: "Months 4-6: Deepening Your Data Analysis Skills",
            description: "Focus on PostgreSQL for database management. Master advanced data visualization techniques.",
            link: "#",
        },
        {
            title: "Practical Applications and Projects",
            description: "Apply your skills in real-world scenarios to solve complex problems. Use databases, visualization tools, and statistical analysis.",
            link: "#",
        },
        {
            title: "Capstone Project",
            description: "Apply all learned skills to tackle a real-world data problem. Use databases, visualization tools, and statistical analysis.",
            link: "#",
        },
        {
            title: " Responsible AI and Beyond",
            description: "Understand the ethical use of AI in data analysis and its implications. Address biases in algorithms and data.",
            link: "#",
        },
    ],

    headText: {
        heroHighlightedText: "Explore our Materials ",
        headlineText: "designed to empower you",
        subheadlineText: " in data analysis.",
        descriptionText: "From Python fundamentals to advanced techniques, prepare for real-world data challenges.",
    },
}
type MaterialObj = {
    gridItems: GridItemV2[];
    headlineText: string;
    heroHighlightedText: string;
    descriptionText: string;
    sectionTitle: string;
    sectionDescription: string;
    ReadMoreText: string;
    ApplyNowText: string;
    image: string;
};


type GridItemV2 = {
    id: number; // Update this line
    title: string;
    description: string;
};
const gridItems: GridItemV2[] = [

    {
        id: 1,
        title: "Solidify Your Python Skills",
        description: "Master Python syntax, functions, and libraries. Practice through small projects and exercises.",
    },
    {
        id: 2,
        title: "Refresh Your Statistical Knowledge",
        description: "Revisit fundamental statistical concepts. Prepare for real-world data manipulation tasks.",
    },
    {
        id: 3,
        title: "Explore Data Analysis Concepts",
        description: "Gain insights into data science principles. Enhance Python proficiency for practical applications.",
    },
    {
        id: 4,
        title: "Put Your Skills to the Test",
        description: "Engage in hands-on projects and exercises. Build confidence in applying Python for data analysis.",
    },


];

const MaterialObj: MaterialObj = {
    gridItems: gridItems,
    headlineText: " Master Data Analysis with Our",
    heroHighlightedText: " Comprehensive Bootcamp!",
    descriptionText:
        "Dive into a transformative bootcamp covering essential skills and practical onboarding activities.",
    sectionTitle: "Prepare for Data Analysis Bootcamp",
    sectionDescription:
        "Master Python and statistics fundamentals. Enhance skills with practical exercises to excel in your data journey.",
    ApplyNowText: "Apply Now",
    ReadMoreText: "Read More",
    image: OFFICE.src,
};

function DataAnalysis() {
    return (
        <div className=" flex flex-col gap-[90px] py-[60px] h-full w-full relative">
            <Hero_2 {...heroObj} />
            <PreRequiremets />
            <LearningMaterialComponent
                gridItems={MaterialObj.gridItems}
                headlineText={MaterialObj.headlineText}
                heroHighlightedText={MaterialObj.heroHighlightedText}
                descriptionText={MaterialObj.descriptionText}
                sectionTitle={MaterialObj.sectionTitle}
                sectionDescription={MaterialObj.sectionDescription}
                ApplyNowText={MaterialObj.ApplyNowText}
                ReadMoreText={MaterialObj.ReadMoreText}
                image={MaterialObj.image}
            />
            <BackEndCards {...DataObj} />
            <CallToActionComponent />

        </div>
    );
}

export default DataAnalysis;