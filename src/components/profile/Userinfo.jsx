import Image from "next/image";
import React, { useRef } from "react";

import verified from "../../../public/JSON/user/128121-verified.json";
import badge from "../../../public/JSON/user/BestMember-star-badge.json";

import Lottie from "lottie-react";

function Userinfo(props) {
  const lottieRef = useRef();

  return (
    <div className="w-full mt-12 relative rounded-t-2xl  bg-gray-800/40 backdrop-blur-lg border-2 border-b-0 border-white">
      <div className="p-3 flex flex-wrap gap-3  justify-center lg:flex-nowrap lg:flex-cols  ">
        <div className="">
          <div className="ml-0 relative  flex gap-3 lg:flex-col">
            <div className="rounded-3xl -mt-[50px] relative select-none  md:h-64 h-32 w-32 md:w-64">
              <div className="rounded-[50px]  relative bg-gray-700/40  backdrop-blur-lg md:h-60 h-32 w-32 md:w-60">
                <div className="w-full  hover:scale-105 duration-1000 flex overflow-hidden rounded-3xl  h-full">
                  <Image
                    src="/images/HamdySaad.jpg"
                    className="w-full rounded-3xl  md:rounded-[50px] h-full select-none"
                    fill
                    alt="Core Team"
                    priority
                    placeholder="blur"
                    blurDataURL={"/images/HamdySaad.jpg"}
                  />
                </div>
              </div>
              <div className="h-10 w-10 absolute md:bottom-3 md:right-3  bottom-0 right-0 rounded-full bg-gray-700/40 backdrop-blur-lg">
                <Lottie
                  lottieRef={lottieRef}
                  hover={true}
                  animationData={verified}
                />
              </div>
            </div>

            <div style={{ fontFamily: "Poppins-Bold" }} className=" relative">
              <h1 className="text-2xl md:text-4xl pl-2 select-none text-[#97ba7b]">
                User Name
              </h1>
              <div className="relative">
                <div className="relative">
                  <div className="flex min-w-20 justify-center mx-auto    md:justify-start  ">
                    <div className="md:rounded-md flex gap-2   rounded-3xl p-2 px-2  bg-gray-900/40 duration-300  hover:bg-gray-700/40 backdrop-blur-sm">
                      {" "}
                      <h1 className="text-xl">@username</h1>
                      <div className="relative w-auto h-auto pt-1 ">
                        <Image
                          src="/images/discord.png"
                          className="select-none w-auto h-auto"
                          height={25}
                          width={25}
                          alt="discord"
                          priority
                          responsive
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex  gap-1 pt-3">
              <svg
                fill="rgb(156 163 175)"
                className="pt-[3px]"
                width="25px"
                height="25px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 395.71 395.71"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                  />
                </g>
              </svg>

              <h1 className="text-left font-   text-gray-400">Egypt</h1>
            </div>

            <div className="flex  gap-1 pt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="pt-[3px]"
                width="25px"
                height="25px"
                fillRule="evenodd"
                clipRule="evenodd"
                baseProfile="basic"
              >
                <path
                  fill="rgb(156 163 175)"
                  fillRule="evenodd"
                  d="M43.25,26.909C50.519,26.909,56,32.107,56,39v18	c0,1.104-0.896,2-2,2H34c-1.104,0-2-0.896-2-2v-7H22c-1.104,0-2-0.896-2-2v-3h-9c-1.104,0-2-0.896-2-2V30.864	C9,26.528,12.527,23,16.863,23c2.54,0,4.831,1.2,6.275,3.103c1.646-1.363,3.718-2.125,5.94-2.125c3.364,0,6.367,1.761,8.016,4.506	C38.944,27.458,41.059,26.909,43.25,26.909z"
                  clipRule="evenodd"
                />
                <path
                  fill="rgb(156 163 175)"
                  fillRule="evenodd"
                  d="M44.5,25c-4.687,0-8.5-3.813-8.5-8.5S39.813,8,44.5,8	s8.5,3.813,8.5,8.5S49.187,25,44.5,25z"
                  clipRule="evenodd"
                />
                <path
                  fill="rgb(156 163 175)"
                  fillRule="evenodd"
                  d="M29,22.5c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6	S32.309,22.5,29,22.5z"
                  clipRule="evenodd"
                />
                <path
                  fill="rgb(156 163 175)"
                  fillRule="evenodd"
                  d="M16.5,22c-3.032,0-5.5-2.467-5.5-5.5s2.468-5.5,5.5-5.5	s5.5,2.467,5.5,5.5S19.532,22,16.5,22z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="text-left font-   text-gray-400">
                Joined May 2020
              </h1>
            </div>
          </div>
          <hr className="my-5 " />
          <div className="flex gap-2 bg-gray-700/40 backdrop-blur-lg justify-center select-none cursor-pointer active:scale-95 p-2 rounded-lg ">
            <div className="h-8  w-8 ">
              <Lottie animationData={badge} />
            </div>
            <h1 className="text-2xl font-bold">Top Member</h1>
          </div>{" "}
        </div>

        <div className="mr-0 w-full      ">{props.profileNav}</div>
      </div>
    </div>
  );
}

export default Userinfo;
