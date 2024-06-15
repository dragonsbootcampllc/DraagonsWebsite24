import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import React from "react";
import Footer from "../components/Footer";
const HeaderComp = dynamic(() => import("../components/Navigation/Navbar"), {
  ssr: false,
});
const Head = dynamic(() => import("next/head"), {
  ssr: false,
});
export default function App({ Component, pageProps }: AppProps) {
  //TODO: Change and add (Tracks Page(Instade of home), Blog)
  let nav_links = [
    {
      id: 1,
      name: "Talents",
      link: "/Talents",
    },
    {
      id: 2,
      name: "Team",
      link: "/Team",
    },
    {
      id: 3,
      name: "Gallery",
      link: "/Gallary",
    },
    {
      id: 4,
      name: "DSA",
      link: "/DSA",
    },
    {
      id: 5,
      name: "Bootcamp",
      link: "/Bootcamp",
    },
    {
      id: 6,
      name: "JopReady",
      link: "/JopReady",
    },
  ];

  let Join = [
    {
      id: 1,
      name: "Contact Us ",
      link: "/Contact",
    },
  ];

  return (
    <>
      <div>
        <Head>
          <title>Dragons</title>
          <meta
            property="og:Dragons"
            content="Dragons is a community of talented developers, designers, and product managers who are passionate about building products that people love."
            key="Dragons is a community of talented developers, designers, and product managers who are passionate about building products that people love."
          />

          <link
            rel="shortcut icon"
            href="/Identity/Images/2023/SVG/LLogo.svg"
          />
        </Head>

        <HeaderComp />

        <div className={"w-full"}>
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </>
  );
}
