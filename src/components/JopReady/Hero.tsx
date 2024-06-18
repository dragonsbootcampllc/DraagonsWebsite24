"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Micros/Button";
import ButtonLite from "@/components/Micros/ButtonLite";

interface HeroProps {
  News: {
    link: string;
    content: string;
  };
  subHeadingText: string;
  heroHighlightedText: string;
  heroHeading: string;
  Disctiption: string;
}

const Hero: React.FC<HeroProps> = ({ News, subHeadingText, heroHighlightedText, heroHeading, Disctiption }) => {
  return (
    <div className='hero relative min-h-[700px] md:min-h-[calc(100vh-12rem)]'>
      <div className='absolute opacity-30 h-full w-full'>
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      </div>
      <div className='container mx-auto pt-[120px] md:pt-[140px] flex flex-col justify-between gap-9 items-center'>
        <div className='content flex flex-col gap-12 px-4 md:px-0'>
          <div>
            <div className='mb-6 p-2 flex justify-center'>
              <div>
                <Link
                  href={News.link}
                  passHref
                  className='flex active:scale-95 duration-200 gap-1 text-md bg-purple-400/10 shadow-gray-200/20 shadow-inner px-4 py-2 rounded-full min-w-[30px]'>
                  <div className='grid place-content-center'>
                    <Image
                      style={{ fontFamily: "interV" }}
                      src='/SVG/stars.svg'
                      alt='Stars'
                      width={30}
                      height={30}
                    />
                  </div>
                  <span className='text-purple-300 mr-1 grid place-content-center font-bold'>
                    News:{" "}
                  </span>
                  <span className='text-purple-400/70 hover:underline duration-300 grid place-content-center'>
                    {News.content}
                  </span>
                </Link>
              </div>
            </div>
            <div
              style={{ fontFamily: "interV" }}
              className='text-2xl md:text-5xl content-center max-w-4xl text-center z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
              <h1>
                {heroHeading}
                {subHeadingText}
                <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
                  {heroHighlightedText}
                </span>
              </h1>
            </div>
            <p
              style={{ fontFamily: "interV" }}
              className='text-white/50 text-lg md:text-base container mx-auto flex flex-col gap-7 justify-center text-center max-w-[800px] pt-5'>
              {Disctiption}
            </p>
          </div>
        </div>
        <div className='cta rounded-xl flex flex-col md:flex-row gap-5'>
          <Link href='/Pricing' passHref>
            <div className='h-14 md:h-16 w-64'>
              <Button CTAtext='Apply Now' />
            </div>
          </Link>
          <div className='h-14 md:h-16 w-64'>
            <ButtonLite CTAtext='Book a 1:1 Call' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
