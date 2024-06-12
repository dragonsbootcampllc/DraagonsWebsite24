import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { FiChevronRight } from "react-icons/fi";
import { Url, UrlObject } from "url";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const hoverNavItems =
  "text-base hover:text-sky-500 hover:border-b hover:border-sky-300";

export default function Component(props: any) {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <header className="flex h-16 w-full justify-center shrink-0 items-center px-4 md:px-6 fixed top-0 left-0 z-50 bg-bgMainHeader">
      <div className="flex items-center max-w-[1400px] justify-between w-full">
        <Link className="flex relative xl:mr-56 mr-26" href="/" passHref>
          <Image
            src="Identity/Images/2023/SVG/test.svg"
            alt="logo"
            priority={true}
            width={100}
            height={20}
          />
        </Link>
        <div className="flex items-center gap-4 lg:hidden">
          <Link
            href="/demo"
            className="sm:inline-flex hidden h-9 items-center justify-center rounded-md border  border-gray-200  px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium shadow-sm"
            prefetch={false}
          >
            Boot Demo
          </Link>
          <Link
            href="/apply"
            className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white text-black  px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium shadow-sm "
            prefetch={false}
          >
            Apply Now
          </Link>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="w-screen h-max p-5 lg:hidden bg-bgMainHeader">
              <nav className="grid gap-5 py-3">
                <Link href="#" className="font-bold text-xl" prefetch={false}>
                  Use cases
                </Link>
                <button
                  className="font-bold flex items-center text-xl"
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                >
                  Solution{" "}
                  <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                </button>
                {isSolutionsOpen && (
                  <div className="p-3 bg-bgMainHeader z-50 border-slate-900">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2 w-40">
                        <h3 className="text-xl font-medium">
                          {props.solution[0].title}
                        </h3>
                        <p className="text-xs">
                        {limitWords(props.solution[0].description, 6)}{".. "}
                          <Link
                            href={props.solution[0].link}
                            prefetch={false}
                            className="text-sky-500 text-xs hover:text-sky-800"
                          >
                            Learn More
                          </Link>
                        </p>
                        <ul className="space-y-1 text-base ml-2 flex flex-col gap-1">
                          {props.solution[0].studentsLinks.map(
                            (
                              link: {
                                [x: string]: ReactNode;
                                link: string | UrlObject | any;
                                title:
                                  | string
                                  | number
                                  | bigint
                                  | boolean
                                  | ReactElement<
                                      any,
                                      string | JSXElementConstructor<any>
                                    >
                                  | Iterable<ReactNode>
                                  | ReactPortal
                                  | Promise<AwaitedReactNode>
                                  | null
                                  | undefined;
                              },
                              index: Key | null | undefined
                            ) => (
                              <li key={index} className="flex items-center">
                                {link.icon}
                                <Link href={link.link as string} prefetch={false}>
                                  {link.title}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      <div className="space-y-2 w-40">
                        <h3 className="text-xl font-medium">
                          {props.solution[1].title}
                        </h3>
                        <p className="text-xs">
                        {limitWords(props.solution[1].description, 6)}{".. "}
                          <Link
                            href={props.solution[1].link}
                            prefetch={false}
                            className="text-sky-500 text-xs hover:text-sky-800"
                          >
                            Learn More
                          </Link>
                        </p>
                        <ul className="space-y-1 text-base ml-2 flex flex-col gap-1">
                          {props.solution[1].partnersLinks.map(
                            (
                              link: {
                                [x: string]: ReactNode;
                                link: string | UrlObject | any;
                                title:
                                  | string
                                  | number
                                  | bigint
                                  | boolean
                                  | ReactElement<
                                      any,
                                      string | JSXElementConstructor<any>
                                    >
                                  | Iterable<ReactNode>
                                  | ReactPortal
                                  | Promise<AwaitedReactNode>
                                  | null
                                  | undefined;
                              },
                              index: Key | null | undefined
                            ) => (
                              <li key={index} className="flex items-center">
                                {link.icon}
                                <Link href={link.link as string} prefetch={false}>
                                  {link.title}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                {props.otherLinks.map(
                  (
                    link: {
                      link: string | UrlObject;
                      title:
                        | string
                        | number
                        | bigint
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | Iterable<ReactNode>
                        | ReactPortal
                        | Promise<AwaitedReactNode>
                        | null
                        | undefined;
                    },
                    index: Key | null | undefined
                  ) => (
                    <Link
                      key={index}
                      href={link.link}
                      className="font-bold text-xl"
                      prefetch={false}
                    >
                      {link.title}
                    </Link>
                  )
                )}
                <Link
                  href="/demo"
                  className="sm:hidden x-2 sm:px-4 py-1 sm:py-2 text-xl rounded-md flex justify-center font-medium shadow-sm border"
                  prefetch={false}
                >
                  Boot a Demo
                </Link>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
        <nav className="hidden flex-1 flex-row items-center justify-between font-medium lg:flex max-w-[1400px] mx-auto">
          <div className="flex gap-6">
            <Link
              href="#"
              className={`font-bold ${hoverNavItems}`}
              prefetch={false}
            >
              Use cases
            </Link>
            <Popover>
              <PopoverTrigger asChild>
                <Link
                  href="#"
                  className={`font-bold ${hoverNavItems} flex items-center`}
                  prefetch={false}
                >
                  Solution{" "}
                  <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                </Link>
              </PopoverTrigger>
              <PopoverContent className="bg-bgMainHeader border-0 z-30 mt-2 mx-28 gap-2 w-screen p-4 hidden lg:flex">
                <div className="space-y-2 flex flex-col gap-5 items-center justify-between border min-h-52 border-slate-900 hover:shadow-pink-800 rounded w-2/5 p-3 hover:shadow">
                  <div className="flex justify-between w-full">
                    {" "}
                    <div className="flex flex-col gap-4 w-1/2">
                      <h3 className="text-2xl font-black w-max">
                        {props.solution[0].title}
                      </h3>
                      <p className="text-sm">
                        {props.solution[0].description}{" "}
                        <Link
                          href={props.solution[0].link}
                          prefetch={false}
                          className="hover:text-sky-800 text-sky-500 hover:text-base"
                        >
                          Learn more
                        </Link>
                      </p>
                    </div>
                    <Image
                      src="Identity/Images/2023/SVG/students.svg"
                      alt="students"
                      priority={true}
                      width={100}
                      height={100}
                      className="w-1/3"
                    />
                  </div>

                  <ul className="text-sm flex gap-4 w-full items-center justify-center">
                    {props.solution[0].studentsLinks.map(
                      (
                        link: {
                          link: string | UrlObject;
                          title:
                            | string
                            | number
                            | bigint
                            | boolean
                            | ReactElement<
                                any,
                                string | JSXElementConstructor<any>
                              >
                            | Iterable<ReactNode>
                            | ReactPortal
                            | Promise<AwaitedReactNode>
                            | null
                            | undefined;
                        },
                        index: Key | null | undefined
                      ) => (
                        <li key={index} className="hover:text-sky-700">
                          <Link href={link.link as string} prefetch={false}>
                            {link.title}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="space-y-2 flex flex-col gap-5 items-center justify-between border min-h-52 border-slate-900 hover:shadow-pink-800 rounded w-2/5 p-3 hover:shadow-inner">
                  <div className="flex justify-between w-full">
                    {" "}
                    <div className="flex flex-col gap-4 w-1/2">
                      <h3 className="text-2xl font-black w-max">
                        {props.solution[1].title}
                      </h3>
                      <p className="text-sm">
                        {props.solution[1].description}{" "}
                        <Link
                          href={props.solution[1].link}
                          prefetch={false}
                          className="hover:text-sky-800 text-sky-500 hover:text-base"
                        >
                          Learn more
                        </Link>
                      </p>
                    </div>
                    <Image
                      src="Identity/Images/2023/SVG/partners.svg"
                      alt="partners"
                      priority={true}
                      width={100}
                      height={100}
                      className="w-1/3"
                    />
                  </div>
                  <ul className="text-sm flex gap-4 w-full items-center justify-center mb-20">
                    {props.solution[1].partnersLinks.map(
                      (
                        link: {
                          link: string | UrlObject;
                          title:
                            | string
                            | number
                            | bigint
                            | boolean
                            | ReactElement<
                                any,
                                string | JSXElementConstructor<any>
                              >
                            | Iterable<ReactNode>
                            | ReactPortal
                            | Promise<AwaitedReactNode>
                            | null
                            | undefined;
                        },
                        index: Key | null | undefined
                      ) => (
                        <li key={index} className="hover:text-sky-700">
                          <Link href={link.link} prefetch={false}>
                            {link.title}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
            {props.otherLinks.map(
              (
                link: {
                  link: string | UrlObject;
                  title:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<AwaitedReactNode>
                    | null
                    | undefined;
                },
                index: Key | null | undefined
              ) => (
                <Link
                  key={index}
                  href={link.link}
                  className={`font-bold ${hoverNavItems}`}
                  prefetch={false}
                >
                  {link.title}
                </Link>
              )
            )}
          </div>
          <div className="flex gap-4">
            {props.ctaLinks.map(
              (
                link: {
                  link: string | UrlObject;
                  title:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<AwaitedReactNode>
                    | null
                    | undefined;
                },
                index: Key | null | undefined
              ) => (
                <Link
                  key={index}
                  href={link.link}
                  className={`inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 ${link.title === "Apply Now"? "bg-white text-black hover:bg-slate-800 hover:text-white": "dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"}`}
                  prefetch={false}
                >
                  {link.title}
                </Link>
              )
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

const propsDefault = {
  solution: [
    {
      title: "For Students",
      link: "/solutions/students/",
      description:
        "For students who want to learn and grow. We provide mentorship, job-ready, and thought leader programs.",
      svg: "https://img.freepik.com/free-vector/postponed-concept-with-man-holding-phone_23-2148486889.jpg?t=st=1718145983~exp=1718149583~hmac=5739c0b29d5ae463f2a8808f3d704fcd8d5289943a254294c4bcc7532c4c48d2&w=826",
      studentsLinks: [
        {
          title: "Mentorship",
          link: "/solutions/students/mentorship",
          icon: <FiChevronRight className="mr-2"/>,
        },
        {
          title: "Job Ready",
          link: "/solutions/students/job-ready",
          icon: <FiChevronRight className="mr-2"/>,
        },
        {
          title: "Thought Leader",
          link: "/solutions/students/leaders",
          icon: <FiChevronRight className="mr-2"/>,
        },
        {
          title: "Students Activity",
          link: "/dsa",
          icon: <FiChevronRight className="mr-2"/>,
        },
      ],
    },
    {
      title: "For Partners",
      link: "/solutions/partners/",
      description:
        "For companies who want to sponsor events, get talents, or outsource software development.",
      partnersLinks: [
        {
          title: "Events Sponsor",
          link: "/solutions/partners/event-sponsor",
          icon: <FiChevronRight className="mr-2"/>,
        },
        {
          title: "Get Talents",
          link: "/solutions/partners/get-talent",
          icon: <FiChevronRight className="mr-2"/>,
        },
        {
          title: "Software Outsourcing",
          link: "/solutions/partners/outsourcing",
          icon: <FiChevronRight className="mr-2"/>,
        },
      ],
    },
  ],
  otherLinks: [
    {
      title: "Talents",
      link: "/talents",
    },
    {
      title: "Events",
      link: "/event",
    },
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
  ],
  ctaLinks: [
    {
      title: "Book a Demo",
      link: "/demo",
    },
    {
      title: "Apply Now",
      link: "/apply",
    },
  ],
};

Component.defaultProps = propsDefault;

// function to limit the paragraph word count to 12

function limitWords(paragraph: string, limit: number) {
  const newParagraph = paragraph.split(" ").splice(0, limit).join(" ");
  return newParagraph;
}