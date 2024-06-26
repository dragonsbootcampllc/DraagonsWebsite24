import React from 'react';
import { useRouter } from "next/router";
import ButtonComponent from '@/components/Micros/Button';

export default function minisprint_explore_view() {
  const router = useRouter();
  const minisprint_name = router.query.slug;
  const description = 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem';
  const benefits = ['test test test test', 'test 1 test 1 test 1 test 1', 'test 2 test 2 test 2 test 2', 'test 3 test 3 test 3', 'test 4 test 4 test 4 test 4 test 4 test 4'];
  const content = {
    duration: '2 weeks',
    assignments: '',
    articles: '8',
    resources: '5'
  };
  const requirements = ['test test test test', 'test 1 test 1 test 1 test 1', 'test 2 test 2 test 2 test 2', 'test 3 test 3 test 3', 'test 4 test 4 test 4 test 4 test 4 test 4'];

  return (
    <div className="flex flex-col max-w-[1600px] items-center mx-auto mb-24 gap-24">
      <div className='flex h-[500px] justify-between'>
        <div className="flex flex-col w-1/2 justify-center gap-12">
          <div className='flex flex-col justify-center items-start gap-8'>
            <h1 className='font-semibold text-6xl'>{minisprint_name}</h1>
            <p className='font-semibold text-lg text-slate-300 w-11/12'>{description}</p>
          </div>

          <ButtonComponent CTAtext='Buy Now' className='!w-fit !h-fit'/>
        </div>

        <div className='w-1/2 h-full flex justify-center items-center'>
          <div className="bg-gray-300/40 rounded-md h-4/5 w-1/2 text-gray-300 text-4xl font-bold flex justify-center items-center"><span>Illustrations</span></div>
        </div>
      </div>

      <div className='w-full flex flex-col gap-12'>
        <h2 className='text-5xl font-semibold'>What you'll learn?</h2>
        <div className='flex flex-col gap-5'>
          {
            benefits.map((benefit, index) => (
              <span key={index} className='flex text-slate-200 text-2xl'><span className='mr-1'>O</span><span>{benefit}</span></span> 
            ))
          }
        </div>
      </div>

      <div className='w-full flex flex-col gap-12'>
        <h2 className='text-5xl font-semibold'>This course includes:</h2>
        <div className='flex flex-col gap-5'>
          <span className='flex text-slate-200 text-2xl'><span className='mr-1'>O</span><span>{content.duration}</span></span> 
          <span className='flex text-slate-200 text-2xl'><span className='mr-1'>O</span><span>{content.assignments} Assignments</span></span> 
          <span className='flex text-slate-200 text-2xl'><span className='mr-1'>O</span><span>{content.articles} Articles</span></span> 
          <span className='flex text-slate-200 text-2xl'><span className='mr-1'>O</span><span>{content.resources} Resources</span></span> 
        </div>
      </div>

      <div className='w-full flex flex-col gap-12'>
        <h2 className='text-5xl font-semibold'>Requirements</h2>
        <div className='flex flex-col gap-5'>
          {
            requirements.map((requirement, index) => (
              <span key={index} className='flex text-slate-200 text-2xl'><span className='mr-1 text-4xl'>•</span><span>{requirement}</span></span> 
            ))
          }
        </div>
      </div>
    </div>
  )
}
