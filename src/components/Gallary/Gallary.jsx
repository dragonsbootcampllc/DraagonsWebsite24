import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ImageGallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showNextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const showMoreImages = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-center mt-32 mb-8 px-6">
        Dragons Boot Camp Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-4 px-6">
        {images.slice(0, visibleCount).map((img, index) => (
          <div key={index} className="relative">
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className="cursor-pointer rounded-lg transition-all hover:scale-105 active:scale-95"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>
      {visibleCount < images.length && (
        <button
          onClick={showMoreImages}
          className="inline-flex justify-center my-8 items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600/10 to-violet-600/10 shadow-lg hover:shadow-blue-700/50 border text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 py-3 px-6"
        >
          Load More
          <svg
            className="w-2.5 h-2.5 rotate-90"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 bg-opacity-75">
          <div className="relative w-11/12 h-full flex items-center justify-center">
            <button
              className="absolute z-50 top-4 right-4 text-white text-5xl cursor-pointer p-2 hover:bg-gray-600 rounded-full"
              onClick={closeModal}
            >
              <IoClose />
            </button>
            <button
              className="absolute z-50 left-4 transition-all text-white text-3xl cursor-pointer p-8 hover:bg-gray-600 rounded-full"
              onClick={showPrevImage}
            >
              <FaArrowLeft />
            </button>
            <div className="relative w-full h-full max-w-[80%] max-h-[80%] flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <button
              className="absolute right-4 transition-all text-white text-3xl cursor-pointer p-8 hover:bg-gray-600 rounded-full"
              onClick={showNextImage}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
