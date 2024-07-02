import Image from "next/image";
import React from "react";
import CoverImage from "@/../public/45f.png";

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
            {Category && Category.map((category, index) => (
                <React.Fragment key={category}>
                    {renderInfoItem(category)}
                    {index !== Category.length - 1 && ','}
                </React.Fragment>
            ))}
            {Level && Level.map((level, index) => (
                <React.Fragment key={level}>
                    {renderInfoItem(level)}
                    {index !== Level.length - 1 && ','}
                </React.Fragment>
            ))}
            <div className='border-r-4 grid-flow-col gap-1 bg-gray-400/20 rounded-md aspect-auto p-2 h-full grid place-items-center'>
                {Language &&
                    Language.map((language, index) => (
                        <React.Fragment key={language}>
                            <span>{language}</span>
                            {index !== Language.length - 1 && ','}
                        </React.Fragment>
                    ))}
            </div>

            {HasCertificate && renderInfoItem("Has Certificate")}
        </div>
    </div>
);
}

export default VideoComponenet;
