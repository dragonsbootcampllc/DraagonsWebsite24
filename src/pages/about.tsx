import Hero from "@/components/JopReady/Hero";
import Image from "next/image";
import React from "react";

export default function AboutUsPage(props: any) {
  const HeroObj = {
    News: {
      id: 1,
      date: "2020-01-01",
      content: "New Season just landed💯",
      link: "/blog/news",
    },
    subHeadingText: " With Dragons Bootcamp in ",
    heroHighlightedText: "Only 6 Month",
    heroHeading: "Become Job Ready ",
    Disctiption: "Join Dragons Bootcamp and become job-ready in just 6 months. Gain essential skills and hands-on experience for a successful career",
  };
  return (
    <div id="aboutus" className="relative w-full">
         <Hero
              News={HeroObj.News}
              subHeadingText={HeroObj.subHeadingText}
              heroHighlightedText={HeroObj.heroHighlightedText}
              heroHeading={HeroObj.heroHeading}
              Disctiption={HeroObj.Disctiption}
      />
      <div className="flex justify-center flex-col items-center w-screen lg:mt-56 md:mt-28  mt-20">
        <div className="flex sm:p-4 p-6 items-center justify-center flex-col gap-3 my-24 sm:w-4/5 md:w-4/5 lg:w-3/5">
          <h1 className="md:text-2xl text-xl md:text-center text-start font-medium text-purple-800 uppercase">
            {props.mainHeader}
          </h1>
          <h2 className="md:text-5xl text-3xl font-black md:text-center text-start py-3 md:px-10">
            {props.subHeader}
          </h2>
          <p className="md:text-center text-start md:w-3/5 text-base font-normal">
            {props.description}
          </p>
        </div>

        <div className="flex sm:p-4 p-6 items-center justify-center flex-col gap-3 md:my-24 sm:w-4/5 md:w-4/5 lg:w-3/5">
          <h1 className="md:text-xl text-lg text-start font-medium text-purple-800 uppercase">
            {props.story.mainHeader}
          </h1>
          <div className="flex py-5 md:flex-row flex-col gap-3">
            <div className="flex flex-col md:w-1/2 gap-3">
              <h2 className="md:text-3xl text-2xl font-black text-start py-3">
                {props.story.mainPart.header}
              </h2>
              <p className="text-start text-base font-normal">
                {props.story.mainPart.paragraph}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center md:w-1/2">
              <Image
                src={props.story.mainPart.img}
                alt="founders"
                className="md:w-10/12 w-full rounded-lg"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="flex pt-16 md:flex-row flex-col-reverse gap-3">
            <div className="flex flex-col justify-center items-center h-full md:w-2/3">
              <Image
                src={props.story.secondPart.img}
                alt="founders"
                className="md:w-11/12 w-full h-full rounded-lg"
                width={100}
                height={100}
              />
            </div>
            <div className="md:w-1/3 flex md:py-16 justify-center items-center">
              <p className="text-start text-base font-normal">
                {props.story.secondPart.paragraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AboutUsPage.defaultProps = {
  mainHeader: "OUR mission",
  subHeader: "To bring real-life interactions to the virtual world seamlessly",
  description:
    "The increasingly virtual, remote first world, needs an infrastructure provider that allows these experiences to happen seamlessly. 100ms' best-in-class quality and ease of use are fueling this revolution",

  story: {
    mainHeader: "OUR story",
    mainPart: {
      header: "Making video work",
      paragraph:
        "Kshitij started working on live video way back in 2000s when it wasn't really a thing. He built video solutions for the first Iphone & 3G networks, and then joined Facebook to build the video infrastructure for FB Live. After flying back to India, he joined as VP engineering at Disney+Hotstar, where he built the world's largest live streaming platform with his colleagues - Sarvesh and Aniket.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2KdfZJkryOCFni4-CUywBU_aFnRntkbniw&s",
    },
    secondPart: {
      header: "Building 100ms",
      paragraph:
        "In 2020, they decided to build 100ms to solve the problem of building real-time video applications. They wanted to make it easy for developers to build video applications without worrying about the underlying infrastructure. They have built a team of passionate engineers and designers who are working hard to make this vision a reality.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2KdfZJkryOCFni4-CUywBU_aFnRntkbniw&s",
    },
  },
};
