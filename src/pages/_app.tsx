import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/HeaderComp/Header";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  //TODO: Change and add (Tracks Page(Instade of home), Blog)
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

        <Header/>

        <div className={"w-full"}>
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </>
  );
}
