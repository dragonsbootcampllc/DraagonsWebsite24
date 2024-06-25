import React from "react";
import { Meteors } from "../ui/meteors";
import Image from "next/image";

interface CardsMeteorsProps {
  title: string;
  points: string;
  image: string;
}

const CardsMeteors: React.FC<CardsMeteorsProps> = ({
  title,
  points,
  image,
}) => {
  // Split the points string by newline characters to create an array
  const pointsArray = points.split("/n");

  return (
    <div className='w-full  relative p-4'>
      <div className='relative   w-full h-full'>
        <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-purple-800/20 to-purple-950/50 transform scale-[0.80] rounded-full blur-3xl' />
        <div className='relative w-full'>
          <div className='flex relative flex-col w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] hover:scale-[1.03] cursor-pointer transition-all bg-[#08091b] rounded-3xl overflow-hidden'>
            <Image
              src={image}
              fill={true}
              alt='Project Image'
              className='object-cover rounded-3xl opacity-75 hover:opacity-100 duration-500 absolute bottom-0 w-full h-full'
            />
            <div className='absolute top-2 p-6'>
              <h3 className='text-xl md:text-2xl lg:text-4xl text-center font-semibold'>
                {title}
                <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
                  {" "}
                  {/* {project.titleHighlightedText} */}
                </span>{" "}
              </h3>
              {/* <p className="text-sm md:text-base lg:text-lg text-center mt-4 mb-8 max-w-[600px] text-white/90">
                    {project.description}
                  </p> */}
            </div>
            {/* Meteors effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsMeteors;
