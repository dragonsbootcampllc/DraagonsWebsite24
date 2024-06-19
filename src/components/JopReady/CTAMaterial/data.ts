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
  