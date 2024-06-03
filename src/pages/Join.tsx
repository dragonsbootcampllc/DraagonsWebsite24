import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import Form from "../components/Form";
import FormSideSection from "../components/FormSideSection";
import FoundersCard from "../components/FoundersCard";
import Rules from "../components/Rules/Rules";
import RulesList from "../components/Rules/RulesList";

function Join() {
  return (
    <div className={`${" min-h-screen"}${styles.container}`}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 1,
            opacity: 0.0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.1,
            },
          },
        }}
      >
        <div className="grid pt-40 mb-28 place-items-center   ">
          <div
            style={{ fontFamily: "interV" }}
            className="text-6xl  content-center  max-w-4xl text-center md:text-7xl   z-10 flex justify-center m-auto relative  mb-3 text-gray-200  font-semibold	"
          >
            <h1>
              Join Dragons
              <span className={" text-yellow-400 uppercase "}> now</span>
              <span className={"  "}> and</span>
              <span className={"  "}> Build</span>
              <span className={"  "}> your career !</span>
            </h1>
          </div>
          <p
            style={{ fontFamily: "interV" }}
            className="text-lg flex pt-6 relative z-10 text-purple-300/50 justify-center text-center m-auto max-w-4xl"
          >
            By joining Dragons you will be able to work with a team and build
            your career in the field you love, so what are you waiting for ?
          </p>
        </div>
        <div className={"pt-14 bg-black/40"}>
          <div
            className={
              "w-full justify-center flex flex-col mt-12  relative mx-auto h-full"
            }
          >
            <h1 className="text-3xl  content-center  max-w-4xl uppercase text-center md:text-3xl pb-14   z-10 flex justify-center m-auto relative  mb-3 text-gray-400  font-semibold	">
              Important things to know before joining Dragons
            </h1>
            <div
              className={
                "flex flex-wrap w-full px-2 place-items-center m-auto mb-28 gap-4 max-w-[1400px]"
              }
            >
              {RulesList.map((rule) => {
                return (
                  <Rules
                    key={rule.id}
                    title={rule.title}
                    description={rule.description}
                    id={rule.id}
                    icon={rule.icon}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid mt-14 place-items-center   ">
          <div
            style={{ fontFamily: "interV" }}
            className="text-5xl  content-center  max-w-4xl uppercase text-center md:text-5xl pb-14 md:pb-0  z-10 flex justify-center m-auto relative  mb-3 md:mb-0 text-gray-400  font-semibold	"
          >
            <h1>
              Fill the form below to join{" "}
              <span className={" text-yellow-400 uppercase "}> Dragons</span>
            </h1>
          </div>
        </div>
        <div className="grid min-h-screen place-items-center mb-20 lg:grid-flow-col grid-flow-row">
          <div className="">
            <FormSideSection />
          </div>
          <Form />
        </div>{" "}
      </motion.div>
    </div>
  );
}

export default Join;
