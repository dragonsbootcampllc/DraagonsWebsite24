import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

const simpleFloatAnimation = {
  y: ["-20px", "22px"],
  transition: {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 4,
    ease: "easeInOut",
  },
};

const MotionImage = motion(Image);

const Dropdown_V2 = ({ isTabOpen, toggleTab, closeNav, data }) => {
  const handleClose = () => {
    toggleTab();
    closeNav();
  };

  return (
    <div className="group min-[1130px]:h-full cursor-pointer max-[1130px]:w-full text-white">
      <div className="group min-[1130px]:h-full cursor-pointer max-[1130px]:w-full">
        {/* Start Button */}
        <span
          className={`px-4 font-semibold flex items-center justify-center min-[1130px]:h-full transition-all duration-[.45s] max-[1130px]:py-8 max-[1130px]:hover:bg-transparent max-[1130px]:px-0 relative after:absolute after:h-[2px] after:bg-white ${isTabOpen ? "after:w-full text-white" : "text-white/70 after:w-0"} after:left-1/2 after:-translate-x-1/2 after:transition-all after:bottom-0 after:duration-[.45s]`}
          onClick={toggleTab}
        >
          <div className="flex items-center justify-center space-x-1">
            <span>{data.title}</span>
            <IoIosArrowDown
              className={`transition-transform duration-300 ${isTabOpen ? "rotate-180" : ""}`}
            />
          </div>
        </span>
        {/* End Button */}

        {/* Start Dropdown */}
        <div
          className={`w-screen transition-all flex justify-center items-center min-[1130px]:absolute min-[1130px]:left-1/2 min-[1130px]:top-[calc(100%+1px)] box-border min-[1130px]:-translate-x-1/2 min-[1130px]:shadow-md bg-[#0d0124] h-0 ${isTabOpen && "max-[1130px]:h-auto max-[1130px]:py-5"} overflow-hidden min-[1190px]:group-hover:h-[622px] min-[1130px]:group-hover:h-[640px]`}
        >
          {/* Start Inner Container */}
          <div className="max-w-[1400px] text-start gap-5 w-full justify-start flex items-start pt-10 transition-all px-4 box-border max-[1130px]:flex-col h-full">
            <div className="w-1/2 max-[1130px]:w-full flex flex-col gap-4">
              {/* Start Tab One */}
              <Link href={data.tab1.path} className="active:scale-90 w-full group/learn max-[1130px]:w-[90%] max-[1130px]:mx-[5%] box-border hover:shadow-md hover:border-2 transition-all px-12 flex justify-between items-center bg-purple-900/40 border border-purple-900 rounded-xl gap-2 pb-2" onClick={handleClose}>
                <span className='flex flex-col items-start gap-2 pt-4'>
                  <span className='font-bold'>{data.tab1.title}</span>
                  <span className='text-white/80'>{data.tab1.description}</span>
                  <span className='max-[1130px]:mb-5 flex justify-center items-center group-hover/learn:ml-5 text-white/70  group-hover/learn:text-purple-400 transition-all font-light mt-2'>Learn More <span className='text-lg box-border pt-1'><MdArrowRight /></span></span>
                </span>
                <span className="text-[5rem] max-[1130px]:hidden inline-block max-w-[25%]" >
                  <MotionImage src={data.tab1.Icon} width={300} height={300} animate={simpleFloatAnimation} alt="icon" />
                </span>
              </Link>
              {/* End Tab One */}

              {/* Start Tab1 Bottom Links */}
              <div className="max-w-[1400px] flex flex-row max-[1130px]:flex-col flex-wrap gap-4 transition-all justify-center items-center box-border h-full">
                {data.tab1BottomLinks.map((cat, catIndex) => (
                  <Link
                    href={cat.path}
                    className="flex group h-36 flex-col hover:scale-[1.05] w-[calc(50%-0.5rem)] max-[1130px]:w-[calc(100%-5rem)] bg-[#8e44ad]/40 border border-[#8e44ad] rounded-xl p-2 gap-1 hover:border-[#8e44ad] hover:bg-[#8e44ad] hover:text-white transition-all duration-300 text-white/80"
                    key={catIndex}
                  >
                    <div className="head flex justify-start items-center gap-3">
                      <span className="rounded-lg text-xl !text-white">
                        {cat.Icon}
                      </span>
                      <h1 className="font-semibold text-white text-lg">
                        {cat.title}
                      </h1>
                    </div>
                    <p className="text-white/70">{cat.description}</p>
                  </Link>
                ))}
              </div>
              {/* End Tab1 Bottom Links */}
            </div>

            <div className="flex flex-col w-1/2 gap-4 max-[1130px]:w-full">
              {/* Start Tab Two */}
              <Link href={data.tab2.path} className="active:scale-90 group/learn max-[1130px]:w-[90%] border-dashed hover:border-solid max-[1130px]:mx-[5%] box-border hover:shadow-md px-12 w-full flex group/learn justify-center items-center rounded-xl gap-2 transition-all border border-purple-600 hover:border-purple-900 hover:border-2 pb-2" onClick={handleClose}>
                <span className='flex flex-col items-start gap-2 pt-4 '>
                  <span className='font-bold'>{data.tab2.title}</span>
                  <span className='text-white/80 min-h-[86px] max-[1130px]: min-h-0'>{data.tab2.description}</span>
                  <span className='max-[1130px]:mb-5 flex justify-center items-center group-hover/learn:ml-5 text-white/70 group-hover/learn:text-purple-400 transition-all font-light mt-2'>Learn More <span className='text-lg box-border pt-1'><MdArrowRight /></span></span>
                </span>
                <span className="text-[5rem] max-[1130px]:hidden inline-block max-w-[25%]" >
                  < MotionImage src={data.tab2.Icon} width={300} height={300} animate={simpleFloatAnimation} alt="icon" />
                </span>
              </Link>
              {/* End Tab Two */}

              {/* Start Tab2 Bottom Links */}
              <div className="max-w-[1400px] flex flex-row max-[1130px]:flex-col flex-wrap gap-4 transition-all justify-center items-center box-border h-full">
                {data.tab2BottomLinks.map((cat, catIndex) => (
                  <Link
                    href={cat.path}
                    className="flex group h-36 flex-col hover:scale-[1.05] w-[calc(50%-0.5rem)] max-[1130px]:w-[calc(100%-5rem)] bg-[#8e44ad]/40 border border-[#8e44ad] rounded-xl p-2 gap-1 hover:border-[#8e44ad] hover:bg-[#8e44ad] hover:text-white transition-all duration-300 text-white/80"
                    key={catIndex}
                  >
                    <div className="head flex justify-start items-center gap-3">
                      <span className="rounded-lg text-xl !text-white">
                        {cat.Icon}
                      </span>
                      <h1 className="font-semibold text-white text-lg">
                        {cat.title}
                      </h1>
                    </div>
                    <p className="text-white/70">{cat.description}</p>
                  </Link>
                ))}
              </div>
              {/* End Tab2 Bottom Links */}
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
    tab1: PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      Icon: PropTypes.string,
    }).isRequired,
    tab1BottomLinks: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        Icon: PropTypes.element.isRequired,
      })
    ).isRequired,
    tab2: PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      Icon: PropTypes.string,
    }).isRequired,
    tab2BottomLinks: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        Icon: PropTypes.element.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Dropdown_V2;
