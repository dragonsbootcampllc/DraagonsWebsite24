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
  const webinarTitle = "Webinar Name";
  const webinarDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. eos velit expedita aut quasi minus molestias!";

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
      <div className="w-full flex justify-center flex-col items-center">
        <h1 className="text-7xl font-bold blur-sm text-white/30 animate-pulse">
          Ready For a Sprint?
        </h1>
        <h1 className="text-7xl font-bold text-white/80 -mt-16">
          Ready For a Sprint?
        </h1>
      </div>
      <div className="relative w-full group max-w-5xl overflow-hidden rounded-lg ">
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
            className="absolute inset-0 w-full bg-black/20 cursor-pointer rounded-lg transition-all duration-300 flex justify-center items-end"
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
            className="w-16 aspect-square transition-all hover:animate-pulse rounded-full justify-center items-center flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/50 opacity-50 group-hover:opacity-100 shadow-white"
          >
            <Play stroke="black" size={32} strokeWidth={3} />
          </button>
        )}
      </div>
    </div>
  );
}
