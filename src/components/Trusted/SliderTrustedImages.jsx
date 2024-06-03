import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const App = () => {
  return (
    <div className="shadow-[inset_0_10px_204px_rgba(3,0,20,0.1)] flex justify-center items-center pb-48 pt-6 relative w-full">
      <Image
        src="/Slider/WEBP/eventImage.webp"
        alt="Some of our work"
        width={600}
        height={600}
        className="rounded-3xl relative shadow-none content-center"
      />
    </div>
  );
};

export default App;
