import Image from "next/image";
import React from "react";

function ImagesForOverView(props) {
  return (
    <div className=" grid place-items-center ">
      <div className="flex gap-2 sm:px-2 xl:px-8 lg:px-4 bg-gray-700/40 relative  py-12  mt-2 rounded-lg justify-center flex-wrap">
        <div
          onClick={() =>
            props.Routercontroler.push(props.routerasString + "/photos")
          }
          className="absolute top-1  right-1 hover:bg-gray-400/20 text-green-400 duration-500 text-sm rounded-[5px] m-1  select-none cursor-pointer p-[3px] px-[7px]"
        >
          See More
        </div>
        <div
          style={{ fontFamily: "Poppins-Bold" }}
          onClick={() =>
            props.Routercontroler.push(props.routerasString + "/photos")
          }
          className="absolute top-1  left-1  rounded-lg  text-white duration-500 m-1 font-bold select-none text-xl  p-[3px] px-[7px]"
        >
          Photos
        </div>

        {props.user.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="bg-gray-900/40 backdrop-blur-md relative lg:h-44 h-32 w-32 rounded-lg lg:w-44"
          >
            <Image
              src={item.image}
              className="w-full rounded-lg  h-full select-none"
              fill
              alt="Core Team"
              priority
              placeholder="blur"
              blurDataURL="/images/HamdySaad.jpg"
            />
          </div>
        ))}

        <div className="xl:flex flex-col hidden  rounded-lg justify-between">
          {props.user.slice(5, 7).map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/40 backdrop-blur-md  h-20 relative rounded-lg w-20"
            >
              <Image
                src={item.image}
                className="w-full rounded-lg   h-full select-none"
                fill
                alt="Core Team"
                priority
                placeholder="blur"
                blurDataURL="/images/HamdySaad.jpg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImagesForOverView;
