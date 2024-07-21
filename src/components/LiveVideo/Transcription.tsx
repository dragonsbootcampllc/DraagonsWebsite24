import React from "react";

interface VideoProps {
  Text?: string;
}

const Transcription: React.FC<VideoProps> = ({ Text }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-6xl p-5 md:p-10">
        <h1 className="font-semibold text-4xl mb-4">Video Transcription</h1>
        {Text ? <p className="pb-5">{Text}</p> : <p>There are no details about this content.</p>}
      </div>
    </div>
  );
};

export default Transcription;