import React from "react";
import TapsH from "./TapsH";
import Userinfo from "./Userinfo";

function Header(props) {
  let demoData = [
    ["1", "2", "3"],
    ["4", "5"],
  ];
  return (
    <div className="w-full h-full">
      <TapsH />

      <Userinfo
        routerasString={props.routerasString}
        Routercontroler={props.Routercontroler}
        latest={demoData}
        ActivitesString="ActivitesStringActivitesStringActivitesString"
      />
    </div>
  );
}

export default Header;
