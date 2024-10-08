import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import React from "react";
import { GeistSans } from "geist/font/sans";
import { dark } from '@clerk/themes';
import { ClerkProvider } from "@clerk/nextjs";
import HeaderComp from "@/components/Navbar/Navbar";
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect } from "react";

const Footer = dynamic(() => import("@/components/Footer"));

export default function App({ Component, pageProps, router }: AppProps) {
  const currentRoute = router.asPath;

  // if (typeof window !== "undefined") {
  //   const previousRoute = localStorage.getItem("currentRoute");

  //   if (previousRoute !== currentRoute) {
  //     console.log("scroll to top now....")
  //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //     localStorage.setItem("currentRoute", currentRoute);     }
  // }

  useEffect(() => {
    const bodyname = document.querySelector("body");
    if (bodyname) {
      bodyname.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

  }, [currentRoute]);

  return (
    <div>
      <ClerkProvider appearance={{ baseTheme: dark }}>
        <div className={`${GeistSans.className}`}>
          <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#030014_40%,#63e_100%)]'></div>
          <HeadSEO />
          <HeaderComp />
          <div className={"w-full"}>
            <Component {...pageProps} />
          </div>
        </div>
        <Footer />
      </ClerkProvider>
    </div>
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
