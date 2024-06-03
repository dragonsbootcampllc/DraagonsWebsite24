import React from "react";
import Link from "next/link";

function Whatwedosec(props) {
  const Tracks = [
    {
      id: 1,
      isTechnical: true,
      title: "Front End",
      SVG: "",
      content:
        "Frontend development is the process of creating the user interface of a web application. It involves designing and coding the layout, appearance, and functionality of a website using technologies such as HTML, CSS, and JavaScript. Frontend developers are responsible for ensuring that the website is responsive, accessible, and user-friendly.",
      link: "",
      isAvailable: true,
    },
    {
      id: 2,
      isTechnical: true,
      title: "Back End",
      SVG: "",
      content:
        "Backend development is the process of creating the logic and functionality of a web application or software. Backend developers work with programming languages, frameworks, databases, and APIs to build the core features and functionalities of a product. Backend development is essential for ensuring the performance, security, and scalability of a web application or software.",
      link: "",
      isAvailable: true,
    },
    {
      id: 3,
      isTechnical: true,
      title: "JAVA Fundamentals",
      SVG: "",
      content:
        "Java is a popular programming language that supports object-oriented, concurrent, and functional paradigms.              Some of its fundamental features are: classes and objects, inheritance and polymorphism, interfaces and abstract classes, exceptions and assertions, generics and collections, threads and concurrency.",
      link: "",
      isAvailable: false,
    },
    {
      id: 4,
      isTechnical: true,
      title: "Flutter",
      SVG: "",
      content:
        "Flutter is a cross-platform framework for developing mobile, web, and desktop applications. It uses a declarative UI approach and a reactive programming model. Flutter allows developers to create fast, beautiful, and expressive user interfaces with native performance.",
      link: "",
      isAvailable: false,
    },
    {
      id: 5,
      isTechnical: true,
      title: "Cyber Security",
      SVG: "",
      content:
        "Cyber security fundamental is the basic knowledge and skills required to protect information systems from cyber threats. It covers topics such as cryptography, network security, malware analysis, digital forensics and ethical hacking.",
      link: "",
      isAvailable: false,
    },
    {
      id: 6,
      isTechnical: true,
      title: "Python",
      SVG: "",
      content:
        "Python is a language that lets you do anything you want, as long as you indent it properly. It has many fundamental     features, such as lists, dictionaries, loops, and functions. But the most fundamental feature of Python is the Zen of Python, which you can read by typing import this in the interpreter. It will teach you how to write beautiful and simple code, like this paragraph.",
      link: "",
      isAvailable: false,
    },
    {
      id: 7,
      isTechnical: false,
      title: "HR",
      SVG: "",
      content:
        "As an HR specialist, you will be responsible for hiring, firing and inspiring the best talent in the industry.          also have to deal with a lot of paperwork, complaints and office drama. But don't worry, it's not all bad. You will get to enjoy free coffee, flexible hours and occasional team-building activities. Just don't forget to smile and nod when your boss tells you his latest joke.",
      link: "",
      isAvailable: true,
    },
    {
      id: 8,
      isTechnical: false,
      title: "Marketing",
      SVG: "",
      content:
        "Marketing role: You love to sell stuff to people who don't need it. You have a knack for making boring products sound . You can write catchy slogans and design flashy ads. You don't mind lying a little bit to boost sales. You are the ultimate hype man (or woman).",

      link: "",
      isAvailable: false,
    },
    {
      id: 9,
      isTechnical: false,
      title: "PR",
      SVG: "",
      content:
        "As a PR specialist, you have to deal with a lot of characters. And by characters, I mean people who are difficult.      demanding, or downright crazy. Sometimes you wish you could just write them off, but you can't. You have to smile, nod, and spin their stories into gold. It's not easy, but it's rewarding. Especially when you get paid.",
      link: "",
      isAvailable: true,
    },
    {
      id: 10,
      isTechnical: false,
      title: "Media",
      SVG: "",
      content:
        "Media role is very important, especially video and photo shooting. They capture the moments that make us laugh, cry, or scream. They also show us the truth, or sometimes the lies. Without media, we would be bored and ignorant. That's why I love media, and also because I look good on camera.",
      link: "",
      isAvailable: true,
    },
  ];

  return (
    <div
      style={{ fontFamily: "Poppins-Bold", width: "400" }}
      className=" justify-center pb-12   md:gap-12  grid sm:grid-cols-2 max-w-[1500px]  lg:grid-cols-3 xl:grid-cols-4 gap-6 "
    >
      {Tracks.map((track) => (
        <Link
          key={track.id}
          href={track.link ? track.link : "/tracks/" + track.title}
          passHref
        >
          <div
            className={` ${
              track.isAvailable
                ? " bg-gray-800/40 border-2 border-white/40"
                : " bg-gray-800/10"
            }  ${"min-h-[190px] select-none active:scale-95 cursor-pointer duration-300 hover:scale-105  max-w-[340px] backdrop-blur-md shadow-lg rounded-xl"}`}
          >
            <div className="gap-2 p-3 flex h-[70px]">
              <div
                className={`${"rounded-full   h-10 w-10"}${
                  track.isTechnical ? " bg-purple-900/50" : " bg-yellow-400/50"
                }`}
              >
                <div className="m-2   justify-center ">
                  <svg
                    className="hover:scale-110 opacity-70 duration-500 hover:brightness-150 justify-center my-2 mx-auto"
                    width={24}
                    height={24}
                    viewBox="0 0 76 77"
                    fill={"white"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M34.7241 6.63413C33.4652 6.74662 32.2275 6.93301 31.0152 7.18895C29.447 9.76685 28.0576 13.1434 26.9554 17.1249H34.7241V6.63413ZM23.2762 9.91936C19.7269 11.7226 16.5603 14.1764 13.9318 17.1249H20.9874C21.6359 14.5397 22.4028 12.1237 23.2762 9.91936ZM9.81984 22.9238C7.72525 26.7099 6.37529 30.9694 5.9689 35.5024H18.5737C18.7006 31.1135 19.1143 26.8808 19.7808 22.9238H9.81984ZM5.9689 41.3014C6.32916 45.3198 7.4309 49.1232 9.13556 52.5725H19.5713C19.0273 48.9957 18.6868 45.2105 18.5737 41.3014H5.9689ZM12.8275 58.3715C15.654 61.9053 19.2144 64.8209 23.2762 66.8844C22.2572 64.3124 21.383 61.4522 20.6728 58.3715H12.8275ZM31.0152 69.6148C32.2275 69.8708 33.4652 70.0572 34.7241 70.1697V58.3715H26.6094C27.7603 62.9237 29.2781 66.7593 31.0152 69.6148ZM40.4934 70.1627C41.7258 70.0496 42.9379 69.8656 44.1255 69.6148C45.8626 66.7593 47.3804 62.9237 48.5313 58.3715H40.4934V70.1627ZM51.8644 66.8844C55.9262 64.8209 59.4866 61.9053 62.3131 58.3715H54.4678C53.7577 61.4522 52.8835 64.3124 51.8644 66.8844ZM65.9701 52.643C67.6947 49.1751 68.809 45.3472 69.1717 41.3014H56.567C56.4539 45.2105 56.1134 48.9957 55.5693 52.5725H65.3349C65.5532 52.5725 65.7657 52.5969 65.9701 52.643ZM75.0703 38.4019C75.0703 17.5845 58.281 0.708599 37.5703 0.708599C16.8596 0.708599 0.0703125 17.5845 0.0703125 38.4019C0.0703125 59.2193 16.8596 76.0952 37.5703 76.0952C58.281 76.0952 75.0703 59.2193 75.0703 38.4019ZM69.1717 35.5024H56.567C56.44 31.1135 56.0264 26.8808 55.3598 22.9238H65.3208C67.4154 26.7099 68.7653 30.9694 69.1717 35.5024ZM61.2088 17.1249C58.5803 14.1764 55.4138 11.7226 51.8644 9.91939C52.7378 12.1237 53.5048 14.5398 54.1533 17.1249H61.2088ZM44.1255 7.18896C42.9379 6.93822 41.7258 6.75424 40.4934 6.6411V17.1249H48.1853C47.0831 13.1434 45.6937 9.76686 44.1255 7.18896ZM50.7953 41.3014C50.6731 45.2905 50.3015 49.076 49.7284 52.5725H40.4934V41.3014H50.7953ZM34.7241 41.3014V52.5725H25.4123C24.8392 49.076 24.4675 45.2905 24.3453 41.3014H34.7241ZM25.6384 22.9238C24.9368 26.7772 24.4829 31.0108 24.3453 35.5024H34.7241V22.9238H25.6384ZM40.4934 22.9238V35.5024H50.7953C50.6577 31.0108 50.2039 26.7772 49.5023 22.9238H40.4934Z"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="37.5703"
                        y1="0.708599"
                        x2="37.5703"
                        y2="76.0952"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset={1} stopColor="#EF4444" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>{" "}
              </div>

              <div className="mt-1 text-lg text-gray-200 font-bold ">
                {track.title}
                {track.isAvailable ? null : (
                  <span
                    className={
                      "p-2 text-xs bg-amber-400/20 rounded-full place-items-center mx-2"
                    }
                  >
                    SOON
                  </span>
                )}
              </div>
            </div>
            <div
              style={{ fontFamily: "Poppins-Bold", width: "400" }}
              className="px-3  font-medium text-gray-400"
            >
              {track.content ? track.content.slice(0, 120) : "No description"}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Whatwedosec;
