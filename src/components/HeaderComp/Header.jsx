import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header(props) {
  const [solutionDropdownOpen, setSolutionDropdownOpen] = useState(false);
  const [studentsDropdownOpen, setStudentsDropdownOpen] = useState(false);
  const [partnersDropdownOpen, setPartnersDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSolutionDropdown = () => {
    setSolutionDropdownOpen(!solutionDropdownOpen);
    setStudentsDropdownOpen(false);
    setPartnersDropdownOpen(false);
  };

  const toggleStudentsDropdown = () => {
    setStudentsDropdownOpen(!studentsDropdownOpen);
    setPartnersDropdownOpen(false);
  };

  const togglePartnersDropdown = () => {
    setPartnersDropdownOpen(!partnersDropdownOpen);
    setStudentsDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setSolutionDropdownOpen(false);
  };

  return (
    <nav className="bg-bgMainHeader p-4 fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex justify-between items-center">
        <Link className={`${"flex relative"}`} href="/" passHref>
          <Image
            src="Identity/Images/2023/SVG/test.svg"
            alt="logo"
            // className={`${" h-[20px] "}`}
            priority={true}
            width={100}
            height={20}
          />{" "}
        </Link>

        {/* <div
            className={
              "border-2 p-2 text-xs select-none hover:bg-fuchsia-800 duration-300 cursor-pointer  justify-center text-center grid place-items-center m-auto h-6 w-12 relative rounded-full"
            }
          >
            <span className={"absolute"}>DEMO</span>
          </div> */}
        <ul className="hidden md:flex space-x-3">
          <li className="relative hover:bg-bgHoverHeader hover:rounded-2xl p-1 px-2">
            <button
              onClick={toggleSolutionDropdown}
              className="flex items-center text-white hover:text-gray-300 focus:outline-none"
            >
              Solution
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
                  solutionDropdownOpen ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {solutionDropdownOpen && (
              <ul className="absolute top-full -left-12 bg-bgMainHeader mt-2 py-2 w-96 rounded shadow-lg z-10 flex">
                <li className="relative ">
                  <button
                    onClick={toggleStudentsDropdown}
                    className="flex items-center w-full text-left px-4 py-2 hover:rounded-2xl p-1 text-white hover:bg-bgHoverHeader focus:outline-none"
                  >
                    {props.solution && props.solution[0].title}
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform ${
                        studentsDropdownOpen ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {studentsDropdownOpen && (
                    <ul className="bg-bgMainHeader pl-4">
                      {props.solution &&
                        props.solution[0].links.map((link, index) => (
                          <li key={index}>
                            <Link
                              href={link.link}
                              className="block px-4 py-2 text-white hover:bg-bgHoverHeader"
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <button
                    onClick={togglePartnersDropdown}
                    className="flex items-center w-full text-left px-4 py-2 hover:rounded-2xl p-1 text-white hover:bg-bgHoverHeader focus:outline-none"
                  >
                    {props.solution && props.solution[1].title}
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform ${
                        partnersDropdownOpen ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {partnersDropdownOpen && (
                    <ul className="bg-bgMainHeader pl-4">
                      {props.solution &&
                        props.solution[1].links.map((link, index) => (
                          <li key={index}>
                            <Link
                              href={link.link}
                              className="block px-4 py-2 text-white hover:bg-bgHoverHeader"
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {props.otherLinks &&
            props.otherLinks.map((link, index) => (
              <li key={index} className="p-1">
                <Link
                  href={link.link}
                  className="text-white hover:text-gray-300 hover:bg-bgHoverHeader hover:rounded-2xl p-1 px-2"
                >
                  {link.title}
                </Link>
              </li>
            ))}
        </ul>
        <div className="hidden md:flex space-x-4">
          {props.ctaLinks &&
            props.ctaLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="text-white hover:text-gray-300 hover:bg-bgHoverHeader hover:rounded-2xl p-1 px-2"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <MobileView
          props={props}
          toggleSolutionDropdown={toggleSolutionDropdown}
          toggleStudentsDropdown={toggleStudentsDropdown}
          togglePartnersDropdown={togglePartnersDropdown}
          solutionDropdownOpen={solutionDropdownOpen}
          studentsDropdownOpen={studentsDropdownOpen}
          partnersDropdownOpen={partnersDropdownOpen}
        />
      )}
    </nav>
  );
}

function MobileView({
  props,
  toggleSolutionDropdown,
  toggleStudentsDropdown,
  togglePartnersDropdown,
  solutionDropdownOpen,
  studentsDropdownOpen,
  partnersDropdownOpen,
}) {
  return (
    <div className="md:hidden mt-2 space-y-2 bg-bgMainHeader p-4">
      <div className="relative">
        <button
          onClick={toggleSolutionDropdown}
          className="flex w-full items-center text-left text-white hover:text-gray-300 focus:outline-none"
        >
          Solution
          <svg
            className={`w-4 h-4 ml-1 transition-transform ${
              solutionDropdownOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {solutionDropdownOpen && (
          <div className="mt-2 bg-bgMainHeader py-2 rounded shadow-lg">
            <div className="relative">
              <button
                onClick={toggleStudentsDropdown}
                className="flex items-center w-full text-left px-4 py-2 text-white hover:bg-bgHoverHeader focus:outline-none"
              >
                {props.solution && props.solution[0].title}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    studentsDropdownOpen ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {studentsDropdownOpen && (
                <ul className="bg-bgMainHeader pl-4">
                  {props.solution &&
                    props.solution[0].links.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.link}
                          className="block px-4 py-2 text-white hover:bg-bgHoverHeader"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </div>
            <div className="relative">
              <button
                onClick={togglePartnersDropdown}
                className="flex items-center w-full text-left px-4 py-2 text-white hover:bg-bgHoverHeader focus:outline-none"
              >
                {props.solution && props.solution[1].title}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    partnersDropdownOpen ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {partnersDropdownOpen && (
                <ul className="bg-bgMainHeader pl-4">
                  {props.solution &&
                    props.solution[1].links.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.link}
                          className="block px-4 py-2 text-white hover:bg-bgHoverHeader"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        {props.otherLinks &&
          props.otherLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="text-white hover:text-gray-300 hover:bg-bgHoverHeader hover:rounded-2xl p-1 px-2"
            >
              {link.title}
            </Link>
          ))}
        {props.ctaLinks &&
          props.ctaLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="text-white hover:text-gray-300 hover:bg-bgHoverHeader hover:rounded-2xl p-1 px-2"
            >
              {link.title}
            </Link>
          ))}
      </div>
    </div>
  );
}

const propsDefault = {
  solution: [
    {
      title: "For Students",
      links: [
        {
          title: "Mentorship",
          link: "https://dragons.divzoon.com/solutions/students/mentorship",
        },
        {
          title: "Job Ready",
          link: "https://dragons.divzoon.com/solutions/students/job-ready",
        },
        {
          title: "Thought Leader",
          link: "https://dragons.divzoon.com/solutions/students/leaders",
        },
        {
          title: "Students Activity",
          link: "https://dragons.divzoon.com/dsa",
        },
      ],
    },
    {
      title: "For Partners",
      links: [
        {
          title: "Events Sponsor",
          link: "https://dragons.divzoon.com/solutions/partners/event-sponsor",
        },
        {
          title: "Get Talents",
          link: "https://dragons.divzoon.com/solutions/partners/get-talent",
        },
        {
          title: "Software Outsourcing",
          link: "https://dragons.divzoon.com/solutions/partners/outsourcing",
        },
      ],
    },
  ],
  otherLinks: [
    {
      title: "Talents",
      link: "https://dragons.divzoon.com/talents",
    },
    {
      title: "Events",
      link: "https://dragons.divzoon.com/event",
    },
    {
      title: "About Us",
      link: "https://dragons.divzoon.com/about",
    },
    {
      title: "Pricing",
      link: "https://dragons.divzoon.com/pricing",
    },
  ],
  ctaLinks: [
    {
      title: "Book a Demo",
      link: "https://dragons.divzoon.com/demo",
    },
    {
      title: "Apply Now",
      link: "https://dragons.divzoon.com/apply",
    },
  ],
};

Header.defaultProps = propsDefault;

MobileView.defaultProps = propsDefault;
