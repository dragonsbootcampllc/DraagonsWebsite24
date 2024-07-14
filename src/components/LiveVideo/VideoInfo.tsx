import React from "react";

interface VideoInfoProps {
  imgUrl: string;
  Title: string;
  Hash: string;
}

const VideoInfo: React.FC<VideoInfoProps> = ({imgUrl, Title, Hash}) => {
  return (
    <div className="flex max-w-[900px] items-center justify-evenly p-5 pt-0 mx-auto">
      <div className="w-fit max-md:hidden">
        <img src={imgUrl} alt="coding" className="w-24 h-24 rounded-full" />
      </div>
      <div>
        <div className="max-w-[750px] mb-4">
          <h1 className="text-3xl md:text-3xl font-semibold text-white">{Title}</h1>
        </div>
        <div className="flex items-center text-center">
          <span className="bg-purple-600 px-4 py-1 rounded-full font-semibold">
            {Hash}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
