import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import celebrate from "../../../public/JSON/user/60051-shapes-v1.json";

function SmallCards(props) {
  let currentDate = new Date();
  let eventDate = new Date(props.date);

  function GetTicket() {
    if (props.ticket !== "") {
      window.open(props.ticket, "_blank");
    }
  }
  function SeePartsOfTheTalk() {
    // open link in new tab
    window.open(props.Parts_of_the_talk, "_blank");
  }

  return (
    <div className="main ">
      <div className="wrapper relative bg-gray-900/40   container justify-evenly opacity-75 gap-[20px] rounded-xl p-2 ml-auto mr-auto overflow-hidden text-white flex flex-wrap">
        <div className={" h-[550px] relative duration-500 rounded-2xl  "}>
          <div className="box   w-60 relative   m-4 rounded-2xl">
            <div className="absolute rounded-xl overflow-hidden">
              <Lottie animationData={celebrate} />{" "}
            </div>
            <div className="img-and-icons  relative">
              <div className="w-full bg-gray-900/40 hover:bg-gray-900/80 duration-500 rounded-xl w-60 h-60  relative">
                <div
                  className={
                    "absolute top-2 w-full justify-between px-2 flex gap-1 overflow-hidden"
                  }
                >
                  {props?.tags?.map((tag, index) => (
                    <div
                      key={index}
                      className={"bg-gray-900/60 p-2  rounded-xl py-1"}
                    >
                      <h1 className={"text-sm"}> {props.tags[index]}</h1>
                    </div>
                  ))}
                </div>
                <div
                  className={
                    "absolute bottom-0 z-20 rounded-b-xl  w-full flex justify-between px-2 bg-gray-900/40 shadow-sm opacity-90  "
                  }
                >
                  <h1 className={"text-md grid place-items-center capitalize"}>
                    {props.date}
                  </h1>
                  <h1 className={"text-sm grid place-items-center capitalize"}>
                    {props.hour}{" "}
                    <span className={"text-yellow-400 font-bold"}>
                      Cairo Time
                    </span>
                  </h1>
                </div>
                <div className=" overflow-hidden h-[90%]   absolute bottom-0  w-full rounded-xl">
                  <Image
                    alt={props.name}
                    fill
                    className="overflow-hidden h-full w-full rounded-xl"
                    src={props.image}
                  />
                </div>
              </div>
            </div>
            <h2
              style={{ fontFamily: "interV" }}
              className=" text-white text-left text-gray-50 font-bold mb-2 mt-2 text-3xl"
            >
              {props.name}
            </h2>
            <p className="country text-sm text-left text-gray-50 font-light">
              {" "}
              {props.langauge}{" "}
            </p>
            <div style={{ fontFamily: "interV" }} className="talk">
              <p className="talk-p mt-4 mb-4 text-base font-bold max-w-60 text-left text-gray-50">
                <span className={"font-thin"}>Talk:</span> {props.talk}
              </p>
            </div>
            <p
              style={{ fontFamily: "interV" }}
              className=" text-left text-sm text-gray-500  "
            >
              {
                // if the description is longer than 100 characters, cut it and add "..."
                props.description.length > 110
                  ? props.description.substring(0, 120) + "..."
                  : props.description
              }
            </p>
          </div>
          <div
            style={{ fontFamily: "interV" }}
            className={"w-full bottom-0  absolute"}
          >
            {eventDate > currentDate ? (
              <button
                onClick={GetTicket}
                className={`${
                  props.ticket === ""
                    ? "bg-gray-500/40 cursor-not-allowed "
                    : "bg-red-500 hover:bg-red-500/80  cursor-pointer"
                }${"    h-12 w-40     duration-500 text-sm relative p-2 px-4  rounded-xl"}`}
              >
                <span className={"text-sm capitalize font-bold "}>
                  {" "}
                  {props.ticket === "" ? "SOON" : "Get ticket"}{" "}
                </span>
              </button>
            ) : (
              <button
                onClick={SeePartsOfTheTalk}
                className={
                  "bg-gray-500/40 hover:bg-gray-500/80  h-12 w-40       duration-500 text-xs  relative p-2 px-4  rounded-xl"
                }
              >
                <span className={"text-sm capitalize  font-bold"}>
                  {" "}
                  parts of the talk{" "}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallCards;
