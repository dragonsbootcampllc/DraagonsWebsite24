import Image from "next/image";
import React from "react";
import Link from "next/link";

function WhatWeDo(props) {
  return (
    <div
      style={{ fontFamily: "Poppins-Bold", width: "400" }}
      className="  max-w-[1400px]  min-h-[600px] max-h-[680px] mx-auto flex  text-red-700 "
    >
      <div className="sm:ml-7 m-auto  align-center justify-center content_bgSec2 text-center sm:text-left max-w-3xl mx-auto pt-16 sm:pt-32  lg:pt-24">
        <h1 className="text-slate-200 tracking-tight select-none  font-extrabold text-4xl sm:text-4xl lg:text-5xl tracking-tighttext-center lg:text-left ">
          {props.MainText}
          <span className=" text-red-500  font-extrabold  text-5xl sm:text-5xl lg:text-6xl tracking-tighttext-center sm:text-left ">
            .
          </span>
        </h1>
        <p
          style={{ fontFamily: "Poppins-Bold", width: "400" }}
          className="mt-6 font-medium mx-2 sm:mx-0 tracking-tight text-lg  text-center sm:text-left max-w-3xl  text-slate-400"
        >
          {props.MainPTexe}

          <Link
            href={"/Hire"}
            className="hover:underline underline-offset-1 select-none"
            passHref
          >
            terms and conditions{" "}
          </Link>
        </p>
        <div className="mt-6  mx-12 sm:mx-0  sm:mt-10 sm:flex  justify-left sm:space-x-6 text-sm">
          <Link legacyBehavior href={props.action} passHref>
            <div className=" box-decoration-slice shadow-lg hover:shadow-red-500/50    focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 duration-100 focus:ring-offset-slate-800  font-semibold h-12 px-6 rounded-lg w-full flex items-center text-white justify-center sm:w-auto bg-red-500  hover:bg-red-400">
              {props.ActionButton}
            </div>
          </Link>
        </div>
      </div>
      <div className="pt-32  hover:scale-95 duration-1000  md:pt-24 pl-10 text-white relative hidden lg:block">
        <Image
          className="relative opacity-40  bounce-2 box2 "
          src={"/Random/surr-666.png"}
          alt="Event Image"
          height="530"
          width="730"
        />
      </div>
    </div>
  );
}

export default WhatWeDo;
