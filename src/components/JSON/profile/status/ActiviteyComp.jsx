import React from "react";

function ActiviteyComp(props) {
  return (
    <div
      onClick={() =>
        props.Routercontroler.push(props.routerasString + "/photos")
      }
      className="h-12 m-2 cursor-pointer active:scale-95 duration-500 select-none bg-gray-700/40 rounded-lg   w-60"
    >
      <div className="flex text-green-400 hover:underline cu justify-left px-2 items-center h-full">
        <h1>
          {props.ActivitesString.length > 22
            ? props.ActivitesString.slice(0, 30) + "..."
            : props.ActivitesString}
        </h1>
      </div>
    </div>
  );
}

export default ActiviteyComp;
