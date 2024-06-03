import Image from "next/image";
import Link from "next/link";

const HeadData = {
  badge: "Training Service Section",
  title_1: "Empower Your ",
  title_span: "Tech Career",
  title_2: " with Our Training Programs",
  description:
    "Select a program that aligns with your goals. Whether you're a Beginner or looking to join our intensive six-month Bootcamp, we offer a variety of options tailored to your needs.",
};

const CardsData = [
  {
    label: "Comming Soon",
    isDisabled: true,
    title: "Build Your Base",
    description:
      "be a real software engineer and Master problem-solving, data structures, algorithms, and more to become a proficient software engineer.",
    overlayStyle:
      "radial-gradient(136.22% 75.8% at 50% 27.57%, #171619 0%, rgba(23, 22, 25, 1) 61.62%, rgba(0, 49, 239, 1) 79.17%, rgba(251, 53, 208, 1) 100%)",
  },
  {
    label: "Special",
    isPremier: true,
    title: "From Learner to Leader",
    description:
      "A 6-month comprehensive journey covering all tech essentials, leadership skills, and networking.",
    overlayStyle:
      "radial-gradient(329.95% 173.05% at 50.04% 100%, #fc36d0 0%, rgba(252, 54, 208, 1) 0.52%, rgba(0, 49, 239, 1) 18.71%, rgba(23, 22, 25, 1) 28.65%, rgba(23, 22, 25, 1) 100%)",
  },
  {
    label: "Demo",
    title: "Focus and Dive Deep",
    description:
      "Tackle short, intense projects and detailed studies on specific tech topics.",
    overlayStyle:
      "radial-gradient(136.22% 75.8% at 50% 27.57%, #171619 0%, rgba(23, 22, 25, 1) 61.62%, rgba(0, 49, 239, 1) 79.17%, rgba(251, 53, 208, 1) 100%)",
  },
];

const Badge = ({ text }) => (
  <div className="badge w-fit mx-auto text-white/70 rounded-lg border border-white/40 px-2 py-1">
    {text}
  </div>
);

const Card = ({
  isPremier,
  title,
  description,
  overlayStyle,
  label,
  isDisabled,
}) => (
  <Link
    href="/Contact"
    passHref={true}
    className={`bg-[#181619] rounded-2xl h-[200px] relative overflow-hidden text-center p-5 flex flex-col gap-5 cursor-pointer transition-all hover:scale-105 
        ${
          isPremier
            ? "shadow-[0_0_0_0_#fff] hover:shadow-[0_0_.5rem_0rem_rgb(234,179,8)] border-2 border-[rgba(162,121,0,0.6)]"
            : "hover:shadow-[0_0_.5rem_0rem_rgba(251,53,208,1)]"
        }
        ${
          isDisabled &&
          "hover:!scale-100 hover:shadow-none !opacity-40 !cursor-not-allowed"
        }`}
  >
    <div className="flex justify-between items-center">
      <h1 className="font-semibold text-3xl bg-gradient-to-r from-white to-gray-400 hover:text-white text-transparent bg-clip-text">
        {title}
      </h1>
      <div
        className={`text-[14px] px-2 border border-white/60 rounded-xl ${
          isPremier && "border-yellow-500 text-yellow-500"
        }`}
      >
        {label}
      </div>
    </div>
    <p className="text-[14px] text-start font-semibold">{description}</p>
    <div
      className="absolute top-0 left-0 w-full h-full opacity-50"
      style={{ background: overlayStyle }}
    />
  </Link>
);

function TrainingServiceSection() {
  return (
    <div className="w-full max-w-[1400px] flex flex-col gap-8 text-white">
      <div className="head container mx-auto flex flex-col gap-7 justify-center text-center max-w-[800px] pt-5">
        <Badge text={HeadData.badge} />
        <h1 className="text-4xl md:text-6xl font-semibold">
          {HeadData.title_1}
          <span className="bg-gradient-to-r from-pink-600 to-blue-500 text-transparent bg-clip-text">
            {HeadData.title_span}
          </span>
          {HeadData.title_2}
        </h1>
        <p className="text-white/50 text-lg md:text-base">
          {HeadData.description}
        </p>
      </div>
      <div className="content container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default TrainingServiceSection;
