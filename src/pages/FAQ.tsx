import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React from "react";
import { motion } from "framer-motion";

function MyDisclosure() {
  const FQA = [
    {
      question: "What is the difference between the Event and Webinar?",
      answer:
        "The event is a full day event that includes many sessions and activities. The webinar is a single session that lasts for 1-3 hour at max .",
    },
    {
      question: "When was the company legally founded?",
      answer: "Dragons BootCamp LLC was legally founded on December 21, 2023.",
    },
    {
      question: "What are the company’s objectives and priorities?",
      answer:
        "Our primary objectives are to train and prepare young professionals in technical fields, ensuring they are equipped with modern tools and methodologies to excel in the job market. Additionally, we aim to expand our client base, build trust, and provide substantial benefits to our students through partnerships with foreign companies.",
    },
    {
      question:
        "What benefit does Dragons BootCamp look for when partnering with other companies?",
      answer:
        "The benefits vary depending on the nature of the partner company. We seek to expand our client base, build trust, and maximize the benefits for our students by providing them with training, materials, opportunities for internships, and real-world projects.",
    },
    {
      question: "What is the structure of the BootCamp?",
      answer: "",
    },
    {
      question:
        "What are the industry sectors for the companies that can partner with Dragons and be a good fit?",
      answer:
        "Companies in any sector that requires software development, training materials, internship opportunities, or mentorship programs can partner with Dragons BootCamp.",
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
  <div className="grid place-items-center">
      <div className='w-full grid gap-5 max-w-[1400px] lg:grid-cols-2 place-items-center p-2 my-12'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-5xl md:text-7xl relative  h-full text-center max-w-4xl z-10 flex justify-center m-auto  mb-3 text-gray-200 font-semibold'>
        <h1 className=' sticky top-0 text-center mt-5  capitalize '>
          Frequently <span className='text-purple-900'>Asked</span> Questions
        </h1>
      </motion.div>
      <div className='max-w-4xl w-full'>
        {FQA.map((item, index) => (
          <Disclosure key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-purple-800/20 w-full my-2 p-2 rounded-3xl'>
              <DisclosureButton className='bg-purple-800/20 text-left text-md sm:text-xl px-3 md:px-8 capitalize w-full py-2 text-gray-100 rounded-[1rem] duration-[0.5s] hover:border-t-white hover:bg-purple-800 max-md:rounded-md transition-colors'>
                {item.question}
              </DisclosureButton>
              <DisclosurePanel className='text-gray-400 px-3 md:px-8 text-sm sm:text-lg text-left py-2 transition-opacity'>
                {item.answer}
              </DisclosurePanel>
            </motion.div>
          </Disclosure>
        ))}
      </div>
    </div>
    </div>
  );
}

export default MyDisclosure;
