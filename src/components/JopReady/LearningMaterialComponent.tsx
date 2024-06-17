"use client";
import Link from "next/link";
import ButtonComponent from "../Micros/Button";
import ButtonLite from "../Micros/ButtonLite";
import InternationalLogo1 from "./WorldWideLogo";



type GridItem = {
  id: number;
  title: string;
  description: string;
};
let InternationalLogo =InternationalLogo1;
// Sample data for the grid items
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
    <div className='py-6 '>
      <div className='container max-w-[1400px] mx-auto flex flex-col gap-9 justify-center items-center'>
      
      <div className='w-full flex justify-center'>
        <div className='bg-purple-700 w-[116px] p-2  shadow-2xl shadow-blue-700/40 rounded-[2rem]  h-[116px]'>
{/* // logo here */}
        </div>{" "}
      </div>
        <div className='heading md:max-w-[1000px] p-4'>
          <div
            style={{ fontFamily: "interV" }}
            className='text-6xl  z-10 content-center max-w-4xl text-center md:text-7xl  flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
            <h1>
              {headlineText}
              <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
                {heroHighlightedText}
              </span>
            </h1>
          </div>

          <p className='text-xl select-text  text-center mt-4 mb-8 text-white/70'>
            {descriptionText}
          </p>
        </div>
        <div className=' flex gap-4 flex-col md:flex-row-reverse '>
          <div className='text-center bg-[#08091b]  cursor-pointer transition-all pt-6 rounded-3xl overflow-hidden flex flex-col gap-4 justify-between items-center'>
            <h3 className='text-2xl capitalize md:text-5xl text-center font-semibold'>
              {sectionTitle}
            </h3>
            <p className='text-lg mt-4 mb-8 max-w-[600px] text-white/70'>
              {sectionDescription}
            </p>

            <div className='cta rounded-xl flex gap-5 pb-10'>
              <Link href='/Pricing' passHref>
                <div className='h-16 w-64'>
                  <ButtonComponent CTAtext={ApplyNowText} />
                </div>
              </Link>
              <div className='h-16 w-64'>
                <ButtonLite CTAtext={ReadMoreText}/>
              </div>
            </div>
            <div className='image z-10 rounded-3xl overflow-hidden'>
              <img src={image} alt='office' className="hover:scale-105  duration-700" />
            </div>
          </div>{" "}
          <div className='grid grid-cols-1 gap-4'>
            {gridItems?.map((item) => (
              <div
                key={item.id}
                className='bg-[#08091b] flex justify-center flex-col text-center hover:scale-[1.02] z-10 rounded-3xl p-4 cursor-pointer transition-all hover:shadow-2xl shadow-blue-700/40'>
                <div className='flex justify-center'>
                  <h3 className='text-2xl  text-white font-semibold'>
                    {item.title}
                  </h3>
                
                </div>
                <p className='text-lg mt-4 mb-8  max-w-[500px] text-white/70'>{item.description}</p>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningMaterialComponent;
