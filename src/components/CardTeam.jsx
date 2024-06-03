import Image from "next/image";

import React from "react";
import Link from "next/link";

function cardTeam(props) {
  return (
    <div>
      <div className="relative h-[420px]   w-[320px]">
        <div className={` ${" bg-gray-400/10 h-[400px] w-[300px]  "}`}>
          <div
            className={` ${"border-purple-400 border-r-8 border-t-4 border-l-2 rounded-tr-3xl border-dashed  "} {
                            '  hover:animate-pulse    overflow-hidden top-0  hover:scale-105 absolute h-[400px] select-none hover:brightness-[1.1]   md:brightness-[0.2] hover:opacity-90 cursor-pointer w-[300px]   duration-500 border-gray-800 right-0 bottom-0'
                        }`}
          >
            <Image
              src={props.image}
              alt=""
              height="300"
              width="300"
              placeholder="blur"
              blurDataURL={props.image}
              className={"rounded-tr-3xl  opacity-90"}
            />
          </div>
          <div className="  bg-[#030012]/90 border-2 border-purple-300/10  text-gray-900 absolute   duration-500 w-full bottom-[20px] h-[150px]">
            <div
              style={{ fontFamily: "inherit", width: "400" }}
              className="text-gray-200  backdrop-blur-[200px]  bg-[#030014]/40  relative text-left h-full"
            >
              <div className="text-2xl flex gap-2 font-bold pl-2 p-1 capitalize">
                <h1>{props.name}</h1>

                {props?.isMaintainer == true ? (
                  <div className={"h-12 w-12 animate-pulse cursor-pointer"}>
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
                              fill="#333"
                              className="0"
                              transform="scale(.8) scale(.91)"
                            ></circle>
                          </g>
                          <g className="ldl-layer">
                            <path
                              fill="#FFF"
                              d="M62.483 34.407l-7.505-4.333a1.323 1.323 0 00-1.807.484l-.19.328a.737.737 0 01-1.004.269l-.375-.217a.732.732 0 01-.269-1.005 1.324 1.324 0 00-.484-1.807l-3.377-1.95a1.323 1.323 0 00-1.807.484l-4.658 8.068a1.324 1.324 0 00.484 1.807l3.377 1.95a1.322 1.322 0 001.807-.484.735.735 0 011.004-.269l.375.217a.732.732 0 01.269 1.005l-.189.328a1.322 1.322 0 00.485 1.806l.637.368-1.793 3.106a2.255 2.255 0 00-.354.059 2.253 2.253 0 00-1.377 1.057L32.593 68.434a2.27 2.27 0 00.83 3.098l3.747 2.164a2.265 2.265 0 003.098-.832L53.406 50.11a2.26 2.26 0 00-.021-2.282l1.726-2.99 1.012.584a1.323 1.323 0 001.807-.484l1.564-2.709c2.079 1.504 2.592 2.676 3.317 4.331.192.439.393.896.63 1.381a1.927 1.927 0 002.013 1.082c.91-.12 1.643-.823 1.823-1.749.908-4.655.957-9.436-4.794-12.867z"
                              transform="scale(.8) scale(.91)"
                              className="0"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                ) : (
                  console.log("not a Maintainer")
                )}
              </div>
              <h1 className="text-lg capitalize font-bold pl-2 text-gray-200/70 p-1 pt-0">
                {props?.work}
              </h1>
              <h1 className="text-md capitalize text-yellow-400/70 font-bold pl-2 p-1 pt-0">
                {props.Pos}
              </h1>

              <div className="flex gap-2 justify-center  right-4 pl-2 absolute bottom-4">
                <div className="duration-500 active:scale-95 mt-[6px]  hover:text-gray-400">
                  {" "}
                  {props.herfLinkedIn ? (
                    <Link legacyBehavior href={props.herfLinkedIn} passHref>
                      <svg
                        width="23px"
                        height="23px"
                        viewBox="0 0 48 48"
                        fill="white"
                      >
                        <path
                          fillRule="evenodd"
                          className="opacity-50 mt-1 hover:opacity-30 duration-300"
                          clipRule="evenodd"
                          d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM16.9605 19.8778H11.5216V36.2196H16.9605V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1326 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752L36.5754 26.8497Z"
                          fill="white"
                        ></path>
                      </svg>
                    </Link>
                  ) : null}
                </div>
                <div className="duration-500 active:scale-95 mt-[6px]  hover:text-gray-400">
                  {" "}
                  {props.herfGithub ? (
                    <Link legacyBehavior href={props?.herfGithub} passHref>
                      <svg
                        version="1.1"
                        id="Capa_1"
                        width="23px"
                        height="23px"
                        viewBox="0 0 438.549 438.549"
                      >
                        <g>
                          <path
                            fill="white"
                            fillRule="evenodd"
                            className="opacity-50 mt-1 hover:opacity-30 duration-300"
                            clipRule="evenodd"
                            d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
		c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
		c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
		c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
		c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
		c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
		c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
		c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
		c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
		c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
		c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
		c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
		c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
		c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
		c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
		c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
		c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
		c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
		c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
		C438.536,184.851,428.728,148.168,409.132,114.573z"
                          />
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cardTeam;
