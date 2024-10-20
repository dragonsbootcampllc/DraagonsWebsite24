import { useState } from "react";
import { BiSolidVideos } from "react-icons/bi";
import { SiHyperskill } from "react-icons/si";
import { FaRegClock } from "react-icons/fa6";
import { CgMediaLive } from "react-icons/cg";

type Tab = "overview" | "Course Details";

interface OverViewProps {
  Instructor: string;
  tags?: string[]; // Optional prop
  Description?: string; // Optional prop
  LessonNum: number;
  Topics?: string[]; // Optional prop
}

const OverView: React.FC<OverViewProps> = ({
  Instructor,
  tags = [], // Default to an empty array
  Description = "", // Default to an empty string
  LessonNum,
  Topics = [], // Default to an empty array
}) => {
  // Define the active tab state
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  
  // Limit the number of tags to 6
  const limitedTags = Array.isArray(tags) ? tags.slice(0, Math.max(3, Math.min(tags.length, 6))) : [];
  const limitedDescription = Description.slice(0, 150);

  const renderContent = () => {
    if (activeTab === "overview") {
      return (
        <div>
          <p lang="en" dir="ltr" className="text-lg text-gray-400">
            Course By{" "}
            <span className="text-purple-500 hover:text-purple-600 cursor-pointer font-medium">
              {Instructor}
            </span>
          </p>
          <h2 lang="en" dir="ltr" className="mt-2 text-4xl max-md:text-3xl font-bold text-white">
            Developer Quest
          </h2>
          <div className="mt-4">
            {limitedTags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-lg text-gray-400">{limitedDescription}</p>
          </div>
          <div className="mt-4">
            <h3 lang="en" dir="ltr" className="text-2xl font-semibold">
              This course will have {LessonNum} Topics
            </h3>
            <ol>
              {Topics.map((topic, index) => (
                <li key={index} className="text-xl text-gray-400 mt-2">
                  • {topic}
                </li>
              ))}
            </ol>
          </div>
        </div>
      );
    } else if (activeTab === "Course Details") {
      return (
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <BiSolidVideos size={20} />
              <p className="text-lg font-semibold">Lecture Type</p>
            </div>
            <p className="text-lg text-gray-400">Pre-recorded</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <SiHyperskill size={20} />
              <p className="text-lg font-semibold">Skills Level</p>
            </div>
            <p className="text-lg text-gray-400">Beginner</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <FaRegClock size={20} />
              <p className="text-lg font-semibold">Duration</p>
            </div>
            <p className="text-lg text-gray-400">21 hours</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <CgMediaLive size={20} />
              <p className="text-lg font-semibold">Live Sessions</p>
            </div>
            <p className="text-lg text-gray-400">Daily</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="max-w-[20rem] h-[80%] bg-purple-800/20 rounded-3xl">
      {/* Tabs */}
      <div className="flex">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex-1 text-center py-4 text-lg font-semibold ${
            activeTab === "overview"
              ? "border-b-2 border-purple-500 text-purple-500"
              : "text-gray-400"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("Course Details")}
          className={`flex-1 text-center py-4 text-lg font-semibold ${
            activeTab === "Course Details"
              ? "border-b-2 border-purple-500 text-purple-500"
              : "text-gray-400"
          }`}
        >
          Course Details
        </button>
      </div>

      {/* Content */}
      <div className="mt-4 shadow-md rounded-lg w-full px-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default OverView;
