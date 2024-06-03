import React from "react";
import Image from "next/image";
import styles from "../../styles/founders.module.css";

function Rules(props) {
  return (
    <div className="flex justify-center bg-gray-700/10 p-4 rounded-3xl mx-auto flex-col  place-items-center ">
      <div className="h-[120px] w-[100px] rounded-full z-30   relative ">
        <div
          className={`${"border-4   border-x-black border-gray-200  overflow-hidden grid place-items-center relative rounded-[40px] h-[100px] w-[100px] "}`}
        >
          <div className={"absolute bottom-0"}>
            <div className="relative grid place-content-baseline  z-40 ">
              <div className={"relative flex gap-2  font-bold opacity-30"}>
                {props.id}
              </div>
            </div>
          </div>
          <div
            className={
              "bg-purple-900/40 backdrop-brightness-100    rounded-[40px] w-full h-full z-40   absolute "
            }
          ></div>
          {props.icon}

          <Image
            src="/images/dragskin.jpg"
            className={`${"  duration-1000 rounded-[40px]   opacity-10 backdrop-saturate-150 "}${styles.animate_spin_cus}`}
            alt=""
            fill
          />
          <Image
            src="/images/dragskin.jpg"
            className={`${"  duration-1000 rounded-[40px]  opacity-10 backdrop-saturate-150 "}${styles.animate_spin_cus2}`}
            alt=""
            fill
          />
        </div>
      </div>
      <div className="grid place-items-center" style={{ fontFamily: "interv" }}>
        <h3 className="text-2xl font-bold pl-2 p-1 text-center">
          {props.title}
        </h3>
        <p className=" text-sm text-gray-200/50  max-w-xl text-center  pl-2 p-1 pt-0">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Rules;
