"use client";
import Link from "next/link";
import ButtonComponent from "../Micros/Button";
import ButtonLite from "../Micros/ButtonLite";
import InternationalLogo1 from "./WorldWideLogo";
import Image from "next/image";

type GridItem = {
  id: number;
  title: string;
  description: string;
};

type MaterialObj = {
  gridItems: GridItem[];
  headlineText: string;
  heroHighlightedText: string;
  descriptionText: string;
  sectionTitle: string;
  sectionDescription: string;
  ReadMoreText: string;
  ApplyNowText: string;
  image: string;
};

const LearningMaterialComponent: React.FC<MaterialObj> = ({
  gridItems,
  headlineText,
  heroHighlightedText,
  descriptionText,
  sectionTitle,
  sectionDescription,
  ReadMoreText,
  ApplyNowText,
  image,
}) => {
  return (
    <div className='py-6 px-2 md:px-6 lg:px-8' id="LearningMaterialComponent">
      <div className='container max-w-[1400px] mx-auto flex flex-col gap-9 justify-center items-center'>
        <div className='w-full flex justify-center'>
          <div className='bg-purple-700 w-[116px] p-2 shadow-2xl shadow-blue-700/40 rounded-[2rem] h-[116px]'>
            <InternationalLogo1 />
          </div>
        </div>
        <div className='heading md:max-w-[1000px] p-4'>
          <div
            style={{ fontFamily: "interV" }}
            className='text-4xl md:text-6xl lg:text-7xl z-10 content-center max-w-4xl text-center flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
            <h1>
              {headlineText}
              <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
                {heroHighlightedText}
              </span>
            </h1>
          </div>
          <p className='text-lg md:text-xl select-text text-center mt-4 mb-8 text-white/70'>
            {descriptionText}
          </p>
        </div>
        <div className='flex gap-4 flex-col md:flex-row-reverse w-full px-4 md:px-0'>
          <div className='text-center bg-[#08091b] cursor-pointer transition-all pt-6 rounded-3xl overflow-hidden flex flex-col gap-4 justify-between items-center w-full'>
            <h3 className='text-2xl md:text-4xl lg:text-5xl text-center font-semibold'>
              {sectionTitle}
            </h3>
            <p className='text-lg mt-4 mb-8 px-6 max-w-[600px] text-white/70'>
              {sectionDescription}
            </p>
            <div className='cta rounded-xl flex flex-col xl:flex-row gap-5 pb-10'>
              <Link href='/Pricing' passHref>
                <div className='h-16 w-64'>
                  <ButtonComponent CTAtext={ApplyNowText} />
                </div>
              </Link>
              <div className='h-16 w-64'>
                <ButtonLite CTAtext={ReadMoreText} />
              </div>
            </div>
            <div className="relative rounded-3xl w-full h-0  pb-[62.5%]"> {/* Aspect ratio box */}
                <Image src={image} alt='office' 
                  layout="fill"
                  objectFit="cover"
                  className='hover:scale-105 duration-700' />
              </div>
          </div>
          <div className='grid grid-cols-1 gap-4 w-full px-4 md:px-0'>
            {gridItems?.map((item) => (
              <div
                key={item.id}
                className='bg-[#08091b] flex justify-center flex-col  text-center hover:scale-[1.02] z-10 rounded-3xl p-4 cursor-pointer transition-all hover:shadow-2xl shadow-blue-700/40'>
                <div className='flex flex-col justify-center'>
                  <h3 className='text-2xl text-white font-semibold'>
                    {item.title}
                  </h3>
                  <div className='text-lg text-center flex justify-center  mt-4 mb-8  text-white/70'>
                 <p className="max-w-[500px]">{item.description}</p> 
                </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningMaterialComponent;
