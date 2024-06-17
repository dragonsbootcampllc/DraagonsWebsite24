"use client"
import PropTypes from "prop-types";
import Link from "next/link";
import SubNavbarLink_V2 from "./SubNavbarLink_V.2";
import { MdArrowRight } from "react-icons/md";
import AiInternalAuditIMG from "@/../public/assets/Premasset/bot.png";
import SubNavbarLink_V3 from "./SubNavbarLink_V.3";


const Dropdown_V2 = ({ isTabOpen, toggleTab, closeTab, data }) => {
  return (
    <div
      className={
        "group min-[1130px]:h-full cursor-pointer max-[1130px]:w-full text-white "
      }
    >
      <div className="group min-[1130px]:h-full cursor-pointer  max-[1130px]:w-full">
        {/* Start Button */}
        <span
          className="px-4 font-semibold text-white/70 hover:text-white max-[1130px]:py-8 flex items-center justify-center min-[1130px]:h-full transition-all duration-[.45s] max-[1130px]:hover:bg-transparent max-[1130px]:px-0 relative 
                      after:absolute after:h-[2px] after:bg-white after:w-0 after:left-1/2 after:-translate-x-1/2 after:hover:w-full after:transition-all after:bottom-0"
          onClick={toggleTab}
        >
          {data.title}
        </span>
        {/* End Button */}

        {/* Start Dropdown */}
        <div
          className={`w-screen transition-all flex justify-center items-center min-[1130px]:absolute min-[1130px]:left-1/2 min-[1130px]:top-[calc(100%+1px)] box-border min-[1130px]:-translate-x-1/2 min-[1130px]:shadow-md group-hover:border-b border-b-purple-900 bg-[#0d0124]  h-0 ${isTabOpen && "max-[1130px]:h-auto max-[1130px]:py-5"
            } overflow-hidden min-[1190px]:group-hover:h-[622px] min-[1130px]:group-hover:h-[640px]`}
        >
          {/* Start Inner Container */}
          <div className="max-w-[1400px] text-start gap-3 w-full justify-start flex items-start pt-10 transition-all px-4 box-border max-[1130px]:flex-col h-full">
            <div className="w-4/5 max-[1130px]:w-full">
              {/* Start Tab One */}
              <Link
                href={data.tab1.path || ""}
                className="active:scale-90 w-full min-h-[240px] group/learn max-[1130px]:w-[90%] max-[1130px]:mx-[5%] box-border hover:shadow-md hover:border-2 transition-all px-12 flex justify-between items-center bg-purple-900/40 border border-purple-900 rounded-xl gap-2"
                onClick={closeTab}
              >
                <span className="flex flex-col items-start gap-2 pt-4">
                  <span className="font-bold">{data.tab1.title}</span>
                  <span className="text-white/80">{data.tab1.description}</span>
                  <span className="max-[1130px]:mb-5 flex justify-center items-center group-hover/learn:ml-5 text-white/70 group-hover/learn:text-purple-400 transition-all font-light mt-2">
                    Learn More{" "}
                    <span className="text-lg box-border pt-1">
                      <MdArrowRight />
                    </span>
                  </span>
                </span>
                <span className="text-[5rem] max-[1130px]:hidden inline-block max-w-[25%] ">
                  {data.tab1.Icon}
                </span>
              </Link>
              {/* End Tab One */}
              {/* Start Other Tabs One */}
              <div className="max-w-[1400px] text-start gap-3 w-full justify-start flex items-start pt-10 transition-all px-4 box-border max-[1130px]:flex-col h-full">
                {data.categories.map((cat, catIndex) => (
                  <div
                    className="flex-grow flex flex-col gap-6 max-[1150px]:pl-5"
                    key={catIndex}
                  >
                    <Link href={cat.path}>
                    <h1 
                      className={`font-bold text-[${cat.color}] text-lg`}>
                      {cat.title}
                    </h1>
                    </Link>
                    <div className="flex flex-col justify-start w-full text-start ">
                      {cat.links.map((link, linkIndex) => (
                        <SubNavbarLink_V2
                          key={linkIndex}
                          title={link.title}
                          path={link.path}
                          Icon={link.Icon}
                          clear={closeTab}
                          className={`!justify-start scale-125`}
                          color={cat.color}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* End Other Tabs One */}
            </div>

            <div className="flex flex-col w-1/2 max-[1130px]:w-full">
              {/* Start Tab Two */}
              <Link
                href={data.tab2.path || ""}
                className="active:scale-90 min-h-[240px] w-full group/learn max-[1130px]:w-[90%] border-dashed hover:border-solid max-[1130px]:mx-[5%] box-border hover:shadow-md px-12 flex group/learn justify-center items-center rounded-xl gap-2 transition-all border border-purple-600 hover:border-purple-900 hover:border-2"
                onClick={closeTab}
              >
                <span className="flex flex-col items-start gap-2 pt-4 ">
                  <span className="font-bold">{data.tab2.title}</span>
                  <span className="text-white/80">{data.tab2.description}</span>
                  <span className="max-[1130px]:mb-5 flex justify-center items-center group-hover/learn:ml-5 group-hover/learn:text-purple-400 transition-all font-light mt-2">
                    Learn More{" "}
                    <span className="text-lg box-border pt-1">
                      <MdArrowRight />
                    </span>
                  </span>
                </span>
                <span className="text-[5rem] max-[1130px]:hidden inline-block max-w-[25%]">
                  {data.tab2.Icon}
                </span>
              </Link>
              {/* End Tab Two */}

              {/* Start Other Tabs Two */}
              <div
                className={`flex flex-col max-[1130px]:w-[90%] max-[1130px]:mx-[5%] max-[1130px]:my-5 gap-4`}
              >
                <div
                  className={`text-black  font-bold text-lg min-[1130px]:hidden ${!data.moreLinks2.title && "hidden"
                    }`}
                >
                  {" "}
                  - {data.moreLinks2.title}:{" "}
                </div>

                <div className="flex justify-between gap-2 pt-2 -sm:flex-wrap max-[550px]:flex-col">
                  <div className="flex flex-col w-full flex-wrap gap-5 justify-center">
                    {data.moreLinks2.links.map((link, index) => (
                      <SubNavbarLink_V3
                        title={link.title}
                        Icon={link.Icon}
                        path={link.path}
                        clear={closeTab}
                        key={index}
                      />
                    ))}
                  </div>
                  {/*  ai internal Audit Nav Component */}
                  <Link
                    href="/ai-chatbot"
                    className="w-full flex justify-center items-center active:scale-90 transition-all"
                    onClick={closeTab}
                  >
                    <div className="min-h-[240px] group/learn max-[1130px]:w-[90%] w-full max-[1130px]:mx-[5%] hover:shadow-md hover:border-2 transition-all flex justify-center items-center bg-[#02c2ab]/40 border border-[#02c2ab] rounded-xl gap-2">
                      <div className="flex flex-col  gap-2">
                        <div>
                          <img
                            src={AiInternalAuditIMG}
                            alt="AI Internal Audit"
                            className="w-24 h-24 mx-auto object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <span className="font-bold">Ai Internal Audit</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* End Other Tabs Two */}
            </div>
          </div>
          {/* End Inner Container */}
        </div>
        {/* End Dropdown */}
      </div>
    </div>
  );
};

Dropdown_V2.propTypes = {
  toggleTab: PropTypes.func.isRequired,
  closeTab: PropTypes.func.isRequired,
  isTabOpen: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            Icon: PropTypes.element.isRequired,
            title: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
          }).isRequired
        ).isRequired,
      }).isRequired
    ).isRequired,
  }),
};

export default Dropdown_V2;