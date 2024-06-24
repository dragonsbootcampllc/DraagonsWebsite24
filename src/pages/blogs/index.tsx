import React from "react";
import Link from "next/link";
import { FaQuestion } from "react-icons/fa";
import Layout from "./layout";
import { BASE_URL, useCategories, CategorySummary } from "@/utils/blog";

export function BlogDiscovery() {
  const { categories, error, isLoading } = useCategories();

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className='relative w-full min-h-screen h-full items-center  flex flex-col   text-slate-200'>
        <div className='text-3xl  flex-col content-center max-w-4xl  text-center md:text-5xl z-10 flex justify-center  relative mb-3 text-gray-200 font-semibold'>
          <div className='w-full flex justify-center'>
            <div className='bg-purple-700 relative w-[100px] h-[100px] p-2 shadow-2xl shadow-blue-700/40 rounded-[2rem]'>
              <FaQuestion className='w-full h-full p-2' />
            </div>
          </div>
          <h1 className='md:text-xl text-center text-lg font-medium pt-2 text-purple-800 uppercase'>
            Help Center
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl content-center max-w-4xl text-center z-10 flex justify-center m-auto relative capitalize text-gray-200 font-semibold">
            Get Answers to Common Questions
            <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'></span>
          </h1>

          <p className='text-white/50 font-normal text-lg md:text-base head container mx-auto flex flex-col gap-7 justify-center text-center max-w-[800px] pt-5'>
            Get answers to common questions on all things Dragons
          </p>
          <div className='w-full pt-5  relative'>
            <input
              className='w-full text-2xl box-border p-4 focus:outline-none bg-white/20 backdrop-blur-sm focus:border-blue-1 shadow translate-all cursor-text h-16 rounded-xl border border-slate-200'
              placeholder='Search help (e.g. use cases, step by step guides)'></input>
          </div>
        </div>

        <div className='flex justify-center  pt-12 relative items-center gap-4 flex-wrap  cursor-pointer'>
          {categories &&
            categories.map(
              (
                { icon: Icon, category, description }: CategorySummary,
                index: number
              ) => (
                <Link
                  href={`${BASE_URL}/${category}`}
                  className='items-center box-border bg-white/20 backdrop-blur-sm p-7 gap-4 text-xl font-semibold border flex border-slate-200 rounded-xl w-96 h-40 hover:border-blue-1 shadow hover:shadow-md hover:scale-[1.02] transition-all'
                  key={index}>
                  <span className='text-8xl text-white'>
                    <Icon />
                  </span>
                  <span>
                    {category}
                    <span className='text-slate-400 break-all pl-2'>
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
