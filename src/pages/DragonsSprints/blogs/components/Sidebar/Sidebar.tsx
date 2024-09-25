import { useState } from "react";
import { FaRegNewspaper, FaCheck } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import {
  BASE_URL,
  CategorySummary,
  useCategories,
} from "../../utils/blog";

// Define the CollapsedLinkProps interface
interface CollapsedLinkProps {
  title: string;
  url: string;
  isCollapsed: boolean;
  blogs: string[];
  onClick: () => void;
  progress: number; // Add progress property
  completedBlogs: string[]; // Add completedBlogs to track completion status
}

// Define the CollapsedLink component
const CollapsedLink = ({
  title,
  url,
  isCollapsed,
  blogs,
  onClick,
  progress,
  completedBlogs,
}: CollapsedLinkProps) => {
  return (
    <div className='flex flex-col w-full text-slate-100'>
      {blogs && blogs.length !== 0 ? (
        <>
          <button
            onClick={onClick}
            className='cursor-pointer relative flex justify-center place-items-center items-center font-semibold w-full box-border text-start h-8 '>
            {/* Circle with percentage */}
            <div>
              <div className='h-12 w-12 flex justify-center items-center rounded-full bg-purple-800 text-white mr-2'>
                {progress}%
              </div>
            </div>
            <p className='h-full w-full place-items-center relative'>
              {title}
            </p>
            <span className={`h-full aspect-square hover:bg-[#1b1731] py-3 px-3 flex justify-center items-center rounded-lg`}>
              <span className={` ${isCollapsed ? "rotate-0" : "rotate-90"}`}>
                <IoIosArrowForward />
              </span>
            </span>
          </button>

          <div
            className={`flex flex-col transition-all pl-2 font-semibold overflow-hidden ${isCollapsed ? "h-0 py-0" : "h-auto py-2"}`}>
            {blogs.map((blog_name, index) => (
              <Link
                href={`${url}/${blog_name}`}
                key={index}
                className='inline-block py-1 group ml-4 w-full transition-all h-full'>

                {/* Checkmark for completed blogs */}
                <span className='inline-flex items-center group-hover:bg-[#1b1731] rounded-md p-2 w-[calc(100%-2rem] transition-all h-full'>
                  {completedBlogs.includes(blog_name) ? (
                    <FaCheck className='text-purple-500 mr-2' />
                  ) : (
                    <span className='w-6 h-6 mr-2 border rounded-full border-purple-500'>
                      <span className='w-5 h-5 rounded-full'></span>
                    </span>
                  )}
                  {blog_name}
                </span>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <span className='cursor-pointer flex justify-center items-center w-full box-border text-start h-8 relative'>
          <Link
            href={url || ""}
            className='inline-block hover:bg-[#1b1731] rounded-md w-full transition-all h-full pl-2'>
            {title}
          </Link>
        </span>
      )}
    </div>
  );
};

export default function Sidebar() {
  const { categories, error, isLoading } = useCategories();
  const [collapsed, setCollapsed] = useState<boolean[]>([]);
  const completedBlogs = ["Blog 1", "Blog 3"]; // Example of completed blogs

  const handleClick = (index: number) => {
    setCollapsed((prevCollapsed) => {
      const newCollapsed = [...prevCollapsed];
      newCollapsed[index] = !newCollapsed[index];
      return newCollapsed;
    });
  };

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='h-full max-w-[20rem] relative md:flex flex-col gap-4'>
      <Link
        href={BASE_URL || ""}
        className='w-full hover:bg-purple-800/20 p-2 rounded-md flex gap-3 text-slate-100 font-semibold mb-3 text-xl items-center'>
        <span className='text-2xl bg-purple-800 p-[6px] rounded-xl '>
          <FaRegNewspaper className='h-5 w-5' />
        </span>
        <span>Start Guides</span>
      </Link>
      <div className="flex flex-col gap-8 h-screen pt-4 overflow-y-auto">
        {categories &&
          categories.map(
            ({ blogs, category }: CategorySummary, index: number) => (
              <CollapsedLink
                key={index}
                title={category}
                blogs={blogs}
                url={`/${BASE_URL}/${decodeURIComponent(category)}`}
                isCollapsed={collapsed[index]}
                onClick={() => handleClick(index)}
                progress={Math.floor((completedBlogs.length / blogs.length) * 100)} // Calculate progress percentage
                completedBlogs={completedBlogs} // Pass the completed blogs
              />
            )
          )}
      </div>
    </div>
  );
}
