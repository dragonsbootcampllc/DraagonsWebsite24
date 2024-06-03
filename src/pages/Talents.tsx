import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
import axios from "axios";

const MapedComponents = dynamic(
  () => import("../components/TalantCard/MapedComponents"),
);
interface Talent {
  // Define the properties of a talent object
  // Add appropriate types to each property
}

interface TalentsProps {
  // Define the props for the Talents component
  // Add appropriate types to each prop
}

function Talents(props: TalentsProps) {
  const [EmailState, setEmailState] = useState<boolean>(true);
  const [Email, setEmail] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<Talent[]>([]);

  let i: number,
    j: number = 0;

  const formref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const fetchData = async () => {
    // on click fetch another 10 objects from the json file and add them to the data array
    const res = await axios.get(`/api/staticdata?page=${page}`);
    const newData: Talent[] = res.data;
    setData([...data, ...newData]);
    setPage(page + 1);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4irr0gp",
        "template_znl9859",
        formref.current!,
        "icWEtEN3OYScLYf9J",
      )
      .then(
        (result) => {
          console.log(result.text);
          router.push("/Done");
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const EmailIsValid = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className={"w-full min-h-[900px] "}>
      <div>
        <div className="w-full min-h-[900px]  pt-20">
          <div className="bg-slate-900/10">
            <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
              <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                <div className="flex justify-center">
                  <div className="group cursor-not-allowed select-none inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md">
                    {/*TODO
                                            -make it watch the video with video in the background
                                        */}
                    <p className="mr-2  inline-block text-white text-sm">
                      Watch the video
                    </p>
                    <span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                      <svg
                        className="w-2.5 h-2.5"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="max-w-3xl text-center mx-auto">
                  <h1
                    style={{ fontFamily: "interV" }}
                    className="block uppercase font-bold text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                  >
                    Now it&#39;s easier than ever to Spot a Talent
                  </h1>
                </div>

                <div className="max-w-3xl text-center mx-auto">
                  <p className="text-lg text-gray-400">
                    We help you to find the best talents that can make a
                    difference in your team
                  </p>
                </div>
                <div className={"w-full  flex justify-center m-auto"}>
                  <div
                    className={"w-full flex justify-center relative max-w-md "}
                  >
                    <form
                      ref={formref}
                      onSubmit={sendEmail}
                      className="flex w-full flex-col   items-center justify-center"
                    >
                      <div
                        className={
                          " max-w-4xl w-full flex text-left relative right-2"
                        }
                      >
                        <input
                          placeholder={"Your Work Email"}
                          type="email"
                          name="email"
                          id="email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          value={Email}
                          className={
                            "py-4 relative w-full inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md "
                          }
                        />

                        <input
                          value={
                            EmailIsValid(Email) ? "Send" : "Enter a valid email"
                          }
                          className="inline-flex w-36  cursor-pointer absolute select-none top-[5px] right-[5px]  justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                          disabled={EmailIsValid(Email) ? false : true}
                          type="submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ fontFamily: "interV" }}
            className="text-4xl  content-center   max-w-4xl text-center md:text-5xl   z-10 flex justify-center m-auto relative  mb-3 text-gray-200  font-semibold	"
          >
            <h1 className="text-center mt-5  capitalize">
              Build your dream team now !
            </h1>
          </div>
        </div>
      </div>

      <div
        className={
          "w-full justify-center flex flex-col -mt-12  relative mx-auto h-full"
        }
      >
        <MapedComponents data={data} />
      </div>
    </div>
  );
}

export default Talents;
