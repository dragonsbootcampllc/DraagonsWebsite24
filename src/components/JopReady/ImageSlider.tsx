import React, { useState, useEffect } from 'react';

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

const InternshipMember: Person[] = [
    { name: "Alice", role: "Software Engineer", description: "Hired at Google", url: "/images/JopReady/image1.png" },
    { name: "Bob", role: "Frontend Developer", description: "Hired at Facebook", url: "/images/JopReady/image2.png" },
    { name: "Charlotte", role: "Frontend Developer", description: "Hired at Amazon", url: "/images/JopReady/image6.png" },

];

const ImageSliderComponent: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const storyCount = InternshipMember.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (currentIndex === storyCount + 1) {
            setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(1);
            }, 700); // Duration of the transition
        } else if (currentIndex === 0) {
            setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(storyCount);
            }, 700); // Duration of the transition
        } else {
            setTransitionEnabled(true);
        }
    }, [currentIndex, storyCount]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <div className="relative overflow-hidden w-full">
            <div
                className={`flex transition-transform duration-700 ${transitionEnabled ? 'transition' : ''}`}
                style={{ transform: `translateX(-${currentIndex * 33.33}%)` }} // 33.33% for 3 slides in view
                onTransitionEnd={() => {
                    if (currentIndex === storyCount + 1) {
                        setTransitionEnabled(false);
                        setCurrentIndex(1);
                    }
                    if (currentIndex === 0) {
                        setTransitionEnabled(false);
                        setCurrentIndex(storyCount);
                    }
                }}
            >
                <div className="flex-shrink-0 w-1/3 p-4">
                    <div className="flex flex-col items-center p-4 rounded-md shadow-md">
                        <img src={InternshipMember[storyCount - 1].url} alt={InternshipMember[storyCount - 1].name} className="rounded-md" />
                        <h4 className="text-xl pt-4 font-semibold">{InternshipMember[storyCount - 1].name}</h4>
                        <p className="text-gray-700">{InternshipMember[storyCount - 1].description}</p>
                    </div>
                </div>
                {InternshipMember.map((story, index) => (
                    <div key={index} className="flex-shrink-0 w-1/3 p-4">
                        <div className="flex flex-col items-center p-4 rounded-md shadow-md">
                            <img src={story.url} alt={story.name} className="rounded-md" />
                            <h4 className="text-xl pt-4 font-semibold">{story.name}</h4>
                            <p className="text-gray-700">{story.description}</p>
                        </div>
                    </div>
                ))}
                <div className="flex-shrink-0 w-1/3 p-4">
                    <div className="flex flex-col items-center p-4 rounded-md shadow-md">
                        <img src={InternshipMember[0].url} alt={InternshipMember[0].name} className="rounded-md" />
                        <h4 className="text-xl pt-4 font-semibold">{InternshipMember[0].name}</h4>
                        <p className="text-gray-700">{InternshipMember[0].description}</p>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-between">
                <button
                    className="bg-white text-blue-600 font-bold py-2 px-4 rounded-l hover:bg-gray-200 transition duration-300"
                    onClick={handlePrev}
                >
                    Prev
                </button>
                <button
                    className="bg-white text-blue-600 font-bold py-2 px-4 rounded-r hover:bg-gray-200 transition duration-300"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ImageSliderComponent;
