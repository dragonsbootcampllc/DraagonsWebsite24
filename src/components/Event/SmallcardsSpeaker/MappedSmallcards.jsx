import React from "react";
import SmallCards from "./SmallCards";
import speakers from "../JSON_Event/SpeakersData.json";

function MappedSmallcards() {
  return (
    <div className={"my-20"}>
      <div
        style={{ fontFamily: "interV" }}
        className="text-5xl  content-center  max-w-4xl text-center md:text-7xl   z-10 flex justify-center m-auto relative  mb-3 text-gray-200  font-semibold	"
      >
        <h1>
          {" "}
          Tech Odyssey <span className={" text-yellow-400 "}> Webinars</span>
        </h1>
      </div>

      <h2
        style={{ fontFamily: "interV" }}
        className="text-center text-white/60 font-bold mt-16 mb-5 text-2xl tracking-wider"
      >
        understand the topic from the
        <span className={"text-yellow-400/60"}> experts</span>
      </h2>
      <div
        className={
          "flex relative py-12 gap-2 w-full flex-wrap justify-center m-0"
        }
      >
        {speakers?.map((speaker) => (
          <SmallCards
            key={speaker.id}
            tags={speaker.tags}
            name={speaker.name}
            langauge={speaker.country}
            talk={speaker.talk}
            image={speaker.image}
            social={speaker.social}
            description={speaker.description}
            date={speaker.date}
            ticket={speaker.ticket}
            Parts_of_the_talk={speaker.Parts_of_the_talk}
            hour={speaker.hour}
          />
        ))}
        <div
          className={
            "absolute grid place-items-center m-2 bottom-0 cursor-pointer w-full"
          }
        >
          <a
            href={
              "https://github.com/DragonsEG/DragonsWebsite_MembersSprints/tree/main/Sprint1/big%20card"
            }
            target={"_blank"}
            rel={"noreferrer"}
          >
            <div className={"p-2 bg-gray-900/40 w-44 text-xs rounded-3xl "}>
              {" "}
              Created By @AhmedHussein
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MappedSmallcards;
