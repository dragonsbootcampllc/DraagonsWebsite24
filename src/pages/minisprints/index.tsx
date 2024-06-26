import MinisprintCard, { MinisprintCardProps } from '@/components/Cards/MinisprintCard';
import Hero_2 from '@/components/Hero/Hero_2';
import React from 'react';

export default function index() {
    const heroObj = {
        News: {
            id: 2,
            date: "2020-01-01",
            content: "New Season just landed💯",
            link: "/blog/news",
        },
        hero_heading: "Master Development with Our Bootcamp",
        sub_heading_text: " ",
        hero_highlighted_text: "Aspiring Developers",
        description: "Elevate your coding skills with our comprehensive bootcamp. Learn Python, Gen AI, PostgreSQL, and Django through hands-on projects.",
    };

    const minisprintData: MinisprintCardProps[] = [];
    // const minisprintData = [
    //     {
    //         price: "$99",
    //         title: "Beginner's Guide to Python",
    //         description: "Start your programming journey with Python, a versatile language used in various domains. This course covers basic to intermediate concepts.",
    //         imageUrl: "https://via.placeholder.com/150",
    //         duration: "4 weeks",
    //         startDate: "2024-07-01",
    //         exploreUrl: 'python-course'
    //     },
    //     {
    //         price: "$149",
    //         title: "Advanced JavaScript Techniques",
    //         description: "Dive deep into JavaScript and learn advanced techniques and patterns to write more efficient and maintainable code.",
    //         imageUrl: "https://via.placeholder.com/150",
    //         duration: "6 weeks",
    //         startDate: "2024-07-10",
    //         exploreUrl: 'advanced-javascript'
    //     },
    //     {
    //         price: "$129",
    //         title: "Web Development Bootcamp",
    //         description: "Become a full-stack web developer by mastering HTML, CSS, JavaScript, and backend technologies. Build real-world projects.",
    //         imageUrl: "https://via.placeholder.com/150",
    //         duration: "8 weeks",
    //         startDate: "2024-08-01",
    //         exploreUrl: 'web-development-bootcamp'
    //     },
    //     {
    //         price: "$199",
    //         title: "Data Science with Python",
    //         description: "Learn data analysis, visualization, and machine learning techniques using Python. Perfect for aspiring data scientists.",
    //         imageUrl: "https://via.placeholder.com/150",
    //         duration: "10 weeks",
    //         startDate: "2024-07-15",
    //         exploreUrl: 'data-science-python'
    //     },
    //     {
    //         price: "$89",
    //         title: "Introduction to SQL",
    //         description: "Master the basics of SQL and database management. Learn how to query databases and manipulate data efficiently.",
    //         imageUrl: "https://via.placeholder.com/150",
    //         duration: "3 weeks",
    //         startDate: "2024-07-20",
    //         exploreUrl: 'introduction-sql'
    //     },
    //     {
    //         price: "$179",
    //         title: "React.js for Beginners",
    //         description: "Build dynamic web applications using React.js. Understand components, hooks, and state management in React.",
    //         imageUrl: "https://via.placeholder.com/150",
    //         duration: "5 weeks",
    //         startDate: "2024-08-05",
    //         exploreUrl: 'reactjs-beginners'
    //     },
    //     {
    //         price: "$109",
    //         title: "Node.js and Express.js",
    //         description: "Learn to build backend services and APIs using Node.js and Express.js. Ideal for full-stack developers.",
    //         imageUrl: "https://via.placeholder.com/150",
    //         duration: "6 weeks",
    //         startDate: "2024-08-10",
    //         exploreUrl: 'nodejs-expressjs'
    //     },
    //     {
    //         price: "$139",
    //         title: "Introduction to Machine Learning",
    //         description: "Discover the fundamentals of machine learning and build your first models using Python libraries such as scikit-learn.",
    //         imageUrl: "https://via.placeholder.com/150",
    //         duration: "7 weeks",
    //         startDate: "2024-08-20",
    //         exploreUrl: 'introduction-machine-learning'
    //     },
    //     {
    //         price: "$159",
    //         title: "Building RESTful APIs",
    //         description: "Learn how to design and build RESTful APIs with best practices and security in mind. Use Node.js, Express, and MongoDB.",
    //         imageUrl: "https://via.placeholder.com/150",
    //         duration: "5 weeks",
    //         startDate: "2024-09-01",
    //         exploreUrl: 'building-restful-apis'
    //     },
    //     {
    //         price: "$119",
    //         title: "DevOps Fundamentals",
    //         description: "Understand the core concepts of DevOps, including continuous integration, continuous deployment, and automation tools.",
    //         imageUrl: "https://via.placeholder.com/150",
    //         duration: "8 weeks",
    //         startDate: "2024-09-10",
    //         exploreUrl: 'devops-fundamentals'
    //     }
    // ];

    return (
        <div className='flex flex-col justify-center items-center mx-auto max-w-[1600px] mb-12'>
            <Hero_2 {...heroObj} />

            <div className='flex justify-center items-center flex-wrap w-11/12 gap-12'>
                {minisprintData.length !== 0 ? 
                    minisprintData.map((minisprint, i) => <MinisprintCard key={i} {...minisprint} />)
                    :
                    <div className='flex flex-col items-center justify-center w-full h-[500px] text-center text-5xl font-semibold text-purple-400/50'>
                        No courses found
                    </div>
                }
            </div>
        </div>
    )
}
