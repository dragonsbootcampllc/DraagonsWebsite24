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
import { useState } from "react";

const hoverNavItems =
  "text-base hover:text-sky-500 hover:border-b hover:border-sky-300";

export default function Component() {
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
          {/* <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-screen bg-bgMainHeader" side="left">
              <nav className="grid gap-5 py-6">
                <Link href="#" className="font-bold text-lg" prefetch={false}>
                  Use cases
                </Link>
                <Link
                  href="/talents"
                  className="font-bold text-lg"
                  prefetch={false}
                >
                  Talents
                </Link>
                <Link
                  href="/event"
                  className="font-bold text-lg"
                  prefetch={false}
                >
                  Events
                </Link>
                <Link
                  href="/about"
                  className="font-bold text-lg"
                  prefetch={false}
                >
                  About Us
                </Link>
                <Link
                  href="/pricing"
                  className="font-bold text-lg"
                  prefetch={false}
                >
                  Pricing
                </Link>
                <Popover>
                  <PopoverTrigger asChild>
                    <Link
                      href="#"
                      className="font-bold flex items-center text-lg"
                      prefetch={false}
                    >
                      Solution{" "}
                      <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    </Link>
                  </PopoverTrigger>
                  <PopoverContent className="p-3 border-slate-950" align="start">
                    <div className="grid grid-rows-2 gap-4">
                      <div className="space-y-2 w-40">
                        <h3 className="text-base font-medium">
                          <Link
                            href="/solutions/students/"
                            prefetch={false}
                          >
                            For Students
                          </Link>
                        </h3>
                        <ul className="space-y-1 text-sm ml-2 flex flex-col gap-1">
                          <li>
                            <Link
                              href="/solutions/students/mentorship"
                              prefetch={false}
                            >
                              Mentorship
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions/students/job-ready"
                              prefetch={false}
                            >
                              Job Ready
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions/students/leaders"
                              prefetch={false}
                            >
                              Thought Leader
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dsa"
                              prefetch={false}
                            >
                              Students Activity
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2 w-40">
                        <h3 className="text-base font-medium">
                          <Link
                            href="/solutions/partners/"
                            prefetch={false}
                          >
                            For Partners
                          </Link>
                        </h3>
                        <ul className="space-y-1 text-sm ml-2 flex flex-col gap-1">
                          <li>
                            <Link
                              href="/solutions/partners/event-sponsor"
                              prefetch={false}
                            >
                              Events Sponsor
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions/partners/get-talent"
                              prefetch={false}
                            >
                              Get Talents
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions/partners/outsourcing"
                              prefetch={false}
                            >
                              Software Outsourcing
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </nav>
            </SheetContent>
          </Sheet> */}
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
                        <h3 className="text-lg font-medium">
                          <Link href="/solutions/students/" prefetch={false}>
                            For Students
                          </Link>
                        </h3>
                        <ul className="space-y-1 text-base ml-2 flex flex-col gap-1">
                          <li>
                            <Link
                              href="/solutions/students/mentorship"
                              prefetch={false}
                            >
                              Mentorship
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions/students/job-ready"
                              prefetch={false}
                            >
                              Job Ready
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions/students/leaders"
                              prefetch={false}
                            >
                              Thought Leader
                            </Link>
                          </li>
                          <li>
                            <Link href="/dsa" prefetch={false}>
                              Students Activity
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2 w-40">
                        <h3 className="text-lg font-medium">
                          <Link href="/solutions/partners/" prefetch={false}>
                            For Partners
                          </Link>
                        </h3>
                        <ul className="space-y-1 text-base ml-2 flex flex-col gap-1">
                          <li>
                            <Link
                              href="/solutions/partners/event-sponsor"
                              prefetch={false}
                            >
                              Events Sponsor
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions/partners/get-talent"
                              prefetch={false}
                            >
                              Get Talents
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions/partners/outsourcing"
                              prefetch={false}
                            >
                              Software Outsourcing
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                <Link
                  href="/talents"
                  className="font-bold text-xl"
                  prefetch={false}
                >
                  Talents
                </Link>
                <Link
                  href="/event"
                  className="font-bold text-xl"
                  prefetch={false}
                >
                  Events
                </Link>
                <Link
                  href="/about"
                  className="font-bold text-xl"
                  prefetch={false}
                >
                  About Us
                </Link>
                <Link
                  href="/pricing"
                  className="font-bold text-xl"
                  prefetch={false}
                >
                  Pricing
                </Link>

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
              <PopoverContent className="bg-bgMainHeader border-0 z-30 mt-2 mx-32 gap-2 w-screen p-4 hidden lg:flex">
                {/* <div className="grid grid-cols-2 gap-4 p-4"> */}
                <div className="space-y-2 flex flex-col gap-2 items-center border border-slate-900 hover:shadow hover:shadow-pink-800 rounded w-1/3 p-3">
                  <h3 className="text-lg font-medium w-max">
                    <Link
                      href="/solutions/students/"
                      prefetch={false}
                      className="hover:text-sky-500"
                    >
                      For Students
                    </Link>
                  </h3>
                  <ul className="text-sm flex gap-4">
                    {/* <div className="flex flex-col gap-3"> */}
                    <li className="hover:text-sky-700">
                      <Link
                        href="/solutions/students/mentorship"
                        prefetch={false}
                      >
                        Mentorship
                      </Link>
                    </li>
                    <li className="hover:text-sky-700">
                      <Link
                        href="/solutions/students/job-ready"
                        prefetch={false}
                      >
                        Job Ready
                      </Link>
                    </li>
                    {/* </div>
                    <div className="flex flex-col gap-3"> */}
                    <li className="hover:text-sky-700">
                      <Link href="/solutions/students/leaders" prefetch={false}>
                        Thought Leader
                      </Link>
                    </li>
                    <li className="hover:text-sky-700">
                      <Link href="/dsa" prefetch={false}>
                        Students Activity
                      </Link>
                    </li>
                    {/* </div> */}
                  </ul>
                </div>
                <div className="space-y-2 flex flex-col gap-2 items-center border border-slate-900 rounded w-1/3 p-3 hover:shadow-inner hover:shadow-pink-800">
                  <h3 className="text-lg font-medium w-max">
                    <Link
                      href="/solutions/partners/"
                      prefetch={false}
                      className="hover:text-sky-500"
                    >
                      For Partners
                    </Link>
                  </h3>
                  <ul className="text-sm flex gap-4">
                    <li className="hover:text-sky-700">
                      <Link
                        href="/solutions/partners/event-sponsor"
                        prefetch={false}
                      >
                        Events Sponsor
                      </Link>
                    </li>
                    <li className="hover:text-sky-700">
                      <Link
                        href="/solutions/partners/get-talent"
                        prefetch={false}
                      >
                        Get Talents
                      </Link>
                    </li>
                    <li className="hover:text-sky-700">
                      <Link
                        href="/solutions/partners/outsourcing"
                        prefetch={false}
                      >
                        Software Outsourcing
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* </div> */}
              </PopoverContent>
            </Popover>
            <Link
              href="/talents"
              className={`font-bold ${hoverNavItems}`}
              prefetch={false}
            >
              Talents
            </Link>
            <Link
              href="/event"
              className={`font-bold ${hoverNavItems}`}
              prefetch={false}
            >
              Events
            </Link>
            <Link
              href="/about"
              className={`font-bold ${hoverNavItems}`}
              prefetch={false}
            >
              About Us
            </Link>
            <Link
              href="/about"
              className={`font-bold ${hoverNavItems}`}
              prefetch={false}
            >
              Pricing
            </Link>
          </div>
          <div className="flex gap-4">
            <Link
              href="/demo"
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Boot a Demo
            </Link>
            <Link
              href="/apply"
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-300 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 text-black"
              prefetch={false}
            >
              Apply Now
            </Link>
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
