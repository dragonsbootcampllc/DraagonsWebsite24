
import Hero_2 from "@/components/Hero/Hero_2";
import BackEndCards from "@/components/BackEnd/Cards";
import LearningMaterialComponent from "@/components/JopReady/LearningMaterialComponent";
import OFFICE from "@/../public/images/JopReady/image.png";
import CallToActionComponent from "@/components/JopReady/CallToActionComponent";

const heroObj = {
    News: {
        id: 2,
        date: "2020-01-01",
        content: "New Season just landed💯",
        link: "/blog/news",
    },
    hero_heading: "Master Frontend Development and ",
    sub_heading_text: "Transform Your Skills with ",
    hero_highlighted_text: "Our Bootcamp",
    description: "Begin your journey into frontend development with our detailed bootcamp, structured to cover essential and advanced topics.",
};

const DataObj = {
        DataObj: [
        {
            "title": "Week 1-2: Introduction to React and State Management",
            "description": "Introduction to React, setup, JSX, understanding and creating components, using props, managing state, lifecycle methods, useEffect hook, event handling, and conditional rendering.",
            "link": "#"
        },
        {
            "title": "Week 3: Navigation and Forms",
            "description": "Setting up React Router for navigation, handling forms, and form validation.",
            "link": "#"
        },
        {
            "title": "Week 4: TypeScript with React",
            "description": "Introduction to TypeScript, setting it up in React, advanced TypeScript techniques, generics, and utility types.",
            "link": "#"
        },
        {
            "title": "Week 5: Styling with Tailwind CSS",
            "description": "Setting up and using Tailwind CSS for styling, advanced Tailwind techniques for reusable components.",
            "link": "#"
        },
        {
            "title": "Week 6: State Management",
            "description": "Using Context API for global state management, setting up and using Redux for state management.",
            "link": "#"
        },
        {
            "title": "Week 7: Advanced Techniques and Web Capabilities",
            "description": "Middleware, Redux Thunk, advanced Redux techniques, higher-order components, render props, and custom hooks.",
            "link": "#"
        },
        {
            "title": "Week 8: Web Capabilities and Emerging Technologies",
            "description": "Working with the Browser Object Model, Web APIs, exploring WebAssembly, PWAs, WebRTC, and WebSockets.",
            "link": "#"
        },
        {
            "title": "Week 9: Performance and Gen AI Integration",
            "description": "Optimizing React app performance, code splitting, lazy loading, integrating Generative AI models with React.",
            "link": "#"
        },
        {
            "title": "Week 10: Capstone Project",
            "description": "Initializing project, backend setup, database design, developing frontend, integrating with backend APIs, deploying the project.",
            "link": "#"
        }
    ],

        "headText": {
        "heroHighlightedText": "Master Frontend ",
        "headlineText": "Development with",
        "subheadlineText": " Our Outstanding Learning Pathway",
        "descriptionText": "Unlock frontend mastery with a comprehensive bootcamp. Hands-on projects, optimization, and real-world integration."
    }

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
        "id": 1,
        "title": "Welcome Session",
        "description": "Get introduced to the bootcamp, understand objectives, and set expectations."
    },
    {
        "id": 2,
        "title": "Setup Development Environment",
        "description": "Assistance with installing Node.js, npm/yarn, and setting up the development environment."
    },
    {
        "id": 3,
        "title": "Icebreaker Activities",
        "description": "Connect with peers and form study groups."
    },
    {
        "id": 4,
        "title": "Accounts Setup and Access Privileges",
        "description": "Smooth onboarding to our systems."
    },
    {
        "id": 5,
        "title": "Additional Activities",
        "description": "Explore extracurricular activities and familiarize yourself with the HRMS of our dragons."
    }


];

const MaterialObj: MaterialObj = {
    gridItems: gridItems,
    headlineText: " Master FrontEnd Development with Our",
    heroHighlightedText: " Comprehensive Bootcamp!",
    descriptionText:
        "Dive into a transformative bootcamp covering essential skills and practical onboarding activities.",
    sectionTitle: "What You Will Learn",
    sectionDescription:
        "Embark on a journey into frontend development, covering modern technologies like React, TypeScript, Tailwind CSS, and more.",
    ApplyNowText: "Apply Now",
    ReadMoreText: "Read More",
    image: OFFICE.src,
};

function FrontEnd() {
    return (
        <div className="flex flex-col gap-[90px] py-[60px] h-full w-full relative">
            <Hero_2 {...heroObj} />
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

export default FrontEnd;