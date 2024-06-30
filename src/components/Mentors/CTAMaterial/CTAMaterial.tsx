"use client";
import Link from "next/link";
import Image from "next/image";
import { GlareCard } from "../../ui/glare-card";
import Button from "../../Micros/Button";
import ButtonLite from "../../Micros/ButtonLite";
import { content, GlareCardContent } from "./data"; // Import the data and types

const CTAMaterial: React.FC = () => {
  const {
    headlineText,
    heroHighlightedText,
    descriptionText,
    ctaApplyText,
    ctaReadMoreText,
    glareCards,
  } = content;

  return (
    <div className='py-6 relative w-full rounded-t-3xl my-10 min-h-[700px] md:min-h-[calc(100vh-0rem)] place-items-center grid'>
      <div className='container mx-auto flex flex-col justify-center items-center gap-9 px-4'>
        <div className='heading text-center max-w-4xl mx-auto'>
          <div
            style={{ fontFamily: "interV" }}
            className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-200 font-semibold mb-3'>
            <h1>
              {headlineText}
              <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
                {heroHighlightedText}
              </span>
            </h1>
          </div>
          <p className='text-lg md:text-xl text-white/70 mt-4 mb-8 max-w-3xl mx-auto'>
            {descriptionText}
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10'>
          {glareCards.map((card: GlareCardContent, index: number) => (
            <GlareCard
              key={index}
              className='relative flex flex-col items-start justify-end py-6 px-4 md:py-8 md:px-6'>
              <Image
                src={card.imageSrc}
                className='absolute inset-0 w-full h-full object-cover'
                alt='image'
                width={3388}
                height={2259}
              />
              {card.title && card.description && (
                <span className='absolute left-0 right-0 grid place-items-center p-4 text-center h-[30%] bg-purple-900/80 backdrop-blur-md w-full bottom-0 rounded-3xl'>
                  <p className='font-bold text-yellow-300 text-xl md:text-2xl'>
                    {card.title}
                  </p>
                  <p className='font-normal text-neutral-200 text-sm md:text-base'>
                    {card.description}{" "}
                    <span className='font-bold text-purple-100'>
                      {card.description_Highlighted}
                    </span>
                  </p>
                </span>
              )}
            </GlareCard>
          ))}
        </div>

        <div className='text-center mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center'>
          <Link href='/Pricing' passHref>
            <div className='h-12 w-48 md:h-14 md:w-56 lg:h-16 lg:w-64'>
              <Button CTAtext={ctaApplyText} />
            </div>
          </Link>
          <div className='h-12 w-48 md:h-14 md:w-56 lg:h-16 lg:w-64'>
            <ButtonLite CTAtext={ctaReadMoreText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAMaterial;
