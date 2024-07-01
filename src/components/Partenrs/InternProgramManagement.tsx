import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Micros/Button";
import ButtonLite from "@/components/Micros/ButtonLite";

const InternProgramManagement: React.FC = () => {

  const CTA = {
    ctaApplyText: "Apply Now",
    ctaReadMoreText: "Read More",
  }
  const headText = {
    headlineText: "Seamlessly",
    heroHighlightedText: " Manage and Elevate",
    subheadlineText: " Your Intern Programs",
    descriptionText: "Our management services ensure your intern programs run smoothly and effectively, providing valuable experience to interns.",
  };

  const cardsData = [
    {
      title: "Onboarding and Orientation",
      text: "Comprehensive onboarding and orientation sessions designed to immerse interns in your company's culture and their specific roles.",
      image: "/images/supportive_community.jpg",
    },
    {
      title: "Mentorship and Guidance",
      text: "Dedicated mentorship by experienced professionals to support interns in their projects and career development.",
      image: "/images/industry_connections.jpg",
    },
    {
      title: "Performance Tracking and Feedback",
      text: "Regular performance evaluations and constructive feedback sessions to ensure interns are progressing and learning.",
      image: "/images/learning_companies.jpg",
    },
    {
      title: "Professional Development Workshops",
      text: "Conducting workshops and training sessions to enhance interns' skills and knowledge in relevant fields.",
      image: "/images/thought_leader.jpg",
    },
    {
      title: "End-of-Program Evaluation and Certification",
      text: "Providing detailed evaluations and certificates of completion to recognize the interns' contributions and achievements.",
      image: "/images/level_up.jpg",
    },
  ];

  return (
    <div className="w-full flex flex-col container mx-auto min-h-screen justify-center items-center gap-8 text-white">
      <div className='heading md:max-w-[1000px] text-center'>
        <h1
          style={{ fontFamily: "interV" }}
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto z-10 relative mb-3 text-gray-200 font-semibold'>
          {headText.headlineText}
          <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
            {headText.heroHighlightedText}
          </span>
          {headText.subheadlineText}
        </h1>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-white/70 mt-4 mb-8'>
          {headText.descriptionText}
        </p>
      </div>

      <div className="container px-6 max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-4 md:gap-5">
        {cardsData.map(({ title, text, image }, index) => (
          <div

            key={index}
            className={` bg-purple-950 hover:scale-[1.03] cursor-pointer transition-all ${index <= 1 ? "col-span-2 lg:col-span-3" : "col-span-2"} overflow-hidden bg-purple-950 rounded-2xl h-[375px] text-left flex flex-col justify-between`}
          >
            <div className="p-5  flex flex-col gap-1">
              <h1 className="text-2xl">{title}</h1>
              <p className="text-[14px] text-white/50">{text}</p>
            </div>

            <div className="w-full h-full relative">
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="absolute bottom-0 left-0 w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
      <div className='text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center'>
        <Link href='/Pricing' passHref>
          <div className='h-12 w-48 md:h-16 md:w-64'>
            <Button CTAtext={CTA.ctaApplyText} />
          </div>
        </Link >
        <Link href='/InternProgramManagement' passHref>
          <div className='h-12 w-48 md:h-16 md:w-64'>
            <ButtonLite CTAtext={CTA.ctaReadMoreText} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default InternProgramManagement;
