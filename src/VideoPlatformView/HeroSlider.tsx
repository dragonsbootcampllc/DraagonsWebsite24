import Image from "next/image";
import React, { use } from "react";
import CoverImage from "@/../public/images/DragonsSprint-CarrerSprint/Dragonswebsiteheader.png";
import ButtonComponent from "@/components/Micros/Button";
import ButtonComponentLite from "@/components/Micros/ButtonLite";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HeroSlider(props: { exploreUrl: string }) {
  const { exploreUrl } = props;
  const route = useRouter();
  const CurrentURL = route.route;


  return (
    <div className='w-full h-full my-5 opacity-80 relative p-4 md:p-12 overflow-hidden'>
      <div className='w-full  xl:min-h-[600px] lg:min-h-[350px] md:min-h-[300px] sm:min-h-[250px]  h-[170px] relative rounded-3xl overflow-hidden'>
        <Image
          src={CoverImage}
          className=''
          alt='hero'
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute left-0 flex flex-col gap-3 p-4 md:p-12 sm:p-12 px-2 sm:px-0 sm:pr-5 sm:top-[20%] bottom-0 -sm:max-w-[230px] text-left justify-center bg-opacity-75 '>
          <div className='sm:max-w-md  lg:max-w-3xl  text-center  sm:p-4 md:p-0 text-white sm:text-left'>
            <h1 className='xl:text-7xl capitalize lg:text-3xl md:text-2xl sm:text-xl  font-bold'>
              The Developer's Quest with Real-World Scenarios
            </h1>
            {/* Remove description on mobile */}
            <p className='text-base py-2 lg:text-lg font-medium text-gray-200 hidden md:block'>
              Understand career technical paths, with real-world scenarios and
              intensive 2 weeks of learning, practice, and mentorship.
            </p>
            {/* Buttons (remove on mobile) */}
            <div className='lg:flex gap-4 hidden mt-4 justify-left md:justify-start'>
              <Link href={CurrentURL + "/" + exploreUrl} className='h-16 w-64' passHref>
                <ButtonComponent CTAtext='Take The Challenge' />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
