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
    <div className='relative py-6 w-full rounded-t-3xl my-10 min-h-[700px] md:min-h-[calc(100vh-0rem)] grid place-items-center' id="CTAMaterial">
      <div className='absolute inset-0 -z-10 h-full w-full px-5 py-24 bg-[radial-gradient(125%_125%_at_50%_10%,#030014_40%,#63e_100%)] rounded-3xl'></div>
      <div className='container mx-auto flex flex-col justify-center items-center gap-9'>
        <div className='heading md:max-w-[1000px] text-center'>
          <div
            style={{ fontFamily: "interV" }}
            className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl text-gray-200 font-semibold'>
            <h1>
              {headlineText}
              <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
                {heroHighlightedText}
              </span>
            </h1>
          </div>
          <p className='text-lg md:text-xl max-w-3xl text-white/70 mt-4 mb-8'>
            {descriptionText}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'>
          {glareCards.map((card: GlareCardContent, index: number) => (
            <GlareCard
              key={index}
              className='relative flex flex-col items-start justify-end py-8 px-6 rounded-3xl overflow-hidden'>
              <Image
                src={card.imageSrc}
                className='absolute inset-0 object-cover w-full h-full'
                alt='image'
                layout='fill'
                priority
              />
              {card.title && card.description && (
                <span className='absolute inset-x-0 bottom-0 grid place-items-center p-4 text-center h-[30%] bg-purple-900/80 backdrop-blur-md rounded-3xl'>
                  <p className='font-bold text-yellow-300 text-xl md:text-2xl'>
                    {card.title}
                  </p>
                  <p className='font-normal text-neutral-200 mt-2'>
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

        <div className='text-center max-sm:w-full max-sm:px-6 mt-8 flex flex-col gap-4 md:flex-row md:gap-6 justify-center'>
          <Link href='/Pricing' passHref>
            <div className='w-full md:w-auto h-16'>
              <Button CTAtext={ctaApplyText} />
            </div>
          </Link>
          <div className='w-full md:w-auto h-16'>
            <ButtonLite CTAtext={ctaReadMoreText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAMaterial;
