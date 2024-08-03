"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";


export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <h2 style={{ fontFamily: "interV" }} className="text-center font-semibold my-10 max-w-[800px] mx-auto text-5xl max-md:3xl ">
        We have a lot of events coming up. {" "}
        <span className="text-[#7521bd] place-content-center">Come and meet us!</span>
      </h2>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Tech Conference 2024</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Join industry leaders and tech enthusiasts for a day of insightful talks and networking opportunities.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Startup Pitch Night</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Watch aspiring entrepreneurs pitch their ideas to a panel of seasoned investors.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Community Meetup</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A casual meetup for tech enthusiasts to share ideas, network, and collaborate on projects.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Hackathon 2024</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Compete with the best developers in a 24-hour coding marathon to create innovative solutions.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/Gallery/18.png",

  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/images/Gallery/5.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/images/Gallery/1.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/images/Gallery/2.png",
  },
];
