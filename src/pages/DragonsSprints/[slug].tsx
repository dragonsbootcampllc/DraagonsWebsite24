import React, { useState } from 'react';
import { useRouter } from "next/router";
import ButtonComponent from '@/components/Micros/Button';
import { Correct_1, Document_1, Time_1 } from '@/components/Icons';

interface Coupon {
  name: string,
  discount: number
}

export default function minisprint_explore_view() {
  const router = useRouter();
  const minisprint_name = router.query.slug;
  const [coupon, setCoupon] = useState<Coupon | null>({
    name: "DISCOUNT20",
    discount: 20
  });
  const [couponInput, setCouponInput] = useState("");
  const description = 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem';
  const benefits = ['test test test test', 'test 1 test 1 test 1 test 1', 'test 2 test 2 test 2 test 2', 'test 3 test 3 test 3', 'test 4 test 4 test 4 test 4 test 4 test 4'];
  const content = {
    duration: '2 weeks',
    assignments: '',
    articles: '8',
    resources: '5'
  };
  const requirements = ['test test test test', 'test 1 test 1 test 1 test 1', 'test 2 test 2 test 2 test 2', 'test 3 test 3 test 3', 'test 4 test 4 test 4 test 4 test 4 test 4'];

  const add_coupon = (couponData: Coupon | null) => {
    setCoupon(couponData);
  };
  const price = 1250;

  return (
    <div className="flex flex-col max-w-[1600px] items-center mx-auto mb-24 gap-24">
      <div className='flex h-[500px] justify-between items-center'>
        <div className="flex flex-col w-1/2 justify-center gap-12">
          <div className='flex flex-col justify-center items-start gap-8'>
            <h1 className='font-semibold text-6xl'>{minisprint_name}</h1>
            <p className='font-semibold text-lg text-slate-300 w-11/12'>{description}</p>
          </div>

          <ButtonComponent CTAtext='Buy Now' className='!w-fit !h-fit' />
        </div>

        <div className='w-1/2 h-[400px] flex justify-center items-center'>
          <div className="bg-gray-300/20 rounded-md h-4/5 w-1/2 text-gray-300 text-4xl font-bold flex flex-col justify-end gap-5 p-4">
            {!coupon ?
              <span className='flex justify-center h-full items-center'>
                <span className='text-5xl font-bold'>${price}</span>
              </span> :
              <span className='flex justify-center h-full items-center relative'>
                <span className='text-5xl font-bold relative'>
                  ${price - (price * (coupon.discount / 100))}
                </span>
                <span className='text-xl font-bold line-through px-2 text-gray-300/40'>${price}</span>
                <span className='text-xl text-yellow-500 animate-pulse hover:scale-105 transition-all'>{coupon.discount}%</span>
              </span>
            }
            {
              coupon && (
                <span className='border-2 border-dashed rounded-md flex flex-col relative px-4 py-2 w-full'>
                  <span className='text-2xl font-bold'>{coupon.name} <span className='font-normal'>is applied</span></span>
                  <span className='absolute top-1/2 -translate-y-1/2 right-2 w-6 aspect-square cursor-pointer group/closeIcon' onClick={() => add_coupon(null)}>
                    <span className="h-1 w-full rounded-full bg-white group-hover/closeIcon:rotate-45 transition-all absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                    <span className="h-1 w-full rounded-full bg-white group-hover/closeIcon:-rotate-45 transition-all absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                  </span>
                </span>
              )
            }
            <input type="text" className='inline-block p-2 text-lg text-black bg-blue-200 border-blue-500 transition-all shadow-[0_0_0_0px_rgba(13,119,252,0.5)] focus:shadow-[0_0_0_3px_rgba(13,119,252,0.5)] border rounded-lg focus:outline-none overflow-y-auto overflow-x-hidden w-full h-20' onChange={(e) => setCouponInput(e.target.value)} value={couponInput} />
            <ButtonComponent CTAtext='Add' onClick={() => { couponInput.trim() && add_coupon({ name: couponInput, discount: 20 }); setCouponInput("") }} className='!h-fit' />
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col gap-12'>
        <h2 className='text-5xl font-semibold'>What you'll learn?</h2>
        <div className='flex flex-col gap-5'>
          {
            benefits.map((benefit, index) => (
              <span key={index} className='flex text-slate-200 text-2xl items-center justify-start'><span className='mr-2 w-5 aspect-square'><Correct_1 /></span><span>{benefit}</span></span>
            ))
          }
        </div>
      </div>

      <div className='w-full flex flex-col gap-12'>
        <h2 className='text-5xl font-semibold'>This course includes:</h2>
        <div className='flex flex-col gap-5'>
          <span className='flex text-slate-200 text-2xl items-center justify-start'><span className='mr-2 w-5 aspect-square'><Time_1 /></span><span>{content.duration}</span></span>
          <span className='flex text-slate-200 text-2xl items-center justify-start'><span className='mr-2 w-5 aspect-square'><Document_1 /></span><span>{content.assignments} Assignments</span></span>
          <span className='flex text-slate-200 text-2xl items-center justify-start'><span className='mr-2 w-5 aspect-square'>O</span><span>{content.articles} Articles</span></span>
          <span className='flex text-slate-200 text-2xl items-center justify-start'><span className='mr-2 w-5 aspect-square'>O</span><span>{content.resources} Resources</span></span>
        </div>
      </div>

      <div className='w-full flex flex-col gap-12'>
        <h2 className='text-5xl font-semibold'>Requirements</h2>
        <div className='flex flex-col gap-5'>
          {
            requirements.map((requirement, index) => (
              <span key={index} className='flex text-slate-200 text-2xl justify-start items-center'><span className='mr-1 text-4xl'>•</span><span>{requirement}</span></span>
            ))
          }
        </div>
      </div>
    </div>
  )
}
