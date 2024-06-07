"use client";

interface Person {
    name: string;
    role: string;
    description: string;
    url: string;
}

const hiredPeople: Person[] = [
    { name: "Alice", role: "Software Engineer", description: "Hired at Google", url: "/images/JopReady/image1.png" },
    { name: "Bob", role: "Frontend Developer", description: "Hired at Facebook", url: "/images/JopReady/image2.png" },
    { name: "Frank", role: "Frontend Developer", description: "Hired at Fawrey", url: "/images/JopReady/image3.png" },
    { name: "Dan", role: "Frontend Developer", description: "Hired at Microsoft", url: "/images/JopReady/image4.png" },
    { name: "Emma", role: "Frontend Developer", description: "Hired at Facebook", url: "/images/JopReady/image5.png" },
    { name: "Charlotte", role: "Frontend Developer", description: "Hired at Amazon", url: "/images/JopReady/image6.png" },
];

const headingText = "People Who";
const highlightedText = " Got Hired ";
const subHeadingText = " After Completing Our Programs";

const HiredPeople: React.FC = () => {
    return (

        <div className="container py-10 mx-auto flex flex-col justify-center items-center gap-5">
            <div className="head">
                <h2 className="text-4xl md:text-6xl font-semibold text-center max-w-[800px]">
                    People Who <span className="bg-gradient-to-r from-pink-600 to-blue-500 text-transparent bg-clip-text"> Got Hired </span> After Completing Our Programs
                </h2>
            </div>
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
        </div>
    );
}

export default HiredPeople;
