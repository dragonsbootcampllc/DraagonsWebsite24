"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Talent from "@/pages/json/Team2023.json";
import JetBrains from '@/../public/Brands/JetBreans.svg';
import LogoVercel from '@/../public/Brands/Vercel.svg';
import Logoudacity from '@/../public/Brands/WP.svg';
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMedal } from "react-icons/fa";
import Link from "next/link";
import ButtonComponent from "./Micros/Button";
import ButtonLite from "./Micros/ButtonLite";

export function BentoGridThirdDemo() {
  return (
    <div className='min-h-screen grid place-items-center px-4 md:px-8'>
      <div
        style={{ fontFamily: "interV" }}
        className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-4xl z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
        <h1>
          Why You Should Take Dragons
          <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
            Tech Bootcamp
          </span>
        </h1>
      </div>
      <BentoGrid className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("p-4 md:p-6 lg:p-8", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
      <div className='cta rounded-xl my-12 flex flex-col md:flex-row gap-5'>
        <Link href='/Pricing' passHref>
          <div className='h-16 w-full md:w-64'>
            <ButtonComponent CTAtext='Apply Now' />
          </div>
        </Link>
        <div className='h-16 w-full md:w-64'>
          <ButtonLite CTAtext='Book a 1:1 Call' />
        </div>
      </div>
    </div>
  );
}

const Skeleton = () => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-black/[0.2] border border-transparent border-white/[0.2] bg-black'></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial='initial'
      whileHover='animate'
      className='flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2'>
      <motion.div
        variants={variants}
        className='flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 bg-black'>
        <Image
          alt='avatar'
          width={100}
          height={100}
          src={Talent[8].personal_photo}
          className='rounded-full h-6 w-6'
        />
        <div className='w-full text-xs p-1 min-h-4 px-2 rounded-full bg-neutral-900'>
          How can I install NPM?
        </div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className='flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-black'>
        <div className='w-full p-1 px-2 min-h-4 text-xs rounded-full bg-neutral-900'>
          Just use npm install
        </div>
        <Image
          width={100}
          height={100}
          alt='avatar'
          src={Talent[13].personal_photo}
          className='h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0'
        />
      </motion.div>
      <motion.div
        variants={variants}
        className='flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 bg-black'>
        <Image
          width={100}
          height={100}
          alt='avatar'
          src={Talent[8].personal_photo}
          className='rounded-full h-6 w-6'
        />
        <div className='w-full text-xs p-1 px-2 min-h-4 rounded-full bg-neutral-900'>
          WOW, it is that simple?
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: { duration: 0.2 },
    },
    hover: {
      width: ["0%", "100%"],
      transition: { duration: 2 },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial='initial'
      animate='animate'
      whileHover='hover'
      className='flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2'>
      {arr.map((_, i) => (
        <div className='relative' key={i}>
          <motion.div
            key={"skeleton-two" + i}
            variants={variants}
            style={{
              maxWidth: Math.random() * (100 - 40) + 40 + "%",
            }}
            className='flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 bg-black w-full h-4'></motion.div>
          <Image
            alt='avatar'
            width={100}
            height={100}
            src={Talent[i].personal_photo}
            className='rounded-full z-10 top-0 absolute h-6 w-6'
          />
        </div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };
  return (
    <motion.div
      initial='initial'
      animate='animate'
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className='grid place-items-center flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] rounded-3xl flex-col space-y-2'
      style={{
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div className='flex flex-col h-full justify-items-center '>
        <h1 className='text-xl sm:text-2xl text-white font-bold text-center'>
          Top Talent of 2023
        </h1>
        <Image
          alt='avatar'
          width={100}
          height={100}
          src={Talent[24].personal_photo}
          className='rounded-3xl h-16 w-16 mx-auto mt-4'
        />
        <div className='flex gap-1 justify-center'>
          <span>
            <FaMedal />
          </span>
          <span className='text-white text-center'>{Talent[24].Name}</span>
          <span className='flex justify-center'>
            <FaMedal />
          </span>
        </div>
      </div>
      <motion.div className='h-full w-full rounded-lg'></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };
  const second = {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0 },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col md:flex-row md:space-x-2">
      <motion.div
        variants={first}
        className="h-full w-full md:w-1/3 rounded-2xl p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center mb-2 md:mb-0">
        <Image
          src={JetBrains.src}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full bg-white p-1 h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Junior Software Engineer @ Jetbrains
        </p>
        <p className="border border-red-500 bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Not suitable
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-full md:w-1/3 rounded-2xl p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center mb-2 md:mb-0">
        <Image
          src={Logoudacity.src}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full ring-2 h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Software Engineering intern @ wp Engine
        </p>
        <p className="border border-green-500 bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Suitable for you
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-full md:w-1/3 rounded-2xl p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center">
        <Image
          src={LogoVercel.src}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full ring-2 p-1 h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Software Engineering intern @ Vercel
        </p>
        <p className="border border-orange-500 bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          You can apply
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2">
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-white/[0.2] p-2 items-start space-x-2 bg-black">
        <Image
          src={Talent[34].personal_photo}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          I have been learning PHP for 2 years now and I am still not good at it.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-black">
        <p className="text-xs text-neutral-500">
          Your roadmap is: 1- ....
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Supportive Community",
    description: (
      <span className="text-sm">
        Join a diverse community of learners, mentors, and industry experts. Get the support you need to succeed!
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    cta: "Join Now",
  },
  {
    title: "Compete with Top Talent",
    description: (
      <span className="text-sm">
        Compete with top talent in the Dragons Community. Stand out from the crowd and get rewarded with cash prizes.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    cta: "Switch Now",
  },
  {
    title: "Top 3% of Talent",
    description: (
      <span className="text-sm">
        Challenge yourself and be part of the top 3% of talent. Get access to exclusive opportunities and resources.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    cta: "Upgrade Now",
  },
  {
    title: "AI Powered Job Matching",
    description: (
      <span className="text-sm">
        Get matched with the right job opportunities based on your skills and interests. Let AI do the work for you!
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    cta: "Empower Now",
  },
  {
    title: "AI Powered Learning Pathways",
    description: (
      <span className="text-sm">
        Get personalized learning pathways based on your goals and interests. Learn at your own pace and achieve your dreams!
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    cta: "Enroll Today",
  },
];

export default BentoGridThirdDemo;