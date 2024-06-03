import { Disclosure } from "@headlessui/react";
import React from "react";

function MyDisclosure() {
  const FQA = [
    {
      question: "What is the difference between the Event and Webinar?",
      answer:
        "The event is a full day event that includes many sessions and activities. The webinar is a single session that lasts for 1-3 hour at max .",
    },
    {
      question: "What are the benefits of the webinars?",
      answer:
        "The webinars are a great opportunity to learn from the best in the field and to get to know the speakers and their experiences, also if you are a Dragons Member you will get a certificate of attendance and the webinar time is customized to fit your level  .",
    },
    {
      question: "How can I get the paid ticket?",
      answer: "You can get the paid ticket from the event page on the website.",
    },
    {
      question: "is it free?",
      answer:
        "Yes, it is free for all Dragons Members, and the paid ticket is for non-members.",
    },
    {
      question: "How can I get the certificate of attendance?",
      answer:
        "You will get the certificate of attendance after the event ends, and you will get it on your email, if you are a Dragons Member.",
    },
    {
      question:
        "What is the reason behind the webinar's limitation, preventing it from being live?",
      answer:
        "The webinar is limited to number of attendees to ensure the quality of the webinar and to give the attendees the chance to ask the speaker questions and to interact with the speaker.",
    },
    {
      question: "What will happen in the webinar?",
      answer:
        "The speaker will give a talk about a specific topic, and then the attendees will have the chance to ask the speaker questions and to interact with the speaker.",
    },
  ];

  return (
    <div className={"w-full grid place-items-center p-2 my-12"}>
      <div
        style={{ fontFamily: "interV" }}
        className="text-5xl  content-center  max-w-4xl text-center md:text-7xl   z-10 flex justify-center m-auto relative  mb-3 text-gray-200  font-semibold	"
      >
        <h1>
          {" "}
          FAQ <span className={" text-yellow-400 "}> </span>
        </h1>
      </div>
      <div style={{ fontFamily: "interV" }} className={"max-w-4xl"}>
        {FQA.map((item, index) => (
          <Disclosure key={index}>
            <Disclosure.Button
              style={{ fontFamily: "interV" }}
              className={
                'bg-[#170d2c] capitalize w-full  py-2 px-4  border-t-[2px] border-t-[solid] border-t-[#8e61be] my-4 text-gray-50  rounded-[1rem] duration-[0.5s] hover:border-t-[#fffbeb] max-md:rounded-md "'
              }
            >
              {item.question}
            </Disclosure.Button>
            <Disclosure.Panel
              style={{ fontFamily: "interV" }}
              className=" text-gray-400  mb-2 text-[.9rem] "
            >
              {item.answer}
            </Disclosure.Panel>
          </Disclosure>
        ))}
      </div>
      <div
        className={
          "absolute grid place-items-center m-2 bottom-0 cursor-pointer w-full"
        }
      >
        <a
          href={
            "https://github.com/DragonsEG/DragonsWebsite_MembersSprints/tree/main/Sprint1/FQA"
          }
          target={"_blank"}
          rel={"noreferrer"}
        >
          <div className={"p-2 bg-gray-900/40 w-44 text-xs rounded-3xl "}>
            {" "}
            Created By @AbanoubEmadFelix
          </div>
        </a>
      </div>
    </div>
  );
}

export default MyDisclosure;
