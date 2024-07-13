import Image from "next/image";
import React, { useState } from "react";
import CoverImage from "@/../public/images/DragonsSprint-CarrerSprint/Dragonswebsiteheader.png";
import Link from "next/link";
import { useRouter } from "next/router";
import ButtonComponent from "../Micros/ButtonLite";

export default function MovieCard(props: {
  movie: any;
  exploreUrl: string;
  expandImage: any;
}) {
  const { movie, exploreUrl, expandImage } = props;
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const currentURL = router.route;

  return (
    <div
      className={`relative transition-all duration-300 ease-in-out ${
        isHovered ? "aspect-video  h-96" : "aspect-[2/3] h-96"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className='w-full h-full relative rounded-3xl overflow-hidden'>
        <Image
          src={isHovered ? movie.expandImage : movie.posterImage || CoverImage}
          alt={movie.title}
          layout='fill'
          objectFit='cover'
        />
        {isHovered && (
          <div className='absolute inset-0  shadow-inner bg-black/10 flex flex-col justify-end p-4'>
            <div className="absolute inset-0     flex flex-col justify-end p-4 max-w-96">
            <h2 className='text-white text-lg font-bold  mb-2'>{movie.title}</h2>
            <p className='text-gray-300 text-sm mb-2 '>{movie.duration}</p>
            <p className='text-gray-300 text-xs mb-4 line-clamp-3'>
              {movie.description}
            </p>
            <Link href={`${currentURL}/${exploreUrl}`} passHref>
              <div className='lg:flex gap-4  hidden mt-4 justify-left'>
                <div className='h-16 w-64  '>
                  <ButtonComponent CTAtext='Watch Now' className='!h-fit' />
                </div>
              </div>
            </Link></div>
          </div>
        )}
      </div>
    </div>
  );
}
