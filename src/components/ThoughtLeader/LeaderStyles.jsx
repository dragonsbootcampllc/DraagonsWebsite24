"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function LeaderStyles({ content }) {
  return (
    <div className='h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-white capitalize text-4xl font-semibold max-w-xs sm:max-w-none md:text-6xl leading-tight justify-center items-center'>
          Lead with Confidence
        </h1>
        <p className='text-white mt-6 md:text-xl max-w-prose text-center'>
          Dragons BootCamp equips you with versatile leadership styles to
          effectively lead diverse teams and projects.
        </p>
      </div>

      <InfiniteMovingCards
        items={content.map((item) => ({
          title: item.title.substring(0, 150),
          description: item.quote,
        }))}
        direction='right'
        speed='slow'
      />
    </div>
  );
}
