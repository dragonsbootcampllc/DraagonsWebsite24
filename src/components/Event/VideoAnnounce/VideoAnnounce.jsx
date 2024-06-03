"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../../../styles/Event.module.css";
import ReactPlayer from "react-player/lazy";
import Link from "next/link";

function VideoAnnounce(props) {
  const [palyer, setPlayer] = useState(false);

  return (
    <div className={"aspect-video max-w-[1400px] w-full p-3"}>
      <div className={styles.section_div}>
        <div className={styles.video_section}>
          <div className={styles.container}>
            <div className={styles.inner_container}>
              <div className={styles.position_elements}>
                <div className={styles.chapter}>{props.smallHeadText}</div>
                <div className={` ${"md:text-7xl text-4xl pb-2"} `}>
                  {props.headText}
                </div>
                <div className={`${"pt-2 "} ${styles.p}`}>
                  <p>{props.pText}</p>
                </div>
                <div className={styles.button_announce_container}>
                  <button className={styles.btn_style_priority}>
                    <div className={styles.container}>
                      <h1 className={styles.btn_style_priority_h1}>
                        See Recipes
                      </h1>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="white"
                            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.player_btn_container}>
              <div className={styles.player_btn}></div>
              <div className={styles.player_btn_img}>
                <a
                  href={"https://dragons.divzoon.com/WebinarPage"}
                  target={"_blank"}
                  rel="noreferrer"
                  className={"grid place-items-center pt-3"}
                >
                  <Image
                    className={styles.player_btn_img_src}
                    src="/EVENT/main/noun-play-1192916.svg"
                    width={50}
                    height={50}
                    alt="arrow"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={"grid place-items-center bg-gray-400 "} />
          <div
            className={
              "grid place-items-center h-full w-full relative bg-red-400"
            }
          >
            <ReactPlayer
              controls={false}
              playing={true}
              width={"100%"}
              height={"170%"}
              muted={true}
              url={"https://www.youtube.com/watch?v=" + props.videoURL}
            />
          </div>

          <div className={styles.announce}>
            <div
              className={
                " w-2/4 flex gap-1 px-4 lg:w-3/4 absolute left-0 h-full"
              }
            >
              <Image
                src="/Identity/Images/2023/SVG/LLogo.svg"
                className={"m-1 p-1"}
                width={35}
                height={35}
                alt="arrow"
              />
              <span
                className={"h-full text-gray-300/40  pt-1 place-items-center"}
              >
                x
              </span>
              <Image
                src="/Brands/divzoon2023.png"
                className={"m-1 p-2"}
                width={80}
                height={30}
                alt="arrow"
              />
              <span
                className={
                  "h-full md:grid hidden text-gray-300/40  pt-1 place-items-center"
                }
              >
                |
              </span>
              <h1
                style={{ fontFamily: "interV" }}
                className={
                  "md:grid place-items-center text-blue-50 font-extrabold hidden lg:text-xl md:text-lg pt-1 pl-2"
                }
              >
                {props.titleadd}
              </h1>
            </div>
            <Link
              href={props.announceURl}
              passHref
              className={styles.inner_action}
            >
              <strong>
                <span className={styles.announcement_hide_on_mobol}>
                  View All{" "}
                </span>
                Announcements
              </strong>
              <span>
                <Image
                  className={styles.svg_external_arrow_videoSection}
                  src="/EVENT/main/upright_arrow.png"
                  width={20}
                  height={20}
                  alt="arrow"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoAnnounce;
