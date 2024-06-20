import Hero from "@/components/JopReady/Hero";
import ButtonComponent from "@/components/Micros/Button";
import Link from "next/link";
import React from "react";
import ModernGrid from "@/components/ModernGrid";
import StudentsJoined from "./studentsJoined";

interface Section {
  mainHeader: string;
  header: string;
  paragraph: string;
  img: string;
}

interface ForStudentsProps {
  mainHeader: string;
  subHeader: string;
  description: string;
  story: Section[];
  vision?: {
    mainHeader: string;
    subHeader: string;
    description: string;
  };
}

const CTATextBelow = "Ready to start your journey?";
const buttonText = "Get Started";

const ForStudentPage: React.FC<ForStudentsProps> = (props) => {
  const HeroObj = {
    News: {
      id: 1,
      date: "2020-01-01",
      content: "New Season just landed💯",
      link: "/blog/news",
    },
    heroHeading: "Become Job Ready With ",
    subHeadingText: "Dragons Bootcamp in Only 6 ",
    heroHighlightedText: "Months",
    Disctiption:
      "Join Dragons Bootcamp and become job-ready in only 6 months. Gain skills and hands-on experience for a successful career.",
  };

  return (
    <div id="aboutus" className="relative w-full flex  justify-center">
      <Hero
        News={HeroObj.News}
        subHeadingText={HeroObj.subHeadingText}
        heroHighlightedText={HeroObj.heroHighlightedText}
        heroHeading={HeroObj.heroHeading}
        Disctiption={HeroObj.Disctiption}
      />
      <div className="flex justify-center flex-col items-center w-screen lg:mt-56 md:mt-28 mt-20 px-4">
        <div className="w-full place-items-center grid gap-2 max-w-[1400px]">
          <div className="text-3xl min-h-screen flex-col content-center max-w-4xl text-center md:text-5xl z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold">
            <StudentsJoined />
          </div>

          <div className="my-5 min-h-screen md:my-12">
            <div className="w-full place-items-center grid gap-2 max-w-[1400px]">
              <ModernGrid />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center grid mb-12 place-items-center gap-7 px-4">
        <h2 className="text-2xl md:text-4xl text-center font-semibold">
          {CTATextBelow}
        </h2>
        <Link href="/Pricing" passHref>
          <div className="h-16 w-64">
            <ButtonComponent CTAtext={buttonText} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ForStudentPage;
