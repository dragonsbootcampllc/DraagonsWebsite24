import React from "react";
import Link from "next/link";
import { FaCompass } from "react-icons/fa";
import Layout from "./layout";
import { BASE_URL, useCategories, CategorySummary } from "./utils/blog";
import Loading from "@/components/Loading";

export function BlogDiscovery() {
  const { categories, error, isLoading } = useCategories('careerSprint');

  if (error) return <div>فشل في التحميل</div>;
  if (isLoading) return <Loading />;

  return (
    <Layout>
      <div dir="rtl" lang="ar" className='relative w-full font-sans min-h-screen h-full items-center flex flex-col text-slate-200 p-4 md:p-0'>
        <div className='text-3xl flex-col content-center max-w-4xl text-center md:text-5xl z-10 flex justify-center relative mb-3 text-gray-200 font-semibold'>
          <div className='w-full flex justify-center'>
            <div className='bg-purple-700 relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] p-2 shadow-2xl shadow-blue-700/40 rounded-[2rem]'>
              <FaCompass className='w-full h-full p-2' />
            </div>
          </div>
          <h1 className='md:text-xl text-center text-lg font-medium pt-2 text-purple-800 uppercase'>
            صفحة الاستكشاف
          </h1>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl content-center max-w-4xl text-center z-10 flex justify-center m-auto relative capitalize text-gray-200 font-semibold'>
            استكشف المحتوى والتصنيفات
            <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'></span>
          </h1>

          <p className='text-white/50 font-normal text-base md:text-lg head container mx-auto flex flex-col gap-3 md:gap-7 justify-center text-center max-w-[800px] pt-5'>
            اكتشف التصنيفات المختلفة والمحتوى المميز حول كل ما يتعلق بفريق التنين
          </p>
          <div className='w-full pt-5 relative'>
            {/* <input
              className='w-full text-base md:text-2xl box-border p-4 focus:outline-none bg-transparent backdrop-blur-sm focus:border-blue-1 shadow translate-all cursor-text h-12 md:h-16 rounded-xl border border-purple-500'
              placeholder='ابحث عن المحتوى (مثل الموضوعات، الأدلة، وغيرها)'></input> */}
          </div>
        </div>

        <div className='flex justify-center pt-12 relative items-center gap-4 flex-wrap cursor-pointer'>
          {categories &&
            categories.map(
              (
                { icon: Icon, category, description }: CategorySummary,
                index: number
              ) => (
                <Link
                  href={`${BASE_URL}/${category}`}
                  className='flex items-center box-border group backdrop-blur-sm p-4 md:p-7 gap-2 md:gap-4 text-lg md:text-xl font-semibold border border-purple-500 hover:border-purple-700 duration-300 rounded-xl w-full md:w-96 h-32 md:h-40 hover:border-blue-1 shadow hover:shadow-md transition-all'
                  key={index}>
                  <span className='text-6xl md:text-8xl text-white'>
                    <Icon />
                  </span>
                  <span className="text-purple-500 group-hover:text-purple-700 duration-300" lang="ar" dir="rtl">
                    {category}
                    <span className='text-slate-400 break-all px-2'>
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
