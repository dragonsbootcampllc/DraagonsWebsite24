import React from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./Hero.module.css";
import Charts from "./Charts";
import ButtonComponent from "../Micros/Button";
import ButtonLite from "../Micros/ButtonLite";

function Hero() {
  let News = {
    id: 1,
    date: "2020-01-01",
    content: "New Season landed!",
    link: "/blog/news",
  };

  return (
    <div style={{ fontFamily: "interV" }} className='w-full min-h-screen mt-12'>
      <div className='mt-28 mb-6 p-2 flex justify-center'>
        <div>
          <Link
            href={News.link}
            passHref
            className='flex active:scale-95 duration-200 gap-1 text-md bg-purple-400/10 shadow-gray-200/20 shadow-inner px-2 rounded-full min-w-[30px]'>
            <div className='grid place-content-center'>
              <Image
                style={{ fontFamily: "interV" }}
                src='/SVG/stars.svg'
                alt='Stars'
                width={30}
                height={30}
              />
            </div>
            <span className='text-purple-300 grid place-content-center font-bold'>
              News:{" "}
            </span>
            <span className='text-purple-400/70 hover:underline duration-300 grid place-content-center'>
              {News.content}
            </span>
          </Link>
        </div>
      </div>

      <div>
        <div
          style={{ fontFamily: "interV" }}
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl content-center max-w-4xl text-center z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
          <h1>
            Boost Your Experiences in only{" "}
            <span className='bg-gradient-to-r from-pink-600 to-blue-500 text-transparent bg-clip-text'>
              6 Months
            </span>
          </h1>
        </div>
        <p
          style={{ fontFamily: "interV" }}
          className='text-base sm:text-lg flex px-2 text-center pt-6 relative z-10 text-purple-300/50 justify-center m-auto'>
         join our student activity to prepare yourself for real-life jobs!
        </p>
      </div>
      <div className='cta rounded-xl flex w-full flex-col md:flex-row justify-center my-12 gap-5'>
        <Link href='/Pricing' passHref>
          <div className='h-16 min-w-64'>
            <ButtonComponent CTAtext='Apply Now' />
          </div>
        </Link>
        <div className='h-16 min-w-64'>
          <ButtonLite CTAtext='Book a 1:1 Call' />
        </div>
      </div>
      <div className='flex justify-center mt-16 px-3 sm:px-6 md:px-12'>
        <Charts />
      </div>
 
      {/* <div className="max-w-[1400px] md:h-[800px] container_3d sm:mt-10 md:mt-3 lg:-mt-20 relative m-auto flex justify-center">
        <Image
          style={{ fontFamily: "interV" }}
          className={`${"absolute z-40 top-12 filter"} ${Styles.Drag3DBoubce}`}
          src={"/Identity/hero2023Glass.png"}
          alt="Header Image"
          height="1160"
          width="1240"
          placeholder="blur"
          blurDataURL={"/Identity/hero2023Glass.png"}
          priority
        />
      </div> */}
    </div>
  );
}

export default Hero;
