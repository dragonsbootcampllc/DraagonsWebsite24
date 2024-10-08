"use client";
import Link from "next/link";
import React from "react";

import DragonsLogo3D from "@/../public/Identity/hero2023Glass.png";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

import ButtonComponent from "../Micros/Button";
import ButtonLiteComponent from "../Micros/ButtonLite";
import Image from "next/image";

// Sample data for the headline and button text
interface CanvaRevealProps {
 ctaHeadline: string ;
 heroHighlightedText: string ;
 ctaApplyText: string;
 ctaBookCallText: string;
 C1:string;
 C2:string;
 C3:string;
}

const CanvaReveal: React.FC<CanvaRevealProps> =  ({ctaHeadline,heroHighlightedText,ctaApplyText,ctaBookCallText,C1,C2,C3}) => {
  return (
    <div className='py-12 text-white ' id="CallToActionComponent">
      <div className='container mx-auto max-w-[1400px] flex flex-col gap-6 items-center text-center'>
      <div className='w-full flex justify-center'>
        <div className='bg-purple-700 w-[116px]  h-[116px] p-2 shadow-2xl shadow-blue-700/40 rounded-[2rem] '>
          
        </div>{" "}
      </div>

        <h2 className='text-4xl md:text-6xl font-semibold md:max-w-[1000px]'>  {ctaHeadline}</h2>
        <div
          style={{ fontFamily: "interV" }}
          className='text-6xl content-center  max-w-4xl text-center md:text-7xl z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
                
                  <p
              style={{ fontFamily: "interV" }}
              className='text-white/50 text-lg md:text-base container mx-auto flex flex-col gap-7 justify-center text-center max-w-[800px] pt-5'>
             {heroHighlightedText}
            </p>
        </div>
        <div className=' max-w-[1400px]'>
          <div className='mt-8 flex gap-4 justify-center'>
            <Link href='/Pricing' passHref>
              <div className='h-16 w-64'>
                <ButtonComponent CTAtext={ctaApplyText} />
              </div>
            </Link>
            <Link href='/Pricing' passHref>
              <div className='h-16 w-64'>
                <ButtonLiteComponent CTAtext={ctaBookCallText} />
              </div>
            </Link>
          </div>

          <div className='py-20 flex flex-col lg:flex-row items-center justify-center   w-full gap-4 mx-auto px-8'>
            <Card title={C1} icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName='bg-emerald-900'
              />
            </Card>
            
            <Card title={C2} icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName='bg-sky-600'
                colors={[[125, 211, 252]]}
              />
            </Card>
            <Card
              title={C3}
              icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName='bg-black'
                colors={[
                  [236, 72, 153],
                  [232, 121, 249],
                ]}
                dotSize={2}
              />
              {/* Radial gradient for the cute fade */}
              <div className='absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90' />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='border group/canvas-card flex items-center justify-center overflow-hidden border-white/[0.2] rounded-3xl  max-w-sm w-full mx-auto p-4  h-[30rem] relative'>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='h-full w-full absolute inset-0'>
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className='relative z-20'>
        <div className='text-center relative group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center'>
          {icon}
        </div>
        <h2 className='dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200'>
          {title}
        </h2>
      </div>
      <div className=' absolute text-xs font-mono opacity-50  bottom-2'>
        {" "}
        Hover to Reveal
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <Image
      src={DragonsLogo3D}
      className='h-50 w-50  absolute text-white group-hover/canvas-card:text-white '
      alt='Dragons Bootcamp'
    />
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  );
};
export default CanvaReveal;
