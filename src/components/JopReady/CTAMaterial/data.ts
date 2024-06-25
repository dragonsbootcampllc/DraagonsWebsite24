// data.ts

export type Person = {
    name: string;
    role: string;
    description: string;
    url: string;
  };
  
  export type GlareCardContent = {
    imageSrc: string;
    title?: string;
    description?: string;
    description_Highlighted?:string;
  };
  
  export type Content = {
    headlineText: string;
    heroHighlightedText: string;
    descriptionText: string;
    ctaApplyText: string;
    ctaReadMoreText: string;
    glareCards: GlareCardContent[];
  };
  
  export const InternshipMember: Person[] = [
    {
      name: "Alice",
      role: "Software Engineer",
      description: "Hired at Google",
      url: "/images/JopReady/image1.png",
    },
    {
      name: "Bob",
      role: "Frontend Developer",
      description: "Hired at Facebook",
      url: "/images/JopReady/image2.png",
    },
    {
      name: "Charlotte",
      role: "Frontend Developer",
      description: "Hired at Amazon",
      url: "/images/JopReady/image6.png",
    },
  ];
  
  export const content: Content = {
    headlineText: "Ready to Take the Next Step",
    heroHighlightedText: " with Internships",
    descriptionText: "Don't miss the chance to transform your career with our cutting-edge Bootcamp, like these successful graduates.",
    ctaApplyText: "Apply Now",
    ctaReadMoreText: "Read More",
    glareCards: [
      {
        imageSrc: "/images/talant/Faisel.jpg",
        title: "Faisel Ebrahim",
        description: "Dragons's Tech team Lead at ",
        description_Highlighted: "Neferdata",
      },
      {
        imageSrc: "/images/talant/MoALI.png",
        title: "Mohammed Ali",
        description: "Dragons's Tech team Lead at ",
        description_Highlighted: "LevelUp ESG",
      },
      {
        imageSrc: "/images/talant/AhmedSherif.jpeg",
        title: "Ahmed Sherif",
        description: "Dragons's Tech team Lead at ",
        description_Highlighted: "Actus Go",

      },
    ],
  };
  export const EssentialSkillscontent: Content = {
    headlineText: "At Dragons we empower you with ",
    heroHighlightedText: "essential Skills",
    descriptionText: "Your way for effective leading projects and cultivate high-performance teams.",
    ctaApplyText: "Apply Now",
    ctaReadMoreText: "Read More",
    glareCards: [
      {
        title: "Strategic Planning",
        description:
          "Chart your organization’s path with a clear vision and thorough analysis.",
        imageSrc: "/images/ThoughtLeader/Planning.png",
      },
      {
        title: "Team Dynamics",
        description:
          "Create a cohesive team by defining roles, fostering communication",
        imageSrc: "/images/ThoughtLeader/TeamD.png",
      },
      {
        title: "Decision Making",
        description:
          "Use data and critical thinking to make decisions. Solve problems systematically, involve the team, and manage risks for project success.",
        imageSrc: "/images/ThoughtLeader/dissionMaking.png",
      },
    ]
    
  };
  export const essentialSkills = [
    {
      title: "Strategic Planning",
      description:
      "Strategic planning charts your organization’s path to success. Start with a clear vision and mission statement. Set SMART goals and conduct a analysis to guide decisions. Action plans and KPIs ensure you stay on track.",
      imageSrc:"/images/Bootcamp/1.png"
    },
    {
      title: "Team Dynamics",
      description:
      "Understanding team dynamics is key to creating a cohesive team. Define roles clearly and foster open communication. Resolve conflicts constructively, motivate with recognition and growth opportunities, and embrace diversity for innovative solutions.",
      imageSrc:"/images/Bootcamp/5.png"

    },
    {
      title: "Desicion making",
      description:
        "Effective decision-making uses data and critical thinking to minimize risks and optimize outcomes. Solve problems systematically, involve the team in decisions, and manage risks proactively for project success.",
        imageSrc:"/images/Bootcamp/11.png"
    },
  ]; 