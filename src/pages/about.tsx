import Hero from "@/components/JopReady/Hero";
import ButtonComponent from "@/components/Micros/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardsHoverEffectDemo from "@/components/Cards/CardHoverEffectDemo";
import Founding from "@/../public/images/OurStory/3.png";
import Story2 from "@/../public/images/OurStory/4.png";
import Story3 from "@/../public/images/OurStory/5.png";
import Story4 from "@/../public/images/OurStory/6.png";

interface Section {
  mainHeader: string;
  header: string;
  paragraph: string;
  img: string;
}

interface AboutUsProps {
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

const AboutUsPage: React.FC<AboutUsProps> = (props) => {
  const HeroObj = {
    News: {
      id: 1,
      date: "2020-01-01",
      content: "New Season just landed💯",
      link: "#",
    },
    heroHeading: "The story of a ",
    subHeadingText: "Student activity that ",
    heroHighlightedText: "turned into a company",
    Disctiption:
      "Discover how a student activity became a thriving company. Join us and be part of our next chapter!",
  };

  return (
    <div id='aboutus' className='relative w-full flex flex-col items-center'>
      <Hero
        News={HeroObj.News}
        subHeadingText={HeroObj.subHeadingText}
        heroHighlightedText={HeroObj.heroHighlightedText}
        heroHeading={HeroObj.heroHeading}
        Disctiption={HeroObj.Disctiption}
      />
      <div className='flex flex-col items-center w-full lg:mt-56 md:mt-28 mt-20 px-4'>
        <div className='w-full max-w-6xl grid gap-2 place-items-center'>
          <div className='text-3xl flex-col content-center text-center md:text-5xl z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
            <h1 className='md:text-xl text-center text-lg font-medium text-purple-800 uppercase'>
              {props.mainHeader}
            </h1>
            <h1>
              {props.subHeader}
              <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'></span>
            </h1>
            <p className='text-white/50 text-lg md:text-base container mx-auto flex flex-col gap-7 justify-center text-center max-w-2xl pt-5'>
              {props.description}
            </p>
          </div>

          <div className='my-5 md:my-12'>
            <div className='w-full grid gap-2 place-items-center'>
              <div className='text-3xl py-5 flex-col content-center text-center md:text-5xl z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
                <h1 className='md:text-xl text-center text-lg font-medium text-purple-800 uppercase'>
                  {props.story[0].mainHeader}
                </h1>
                <h1>{props.subHeader}</h1>
              </div>
            </div>
            {props.story.map((section: Section, index: number) => (
              <div
                key={index}
                className={`flex max-w-6xl py-5 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col gap-3`}>
                <div className='flex flex-col md:w-1/2 gap-3'>
                  <h2 className='md:text-3xl text-2xl font-black text-start py-3'>
                    {section.header}
                  </h2>
                  <p className='text-start text-base font-normal'>
                    {section.paragraph}
                  </p>
                </div>
                <div className='flex flex-col justify-center items-center md:w-1/2'>
                  <Image
                    src={section.img}
                    alt='Story Image'
                    className='md:w-10/12 md:hover:scale-105 duration-700 hover:cursor-pointer w-full rounded-3xl'
                    width={1000}
                    height={1000}
                    quality={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='text-center grid mb-12 place-items-center gap-7 px-4'>
        <h2 className='text-2xl md:text-4xl text-center font-semibold'>
          {CTATextBelow}
        </h2>

        <Link href='/Pricing' passHref>
          <div className='h-16 w-64'>
            <ButtonComponent CTAtext={buttonText} />
          </div>
        </Link>
      </div>
      {props.vision && (
        <div className='text-3xl min-h-screen flex-col content-center max-w-4xl text-center md:text-5xl z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
          <h1 className='md:text-xl text-center text-lg font-medium text-purple-800 uppercase'>
            {props.vision.mainHeader}
          </h1>
          <h1>
            {props.vision.subHeader}
            <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'></span>
          </h1>
          <p className='text-white/50 text-lg md:text-base container mx-auto flex flex-col gap-7 justify-center text-center max-w-2xl pt-5'>
            {props.vision.description}
          </p>
        </div>
      )}

      <CardsHoverEffectDemo />
    </div>
  );
};

AboutUsPage.defaultProps = {
  mainHeader: "OUR mission",
  subHeader: "Empowering the Next Generation of Tech Innovators",
  description:
    "To empower aspiring tech professionals by providing immersive, hands-on training that transforms beginners into industry-ready experts.",
  story: [
    {
      mainHeader: "Our Story",
      header: "Inception and Founding",
      paragraph:
        "In Oct 2022, Dragons Bootcamp LLC was born out of a shared vision between two pioneers, Hamdy Saad and Hatem Ali.\n Hatem, a determined Computer Science student at EElu Fayoum branch, recognized a glaring disparity between traditional academic teachings and the practical skills needed in the tech industry. Despite the supportive academic environment, there was a noticeable gap in preparing students for real-world challenges. ",
      img: Founding.src,
    },
    {
      mainHeader: "Our Story",
      header: " The Journey Begins",
      paragraph:
        "Encouraged by the openness and support of Dr. Mohammed Agha, alongside teaching assistants Dr. Rabiee Ayman and Kareem Mangoud, Hatem embarked on a mission.",
      img: Story2.src,
    },
    {
      mainHeader: "Our Story",
      header: "Dragons Bootcamp's Inaugural Webinar at EELU",
      paragraph:
        "Partnering with Hatem, Hamdy Saad, an accomplished entrepreneur working remotely for a Dubai-based company at this time, brought his expertise from founding tech ventures such as Divzoon and Dlink.",
      img: Story3.src,
    },
    {
      mainHeader: "Our Story",
      header: "Innovating the EdTech industry",
      paragraph:
        "Inspired by their initial success, Hamdy and Hatem aimed to revolutionize education with Dragons Bootcamp. They aim to continue innovating in tech education, pioneering new methodologies and curriculum enhancements that empower future generations of tech leaders. ",
      img: Story4.src,
    },
  ],
  vision: {
    mainHeader: "OUR Vision",
    subHeader: "Transforming the Future of Tech Education",
    description:
      "Our vision is to revolutionize tech education by equipping aspiring professionals with the skills and knowledge needed to thrive in the ever-evolving tech industry.",
  },
};

export default AboutUsPage;
