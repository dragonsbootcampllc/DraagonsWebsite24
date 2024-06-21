import React from 'react';
import Hero from "@/components/JopReady/Hero";
import PrepareLeader from '@/components/ThoughtLeader/PrepareLeader';
import { SkillEnhancement } from '@/components/ThoughtLeader/SkillEnhancement';
import {ManagingandTooling} from '@/components/ThoughtLeader/ManagingandTooling';
const HeroObj = {
    News: {
      id: 1,
      date: "2020-01-01",
      content: "New Season just landed💯",
      link: "/blog/news",
    },
    subHeadingText: " With Dragons Bootcamp in ",
    heroHighlightedText: "Only 6 Month",
    heroHeading: "Become a Leader ",
    Disctiption: "Join Dragons Bootcamp and become a Leader in just 6 months. Gain essential skills and hands-on experience for a successful career",
  };
const content=[
  {
    title: "Project Management Tools",
    Details: "Visualize and manage tasks using Kanban or Scrum boards with task boards. Plan and track project timelines with Gantt Charts. Collaborate in shared documents and workspaces."
  },
  {
    title: "Feedback and Evaluation Systems",
    Details: "Collect feedback from peers, subordinates, and supervisors with 360-Degree Feedback. Use regular self-evaluation forms to reflect on personal growth. Engage in periodic performance reviews with actionable insights and areas for improvement."
  },
  {
    title: "Knowledge Base",
    Details: "Access a library of articles, whitepapers, and case studies. Learn from step-by-step video tutorials on various topics. Get support through frequently asked questions and community-driven forums."
  },
  {
    title: "Goal Setting and Tracking",
    Details: "Set and track Specific, Measurable, Achievable, Relevant, and Time-bound goals with the SMART Goals Interface. Visualize milestones and their progress with the Milestone Tracker. Record and celebrate completed goals and achievements with Achievement Logs."
  },
  {
    title: "Leadership Training Modules",
    Details: "Engage in virtual workshops on leadership topics through interactive workshops. Practice decision-making and leadership skills in simulated scenarios. Understand different leadership styles and their impacts through role-playing exercises."
  },
  {
    title: "Networking Hub",
    Details: "Discussion Forums: Engage in discussions with peers and experts.Event Calendar for Upcoming tech events, webinars, and conferences.Joining groups based on specific technologies or interests"
  }]
  
const ThoughtoutLeader = () => {
    return (
        <div>
        <Hero 
          News={HeroObj.News}
          subHeadingText={HeroObj.subHeadingText}
          heroHighlightedText={HeroObj.heroHighlightedText}
          heroHeading={HeroObj.heroHeading}
          Disctiption={HeroObj.Disctiption} 
        />
        <PrepareLeader />
        <SkillEnhancement />
        <div className="py-12 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {content.map((item, index) => (
                <ManagingandTooling key={index} title={item.title} Details={item.Details} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default ThoughtoutLeader;
