import React, { useRef, useState } from "react";
import FormSideSection from "../components/FormSideSection";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Utility function for email validation
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const [nameRing, setNameRing] = useState(false);
  const [emailRing, setEmailRing] = useState(false);
  const [messageRing, setMessageRing] = useState(false);
  const [btnIsActive, setBtnIsActive] = useState(true);
  const [count, setCount] = useState(0);
  const [formError, setFormError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false); // State to control success message visibility

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(form.current!);
    const email = formData.get('user_email') as string;
    const message = formData.get('message') as string;

    // Validate email and message
    if (!validateEmail(email)) {
      setFormError("Invalid email format.");
      return;
    }
    if (!message.trim()) {
      setFormError("Message cannot be empty.");
      return;
    }

    setBtnIsActive(false);
    setFormError(null);

    const send = (serviceId: string, templateId: string, userId: string) => {
      return emailjs.sendForm(serviceId, templateId, form.current!, userId);
    };

    const services = [
      { serviceId: "service_4irr0gp", templateId: "template_znl9859", userId: "icWEtEN3OYScLYf9J" },
      { serviceId: "service_k32wzko", templateId: "template_t135n4d", userId: "QdrzUrgtoKaIrswMh" },
      { serviceId: "service_4yf9y8k", templateId: "template_h07qubn", userId: "h9TYZnKkm7b5NJjfT" }
    ];

    const attemptSend = (index: number) => {
      if (index >= services.length) {
        setBtnIsActive(true);
        return;
      }

      send(services[index].serviceId, services[index].templateId, services[index].userId)
        .then(() => {
          setShowSuccess(true); // Show success message
          setBtnIsActive(true);
        })
        .catch((error) => {
          console.error(error.text);
          attemptSend(index + 1);
        });
    };

    attemptSend(0);
  };

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
          {!showSuccess ? (
            <div className='grid h-screen max-w-[1600px] m-auto place-items-center my-20 lg:grid-flow-col grid-flow-row'>
              <div className="max-md:hidden">
                <FormSideSection />
              </div>

              <form
                ref={form}
                onSubmit={sendEmail}
                className='flex flex-col my-12 items-center justify-center'
                aria-describedby="formFeedback">
                <h4
                  style={{ fontFamily: "Poppins-Bold", width: "400" }}
                  className='px-1 pb-2 text-gray-400 text-center md:text-xl lg:text-2xl text-lg font-bold'>
                  Let&lsquo;s chat 😊
                </h4>
                <div
                  style={{ fontFamily: "Poppins-Bold", width: "400" }}
                  className='flex flex-col lg:w-[500px] min-w-[300px] text-white rounded-md bg-gray-800/50 p-2 items-center justify-center'>
                  <div className='w-full'>
                    <p className='text-left ml-1 my-1'>Name*</p>
                    <input
                      onClick={() => {
                        setNameRing(!nameRing);
                        setEmailRing(false);
                        setMessageRing(false);
                      }}
                      className={`w-full rounded-md h-12 px-2 sm:px-2 py-1 text-gray-400 bg-gray-700/20 ${nameRing ? "ring-2 duration-100" : ""}`}
                      name='user_name'
                      type='text'
                      placeholder='Full Name'
                      maxLength={20}
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className='w-full'>
                    <p className='text-left ml-1 my-1'>Email* </p>
                    <input
                      onClick={() => {
                        setEmailRing(!emailRing);
                        setNameRing(false);
                        setMessageRing(false);
                      }}
                      className={`w-full rounded-md h-12 px-2 sm:px-2 py-1 text-gray-400 bg-gray-700/20 ${emailRing ? "ring-2 duration-100" : ""}`}
                      name='user_email'
                      type='email'
                      maxLength={100}
                      placeholder='Work Email'
                      required
                      aria-required="true"
                      aria-describedby="emailError"
                    />
                  </div>
                  <div className='w-full overflow-hidden relative'>
                    <p className='my-2 font-semibold'>
                      Please tell us more about yourself:
                    </p>
                    <textarea
                      onClick={() => {
                        setMessageRing(!messageRing);
                        setNameRing(false);
                        setEmailRing(false);
                      }}
                      className={`w-full mt-2 z-50 rounded-md min-h-32 h-32 overflow-hidden duration-300 hover:overflow-y-scroll max-h-64 px-2 py-1 text-gray-400 bg-gray-700/20 ${messageRing ? "ring-2 duration-100" : ""}`}
                      name='message'
                      rows={5}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCount(e.target.value.length)}
                      maxLength={250}
                      placeholder='Message'
                      aria-required="true"
                      aria-describedby="messageCount"
                    />
                    <div className='select-none hover:bg-gray-700 rounded p-1 duration-500 absolute text-gray-300/50 text-xs z-30 bottom-5 right-2'>
                      {count}/250
                    </div>
                  </div>
                  {formError && (
                    <p id="formFeedback" className="text-red-500 text-xs mt-2">
                      {formError}
                    </p>
                  )}
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
            </div>
          ) : (
            <div className='flex max-md:flex-col-reverse items-center justify-around h-screen'>
              <div className="max-md:hidden">
                <FormSideSection />
              </div>
              <div>
                <p className='text-green-500 text-2xl font-bold'>Email sent successfully!</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
