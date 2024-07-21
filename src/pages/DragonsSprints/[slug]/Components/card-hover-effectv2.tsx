import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const HoverEffect = ({
  items = [], // Set a default value
  className,
  isPathwayOpen,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon: React.ReactNode;
  }[];
  className?: string;
  isPathwayOpen: boolean;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 cursor-pointer py-10",
        className
      )}>
      {items && items.length > 0 ? items.map((item, idx) => (
        <Link
          href={item.link}
          key={item?.title}
          className='relative group block p-2 h-full w-full'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={
            item.title === "PathWays" && !isPathwayOpen ? { opacity: 0.5 } : {}
          }>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card icon={item.icon}>
            <div className='flex relative  items-center'>
              <div className=' relative  grid place-items-center p-0 m-0 '>
                <CardTitle>{item.title}</CardTitle>
              </div>
            </div>
            <CardDescription>{item.description}</CardDescription>
            {item.title === "PathWays" && !isPathwayOpen && (
              <p className='text-red-500 mt-2'>
                This will be open after 10 days of the 14-day challenge.
              </p>
            )}
          </Card>
        </Link>
      )) : null}
    </div>
  );
};

export const Card = ({
  className,
  icon,
  children,
}: {
  className?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className='h-full w-full'>
      {" "}
      <div
        className={cn(
          "rounded-2xl  h-full w-full  overflow-hidden shadow-lg shadow-slate-900 bg-[#030014] border border-white/[0.2] group-hover:border-purple-700 relative z-20",
          className
        )}>
        <div className='relative z-50'>
          <div className='p-4'>{children}</div>
        </div>
        <div className='absolute  z-30   bottom-0 right-0'>{icon}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 text-lg lg:text-3xl  font-bold tracking-wide ",
        className
      )}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}>
      {children}
    </p>
  );
};

export default HoverEffect;
