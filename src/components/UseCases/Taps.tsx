import { useState } from "react";

const tabs = [
  {
    name: "Students",
    content:
      "If you are a computer science graduate or someone with a strong IT background, Dragons Tech Bootcamp can help you sharpen your skills and prepare for a successful career in software development. Our intensive program is designed to bridge the gap between academic knowledge and industry requirements, ensuring you're ready to tackle real-world challenges.",
    image: "https://placehold.co/400x200",
  },
  {
    name: "Career Shifters",
    content:
      "Looking to make a complete switch to the software development track from another field? Our Bootcamp is perfect for those wanting to transition into the tech industry. We provide comprehensive training and support to help you acquire the necessary skills and confidence to thrive in a new, exciting career.",
    image: "https://placehold.co/400x200",
  },
  {
    name: "Upskilling Developers",
    content:
      "Already a developer but looking to boost your skills? Our advanced courses are tailored to help you stay ahead in the rapidly evolving tech landscape. Learn the latest technologies, improve your coding efficiency, and enhance your problem-solving capabilities with our expert-led sessions.",
    image: "https://placehold.co/400x200",
  },
  {
    name: "Tech Entrepreneurs",
    content:
      "As a tech entrepreneur, understanding the intricacies of technology is crucial for your business success. Our Bootcamp provides you with a solid foundation in software development, enabling you to integrate tech solutions into your business strategy better and bridge the gap between tech and other fields you excel in.",
    image: "https://placehold.co/400x200",
  },
];

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="container mx-auto p-6 max-h-screen">
      <div className="bg-black shadow-md rounded-lg">
        <div className="flex justify-around border-b">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`p-4 w-full md:w-auto focus:outline-none ${selectedTab.name === tab.name ? "border-b-2 border-blue-500" : "text-gray-600"}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="p-6 flex flex-col md:flex-row gap-2">
          <div className="md:w-2/3">
            <p>{selectedTab.content}</p>
            </div>
            <div className="md:w-1/3">
            <img className="w-full h-auto" src={selectedTab.image} alt={selectedTab.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
