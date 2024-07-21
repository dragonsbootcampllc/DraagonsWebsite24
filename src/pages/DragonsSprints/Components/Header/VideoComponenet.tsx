import Image from "next/image";
import React, { useEffect, useState } from "react";
import CoverImage from "@/../public/images/DragonsSprint-CarrerSprint/Positionbattleheader.png";
import CheckoutButton from "@/components/CheckoutButton";
import ButtonComponent from "@/components/Micros/Button";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import Link from "next/link";

function VideoComponenet({
  duration,
  Category,
  Level,
  Language,
  HasCertificate,
}: {
  duration?: string;
  Category?: string[];
  Level?: string[];
  Language?: string[];
  HasCertificate?: boolean;
}) {
  const router = useRouter();
  const { slug } = router.query;
  const { user, isLoaded } = useUser();
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    if (isLoaded && user) {
      const userCourses = (user.publicMetadata.courses as string[]) || [];
      setHasAccess(userCourses.includes(slug as string));
    }
  }, [isLoaded, user, slug]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const renderInfoItem = (text: string) => (
    <div
      className='border-r-4 bg-gray-400/20 rounded-md aspect-auto p-2 h-full grid place-items-center'
      key={text}>
      {text}
    </div>
  );
  return (
    <div className='aspect-video  rounded-3xl h-full relative overflow-hidden w-full bg-slate-200'>
      <Image
        src={CoverImage}
        className='scale-110'
        alt='hero'
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute left-0 md:flex gap-3 p-4 md:p-12 sm:p-12 hidden  px-2 sm:px-0 sm:pr-5  bottom-0 -sm:max-w-[230px] text-left justify-center bg-opacity-75'>
        {duration && renderInfoItem(duration)}
        {Category &&
          Category.map((category, index) => (
            <React.Fragment key={category}>
              {renderInfoItem(category)}
              {index !== Category.length - 1 && ","}
            </React.Fragment>
          ))}
        {Level &&
          Level.map((level, index) => (
            <React.Fragment key={level}>
              {renderInfoItem(level)}
              {index !== Level.length - 1 && ","}
            </React.Fragment>
          ))}
        <div className='border-r-4 grid-flow-col gap-1 bg-gray-400/20 rounded-md aspect-auto p-2 h-full grid place-items-center'>
          {Language &&
            Language.map((language, index) => (
              <React.Fragment key={language}>
                <span>{language}</span>
                {index !== Language.length - 1 && ","}
              </React.Fragment>
            ))}
        </div>

        {HasCertificate && renderInfoItem("Has Certificate")}
      </div>
      <div className='absolute left-0 flex flex-col gap-3 p-4 md:p-12 sm:p-12 px-2 sm:px-0 sm:pr-5 sm:top-[20%] bottom-0 -sm:max-w-[230px] text-left justify-center bg-opacity-75 '>
        <div className='sm:max-w-md lg:max-w-xl  text-center  sm:p-4 md:p-0 text-white sm:text-left'>
          <h1 className='xl:text-7xl capitalize lg:text-3xl md:text-2xl sm:text-xl  font-bold'>
            <span className='bg-gradient-to-r from-purple-600 animate-pulse to-purple-900 text-transparent bg-clip-text'>
              30$
            </span>{" "}
            Only
          </h1>
          {/* Remove description on mobile */}
          <p className='text-base py-2 lg:text-lg font-medium text-gray-200 hidden md:block'>
            Understand career technical paths, with real-world scenarios and
            intensive 2 weeks of learning, practice, and mentorship.
          </p>

          {/* Buttons (remove on mobile) */}
          <div className='flex gap-4 w-full mt-4 justify-left md:justify-start'>
            <div className='h-16 max-w-64 w-full min-w-32 '>
              {isLoaded && hasAccess ? (
                <Link href={`/DragonsSprints/${slug}/Explore`}>
                  <div className='flex gap-4  w-full  mt-4 justify-center'>
                    <div className='h-16 max-w-64 w-full min-w-20  '>
                      <ButtonComponent
                        CTAtext='Go to Course'
                        className='!h-fit'
                      />
                    </div>
                  </div>
                </Link>
              ) : (
                <div className=' gap-4 w-full   my-4 justify-center'>
                  <div className='lg:h-16 md:hidden lg:flex max-w-64 w-full min-w-20   '>
                    <CheckoutButton
                      CTAtext='Buy Now'
                      className='h-full !w-full'
                      createCheckoutSession='/api/Checkout-DragonsSprint'
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoComponenet;