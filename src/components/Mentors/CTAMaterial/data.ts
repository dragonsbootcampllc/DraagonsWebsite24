// data.ts

export type GlareCardContent = {
  imageSrc: string;
  title?: string;
  description?: string;
  description_Highlighted?: string;
};

export type Content = {
  headlineText: string;
  heroHighlightedText: string;
  descriptionText: string;
  ctaApplyText: string;
  ctaReadMoreText: string;
  glareCards: GlareCardContent[];
};

export const content: Content = {
  headlineText: "About Our ",
  heroHighlightedText: "Mentors",
  descriptionText: "At Dragons, we pride ourselves on having a team of experienced mentors who are passionate about helping you succeed. Each mentor brings a wealth of knowledge from their respective fields and companies, ensuring you get the best guidance and support throughout your bootcamp experience.",
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
    {
      imageSrc: "/images/talant/Faisel.jpg",
      title: "Faisel Ebrahim",
      description: "Dragons's Tech team Lead at Neferdata",
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
