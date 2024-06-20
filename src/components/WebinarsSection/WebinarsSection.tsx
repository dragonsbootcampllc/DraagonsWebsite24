"use client";
import { ReactNode, useState, useEffect, useCallback } from "react";
import VideoPopup from "../Popup/VideoPopup";
import { Play } from "lucide-react";

interface WebinarsSectionProps {
  handel_popup: (component: ReactNode) => void;
}

export default function WebinarsSection({
  handel_popup,
}: WebinarsSectionProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const videoSrc = "/Video/Webinar_Video.mp4";
  const webinarTitle = "Dragons Bootcamp Webinars";
  const webinarDescription =
    "Join us for our upcoming webinars and learn from industry experts! ";

  const onOverlayClick = useCallback(() => {
    handel_popup(
      <VideoPopup
        clear={() => handel_popup(null)}
        videoComponent={
          <video
            src={videoSrc}
            className="w-full max-w-5xl rounded-lg"
            controls
            autoPlay
          ></video>
        }
      />
    );
  }, [handel_popup, videoSrc]);

  return (
    <div className="relative w-full flex flex-col gap-12 justify-center items-center">
  
      <div className='head container mx-auto flex flex-col gap-7 justify-center text-center max-w-[800px] pt-5'>
        <h1 className='md:text-2xl text-xl md:text-center text-start font-medium text-purple-800 uppercase'>
         Dragons Bootcamp Webinars
        </h1>

        <h1 className='text-4xl md:text-6xl font-semibold'>
        Join Our  
          <span className='bg-gradient-to-r from-pink-600 to-blue-500 text-transparent bg-clip-text'>
        {" "}  Webinars  {" "}
          </span>
          and Learn from Industry Experts 🚀
        </h1>
        <p className='text-white/50 text-lg md:text-base'>
          Dragons webinars are a great way to learn from industry experts and stay up-to-date on the latest trends. it's exlusive for our students and grads only for free and open for public with a small fee.
        </p>
      </div>
      <div className="relative w-full group max-w-5xl overflow-hidden rounded-3xl ">
        {isHydrated && (
          <video
            src={videoSrc}
            className="w-full"
            controls={false}
            autoPlay={false}
          />
        )}
        {isHydrated && (
          <div
            className="absolute inset-0 w-full bg-black/20 cursor-pointer rounded-3xl transition-all duration-300 flex justify-center items-end"
            onClick={onOverlayClick}
          >
            <div className="text-white text-center w-full h-1/2 flex flex-col justify-end items-center bg-gradient-to-t from-purple-950/70 to-transparent pb-10">
              <h2 className="text-3xl font-bold">{webinarTitle}</h2>
              <p className="text-lg mt-2">{webinarDescription}</p>
            </div>
          </div>
        )}
        {isHydrated && (
          <button
            onClick={onOverlayClick}
            className="w-20 aspect-square transition-all animate-pulse rounded-3xl justify-center items-center flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-purple-800/90 opacity-80 group-hover:opacity-100 shadow-white"
          >
            <Play stroke="white"  size={60} strokeWidth={3} />
          </button>
        )}
      </div>
    </div>
  );
}
