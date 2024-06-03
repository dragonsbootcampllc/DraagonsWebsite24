import Image from "next/image";
import Link from "next/link";

const BOOTCAMP_URL = "/Bootcamp";

function GridSection() {
  const head = {
    badge: "Grid Section",
    title: "Elevate Your Skills with Our Intensive 6-Month Tech Bootcamp",
    text: "Master key technologies and leadership skills in our intensive Bootcamp, designed for rapid, real-world success",
  };

  const cardsData = [
    {
      title: "Supportive Community",
      text: "Our supportive community lifts you up, not out. Learn & grow with fellow students",
      image: "/images/supportive_community.jpg",
    },
    {
      title: "Strong Industry Connections",
      text: "Network with top companies and industry leaders to get a head start.",
      image: "/images/industry_connections.jpg",
    },
    {
      title: "Understand company needs",
      text: "Intensive learning immerses you in the developer's zone, allowing you to work on real projects that simulate the working environment.",
      image: "/images/learning_companies.jpg",
    },
    {
      title: "Become a Thought Leader",
      text: "Develop Your Voice and Sharpen your communication skills to share insights and establish yourself as an expert in your field.",
      image: "/images/thought_leader.jpg",
    },
    {
      title: "Level Up, Get Seen",
      text: "We track everything and share all your progress with our trusted partners, business owners, and recruiters for easy hunting.",
      image: "/images/level_up.jpg",
    },
  ];

  return (
    <div className="w-full max-w-[1400px] flex flex-col justify-center items-center gap-8 text-white">
      <div className="container mx-auto flex flex-col gap-7 justify-center items-center text-center max-w-[800px] pt-5">
        <div className="badge w-fit mx-auto text-white/70 rounded-lg border border-white/40 px-2 py-1">
          {head.badge}
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold">{head.title}</h1>
        <p className="text-white/50 text-[16px] md:text-base">{head.text}</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-4 md:gap-5">
        {cardsData.map(({ title, text, image }, index) => (
          <Link
            href={BOOTCAMP_URL}
            key={index}
            className={`hover:scale-[1.03] cursor-pointer transition-all ${index <= 1 ? "col-span-2 lg:col-span-3" : "col-span-2"} overflow-hidden bg-[#181619] rounded-xl h-[375px] text-left flex flex-col justify-between`}
          >
            <div className="p-5 flex flex-col gap-1">
              <h1 className="text-2xl">{title}</h1>
              <p className="text-[14px] text-white/50">{text}</p>
            </div>

            <div className="w-full h-64 relative">
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </Link>
        ))}
      </div>

      <Link
        href={BOOTCAMP_URL}
        className="border-2 w-fit text-2xl rounded-full py-1 px-3 inline-block hover:bg-purple-900 hover:text-white transition-all hover:border-purple-900 mt-5"
      >
        {"Learn More"}
      </Link>
    </div>
  );
}

export default GridSection;
