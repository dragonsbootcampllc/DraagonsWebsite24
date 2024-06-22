import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import React from "react";
const Footer = dynamic(() => import("@/components/Footer"));

import HeaderComp from "@/components/Navbar/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <HeadSEO />

        <HeaderComp />

        <div className={"w-full"}>
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </>
  );
}

const HeadSEO = () => {
  return (
    <Head>
      <title>Dragons</title>
      <meta
        property='og:Dragons'
        content='Dragons is a community of talented developers, designers, and product managers who are passionate about building products that people love.'
        key='description'
      />
      <meta
        property='og:description'
        content='Dragons is a community of talented developers, designers, and product managers who are passionate about building products that people love.'
      />
      <meta
        name='keywords'
        content='Dragons, developers, designers, product managers, community, tech'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='index, follow' />
      <link rel='shortcut icon' href='/Identity/Images/2023/SVG/LLogo.svg' />
    </Head>
  );
};
