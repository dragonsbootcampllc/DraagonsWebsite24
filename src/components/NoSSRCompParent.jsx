import dynamic from "next/dynamic";
import React from "react";
const NoSSRCompParent = (props) => (
  <React.Fragment>{props.children}</React.Fragment>
);
export default dynamic(() => Promise.resolve(NoSSRCompParent), {
  ssr: false,
});
