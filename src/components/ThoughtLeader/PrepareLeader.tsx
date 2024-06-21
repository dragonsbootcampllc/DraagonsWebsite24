import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Skill Enhancement",
    description:
      "Identify skill gaps through assessments and provide access to advanced courses, certifications, and workshops. Encourage hands-on practice through coding challenges and hackathons. Pair the member with a senior mentor to guide them through complex technical problems and best practices.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/ThoughtLeader/skills.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Skill Enhancement"
        />
      </div>
    ),
  },
  {
    title: "Leadership Development",
    description:
      "Offer training in communication, conflict resolution, and emotional intelligence. Conduct leadership workshops on team dynamics and project management. Use role-playing exercises for decision-making practice, and implement 360-degree feedback systems for leadership insights.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/ThoughtLeader/communication.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Leadership Development"
        />
      </div>
    ),
  },
  {
    title: "Practical Experience",
    description:
      "Small projects will be assigned and gradually increase responsibilities. Allow shadowing of current tech leads. Regularly review performance with constructive feedback and set improvement goals.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/ThoughtLeader/leading.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Practical Experience"
        />
      </div>
    ),
  },
  {
    title: "Ongoing Support and Development",
    description:
      "Schedule regular check-ins with a mentor to discuss progress and challenges. Create personalized development plans with clear milestones. Encourage participation in professional networks and industry events. Recognize and reward achievements to motivate continuous growth.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/ThoughtLeader/Schedule.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Ongoing Support and Development"
        />
      </div>
    ),
  },
];

const PrepareLeader = () => {
  return (
    <div className="p-4 lg:p-10">
      <StickyScroll content={content} />
    </div>
  );
};

export default PrepareLeader;
