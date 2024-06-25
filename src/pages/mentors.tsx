import Hero_2 from '@/components/Hero/Hero_2';
import HandsOnProjectsComponent from '@/components/Mentors/HandsOnProjectsComponent';
import CTAMaterial from '@/components/Mentors/CTAMaterial/CTAMaterial';
import React from 'react';
import LearningMaterialComponent from '@/components/JopReady/LearningMaterialComponent';
import OFFICE from "@/../public/images/JopReady/image.png";

// Define the type for our grid items
type GridItemV2 = {
    id: number; // Update this line
    title: string;
    description: string;
};

// Sample data for the grid items
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

export default function mentors() {
    const heroObj = {
        News: {
            id: 3,
            date: "2020-01-01",
            content: "Meet Our Expert Mentors Today!",
            link: "/blog/news",
        },
        hero_heading: 'Empower Your Journey with Guidance from ',
        sub_heading_text: '',
        hero_highlighted_text: 'Top Industry Experts',
        description: '',
    }

    const gridItems: GridItemV2[] = [
        {
            id: 1,
            title: "Personalized Guidance",
            description: "Whether you're watching a video, attending a session, or tackling tasks, our mentors are there to provide personalized feedback and support.",
        },
        {
            id: 2,
            title: "Global Perspective",
            description: "Our mentors hail from different countries, offering diverse insights and global perspectives.",
        },
        {
            id: 3,
            title: "Comprehensive Support",
            description: "From pre-webinar preparation to post-webinar practice sessions, our mentors are with you every step of the way.",
        },
        {
            id: 4,
            title: "Proven Success",
            description: "Many of our graduates have successfully transitioned into their desired careers, thanks to the exceptional guidance of our mentors.",
        },
    ];

    const MaterialObj: MaterialObj = {
        gridItems: gridItems,
        headlineText: "Why Our Mentors Stand Out",
        heroHighlightedText: "",
        descriptionText: "",
        sectionTitle: "Industry Expertise",
        sectionDescription: "Our mentors work at top tech companies and bring real-world experience to their teaching.",
        ReadMoreText: "Read More",
        ApplyNowText: "Apply Now",
        image: OFFICE.src,
    };

    return (
        <div className='flex flex-col gap-16'>
            <Hero_2 {...heroObj} />
            <CTAMaterial />
            <HandsOnProjectsComponent />
            <LearningMaterialComponent {...MaterialObj} />
        </div>
    )
}