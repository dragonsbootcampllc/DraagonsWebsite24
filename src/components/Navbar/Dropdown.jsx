"use client";
import PropTypes from "prop-types";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";
import styles from './Dropdown.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";

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

const Dropdown = ({ isTabOpen, toggleTab, closeNav, data }) => {
  const handleClose = () => {
    toggleTab();
    closeNav();
  };

  return (
    <div className={`group min-[1130px]:h-full cursor-pointer max-[1130px]:w-full text-white ${styles.group}`}>
      <div className="group min-[1130px]:h-full cursor-pointer max-[1130px]:w-full" onClick={toggleTab}>
        {/* Dropdown Toggle */}
        <span className={`px-4 max-[1130px]:py-8 font-semibold flex items-center justify-center min-[1130px]:h-full transition-all duration-[.45s] max-[1130px]:hover:bg-transparent max-[1130px]:px-0 relative after:absolute after:h-[2px] text-white/70 hover:text-white after:bg-white ${isTabOpen ? 'after:w-full text-white' : 'after:w-0'} after:w-0 after:left-1/2 after:-translate-x-1/2 after:hover:w-full after:transition-all after:bottom-0`} onClick={toggleTab}>
          <div className="flex items-center justify-center space-x-1">
            <span>{data.title}</span>
            <IoIosArrowDown className={`transition-transform duration-300 ${isTabOpen ? 'rotate-180' : ''}`} />
          </div>
        </span>

        {/* Dropdown Content */}
        <div className={`w-screen transition-all flex justify-center items-center min-[1130px]:absolute min-[1130px]:left-1/2 min-[1130px]:top-[calc(100%+1px)] box-border min-[1130px]:-translate-x-1/2 min-[1130px]:shadow-md group-hover:border-b border-b-purple-900 bg-[#0d0124] h-0 ${isTabOpen && "max-[1130px]:h-auto max-[1130px]:py-5"} overflow-hidden ${styles['min-[1130px]:group-hover:h-[250px]']}`}>
          {/* Inner Container */}
          <div className="max-w-[1400px] flex-col w-full text-start flex items-center transition-all px-4 box-border max-[1130px]:flex-col">
            {/* Main Tabs */}
            <div className="flex w-full gap-2 h-[200px] max-[1130px]:flex-col max-[1130px]:h-auto">
              {/* Tab One */}
              <Link href={data.tab1.path} className="active:scale-90 w-1/2 group/learn max-[1130px]:w-[90%] max-[1130px]:mx-[5%] box-border hover:shadow-md hover:border-2 transition-all px-12 flex justify-between items-center bg-purple-900/40 border border-purple-900 rounded-xl gap-2 pb-2" onClick={handleClose}>
                <span className="flex flex-col items-start gap-2 pt-4">
                  <span className="font-bold">{data.tab1.title}</span>
                  <span className="text-white/80">{data.tab1.description}</span>
                  <span className="max-[1130px]:mb-5 flex justify-center items-center group-hover/learn:ml-5 text-white/70 group-hover/learn:text-purple-400 transition-all font-light mt-2">Learn More <MdArrowRight className="text-lg box-border pt-1" /></span>
                </span>
                <MotionImage src={data.tab1.Icon} width={300} height={300} animate={simpleFloatAnimation} alt="icon" className="text-[5rem] max-[1130px]:hidden inline-block max-w-[25%]" />
              </Link>
              {/* Tab Two */}
              <Link href={data.tab2.path} className="active:scale-90 group/learn max-[1130px]:w-[90%] border-dashed hover:border-solid max-[1130px]:mx-[5%] box-border hover:shadow-md px-12 w-1/2 flex group/learn justify-center items-center rounded-xl gap-2 transition-all border border-purple-600 hover:border-purple-900 hover:border-2 pb-2" onClick={handleClose}>
                <span className="flex flex-col items-start gap-2 pt-4">
                  <span className="font-bold">{data.tab2.title}</span>
                  <span className="text-white/80">{data.tab2.description}</span>
                  <span className="max-[1130px]:mb-5 flex justify-center items-center group-hover/learn:ml-5 text-white/70 group-hover/learn:text-purple-400 transition-all font-light mt-2">Learn More <MdArrowRight className="text-lg box-border pt-1" /></span>
                </span>
                <MotionImage src={data.tab2.Icon} width={300} height={300} animate={simpleFloatAnimation} alt="icon" className="text-[5rem] max-[1130px]:hidden inline-block max-w-[25%]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  toggleTab: PropTypes.func.isRequired,
  closeNav: PropTypes.func.isRequired,
  isTabOpen: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tab1: PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      Icon: PropTypes.object.isRequired, // should be an image URL or component
    }),
    tab2: PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      Icon: PropTypes.object.isRequired, // should be an image URL or component
    }),
  }).isRequired,
};

export default Dropdown;
