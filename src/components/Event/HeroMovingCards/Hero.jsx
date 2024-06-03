import React from "react";
import Image from "next/image";
import celebrate from "../../../public/JSON/user/60051-shapes-v1.json";
import Link from "next/link";
// change in the future to be dynamic from ajson file

function Hero() {
  return (
    <div style={{ fontFamily: "interV" }}>
      <nav className=" bg-main-color/90  pt-12 flex flex-col max-w-[1400px]">
        <div className="header rounded-md flex justify-between  relative ">
          <div className="contact w-full  grid place-items-center divide-x divide-slate-700 py-2">
            <span
              className="mail px-5  grid place-items-center  opacity-85  items-center text-red-color text-xs flex-col
                        md2:text-sm md2:flex-row"
            >
              <span>
                <span
                  style={{ fontFamily: "interV" }}
                  className="icon-envelope pr-2"
                />
                Want to inspire people? let&#39;s talk :{" "}
              </span>{" "}
              <span> </span>{" "}
              <a href="mailto:dragons@divzoon.com" className="text-white-color">
                {" "}
                <span className={"px-1"}> dragons@divzoon.com </span>{" "}
              </a>
            </span>
          </div>
          <div
            className="hidden
                  sm:inline-block"
          ></div>
        </div>
      </nav>

      <div
        className=" bg-main-color h-[35rem]  relative  w-screen overflow-hidden flex flex-col
                  md2:flex-row md2:h-[35rem] md2:gap-[13rem] md2:px-12 max-w-[1440px]"
      >
        <div
          className="left w-full     justify-start  h-full  grid place-items-center items-center
                "
        >
          <div
            className={
              "absolute z-20 grid place-items-center m-2 bottom-0  cursor-pointer w-full"
            }
          >
            <a
              href={
                "https://github.com/DragonsEG/DragonsWebsite_MembersSprints/tree/main/Sprint1/hero_section"
              }
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className={"p-2 bg-gray-900/40 w-44 text-xs rounded-3xl "}>
                {" "}
                Created By @FaisalIbrahim
              </div>
            </a>
          </div>

          <div className=" gap-0 md:gap-8 xl:gap-20 md:items-center">
            <div className={"absolute top-4 flex flex-col w-full "}>
              <div
                className={
                  " lg:hidden w-full grid grid-cols-3  place-items-center px-4 py-4 gap-0"
                }
              >
                <div className={"grid  w-full justify-center"}>
                  <div
                    className={
                      "h-20 w-20 relative flex place-items-center bg-gray-700/40  rounded-xl   "
                    }
                  >
                    <Image
                      className={" rounded-xl absolute bottom-0 "}
                      src={"/images/EVENT/KareemNour.png"}
                      alt={"test"}
                      height={200}
                      width={200}
                    />
                  </div>
                </div>
                <div className={"grid     w-full justify-center"}>
                  <div
                    className={
                      "h-24 bg-blue-700/40 relative flex place-items-center  rounded-xl   w-24"
                    }
                  >
                    <Image
                      className={" rounded-xl absolute bottom-0 "}
                      src={"/images/EVENT/david.png"}
                      alt={"test"}
                      height={200}
                      width={200}
                    />
                  </div>
                </div>
                <div className={"grid   bg w-full justify-center"}>
                  <div
                    className={
                      "h-28 relative flex place-items-center  rounded-xl  bg-red-700/40   w-28"
                    }
                  >
                    <Image
                      className={" rounded-xl absolute bottom-0 "}
                      src={"/images/EVENT/griffn.png"}
                      alt={"test"}
                      height={200}
                      width={200}
                    />
                  </div>
                </div>
              </div>
              <h1 className="block text-center lg:text-left mx-2 text-3xl lg:text-7xl lg:max-w-3xl font-bold text-gray-800  relative lg:leading-tight dark:text-white">
                Unlock the Brilliance of World-Class{" "}
                <span className="text-yellow-400" id={"category"}>
                  Developers
                </span>
              </h1>
              <p className="mt-3 text-center mx-4 lg:text-left  text-lg text-gray-800 dark:text-gray-400">
                Gain Exclusive Access to Their Incredible Minds and Skills to
                Build Your Next Big Idea
              </p>

              <div className="mt-7 grid gap-3 w-full lg:justify-start justify-center sm:inline-flex">
                <Link
                  href="/Join"
                  passHref
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                >
                  Be One of the Dragons
                  <svg
                    className="w-2.5 h-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="/Team"
                  passHref
                  className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                >
                  See Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="right w-[100%]  relative opacity-70   h-full overflow-hidden hidden gap-5 justify-center
                md2:flex
                semilarge:gap-2 semilarge:justify-between"
        >
          <div className="right flex flex-col h-fit gap-2 -translate-y-10">
            <div className="w-[180px] aspect-[22/30] bg-red-200 rounded-[1.5rem]">
              <p className="p-5 text-xl capitalize font-semibold"></p>
            </div>
            <div className="w-[180px] relative aspect-[22/30] bg-gray-700 rounded-[1.5rem] overflow-hidden">
              <p className="p-5 text-xl capitalize font-semibold">
                Antonio Melé
              </p>
              <Image
                height={600}
                width={600}
                src="/images/EVENT/Antonio_Melé.png"
                alt="hero1"
                className=" absolute bottom-0 "
              />
            </div>
            <div className="w-[180px] aspect-[22/30] bg-blue-500 rounded-[1.5rem]">
              <p className="p-5 capitalize text-xl font-semibold">
                ayatoullah ramzy
              </p>
            </div>
          </div>
          <div className="meddile flex flex-col h-fit gap-2 -translate-y-[10rem]">
            <div className="w-[180px] aspect-[22/30] bg-red-200 rounded-[1.5rem]">
              <p className="p-5 capitalize text-xl font-semibold">
                Kareem Nour
              </p>
              <Image
                height={600}
                width={600}
                src="/images/EVENT/KareemNour.png"
                alt="hero1"
                className="  bottom-0 "
              />
            </div>
            <div className="w-[180px] aspect-[22/30] bg-green-500 overflow-hidden rounded-[1.5rem]">
              <p className="p-5 text-xl capitalize font-semibold">
                David Griffiths
              </p>
              <Image
                height={600}
                width={600}
                src="/images/EVENT/david.png"
                alt="hero1"
                className="  bottom-0 "
              />
            </div>
            <div className="w-[180px] aspect-[22/30] bg-gray-700 rounded-[1.5rem] overflow-hidden">
              <p className="p-5 text-xl capitalize font-semibold">
                Dario lencina
              </p>
              <Image
                height={600}
                width={600}
                src="/images/EVENT/2.png"
                alt="hero1"
                className=" absolute bottom-0 "
              />
            </div>
          </div>
          <div className="left flex flex-col h-fit gap-2 -translate-y-12 ">
            <div className="w-[180px] aspect-[22/30] bg-gray-700 rounded-[1.5rem] overflow-hidden">
              <Image
                height={600}
                width={600}
                src="/images/EVENT/griffn.png"
                alt="hero1"
                className=" absolute bottom-0 "
              />
            </div>
            <div className="w-[180px] relative  overflow-hidden aspect-[22/30] bg-blue-200 rounded-[1.5rem]">
              <p className="p-5 text-xl capitalize font-semibold">
                Griffin Obeid
              </p>
              <Image
                height={600}
                width={600}
                src="/images/EVENT/griffn.png"
                alt="hero1"
                className="  bottom-0 absolute "
              />
            </div>
            <div className="w-[180px] relative aspect-[22/30] bg-red-500 rounded-[1.5rem]">
              <p className="p-5 text-xl capitalize font-semibold">
                eslam khder
              </p>
              <Image
                height={600}
                width={600}
                src="/images/EVENT/1.png"
                alt="hero1"
                className="  bottom-0 absolute "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
