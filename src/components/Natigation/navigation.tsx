/**
 * v0 by Vercel.
 * @see https://v0.dev/t/F70ypoFzTcf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

export default function Component() {
  return (
    <header className="flex h-16 w-full  justify-center shrink-0 items-center px-4 md:px-6">
      <div className="flex items-center max-w-[1400px] justify-between w-full">
        <Link href="#" className="flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6 mx-auto" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <div className="flex items-center gap-4 lg:hidden">
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Apply Now
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-2 py-6">
                <Link href="#" className="font-bold" prefetch={false}>
                  Use cases
                </Link>
                <Link href="#" className="font-bold" prefetch={false}>
                  Talents
                </Link>
                <Link href="#" className="font-bold" prefetch={false}>
                  Events
                </Link>
                <Link href="#" className="font-bold" prefetch={false}>
                  About Us
                </Link>
                <Link href="#" className="font-bold" prefetch={false}>
                  Pricing
                </Link>
                <Popover>
                  <PopoverTrigger asChild>
                    <Link href="#" className="font-bold flex items-center" prefetch={false}>
                      Solution <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    </Link>
                  </PopoverTrigger>
                  <PopoverContent className="p-0" align="end">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">For Students</h4>
                        <ul className="space-y-1 text-sm">
                          <li>Mentorship</li>
                          <li>Job Ready</li>
                          <li>Thought Leader</li>
                          <li>Students activity</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">For Partners</h4>
                        <ul className="space-y-1 text-sm">
                          <li>Events Sponsor</li>
                          <li>Get Talents</li>
                        </ul>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <nav className="hidden flex-1 flex-row items-center justify-center gap-5 text-sm font-medium lg:flex max-w-[1400px] mx-auto">
          <Link href="#" className="font-bold" prefetch={false}>
            Use cases
          </Link>
          <Link href="#" className="font-bold" prefetch={false}>
            Talents
          </Link>
          <Link href="#" className="font-bold" prefetch={false}>
            Events
          </Link>
          <Link href="#" className="font-bold" prefetch={false}>
            About Us
          </Link>
          <Link href="#" className="font-bold" prefetch={false}>
            Pricing
          </Link>
          <Popover>
            <PopoverTrigger asChild>
              <Link href="#" className="font-bold flex items-center" prefetch={false}>
                Solution <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              </Link>
            </PopoverTrigger>
            <PopoverContent className="p-0" align="end">
              <div className="grid grid-cols-2 gap-4 p-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">For Students</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Mentorship</li>
                    <li>Job Ready</li>
                    <li>Thought Leader</li>
                    <li>Students activity</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">For Partners</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Events Sponsor</li>
                    <li>Get Talents</li>
                  </ul>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </nav>
      </div>
    </header>
  )
}

function ChevronDownIcon(props) {
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
  )
}


function MenuIcon(props) {
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
  )
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}