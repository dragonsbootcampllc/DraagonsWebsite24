import React from "react";

interface VideoInfoProps {
  imgUrl: string;
  Title: string;
  Hash: string;
}

const VideoInfo: React.FC<VideoInfoProps> = ({imgUrl, Title, Hash}) => {
  return (
    <div className="flex max-w-[900px] items-center justify-start py-5 pt-0 mx-auto">
      <div>
        <div className="max-w-[750px] w-full mb-4">
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
