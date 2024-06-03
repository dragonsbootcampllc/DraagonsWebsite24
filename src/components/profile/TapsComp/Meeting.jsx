import React from "react";
import MeetingComp from "../MeetingComp";

function Meeting(props) {
  return (
    <div className="h-full mt-3 ">
      <div className="flex justify-center">
        <h1 style={{ fontFamily: "dragons" }} className=" text-7xl">
          meetings
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {props.latest.map((item, index) => (
          <MeetingComp
            key={index}
            ActivitesString={item}
            routerasString={props.routerasString}
            ActivitesStringP={item}
            Routercontroler={props.Routercontroler}
          />
        ))}
      </div>
    </div>
  );
}

export default Meeting;
