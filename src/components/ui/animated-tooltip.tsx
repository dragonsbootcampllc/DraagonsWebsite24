"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import ButtonComponent from "../Micros/Button";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
    Link_profile_Linkedin?: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className='-mr-4  relative group'
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence mode='popLayout'>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: 'nowrap',
                }}
                className='absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2'>
                <div className='absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px ' />
                <div className='absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px ' />
                <div className='font-bold text-white relative z-30 text-base'>
                  {item.name}
                </div>
                <div className='text-white text-xs'>{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Link href={item.Link_profile_Linkedin || '/pricing'}>
            <Image
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className='object-cover !m-0 !p-0 object-top rounded-full h-20 w-20 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500'
            />
          </Link>
        </div>
      ))}
      <div
        className='-mr-4  relative group'
        onMouseEnter={() => setHoveredIndex(items.length + 1)}
        onMouseLeave={() => setHoveredIndex(null)}>
        <AnimatePresence mode='popLayout'>
          {hoveredIndex === items.length + 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: 'nowrap',
              }}
              className='absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-3xl bg-black z-50 shadow-xl px-4 py-2'>
              <div className='absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px ' />
              <div className='absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px ' />
              <div className='font-bold text-white relative z-30 text-base my-4'>
                <span className='max-w-[200px] capitalize relative text-2xl '>
                  Join more than 1200+ Students
                </span>
              </div>
              <div className='text-white  h-12 w-32 '>
                <ButtonComponent CTAtext='Apply Now' />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className='object-cover place-items-center grid bg-yellow-300 text-purple-900  font-extrabold   object-top rounded-full h-20 w-20 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500'>
          <span className=' p-0 m-0 text-lg'>
            1200+
          </span>
        </div>
      </div>
    </>
  );
};
