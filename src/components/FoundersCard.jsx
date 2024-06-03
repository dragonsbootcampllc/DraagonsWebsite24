import React from "react";
import Image from "next/image";
import styles from "../styles/founders.module.css";

function foundersCard(props) {
  return (
    <div className="flex justify-center mx-auto flex-col ">
      <div className="h-[280px] w-[250px] rounded-full z-30  relative ">
        <div
          className={`${"border-4   border-x-black border-gray-200  overflow-hidden grid place-items-center relative rounded-[40px] h-[250px] w-[250px] "}`}
        >
          <div className={"absolute bottom-0"}>
            <div className="relative grid place-content-baseline  z-40 ">
              <div className={"relative flex gap-2 "}>
                {props.isFounder ? (
                  <div className={" h-[30px] w-[30px] mb-1 relative"}>
                    <Image
                      className="z-10 p-1 "
                      src="Identity/Images/2023/SVG/LLogo.svg"
                      alt=""
                      fill
                    />
                  </div>
                ) : null}
                {props.isMaintainer ? (
                  <div
                    className={
                      "h-[35px] w-[35px] pt-1 z-10 relative  animate-pulse"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="200"
                      height="200"
                      x="0"
                      y="0"
                      version="1.1"
                      viewBox="0 0 100 100"
                      xmlSpace="preserve"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <g
                        className="ldl-scale"
                        style={{
                          WebkitTransformOrigin: "50% 50%",
                          MsTransformOrigin: "50% 50%",
                          transformOrigin: "50% 50%",
                        }}
                      >
                        <g className="ldl-ani">
                          <g className="ldl-layer">
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="white"
                              className="0"
                              transform="scale(.8) scale(.91)"
                            ></circle>
                          </g>
                          <g className="ldl-layer">
                            <path
                              fill="purple"
                              d="M62.483 34.407l-7.505-4.333a1.323 1.323 0 00-1.807.484l-.19.328a.737.737 0 01-1.004.269l-.375-.217a.732.732 0 01-.269-1.005 1.324 1.324 0 00-.484-1.807l-3.377-1.95a1.323 1.323 0 00-1.807.484l-4.658 8.068a1.324 1.324 0 00.484 1.807l3.377 1.95a1.322 1.322 0 001.807-.484.735.735 0 011.004-.269l.375.217a.732.732 0 01.269 1.005l-.189.328a1.322 1.322 0 00.485 1.806l.637.368-1.793 3.106a2.255 2.255 0 00-.354.059 2.253 2.253 0 00-1.377 1.057L32.593 68.434a2.27 2.27 0 00.83 3.098l3.747 2.164a2.265 2.265 0 003.098-.832L53.406 50.11a2.26 2.26 0 00-.021-2.282l1.726-2.99 1.012.584a1.323 1.323 0 001.807-.484l1.564-2.709c2.079 1.504 2.592 2.676 3.317 4.331.192.439.393.896.63 1.381a1.927 1.927 0 002.013 1.082c.91-.12 1.643-.823 1.823-1.749.908-4.655.957-9.436-4.794-12.867z"
                              transform="scale(.8) scale(.91)"
                              className="0"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div
            className={
              "bg-purple-900/40 backdrop-brightness-100   -backdrop-hue-rotate-30 backdrop-contrast-125 rounded-[40px] w-full h-full z-40   absolute "
            }
          ></div>
          <Image
            src={props.image}
            className={
              "opacity-40 hover:opacity-60 duration-300  cursor-pointer z-40 "
            }
            alt=""
            fill
          />

          <Image
            src="/images/dragskin.jpg"
            className={`${"  duration-1000 rounded-[40px]   opacity-30 backdrop-saturate-150 "}${styles.animate_spin_cus}`}
            alt=""
            fill
          />
          <Image
            src="/images/dragskin.jpg"
            className={`${"  duration-1000 rounded-[40px]  opacity-10 backdrop-saturate-150 "}${styles.animate_spin_cus2}`}
            alt=""
            fill
          />
        </div>
      </div>
      <div className="grid place-items-center" style={{ fontFamily: "interv" }}>
        <h3 className="text-2xl font-bold pl-2 p-1">{props.name}</h3>
        <p className=" text-sm text-gray-200/50  font-bold pl-2 p-1 pt-0">
          {props.Pos}
        </p>
      </div>
    </div>
  );
}

export default foundersCard;
