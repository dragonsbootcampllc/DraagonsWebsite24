import { React } from "react";
import Image from "next/image";

import Lottie from "lottie-react";
import celebrate from "../public/JSON/user/60051-shapes-v1.json";
import celebrate2 from "../public/JSON/user/60061-shapes-gradient";
import { useRouter } from "next/router";
import { Loading } from "@nextui-org/react";
import Link from "next/link";

function SectionOneAnnounce(props) {
  let router = useRouter();
  let distnationPartner = props.partner;
  return (
    <div
      style={{ fontFamily: "Poppins, sans-serif" }}
      className={
        " max-w-[1400px] justify-center mx-auto grid grid-row-2 lg:grid-cols-5 text-gray-300 "
      }
    >
      <div className="relative col-span-3 ">
        <div className="sm:ml-7  text-center  md:text-left max-w-3xl mx-auto pt-32 sm:pt-60 md:pt-96 lg:pt-60">
          <h1
            style={{ fontFamily: "Poppins-Bold" }}
            className="select-none  text-slate-200 tracking-tight  leading-loose
 

 font-extrabold text-4xl sm:text-5xl lg:text-6xl  text-center lg:text-left "
          >
            {props.MainText}
            <span className=" text-red-500  font-extrabold  text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center  lg:text-left ">
              .
            </span>
          </h1>
          <p
            style={{ fontFamily: "Poppins-Bold", width: "400" }}
            className="mt-6 font-medium  tracking-tight text-md sm:text-xl  text-center  lg:text-left  max-w-3xl mx-7 text-slate-400"
          >
            {props.MainPTexe}
          </p>
          <p
            style={{ fontFamily: "Poppins-Bold", width: "400" }}
            className="mt-6 font-extralight	  tracking-tight text-sm sm:text-lg  text-center  lg:text-left  max-w-3xl mx-7 text-slate-400/60"
          >
            {props.MainPTexe2}
          </p>

          <div className="mt-6  mx-12 sm:mx-0   sm:mt-10  sm:flex justify-center  md:justify-center lg:justify-start  sm:space-x-6 text-sm">
            <Link
              legacyBehavior
              aria-label="Get Started"
              href={props.action}
              passHref
            >
              <div className="select-none max-w-sm font-bold box-decoration-slice shadow-lg hover:shadow-red-500/50     focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 duration-100 focus:ring-offset-slate-800   h-12 px-6 rounded-lg w-full flex items-center text-white justify-center sm:w-auto bg-red-500  hover:bg-red-400">
                {props.ActionButton}
              </div>
            </Link>
            <Link
              legacyBehavior
              aria-label="Our Services"
              href={props.action2}
              passHref
            >
              <div className="select-none font-bold max-w-sm  bg-white mt-4 sm:mt-0 shadow-md  hover:shadow-red-500/50  ring-2  ring-slate-900 hover:bg-gray-300 focus:outline-none focus:ring-2 opacity-90  focus:ring-offset-2 active:scale-95 duration-100 0  text-gray-900  h-12 px-3  sm:px-16 rounded-lg w-full flex items-center justify-center sm:w-auto highlight-white/20 ">
                {" "}
                {props.ActionButton2}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className=" col-span-2  lg:grid place-items-center pl-10 text-white relative hidden ">
        <div className="mt-36 z-20  relative"></div>{" "}
        <div className="absolute -mt-10 ">
          <Loading className=" bounce-2 box3 " size="md" />
        </div>{" "}
        <div className="h-[530px] width-[630px]  ">
          <div className="grid grid-cols-2	gap-1 duration-700 ">
            <div className="h-56 w-56 relative font-bold  text-lg	duration-300 ">
              {" "}
              <div className="">
                <Lottie animationData={celebrate} />{" "}
              </div>
              <div className="top-0 hover:scale-110 z-20   duration-700 absolute">
                <Image
                  className="relative z-20  bounce-2 box2  "
                  src={"/images/EVENT/1.png"}
                  alt="Header Image"
                  height="240"
                  width="240"
                  placeholder="blur"
                  blurDataURL={"/images/EVENT/1.png"}
                  priority
                />
                <div className="absolute bg-black px-2  left-[5%] text-center mx-auto bottom-[5%] z-20">
                  {" "}
                  <h1 className="">Eslam Khder</h1>
                </div>
              </div>
            </div>
            <div className="h-56 w-56 relative font-bold  text-lg	duration-300 ">
              {" "}
              <div className="">
                <Lottie animationData={celebrate} />{" "}
              </div>
              <div className="top-0 hover:scale-110  duration-700 absolute">
                <Image
                  className="relative  bounce-2 box2  "
                  src={"/images/EVENT/2.png"}
                  alt="Header Image"
                  height="240"
                  width="240"
                  placeholder="blur"
                  blurDataURL={"/images/EVENT/2.png"}
                  priority
                />
                <div className="absolute bg-black px-2  left-[5%] text-center mx-auto bottom-[5%] z-20">
                  {" "}
                  <h1 className="">Dario Lencina</h1>
                </div>
              </div>
            </div>
            <div className="h-56 z-20 w-56 overflow-hidden relative  font-bold  text-lg	duration-300 ">
              {" "}
              <div className="">
                <Lottie animationData={celebrate} />{" "}
              </div>
              <div className="top-0 hover:scale-110  duration-700 overflow-hidden absolute">
                <Image
                  className="relative  bounce-2 box2  "
                  src={"/images/EVENT/3.png"}
                  alt="Header Image"
                  height="240"
                  width="240"
                  placeholder="blur"
                  blurDataURL={"/images/EVENT/3.png"}
                  priority
                />
                <div className="absolute bg-black px-2  left-[5%] text-center mx-auto bottom-[5%] z-20">
                  {" "}
                  <h1 className="">Ayatoullah Ramzy</h1>
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                router.push(distnationPartner);
              }}
              className="h-56 w-56 relative backdrop-blur-xl bg-white/30 cursor-pointer	 opacity-90 hover:opacity-50 duration-500"
            >
              {" "}
              <div
                className="backdrop-blur-xl saturate-50

bg-white/30 p-2 hover:p-12 duration-500"
              >
                <Lottie animationData={celebrate2} />{" "}
                <div className=" top-[40%] text-center flex justify-center absolute ">
                  <h1 className=" ml-2 font-bold text-2xl drop-shadow-2xl bg-gray-900 text-amber-400 select-none  ">
                    Be A Speaker
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOneAnnounce;
