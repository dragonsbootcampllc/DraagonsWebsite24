"use client";
import Link from "next/link";


const heroHeading = "Become Job Ready";
const heroHighlightedText = "in Only 6 Month";
const subHeadingText = " With Dragons Bootcamp ";

const Hero: React.FC = () => {
    return (
        <div className="hero py-[120px] md:py-[140px]">
            <div className="container mx-auto flex flex-col justify-between gap-9 items-center">
                <div className="content flex flex-col gap-12">
                    <div className="text text-white flex flex-col gap-7 w-full text-center md:text-left md:max-w-[1000px]">
                        <h1 className='text-4xl md:text-6xl text-center font-semibold'>
                            {heroHeading}
                            {subHeadingText}
                            <span className="bg-gradient-to-r from-pink-600 to-blue-500 text-transparent bg-clip-text">
                                {heroHighlightedText}
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="cta rounded-xl flex gap-5">
                    <Link
                    href="/Pricing"
                    passHref>
                        <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>Apply now</button>
                    </Link>
                    <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300'> Book a 1:1 Call </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
