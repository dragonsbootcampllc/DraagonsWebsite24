import { useState } from 'react';
import { FaRegNewspaper, FaCheck } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BASE_URL, CategorySummary, useCategories } from '../../utils/blog';
import useLessonStore from '@/stores/useLessonStore';
import { Circle } from 'rc-progress';
import Loading from "@/components/Loading";

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
            className="cursor-pointer transition-all hover:bg-[#1b1731] px-0.5 rounded-[32px] h-16 relative flex justify-center place-items-center items-center font-semibold w-full box-border text-start"
          >
            <div className="h-12 relative aspect-square flex-shrink-0 text-sm font-semibold flex justify-center items-center rounded-full bg-black/10 text-white mx-2">
              <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[9px]'>{progress}%</span>
              <Circle percent={progress} strokeWidth={4} strokeColor="#6b21a8" /> 
            </div>
            <p className="w-full place-items-center text-xl relative" lang='ar' dir='rtl'>{title}</p>
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
                <span className='inline-flex gap-2 items-center group-hover:bg-[#1b1731] rounded-3xl p-2 w-[calc(100%-2rem)] transition-all h-full' lang='ar' dir='rtl'>
                  {completedBlogs.includes(blog_name) ? (
                    <FaCheck className='text-purple-500 flex-shrink-0' />
                  ) : (
                    <span className='w-6 inline-block flex-shrink-0 aspect-square border rounded-full border-purple-500'></span>
                  )}
                  <span>{blog_name}</span>
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
  const { categories, error, isLoading } = useCategories('careerSprint');
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
  if (isLoading) return <Loading />;

  return (
    <div className="h-[80%] bg-purple-800/20 rounded-[26px] px-2 max-w-[20rem] relative md:flex flex-col gap-4">
      <Link
        href={BASE_URL || ''}
        className="w-full mt-2 hover:bg-purple-800/20 py-2 px-6 rounded-3xl flex gap-3 text-slate-100 font-semibold text-2xl items-center"
      >
        <span className="text-4xl bg-purple-800 p-[6px] rounded-xl ">
          <FaRegNewspaper className="h-6 w-6" />
        </span>
        <span>اكتشف المحتوى</span>
      </Link>
      <div className="flex flex-col gap-2 h-screen overflow-y-auto no-scrollbar">
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
