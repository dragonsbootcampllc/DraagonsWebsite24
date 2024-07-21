import MinisprintCard from "@/components/Cards/MinisprintCard";
import Hero_2 from "@/components/Hero/Hero_2";
import HeroSlider from "@/VideoPlatformView/HeroSlider";
import CoverImage from "@/../public/images/DragonsSprint-CarrerSprint/theMaze.jpeg";
import expandCoverImage from "@/../public/images/DragonsSprint-CarrerSprint/theMazewide.png";

import React from "react";
const heroObj = {
  News: {
    id: 2,
    date: "2020-01-01",
    content: "New Season just landed💯",
    link: "/blog/news",
  },
  hero_heading: "Master Development with Our Bootcamp",
  sub_heading_text: " ",
  hero_highlighted_text: "Aspiring Developers",
  description:
    "Elevate your coding skills with our comprehensive bootcamp. Learn Python, Gen AI, PostgreSQL, and Django through hands-on projects.",
};

const minisprintData = [
  {
    price: "$30",
    title: "Career Sprint real-world scenarios",
    description:
      "Understand career technical paths, with real-world scenarios and intensive 2 weeks of learning, practice, and mentorship.",
    imageUrl: CoverImage.src,
    expandImage: expandCoverImage.src,
    duration: "2 weeks",
    startDate: "2024-07-20",
    exploreUrl: "CareerSprint",
  },
];

export default function index() {
  return (
    <div className='flex flex-col  relative min-h-screen justify-center items-center mx-auto max-w-[2000px] mb-12'>
      <HeroSlider exploreUrl={minisprintData[0].exploreUrl} />
      <div className='flex justify-center min-h-[400px] items-center flex-wrap w-11/12 gap-12'>
        {minisprintData.length !== 0 ? (
          minisprintData.map((minisprint, i) => (
            <MinisprintCard
              movie={{
                title: "The 14 Day Developer's Quest Career Sprint Challenge",
                duration: "2h 15m",
                description:
                  "Understand career technical paths, with real-world scenarios and intensive 2 weeks of learning, practice, and mentorship.",
                posterImage: CoverImage,
                expandImage: minisprint.expandImage,
              }}
              exploreUrl={minisprint.exploreUrl}
              expandImage={minisprint.expandImage}
            />
          ))
        ) : (
          <div className='flex flex-col items-center justify-center w-full h-[500px] text-center text-5xl font-semibold text-purple-400/50'>
            No courses found
          </div>
        )}
      </div>
    </div>
  );
}
