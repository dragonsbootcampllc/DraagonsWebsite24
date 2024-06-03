import Image from "next/image";
import VideoAnnounce from "../Event/VideoAnnounce/VideoAnnounce";

export const VideoSection = () => {
  // @ts-ignore

  return (
    <div className="w-full  grid place-items-center ">
      <div className={"relative flex justify-center"}>
        <div
          className={
            "z-10   flex opacity-5 absolute  w-full h-auto  justify-center m-auto "
          }
        >
          <Image
            src={"/Random/waterfall.png"}
            alt={"hart"}
            width={1000}
            height={1000}
          />
        </div>

        <div className={"z-20 pt-[70px]"}>
          <div className="mt-28 mb-6 p-2 flex justify-center ">
            <div>
              <div className="flex active:scale-95 duration-200  gap-1 text-md bg-purple-400/10 shadow-gray-200/20 shadow-inner px-4  py-2 rounded-full min-w-[30px]">
                <span className="text-purple-400/70 hover:underline duration-300  grid place-content-center">
                  We Will Push and give it 120% together{" "}
                </span>
              </div>
            </div>
          </div>

          <div
            style={{ fontFamily: "interV" }}
            className="text-5xl opacity-25 blur-sm  content-center  max-w-4xl text-center md:text-7xl   z-10 flex justify-center m-auto relative  mb-3 text-purple-900-200/20     font-semibold	"
          >
            <h1 className={"text-purple-900 "}>
              {" "}
              Ready For a{" "}
              <span className={"text-yellow-400/20 "}>Sprint ? </span>
            </h1>
          </div>
          <div
            style={{ fontFamily: "interV" }}
            className="text-5xl -mt-6  md:-mt-16  content-center  max-w-4xl text-center md:text-7xl   z-10 flex justify-center m-auto relative  mb-3 text-purple-400 grayscale    font-semibold	"
          >
            <h1>
              {" "}
              Ready For a <span className={"text-purple-400  "}>Sprint ? </span>
            </h1>
          </div>
        </div>
      </div>

      <VideoAnnounce
        smallHeadText="September Webinar"
        headText="Tech Odyssey"
        pText=" an extraordinary webinar that explores the world of cutting-edge technology , listen from an expert in the field and get to know the latest trends in the industry"
        videoURL="YBhOsNq7h5o"
        announceURl="/WebinarPage?t=435"
        titleadd="USE CODE: 435 when you asked for a code 🚨🚨"
      />
    </div>
  );
};
