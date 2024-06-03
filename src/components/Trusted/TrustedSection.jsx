import Trusted from "./Trusted";
import SliderTrusted from "./SliderTrustedImages";

export const TrustedSection = () => {
  return (
    <div className={"relative px-2 "}>
      <div>
        <div
          style={{ fontFamily: "interV" }}
          className="text-5xl  content-center  max-w-4xl text-center md:text-7xl   z-10 flex justify-center m-auto relative  mb-3 text-gray-200  font-semibold	"
        >
          <h1>
            {" "}
            Events We <span className={" text-yellow-400 "}> Organized</span>
          </h1>
        </div>
        <p
          style={{ fontFamily: "interV" }}
          className="text-lg flex text-center  mb-16 pt-6 relative z-10 text-purple-300/50 justify-center m-auto"
        >
          Never miss a chance to learn, join our events and meet our community.
        </p>
      </div>

      <div
        className={
          "relative z-10 saturate-50 contrast-150 opacity-50 overflow-clip w-full"
        }
      >
        <SliderTrusted />
        <Trusted />
      </div>
    </div>
  );
};
