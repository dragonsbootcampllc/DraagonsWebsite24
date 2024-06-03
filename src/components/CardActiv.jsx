import Link from "next/link";
import Lottie from "lottie-react";
import React from "react";

function CardActiv(props) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let bgcardColor = [
    "bg-[#90BB94]",
    "bg-[#E2AD5E]",
    "bg-[#5347DE]",
    "bg-[#E2815E]",
  ];
  return (
    <div>
      <Link href={props.pass} passHref>
        <div className="relative h-[420px] px-3 max-w-[320px] justify-around mx-auto grid place-content-center">
          <div
            className={`${
              bgcardColor[getRandomInt(4)]
            }${" h-[200px] w-[300px] pt-12 rounded-lg "}`}
          >
            <div className="absolute h-[300px] rounded-lg hover:scale-110 select-none hover:backdrop-blur-sm w-[300px] rotateonhover15 duration-500 border-gray-800 right-0 top-0">
              <Lottie animationData={props.jsonSVG} />{" "}
            </div>
            <div className="bg-gray-800/40 backdrop-blur-md shadow-lg  grid place-content-center text-center rounded-lg text-gray-900 absolute rotateonhover15text px-2  mx-auto  duration-500 w-full bottom-[80px] h-[150px]">
              <div
                style={{ fontFamily: "tatris", width: "400" }}
                className="text-gray-50  relative  h-full"
              >
                <h1 className="text-xl font-bold pl-2 p-1">{props.name}</h1>
                <h1
                  className={`${
                    props.isTech ? " text-blue-400 " : " text-red-400 "
                  }${"text-md font-bold pl-2 p-1 pt-0"}`}
                >
                  {props.isTech ? "technical" : "non-technical"}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardActiv;
