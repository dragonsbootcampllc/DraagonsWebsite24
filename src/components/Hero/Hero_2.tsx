"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Micros/Button";
import ButtonLite from "@/components/Micros/ButtonLite";

interface HeroProps {
    News: {
        link: string;
        content: string;
    };
    sub_heading_text: string;
    hero_highlighted_text: string;
    hero_heading: string;
    description: string;
}

export default function Hero_2({ News, sub_heading_text, hero_highlighted_text, hero_heading, description }: HeroProps) {
    return (
        <div className="min-h-[700px] md:min-h-[calc(100vh-12rem)] relative">
            <div className="mx-auto pt-[120px] md:pt-[140px] flex flex-col justify-between gap-9 items-center relative z-10">
                <div className="content flex flex-col gap-12">
                    <div className="mb-6 p-2 flex justify-center">
                        <Link href={News.link} passHref
                            className="flex items-center active:scale-95 duration-200 gap-1 text-md bg-purple-400/10 shadow-gray-200/20 shadow-inner px-2 rounded-full min-w-[30px]"
                        >

                            <div className="grid place-content-center">
                                <Image src="/SVG/stars.svg" alt="Stars" width={30} height={30} />
                            </div>
                            <span className="text-purple-300 grid place-content-center font-bold">News:</span>
                            <span className="text-purple-400/70 hover:underline duration-300 grid place-content-center">{News.content}</span>

                        </Link>
                    </div>
                    <div className="text-6xl max-w-4xl text-center md:text-7xl flex justify-center m-auto mb-3 text-gray-200 font-semibold">
                        <h1>
                            {hero_heading}
                            {sub_heading_text}
                            <span className="bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text">{hero_highlighted_text}</span>
                        </h1>
                    </div>
                    <p className="text-white/50 text-lg md:text-base mx-auto flex flex-col gap-7 justify-center text-center max-w-[800px] pt-5">
                        {description}
                    </p>
                </div>
                <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/Pricing" passHref>
                        <div className="h-12 w-48 md:h-16 md:w-64">
                            <Button CTAtext="Apply Now" />
                        </div>
                    </Link>
                    <div className="h-12 w-48 md:h-16 md:w-64">
                        <ButtonLite CTAtext="Book a 1:1 Call" />
                    </div>
                </div>
            </div>
        </div>
    );
}
