import React from "react";
import Image from "next/image";
import Link from "next/link";

const BootcampPage = () => {
  // Define an array of section objects
  const bootcampSections = [
    {
      title: "Supportive Community",
      description:
        "Our supportive community lifts you up, not out. Learn & grow with fellow students.",
      imageSrc: "/images/Bootcamp/1.png",
    },
    {
      title: "Strong Industry Connections",
      description:
        "Network with top companies and industry leaders to get a head start.",
      imageSrc: "/images/Bootcamp/5.png",
    },
    {
      title: "Learn what companies are looking for",
      description:
        "Intensive learning immerses you in the developer's zone, allowing you to work on real projects that simulate the working environment.",
      imageSrc: "/images/Bootcamp/11.png",
    },
    {
      title: "Become a Thought Leader",
      description:
        "Develop Your Voice and Sharpen your communication skills to share insights and establish yourself as an expert in your field.",
      imageSrc: "/images/Bootcamp/13.png",
    },
    {
      title: "Level Up, Get Seen",
      description:
        "we track everything and share all your progress with our trusted partners, business owners, and recruiters for easy hunting.",
      imageSrc: "/images/Bootcamp/21.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white flex flex-col items-center py-10 px-4 md:px-8">
      <div className="text-center flex flex-col gap-10 max-w-5xl mt-12 md:mt-28 w-full">
        <div className="my-10 max-md:mt-20">
          <h1 className="lg:text-6xl text-3xl font-bold mb-6">
            Elevate Your Skills with Our Intensive{" "}
            <span className="text-[#facc15]">6-Month</span> Tech Bootcamp
          </h1>
          <p className="text-lg flex px-2 text-center text-purple-300/50 justify-center ">
            Master key technologies and leadership skills in our intensive
            Bootcamp, designed for rapid, real-world success.
          </p>
        </div>

        <div className="flex flex-col gap-10 mt-8">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSf6yGyk40x0nNQwP_XSP_dFjiS4I6_7UoAzJDGRunl-NGRUsQ/viewform?usp=pp_url"
            target="_blank"
          >
            <div className="flex justify-center">
              <div className="group cursor-pointer select-none inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md">
                <p className="mr-2  inline-block text-white text-sm">
                  6 Month Bootcamp (Early access)
                </p>
                <span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                  <svg
                    className="w-2.5 h-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
          {bootcampSections.map((section, index) => (
            <div
              key={index}
              className="p-6 bg-[#0b081b] shadow-lg rounded-lg flex flex-col justify-center items-center"
            >
              <h2 className="text-4xl max-md:text-2xl font-semibold mb-4">
                {section.title}
              </h2>
              <p className="text-center max-w-[700px] text-purple-300/80">
                {section.description}
              </p>
              <Image
                src={section.imageSrc}
                alt={section.title}
                width={600}
                height={400}
                className="mt-4 rounded-lg"
              />
            </div>
          ))}
          <div className="grid pt-40 mb-28 place-items-center   ">
            <div
              style={{ fontFamily: "interV" }}
              className="text-6xl  content-center  max-w-4xl text-center md:text-7xl   z-10 flex justify-center m-auto relative  mb-3 text-gray-200  font-semibold	"
            >
              <h1>
                Join Dragons
                <span className={" text-yellow-400 uppercase "}> now</span>
                <span className={"  "}> and</span>
                <span className={"  "}> Build</span>
                <span className={"  "}> your career !</span>
              </h1>
            </div>
            <p
              style={{ fontFamily: "interV" }}
              className="text-lg flex pt-6 relative z-10 text-purple-300/50 justify-center text-center m-auto max-w-4xl"
            >
              By joining Dragons you will be able to work with a team and build
              your career in the field you love, The best part is that it&#39;s
              free , so what are you waiting for ?
            </p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSf6yGyk40x0nNQwP_XSP_dFjiS4I6_7UoAzJDGRunl-NGRUsQ/viewform?usp=pp_url"
              target="_blank"
            >
              <div className="flex justify-center mt-8">
                <div className="group cursor-pointer select-none inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md">
                  <p className="mr-2  inline-block text-white text-sm">
                    Enroll Now
                  </p>
                  <span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                    <svg
                      className="w-2.5 h-2.5"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootcampPage;
