import { useState } from 'react';
import { FaRegNewspaper, FaCheck } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BASE_URL, CategorySummary, useCategories } from '../../utils/blog';
import useLessonStore from '@/stores/useLessonStore';

interface CollapsedLinkProps {
  title: string;
  url: string;
  isCollapsed: boolean;
  blogs: string[];
  onClick: () => void;
  progress: number;
  completedBlogs: string[];
}

const CollapsedLink = ({
  title,
  url,
  isCollapsed,
  blogs,
  onClick,
  progress,
  completedBlogs,
}: CollapsedLinkProps) => {
  const router = useRouter();
  const markBlogAsComplete = useLessonStore((state) => state.markBlogAsComplete);

  const handleBlogClick = (category: string, blog_name: string) => {
    router.push(`${url}/${blog_name}`).then(() => {
      markBlogAsComplete(category, blog_name);
    });
  };

  return (
    <div className="flex flex-col w-full text-slate-100">
      {blogs && blogs.length !== 0 ? (
        <>
          <button
            onClick={onClick}
            className="cursor-pointer hover:bg-[#1b1731] pl-2 rounded-md h-16 relative flex justify-center place-items-center items-center font-semibold w-full box-border text-start"
          >
            <div>
            <div className="h-12 w-12 flex justify-center items-center rounded-full bg-purple-800 text-white mr-2">
              {progress}%
            </div>
            </div>
            <p className="w-full place-items-center text-xl relative">{title}</p>
            <span className="h-full py-3 px-3 flex justify-center items-center">
              <span className={`${isCollapsed ? 'rotate-0' : 'rotate-90'}`}>
                <IoIosArrowForward />
              </span>
            </span>
          </button>

          <div
            className={`flex flex-col transition-all pl-2 font-semibold overflow-hidden ${isCollapsed ? 'h-0 py-0' : 'h-auto py-2'}`}>
            {blogs.map((blog_name, index) => (
              <span
                key={index}
                className='inline-block py-1 group w-full transition-all h-full cursor-pointer'
                onClick={() => handleBlogClick(title, blog_name)}
              >
                <span className='inline-flex items-center group-hover:bg-[#1b1731] rounded-md p-2 w-[calc(100%-2rem)] transition-all h-full'>
                  {completedBlogs.includes(blog_name) ? (
                    <FaCheck className='text-purple-500 mr-2' />
                  ) : (
                    <span className='w-6 h-6 mr-2 border rounded-full border-purple-500'>
                      <span className='w-5 h-5 rounded-full'></span>
                    </span>
                  )}
                  {blog_name}
                </span>
              </span>
            ))}
          </div>
        </>
      ) : (
        <span className='cursor-pointer flex justify-center items-center w-full box-border text-start h-8 relative'>
          <Link href={url || ''} className='inline-block hover:bg-[#1b1731] rounded-md w-full transition-all h-full pl-2'>
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
  const lessonStore = useLessonStore();

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
    <div className="h-full max-w-[20rem] relative md:flex flex-col gap-4">
      <Link
        href={BASE_URL || ''}
        className="w-full hover:bg-purple-800/20 p-2 rounded-md flex gap-3 text-slate-100 font-semibold mb-3 text-xl items-center"
      >
        <span className="text-2xl bg-purple-800 p-[6px] rounded-xl ">
          <FaRegNewspaper className="h-5 w-5" />
        </span>
        <span>Start Guides</span>
      </Link>
      <div className="flex flex-col gap-2 h-screen pt-4 overflow-y-auto no-scrollbar">
        {categories &&
          categories.map(
            ({ blogs, category }: CategorySummary, index: number) => {
              const completedBlogs = lessonStore.getCompletedBlogs(category);
              const progress = Math.floor(
                (completedBlogs.length / blogs.length) * 100
              );
              return (
                <CollapsedLink
                  key={index}
                  title={category}
                  blogs={blogs}
                  url={`/${BASE_URL}/${decodeURIComponent(category)}`}
                  isCollapsed={collapsed[index]}
                  onClick={() => handleClick(index)}
                  progress={progress}
                  completedBlogs={completedBlogs}
                />
              );
            }
          )}
      </div>
    </div>
  );
}
