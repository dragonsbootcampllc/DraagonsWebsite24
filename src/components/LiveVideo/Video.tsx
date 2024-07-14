import React from "react";

interface VideoProps {
  link: string;
}

const Video: React.FC<VideoProps> = ({ link }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-6xl p-5 md:p-10">
        <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
