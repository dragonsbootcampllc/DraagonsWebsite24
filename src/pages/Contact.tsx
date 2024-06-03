import React, { useRef, useState } from "react";
import FormSideSection from "../components/FormSideSection";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
function Contact() {
  const router = useRouter();

  const [nameRing, setnameRing] = useState(false);
  const [emailRing, setemailRing] = useState(false);
  const [messageRing, setmessageRing] = useState(false);
  const [ID, setID] = useState(false);
  const [btnIsActive, setbtnIsActive] = useState(true);
  const [count, setCount] = useState(0);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setbtnIsActive(false);
    emailjs
      .sendForm(
        "service_4irr0gp",
        "template_znl9859",
        form.current!,
        "icWEtEN3OYScLYf9J"
      )

      .then(
        (result) => {
          console.log(result.text);
          router.push("/");
        },
        (error) => {
          emailjs
            .sendForm(
              "service_k32wzko",
              "template_t135n4d",
              form.current!,
              "QdrzUrgtoKaIrswMh"
            )
            .then(
              (result) => {
                console.log(result.text);
                router.push("/");
              },
              (error) => {
                emailjs
                  .sendForm(
                    "service_4yf9y8k",
                    "template_h07qubn",
                    form.current!,
                    "h9TYZnKkm7b5NJjfT"
                  )
                  .then(
                    (result) => {
                      console.log(result.text);
                      router.push("/");
                    },
                    (error) => {
                      console.log(error.text);
                    }
                  );

                console.log(error.text);
              }
            );
          console.log(error.text);
        }
      );
  };

  const form = useRef<HTMLFormElement | null>(null);

  return (
    <div>
      <div className={`${""}${styles.container}`}>
        <motion.div
          initial='hidden'
          animate='visible'
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
          }}>
          <div className='grid pt-20  h-screen max-w-[1600px] m-auto  place-items-center mb-20 lg:grid-flow-col grid-flow-row'>
            <div>
              <FormSideSection />
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className='flex  flex-col my-12  items-center justify-center'>
              <h4
                style={{ fontFamily: "Poppins-Bold", width: "400" }}
                className='px-1 pb-2 text-gray-400  text-center  md:text-xl lg:text-2xl text-lg font-bold'>
                Let&lsquo;s chat 😊
              </h4>
              <div
                style={{ fontFamily: "Poppins-Bold", width: "400" }}
                className='flex flex-col lg:w-[500px] min-w-[300px] text-white rounded-md bg-gray-800/50 p-2 items-center justify-center'>
                <div className='w-full'>
                  <p className='text-left ml-1 my-1'>Name*</p>
                  <input
                    onClick={() => {
                      setnameRing(!nameRing);
                      setemailRing(false);
                      setmessageRing(false);
                      setID(false);
                    }}
                    className={` w-full  rounded-md h-12 px-2 sm:px-2 py-1 text-gray-400 bg-gray-700/20
                              ${nameRing ? "ring-2 duration-100" : ""}`}
                    
                    name='user_name'
                    type='text'
                    placeholder='Full Name'
                    maxLength={20}
                    required
                  />
                </div>
                <div className='w-full '>
                  <p className='text-left ml-1 my-1'>Email* </p>

                  <input
                    onClick={() => {
                      setemailRing(!emailRing);
                      setnameRing(false);
                      setmessageRing(false);
                      setID(false);
                    }}
                    className={`
              w-full  rounded-md h-12 px-2 sm:px-2 py-1 text-gray-400 bg-gray-700/20                          ${
                emailRing ? "ring-2 duration-100" : ""
              }`}
                    name='user_email'

                    type='email'
                    maxLength={100}
                    placeholder='Work Email'
                    required
                  />
                </div>

                <div className='w-full overflow-hidden relative'>
                  <p className='my-2 font-semibold'>
                    Please tell us more about yourself :
                  </p>{" "}
                  <textarea
                    onClick={() => {
                      setmessageRing(!messageRing);
                      setnameRing(false);
                      setemailRing(false);
                    }}
                    className={`
                          w-full mt-2 z-50 rounded-md min-h-32 h-32  overflow-hidden duration-300 hover:overflow-y-scroll max-h-64 px-2 py-1 text-gray-400 bg-gray-700/20
                          ${messageRing ? "ring-2 duration-100" : ""}`}
                    name='message'
                    rows={5}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setCount(e.target.value.length)
                    }
                    maxLength={150}
                    placeholder='Message'
                  />
                  <div className='select-none hover:bg-gray-700 rounded p-1 duration-500 absolute text-gray-300/50 text-xs z-30 bottom-5 right-2'>
                    {count}/150
                  </div>
                </div>
                {btnIsActive ? (
                  <input
                    type='submit'
                    value='Send'
                    className='w-full max-w-[200px] m-2 duration-300 select-none bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-400/90 focus:outline-none focus:shadow-outline'
                  />
                ) : (
                  <input
                    type='submit'
                    value='Sending...'
                    className='w-full max-w-[200px] m-2 duration-300 select-none bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-400/90 focus:outline-none focus:shadow-outline'
                    disabled
                  />
                )}
              </div>
            </form>
          </div>{" "}
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
