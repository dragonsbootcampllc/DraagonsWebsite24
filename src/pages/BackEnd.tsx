
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
    hero_heading: "Master the Backend with Comprehensive ",
    sub_heading_text: "Bootcamp for ",
    hero_highlighted_text: "Aspiring Developers",
    description: "Master backend development with our bootcamp. Learn Python, Gen AI, PostgreSQL, and Django through hands-on projects. Elevate your coding skills today!",
};

const BackEndObj = {
    BackEnd: [
        {
            title: "Introduction to Python Basics",
            description: "Learn Python basics: variables, data types, control structures, and basic scripting with hands-on exercises.",
            link: "#",
        },
        {
            title: "Introduction to Django Framework",
            description: "Understand Django's MVT architecture, ORM, and URL routing. Set up a simple Django project with basic pages and CRUD operations.",
            link: "#",
        },
        {
            title: "Weeks 1-2: Introduction to Python and Django",
            description: "Python Basics: Variables, data types, control structures, and basic scripting. Introduction to Django: Understanding MVT architecture, ORM, and URL routing. Hands-on Projects.",
            link: "#",
        },
        {
            title: "Weeks 3-4: Advanced Django Concepts and Generative AI Introduction",
            description: "Advanced Django Templates, Views, and Forms. Authentication, Authorization, and Introduction to Generative AI using TensorFlow/PyTorch.",
            link: "#",
        },
        {
            title: "Weeks 5-6: Advanced Generative AI and Django Integration",
            description: "Implementing GANs and VAEs in Django. Debugging, Optimization, and Project Development with Generative AI.",
            link: "#",
        },
        {
            title: "Weeks 7-8: PostgreSQL Database Interaction",
            description: "Introduction to PostgreSQL, Migration, and Advanced Querying. Data Modeling and Best Practices in Django Projects.",
            link: "#",
        },
        {
            title: "Weeks 9-12: Comprehensive Backend Development",
            description: "Django REST Framework, Performance Optimization, Scalability, and Advanced Concepts in Middleware and Database Management.",
            link: "#",
        },
        {
            title: "Weeks 13-14: Project Development",
            description: "Project Brainstorming, Basic Functionality, Advanced Features, and Documentation for Django-based applications.",
            link: "#",
        },
        {
            title: "Weeks 15-16: Project Completion and Presentation",
            description: "Finalizing Development, UI/UX Polishing, Presentation, and Feedback Sessions for Django projects.",
            link: "#",
        },
    ],
    headText: {
        heroHighlightedText: " Master Backend ",
        headlineText: "Development with",
        subheadlineText: " Our Outstanding Learning Pathway",
        descriptionText: "Unlock backend mastery with Python, Django, Generative AI, and PostgreSQL. Hands-on projects, optimization, and real-world integration.",
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
        id: 1,
        title: "Welcome Session",
        description: "Introduction to the bootcamp, objectives, and expectations.",
    },
    {
        id: 2,
        title: "Setup Development Environment",
        description: "Assistance in installing Python, Django, and necessary libraries.",
    },
    {
        id: 3,
        title: "Icebreaker Activities",
        description: "Get to know your peers and form study groups.",
    },
    {
        id: 4,
        title: "Accounts Setup and Access Privileges",
        description: "Smooth onboarding to our systems.",
    },
    {
        id: 5,
        title: "Additional Activities",
        description: "Explore extracurricular activities and the HRMS of our dragons.",
    },


];

const MaterialObj: MaterialObj = {
    gridItems: gridItems,
    headlineText: " Master Backend Development with Our",
    heroHighlightedText: " Comprehensive Bootcamp!",
    descriptionText:
        "Dive into a transformative bootcamp covering essential skills and practical onboarding activities.",
    sectionTitle: "What You Will Learn",
    sectionDescription:
        "Dive into the world of backend development with our comprehensive bootcamp covering Python, Generative AI, PostgreSQL, Django, and more",
    ApplyNowText: "Apply Now",
    ReadMoreText: "Read More",
    image: OFFICE.src,
};

function BackEndPage() {
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
            <BackEndCards {...BackEndObj} />
            <CallToActionComponent />

        </div>
    );
}

export default BackEndPage;