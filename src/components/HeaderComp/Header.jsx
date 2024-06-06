import Link from "next/link";
import { useState } from "react";

export default function Header() {
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
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Logo
        </Link>
        <ul className="hidden md:flex space-x-4">
          <li className="relative">
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
              <ul className="absolute top-full left-0 bg-gray-800 mt-2 py-2 w-56 rounded shadow-lg z-10">
                <li className="relative">
                  <button
                    onClick={toggleStudentsDropdown}
                    className="flex items-center w-full text-left px-4 py-2 text-white hover:bg-gray-600 focus:outline-none"
                  >
                    For Students
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
                    <ul className="bg-gray-800 pl-4">
                      <li>
                        <Link
                          href="https://dragons.divzoon.com/solutions/students/mentorship"
                          className="block px-4 py-2 text-white hover:bg-gray-600"
                        >
                          Mentorship
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://dragons.divzoon.com/solutions/students/job-ready"
                          className="block px-4 py-2 text-white hover:bg-gray-600"
                        >
                          Job Ready
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://dragons.divzoon.com/solutions/students/leaders"
                          className="block px-4 py-2 text-white hover:bg-gray-600"
                        >
                          Thought Leader
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://dragons.divzoon.com/dsa"
                          className="block px-4 py-2 text-white hover:bg-gray-600"
                        >
                          Students Activity
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <button
                    onClick={togglePartnersDropdown}
                    className="flex items-center w-full text-left px-4 py-2 text-white hover:bg-gray-600 focus:outline-none"
                  >
                    For Partners
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
                    <ul className="bg-gray-800 pl-4">
                      <li>
                        <Link
                          href="https://dragons.divzoon.com/solutions/partners/event-sponsor"
                          className="block px-4 py-2 text-white hover:bg-gray-600"
                        >
                          Events Sponsor
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://dragons.divzoon.com/solutions/partners/get-talent"
                          className="block px-4 py-2 text-white hover:bg-gray-600"
                        >
                          Get Talents
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://dragons.divzoon.com/solutions/partners/outsourcing"
                          className="block px-4 py-2 text-white hover:bg-gray-600"
                        >
                          Software Outsourcing
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="https://dragons.divzoon.com/talents"
              className="text-white hover:text-gray-300"
            >
              Talents
            </Link>
          </li>
          <li>
            <Link
              href="https://dragons.divzoon.com/event"
              className="text-white hover:text-gray-300"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="https://dragons.divzoon.com/about"
              className="text-white hover:text-gray-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="https://dragons.divzoon.com/pricing"
              className="text-white hover:text-gray-300"
            >
              Pricing
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex space-x-4">
          <Link
            href="https://dragons.divzoon.com/demo"
            className="text-white hover:text-gray-300"
          >
            Book a Demo
          </Link>
          <Link
            href="https://dragons.divzoon.com/apply"
            className="text-white hover:text-gray-300"
          >
            Apply Now
          </Link>
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
        <div className="md:hidden mt-2 space-y-2 bg-gray-700 p-4">
          <Link
            href="/use-cases"
            className="block text-white hover:text-gray-300"
          >
            Use Cases
          </Link>
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
              <div className="mt-2 bg-gray-800 py-2 rounded shadow-lg">
                <div className="relative">
                  <button
                    onClick={toggleStudentsDropdown}
                    className="flex items-center w-full text-left px-4 py-2 text-white hover:bg-gray-600 focus:outline-none"
                  >
                    For Students
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
                    <ul className="bg-gray-800 pl-4">
                      <li>
                        <Link
                          href="https://dragons.divzoon.com/solutions/students/mentorship"
                          className="block px-4 py-2 text-white hover:bg-gray-600"
                        >
                          Mentorship
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://dragons.divzoon.com/solutions/students/job-ready"
                          className="block px-4 py-2 text-white hover:bg-gray-600"
                        >
                          Job Ready
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://dragons.divzoon.com/solutions/students/leaders"
                          className="block px-4 py-2 text-white hover:bg-gray-600"
                        >
                          Thought Leader
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://dragons.divzoon.com/dsa"
                          className="block px-4 py-2 text-white hover:bg-gray-600"
                        >
                          Students Activity
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
                <div className="relative">
                  <button
                    onClick={togglePartnersDropdown}
                    className="flex items-center w-full text-left px-4 py-2 text-white hover:bg-gray-600 focus:outline-none"
                  >
                    For Partners
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
                    <ul className="bg-gray-800 pl-4">
                      <li>
                        <Link
                          href="https://dragons.divzoon.com/solutions/partners/event-sponsor"
                          className="block px-4 py-2 text-white hover:bg-gray-600"
                        >
                          Events Sponsor
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://dragons.divzoon.com/solutions/partners/get-talent"
                          className="block px-4 py-2 text-white hover:bg-gray-600"
                        >
                          Get Talents
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://dragons.divzoon.com/solutions/partners/outsourcing"
                          className="block px-4 py-2 text-white hover:bg-gray-600"
                        >
                          Software Outsourcing
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
          <Link
            href="https://dragons.divzoon.com/talents"
            className="block text-white hover:text-gray-300"
          >
            Talents
          </Link>
          <Link
            href="https://dragons.divzoon.com/event"
            className="block text-white hover:text-gray-300"
          >
            Events
          </Link>
          <Link
            href="https://dragons.divzoon.com/about"
            className="block text-white hover:text-gray-300"
          >
            About Us
          </Link>
          <Link
            href="https://dragons.divzoon.com/pricing"
            className="block text-white hover:text-gray-300"
          >
            Pricing
          </Link>
          <Link
            href="https://dragons.divzoon.com/demo"
            className="block text-white hover:text-gray-300"
          >
            Book a Demo
          </Link>
          <Link
            href="https://dragons.divzoon.com/apply"
            className="block text-white hover:text-gray-300"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
}
