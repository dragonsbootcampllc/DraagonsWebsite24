import React from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/JopReady/Hero";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import CallToActionComponent from "@/components/JopReady/CallToActionComponent";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";


const BootcampPage = () => {
  const content = [
    {
      title: "Supportive Community",
      description:
        "Join a community where every step forward is celebrated. Our vibrant and supportive network of fellow students is here to lift you up and help you grow, fostering an environment where learning is a shared, uplifting journey.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <div className="h-full w-full flex items-center justify-center text-white">
            <Image
              src="/images/Bootcamp/1.png"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Strong Industry Connections",
      description:
        "Forge invaluable connections with top companies and industry leaders, opening doors to a world of opportunities. Our robust network paves the way for your career advancement, ensuring you stand out from the crowd.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/images/Bootcamp/5.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Learn What Companies Are Looking For",
      description:
        "Dive into an intensive learning experience that places you at the heart of the developer’s world. Work on real projects that mimic the industry environment, equipping you with the skills and insights companies are actively seeking.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/images/Bootcamp/11.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Become a Thought Leader",
      description:
        "Cultivate your unique voice and refine your communication skills to share profound insights. Establish yourself as a thought leader, respected and recognized as an expert in your field.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/images/Bootcamp/13.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Level Up, Get Seen",
      description:
        "Track your progress seamlessly and showcase your achievements to our trusted partners, business owners, and recruiters. We ensure your talents are visible, making job hunting smoother and more efficient.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/images/Bootcamp/21.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  const programe = [
    {
      title: "Students",
      description:
        "If you are a computer science graduate or someone with a strong IT background, Dragons Tech Bootcamp can help you sharpen your skills and prepare for a successful career in software development. Our intensive program is designed to bridge the gap between academic knowledge and industry requirements, ensuring you're ready to tackle real-world challenges.",
    },
    {
      title: "Career Shifters",
      description:
        "Looking to make a complete switch to the software development track from another field? Our Bootcamp is perfect for those wanting to transition into the tech industry. We provide comprehensive training and support to help you acquire the necessary skills and confidence to thrive in a new, exciting career.",
    },
    {
      title: "Upskilling Developers",
      description: "Already a developer but looking to boost your skills? Our advanced courses are tailored to help you stay ahead in the rapidly evolving tech landscape. Learn the latest technologies, improve your coding efficiency, and enhance your problem-solving capabilities with our expert-led sessions.",
    },
    {
      title: "Tech Entrepreneurs",
      description:
        "As a tech entrepreneur, understanding the intricacies of technology is crucial for your business success. Our Bootcamp provides you with a solid foundation in software development, enabling you to integrate tech solutions into your business strategy better and bridge the gap between tech and other fields you excel in.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white flex flex-col items-center px-4 md:px-8">
      <div className="text-center flex flex-col gap-10 max-w-5xl w-full">
        <Hero 
          News={{
            link: "https://www.linkedin.com/company/dragonslearn/",
            content: "Dragons Learn is now on LinkedIn! Follow us for the latest updates."
          }}
          subHeadingText="Transform Your Career with"
          heroHighlightedText=" Dragons Bootcamp"
          heroHeading="Join us and take the first step towards transforming your career!"
          Disctiption="Don't miss out on the opportunity to be part of a program that adapts to your unique needs and goals."
          
        />
        <div className="mt-10" id="ElevateYourSkills">
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
          <div className="px-10">
            <StickyScroll content={content} />
          </div>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSf6yGyk40x0nNQwP_XSP_dFjiS4I6_7UoAzJDGRunl-NGRUsQ/viewform?usp=pp_url"
            target="_blank"
          >
            <div className="flex justify-center mt-8">
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
        </div>

        <div className="my-20" id="WhyOurBootcamp">
          <h1 className="lg:text-6xl text-3xl font-bold mb-6 mt-10">
            Why You Should Take Dragons Tech Bootcamp
          </h1>
          <p className="text-lg flex px-2 text-center text-purple-300/50 justify-center ">
            What Are Our Programs For?
          </p>
          <div className="h-[20rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={programe}
              direction="right"
              speed="slow"
            />
          </div>
        </div>

        <div>
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              Your dream job <br /> starts here
            </motion.h1>
          </LampContainer>
        </div>


        <div className="flex flex-col gap-10">
          <div className="grid my-20 place-items-center   ">
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
              your career in the field you love, so what are you waiting for ?
            </p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSf6yGyk40x0nNQwP_XSP_dFjiS4I6_7UoAzJDGRunl-NGRUsQ/viewform?usp=pp_url"
              target="_blank"
            >
              <div className="flex justify-center mt-8" id="EnrollNow">
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
