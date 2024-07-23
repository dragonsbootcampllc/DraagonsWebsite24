import React from "react";
import Link from "next/link";
import { FaQuestion } from "react-icons/fa";
import Layout from "./layout";
import { BASE_URL, useCategories, CategorySummary } from "./utils/blog";

export function BlogDiscovery() {
  const { categories, error, isLoading } = useCategories();

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className='relative w-full h-fit items-center flex flex-col text-slate-200 p-4'>
        <div className='text-center max-w-4xl z-10 mb-3'>
          <div className='w-full flex justify-center'>
            <div className='bg-purple-700 relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 shadow-2xl shadow-blue-700/40 rounded-2xl'>
              <FaQuestion className='w-full h-full p-2' />
            </div>
          </div>
          <h2 className='text-sm sm:text-base md:text-lg font-medium pt-2 text-purple-800 uppercase'>
            Help Center
          </h2>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl capitalize text-gray-200 font-semibold mt-2'>
            Get Answers to Common Questions
            <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'></span>
          </h1>

          <p className='text-white/50 font-normal text-sm sm:text-base md:text-lg max-w-[800px] mx-auto pt-3 sm:pt-5'>
            Get answers to common questions on all things Dragons
          </p>
          <div className='w-full pt-4 sm:pt-5 relative'>
            <input
              className='w-full text-sm sm:text-base md:text-lg box-border p-3 sm:p-4 focus:outline-none bg-white/20 backdrop-blur-sm focus:border-blue-1 shadow translate-all cursor-text h-10 sm:h-12 md:h-14 rounded-xl border border-slate-200'
              placeholder='Search help (e.g. use cases, guides)'></input>
          </div>
        </div>

        <div className='flex justify-center pt-8 sm:pt-12 relative items-center gap-4 flex-wrap cursor-pointer'>
          {categories &&
            categories.map(
              (
                { icon: Icon, category, description }: CategorySummary,
                index: number
              ) => (
                <Link
                  href={`${BASE_URL}/${category}`}
                  className='flex items-center box-border bg-white/20 backdrop-blur-sm p-3 sm:p-4 md:p-5 gap-2 sm:gap-3 md:gap-4 text-base sm:text-lg md:text-xl font-semibold border border-slate-200 rounded-xl w-full sm:w-80 md:w-96 h-24 sm:h-28 md:h-32 hover:border-blue-1 shadow hover:shadow-md hover:scale-[1.02] transition-all'
                  key={index}>
                  <span className='text-4xl sm:text-5xl md:text-6xl text-white'>
                    <Icon />
                  </span>
                  <span className='flex-1'>
                    <span className='block'>{category}</span>
                    <span className='text-slate-400 text-sm sm:text-base break-words block'>
                      {description}
                    </span>
                  </span>
                </Link>
              )
            )}
        </div>
      </div>
    </Layout>
  );
}

export default BlogDiscovery;