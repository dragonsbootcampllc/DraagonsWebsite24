// CTAMaterial.tsx

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
      <div className='container mx-auto flex flex-col justify-center items-center gap-9'>
        <div className='heading md:max-w-[1000px]'>
          <div
            style={{ fontFamily: "interV" }}
            className='text-6xl content-center max-w-4xl text-center md:text-7xl z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
            <h1>
              {headlineText}
              <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
                {heroHighlightedText}
              </span>
            </h1>
          </div>
          <p className='text-xl text-center max-w-4xl text-white/70 mt-4 mb-8'>
            {descriptionText}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {glareCards.map((card: GlareCardContent, index: number) => (
            <GlareCard
              key={index}
              className='flex flex-col items-start justify-end py-8 px-6'>
              <Image
                src={card.imageSrc}
                className='h-full w-full absolute inset-0 object-cover'
                alt='image'
                width={3388}
                height={2259}
              />
              {card.title && card.description && (
                <span className='absolute left-0 right-0 grid place-items-center p-4 text-center h-[30%] bg-purple-900/80 backdrop-blur-3xl  w-full bottom-0 rounded-3xl  '>
                  <p className='font-bold text-yellow-300 text-2xl'>
                    {card.title}
                  </p>
                  <p className='font-normal  text-balance text-neutral-200 '>
                    {card.description}{" "}
                    <span className='font-bold  text-balance text-purple-100 '>
                      {card.description_Highlighted}
                    </span>
                  </p>
                </span>
              )}
            </GlareCard>
          ))}
        </div>

        <div className='text-center mt-8 flex gap-4 justify-center'>
          <Link href='/Pricing' passHref>
            <div className='h-16 w-64'>
              <Button CTAtext={ctaApplyText} />
            </div>
          </Link>
          <div className='h-16 w-64'>
            <ButtonLite CTAtext={ctaReadMoreText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAMaterial;
