import React from "react";
import FoundersCard from "./FoundersCard";
import foundersArr from "./JSON/founders";
import ManagersArr from "./JSON/Managers";

function founders() {
  return (
    <div>
      <div>
        <div className="relative mt-12 flex justify-center m-auto  z-40 h-[50px] w-[50px] duration-700"></div>
        <div
          style={{ fontFamily: "interV" }}
          className="text-5xl  content-center  max-w-4xl text-center md:text-7xl   z-10 flex justify-center m-auto relative  mb-3 text-gray-200  font-semibold	"
        >
          <h1>
            {" "}
            Founders <span className={" text-yellow-400 "}> & High Board </span>
          </h1>
        </div>
        <p
          style={{ fontFamily: "interV" }}
          className="text-lg px-4 flex text-center  mb-16 pt-6 relative z-10 text-purple-300/50 justify-center m-auto"
        >
          The success, often depends on the vision and leadership provided by
          its founders and high board members.
        </p>
      </div>
      <div className="grid overflow-hidden mt-12 relative place-items-center text-xl font-bold md:text-3xl lg:text-7xl">
        <div className={"relative w-full grid   text-center"}>
          <div></div>

          <div className=" pl-3 md:pl-0   overflow-x-auto max-w-5xl mb-20  flex gap-5 m-auto pr-[650px] md:pr-[20px]  relative overflow-hidden  mt-12">
            <div className={"h-full w-[10px] absolute"}></div>
            {foundersArr.map((index) => (
              <FoundersCard
                key={index}
                name={index.name}
                image={index.image}
                Pos={index.Pos}
                isMaintainer={index.isMaintainer}
                isFounder={index.isFounder}
              />
            ))}
            {ManagersArr.map((index) => (
              <FoundersCard
                key={index}
                name={index.name}
                image={index.image}
                Pos={index.Pos}
                isMaintainer={index.isMaintainer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default founders;
