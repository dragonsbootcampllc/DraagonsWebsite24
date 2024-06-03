import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function TeamsHero(props) {
  const [team, setTeam] = useState("Front");

  //use effect to change the team state every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // front -> back -> Media -> HR -> PR ->front
      switch (team) {
        case "Front":
          setTeam("Back");
          break;
        case "Back":
          setTeam("Media");
          break;
        case "Media":
          setTeam("HR");
          break;
        case "HR":
          setTeam("PR");
          break;
        case "PR":
          setTeam("Front");
          break;
        default:
          setTeam("Front");
          break;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [team]);

  return (
    <div className={"w-full place-items-center flex justify-center mx-auto"}>
      <div className={"w-full place-items-center flex justify-center mx-auto"}>
        <div
          className={
            "test  h-[900px]  relative w-full  flex justify-center p-2 max-w-[1800px]"
          }
        >
          <div
            className={
              "w-full py-5 relative z-0 justify-center items-center flex h-full"
            }
          >
            <div
              className={
                " z-20 relative h-1/2 w-full max-w-4xl  backdrop-blur-lg"
              }
            >
              <div>
                <h1
                  style={{ fontFamily: "interV" }}
                  className="block text-4xl uppercase font-extrabold text-center  md:text-left  text-gray-800 sm:text-7xl lg:leading-tight dark:text-white"
                >
                  Watch Live Updates From Our
                </h1>
                <div
                  className={
                    "flex gap-1 justify-center  md:justify-start  place-items-center pt-2 lg:pt-0 select-none"
                  }
                >
                  <div
                    className={
                      "w-44  flex relative h-[70px] border-2 border-amber-50  rounded-full "
                    }
                  >
                    <div>
                      <h1
                        className={
                          " font-bold uppercase transform skew-y-6 text-2xl text-yellow-400/40 justify-center place-items-center px-4 flex  w-full h-full  "
                        }
                      >
                        {team}
                      </h1>
                    </div>
                    <div
                      className={
                        "bg-gray-400/10 place-items-center flex  h-[56px] absolute right-[7px] top-[5px] w-14 rounded-full p-3 "
                      }
                    >
                      <svg
                        className="w-12  h-12"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="black"
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="text-yellow-400 uppercase block text-4xl  font-extrabold sm:text-5xl lg:text-7xl lg:leading-tight ">
                    {" "}
                    Team{" "}
                  </span>
                </div>

                <div className="mt-7 grid gap-3 place-items-center w-full sm:inline-flex">
                  <Link
                    href="/Join"
                    passHref
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                  >
                    Want to join us?
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
                  </Link>
                  <div className="inline-flex cursor-pointer  max-w-sm justify-center  items-center gap-x-3 md:text-left text-center   text-sm  text-white font-light rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
                    Join us to be a part of one of our teams and Work on your
                    ideas with us and make them come true !
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                "z-10 md:flex  place-items-center absolute   h-full w-full"
              }
            >
              <div
                className={
                  " hidden  md:rotate-0 rotate-90 p-4   gap-4 md:grid place-items-center  max-w-[100px] md:max-w-[600px] h-full  md:w-1/3"
                }
              >
                <div className={"grid    w-full justify-center"}>
                  <div
                    className={
                      "h-32 relative flex place-items-center  rounded-xl   w-32"
                    }
                  >
                    <Image
                      className={" rounded-xl "}
                      src={"/images/Founders/Managers_Images/Mohamed_Ali.jpg"}
                      alt={"test"}
                      height={200}
                      width={200}
                    />
                  </div>
                </div>
                <div className={"grid   w-full justify-self-start"}>
                  <div
                    className={
                      "h-32 relative flex place-items-center  rounded-xl  w-32"
                    }
                  >
                    <Image
                      className={" rounded-xl "}
                      src={"/images/talant/Zyad_Haitham.jpg"}
                      alt={"test"}
                      height={200}
                      width={200}
                    />
                  </div>
                </div>
                <div className={"grid   w-full justify-center"}>
                  <div
                    className={
                      "h-32 relative flex place-items-center  rounded-xl    w-32"
                    }
                  >
                    <Image
                      className={" rounded-xl "}
                      src={"/images/talant/Yuossef_Mohamed.jpg"}
                      alt={"test"}
                      height={200}
                      width={200}
                    />
                  </div>
                </div>
              </div>
              <div
                className={
                  " hidden  md:rotate-0 rotate-90 p-4   gap-4 md:grid place-items-center  max-w-[100px] md:max-w-[600px] h-full  md:w-1/3"
                }
              >
                <div className={"grid h-full  w-full justify-start"}>
                  <div
                    className={
                      "h-32 relative flex place-items-center  rounded-xl   w-32"
                    }
                  >
                    <Image
                      className={" rounded-xl "}
                      src={"/images/talant/Yasmina_Ayman.jpg"}
                      alt={"test"}
                      height={200}
                      width={200}
                    />
                  </div>
                </div>
                <div className={"grid   w-full justify-end"}>
                  <div
                    className={
                      "h-32 relative flex place-items-center  rounded-xl   w-32"
                    }
                  >
                    <Image
                      className={" rounded-xl "}
                      src={"/images/talant/Sara_Hussein.jpeg"}
                      alt={"test"}
                      height={200}
                      width={200}
                    />
                  </div>
                </div>
                <div className={"grid   h-full relative w-full justify-end"}>
                  <div
                    className={
                      "h-32 absolute bottom-3 right-3 flex place-items-center  rounded-xl    w-32"
                    }
                  >
                    <Image
                      className={" rounded-xl "}
                      src={"/images/talant/Omar_Nasser_Gaber.jpg"}
                      alt={"test"}
                      height={200}
                      width={200}
                    />
                  </div>
                </div>
              </div>
              <div
                className={
                  " hidden   md:rotate-0 rotate-90 p-4   gap-4 md:grid place-items-center  max-w-[100px] md:max-w-[600px] h-full  md:w-1/3"
                }
              >
                <div className={"grid  w-full justify-center"}>
                  <div
                    className={
                      "h-32 relative flex place-items-center  rounded-xl   w-32"
                    }
                  >
                    <Image
                      className={" rounded-xl "}
                      src={"/images/talant/Mirna_samer_wahba.jpg"}
                      alt={"test"}
                      height={200}
                      width={200}
                    />
                  </div>
                </div>
                <div className={"grid    w-full justify-end"}>
                  <div
                    className={
                      "h-32 relative flex place-items-center  rounded-xl   w-32"
                    }
                  >
                    <Image
                      className={" rounded-xl "}
                      src={"/images/talant/karem_Elokary.jpeg"}
                      alt={"test"}
                      height={200}
                      width={200}
                    />
                  </div>
                </div>
                <div className={"grid   bg w-full justify-center"}>
                  <div
                    className={
                      "h-32 relative flex place-items-center  rounded-xl    w-32"
                    }
                  >
                    <Image
                      className={" rounded-xl "}
                      src={"/images/talant/Fatma_Farouk.jpg"}
                      alt={"test"}
                      height={200}
                      width={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={" md:hidden w-full top-0 z-30 absolute"}>
            <div
              className={
                "     p-4 w-full gap-4  flex justify-center mx-auto  h-full "
              }
            >
              <div className={"grid  w-full  justify-center"}>
                <div
                  className={
                    "h-32 relative flex place-items-center  translate-y-1/2 rounded-xl   w-24"
                  }
                >
                  <Image
                    className={" rounded-xl "}
                    src={"/images/talant/Mirna_samer_wahba.jpg"}
                    alt={"test"}
                    height={200}
                    width={200}
                  />
                </div>
              </div>
              <div className={"grid   bg w-full justify-center"}>
                <div
                  className={
                    "h-32 relative flex place-items-center  rounded-xl translate-y-1/3  opacity-30   w-32"
                  }
                >
                  <Image
                    className={" rounded-xl "}
                    src={"/images/talant/Fatma_Farouk.jpg"}
                    alt={"test"}
                    height={200}
                    width={200}
                  />
                </div>
              </div>
              <div className={"grid w-full justify-end"}>
                <div
                  className={
                    "h-32 relative w-full flex place-items-center translate-y-1/4  rounded-xl "
                  }
                >
                  <Image
                    className={" rounded-xl "}
                    src={"/images/talant/karem_Elokary.jpeg"}
                    alt={"test"}
                    height={200}
                    width={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamsHero;
