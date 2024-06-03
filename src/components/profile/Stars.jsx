import Lottie from "lottie-react";
import React, { useRef } from "react";
function Stars(props) {
  const lottieRef = useRef();

  const clicks = () => {
    lottieRef.current.play();
  }

  
  return (
    <div>
      <div className="flex  mt-5 relative  select-none ">
        <div className="h-28 w-28 absolute top-0 left-0 z-10 ">
          <Lottie
            className="z-10 md:m-5 "
            lottieRef={lottieRef}
            hover={true}
            animationData={props.celeb}
            onClick={clicks}

            
            
          />
        </div>
        <div className="bg-gray-700/40 z-30 hover:bg-gray-600/40 duration-500  overflow-hidden rounded-lg   pr-3 pt-2     m-5">
          <div className="min-h-[30px]  flex  ">
            <div className="h-9 w-9  absolute bg-gray-700/40 rounded-full top-1 left-1  md:top-0 md:left-0 ">
              <Lottie animationData={props.animatedlogo} />
              <div className="grid place-items-center pt-[6px]">
                {" "}
                {props.teamico}
              </div>
            </div>
            <h1
              style={{ fontFamily: "Poppins-Bold" }}
              className="md:text-lg text-center pb-2 text-base pl-3 font-bold"
            >
              <span className="md:text-3xl text-2xl text-yellow-300">
                {props.HighlightsNum}
              </span>{" "}
              {props.HighlightsText}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stars;
