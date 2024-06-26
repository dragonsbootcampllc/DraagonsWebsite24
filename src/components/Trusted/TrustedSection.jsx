import Trusted from "./Trusted";
import SliderTrusted from "./SliderTrustedImages";

export const TrustedSection = () => {
  return (
    <div className={"relative px-2 py-12 "}>
    

      <div
        className={
          "relative z-10 saturate-50 contrast-150 opacity-70 overflow-clip w-full"
        }
      >
        {/* <SliderTrusted /> */}
        <Trusted />
      </div>
    </div>
  );
};
