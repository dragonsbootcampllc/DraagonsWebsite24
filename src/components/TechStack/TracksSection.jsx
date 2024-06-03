import Image from "next/image";
import Whatwedosec from "../WhatWeDo/Whatwedosec";

export const TracksSection = () => {
  return (
    <>
      <div className={"w-full flex justify-center"}>
        <div>
          <div className="mt-28 mb-6 p-2 flex justify-center ">
            <div>
              <div className="flex active:scale-95 duration-200  gap-1 text-md bg-purple-400/10 shadow-gray-200/20 shadow-inner px-4  py-2 rounded-full min-w-[30px]">
                <div className="grid place-content-center ">
                  <Image
                    style={{ fontFamily: "interV" }}
                    src="/SVG/stars.svg"
                    alt="f"
                    width={30}
                    height={30}
                  />
                </div>
                <span className="text-purple-400/70 hover:underline duration-300  grid place-content-center">
                  Find your passion with us{" "}
                </span>
              </div>
            </div>
          </div>

          <div
            style={{ fontFamily: "interV" }}
            className="text-5xl  content-center  max-w-4xl text-center md:text-7xl   z-10 flex justify-center m-auto relative  mb-3 text-gray-200  font-semibold	"
          >
            <h1>
              {" "}
              Our Bootcamp Prepare You To{" "}
              <span className={"text-yellow-400 "}>Succeed In Tech.</span>
            </h1>
          </div>

          <p
            style={{ fontFamily: "interV" }}
            className="text-lg text-center flex mb-28 relative z-10 text-purple-300/50 justify-center m-auto"
          >
            Technical tracks will push you to learn, Non-technical tracks Will
            simulates the real work environment.
          </p>

          <Whatwedosec
            hrefWebdev="/Services/Webdevelopment"
            hrefUiux="Services/UiUXDesign"
            hrefAppdev="/Services/Appdevelopment"
            hrefHiredev="Hire"
          />
        </div>
      </div>
    </>
  );
};

export default TracksSection;
