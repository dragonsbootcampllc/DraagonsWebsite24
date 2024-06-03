import React from "react";

function MeetingComp(props) {
  return (
    <div className="max-w-[500px]">
      <div className="h-32 m-2 justify-between cursor-pointer flex active:scale-95 duration-500 select-none bg-gray-700/20 backdrop-blur-lg rounded-lg   min-w-60">
        <div className="flex gap-1 flex-col  text-green-400  cu justify-left px-2 items-center h-full">
          <h1 className="font-bold hover:underline text-xl">
            {props.ActivitesString.length > 22
              ? props.ActivitesString.slice(0, 30) + "..."
              : props.ActivitesString}
          </h1>
          <p className="text-gray-400 ">
            {props.ActivitesString.length > 22
              ? props.ActivitesStringP.slice(0, 30) + "..."
              : props.ActivitesStringP}
          </p>
        </div>
        <div className="bg-gray-400/20 backdrop-blur-lg w-32 p-1 m-2 hover:scale-95 duration-1000 rounded-lg"></div>
      </div>
    </div>
  );
}

export default MeetingComp;
