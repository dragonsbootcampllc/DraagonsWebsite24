import React from "react";
import Link from "next/link";

import { Meteors } from "../ui/meteors";
import ButtonComponent from "../Micros/Button";


type GridItem = {
  title: string;
  description: string;
  logo: JSX.Element;
};
type JobReadyComponentProps = {
  subHeadingText: string;
  heroHighlightedText: string;
  heroHeading: string;
  Disctiption: string;
  CTATextBelow: string;
  buttonText: string;
  gridItems: GridItem[];
  headingText: string;


};

const PrepareSection: React.FC<JobReadyComponentProps> = ({
  heroHighlightedText,
  gridItems,
  CTATextBelow,
  buttonText,
  headingText,




}) => {

  return (
    <div className='container mx-auto py-[80px] max-w-[1400px] w-full flex flex-col justify-center items-center gap-9' id="PrepareSection">
      <div className='w-full flex justify-center'>
        <div className='bg-purple-700 w-[116px]  h-[116px] p-2 shadow-2xl shadow-blue-700/40 rounded-[2rem] '>
          {gridItems && gridItems[1] && gridItems[1].logo}
        </div>{" "}
      </div>

      <div
        style={{ fontFamily: "interV" }}
        className='text-6xl content-center max-w-4xl text-center md:text-7xl z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
        <h1>
          {headingText}
          <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
            {heroHighlightedText}
          </span>
        </h1>
      </div> 

      <div className='grid grid-cols-1 w-full sm:grid-cols-6 md:grid-cols-6 gap-6 mb-8'>
        {gridItems && gridItems.map((item, index) => (
          <div
            key={index}
            className={`text-lg overflow-hidden w-full relative min-h-[500px] mt-2 p-6 h-64 rounded-3xl shadow-2xl shadow-purple-500/5 duration-500 flex hover:scale-[1.03] cursor-pointer transition-all
                                        ${index <= 1 ? "sm:col-span-3" : index === 2 ? "sm:col-span-6" : "sm:col-span-2"} 
                                        flex-col  gap-2 p-4 justify-center items-center text-center bg-[#08091b]`}>
            <div className='flex flex-col w-full justify-between h-full'>
              <div className=' h-full w-full    '>{item.logo}</div>

              <div className='flex flex-col w-full justify-center items-center'>
                <div className=' bottom-3  text-center absolute  p-4 rounded-b-3xl'>
                  <h3 className='text-2xl md:text-4xl font-semibold capitalize'>
                    {item.title}
                  </h3>
                  <p className='text-white/70'>{item.description}</p>
                </div>
              </div>
              <Meteors number={20} />
            </div>
          </div>
        ))}
      </div>
      <div className='text-center grid  place-items-center gap-7'>
        <h2 className='text-2xl md:text-4xl text-center font-semibold'>
          {CTATextBelow}
        </h2>

        <Link href='/Pricing' passHref>
          <div className='h-16 w-64'>
            <ButtonComponent CTAtext={buttonText} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PrepareSection;
