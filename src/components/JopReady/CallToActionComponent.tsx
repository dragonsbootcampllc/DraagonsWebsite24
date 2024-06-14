"use client";
import Link from "next/link";
import ImageSliderComponent from "./ImageSlider";
// Sample data for the headline and button text
const ctaHeadline: string = 'Join the 1200+ Students Powering their learning experience with Dragons Bootcamp';
const ctaApplyText: string = 'Apply Now';
const ctaBookCallText: string = 'Book a 1:1 Call';

const CallToActionComponent: React.FC = () => {
    return (
        <div className="py-12 text-white">
            <div className="container mx-auto flex flex-col gap-6 items-center text-center">
                <h2 className="text-4xl md:text-6xl font-semibold md:max-w-[1000px]">{ctaHeadline}</h2>
                <div className="hidden md:block">
                <ImageSliderComponent />
                </div>
                <div className="mt-8 flex gap-4 justify-center">
                    <Link
                        href="/Pricing"
                        passHref>
                        <button className='bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>{ctaApplyText}</button>
                    </Link>
                    <button className=" text-blue-600 font-semibold  py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
                        {ctaBookCallText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CallToActionComponent;
