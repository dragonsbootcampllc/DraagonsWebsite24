"use client";
import React, { useState } from "react";
import Image from "next/image";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Link from "next/link";

let iconSize = 25;
let iconSocial = "opacity-25 hover:opacity-100 duration-500 ";

function Talantcard(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [details, setDetails] = useState(false);
  const [DiscordCode, setDiscordCode] = useState(props.Link_profile_Discord);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handlePopoverCloseBoard = () => {
    setAnchorEl2(null);
  };
  const handlePopoverOpenBoard = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  function copyText(entryText) {
    navigator.clipboard.writeText(entryText);
  }

  return (
    <div
      className={`${"h-[410px] m-2 w-[350px] rounded-3xl relative pt-[10px] "} ${" bg-gray-700/10 backdrop-blur-3xl"}`}
    >
      <div
        className={`${"h-[300px] relative  rounded-3xl w-[330px] "} ${" flex mx-auto  justify-center bg-purple-300/20 "}`}
      >
        <div className="w-full h-full flex justify-center mx-auto  absolute  place-items-bottom overfolw-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-40 absolute bottom-0"
            height={250}
            width={250}
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="user"
          >
            <path d="M16.752,15.274A.986.986,0,0,1,16,14.328V13.322l1.105-1.1A2.959,2.959,0,0,0,18,10.1V6.2a6.318,6.318,0,0,0-1.932-4.519,5.972,5.972,0,0,0-8.313.068A5.9,5.9,0,0,0,6,5.961V10.1a2.949,2.949,0,0,0,.883,2.106L8,13.322v1.006a.986.986,0,0,1-.752.946A6.961,6.961,0,0,0,2,22.008V23a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1v-.992A6.961,6.961,0,0,0,16.752,15.274Z" />
          </svg>
        </div>
        <div
          className={
            "w-full border-[1px] border-opacity-70 border-purple-800/40 h-[300px] rounded-3xl bg-black/70  duration-500 hover:backdrop-blur-sm z-20"
          }
        >
          <div className={"grid grid-rows-3 h-full "}>
            {/*the badges*/}
            <div className={" rounded-t-3xl flex  "}>
              <div>
                {props.isRecomended ? (
                  <Typography
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                  >
                    <div
                      className={`${"bg-black/40  select-none  duration-500 cursor-pointer hover:shadow-yellow-400/10 shadow-md  backdrop-blur-3xl  w-[80px] h-10 rounded-full mt-4 ml-4 text-sm grid place-items-center "}`}
                    >
                      <div className={"flex gap-2"}>
                        <div className={" h-[30px]  w-[30px] relative"}>
                          <Image
                            className="z-10 p-[2px] animate-pulse opacity-70  duration-500 "
                            src="/Identity/Images/2023/SVG/LLogo.svg"
                            alt=""
                            fill
                          />
                        </div>
                        <h1
                          style={{ fontFamily: "interV" }}
                          className={"pt-[6px] text-purple-300 font-extrabold "}
                        >
                          Top
                        </h1>
                      </div>
                    </div>
                  </Typography>
                ) : null}
              </div>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography
                  style={{ fontFamily: "interV" }}
                  className={" text-sm font-bold"}
                  sx={{ p: 1 }}
                >
                  Recommended by the Team of dragons
                </Typography>
              </Popover>

              <div className={""}>
                <Popover
                  id="mouse-over-popover2"
                  sx={{
                    pointerEvents: "none",
                  }}
                  open={open2}
                  anchorEl={anchorEl2}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  onClose={handlePopoverCloseBoard}
                  disableRestoreFocus
                >
                  <Typography
                    style={{ fontFamily: "interV" }}
                    className={" text-sm font-bold"}
                    sx={{ p: 1 }}
                  >
                    Board Member
                  </Typography>
                </Popover>
              </div>
              <div className={"w-full  flex justify-end"}>
                {props.isBoard ? (
                  <div
                    className={
                      "w-10 mt-[12px] mr-4   h-10 bg-black/40 rounded-full"
                    }
                  >
                    <Typography
                      aria-owns={open2 ? "mouse-over-popover2" : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpenBoard}
                      onMouseLeave={handlePopoverCloseBoard}
                    >
                      <div
                        className={
                          " text-purple-700/40 hover:text-purple-700 font-extrabold text-3xl grid place-items-center   cursor-pointer select-none relative"
                        }
                      >
                        B
                      </div>
                    </Typography>
                  </div>
                ) : null}
              </div>
            </div>
            {/*above image imformation*/}
            <div>
              <div className={"grid grid-cols-6 "}>
                {/*The name of the person*/}
                <div
                  style={{ fontFamily: "interV" }}
                  className={
                    "col-span-4  font-bold text-white/10 hover:text-white relative overflow-clip"
                  }
                >
                  <h1
                    className={` ${
                      props.Name?.length < 14 ? "text-5xl" : "text-3xl"
                    } ${" p-4  capitalize "}`}
                  >
                    {props.Name}
                  </h1>
                </div>
                <div
                  className={"flex col-span-2 justify-center mx-auto relative"}
                >
                  {props.isMaintainer ? (
                    <div className={"h-full w-full pt-3 mt-1 animate-pulse"}>
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
                  ) : null}
                </div>
              </div>
            </div>
            <div>
              <div
                className={
                  "flex  w-full justify-center mx-auto relative h-full"
                }
              >
                <div className={"flex justify-start capitalize gap-1 w-full "}>
                  {props.tags?.map((tag) => {
                    return (
                      <div
                        className={
                          "flex justify-start capitalize gap-1 w-full px-4 absolute bottom-5"
                        }
                        key={tag}
                      >
                        <div
                          className={"rounded-full  px-3 py-2 bg-gray-700/40"}
                        >
                          {tag.position}
                        </div>
                        <div
                          className={"rounded-full  px-3 py-2 bg-gray-700/40"}
                        >
                          {tag.city}
                        </div>
                        {/* <div  className={"rounded-full  px-3 py-2 bg-gray-700/40"}>
                                {tag.JoinYear} YearEx
                                </div> */}
                      </div>
                    );
                  })}

                  {/* <div className={"rounded-full  px-3 py-2 bg-gray-700/40"}>
                             {... More tags :MAX=4}
                             </div>
                            */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {props.personal_photo?.length > 5 ? (
          <Image
            src={props.personal_photo}
            className={
              "rounded-3xl border-[1px] border-opacity-70 border-purple-800/40"
            }
            fill
            style={{ objectFit: "cover" }}
            alt={"props.TalantImageAlt"}
          />
        ) : null}
      </div>

      {/*bottom part*/}
      <div
        style={{ fontFamily: "interV" }}
        className={`${"grid grid-cols-2 pt-6"}`}
      >
        <div className={"pl-6"}>
          <div className={`${"font-bold select-none text-md pb-3"}`}>
            Joined{" "}
            <span className={"text-gray-400 select-text"}>
              {props.tags[0].joinDate}
            </span>
          </div>
          <div className={"flex gap-2 select-none "}>
            {props.Link_profile_Linkedin?.length > 5 ? (
              <Link
                className="px-1 py-1 hover:scale-105"
                href={props.Link_profile_Linkedin}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <Image
                  className={iconSocial}
                  src={"/SVG/Social/linkedin.svg"}
                  alt={"linkedin"}
                  height={iconSize}
                  width={iconSize}
                />
              </Link>
            ) : (
              <div></div>
            )}

            {props.Link_profile_Github?.length > 5 ? (
              <Link
                className="px-1 py-1 hover:scale-105 "
                href={props.Link_profile_Github}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <Image
                  className={iconSocial}
                  src={"/SVG/Social/github.svg"}
                  alt={"github"}
                  height={iconSize}
                  width={iconSize}
                />
              </Link>
            ) : (
              <div></div>
            )}

            {props.Link_profile_Discord?.length > 3 ? (
              <div
                className=" flex gap-1 cursor-copy bg-gray-700/40 px-1 py-1 rounded-full overflow-hidden "
                onClick={() => copyText(props.Link_profile_Discord)}
              >
                <Image
                  className={iconSocial}
                  src={"/SVG/Social/discord.svg"}
                  alt={"discord"}
                  height={iconSize}
                  width={iconSize}
                />{" "}
                <span className="text-sm place-items-center cursor-copy flex">
                  {DiscordCode.slice(0, 4) + "..."}
                </span>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className={"w-full justify-end flex select-none pr-6"}>
          <div
            className={`${"bg-black/40 border-gray-300 border-[1px] duration-500 hover:border-opacity-100 border-opacity-0     text-white rounded-full w-24 grid place-items-center   h-12"}`}
          >
            <button
              disabled={details}
              className={` ${" cursor-not-allowed  w-24 backdrop-blur-3xl rounded-full h-12 bg-gray-200/10 absolute"}`}
            >
              <h1
                style={{ fontFamily: "interV" }}
                className={`${"text-xl w-full justify-center flex font-light p-0 z-10"}`}
              >
                Details
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talantcard;
