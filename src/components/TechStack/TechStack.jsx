import React, { useState } from "react";
import { TbApi, TbBrandThreejs, TbMathIntegralX } from "react-icons/tb";
import {
  SiD3Dotjs,
  SiDjango,
  SiJupyter,
  SiNextdotjs,
  SiNginx,
  SiNumpy,
  SiPandas,
  SiRedux,
  SiScikitlearn,
  SiSolid,
  SiSqlite,
  SiSwc,
  SiTypescript,
  SiWebassembly,
  SiWebpack,
} from "react-icons/si";
import { FaDocker, FaGitAlt, FaPython, FaReact, FaSass } from "react-icons/fa";
import { RiSvelteFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVue } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { BsAlignMiddle, BsBrowserChrome, BsFileSpreadsheetFill } from "react-icons/bs";
import { AiOutlineOpenAI } from "react-icons/ai";
import { SiAxios } from "react-icons/si";
import { MdOutlineDataObject } from "react-icons/md";
import { BiLogoPostgresql } from "react-icons/bi";
import { HiTemplate } from "react-icons/hi";

function TechStack(props) {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className=' relative mx-auto z-20  md:px-4 px-1    max-w-[1100px] min-h-screen pb-20   justify-center    text-gray-200 '>
      <div className='w-full  max-w-[1400px] flex flex-col gap-8 text-white'>
        <div className='head container mx-auto flex flex-col gap-7 justify-center text-center max-w-[800px] pt-5'>
          <h1 className='md:text-2xl  grid place-items-center text-xl md:text-center text-start font-medium text-purple-800 uppercase'>
            Tech Stack
          </h1>
          <h1 className='text-3xl capitalize md:text-6xl font-semibold'>
            {props.MainText}
          </h1>
          <p className='text-white/50 text-lg md:text-base'>
            {props.SecondaryText}
          </p>
        </div>
      </div>

      <div className='containerTechstack'>
        <div className='bloc-tabsTechstack relative box-border  align-middle justify-center mx-auto text-center grid gap-1 gap-y-3 select-none cursir-pointer sm:grid-cols-3 grid-cols-3 text-xs sm:text-lg font-bold lg:grid-cols-6 md:grid-cols-4'>
          <button
            className={
              toggleState === 1
                ? "tabsTechstack active-tabsTechstack text-purple-800 duration-500 animate-pulse"
                : "tabsTechstack"
            }
            onClick={() => toggleTab(1)}>
            <h5
              style={{ fontFamily: "Poppins-Bold", width: "400" }}
            
              className="text-sm"
              >
              {" "}
              Front End
            </h5>
          </button>
          <button
            className={
              toggleState === 2
                ? "tabsTechstack active-tabsTechstack text-purple-800 duration-500 animate-pulse"
                : "tabsTechstack"
            }
            onClick={() => toggleTab(2)}>
            <h5  className="text-sm" style={{ fontFamily: "Poppins-Bold", width: "400" }}>
              Back End
            </h5>
          </button>
          <button
            className={
              toggleState === 3
                ? "tabsTechstack active-tabsTechstack text-purple-800 duration-500 animate-pulse"
                : "tabsTechstack"
            }
            onClick={() => toggleTab(3)}>
            <h5 className="text-sm" style={{ fontFamily: "Poppins-Bold", width: "400" }}>
              Data Analysis
            </h5>
          </button>
          <button
            className={
              toggleState === 4
                ? "tabsTechstack active-tabsTechstack text-purple-800 duration-500 animate-pulse"
                : "tabsTechstack"
            }
            onClick={() => toggleTab(4)}>
            <h5 className="text-sm" style={{ fontFamily: "Poppins-Bold", width: "400" }}>Mobile</h5>
          </button>
          <button
            className={
              toggleState === 5
                ? "tabsTechstack active-tabsTechstack text-purple-800 duration-500 animate-pulse"
                : "tabsTechstack"
            }
            onClick={() => toggleTab(5)}>
            <h5 className="text-sm" style={{ fontFamily: "Poppins-Bold", width: "400" }}>
              Infra and DevOps
            </h5>
          </button>
          <button
            className={
              toggleState === 6
                ? "tabsTechstack active-tabsTechstack text-purple-800 duration-500 animate-pulse"
                : "tabsTechstack"
            }
            onClick={() => toggleTab(6)}>
            <h5 className="text-sm" style={{ fontFamily: "Poppins-Bold", width: "400" }}>
              Testing
            </h5>
          </button>
        </div>
        <hr />

        <div className='content-tabsTechstack  relative w-full h-full'>
          <div
            className={
              toggleState === 1
                ? "contentTechstack  active-contentTechstack"
                : "contentTechstack"
            }>
            <div className='justify-center relative h-full flex'>
              <div className='grid grid-cols-3 place-items-center duration-500 md:grid-cols-4 lg:grid-cols-6 max-w-[1000px]   gap-2 items-center justify-center  '>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <TbBrandThreejs className='w-[45px] h-[48px]' />
                  
                  </div>
                  <h6>Three.js </h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <SiWebassembly className='w-[45px] h-[48px]' />
                  </div>
                  <h6>WebAssembly </h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <FaSass className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Saas </h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <RiSvelteFill className='w-[45px] h-[48px]' />
                  </div>
                  <h6>svelte</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <FaReact className='w-[45px] h-[48px]' />
                  </div>
                  <h6>React</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <SiTypescript className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Typescript</h6>
                </div>

                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <FaGitAlt className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Git</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <IoLogoVue className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Vue</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <SiSolid className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Solid</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <IoLogoJavascript className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Javascript</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <RiTailwindCssFill className='w-[45px] h-[48px]' />
                  </div>
                  <h6>TailwindCss</h6>
                </div>

                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <BsBrowserChrome className='w-[45px] h-[48px]' />
                  </div>
                  <h6>V8 Engine</h6>
                </div>

                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <SiNextdotjs className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Next.js</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <SiRedux className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Redux</h6>
                </div>

                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <AiOutlineOpenAI className='w-[45px] h-[48px]' />
                  </div>
                  <h6>AI</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <SiAxios className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Axios</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <SiSwc className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Swc</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <SiWebpack className='w-[45px] h-[48px]' />
                  </div>
                  <h6>WebPack</h6>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "contentTechstack  active-contentTechstack"
                : "contentTechstack"
            }>
            <div className='justify-center flex'>
              <div className='grid grid-cols-3 duration-500 md:grid-cols-4 lg:grid-cols-6 max-w-[1000px]  gap-1 sm:gap-2 items-center justify-center  '>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <SiDjango className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Django </h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <FaPython className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Python </h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <TbApi className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Django Rest</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <BiLogoPostgresql className='w-[45px] h-[48px]' />
                  </div>
                  <h6>PostgreSQL</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <FaDocker className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Docker</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <FaGitAlt className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Git</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <BsAlignMiddle className='w-[45px] h-[48px]' />
                  </div>
                  <h6>ORM</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <AiOutlineOpenAI className='w-[45px] h-[48px]' />
                  </div>
                  <h6>AI</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <SiNginx tlineOpenAI className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Nginx</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <SiSqlite tlineOpenAI className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Sqlite</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <HiTemplate tlineOpenAI className='w-[45px] h-[48px]' />
                  </div>
                  <h6>Django Templates</h6>
                </div>
                <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <MdOutlineDataObject className='w-[45px] h-[48px]' />
                  </div>
                  <h6>OOP</h6>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 3
                ? "contentTechstack  active-contentTechstack"
                : "contentTechstack"
            }>
            <div className='justify-center  flex'>
              <div className='grid grid-cols-3 duration-500 md:grid-cols-4 lg:grid-cols-6 max-w-[1000px]   gap-2 items-center justify-center  '>
                  <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                    <div className='w-full grid place-items-center'>
                      <FaPython className='w-[45px] h-[48px]' />
                    </div>
                    <h6>Python </h6>
                  </div>
                  <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                    <div className='w-full grid place-items-center'>
                      <SiJupyter className='w-[45px] h-[48px]' />
                    </div>
                    <h6>Jupyter </h6>
                  </div>
                  <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                    <div className='w-full grid place-items-center'>
                      <SiPandas className='w-[45px] h-[48px]' />
                    </div>
                    <h6>Pandas </h6>
                  </div>
                  <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                    <div className='w-full grid place-items-center'>
                      <SiNumpy className='w-[45px] h-[48px]' />
                    </div>
                    <h6>Numpy  </h6>
                  </div>
                  <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                    <div className='w-full grid place-items-center'>
                      <SiD3Dotjs className='w-[45px] h-[48px]' />
                    </div>
                    <h6>D3.js</h6>
                  </div>
                  <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                    <div className='w-full grid place-items-center'>
                      <TbMathIntegralX className='w-[45px] h-[48px]' />
                    </div>
                    <h6>Math</h6>
                  </div>
                  <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                    <div className='w-full grid place-items-center'>
                      <BsFileSpreadsheetFill className='w-[45px] h-[48px]' />
                    </div>
                    <h6>Spreadsheet</h6>
                  </div>
                  <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                    <div className='w-full grid place-items-center'>
                      <FaGitAlt className='w-[45px] h-[48px]' />
                    </div>
                    <h6>Git</h6>
                  </div>
                  <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                    <div className='w-full grid place-items-center'>
                      <SiScikitlearn className='w-[45px] h-[48px]' />
                    </div>
                    <h6>Scikitlearn</h6>
                  </div>
                  <div className='hover:bg-gray-700/40  grid cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative    max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className='w-full grid place-items-center'>
                    <BiLogoPostgresql className='w-[45px] h-[48px]' />
                  </div>
                  <h6>PostgreSQL</h6>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 4
                ? "contentTechstack !m-0 !p-0 relative active-contentTechstack"
                : "contentTechstack relative"
            }>
            {" "}
            <div className='z-100 w-full h-full grid place-items-center absolute rounded-2xl bg-purple-800/20 opacity-70 '>
              available soon
            </div>
            <div className='justify-center relative opacity-20 flex'>
              <div className='grid grid-cols-3 duration-500 md:grid-cols-4 lg:grid-cols-6 max-w-[1000px]   gap-2 items-center justify-center  '>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='48px'
                      height='43px'
                      viewBox='0 0 48 43'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'>
                      {/* Generator: Sketch 61.2 (89653) - https://sketch.com */}
                      <title>ic-technology-react-native</title>
                      <desc>Created with Sketch.</desc>
                      <g
                        id='Page-1'
                        stroke='none'
                        strokeWidth={1}
                        fill='none'
                        fillRule='evenodd'>
                        <g
                          id='ic-technology-react-native'
                          fill='#dbd9d9'
                          fillRule='nonzero'>
                          <path
                            d='M25.2177312,4.20429955 C29.3535481,0.605090062 33.4486979,-0.9005081 35.9526945,0.543430621 C38.5641082,2.04934443 39.3288119,6.62328535 38.1592242,12.3005857 C38.0880216,12.646558 38.0086543,12.9980418 37.9213387,13.3545517 C38.4520569,13.5075203 38.9676509,13.6701068 39.4657953,13.8415997 C44.6499945,15.6263928 48,18.4216587 48,21.3122463 C48,24.3266959 44.4197907,27.2741295 38.9171726,29.0972779 C38.6263423,29.1936332 38.3288625,29.2867445 38.0250783,29.3765757 C38.1337997,29.8128134 38.2295952,30.2402257 38.3124936,30.6589769 C39.3987025,36.1463175 38.562086,40.656205 35.9875191,42.1465783 C33.494824,43.5896323 29.4657134,42.1720307 25.3864398,38.661625 C24.9557352,38.2910058 24.5227928,37.895998 24.0891554,37.4784701 C23.7546049,37.8018192 23.4203329,38.1096583 23.0872021,38.4008416 C18.8757737,42.0823005 14.55061,43.6098443 11.9739227,42.1238481 C9.47859461,40.685899 8.69455461,36.4867384 9.69854676,31.1990041 C9.80435954,30.6417197 9.93011488,30.0703597 10.0749686,29.4871825 C9.62847908,29.358404 9.19523548,29.2227804 8.77694494,29.0798428 C3.48389697,27.2706721 0,24.2870631 0,21.3122463 C0,18.4320406 3.24538223,15.6554196 8.32716999,13.8836624 C8.89522093,13.6856153 9.48818011,13.4990941 10.1032137,13.3245723 C9.96990283,12.7857066 9.8514539,12.2549497 9.74961112,11.7349249 C8.69679948,6.35413083 9.4375866,2.05425624 11.9392493,0.606163081 C14.5481032,-0.904180674 18.8927455,0.717611379 23.2273028,4.56638459 C23.491637,4.80108335 23.7566673,5.04560517 24.0220801,5.29951962 C24.3086788,5.02460406 24.5946526,4.75858234 24.8802632,4.50245917 L24.8802632,4.50245917 Z M36.0415294,29.8961188 L35.8242092,29.945917 C33.8939104,30.3802447 31.7763758,30.7002024 29.540027,30.8985887 C28.2210363,32.8085925 26.8696083,34.5275899 25.5175606,36.0064556 C25.9213263,36.3959337 26.3240403,36.7632638 26.7239193,37.1073577 C30.2125535,40.1094906 33.447526,41.2476828 34.9602039,40.3719738 C36.5543643,39.4491412 37.2354399,35.7777167 36.3010151,31.0571631 C36.2260354,30.6784127 36.1394331,30.2911745 36.0415294,29.8961188 Z M12.0640824,29.988568 L12.0313731,30.1178777 C11.9452324,30.4713498 11.8667374,30.8196901 11.796104,31.1623008 L11.796104,31.1623008 L11.7130668,31.5815051 C10.8544798,36.1034329 11.4839799,39.474909 12.9980218,40.3473856 C14.5936684,41.2676078 18.1147312,40.0240531 21.7377003,36.8570012 C22.0407489,36.5921123 22.3454805,36.3116687 22.6514199,36.0163647 C21.2504037,34.5110755 19.8599013,32.7935775 18.532119,30.9253711 C16.2063502,30.7361503 14.0304109,30.4231988 12.0640824,29.988568 Z M26.8976733,31.073697 L26.6730115,31.0833345 C25.7938064,31.1193912 24.9016956,31.1376146 24.0003845,31.1376146 C23.0479292,31.1376146 22.1104762,31.119494 21.1912711,31.0834028 C22.1384552,32.330947 23.1083103,33.4915544 24.080467,34.5404355 C25.0191263,33.5058834 25.9629227,32.3438916 26.8976733,31.073697 Z M24.0003845,13.6228276 C22.521233,13.6228276 21.0572836,13.6786342 19.6300054,13.7864045 C18.8233128,14.9667453 18.0434363,16.206859 17.3021469,17.4922306 L17.3021469,17.4922306 L17.0239065,17.97847 C16.3906858,19.1013808 15.8008816,20.2335502 15.2594384,21.3612712 C15.8800731,22.6497029 16.5650495,23.9448202 17.3084641,25.2287718 C18.0540605,26.51662 18.8408521,27.7628828 19.6544886,28.9505829 C21.0534267,29.0411685 22.5068437,29.0871029 24.0003845,29.0871029 C25.5004385,29.0871029 26.9724233,29.034942 28.3971202,28.9330058 C29.178216,27.7606338 29.9482457,26.5183112 30.6983593,25.2176257 C31.4479286,23.9178591 32.1382202,22.6165521 32.7617058,21.3314946 C32.1364792,20.068838 31.444524,18.7808599 30.6920372,17.4810537 C29.9479147,16.1956859 29.1733595,14.9597866 28.3797058,13.7883212 C26.9526772,13.6790545 25.4865128,13.6228276 24.0003845,13.6228276 Z M14.1725462,23.7726728 L14.1106548,23.9193808 C13.5272978,25.3155437 13.025949,26.6883121 12.6163676,28.0106326 C13.9865453,28.3086863 15.4688244,28.5462264 17.0406269,28.7215534 C16.5235349,27.9192365 16.0201515,27.0960458 15.5339197,26.2561909 C15.0566053,25.431821 14.6022908,24.6025521 14.1725462,23.7726728 Z M33.8676541,23.6989615 L33.7632855,23.8988895 C33.3551635,24.6787335 32.9251152,25.460908 32.4746538,26.2420162 C31.9912188,27.0802851 31.4993333,27.8957785 31.0008327,28.6856274 C32.5848956,28.4948588 34.087749,28.2391502 35.4796157,27.9215996 C35.0501166,26.5765075 34.5092518,25.1613944 33.8676541,23.6989615 Z M10.6549236,15.3001778 L10.440807,15.3610218 C9.94399085,15.5058657 9.46386313,15.6589227 9.00222105,15.8198711 C4.65624592,17.3350884 2.05051165,19.5644518 2.05051165,21.3122463 C2.05051165,23.1542517 4.88671232,25.5831736 9.44007032,27.1395174 C9.82086864,27.2696432 10.2159602,27.3934629 10.6245071,27.5109115 C11.2313913,25.5338598 12.0307388,23.458206 12.9937744,21.3617486 C12.0432696,19.2968856 11.2555557,17.2541049 10.6549236,15.3001778 Z M37.3723771,15.3300442 L37.3498491,15.4030948 C36.762059,17.2917611 35.9814701,19.2856869 35.0360177,21.3221597 C36.0393323,23.4351682 36.8585794,25.4797979 37.4660455,27.4028065 L37.812303,27.2984547 L37.812303,27.2984547 L38.2722766,27.1508178 C43.0233786,25.5766645 45.9494884,23.1677232 45.9494884,21.3122463 C45.9494884,19.5703437 43.2401336,17.3096409 38.7983148,15.7804312 C38.3391321,15.6223515 37.8633231,15.4721293 37.3723771,15.3300442 Z M24.000299,17.0260788 C26.3674839,17.0260788 28.2864664,18.9450614 28.2864664,21.3122463 C28.2864664,23.6794312 26.3674839,25.5984137 24.000299,25.5984137 C21.6331141,25.5984137 19.7141316,23.6794312 19.7141316,21.3122463 C19.7141316,18.9450614 21.6331141,17.0260788 24.000299,17.0260788 Z M31.0078622,14.0532331 L31.0805586,14.1678029 C31.5522711,14.9106594 32.0150236,15.673631 32.4666248,16.4537092 C32.951765,17.2917149 33.412927,18.1256904 33.8485372,18.9526012 C34.4547658,17.5310018 34.9706173,16.1445011 35.3843146,14.8185719 C34.0069544,14.5034276 32.5391451,14.2468767 31.0078622,14.0532331 Z M16.9974669,14.0484674 L16.4902822,14.1148588 C15.1508165,14.2955961 13.8625224,14.5239294 12.6459014,14.796189 C13.0622434,16.1403262 13.5736723,17.5331769 14.170456,18.9489803 C14.598369,18.1193177 15.0506009,17.2904693 15.5248476,16.4678674 L15.5248476,16.4678674 L15.8525227,15.8995003 L15.8575673,15.8995476 L16.1082033,15.4796797 C16.3996769,14.995598 16.696305,14.5182796 16.9974669,14.0484674 Z M34.8296176,2.26705386 C33.278379,1.50228269 30.0320126,2.73290957 26.5638355,5.75110313 C26.1972098,6.07015708 25.829082,6.4075708 25.4604403,6.76219118 C26.8322058,8.24121246 28.198866,9.94870142 29.5175584,11.826493 C31.7818066,12.0391523 33.9450054,12.3812808 35.9368747,12.8409195 C36.0146856,12.5184801 36.0864158,12.2001113 36.1508463,11.8870448 C37.1607313,6.98495792 36.5357394,3.24667864 34.9283586,2.31975659 L34.9283586,2.31975659 Z M21.6369591,5.89872982 C17.979164,2.72340888 14.5396534,1.47005935 12.9665553,2.38077303 C11.4590371,3.25340338 10.8599215,6.73095023 11.7619305,11.3410102 C11.8564498,11.8236403 11.9664511,12.3169576 12.0914111,12.8194766 C14.0779395,12.3692921 16.2393829,12.0330938 18.4972219,11.8238964 C19.8136938,9.96520189 21.1922665,8.25994688 22.5870739,6.76229938 C22.3455364,6.5337433 22.1052232,6.31223235 21.8658582,6.09970342 L21.8658582,6.09970342 Z M24.0242489,8.22984548 L23.8712963,8.39378086 C22.9619965,9.38609494 22.0582251,10.4733084 21.174881,11.6380367 C22.1080394,11.5944919 23.0514177,11.5723159 24.0003845,11.5723159 C24.9585031,11.5723159 25.9091438,11.5948849 26.8477492,11.6392264 C25.9169971,10.398561 24.969918,9.25447954 24.0242489,8.22984548 Z'
                            id='Combined-Shape-Copy-22'
                          />
                        </g>
                      </g>
                    </svg>

                    <h5>React Native</h5>
                  </div>
                </div>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='m-auto mb-2'
                      width='48px'
                      height='43px'
                      preserveAspectRatio='xMinYMin meet'
                      viewBox='0 0 256 256'>
                      <path
                        fill='#dbd9d9'
                        d='M237.248 18.752c12.04 12.04 18.291 27.122 18.748 45.247V192c-.457 18.12-6.707 33.207-18.748 45.247-12.04 12.04-27.127 18.291-45.251 18.752H63.999c-18.125-.46-33.207-6.711-45.247-18.752C6.712 225.208.46 210.121 0 192.001V64c.46-18.125 6.711-33.207 18.752-45.247C30.792 6.712 45.874.46 63.999 0h127.998c18.124.46 33.211 6.711 45.251 18.752zm-17.655 103c-4.023-4.002-6.114-9.024-6.28-15.066V64c-.128-6.042-2.202-11.072-6.221-15.091-4.02-4.023-9.054-6.093-15.095-6.22h-21.312v106.626L85.315 42.687H63.999c-6.042.128-11.072 2.198-15.091 6.221-4.023 4.02-6.093 9.05-6.22 15.09v42.688c-.167 6.042-2.258 11.064-6.281 15.066-4.02 3.997-9.05 6.08-15.091 6.246 6.041.17 11.072 2.253 15.09 6.25 4.024 4.002 6.115 9.024 6.281 15.066V192c.128 6.037 2.198 11.072 6.221 15.091 4.02 4.02 9.05 6.093 15.09 6.22h21.317V106.687l85.37 106.627h21.312c6.041-.128 11.076-2.202 15.095-6.221 4.02-4.02 6.093-9.054 6.22-15.09v-42.688c.167-6.042 2.258-11.064 6.281-15.066 4.02-3.997 9.05-6.08 15.091-6.25-6.041-.167-11.072-2.249-15.09-6.246z'
                      />
                    </svg>
                    <h5>Nativescript</h5>
                  </div>
                </div>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      viewBox='0 0 39 48'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'>
                      {/* Generator: Sketch 61.2 (89653) - https://sketch.com */}
                      <title>ic-technology-ios</title>
                      <desc>Created with Sketch.</desc>
                      <g
                        id='Page-1'
                        stroke='none'
                        strokeWidth={1}
                        fill='#dbd9d9'
                        fillRule='evenodd'>
                        <g
                          id='ic-technology-ios'
                          fill='#dbd9d9'
                          fillRule='nonzero'>
                          <path d='M32.5716099,25.5008908 C32.638918,32.7648937 38.9302972,35.1821425 39,35.212912 C38.9468035,35.3833013 37.9947409,38.6576394 35.6853988,42.0397993 C33.6889921,44.9639307 31.6171526,47.8771771 28.3532676,47.9375162 C25.1461711,47.996741 24.1149124,46.0316925 20.4482909,46.0316925 C16.7827812,46.0316925 15.6370048,47.8772628 12.6011291,47.9968267 C9.45065004,48.1163907 7.05150686,44.8349388 5.03867944,41.921521 C0.925532668,35.9621794 -2.21776226,25.0818599 2.00288924,17.7374621 C4.09961655,14.0902045 7.84663142,11.7806061 11.9136803,11.7213812 C15.0073708,11.662242 17.9273604,13.8071936 19.818657,13.8071936 C21.7087562,13.8071936 25.2571824,11.2276978 28.9876054,11.6065312 C30.5492892,11.67167 34.9330367,12.2387203 37.7478306,16.3678335 C37.5210187,16.5087389 32.5172161,19.4279849 32.5716099,25.5008908 M26.5442459,7.66392068 C28.2168554,5.63493329 29.3426191,2.81039566 29.0354993,0 C26.6245537,0.0971082123 23.7091825,1.61004216 21.97987,3.63791533 C20.4300741,5.43368874 19.0727947,8.30793755 19.4390121,11.0627081 C22.1262885,11.2710665 24.8715508,9.6941937 26.5442459,7.66392068' />
                        </g>
                      </g>
                    </svg>

                    <h5>IOS</h5>
                  </div>
                </div>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      viewBox='0 0 48 48'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'>
                      {/* Generator: Sketch 61.2 (89653) - https://sketch.com */}
                      <title>ic-technology-kotlin</title>
                      <desc>Created with Sketch.</desc>
                      <g
                        id='Page-1'
                        stroke='none'
                        strokeWidth={1}
                        fill='#dbd9d9'
                        fillRule='evenodd'>
                        <g
                          id='ic-technology-kotlin'
                          fill='#dbd9d9'
                          fillRule='nonzero'>
                          <path d='M24.7545,24.6 L47.2795047,47.2850657 L2.1135,47.2845 L24.7545,24.6 Z M47.2795047,-1.7079671e-12 L-4.60165239e-12,47.2795047 L-4.60165239e-12,27 L25.5,0.0111219724 L47.2795047,-1.7079671e-12 Z M23.7454111,0.0111219724 L-6.98907598e-12,24.9632671 L-6.98907598e-12,0.0111219724 L23.7454111,0.0111219724 Z' />
                        </g>
                      </g>
                    </svg>

                    <h5>Kotlin</h5>
                  </div>
                </div>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      viewBox='0 0 44 48'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'>
                      {/* Generator: Sketch 61.2 (89653) - https://sketch.com */}
                      <title>ic-technology-android</title>
                      <desc>Created with Sketch.</desc>
                      <g
                        id='Page-1'
                        stroke='none'
                        strokeWidth={1}
                        fill='#dbd9d9'
                        fillRule='evenodd'>
                        <g
                          id='ic-technology-android'
                          fill='#dbd9d9'
                          fillRule='nonzero'>
                          <path
                            d='M35.5579238,13.7036238 C35.5677476,13.8168104 35.5720188,13.9321008 35.5720188,14.0482328 L35.5720188,14.0482328 L35.5720188,33.5207431 C35.5720188,35.6146949 33.8893809,37.3019745 31.8003388,37.3019745 L31.8003388,37.3019745 L31.651,37.301 L31.6517011,45.0041321 C31.6517011,46.6588021 30.2900437,48 28.6103957,48 C26.9309613,48 25.5693038,46.6588021 25.5693038,45.0041321 L25.569,37.301 L17.93,37.301 L17.9309097,45.0041321 C17.9309097,46.6588021 16.5692523,48 14.8896043,48 C13.2101699,48 11.8485124,46.6588021 11.8485124,45.0041321 L11.848,37.301 L11.6992341,37.3019745 C9.67568141,37.3019745 8.03332922,35.7186996 7.93265834,33.7158391 L7.92776769,33.5207431 L7.92776769,14.0482328 C7.92776769,13.9321008 7.93652364,13.8172312 7.94656095,13.7036238 L7.94656095,13.7036238 Z M3.04130542,15.4365567 C4.72073985,15.4365567 6.08239727,16.777965 6.08239727,18.432635 L6.08239727,31.2849925 C6.08239727,32.9396626 4.72073985,34.2810708 3.04130542,34.2810708 C1.36165742,34.2810708 0,32.9396626 0,31.2852029 L0,18.4328454 C-0.000213559821,16.7781754 1.36144386,15.4365567 3.04130542,15.4365567 Z M40.4589081,15.4365567 C42.1383426,15.4365567 43.5,16.777965 43.5,18.432635 L43.5,31.2849925 C43.5,32.9396626 42.1383426,34.2810708 40.4589081,34.2810708 C38.7792602,34.2810708 37.4176027,32.9396626 37.4176027,31.2852029 L37.4176027,18.4328454 C37.4176027,16.7781754 38.7792602,15.4365567 40.4589081,15.4365567 Z M34.5672226,0.0423334364 C34.7204378,0.129478841 34.7729316,0.322482595 34.6844707,0.473419387 L32.1083311,4.86815089 C34.1651953,6.89640542 35.4233101,9.53479075 35.464171,12.4244892 L8.03540184,12.4244892 C8.07625612,9.53505804 9.33406752,6.89700545 11.3903916,4.86890271 L8.81573827,0.473411509 C8.72728178,0.322472205 8.7797812,0.129469942 8.93299899,0.0423288883 C9.08621679,-0.0448121655 9.28213251,0.0069065347 9.370589,0.157845838 L11.8680872,4.4214895 C14.0308653,2.49735261 16.9526574,1.20350598 20.2215524,0.892922324 L23.2780205,0.892922324 C26.5471208,1.20360708 29.4689208,2.49755482 31.6316518,4.42172276 L34.1296292,0.157837961 C34.2180901,0.00690116897 34.4140073,-0.0448119681 34.5672226,0.0423334364 Z M16.0866071,5.54618934 C15.2176322,5.54850949 14.5152339,6.22804975 14.5175772,7.06432609 L14.5175772,7.06432609 C14.5201458,7.9088074 15.2266017,8.58456075 16.0953631,8.58246181 C16.9645515,8.58014269 17.6669498,7.90039204 17.664394,7.06432609 L17.664394,7.06432609 C17.6618243,6.21942401 16.9553685,5.54388104 16.0866071,5.54618934 Z M27.831543,5.54618934 C26.9625681,5.54850949 26.2601699,6.22804975 26.2625131,7.06432609 L26.2625131,7.06432609 C26.2650817,7.9088074 26.9715376,8.58456075 27.840299,8.58246181 C28.7094875,8.58014269 29.4118857,7.90039204 29.40933,7.06432609 L29.40933,7.06432609 C29.4067603,6.21942401 28.7003044,5.54388104 27.831543,5.54618934 Z'
                            id='Combined-Shape-Copy-5'
                          />
                        </g>
                      </g>
                    </svg>

                    <h5>Android</h5>
                  </div>
                </div>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      viewBox='0 0 39 48'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'>
                      {/* Generator: Sketch 61.2 (89653) - https://sketch.com */}
                      <title>ic-technology-flutter</title>
                      <desc>Created with Sketch.</desc>
                      <g
                        id='Page-1'
                        stroke='none'
                        strokeWidth={1}
                        fill='#dbd9d9'
                        fillRule='evenodd'>
                        <g
                          id='ic-technology-flutter'
                          fill='#dbd9d9'
                          fillRule='nonzero'>
                          <path
                            d='M26.25,35.25 L38.413422,47.5634001 L23.7817001,47.5634001 L18.75,42.75 L26.25,35.25 Z M18.2947357,27.4380277 L25.611,34.7535 L18.2925,42.072 L10.977,34.7565 L18.2947357,27.4380277 Z M38.413422,21.9498726 L26.25,34.5 L18.75,27 L23.7817001,21.9498726 L38.413422,21.9498726 Z M38.413422,-7.67386155e-12 L7.31815072,31.0998508 L1.23243638e-11,23.7817001 L23.7817001,-7.67386155e-12 L38.413422,-7.67386155e-12 Z'
                            id='Combined-Shape'
                          />
                        </g>
                      </g>
                    </svg>

                    <h5>Flutter</h5>
                  </div>
                </div>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      viewBox='0 0 48 48'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'>
                      {/* Generator: Sketch 61.2 (89653) - https://sketch.com */}
                      <title>ic-technology-swift</title>
                      <desc>Created with Sketch.</desc>
                      <g
                        id='Page-1'
                        stroke='none'
                        strokeWidth={1}
                        fill='#dbd9d9'
                        fillRule='evenodd'>
                        <g
                          id='ic-technology-swift'
                          fill='#dbd9d9'
                          fillRule='nonzero'>
                          <path
                            d='M36.101829,0 C37.1171333,0.0958641924 38.2399403,0.0958641924 39.2552445,0.306232837 C40.2787113,0.488897098 41.2737004,0.832740481 42.210377,1.32745278 C43.1707353,1.79079637 44.0427025,2.42989099 44.7952221,3.21544479 C46.2727884,4.71731713 47.2701754,6.67321295 47.6440463,8.80752268 C47.8459127,9.84738287 47.9474431,10.9058833 47.9474431,11.9670467 L47.9474431,11.9670467 L48,11.9670467 L48,36.0902055 C47.949195,37.1486314 47.8479197,38.2032959 47.6966032,39.2497295 C47.5269877,40.3255388 47.1829787,41.3614047 46.681299,42.3120579 C46.2178425,43.2667055 45.5967152,44.1294832 44.847779,44.8551219 C44.0455625,45.5943708 43.1581429,46.2105377 42.2091825,46.6871931 C41.2930198,47.1705084 40.3147443,47.5073646 39.3066069,47.6937672 C38.2674132,47.8961471 37.2103024,47.9986686 36.1531915,48 L36.1531915,48 L11.8050019,48 C10.7896976,47.9041358 9.66689063,47.9041358 8.65158641,47.6937672 C7.62811965,47.5111029 6.6331305,47.1672595 5.6964539,46.6725472 C4.75640164,46.2211867 3.89518477,45.5994008 3.15222098,44.840476 C1.67465472,43.3386036 0.677267637,41.3827078 0.30339679,39.2483981 C0.101530422,38.2085379 0,37.1500374 0,36.0888741 L0,36.0888741 L0,11.7167346 C0.0512261281,10.6627626 0.152500262,9.61255493 0.30339679,8.57052509 C0.473012318,7.49471582 0.817021277,6.45884996 1.31870101,5.50819672 C1.79550487,4.54168687 2.42563815,3.67959977 3.17849944,2.96380128 C3.37678238,2.76674711 3.58701008,2.67088292 3.78529302,2.46051427 C4.39570873,1.95575338 5.04436589,1.51114884 5.72392684,1.13173005 L5.72392684,1.13173005 L6.43583427,0.825497212 C7.1525196,0.51260714 7.90742814,0.303569943 8.67786487,0.210368644 C9.45150353,0.0853994928 10.2314626,0.0151361565 11.0130646,0 L11.0130646,0 Z M28.2178383,8.84210526 C31.7077895,13.4842105 33.2988139,19.0964211 31.9021309,24.0315789 C31.7753152,24.4828778 31.6240301,24.9257463 31.4490578,25.3578947 L31.4490578,25.3578947 L30.8028139,24.9865263 C24.7548139,21.1604211 19.1235944,16.6875789 13.9957895,11.6412632 C17.0677895,16.0307368 20.4699358,20.1688421 24.169448,24.0176842 C19.0931553,20.8698947 14.2580334,17.3204211 9.71559435,13.4046316 C10.2892529,14.3545263 10.95657,15.2437895 11.7058383,16.0572632 C16.0328626,21.6631579 21.0272041,26.6905263 26.5741309,31.0206316 C22.3723748,33.5545263 16.3864236,33.6732632 10.4133504,31.0206316 C8.95578947,30.3915789 7.58017972,29.5894737 6.31578947,28.6206316 C9.02720411,32.7574737 12.8882773,35.9658947 17.3955944,37.8265263 C23.1766675,40.2277895 28.9296431,39.9903158 33.1185212,37.6408421 L33.1185212,37.6408421 L33.1161797,37.6547368 C35.1462285,36.8058947 39.193448,35.5591579 41.3780334,39.6050526 C41.8826187,40.5738947 42.9807651,35.4530526 38.9862285,30.6113684 L38.9862285,30.6113684 L38.9218383,30.5317895 C38.9873992,30.3322105 39.0904236,30.1338947 39.0904236,29.9343158 C41.0818383,22.4791579 36.2982285,13.5789474 28.2178383,8.84210526 Z'
                            id='Combined-Shape'
                          />
                        </g>
                      </g>
                    </svg>

                    <h5>Swift</h5>
                  </div>
                </div>

                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      viewBox='0 0 256 263'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      preserveAspectRatio='xMidYMid'>
                      <g fill='#dbd9d9'>
                        <path d='M166.872326,131.23686 L212.781118,51.9623472 L234.965569,131.23686 L212.781118,210.493243 L166.872326,131.23686 L166.872326,131.23686 Z M144.495923,144.110517 L190.412179,223.373299 L110.445569,202.886567 L52.6751399,144.110517 L144.495923,144.110517 L144.495923,144.110517 Z M190.401515,39.0780261 L144.495923,118.352539 L52.6751399,118.352539 L110.445569,59.5732891 L190.401515,39.0780261 L190.401515,39.0780261 Z M255.940714,104.258913 L227.932619,0.0603519323 L123.392808,27.9852677 L107.918186,55.1924919 L76.5167858,54.9674802 L0,131.244325 L76.5167858,207.50304 L76.519985,207.50304 L107.907522,207.270564 L123.404539,234.477788 L227.932619,262.398438 L255.940714,158.219072 L240.035264,131.23686 L255.940714,104.258913 L255.940714,104.258913 Z' />
                      </g>
                    </svg>

                    <h5>Unity</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 5
                ? "contentTechstack  !m-0 !p-0 relative active-contentTechstack"
                : "contentTechstack"
            }>
            <div className='z-100 w-full h-full grid place-items-center absolute rounded-2xl bg-purple-800/20 backdrop-blur-lg opacity-70 '>
              available soon
            </div>
            <div className='justify-center opacity-30 flex'>
              <div className='grid grid-cols-3 duration-500 md:grid-cols-4 lg:grid-cols-6 max-w-[1000px]   gap-2 items-center justify-center  '>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      viewBox='0 0 60 48'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'>
                      {/* Generator: Sketch 61.2 (89653) - https://sketch.com */}
                      <title>ic-technology-aws</title>
                      <desc>Created with Sketch.</desc>
                      <g
                        id='Page-1'
                        stroke='none'
                        strokeWidth={1}
                        fill='#dbd9d9'
                        fillRule='evenodd'>
                        <g
                          id='ic-technology-aws'
                          fill='#dbd9d9'
                          fillRule='nonzero'>
                          <path
                            d='M17.5063775,30.1026993 L12.0118496,32.4628864 L17.1004377,34.6390217 L23.0009054,32.4628864 L17.5063775,30.1026993 Z M9.24566755,33.0529332 L9.06156061,43.6737751 L17.1003825,47.2140557 L17.1003825,36.1873292 L9.24566755,33.0529332 L9.24566755,33.0529332 Z M25.7670323,33.0529332 L18.502309,35.8190601 L18.502309,46.2181243 L25.7670323,43.2678904 L25.7670323,33.0529332 Z M34.433627,0.0102588054 L28.901318,2.37050105 L34.027632,4.54658119 L39.9280997,2.37050105 L34.433627,0.0102588054 L34.433627,0.0102588054 Z M26.7630189,3.14581302 L26.7630189,13.7666549 L33.6217473,15.7586281 L33.8435802,6.09599173 L26.7630189,3.14581302 L26.7630189,3.14581302 Z M42.1043453,3.73580464 L35.6137757,6.50198671 L35.6137757,16.9387768 L42.1043453,13.988543 L42.1043453,3.73580464 L42.1043453,3.73580464 Z M8.45265087,14.9585516 L2.95812297,17.3187387 L8.04671104,19.494874 L13.9471788,17.3187387 L8.45265087,14.9585516 L8.45265087,14.9585516 Z M0.191996057,17.9087855 L0.00788910956,28.5296825 L8.04671104,32.0699632 L8.04671104,21.0431263 L0.191996057,17.9087855 Z M16.7133608,17.9087855 L9.44869262,20.6749124 L9.44869262,31.0739214 L16.7133608,28.1236875 L16.7133608,17.9087855 Z M26.1541092,14.5667314 L20.6595813,16.9269185 L25.7481694,19.1030538 L31.6486371,16.9269185 L26.1541092,14.5667314 Z M17.8933992,17.5170204 L17.7092923,28.1378623 L25.7481142,31.678143 L25.7481142,20.6525195 L17.8933992,17.5170204 Z M34.414764,17.5170204 L27.1500958,20.2831474 L27.1500958,30.6821564 L34.414764,27.7319225 L34.414764,17.5170204 Z M51.7232439,0.0102588054 L46.2287712,2.37044589 L51.3173592,4.54652604 L57.2177718,2.37044589 L51.7232439,0.0102588054 Z M43.4625339,2.96049267 L43.2784821,13.5813346 L51.3173041,17.1216152 L51.3173041,6.09599173 L43.4625339,2.96049267 Z M59.9838987,2.96049267 L52.7192305,5.72661958 L52.7192305,16.1256286 L59.9838987,13.1753947 L59.9838987,2.96049267 Z'
                            id='Shape'
                          />
                        </g>
                      </g>
                    </svg>

                    <h5>AWS</h5>
                  </div>
                </div>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      viewBox='0 0 48 39'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'>
                      <title>ic-technology-google-cloud</title>
                      <desc>Created with Sketch.</desc>
                      <g
                        id='Page-1'
                        stroke='none'
                        strokeWidth={1}
                        fill='none'
                        fillRule='evenodd'>
                        <g
                          id='ic-technology-google-cloud'
                          fill='#dbd9d9'
                          fillRule='nonzero'>
                          <path
                            d='M9.8293378,6.34300084 C16.6813076,-1.420285 28.5324392,-2.15859179 36.2957251,4.69337804 L36.2957251,4.69337804 L36.2839631,4.79093002 L36.3681475,4.70746018 C38.9920369,7.03445096 40.9083019,10.0468951 41.9080117,13.401296 L42.0331936,13.8407376 C46.982062,17.1882649 49.154736,23.3844091 47.3844091,29.0917016 C45.6100587,34.7969824 40.3091366,38.6695725 34.3342833,38.6233026 L34.3342833,38.6233026 L23.9114837,38.6233026 L23.8529631,38.56493 L13.4746018,38.5649623 C10.6497759,38.5765079 7.89673347,37.7027227 5.60104128,36.0703684 L5.29086337,35.8430847 L5.30496314,35.78293 L5.2928751,35.7968148 C0.792352827,32.3360887 -1.06481646,26.4448712 0.607682402,21.0440167 L0.710142498,20.726907 C1.69708074,17.7951198 3.62110133,15.3712302 6.08243327,13.7444618 L5.96624057,13.7766175 L5.96624057,13.7766175 L5.78977368,13.8407376 C6.54216262,11.0645432 7.92422464,8.49958089 9.8293378,6.34300084 Z M30.4838223,10.6360436 C26.1988265,7.16781224 19.9523889,7.64258173 16.2407376,11.7183571 C16.2041911,11.7109807 16.1619447,11.7243364 16.1169135,11.7517184 L16.4078026,11.8102872 C19.5095288,12.4872158 22.3100242,14.2414279 24.2776194,16.8120704 L24.2776194,16.8120704 L18.2323554,22.8573345 C17.7093043,21.7025985 16.7839061,20.7772003 15.6291702,20.2541492 C13.0058676,19.0692372 9.91986588,20.2340319 8.7349539,22.8573345 C7.55004191,25.480637 8.71483655,28.5666387 11.3381391,29.7515507 L11.3381391,29.7515507 C12.0051592,30.0649179 12.7358962,30.2222967 13.4746018,30.2222967 L13.4746018,30.2222967 L23.8974015,30.2222967 L23.8969631,30.29193 L23.9114837,30.2786253 L34.3342833,30.2786253 C37.2110645,30.2786253 39.5446773,27.9470243 39.5446773,25.0682313 C39.5446773,22.1914501 37.2130763,19.8578374 34.3342833,19.8578374 L34.3342833,19.8578374 L34.3342833,18.8177703 C34.3946354,15.6251467 32.9864208,12.5813915 30.5139983,10.5616094 L30.6019631,10.63593 Z'
                            id='Combined-Shape'
                          />
                        </g>
                      </g>
                    </svg>

                    <h5>Google Cloud</h5>
                  </div>
                </div>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      fill='#dbd9d9'
                      viewBox='0 0 32 32'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M 6.5839844 9.0097656 C 5.2239844 9.0097656 3.8432813 9.5400781 3.6132812 9.8300781 C 3.5532812 9.9500781 3.4141406 10.919922 3.7441406 10.919922 C 3.8541406 10.919922 3.9046094 10.939062 4.2246094 10.789062 C 5.4246094 10.319062 6.1849219 10.330078 6.2949219 10.330078 C 7.6449219 10.200078 8.4246875 11.120547 8.3046875 12.310547 L 8.3046875 13.009766 C 7.1646875 12.739766 6.5133594 12.730469 6.1933594 12.730469 C 4.5333594 12.630469 3 13.505688 3 15.429688 C 3 17.539687 4.8832812 17.990937 5.6132812 17.960938 C 6.7032812 17.970938 7.7435937 17.480859 8.4335938 16.630859 C 8.9835938 17.860859 9.33375 17.779297 9.34375 17.779297 C 9.44375 17.779297 9.5235156 17.739453 9.6035156 17.689453 L 10.173828 17.289062 C 10.273828 17.229063 10.353281 17.129766 10.363281 17.009766 C 10.353281 16.719766 9.8330469 16.269766 9.8730469 15.259766 L 9.8730469 12.140625 C 9.9330469 11.280625 9.6542187 10.439062 9.0742188 9.7890625 C 8.3842188 9.2090625 7.4739844 8.9297656 6.5839844 9.0097656 z M 25.957031 9.0097656 C 23.957031 9.0097656 22.807891 10.259297 22.837891 11.529297 C 22.837891 13.269297 24.596875 13.820859 24.796875 13.880859 C 26.486875 14.410859 26.7175 14.430078 27.1875 14.830078 C 27.5875 15.240078 27.537266 16.040625 26.947266 16.390625 C 26.777266 16.490625 26.046484 16.929844 24.396484 16.589844 C 23.846484 16.479844 23.557422 16.350156 23.107422 16.160156 C 22.987422 16.120156 22.707031 16.049922 22.707031 16.419922 L 22.707031 16.910156 C 22.707031 17.140156 22.846641 17.349219 23.056641 17.449219 C 24.106641 17.979219 25.366719 18 25.636719 18 C 25.676719 18 27.976094 18.001219 28.746094 16.449219 C 28.905094 16.129219 29.316875 14.960937 28.546875 13.960938 C 27.906875 13.210938 27.356797 13.130859 25.716797 12.630859 C 25.576797 12.590859 24.366953 12.279687 24.376953 11.429688 C 24.316953 10.339688 25.797422 10.280781 26.107422 10.300781 C 27.357422 10.280781 27.976406 10.749297 28.316406 10.779297 C 28.466406 10.779297 28.537109 10.690234 28.537109 10.490234 L 28.537109 10.029297 C 28.547109 9.9192969 28.507266 9.8107031 28.447266 9.7207031 C 28.047266 9.2007031 26.517031 9.0097656 25.957031 9.0097656 z M 10.777344 9.2597656 C 10.667344 9.2797656 10.587422 9.39 10.607422 9.5 C 10.627422 9.63 10.647266 9.760625 10.697266 9.890625 L 12.9375 17.279297 C 12.9875 17.519297 13.146094 17.780234 13.496094 17.740234 L 14.316406 17.740234 C 14.816406 17.790234 14.886484 17.309766 14.896484 17.259766 L 16.367188 11.099609 L 17.857422 17.269531 C 17.867422 17.319531 17.937734 17.8 18.427734 17.75 L 19.257812 17.75 C 19.617812 17.79 19.787891 17.529062 19.837891 17.289062 C 22.357891 9.1790625 22.187031 9.7303906 22.207031 9.6503906 C 22.247031 9.2303906 22.006797 9.2595313 21.966797 9.2695312 L 21.076172 9.2695312 C 20.626172 9.2195313 20.537578 9.6304688 20.517578 9.7304688 L 18.857422 16.140625 L 17.357422 9.7304688 C 17.287422 9.2404687 16.887109 9.2595313 16.787109 9.2695312 L 16.017578 9.2695312 C 15.577578 9.2295313 15.4675 9.5804687 15.4375 9.7304688 L 13.947266 16.050781 L 12.347656 9.7304688 C 12.307656 9.5304687 12.177109 9.2197656 11.787109 9.2597656 L 10.777344 9.2597656 z M 6.5234375 13.890625 C 7.2434375 13.900625 7.8649219 14.009375 8.2949219 14.109375 C 8.2949219 14.609375 8.313125 14.889844 8.203125 15.339844 C 8.063125 15.819844 7.444375 16.690937 5.984375 16.710938 C 5.144375 16.750937 4.5945313 16.089844 4.6445312 15.339844 C 4.5945313 14.139844 5.8334375 13.840625 6.5234375 13.890625 z M 29.041016 20.001953 C 28.107641 20.014953 27.005922 20.224047 26.169922 20.810547 C 25.911922 20.989547 25.957141 21.238078 26.244141 21.205078 C 27.184141 21.092078 29.276391 20.838406 29.650391 21.316406 C 30.025391 21.794406 29.235719 23.766437 28.886719 24.648438 C 28.778719 24.911437 29.007047 25.020312 29.248047 24.820312 C 30.812047 23.510312 31.218438 20.764141 30.898438 20.369141 C 30.737937 20.171641 29.974391 19.988953 29.041016 20.001953 z M 1.2167969 21.001953 C 0.99873437 21.031953 0.9048125 21.308344 1.1328125 21.527344 C 5.0498125 25.201344 10.225656 27 15.972656 27 C 20.071656 27 24.830234 25.662578 28.115234 23.142578 C 28.658234 22.723578 28.195672 22.09575 27.638672 22.34375 C 23.955672 23.96875 19.955453 24.751953 16.314453 24.751953 C 10.918453 24.751953 5.69475 23.625406 1.46875 21.066406 C 1.37625 21.010406 1.2894844 20.991953 1.2167969 21.001953 z' />
                    </svg>

                    <h5> AWS DevOps</h5>
                  </div>
                </div>

                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      viewBox='0 0 54 39'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'>
                      {/* Generator: Sketch 61.2 (89653) - https://sketch.com */}
                      <title>ic-technology-gradle</title>
                      <desc>Created with Sketch.</desc>
                      <g
                        id='Page-1'
                        stroke='none'
                        strokeWidth={1}
                        fill='none'
                        fillRule='evenodd'>
                        <g
                          id='ic-technology-gradle'
                          fill='#dbd9d9'
                          fillRule='nonzero'>
                          <path
                            d='M39.1671866,2.25498574 C42.5405329,-0.828111952 47.8027502,-0.739006587 51.0651801,2.45645501 C54.2454614,5.58838632 57.856016,14.214934 44.118448,24.276187 C40.1524502,27.1822285 38.7618566,32.9821013 38.6745548,38.0310432 C38.6677411,38.4645975 38.3067843,38.8125 37.8638948,38.8125 L37.8638948,38.8125 L34.2034534,38.8125 C33.7943482,38.8125 33.4493807,38.5139993 33.3990293,38.116515 C33.0370573,35.3978755 30.671293,33.3640286 27.8709521,33.3640286 C25.0706113,33.3640286 22.704847,35.3978755 22.342875,38.116515 C22.2925236,38.5139993 21.9475561,38.8125 21.5384509,38.8125 L21.5384509,38.8125 L17.8343586,38.8125 C17.4239223,38.8125 17.0769612,38.5149499 17.0236986,38.116515 C16.6730001,35.390488 14.3051317,33.3459243 11.4987394,33.3459243 C8.69234703,33.3459243 6.32447863,35.390488 5.97378012,38.116515 C5.92342871,38.5139993 5.57846122,38.8125 5.16935603,38.8125 L5.16935603,38.8125 L1.36549017,38.8125 C0.976707493,38.8084175 0.643862381,38.5385581 0.567301929,38.165356 C-1.52170637,27.3287516 2.36946132,18.7876758 8.77991066,14.3553519 L8.77991066,14.3553519 L12.1160881,20.0025965 C12.9241082,21.3527331 14.4026897,22.1822494 16.0010199,22.1821276 C16.7614581,22.1851626 17.5095138,21.9936508 18.1710942,21.6265609 L18.1710942,21.6265609 L19.7362915,20.7718428 L19.7861783,20.7718428 C21.6270076,19.6652932 23.3651546,18.4027988 24.9806377,16.9988729 C25.155553,16.8426027 25.2532551,16.6201515 25.248779,16.38836 C25.2474202,16.1498683 25.1348954,15.9250397 24.9432226,15.777847 L24.9432226,15.777847 L24.8414875,15.7042244 C24.5242205,15.5078973 24.1067508,15.5324382 23.8145345,15.777847 C22.2807424,17.1143337 20.6325847,18.319434 18.8882165,19.3798733 L18.8882165,19.3798733 L17.3230192,20.2406965 L17.3916135,20.1918555 L17.3043117,20.2406965 C15.9697824,20.9687954 14.2854524,20.5151104 13.5191534,19.2211399 L13.5191534,19.2211399 L9.98966472,13.2442184 C9.60272393,12.5792092 9.51736907,11.7861078 9.75424555,11.0567476 C9.99112204,10.3273873 10.5286574,9.72819148 11.2368339,9.4040921 C31.8275962,-0.187065961 40.9007517,18.4579988 47.6978234,11.8034079 C49.1068453,10.4299795 49.5287819,8.35925129 48.7659007,6.56162991 C48.0030195,4.76400854 46.2064902,3.59570388 44.2182215,3.60421931 C43.1585458,3.60110624 42.126971,3.93775649 41.2811382,4.5627246 C40.956441,4.8009761 40.5023362,4.7697771 40.2148086,4.48946305 L40.2148086,4.48946305 L39.148479,3.40885517 C38.9936698,3.25371002 38.9064712,3.04575573 38.905281,2.82886789 C38.9110428,2.61106083 39.0053111,2.40450203 39.1671866,2.25498574 Z M37.5818007,15.7212159 C37.2629516,15.0272238 36.4917645,14.6461178 35.7321016,14.8071297 C34.9724386,14.9681417 34.4313016,15.6273972 34.4341683,16.38836 L34.4341683,16.38836 L37.0532349,17.6765422 C37.6802771,17.2329792 37.9006498,16.4152081 37.5818007,15.7212159 Z'
                            id='Shape'
                          />
                        </g>
                      </g>
                    </svg>
                    <h5>Gradle</h5>
                  </div>
                </div>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      viewBox='0 0 512 512'
                      fill='#dbd9d9'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path fillRule='evenodd' d='M256,48,496,464H16Z' />
                    </svg>

                    <h5>Vercel</h5>
                  </div>
                </div>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      viewBox='0 0 24 24'
                      role='img'
                      fill='#dbd9d9'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M23.546 10.93 13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039 1.837 1.837 0 0 1-2.6 0 1.846 1.846 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.848 1.848 0 0 1 0 2.6 1.844 1.844 0 0 1-2.609 0 1.834 1.834 0 0 1 0-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187' />
                    </svg>

                    <h5>Git</h5>
                  </div>
                </div>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      viewBox='0 0 24 24'
                      role='img'
                      fill='#dbd9d9'
                      xmlns='http://www.w3.org/2000/svg'>
                      <title>Docker icon</title>
                      <path d='M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z' />
                    </svg>

                    <h5>Docker</h5>
                  </div>
                </div>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      viewBox='0 0 24 24'
                      role='img'
                      fill='#dbd9d9'
                      xmlns='http://www.w3.org/2000/svg'>
                      <title>Kubernetes icon</title>
                      <path d='M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z' />
                    </svg>
                    <h5>Kubernetes</h5>
                  </div>
                </div>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      fill='#dbd9d9'
                      viewBox='0 0 24 24'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'>
                      <title>Netlify icon</title>
                      <path d='M16.934 8.519a1.044 1.044 0 0 1 .303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 0 1 .209.574l3.497 1.482a1.044 1.044 0 0 1 .355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013-2.569a1.044 1.044 0 0 1-.7.407l-.647 3.957a1.044 1.044 0 0 1 .303.731l3.633.762 3.33-3.31v-.062zM15.4 9.25L12.132 7.86a1.2 1.2 0 0 1-1.044.543h-.199L8.185 12.58l7.225-3.132v.01a.887.887 0 0 1 0-.167.052.052 0 0 0-.01-.041zm3.967 7.308l-3.195-.658a1.096 1.096 0 0 1-.46.344l-.761 4.72 4.437-4.396s-.01.02-.021.02zm-4.469-.324a1.044 1.044 0 0 1-.616-.71l-5.95-1.222-.084.136 5.398 7.81.323-.324.919-5.67s.031.022.01.011zm-6.441-2.652l5.878 1.211a1.044 1.044 0 0 1 .824-.522l.637-3.894-.135-.115-7.308 3.132a1.817 1.817 0 0 1 .104.188zm-2.464.981l-.125-.125-2.537 1.044 1.232 1.222 1.399-2.172zm1.67.397a1.368 1.368 0 0 1-.563.125 1.389 1.389 0 0 1-.45-.073l-1.544 2.245 6.765 6.702 1.19-1.18zm-.95-2.641a1.702 1.702 0 0 1 .314 0 1.378 1.378 0 0 1 .344 0l2.735-4.25a1.19 1.19 0 0 1-.334-.824 1.242 1.242 0 0 1 0-.271l-3.32-1.535-2.672 2.6zm.303-7.402l3.237 1.378a1.242 1.242 0 0 1 .835-.282 1.357 1.357 0 0 1 .397.063l2.526-3.947L11.923.041 7.016 4.854s-.01.052 0 .063zm-1.21 8.164a1.566 1.566 0 0 1 .24-.334L3.278 8.613 0 11.797l5.804 1.284zm-.262.7L.533 12.735l2.203 2.235 2.777-1.18z' />
                    </svg>

                    <h5>Netlify </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 6
                ? "contentTechstack  active-contentTechstack"
                : "contentTechstack"
            }>
            <div className='justify-center flex'>
              <div className='grid grid-cols-3 duration-500 md:grid-cols-4 lg:grid-cols-6 max-w-[1000px]   gap-2 items-center justify-center  '>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      viewBox='-13.5 0 283 283'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      preserveAspectRatio='xMidYMid'>
                      <g>
                        <path
                          d='M239.552674,138.960457 C239.552674,124.451866 227.791431,112.690623 213.282197,112.690623 C212.349305,112.690623 211.428604,112.740668 210.521375,112.835625 L246.60326,6.41597594 L93.2669594,6.41597594 L129.298799,112.743234 C128.770117,112.711154 128.238869,112.690623 127.702488,112.690623 C113.193897,112.690623 101.432012,124.451866 101.432012,138.960457 C101.432012,150.688337 109.117786,160.616517 119.725426,163.994562 C114.122939,173.699465 107.072994,182.440036 99.0689845,189.991715 C88.1854556,200.259304 75.7293554,208.044527 62.2569544,212.842442 C46.2174957,204.602322 38.6427188,186.27747 45.4777263,170.20978 C46.2489343,168.395324 47.0374657,166.556487 47.7900672,164.725349 C59.410799,162.013289 68.0692451,151.596207 68.0692451,139.149089 C68.0692451,124.640497 56.308002,112.879254 41.7987689,112.879254 C27.2901774,112.879254 15.5282927,124.640497 15.5282927,139.149089 C15.5282927,148.046212 19.9553604,155.904577 26.7217163,160.656938 C20.2197013,175.461309 10.6617263,190.954763 7.68404211,208.911976 C4.1154406,230.432658 7.67249323,253.276327 26.2854256,266.177059 C69.6334757,296.220808 116.687431,247.551936 166.299461,235.317831 C184.279771,230.883705 204.016152,231.598452 219.857355,222.423515 C231.753335,215.533329 239.595661,204.115344 241.821385,191.296096 C244.020162,178.632116 240.814709,166.023314 233.442679,155.799354 C237.255731,151.239475 239.552674,145.36944 239.552674,138.960457'
                          fill='#dbd9d9'
                        />
                        <path
                          d='M235.500174,190.198183 C233.567663,201.327447 226.694159,211.049031 216.641508,216.871587 C207.270881,222.298915 196.041528,223.918965 184.152606,225.633331 C177.783403,226.551467 171.197337,227.501682 164.763332,229.088369 C147.751202,233.283176 131.273528,241.468118 115.338651,249.382945 C83.4490065,265.222865 55.908796,278.900579 29.9405153,260.903587 C10.9188812,247.719908 11.7972371,223.328048 14.0133373,209.961512 C16.0671118,197.577913 21.6195529,186.173402 26.9891368,175.143587 C27.9168962,173.23674 28.8260491,171.365181 29.7108211,169.509662 C32.3721945,170.5728 35.2029514,171.298454 38.1536882,171.628239 C32.6878637,189.666935 41.2834326,209.28077 59.3253373,218.549381 L61.7942296,219.817833 L64.4094075,218.886865 C78.6722647,213.807286 91.8148812,205.656349 103.472184,194.657973 C111.007182,187.549001 117.486099,179.684219 122.810771,171.280489 C124.407082,171.521091 126.039964,171.647487 127.70236,171.647487 C144.260876,171.647487 157.973237,159.268379 160.095022,143.280249 C166.872926,143.031948 174.072365,143.030023 180.889408,143.277682 C183.009909,159.267096 196.722911,171.647487 213.282069,171.647487 C220.205618,171.647487 226.628074,169.477582 231.918741,165.791567 C235.591924,173.310524 236.963032,181.770715 235.500174,190.198183 Z M41.7986406,119.295166 C52.7469714,119.295166 61.6530767,128.201913 61.6530767,139.149602 C61.6530767,143.081993 60.4994727,146.74876 58.5181995,149.8368 C55.2171469,154.983747 49.6088862,158.511928 43.1626907,158.952068 C42.7116431,158.982865 42.2573875,159.004038 41.7986406,159.004038 C39.3592622,159.004038 37.0218987,158.558765 34.8609764,157.750985 C30.4897283,156.114895 26.8473424,152.978735 24.5561744,148.973843 C22.8976281,146.074434 21.9442045,142.722053 21.9442045,139.149602 C21.9442045,128.201913 30.8509514,119.295166 41.7986406,119.295166 Z M107.847924,138.96097 C107.847924,129.014183 115.200706,120.754815 124.755473,119.326605 C125.717237,119.182244 126.701458,119.106534 127.70236,119.106534 C134.067072,119.106534 139.733718,122.122073 143.368405,126.794234 C144.271783,127.954895 145.055182,129.214364 145.685879,130.559166 C146.883753,133.11275 147.556796,135.958905 147.556796,138.96097 C147.556796,140.548299 147.364315,142.091356 147.010791,143.571537 C145.075713,151.671787 138.168846,157.862625 129.705448,158.714675 C129.047162,158.78076 128.378611,158.815407 127.70236,158.815407 C123.73853,158.815407 120.045458,157.643196 116.942019,155.633692 C111.475553,152.09268 107.847924,145.944188 107.847924,138.96097 Z M190.713007,115.351868 C186.459814,119.421562 183.296706,124.621121 181.721568,130.468058 C174.369428,130.192168 166.573297,130.192168 159.263503,130.468058 C157.584425,124.236158 154.101798,118.738254 149.417448,114.562053 L169.961608,73.0201183 L190.713007,115.351868 Z M102.215924,12.8325293 L237.652756,12.8325293 L205.664305,107.177833 C204.277798,107.510825 202.925297,107.929792 201.612575,108.433452 L170.012295,43.9702135 L138.322831,108.048489 C136.953007,107.57691 135.541478,107.197081 134.096585,106.909001 L102.215924,12.8325293 Z M233.136505,138.96097 C233.136505,140.951868 232.838801,142.873472 232.291513,144.687928 C230.987773,149.00464 228.251974,152.703487 224.639102,155.23269 C221.41825,157.487286 217.503182,158.815407 213.282069,158.815407 C204.114831,158.815407 196.381578,152.568108 194.108375,144.107918 C193.666951,142.465412 193.427633,140.74078 193.427633,138.96097 C193.427633,136.246985 193.976205,133.659396 194.966199,131.301502 C195.476275,130.086304 196.112746,128.937833 196.843533,127.858655 C200.416626,122.585311 206.44642,119.106534 213.282069,119.106534 C213.908916,119.106534 214.527423,119.139256 215.139513,119.196359 C225.219753,120.135667 233.136505,128.639487 233.136505,138.96097 Z M245.968585,138.96097 C245.968585,123.002995 234.471042,109.688429 219.327262,106.843557 L255.552866,0.000449122807 L84.3183799,0.000449122807 L120.599162,107.061061 C105.980856,110.313993 95.0158436,123.377051 95.0158436,138.96097 C95.0158436,150.662544 101.200265,160.941682 110.468235,166.717402 C106.01037,173.359286 100.723553,179.609151 94.6661694,185.324559 C85.0581494,194.388499 74.3549113,201.262003 62.8156632,205.78467 C51.1930065,198.483858 46.279603,184.715677 51.3822797,172.72089 L51.781999,171.78094 C52.0322246,171.193873 52.2824501,170.605522 52.5320341,170.017171 C65.2980291,165.564439 74.4851569,153.413742 74.4851569,139.149602 C74.4851569,121.125662 59.8219388,106.463086 41.7986406,106.463086 C23.7753424,106.463086 9.11212431,121.125662 9.11212431,139.149602 C9.11212431,148.246905 12.8513925,156.485101 18.8696381,162.41673 C17.7789113,164.741261 16.6304401,167.105572 15.4518135,169.526344 C9.94941754,180.828198 3.71302657,193.637823 1.35449023,207.862183 C-3.32986065,236.112008 4.22630977,258.694544 22.6307208,271.450274 C33.7991218,279.190584 45.1401143,282.233712 56.553608,282.233712 C78.0447759,282.233712 99.7842446,271.4368 121.047002,260.875356 C136.360164,253.269782 152.194951,245.404359 167.835974,241.547036 C173.655322,240.111767 179.644054,239.248168 185.984385,238.333883 C198.556616,236.520068 211.557438,234.645301 223.072946,227.975828 C236.421518,220.243858 245.559242,207.274474 248.142981,192.393752 C250.361007,179.618775 247.691934,166.823266 241.181578,155.972459 C244.216365,151.013502 245.968585,145.188379 245.968585,138.96097 Z'
                          fill='#0b1121'
                        />
                      </g>
                    </svg>
                    <h5>Jest</h5>
                  </div>
                </div>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      viewBox='0 0 256 256'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      preserveAspectRatio='xMidYMid'>
                      <title>testing library</title>
                      <defs>
                        <radialGradient
                          cx='50.279%'
                          cy='49.8468745%'
                          fx='50.279%'
                          fy='49.8468745%'
                          r='50.334%'
                          gradientTransform='translate(0.502790,0.498469),scale(1.000000,0.992517),translate(-0.502790,-0.498469)'
                          id='radialGradient-1'>
                          <stop stopColor='#dbd9d9' offset='0%' />
                          <stop stopColor='#dbd9d9' offset='20%' />
                          <stop stopColor='#dbd9d9' offset='38%' />
                          <stop stopColor='#dbd9d9' offset='54%' />
                          <stop stopColor='#dbd9d9' offset='71%' />
                          <stop stopColor='#dbd9d9' offset='86%' />
                          <stop stopColor='#dbd9d9' offset='100%' />
                        </radialGradient>
                        <linearGradient
                          x1='0.003%'
                          y1='49.969%'
                          x2='100%'
                          y2='49.969%'
                          id='linearGradient-2'>
                          <stop stopColor='#dbd9d9' offset='0%' />
                          <stop stopColor='#dbd9d9' offset='19%' />
                          <stop stopColor='#dbd9d9' offset='38%' />
                          <stop stopColor='#dbd9d9' offset='58%' />
                          <stop stopColor='#dbd9d9' offset='79%' />
                          <stop stopColor='#dbd9d9' offset='99%' />
                          <stop stopColor='#dbd9d9' offset='100%' />
                        </linearGradient>
                        <linearGradient
                          x1='0.025%'
                          y1='26.463%'
                          x2='100.015%'
                          y2='26.463%'
                          id='linearGradient-3'>
                          <stop stopColor='#dbd9d9' offset='0%' />
                          <stop stopColor='#dbd9d9' offset='19%' />
                          <stop stopColor='#dbd9d9' offset='38%' />
                          <stop stopColor='#dbd9d9' offset='58%' />
                          <stop stopColor='#dbd9d9' offset='79%' />
                          <stop stopColor='#dbd9d9' offset='99%' />
                          <stop stopColor='#dbd9d9' offset='100%' />
                        </linearGradient>
                        <radialGradient
                          cx='50.879%'
                          cy='49.5849298%'
                          fx='50.879%'
                          fy='49.5849298%'
                          r='91.636%'
                          gradientTransform='translate(0.508790,0.495849),scale(1.000000,0.419379),translate(-0.508790,-0.495849)'
                          id='radialGradient-4'>
                          <stop stopColor='#dbd9d9' offset='0%' />
                          <stop stopColor='#dbd9d9' offset='19%' />
                          <stop stopColor='#dbd9d9' offset='38%' />
                          <stop stopColor='#dbd9d9' offset='58%' />
                          <stop stopColor='#dbd9d9' offset='79%' />
                          <stop stopColor='#dbd9d9' offset='99%' />
                          <stop stopColor='#dbd9d9' offset='100%' />
                        </radialGradient>
                        <radialGradient
                          cx='50.5432107%'
                          cy='49.742%'
                          fx='50.5432107%'
                          fy='49.742%'
                          r='56.1219498%'
                          gradientTransform='translate(0.505432,0.497420),scale(0.815587,1.000000),translate(-0.505432,-0.497420)'
                          id='radialGradient-5'>
                          <stop stopColor='#dbd9d9' offset='0%' />
                          <stop stopColor='#dbd9d9' offset='19%' />
                          <stop stopColor='#dbd9d9' offset='38%' />
                          <stop stopColor='#dbd9d9' offset='58%' />
                          <stop stopColor='#dbd9d9' offset='79%' />
                          <stop stopColor='#dbd9d9' offset='99%' />
                          <stop stopColor='#dbd9d9' offset='100%' />
                        </radialGradient>
                        <linearGradient
                          x1='0%'
                          y1='49.997%'
                          x2='99.996%'
                          y2='49.997%'
                          id='linearGradient-6'>
                          <stop stopColor='#dbd9d9' offset='0%' />
                          <stop stopColor='#dbd9d9' offset='1%' />
                          <stop stopColor='#dbd9d9' offset='21%' />
                          <stop stopColor='#dbd9d9' offset='42%' />
                          <stop stopColor='#dbd9d9' offset='62%' />
                          <stop stopColor='#dbd9d9' offset='81%' />
                          <stop stopColor='#dbd9d9' offset='100%' />
                        </linearGradient>
                        <linearGradient
                          x1='-0.004%'
                          y1='26.478%'
                          x2='99.975%'
                          y2='26.478%'
                          id='linearGradient-7'>
                          <stop stopColor='#dbd9d9' offset='0%' />
                          <stop stopColor='#dbd9d9' offset='1%' />
                          <stop stopColor='#dbd9d9' offset='21%' />
                          <stop stopColor='#dbd9d9' offset='42%' />
                          <stop stopColor='#dbd9d9' offset='62%' />
                          <stop stopColor='#dbd9d9' offset='81%' />
                          <stop stopColor='#dbd9d9' offset='100%' />
                        </linearGradient>
                        <radialGradient
                          cx='51.992%'
                          cy='49.5817659%'
                          fx='51.992%'
                          fy='49.5817659%'
                          r='91.664%'
                          gradientTransform='translate(0.519920,0.495818),scale(1.000000,0.419250),translate(-0.519920,-0.495818)'
                          id='radialGradient-8'>
                          <stop stopColor='#dbd9d9' offset='0%' />
                          <stop stopColor='#dbd9d9' offset='19%' />
                          <stop stopColor='#dbd9d9' offset='38%' />
                          <stop stopColor='#dbd9d9' offset='58%' />
                          <stop stopColor='#dbd9d9' offset='79%' />
                          <stop stopColor='#dbd9d9' offset='99%' />
                          <stop stopColor='#dbd9d9' offset='100%' />
                        </radialGradient>
                      </defs>
                      <g>
                        <path
                          d='M249.809548,103.820437 C256.107254,128.347497 229.056436,157.070242 195.222697,148.931625 C238.315983,117.59037 218.614174,77.443232 195.839326,58.1835248 C171.14383,37.2960944 195.050849,30.6032197 203.016486,38.1655615 C202.824421,22.909447 149.106916,26.3569851 196.092043,75.3504449 C220.231562,100.51444 191.755421,156.180555 157.830704,113.849639 C157.550686,113.466478 157.297371,113.064495 157.072553,112.646539 C162.551455,110.371771 167.049816,104.1844 167.049816,93.9934371 C167.103515,90.3855695 166.386679,86.8077887 164.947212,83.4991714 C168.869378,75.5122062 172.468067,65.9682884 172.468067,54.0181708 C172.468067,25.4571878 153.938863,0 127.989891,0 C102.040919,0 83.511716,25.4571878 83.511716,54.0181708 C83.511716,65.9682884 87.1205134,75.5223163 91.0426798,83.5092815 C89.5979847,86.8233733 88.8809838,90.4088764 88.9400751,94.0237673 C88.9400751,104.21473 93.4283274,110.402101 98.9173385,112.67687 C98.6889882,113.094958 98.4323023,113.496931 98.1490791,113.879969 C64.2243618,156.210885 35.7381122,100.53466 59.8877397,75.3807752 C106.882975,26.3873153 53.1452527,22.9498873 52.9531878,38.1958917 C60.9188247,30.6436601 84.8359526,37.3365347 60.1303479,58.2138551 C37.3555004,77.4230118 17.6739078,117.58026 60.7469772,148.961956 C26.9233466,157.100572 -0.117362308,128.377828 6.16012562,103.850768 C-4.81789675,124.070933 3.3195876,162.307265 46.8980908,169.687625 C0.509375617,180.333542 14.4694575,244.391024 47.1305903,234.139401 C19.1194485,232.491457 22.2329208,200.250404 33.5647468,190.544725 C46.0995053,179.797707 61.9499096,187.370159 90.8506149,182.52743 C90.537246,208.550782 115.879697,222.533026 102.586788,237.435288 C88.505402,253.207016 69.2281565,236.171527 72.2001073,220.672771 C58.7555679,248.495718 97.0371248,270.636799 113.817527,238.324975 C126.746524,213.464282 92.3871337,168.565406 127.969674,168.565406 C163.552214,168.565406 129.182715,213.413732 142.121821,238.324975 C158.902223,270.677239 197.18378,248.495718 183.739241,220.672771 C186.680865,236.181637 167.433946,253.207016 153.362669,237.435288 C140.130411,222.492586 165.402102,208.510342 165.129168,182.486989 C194.019764,187.329719 209.870169,179.747157 222.394818,190.504285 C233.746862,200.209964 236.850225,232.451017 208.839084,234.09896 C241.55076,244.391024 255.500733,180.323432 209.091801,169.647184 C252.639978,162.276934 260.787571,124.030492 249.809548,103.820437 Z'
                          fill='url(#radialGradient-1)'
                        />
                        <path
                          d='M34.1005067,192.485861 C46.6251565,181.738843 61.0098027,191.14122 90.880941,182.486989 C90.880941,182.486989 91.2953967,174.500024 91.6795264,168.575516 C82.5817178,175.430152 65.9428367,174.540464 52.0535156,176.572591 C6.34208179,183.275576 16.4911927,238.183434 47.1305903,234.139401 C24.4568296,230.41889 22.758572,202.20165 34.1005067,192.485861 Z'
                          fill='url(#linearGradient-2)'
                        />
                        <path
                          d='M93.438436,153.13742 C98.4927741,145.322326 99.1195121,132.725163 88.8996404,144.179887 C54.3684025,182.871172 -5.54572143,151.256944 6.19045165,103.830547 C-6.44539362,120.987357 -0.380187889,165.845793 46.9284168,169.657295 C58.8061113,165.714362 83.2589991,168.767607 93.438436,153.13742 Z'
                          fill='url(#linearGradient-3)'
                        />
                        <path
                          d='M60.7570858,148.931625 C60.7570858,148.931625 72.8874973,147.688085 80.7520474,138.44747 C48.7783045,150.336927 22.5462898,98.765396 62.5564302,63.9058315 C93.6709356,36.8310306 62.000453,26.1547834 52.9228618,38.1655615 C56.2688336,34.8595645 83.3803032,36.7299297 58.6746985,57.6173602 C35.9402857,76.8770674 11.8513103,116.862444 60.7570858,148.931625 Z'
                          fill='url(#radialGradient-4)'
                        />
                        <path
                          d='M150.98713,242.65209 C137.674003,227.749829 150.98713,214.293309 153.433429,190.807587 C155.050818,174.965088 149.137242,157.444315 128,157.444315 C106.862758,157.444315 100.939074,174.995418 102.566571,190.807587 C104.982544,214.293309 118.315888,227.749829 105.01287,242.65209 C90.941593,258.413709 64.6287088,241.984825 72.2304333,220.632331 C53.5192737,251.700614 101.009835,271.041202 117.790237,238.739488 C130.709125,213.868685 92.4174597,170.28412 128,170.28412 C163.58254,170.28412 125.290875,213.868685 138.209763,238.739488 C154.990165,271.041202 202.470618,251.700614 183.759458,220.632331 C191.351074,241.984825 165.058407,258.403599 150.98713,242.65209 Z'
                          fill='url(#radialGradient-5)'
                        />
                        <path
                          d='M203.946484,176.582701 C190.047055,174.560685 173.398065,175.430152 164.320474,168.575516 C164.714712,174.500024 165.119059,182.497099 165.119059,182.497099 C194.980089,191.14122 209.364735,181.728733 221.889385,192.485861 C233.231319,202.19154 231.533062,230.41889 208.818866,234.09896 C239.498699,238.183434 249.657918,183.275576 203.946484,176.582701 Z'
                          fill='url(#linearGradient-6)'
                        />
                        <path
                          d='M249.809548,103.820437 C261.545721,151.236724 201.631598,182.871172 167.090251,144.159666 C156.870379,132.704943 157.466791,145.312216 162.561564,153.12731 C172.741001,168.757497 197.18378,165.704252 209.061475,169.647184 C256.380188,165.845793 262.445394,120.977247 249.809548,103.820437 Z'
                          fill='url(#linearGradient-7)'
                        />
                        <path
                          d='M175.247953,138.44747 C183.112503,147.688085 195.232805,148.931625 195.232805,148.931625 C244.138581,116.902884 220.049606,76.8669573 197.254541,57.6173602 C172.538827,36.7299297 199.650297,34.8595645 202.996269,38.1655615 C193.89846,26.1547834 162.248195,36.8310306 193.3627,63.9058315 C233.443602,98.765396 207.211587,150.336927 175.247953,138.44747 Z'
                          fill='url(#radialGradient-8)'
                        />
                        <path
                          d='M141.141279,35.53694 C141.141279,43.4228044 128,43.4228044 128,35.53694 C128,27.6510757 141.141279,27.6611857 141.141279,35.53694 Z M120.448819,42.7555389 C120.448819,48.1846532 111.421771,48.1846532 111.421771,42.7555389 C111.421771,37.3264246 120.448819,37.3264246 120.448819,42.7555389 Z M126.210764,17.7836351 C126.210764,23.2228595 117.173608,23.2228595 117.173608,17.7836351 C117.173608,12.3444107 126.210764,12.3949612 126.210764,17.7836351 Z M107.388409,56.3131596 C107.388409,59.0327718 102.869831,59.0327718 102.869831,56.3131596 C102.869831,53.5935474 107.388409,53.5935474 107.388409,56.3131596 Z M108.247647,29.6225417 C108.247647,33.3834924 102.000485,33.3834924 102.000485,29.6225417 C102.000485,25.8615911 108.247647,25.8717011 108.247647,29.6225417 Z M126.210764,62.6926216 C126.210764,66.4636824 119.963602,66.4636824 119.963602,62.6926216 C119.963602,58.9215608 126.210764,58.9518911 126.210764,62.6926216 Z'
                          fill='#0b1121'
                          opacity='0.3'
                        />
                        <path
                          d='M111.947422,93.9934371 C111.947422,108.329534 95.6926708,108.329534 95.6926708,93.9934371 C95.6926708,79.6573401 111.947422,79.6573401 111.947422,93.9934371 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M103.617873,90.3436973 C103.703055,91.2895069 103.24666,92.2022815 102.438946,92.7015109 C101.631231,93.2007403 100.610828,93.2007403 99.8031142,92.7015109 C98.9953999,92.2022815 98.5390048,91.2895069 98.6241869,90.3436973 C98.5390048,89.3978876 98.9953999,88.4851131 99.8031142,87.9858837 C100.610828,87.4866543 101.631231,87.4866543 102.438946,87.9858837 C103.24666,88.4851131 103.703055,89.3978876 103.617873,90.3436973 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M160.347764,93.9934371 C160.347764,108.329534 144.093013,108.329534 144.093013,93.9934371 C144.093013,79.6573401 160.347764,79.6573401 160.347764,93.9934371 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M151.967671,90.3436973 C152.052853,91.2895069 151.596458,92.2022815 150.788744,92.7015109 C149.981029,93.2007403 148.960627,93.2007403 148.152913,92.7015109 C147.345198,92.2022815 146.888803,91.2895069 146.973985,90.3436973 C146.888803,89.3978876 147.345198,88.4851131 148.152913,87.9858837 C148.960627,87.4866543 149.981029,87.4866543 150.788744,87.9858837 C151.596458,88.4851131 152.052853,89.3978876 151.967671,90.3436973 L151.967671,90.3436973 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M120.448819,122.52409 C120.448819,130.693037 119.771538,137.305031 118.993169,137.305031 C118.214801,137.305031 117.588064,130.693037 117.598172,122.5342 C117.608281,114.375363 118.275453,107.753259 119.06393,107.753259 C119.852407,107.753259 120.469036,114.355143 120.448819,122.52409 Z'
                          fill='#0b1121'
                        />
                        <ellipse
                          fill='#0b1121'
                          cx='128.262826'
                          cy='122.51398'
                          rx='1.07151968'
                          ry='17.3590117'
                        />
                        <path
                          d='M138.391719,122.331998 C138.391719,130.298743 137.744764,136.759086 136.976504,136.759086 C136.208245,136.759086 135.632051,130.318964 135.642159,122.342108 C135.652268,114.365253 136.309332,107.915021 137.057374,107.915021 C137.805416,107.915021 138.422045,114.365253 138.391719,122.331998 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M199.043776,145.099904 C197.365736,142.875686 207.130717,135.535766 208.828975,137.770094 C210.527233,140.004423 200.711708,147.334232 199.043776,145.099904 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M201.469859,143.724933 C200.711708,142.713925 206.059198,138.669892 206.827457,139.6809 C207.595716,140.691908 202.238118,144.746051 201.469859,143.724933 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M204.825939,135.323454 C202.804204,133.382319 210.234081,125.749206 212.235599,127.690342 C214.237117,129.631478 206.787022,137.2747 204.825939,135.323454 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M206.72637,133.837272 C205.806481,132.947585 209.870169,128.782231 210.769841,129.661808 C211.669513,130.541385 207.636151,134.726959 206.72637,133.837272 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M215.349071,121.159229 C212.680381,120.340312 215.783744,110.159459 218.452435,110.978376 C221.121125,111.797292 217.967218,121.988256 215.349071,121.159229 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M216.390265,118.955231 C215.167115,118.581158 216.875481,113.020612 218.078414,113.384575 C219.281346,113.748538 217.593197,119.329304 216.390265,118.955231 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M188.045537,144.725831 C186.862822,142.19831 197.588127,137.18371 198.760733,139.72134 C199.93334,142.258971 189.218143,147.253352 188.045537,144.725831 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M190.673793,143.917024 C190.138033,142.754365 195.990956,140.014533 196.536825,141.167082 C197.082693,142.319631 191.1489,145.069574 190.673793,143.917024 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M214.934615,130.308853 C212.599511,128.802451 218.381674,119.855028 220.70667,121.381651 C223.031665,122.908273 217.289937,131.825366 214.934615,130.308853 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M216.562112,128.478928 C215.490593,127.781333 218.654608,122.898163 219.716019,123.585649 C220.77743,124.273134 217.623523,129.166414 216.562112,128.478928 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M171.780677,159.112478 C172.862305,156.352426 182.900221,160.305468 181.889353,163.075631 C180.878485,165.845793 170.68894,161.882641 171.780677,159.112478 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M173.923716,160.335798 C174.419041,159.072038 179.92827,161.245706 179.443053,162.499356 C178.957837,163.753006 173.418282,161.629889 173.923716,160.335798 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M185.922715,162.357815 C186.680865,158.910277 197.042259,161.205266 196.294216,164.652804 C195.546174,168.100342 185.154455,165.805353 185.922715,162.357815 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M188.176949,163.368823 C188.530753,161.78154 194.242155,163.045301 193.858026,164.612363 C193.473896,166.179426 187.823146,164.885336 188.176949,163.368823 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M163.006346,147.1017 C165.553732,144.291098 174.307846,152.267953 171.770568,155.058335 C169.23329,157.848718 160.458959,149.902193 163.006346,147.1017 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M164.664169,149.214708 C165.836775,147.930727 170.618179,152.298283 169.455681,153.572153 C168.293183,154.846024 163.501671,150.539129 164.664169,149.214708 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M199.882797,166.229977 C199.882797,163.823777 208.859301,164.005758 208.808758,166.411958 C208.758214,168.818158 199.822144,168.646286 199.882797,166.229977 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M201.884314,166.583829 C201.884314,165.47172 206.787022,165.572821 206.776944,166.66471 C206.766805,167.756599 201.864097,167.675718 201.884314,166.583829 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M166.726339,175.703124 C167.484489,172.255586 177.845882,174.550574 177.107949,177.998113 C176.370016,181.445651 165.968188,179.150662 166.726339,175.703124 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M168.980573,176.663582 C169.334377,175.076299 175.045779,176.329949 174.661649,177.907122 C174.27752,179.484295 168.62677,178.220534 168.980573,176.663582 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M121.692186,164.450602 C121.692186,160.922183 134.247162,160.750312 134.297705,164.288841 C134.348249,167.82737 121.742729,167.989131 121.692186,164.450602 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M124.552941,164.865115 C124.552941,163.247502 131.416733,163.156511 131.447059,164.764015 C131.477385,166.371518 124.573159,166.472619 124.552941,164.865115 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M137.957046,168.676617 C140.413454,166.138986 148.065722,173.569896 145.568879,176.097417 C143.072036,178.624938 135.500638,171.214247 137.957046,168.676617 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M139.362152,170.678413 C140.504432,169.515753 144.659098,173.580007 143.547144,174.722446 C142.43519,175.864885 138.250198,171.820852 139.362152,170.678413 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M150.117784,178.715928 C153.635603,178.90802 153.0493,189.533717 149.521372,189.341625 C145.993444,189.149534 146.589856,178.533947 150.117784,178.715928 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M149.53148,181.091798 C151.148869,181.182789 150.825391,186.996086 149.22822,186.905095 C147.631049,186.814105 147.924201,181.000807 149.53148,181.091798 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M144.062687,189.442726 C147.519854,190.150432 145.397032,200.563817 141.939864,199.886441 C138.482697,199.209066 140.605519,188.74513 144.062687,189.442726 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M143.163014,191.677054 C144.750076,192.010687 143.587579,197.743104 142.010625,197.399361 C140.433672,197.055618 141.575952,191.393972 143.163014,191.677054 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M147.479419,200.533487 C150.936586,201.241192 148.813764,211.654577 145.356597,210.967092 C141.89943,210.279606 144.022252,199.835891 147.479419,200.533487 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M146.55953,202.798145 C148.146592,203.121668 146.994203,208.864194 145.40714,208.510342 C143.820078,208.156489 144.992685,202.474622 146.55953,202.798145 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M139.564326,212.099421 C143.011384,212.797017 140.898671,223.220512 137.441504,222.522916 C133.984336,221.82532 136.086941,211.391715 139.564326,212.099421 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M138.634327,214.364079 C140.231498,214.697712 139.069,220.430129 137.492047,220.076276 C135.915093,219.722423 137.097809,214.040557 138.634327,214.364079 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M141.525409,224.29218 C145.043228,224.423611 144.64899,235.059418 141.121062,234.927987 C137.593134,234.796556 137.987372,224.160749 141.525409,224.29218 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M140.97954,226.68827 C142.607037,226.759041 142.384646,232.572338 140.777367,232.511677 C139.170087,232.451017 139.382369,226.627609 140.97954,226.68827 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M139.766499,239.356203 C142.50595,237.131985 148.116266,244.047282 145.366706,246.2715 C142.617146,248.495718 137.027048,241.570311 139.766499,239.356203 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M140.686389,241.216459 C141.949973,240.20545 145.012902,243.986621 143.718992,244.997629 C142.425081,246.008638 139.443021,242.227467 140.686389,241.216459 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M149.005829,245.907537 C150.421044,243.339576 156.890597,246.918545 155.475382,249.466286 C154.060167,252.014027 147.590614,248.475498 149.005829,245.907537 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M150.289631,247.039866 C150.936586,245.856986 154.474623,247.808232 153.837776,248.970892 C153.20093,250.133551 149.642676,248.212636 150.289631,247.039866 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M157.17364,253.732741 C157.385922,251.073789 163.73417,251.589403 163.51178,254.248355 C163.289389,256.907307 156.951249,256.381582 157.17364,253.732741 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M158.578746,254.177584 C158.679832,252.964374 162.147108,253.237347 162.05613,254.450557 C161.965152,255.663766 158.477659,255.370574 158.578746,254.177584 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M166.049057,252.145458 C165.482971,249.779698 171.103395,248.414837 171.689699,250.780597 C172.276002,253.146356 166.625252,254.511217 166.049057,252.145458 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M167.423837,252.125238 C167.17112,251.053569 170.254267,250.305423 170.517092,251.366981 C170.779918,252.42854 167.656337,253.207016 167.423837,252.125238 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M174.560563,252.337549 C173.630564,250.083001 178.998271,247.858783 179.918161,250.113331 C180.838051,252.36788 175.510778,254.541547 174.560563,252.337549 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M175.884799,252.064577 C175.470343,251.053569 178.40186,249.830249 178.826424,250.841257 C179.250988,251.852265 176.309364,253.095805 175.884799,252.064577 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M179.352075,246.33216 C177.572948,244.674107 181.535549,240.417762 183.304568,242.075816 C185.073586,243.733869 181.131202,247.990214 179.352075,246.33216 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M180.474138,245.573904 C179.665444,244.805538 181.818592,242.480219 182.627286,243.238475 C183.43598,243.996731 181.282832,246.33216 180.474138,245.573904 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M185.892389,238.729378 C183.557284,238.062113 185.174673,232.471237 187.509777,233.158723 C189.844881,233.846208 188.217384,239.416864 185.892389,238.729378 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M186.549453,237.556609 C185.538585,237.243196 186.367496,234.189951 187.428907,234.523584 C188.490318,234.857217 187.64119,237.880131 186.549453,237.556609 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M179.635118,184.165263 C179.938378,180.657064 190.532271,181.566972 190.218902,185.095391 C189.905533,188.623809 179.321749,187.693682 179.635118,184.165263 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M181.99044,184.822418 C182.14207,183.204805 187.924233,183.720419 187.782711,185.317812 C187.64119,186.915205 181.848918,186.419811 181.99044,184.822418 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M192.351833,180.464973 C192.422593,176.997214 203.046812,177.209526 202.965943,180.687395 C202.885073,184.165263 192.270963,183.942841 192.351833,180.464973 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M194.717263,180.960367 C194.717263,179.362974 200.560078,179.494405 200.529752,181.071578 C200.499426,182.648751 194.717263,182.57798 194.717263,180.960367 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M204.391266,184.862859 C205.149417,181.526531 214.408964,183.639539 213.620488,186.996086 C212.832011,190.352633 203.612898,188.219406 204.391266,184.862859 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M206.382675,185.772766 C206.736479,184.246144 211.790817,185.408803 211.437013,186.925315 C211.08321,188.441828 206.028872,187.309499 206.382675,185.772766 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M217.249502,185.115611 C218.816347,182.082586 226.549484,186.045738 224.962422,189.159644 C223.37536,192.273549 215.682657,188.178966 217.249502,185.115611 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M218.79613,186.409701 C219.523954,185.0044 223.729164,187.198288 223.031665,188.573259 C222.334166,189.94823 218.078414,187.804893 218.79613,186.409701 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M225.397095,193.870942 C227.95459,192.718393 230.886106,199.209066 228.318503,200.361615 C225.750899,201.514165 222.829492,195.033602 225.397095,193.870942 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M225.730682,195.498665 C226.903288,194.962831 228.500459,198.53169 227.34807,199.037194 C226.195681,199.542698 224.558075,196.01428 225.730682,195.498665 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M232.564147,201.706234 C235.36425,201.706234 235.344033,208.833864 232.564147,208.783314 C229.784261,208.732763 229.753935,201.696146 232.564147,201.706234 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M232.190126,203.323831 C233.494145,203.323831 233.473928,207.216251 232.190126,207.216251 C230.906324,207.216251 230.916433,203.313759 232.190126,203.323831 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M229.824695,210.886211 C232.321539,211.341165 231.148932,217.720627 228.64198,217.245453 C226.135029,216.770279 227.307635,210.451477 229.824695,210.886211 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M229.228284,212.301623 C230.390781,212.524044 229.743826,216.001913 228.601546,215.789601 C227.459265,215.577289 228.075894,212.089311 229.228284,212.301623 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M230.09763,220.116716 C232.119365,221.238935 229.248501,226.354637 227.226766,225.171758 C225.20503,223.988878 228.075894,218.974277 230.09763,220.116716 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M229.228284,221.117614 C230.148173,221.643339 228.581328,224.433722 227.661439,223.907997 C226.741549,223.382273 228.298285,220.602 229.228284,221.117614 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M224.093076,226.910692 C225.498182,228.275553 222.020797,231.854522 220.615691,230.469441 C219.210585,229.08436 222.68797,225.52561 224.093076,226.910692 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M223.132752,227.537517 C223.779707,228.174452 221.869167,230.115588 221.232321,229.488763 C220.595474,228.861938 222.485797,226.910692 223.132752,227.537517 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M210.597993,164.774125 C209.799408,161.407467 220.140584,158.950717 220.949278,162.337595 C221.757972,165.724472 211.406687,168.171112 210.597993,164.774125 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M213.054402,164.662914 C212.690489,163.105961 218.331131,161.77143 218.705152,163.308163 C219.079173,164.844895 213.408205,166.199646 213.054402,164.662914 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M223.850468,165.684032 C222.8396,162.802659 232.867407,159.28435 233.878275,162.175833 C234.889142,165.067317 224.851227,168.585626 223.850468,165.684032 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M226.246224,165.259409 C225.781225,163.924878 231.300562,162.014072 231.735235,163.328383 C232.169908,164.642694 226.711223,166.583829 226.246224,165.259409 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M232.897733,158.12169 C230.875998,155.846922 238.720331,148.699094 240.7825,150.963752 C242.84467,153.22841 234.949794,160.386349 232.897733,158.12169 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M234.939686,156.78716 C233.999579,155.776151 238.315983,151.843329 239.245982,152.864447 C240.17598,153.885566 235.879793,157.818388 234.939686,156.78716 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M245.766078,150.791881 C243.208583,149.093387 249.122158,140.236954 251.669545,141.935448 C254.216931,143.633942 248.293247,152.490374 245.766078,150.791881 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M247.413792,149.002396 C246.251294,148.21381 249.486071,143.3913 250.63846,144.149556 C251.790849,144.907813 248.57629,149.770762 247.413792,149.002396 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M249.395093,138.164388 C246.524229,137.082609 250.304873,127.134288 253.15552,128.205956 C256.006167,129.277625 252.245739,139.256276 249.395093,138.164388 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M250.608134,136.0716 C249.294006,135.566096 251.366284,130.126872 252.629869,130.622266 C253.893454,131.11766 251.912153,136.546774 250.608134,136.0716 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M254.68193,124.424785 C252.437804,124.677537 251.578567,116.852334 253.822693,116.599582 C256.066819,116.346829 256.936165,124.172033 254.68193,124.424785 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M254.772908,122.625191 C253.762041,122.726292 253.286933,118.449727 254.297801,118.348626 C255.308668,118.247525 255.803993,122.50387 254.772908,122.625191 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M222.283623,113.040833 C219.523954,112.7072 220.817865,102.132053 223.577534,102.485906 C226.337202,102.839759 225.043292,113.384575 222.283623,113.040833 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M222.930578,110.695293 C221.656885,110.543642 222.374601,104.760675 223.628077,104.912326 C224.881553,105.063977 224.194163,110.846945 222.930578,110.695293 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M218.149174,104.578693 C215.379397,104.811225 214.52016,94.1956387 217.310154,93.9732169 C220.100149,93.7507951 220.939169,104.356272 218.149174,104.578693 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M218.310913,102.142164 C217.03722,102.243264 216.58233,96.4501871 217.845914,96.3389762 C219.109499,96.2277653 219.584606,102.051173 218.310913,102.142164 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M221.131234,91.3749257 C218.604065,92.5375852 214.186573,82.8622362 216.723851,81.6995767 C219.261129,80.5369172 223.67862,90.2223763 221.131234,91.3749257 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M220.453953,89.0394966 C219.301564,89.5652209 216.88559,84.2877579 218.02787,83.7519235 C219.170151,83.2160891 221.61645,88.5542127 220.453953,89.0394966 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M212.720815,83.5901622 C210.446363,84.8640326 205.644742,76.2098019 207.929303,74.9460416 C210.213864,73.6822813 215.015485,82.3162918 212.720815,83.5901622 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M211.902013,81.4771549 C210.891145,82.0635397 208.242672,77.3421312 209.283865,76.7557464 C210.325059,76.1693616 212.973532,80.8907701 211.902013,81.4771549 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M211.164079,72.9240251 C209.223213,74.4405375 203.643224,67.2825991 205.604307,65.7559766 C207.56539,64.2293542 213.135271,71.3670724 211.164079,72.9240251 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M210.153212,71.1042103 C209.263648,71.801806 206.210828,67.889204 207.120609,67.1916083 C208.03039,66.4940126 211.052884,70.4066146 210.153212,71.1042103 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M201.793336,68.5665796 C199.923231,70.1943028 193.999547,63.3194467 195.879761,61.7018335 C197.759975,60.0842203 203.643224,66.9489664 201.793336,68.5665796 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M200.651056,66.8074252 C199.801927,67.5555713 196.607585,63.7744004 197.41628,63.0565846 C198.224974,62.3387687 201.520402,66.0693892 200.651056,66.8074252 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M197.537584,59.4068448 C195.849435,60.8626967 191.007379,55.2414908 192.705636,53.7856389 C194.403894,52.3297871 199.235841,57.9408828 197.537584,59.4068448 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M196.658129,57.9408828 C195.879761,58.6081483 193.231288,55.5346832 194.009656,54.9078581 C194.788024,54.281033 197.426388,57.2837275 196.658129,57.9408828 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M189.420317,57.59714 C187.519886,58.7496894 183.66848,52.4106677 185.589128,51.2480082 C187.509777,50.0853487 191.351074,56.4243705 189.420317,57.59714 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M188.793579,56.0098571 C187.934341,56.5355814 185.821628,53.0779332 186.690974,52.5420988 C187.56032,52.0062644 189.662925,55.4841328 188.793579,56.0098571 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M188.652057,49.9842479 C186.519127,50.611073 184.871412,45.1111881 187.02456,44.4742529 C189.177708,43.8373177 190.774879,49.3372026 188.652057,49.9842479 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M188.510536,48.649717 C187.499668,48.9429094 186.640431,45.9301048 187.620972,45.6166923 C188.601514,45.3032797 189.491077,48.3565246 188.510536,48.649717 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M182.738482,43.8575379 C180.635877,43.1195019 182.536308,37.7004977 184.649021,38.4486438 C186.761735,39.1967899 184.851195,44.6157941 182.738482,43.8575379 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M183.43598,42.7252087 C182.425113,42.401686 183.51685,39.4293218 184.446848,39.7730646 C185.376846,40.1168074 184.396305,43.0588414 183.43598,42.7252087 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M188.085971,37.5892868 C187.732168,35.3852888 193.393026,34.4956015 193.74683,36.7097096 C194.100634,38.9238176 188.429666,39.823615 188.085971,37.5892868 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M189.410208,37.6701674 C189.248469,36.6591592 192.351833,36.1839853 192.503463,37.1848835 C192.655093,38.1857816 189.571947,38.6811757 189.410208,37.6701674 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M56.9663323,145.099904 C58.6342638,142.875686 48.8793913,135.535766 47.171025,137.770094 C45.4626587,140.004423 55.288292,147.334232 56.9663323,145.099904 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M54.5301413,143.724933 C55.288292,142.713925 49.9408023,138.669892 49.1725429,139.6809 C48.4042835,140.691908 53.7618819,144.746051 54.5301413,143.724933 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M51.1740608,135.323454 C53.195796,133.382319 45.765919,125.749206 43.7644011,127.690342 C41.7628832,129.631478 49.2129776,137.2747 51.1740608,135.323454 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M49.2736297,133.837272 C50.1935192,132.947585 46.1298314,128.782231 45.2301592,129.661808 C44.330487,130.541385 48.3638488,134.726959 49.2736297,133.837272 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M40.6509289,121.159229 C43.3196194,120.340312 40.2162558,110.159459 37.5475653,110.978376 C34.8788747,111.797292 38.0327817,121.988256 40.6509289,121.159229 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M39.6097352,118.955231 C40.832885,118.581158 39.1245187,113.020612 37.9215863,113.384575 C36.7186538,113.748538 38.4068027,119.329304 39.6097352,118.955231 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M67.964572,144.725831 C69.1371784,142.19831 58.411873,137.18371 57.2392665,139.72134 C56.0666601,142.258971 66.7818569,147.253352 67.964572,144.725831 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M65.3767509,143.917024 C65.9125107,142.754365 60.0595872,140.014533 59.5137187,141.167082 C58.9678501,142.319631 64.8510997,145.069574 65.3767509,143.917024 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M41.0653846,130.308853 C43.4004888,128.802451 37.618326,119.855028 35.2933305,121.381651 C32.9683349,122.908273 38.710063,131.825366 41.0653846,130.308853 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M39.4378877,128.478928 C40.5094074,127.781333 37.3453917,122.898163 36.2839807,123.585649 C35.2225697,124.273134 38.3764767,129.166414 39.4378877,128.478928 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M84.6944311,158.809176 C83.5016073,155.776151 72.1293466,160.224588 73.3221704,163.287943 C74.5149942,166.351298 85.8973636,161.862421 84.6944311,158.809176 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M82.2784575,160.214477 C81.7224803,158.809176 75.5056444,161.225486 76.0414043,162.651007 C76.5771641,164.076529 82.824326,161.599559 82.2784575,160.214477 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M70.0772853,162.357815 C69.3191346,158.910277 58.9577415,161.205266 59.7057835,164.652804 C60.4538256,168.100342 70.8455447,165.805353 70.0772853,162.357815 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M67.8230505,163.368823 C67.4692468,161.78154 61.7578448,163.045301 62.1419745,164.612363 C62.5261042,166.179426 68.1768542,164.885336 67.8230505,163.368823 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M92.9936543,147.1017 C90.4462679,144.291098 81.6921543,152.267953 84.229432,155.058335 C86.7667097,157.848718 95.5410407,149.902193 92.9936543,147.1017 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M91.3358314,149.214708 C90.1632249,147.930727 85.3818211,152.298283 86.5443189,153.572153 C87.7068166,154.846024 92.4983291,150.539129 91.3358314,149.214708 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M57.6132875,165.957004 C57.5425268,163.368823 48.3739575,163.500254 48.4548269,166.098545 C48.5356963,168.696837 57.6840483,168.565406 57.6132875,165.957004 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M55.5511176,166.320967 C55.5511176,165.127978 50.4967795,165.218968 50.4967795,166.391738 C50.4967795,167.564507 55.5814436,167.513957 55.5511176,166.320967 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M89.2736614,175.703124 C88.5155107,172.255586 78.1541176,174.550574 78.892051,177.998113 C79.6299843,181.445651 90.0318121,179.150662 89.2736614,175.703124 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M87.0194266,176.663582 C86.665623,175.076299 80.9542209,176.329949 81.3383506,177.907122 C81.7224803,179.484295 87.3732303,178.220534 87.0194266,176.663582 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M118.588822,169.333772 C116.567087,166.442288 107.853408,172.538668 109.875144,175.399821 C111.896879,178.260975 120.610558,172.235366 118.588822,169.333772 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M116.880456,171.082816 C115.940349,169.758395 111.189271,173.104833 112.099052,174.409033 C113.008833,175.713234 117.790237,172.397127 116.880456,171.082816 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M105.882216,178.715928 C102.364397,178.90802 102.9507,189.533717 106.478628,189.341625 C110.006556,189.149534 109.410144,178.533947 105.882216,178.715928 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M106.46852,181.091798 C104.851131,181.182789 105.174609,186.996086 106.77178,186.905095 C108.368951,186.814105 108.075799,181.000807 106.46852,181.091798 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M111.937313,189.442726 C108.480146,190.150432 110.602968,200.563817 114.060136,199.886441 C117.517303,199.209066 115.394481,188.74513 111.937313,189.442726 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M112.836986,191.677054 C111.249924,192.010687 112.412421,197.743104 113.989375,197.399361 C115.566328,197.055618 114.424048,191.393972 112.836986,191.677054 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M108.520581,200.533487 C105.063414,201.241192 107.186236,211.654577 110.643403,210.967092 C114.10057,210.279606 111.977748,199.835891 108.520581,200.533487 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M109.44047,202.798145 C107.853408,203.121668 109.005797,208.864194 110.59286,208.510342 C112.179922,208.156489 111.007315,202.474622 109.44047,202.798145 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M116.435674,212.099421 C112.988616,212.797017 115.101329,223.220512 118.558496,222.522916 C122.015664,221.82532 119.913059,211.391715 116.435674,212.099421 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M117.365673,214.364079 C115.768502,214.697712 116.931,220.430129 118.507953,220.076276 C120.084907,219.722423 118.902191,214.040557 117.365673,214.364079 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M114.474591,224.29218 C110.966881,224.423611 111.35101,235.059418 114.878938,234.927987 C118.406866,234.796556 118.012628,224.160749 114.474591,224.29218 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M115.02046,226.68827 C113.392963,226.759041 113.615354,232.572338 115.222633,232.511677 C116.829913,232.451017 116.617631,226.627609 115.02046,226.68827 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M116.233501,239.356203 C113.49405,237.131985 107.883734,244.047282 110.633294,246.2715 C113.382854,248.495718 118.972952,241.570311 116.233501,239.356203 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M115.313611,241.216459 C114.050027,240.20545 110.987098,243.986621 112.281008,244.997629 C113.574919,246.008638 116.556979,242.227467 115.313611,241.216459 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M106.994171,245.907537 C105.578956,243.339576 99.1094034,246.918545 100.524618,249.466286 C101.939833,252.014027 108.409386,248.475498 106.994171,245.907537 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M105.760912,247.039866 C105.113957,245.856986 101.57592,247.808232 102.212767,248.970892 C102.849614,250.133551 106.357324,248.212636 105.760912,247.039866 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M98.8263605,253.732741 C98.6140783,251.073789 92.2658296,251.589403 92.4882205,254.248355 C92.7106113,256.907307 99.0487513,256.381582 98.8263605,253.732741 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M97.4212545,254.177584 C97.3201677,252.964374 93.8528918,253.237347 93.9438698,254.450557 C94.0348479,255.663766 97.5223412,255.370574 97.4212545,254.177584 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M89.9509427,252.145458 C90.5170286,249.779698 84.8966046,248.414837 84.3103014,250.780597 C83.7239982,253.146356 89.3747482,254.511217 89.9509427,252.145458 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M88.5761628,252.125238 C88.8288797,251.053569 85.7457334,250.305423 85.4829079,251.366981 C85.2200823,252.42854 88.3436632,253.207016 88.5761628,252.125238 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M81.4394374,252.337549 C82.3694356,250.083001 77.0017285,247.858783 76.081839,250.113331 C75.1619494,252.36788 80.4892218,254.541547 81.4394374,252.337549 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M80.1152008,252.064577 C80.5296565,251.053569 77.5981404,249.830249 77.173576,250.841257 C76.7490116,251.852265 79.6906364,253.095805 80.1152008,252.064577 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M76.6479248,246.33216 C78.4270519,244.674107 74.4644508,240.417762 72.6954324,242.075816 C70.9264141,243.733869 74.8687978,247.990214 76.6479248,246.33216 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M75.5258618,245.573904 C76.3345559,244.805538 74.1814078,242.480219 73.3727138,243.238475 C72.5640197,243.996731 74.7171677,246.33216 75.5258618,245.573904 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M70.1076113,238.729378 C72.4427155,238.062113 70.8253273,232.471237 68.4902231,233.158723 C66.1551189,233.846208 67.7826158,239.416864 70.1076113,238.729378 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M69.4505474,237.556609 C70.461415,237.243196 69.6325036,234.189951 68.5710926,234.523584 C67.5096815,234.857217 68.3588104,237.880131 69.4505474,237.556609 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M76.3648819,184.165263 C76.0616216,180.657064 65.467729,181.566972 65.7810979,185.095391 C66.0944669,188.623809 76.6782509,187.693682 76.3648819,184.165263 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M74.0095604,184.822418 C73.8579302,183.204805 68.0757674,183.720419 68.2172889,185.317812 C68.3588104,186.915205 74.1510818,186.419811 74.0095604,184.822418 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M63.6481672,180.464973 C63.5774065,176.997214 52.9531878,177.209526 53.0340572,180.687395 C53.1149266,184.165263 63.7290366,183.942841 63.6481672,180.464973 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M61.282737,180.960367 C61.282737,179.362974 55.4399222,179.494405 55.4702482,181.071578 C55.5005742,182.648751 61.282737,182.57798 61.282737,180.960367 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M51.6087339,184.862859 C50.8505832,181.526531 41.6011444,183.639539 42.3795125,186.996086 C43.1578806,190.352633 52.3871019,188.219406 51.6087339,184.862859 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M49.6173247,185.772766 C49.263521,184.246144 44.2091829,185.408803 44.5629865,186.925315 C44.9167902,188.441828 49.9711283,187.309499 49.6173247,185.772766 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M38.7504977,185.115611 C37.1836529,182.082586 29.4505156,186.045738 31.0375778,189.159644 C32.6246399,192.273549 40.3173425,188.178966 38.7504977,185.115611 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M37.2038703,186.409701 C36.4760456,185.0044 32.2708363,187.198288 32.9683349,188.573259 C33.6658336,189.94823 37.9215863,187.804893 37.2038703,186.409701 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M30.6029047,193.870942 C28.0454096,192.718393 25.1138935,199.209066 27.6814973,200.361615 C30.249101,201.514165 33.1705085,195.033602 30.6029047,193.870942 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M30.2693184,195.498665 C29.0967119,194.962831 27.4995411,198.53169 28.6519302,199.037194 C29.8043193,199.542698 31.4419248,196.01428 30.2693184,195.498665 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M23.4358533,201.706234 C20.63575,201.706234 20.6559673,208.833864 23.4358533,208.783314 C26.2157392,208.732763 26.2460653,201.696146 23.4358533,201.706234 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M23.8098743,203.323831 C22.5058551,203.323831 22.5260724,207.216251 23.8098743,207.216251 C25.0936762,207.216251 25.0936762,203.313759 23.8098743,203.323831 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M26.1753045,210.886211 C23.6784615,211.341165 24.8510679,217.720627 27.3580196,217.245453 C29.8649713,216.770279 28.6923649,210.451477 26.1753045,210.886211 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M26.7717164,212.301623 C25.6092187,212.524044 26.2561739,216.001913 27.3984543,215.789601 C28.5407348,215.577289 27.9241055,212.089311 26.7717164,212.301623 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M25.9023703,220.116716 C23.880635,221.238935 26.7514991,226.354637 28.7732343,225.171758 C30.7949695,223.988878 27.9241055,218.974277 25.9023703,220.116716 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M26.7717164,221.117614 C25.8518269,221.643339 27.4186717,224.433722 28.3385612,223.907997 C29.2584508,223.382273 27.7017146,220.602 26.7717164,221.117614 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M31.9069239,226.910692 C30.5018179,228.275553 33.9286592,231.854522 35.3843085,230.469441 C36.8399579,229.08436 33.3120299,225.52561 31.9069239,226.910692 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M32.8672482,227.537517 C32.2202929,228.174452 34.1308327,230.115588 34.7676793,229.488763 C35.4045259,228.861938 33.5142034,226.910692 32.8672482,227.537517 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M45.4020067,164.774125 C46.2005921,161.407467 35.8594163,158.950717 35.0507222,162.337595 C34.2420281,165.724472 44.5933126,168.171112 45.4020067,164.774125 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M42.9455984,164.662914 C43.3095107,163.105961 37.6688694,161.77143 37.2948484,163.308163 C36.9208273,164.844895 42.5917947,166.199646 42.9455984,164.662914 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M32.1495322,165.684032 C33.1603998,162.802659 23.132593,159.28435 22.1217254,162.175833 C21.1108577,165.067317 31.1487732,168.585626 32.1495322,165.684032 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M29.7537759,165.259409 C30.218775,163.924878 24.6994378,162.014072 24.2647647,163.328383 C23.8300916,164.642694 29.2887768,166.583829 29.7537759,165.259409 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M23.102267,158.12169 C25.1240022,155.846922 17.2796695,148.699094 15.2174995,150.963752 C13.1553296,153.22841 21.0502057,160.386349 23.102267,158.12169 Z'
                          fill='#FACFDA'
                        />
                        <path
                          d='M21.0603144,156.78716 C22.0004212,155.776151 17.6840165,151.843329 16.7540183,152.864447 C15.8240201,153.885566 20.1202075,157.818388 21.0603144,156.78716 Z'
                          fill='#E34E70'
                        />
                        <path
                          d='M10.2339221,150.791881 C12.7914172,149.093387 6.87784163,140.236954 4.33045523,141.935448 C1.78306882,143.633942 7.70675308,152.490374 10.2339221,150.791881 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M8.58620791,149.002396 C9.74870567,148.21381 6.56447267,143.3913 5.3615402,144.149556 C4.15860773,144.907813 7.42371015,149.770762 8.58620791,149.002396 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M6.60490737,138.164388 C9.47577142,137.082609 5.69512651,127.134288 2.84447982,128.205956 C-0.00616686953,129.277625 3.75426068,139.256276 6.60490737,138.164388 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M5.39186623,136.0716 C6.70599414,135.566096 4.63371551,130.126872 3.37013099,130.622266 C2.10654646,131.11766 4.087847,136.546774 5.39186623,136.0716 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M1.31806971,124.424785 C3.56219583,124.677537 4.42143331,116.852334 2.17730719,116.599582 C-0.0668189268,116.346829 -0.936165081,124.172033 1.31806971,124.424785 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M1.22709163,122.625191 C2.23795925,122.726292 2.71306703,118.449727 1.70219941,118.348626 C0.691331789,118.247525 0.196006655,122.50387 1.22709163,122.625191 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M33.716377,113.040833 C36.4760456,112.7072 35.182135,102.132053 32.4224664,102.485906 C29.6627978,102.839759 30.9567084,113.384575 33.716377,113.040833 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M33.0694217,110.695293 C34.3431149,110.543642 33.6253989,104.760675 32.371923,104.912326 C31.1184472,105.063977 31.8058372,110.846945 33.0694217,110.695293 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M37.8508255,104.578693 C40.6206028,104.811225 41.4798403,94.1956387 38.6898457,93.9732169 C35.899851,93.7507951 35.0608309,104.356272 37.8508255,104.578693 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M37.6890867,102.142164 C38.9627799,102.243264 39.4176704,96.4501871 38.1540858,96.3389762 C36.8905013,96.2277653 36.4153935,102.051173 37.6890867,102.142164 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M34.8687661,91.3749257 C37.3959351,92.5375852 41.8134266,82.8622362 39.2761489,81.6995767 C36.7388712,80.5369172 32.3213797,90.2223763 34.8687661,91.3749257 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M35.5460474,89.0394966 C36.6984365,89.5652209 39.1144101,84.2877579 37.9721297,83.7519235 C36.8298492,83.2160891 34.3835496,88.5542127 35.5460474,89.0394966 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M43.2791847,83.5901622 C45.5536368,84.8640326 50.355258,76.2098019 48.0706972,74.9460416 C45.7861364,73.6822813 40.9845152,82.3162918 43.2791847,83.5901622 Z'
                          fill='#F7B3C5'
                        />
                        <path
                          d='M44.0979874,81.4771549 C45.1088551,82.0635397 47.7573282,77.3421312 46.7161346,76.7557464 C45.6749409,76.1693616 43.0264678,80.8907701 44.0979874,81.4771549 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M44.8359208,72.9240251 C46.7767866,74.4405375 52.3567759,67.2825991 50.3956927,65.7559766 C48.4346095,64.2293542 42.8647289,71.3670724 44.8359208,72.9240251 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M45.8467884,71.1042103 C46.7363519,71.801806 49.7891721,67.889204 48.8793913,67.1916083 C47.9696104,66.4940126 44.9471162,70.4066146 45.8467884,71.1042103 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M54.2066637,68.5665796 C56.0767688,70.1943028 62.000453,63.3194467 60.1202392,61.7018335 C58.2400255,60.0842203 52.3567759,66.9489664 54.2066637,68.5665796 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M55.3489441,66.8074252 C56.1980729,67.5555713 59.3924146,63.7744004 58.5837205,63.0565846 C57.7750264,62.3387687 54.4795979,66.0693892 55.3489441,66.8074252 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M58.4624163,59.4068448 C60.1505653,60.8626967 64.9926212,55.2414908 63.2943636,53.7856389 C61.596106,52.3297871 56.7641587,57.9408828 58.4624163,59.4068448 Z'
                          fill='#F7B3C5'
                        />
                        <path
                          d='M59.3418712,57.9408828 C60.1202392,58.6081483 62.7687124,55.5346832 61.9903443,54.9078581 C61.2119763,54.281033 58.5736118,57.2837275 59.3418712,57.9408828 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M66.5796833,57.59714 C68.4801145,58.7496894 72.3315201,52.4106677 70.4108716,51.2480082 C68.4902231,50.0853487 64.6489262,56.4243705 66.5796833,57.59714 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M67.2064213,56.0098571 C68.0656587,56.5355814 70.1783721,53.0779332 69.3090259,52.5420988 C68.4396798,52.0062644 66.3370751,55.4841328 67.2064213,56.0098571 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M67.3479427,49.9842479 C69.4808734,50.611073 71.1285876,45.1111881 68.9754396,44.4742529 C66.8222916,43.8373177 65.2251207,49.3372026 67.3479427,49.9842479 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M67.4894642,48.649717 C68.5003318,48.9429094 69.3595693,45.9301048 68.3790277,45.6166923 C67.3984861,45.3032797 66.5089226,48.3565246 67.4894642,48.649717 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M73.2615183,43.8575379 C75.364123,43.1195019 73.4738005,37.7004977 71.3509785,38.4486438 C69.2281565,39.1967899 71.148805,44.6157941 73.2615183,43.8575379 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M72.5640197,42.7252087 C73.5748873,42.401686 72.4831502,39.4293218 71.553152,39.7730646 C70.6231538,40.1168074 71.6036954,43.0588414 72.5640197,42.7252087 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M67.9140286,37.5892868 C68.2678323,35.3852888 62.6069736,34.4956015 62.2531699,36.7097096 C61.8993663,38.9238176 67.5703336,39.823615 67.9140286,37.5892868 Z'
                          fill='#0b1121'
                        />
                        <path
                          d='M66.589792,37.6701674 C66.7515308,36.6591592 63.6481672,36.1839853 63.4965371,37.1848835 C63.3449069,38.1857816 66.4280532,38.6811757 66.589792,37.6701674 Z'
                          fill='#0b1121'
                        />
                      </g>
                    </svg>

                    <h6>Testing Library</h6>
                  </div>
                </div>

                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      viewBox='0 0 256 256'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      preserveAspectRatio='xMidYMid'>
                      <g>
                        <path
                          d='M254.953118,144.253071 C263.911504,74.1217108 214.38443,10.0052669 144.381048,1.04688158 C74.3776647,-7.9115038 10.0052669,41.6155696 1.04688158,111.618952 C-7.9115038,181.622335 41.6155696,245.866756 111.618952,254.953118 C181.750312,263.911504 245.866756,214.38443 254.953118,144.253071 Z'
                          fill='#dbd9d9'
                        />
                        <g transform='translate(50.181225, 45.198924)'>
                          <path d='M124.018448,36.9853339 L70.012182,90.9916 L54.7829269,75.7623449 C107.893354,22.6519173 113.140409,27.2590869 124.018448,36.9853339 L124.018448,36.9853339 Z' />
                          <path
                            d='M70.012182,92.2713693 C69.6282512,92.2713693 69.3722974,92.1433924 69.1163435,91.8874385 L53.7591114,76.6581834 C53.2472037,76.1462757 53.2472037,75.3784141 53.7591114,74.8665063 C107.765378,20.8602402 113.396363,25.9793176 124.78631,36.2174723 C125.042264,36.4734262 125.170241,36.72938 125.170241,37.1133108 C125.170241,37.4972416 125.042264,37.7531955 124.78631,38.0091494 L70.7800436,91.8874385 C70.6520667,92.1433924 70.2681359,92.2713693 70.012182,92.2713693 Z M56.574604,75.7623449 L70.012182,89.1999229 L122.098794,37.1133108 C112.628501,28.6668332 106.229654,26.1072945 56.574604,75.7623449 L56.574604,75.7623449 Z'
                            fill='#dbd9d9'
                          />
                          <path d='M85.497391,106.476809 L70.7800436,91.7594616 L124.78631,37.7531955 C139.247703,52.342566 117.619601,76.0182987 85.497391,106.476809 Z' />
                          <path
                            d='M85.497391,107.756578 C85.1134602,107.756578 84.8575064,107.628601 84.6015525,107.372648 L69.8842051,92.6553001 C69.6282512,92.3993463 69.6282512,92.1433924 69.6282512,91.7594616 C69.6282512,91.3755308 69.7562282,91.1195769 70.012182,90.8636231 L124.018448,36.857357 C124.530356,36.3454492 125.298217,36.3454492 125.810125,36.857357 C129.137525,39.9288034 130.929203,44.2800191 130.801226,48.7592118 C130.545272,62.9646515 114.420178,81.0093992 86.5212065,107.372648 C86.1372757,107.628601 85.7533449,107.756578 85.497391,107.756578 L85.497391,107.756578 Z M72.5717207,91.7594616 C80.7622445,100.077962 84.2176217,103.405363 85.497391,104.685132 C106.997516,84.2088225 127.857756,63.2206053 127.985733,48.7592118 C128.11371,45.4318115 126.833941,42.1044113 124.658333,39.5448726 L72.5717207,91.7594616 Z'
                            fill='#dbd9d9'
                          />
                          <path d='M55.0388808,76.1462757 L65.9169201,87.024315 C66.172874,87.2802689 66.172874,87.5362228 65.9169201,87.7921767 C65.7889432,87.9201536 65.7889432,87.9201536 65.6609663,87.9201536 L43.1370259,92.7832771 C41.9852335,92.911254 40.961418,92.1433924 40.7054642,90.9916 C40.5774872,90.3517153 40.8334411,89.7118307 41.2173719,89.3278999 L54.2710192,76.2742526 C54.526973,76.0182987 54.9109038,75.8903218 55.0388808,76.1462757 Z' />
                          <path
                            d='M42.7530951,94.0630464 C40.8334411,94.0630464 39.4256948,92.5273232 39.4256948,90.6076692 C39.4256948,89.7118307 39.8096256,88.8159921 40.4495103,88.1761075 L53.5031576,75.1224602 C54.2710192,74.4825755 55.2948346,74.4825755 56.0626962,75.1224602 L66.9407356,86.0004996 C67.7085972,86.6403842 67.7085972,87.7921767 66.9407356,88.5600383 C66.6847817,88.8159921 66.4288279,88.9439691 66.0448971,89.071946 L43.5209567,93.9350695 C43.2650028,93.9350695 43.009049,94.0630464 42.7530951,94.0630464 L42.7530951,94.0630464 Z M54.65495,77.5540219 L42.1132104,90.0957615 C41.8572566,90.3517153 41.7292796,90.7356461 41.9852335,91.1195769 C42.1132104,91.5035077 42.4971412,91.6314847 42.881072,91.5035077 L63.9972661,86.8963381 L54.65495,77.5540219 Z'
                            fill='#dbd9d9'
                          />
                          <path d='M152.557304,7.03873136 C144.366781,-0.895838537 131.185156,-0.639884669 123.250587,7.67861603 C115.316017,15.9971167 115.57197,29.050764 123.890471,36.9853339 C130.673249,43.5121575 140.911403,44.6639499 148.97395,39.8008264 L134.38458,25.211456 L152.557304,7.03873136 Z' />
                          <path
                            d='M138.223888,44.0240653 C126.066079,44.0240653 116.211855,34.1698413 116.211855,22.0120326 C116.211855,9.85422391 126.066079,-1.81866161e-14 138.223888,-1.81866161e-14 C143.854873,-1.81866161e-14 149.357881,2.17560788 153.453143,6.14289283 C153.709097,6.39884669 153.837074,6.65480056 153.837074,7.03873136 C153.837074,7.42266217 153.709097,7.67861603 153.453143,7.9345699 L136.176257,25.211456 L149.741812,38.777011 C150.25372,39.2889187 150.25372,40.0567803 149.741812,40.568688 C149.613835,40.696665 149.613835,40.696665 149.485858,40.8246419 C146.158458,42.8722729 142.191173,44.0240653 138.223888,44.0240653 Z M138.223888,2.68751561 C127.473825,2.68751561 118.771394,11.3899471 118.899371,22.1400096 C118.899371,32.890072 127.601802,41.5925035 138.351865,41.4645266 C141.295334,41.4645266 144.238804,40.8246419 146.926319,39.4168956 L133.488741,26.1072945 C133.232787,25.8513406 133.10481,25.5953868 133.10481,25.211456 C133.10481,24.8275252 133.232787,24.5715713 133.488741,24.3156174 L150.63765,7.1667083 C147.182273,4.22323882 142.831057,2.68751561 138.223888,2.68751561 L138.223888,2.68751561 Z'
                            fill='#dbd9d9'
                          />
                          <path d='M152.941235,7.42266217 L152.685281,7.1667083 L134.38458,25.211456 L148.845973,39.6728495 C150.25372,38.777011 151.661466,37.7531955 152.813258,36.6014031 C161.003782,28.5388563 161.003782,15.485209 152.941235,7.42266217 L152.941235,7.42266217 Z' />
                          <path
                            d='M148.97395,41.0805958 C148.590019,41.0805958 148.334066,40.9526188 148.078112,40.696665 L133.488741,26.1072945 C133.232787,25.8513406 133.10481,25.5953868 133.10481,25.211456 C133.10481,24.8275252 133.232787,24.5715713 133.488741,24.3156174 L151.661466,6.14289283 C152.173374,5.63098509 152.941235,5.63098509 153.453143,6.14289283 L153.837074,6.39884669 C162.411528,14.9733013 162.411528,28.7948101 153.965051,37.4972416 C152.685281,38.777011 151.277535,39.9288034 149.741812,40.8246419 C149.357881,40.9526188 149.101927,41.0805958 148.97395,41.0805958 L148.97395,41.0805958 Z M136.176257,25.211456 L149.101927,38.1371263 C150.125743,37.4972416 151.149558,36.6014031 151.91742,35.8335415 C159.212105,28.5388563 159.596036,16.6370014 152.557304,8.95838537 L136.176257,25.211456 Z'
                            fill='#dbd9d9'
                          />
                          <path d='M126.194056,39.2889187 C123.12261,36.2174723 118.131509,36.2174723 115.060063,39.2889187 L66.8127587,87.5362228 L74.8753055,95.5987696 L125.938102,50.8068428 C129.265502,47.9913502 129.521456,43.0002498 126.705964,39.6728495 C126.45001,39.5448726 126.322033,39.4168956 126.194056,39.2889187 L126.194056,39.2889187 Z' />
                          <path
                            d='M74.7473286,96.878539 C74.3633978,96.878539 74.1074439,96.750562 73.85149,96.4946082 L65.7889432,88.4320613 C65.2770355,87.9201536 65.2770355,87.152292 65.7889432,86.6403842 L114.036247,38.3930802 C117.619601,34.809726 123.378563,34.809726 126.961918,38.3930802 C130.545272,41.9764343 130.545272,47.7353963 126.961918,51.3187505 C126.833941,51.4467274 126.705964,51.5747044 126.577987,51.7026813 L75.5151902,96.4946082 C75.3872133,96.750562 75.1312594,96.878539 74.7473286,96.878539 L74.7473286,96.878539 Z M68.6044358,87.5362228 L74.8753055,93.8070925 L125.042264,49.7830273 C127.857756,47.4794425 128.11371,43.2562037 125.810125,40.4407111 C123.50654,37.6252186 119.283302,37.3692647 116.467809,39.6728495 C116.339832,39.8008264 116.211855,39.9288034 115.955901,40.0567803 L68.6044358,87.5362228 Z'
                            fill='#dbd9d9'
                          />
                          <path d='M29.8274248,142.438327 C29.3155171,142.694281 29.0595632,143.206189 29.1875401,143.718097 L31.363148,152.932436 C31.8750557,154.212205 31.1071941,155.747929 29.6994479,156.131859 C28.6756324,156.51579 27.52384,156.131859 26.8839553,155.363998 L12.8064926,141.414512 L58.7502118,95.4707927 L74.6193516,95.7267466 L85.3694141,106.476809 C82.8098754,108.652417 67.3246664,123.625718 29.8274248,142.438327 L29.8274248,142.438327 Z' />
                          <path
                            d='M28.8036093,157.411629 C27.7797938,157.411629 26.7559784,157.027698 26.1160937,156.259836 L12.1666079,142.31035 C11.910654,142.054397 11.7826771,141.798443 11.7826771,141.414512 C11.7826771,141.030581 11.910654,140.774627 12.1666079,140.518673 L58.1103272,94.5749541 C58.366281,94.3190003 58.7502118,94.1910233 59.0061657,94.1910233 L74.8753055,94.4469772 C75.2592363,94.4469772 75.5151902,94.5749541 75.7711441,94.830908 L86.5212065,105.58097 C86.7771604,105.836924 86.9051373,106.220855 86.9051373,106.604786 C86.9051373,106.988717 86.7771604,107.244671 86.3932296,107.500624 L85.497391,108.268486 C71.931836,120.170341 53.5031576,132.072196 30.5952864,143.462143 L32.7708943,152.548505 C33.1548251,154.212205 32.3869635,156.003882 30.8512403,156.899721 C30.0833787,157.283652 29.443494,157.411629 28.8036093,157.411629 Z M14.7261466,141.414512 L27.9077708,154.468159 C28.2917016,155.108044 29.0595632,155.363998 29.6994479,154.980067 C30.3393325,154.596136 30.5952864,153.828275 30.2113556,153.18839 L28.0357477,143.974051 C27.7797938,142.822258 28.2917016,141.798443 29.3155171,141.286535 C51.9674343,129.896588 70.2681359,118.12271 83.705714,106.476809 L74.2354208,97.0065159 L59.5180734,96.750562 L14.7261466,141.414512 Z'
                            fill='#dbd9d9'
                          />
                          <path d='M1.9284532,152.420528 L12.9344695,141.414512 L29.3155171,157.795559 L3.20822254,156.003882 C2.05643013,155.875905 1.28856853,154.85209 1.41654546,153.700298 C1.41654546,153.18839 1.5445224,152.676482 1.9284532,152.420528 L1.9284532,152.420528 Z' />
                          <path
                            d='M29.3155171,158.947352 L3.0802456,157.155675 C1.16059159,157.027698 -0.119177745,155.363998 0.00879918845,153.444344 C0.136776122,152.676482 0.39272999,151.908621 1.03261466,151.396713 L12.038631,140.390696 C12.5505387,139.878789 13.3184003,139.878789 13.830308,140.390696 L30.2113556,156.771744 C30.5952864,157.155675 30.7232633,157.667583 30.4673095,158.17949 C30.2113556,158.691398 29.8274248,158.947352 29.3155171,158.947352 L29.3155171,158.947352 Z M12.9344695,143.206189 L2.82429173,153.316367 C2.44036093,153.572321 2.44036093,154.212205 2.82429173,154.468159 C2.95226867,154.596136 3.0802456,154.724113 3.33619947,154.724113 L25.9881168,156.259836 L12.9344695,143.206189 Z'
                            fill='#dbd9d9'
                          />
                          <path
                            d='M54.2710192,101.357732 C53.5031576,101.357732 52.9912498,100.717847 52.9912498,100.077962 C52.9912498,99.6940315 53.1192268,99.4380776 53.3751806,99.1821238 L65.7889432,86.7683612 C66.3008509,86.2564534 67.0687125,86.2564534 67.5806203,86.7683612 L75.6431671,94.830908 C76.0270979,95.2148388 76.1550749,95.5987696 76.0270979,96.1106774 C75.899121,96.4946082 75.5151902,96.878539 75.0032825,97.0065159 L54.526973,101.357732 C54.3989961,101.357732 54.2710192,101.357732 54.2710192,101.357732 L54.2710192,101.357732 Z M66.6847817,89.4558768 L58.2383041,97.9023544 L72.059813,94.9588849 L66.6847817,89.4558768 Z'
                            fill='#dbd9d9'
                          />
                          <path d='M74.6193516,95.7267466 L60.5418889,98.798193 C59.5180734,99.0541468 58.494258,98.4142622 58.2383041,97.3904467 C58.1103272,96.750562 58.2383041,96.1106774 58.7502118,95.5987696 L66.5568048,87.7921767 L74.6193516,95.7267466 Z' />
                          <path
                            d='M60.2859351,100.077962 C58.494258,100.077962 57.0865117,98.670216 57.0865117,96.878539 C57.0865117,95.9827004 57.4704425,95.2148388 57.9823502,94.5749541 L65.7889432,86.7683612 C66.3008509,86.2564534 67.0687125,86.2564534 67.5806203,86.7683612 L75.6431671,94.830908 C76.0270979,95.2148388 76.1550749,95.5987696 76.0270979,96.1106774 C75.899121,96.4946082 75.5151902,96.878539 75.0032825,97.0065159 L60.9258197,100.077962 C60.6698659,100.077962 60.413912,100.077962 60.2859351,100.077962 L60.2859351,100.077962 Z M66.6847817,89.4558768 L59.7740273,96.3666312 C59.5180734,96.6225851 59.5180734,96.878539 59.6460504,97.1344928 C59.7740273,97.3904467 60.0299812,97.5184236 60.413912,97.5184236 L72.1877899,94.9588849 L66.6847817,89.4558768 Z'
                            fill='#dbd9d9'
                          />
                          <path
                            d='M153.069212,19.7084478 C152.813258,18.9405862 151.91742,18.5566554 151.149558,18.8126093 C150.381697,19.0685632 149.997766,19.9644017 150.25372,20.7322633 C150.25372,20.8602402 150.381697,20.9882172 150.381697,21.1161941 C151.149558,22.6519173 150.893604,24.5715713 149.869789,25.9793176 C149.357881,26.6192023 149.485858,27.5150408 149.997766,28.0269485 C150.63765,28.5388563 151.533489,28.4108793 152.045397,27.7709947 C153.965051,25.3394329 154.348981,22.2679865 153.069212,19.7084478 L153.069212,19.7084478 Z'
                            fill='#dbd9d9'
                          />
                        </g>
                      </g>
                    </svg>{" "}
                    <h5>Postman</h5>
                  </div>
                </div>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      fill='#dbd9d9'
                      viewBox='0 0 32 32'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M3.828 32h-1.297c-0.036-0.088-0.067-0.177-0.093-0.26-0.287-0.891-0.792-1.991-0.921-2.876-0.199-1.312 1.036-1.385 1.833-1.952 1.219-0.881 2.177-1.365 3.5-2.163 0.396-0.233 1.577-0.828 1.708-1.104 0.265-0.541-0.459-1.307-0.651-1.733-0.303-0.672-0.464-1.251-0.505-1.912-1.099-0.177-1.937-0.839-2.459-1.579-0.839-1.233-1.421-3.515-0.697-5.249 0.057-0.136 0.339-0.407 0.38-0.62 0.077-0.412-0.141-0.959-0.161-1.396-0.084-2.255 0.38-4.197 1.9-4.88 0.615-2.453 2.819-3.271 4.896-4.489 0.776-0.459 1.636-0.751 2.521-1.079 3.161-1.167 8.036-0.948 10.661 1.047 1.115 0.844 2.901 2.625 3.541 3.917 1.683 3.407 1.557 9.104 0.38 13.249-0.161 0.557-0.385 1.376-0.708 2.043-0.224 0.463-0.921 1.4-0.833 1.812 0.084 0.421 1.584 1.563 1.907 1.86 0.577 0.561 1.683 1.301 1.765 2 0.093 0.744-0.328 1.78-0.547 2.5-0.287 0.963-0.579 1.921-0.869 2.843h-25.251zM18.636 27.281c-0.724-0.401-1.813-0.828-2.756-1.011-1.156-0.219-1.036 1.584-1 2.656 0.041 0.86 0.484 1.756 0.683 2.328 0.099 0.261 0.12 0.548 0.344 0.6 0.396 0.088 1.719-0.439 2.099-0.641 0.797-0.437 1.416-1.125 2.099-1.583 0.021-0.229 0.021-0.453 0.041-0.677-0.4-0.199-0.859-0.344-1.463-0.369 0.416-0.204 1-0.204 1.38-0.444l0.020-0.26c-0.661-0.036-0.916-0.339-1.359-0.577zM28.579 31.193c0.255-0.824 0.473-1.625 0.619-2.333 0.079-0.387 0.287-1.224 0.235-1.568-0.077-0.615-0.911-1.068-1.339-1.448-0.776-0.704-1.265-1.303-2.077-1.964-0.333 0.5-1.043 0.823-1.313 1.219 1.933-0.916 2.281 3.5 1.521 4.923 0.12 0.437 0.521 0.599 0.688 0.979l-0.115 0.224h1.719c0.015 0 0.041 0 0.057 0.016zM19.729 31.177c-0.068-0.099-0.136-0.183-0.199-0.276l-0.4 0.255h0.599zM23.421 31.177c0.011-0.276 0.027-0.537 0.043-0.797-0.709 0.036-1.1-0.64-1.595-0.703-0.432-0.057-0.801 0.479-1.359 0.26-0.131 0.141-0.245 0.303-0.38 0.423 0.203 0.239 0.391 0.5 0.563 0.776h1.088c0.021-0.219 0.183-0.381 0.401-0.381s0.38 0.163 0.38 0.365h0.88zM26.245 31.177c-0.417-0.641-1.261-1.199-2.24-0.74l-0.041 0.719h2.281zM14.901 31.177l-0.141-0.459c-0.301-0.964-0.479-1.683-0.541-2.24-1.219-0.583-2.5-1.161-3.536-1.9-0.204-0.141-1.48-1.803-1.641-1.74-2.323 0.901-4.479 2.479-6.421 3.979 0.344 0.74 0.64 1.521 0.921 2.319h11.339zM25.917 28.36c-0.037-0.683-0.22-2.079-0.636-2.319-0.88-0.52-2.464 1.037-3.125 1.256 0.063 0.197 0.183 0.359 0.204 0.64 0.38-0.099 0.859-0.036 1.197 0.125-0.401 0.036-0.839 0.036-1.099 0.219-0.099 0.255 0.020 0.636-0.043 1.016 0.923 0.265 2 0.405 3.183 0.443 0.219-0.303 0.303-0.86 0.281-1.443zM20.479 27.88c-0.063 0.5 0.057 0.683 0.157 1.256 1.681 0.52 1.38-2.319-0.177-1.276zM11.683 26c-0.6 0.609 1.692 1.443 2.416 1.484 0-0.385 0.219-0.749 0.183-1.025-0.865-0.156-2.005-0.052-2.593-0.464zM19.099 26.287c0 0.057-0.077 0.036-0.088 0.083 0.776 0.604 1.353 0.729 2.405 0.683 0.469-0.349 0.891-0.749 1.391-1.079-1.14 0.1-2.577 0.813-3.703 0.308zM23.661 2.651c-2.14-1.208-5.801-2.12-8.099-0.973-1.844 0.921-4.365 2.453-5.203 4.391 0.801 1.864-0.22 3.577-0.297 5.473-0.027 1.011 0.479 1.896 0.521 2.995-0.272 0.448-1.105 0.505-1.683 0.475-0.193-0.975-0.537-2.068-1.541-2.177-1.417-0.151-2.459 1.021-2.521 2.245-0.079 1.443 1.115 3.823 2.781 3.661 0.651-0.063 0.812-0.719 1.52-0.719 0.381 0.76-0.593 1-0.697 1.536-0.021 0.14 0.079 0.683 0.141 0.943 0.307 1.255 0.989 2.875 1.656 3.839 0.848 1.197 2.515 1.401 4.307 1.521 0.317-0.699 1.5-0.641 2.276-0.459-0.921-0.365-1.781-1.261-2.5-2.041-0.823-0.901-1.64-1.881-1.683-3.043 1.543 2.141 2.797 4 5.6 4.943 2.12 0.699 4.599-0.339 6.219-1.479 0.681-0.479 1.083-1.24 1.563-1.921 1.796-2.579 2.64-6.276 2.457-9.86-0.077-1.479-0.077-2.959-0.577-3.937-0.521-1.041-2.261-1.964-3.303-1.041-0.197-1.021 0.839-1.641 2.063-1.281-0.88-1.141-1.781-2.48-3.021-3.177zM18.109 19.86c0.817 2.061 3.636 1.817 6.011 1.765-0.115 0.26-0.344 0.577-0.625 0.687-0.755 0.308-2.859 0.543-3.916-0.015-0.672-0.365-1.1-1.167-1.469-1.636-0.183-0.229-1.057-0.812-0.016-0.812zM18.328 18.697c1.193 0.62 3.36 0.693 4.975 0.641 0.088 0.359 0.088 0.792 0.093 1.219-2.068 0.109-4.516-0.407-5.063-1.86zM27.229 17.921c-0.631 1.199-1.527 2.527-3.385 2.568-0.032-0.375-0.057-0.979 0-1.203 1.416-0.141 2.301-0.865 3.391-1.36zM26.364 17.031c-1.359 0.881-2.875 1.833-5.099 1.615-0.468-0.416-0.645-1.339-0.187-1.948 0.239 0.423 0.077 1.183 0.76 1.292 1.26 0.224 2.719-0.771 3.64-1.12 0.557-0.948-0.063-1.296-0.561-1.905-1.043-1.245-2.439-2.803-2.401-4.683 0.416-0.297 0.463 0.464 0.52 0.599 0.543 1.281 1.901 2.901 2.901 4 0.24 0.281 0.641 0.521 0.677 0.704 0.125 0.515-0.339 1.135-0.276 1.479zM8.443 16.131c-0.416-0.245-0.521-1.319-1.021-1.344-0.713-0.041-0.583 1.396-0.583 2.235-0.495-0.437-0.579-1.819-0.219-2.516-0.412-0.203-0.593 0.219-0.823 0.375 0.291-2.12 3.12-0.973 2.651 1.281zM6.287 7.989c-0.917 1.011-0.719 2.901-0.615 4.256 1.661-1.048 3.864 0.077 3.844 1.859 0.796-0.021 0.296-0.995 0.156-1.62-0.475-2.041 0.787-4.249 0.052-6.12-1.417 0.109-2.584 0.688-3.437 1.615zM18.448 9.473c0.407 0.751 0.536 1.532 1.12 2.095 0.255 0.255 0.76 0.568 0.515 1.271-0.061 0.161-0.489 0.521-0.733 0.599-0.901 0.26-3.005 0.041-2.297-1.077 0.751 0.015 1.751 0.479 2.308-0.063-0.417-0.699-1.177-2.043-0.896-2.839zM26.708 9.459h0.095c0.437 0.891 0.796 1.833 1.337 2.62-0.359 0.839-2.739 1.588-2.697 0.077 0.521-0.229 1.401-0.047 1.86-0.333-0.256-0.744-0.641-1.344-0.579-2.364zM17.473 7.303c-1.895-0.439-2.843 0.791-3.411 2.072-0.516-0.124-0.313-0.823-0.183-1.177 0.339-0.937 1.708-2.176 2.823-2.009 0.48 0.077 1.136 0.515 0.771 1.115zM12.86 2.125c-2.084 0.583-4.751 2.093-5.605 3.963 0.663-0.093 1.12-0.427 1.776-0.468 0.251-0.021 0.568 0.099 0.855 0.020 0.568-0.14 1.041-1.421 1.469-1.88 0.416-0.457 0.911-0.661 1.255-1.077 0.219-0.12 0.541-0.099 0.563-0.443-0.099-0.1-0.203-0.177-0.312-0.141z' />
                    </svg>

                    <h5>Jenkins </h5>
                  </div>
                </div>
                <div className='hover:bg-gray-700/40 cursor-pointer select-none duration-500 text-gray-500 hover:text-gray-200  rounded-md relative flex   max-w-[125] min-w-[100px] sm:min-w-[125px] text-center justify-center min-h-[125px]'>
                  <div className=' m-auto '>
                    <svg
                      className='m-auto mb-2'
                      width='42px'
                      height='48px'
                      fill='#dbd9d9'
                      viewBox='0 0 24 24'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M11.998 0C5.366 0 0 5.367 0 12a11.992 11.992 0 0 0 12 12c6.633 0 12-5.367 12-12-.001-6.633-5.412-12-12.002-12zM6.37 14.575c.392.523.916.742 1.657.742.35 0 .699-.044 1.004-.175.306-.13.655-.306 1.09-.567l1.223 1.745c-1.003.83-2.138 1.222-3.447 1.222-1.048 0-1.92-.218-2.705-.654a4.393 4.393 0 0 1-1.746-1.92c-.392-.83-.611-1.79-.611-2.925 0-1.09.219-2.094.61-2.923a4.623 4.623 0 0 1 1.748-2.007c.741-.48 1.657-.698 2.661-.698.699 0 1.353.087 1.877.305a5.64 5.64 0 0 1 1.614.96l-1.222 1.658A4.786 4.786 0 0 0 9.12 8.77c-.305-.13-.698-.174-1.048-.174-1.483 0-2.225 1.134-2.225 3.446-.043 1.18.175 2.008.524 2.532H6.37zm12 2.705c-.436 1.353-1.091 2.357-2.008 3.098-.916.743-2.138 1.135-3.665 1.266l-.305-2.05c1.003-.132 1.745-.35 2.225-.7.174-.13.524-.523.524-.523L11.519 6.764h3.01l2.095 8.683 2.226-8.683h2.923L18.37 17.28z' />
                    </svg>

                    <h5>Cypress</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
