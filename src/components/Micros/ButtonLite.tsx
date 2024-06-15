import React from "react";
import { Button } from "@nextui-org/react";

function ButtonComponent({ CTAtext }) {
  return (
    <button className='relative group cursor-pointer  shadow-2xl rounded-full p-px text-white font-semibold leading-6 inline-block w-full h-full'>
      <span className='absolute inset-0 overflow-hidden rounded-full'>
        <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100  rotate-180' />
      </span>
      <div className='relative flex items-center justify-center h-full w-full z-10 rounded-full py-2 px-4 ring-1 ring-white/10 text-base sm:text-lg md:text-xl'>
        <span>{CTAtext}</span>
      </div>
      <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] animate-pulse bg-gradient-to-r from-emerald-400/0 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40' />
    </button>
  );
}

export default ButtonComponent;


      