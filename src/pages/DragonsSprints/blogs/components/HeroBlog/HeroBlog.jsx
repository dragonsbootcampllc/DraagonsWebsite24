import React from "react";
import Link from "next/link";
import Image from "next/image";

function HeroBlog() {
  return (
    <div className={"h-[950px pt-14 bg-gray-900/[0.1]"}>
      <div className="max-w-[85rem] mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2  gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1
              style={{ fontFamily: "interV" }}
              className="block text-4xl uppercase font-extrabold text-center  md:text-left  text-gray-800 sm:text-5xl lg:text-7xl lg:leading-tight dark:text-white"
            >
              Move Fast With Reading Our
            </h1>
            <div
              className={
                "flex gap-1 justify-center  md:justify-start  place-items-center pt-2 lg:pt-0 select-none"
              }
            >
              <div
                className={
                  "w-32 flex relative h-[70px] border-2 border-amber-50  rounded-full "
                }
              >
                <div>
                  <h1
                    className={
                      "text-gray-50/90 font-thin text-xl justify-center place-items-center px-3 flex  w-full h-full  "
                    }
                  >
                    {" "}
                    Tech
                  </h1>
                </div>
                <div
                  className={
                    "bg-yellow-400  h-[56px] absolute right-[7px] top-[7px] w-14 rounded-full p-3 rotate-90"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgb(88 28 135 / 0.9)"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M3.41 2H16V0H1a1 1 0 0 0-1 1v16h2V3.41l28.29 28.3 1.41-1.41z"
                      data-name="7-Arrow Up"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-yellow-400 uppercase block text-4xl  font-extrabold sm:text-5xl lg:text-7xl lg:leading-tight ">
                {" "}
                Blog{" "}
              </span>
            </div>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Join us to read our blog and get the latest news about the
              technology world, and let&apos;s discuss interesting topics
              together.
            </p>

            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Link
                href="/Join"
                passHref
                className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              >
                Want to Write With Us ?
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
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
              <Link
                href="/Blog/News"
                passHref
                className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              >
                Latest Posts
              </Link>
            </div>
          </div>

          <div className="relative ml-4">
            <div className={"relative  "}>
              <Image
                height={800}
                width={700}
                className="w-full rounded-md"
                src="/images/hero-blog.jpg"
                alt="Image Description"
              />
            </div>
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800/40  dark:via-slate-900/0 dark:to-slate-900/0"></div>

            <div className="absolute bottom-0 left-0">
              <svg
                className="w-2/3 ml-auto h-auto text-white dark:text-[#030014] "
                width="630"
                height="451"
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="531"
                  y="352"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="140"
                  y="352"
                  width="106"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="482"
                  y="402"
                  width="64"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="433"
                  y="402"
                  width="63"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="384"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="328"
                  width="50"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="303"
                  width="49"
                  height="58"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="392"
                  width="49"
                  height="59"
                  fill="currentColor"
                />
                <rect
                  x="44"
                  y="402"
                  width="66"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="234"
                  y="402"
                  width="62"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="334"
                  y="303"
                  width="50"
                  height="49"
                  fill="currentColor"
                />
                <rect x="581" width="49" height="49" fill="currentColor" />
                <rect x="581" width="49" height="64" fill="currentColor" />
                <rect
                  x="482"
                  y="123"
                  width="49"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="507"
                  y="124"
                  width="49"
                  height="24"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="49"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBlog;
