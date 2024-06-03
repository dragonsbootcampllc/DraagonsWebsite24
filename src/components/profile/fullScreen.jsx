import Image from "next/image";
import React from "react";

function fullScreen(props) {
  return (
    <div className=" z-50 backdrop-blur-2xl h-screen w-screen bg-red-700/40 flex justify-center mx-auto ">
      <div className="absolute left-3 top-3 p-4 bg-gray-600">x</div>
      <div>
        <Image
          src={props.Imageprop}
          alt="fullscreen"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default fullScreen;
