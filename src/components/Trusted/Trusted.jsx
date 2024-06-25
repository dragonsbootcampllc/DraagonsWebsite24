import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Trusted.module.css";
import Link from "next/link";
import { SiOreilly } from "react-icons/si";
import { FaDigitalOcean } from "react-icons/fa";
import { SiJetbrains } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiUdacity } from "react-icons/si";
import { SiNamecheap } from "react-icons/si";
import { SiWpengine } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";

const brands = [
  { id: 1, name: "DigitalOcean", img: "/Brands/DigitalOcean.svg" },
  { id: 2, name: "Neferdata", img: "/Brands/neferdata-logo.png" },
  { id: 4, name: "JetBrains", img: "/Brands/JetBreans.svg" },
  { id: 5, name: "Vercel", img: "/Brands/Vercel.svg" },
  { id: 6, name: "WP", img: "/Brands/WP-2.svg" },
  { id: 7, name: "Udacity", img: "/Brands/udacity.svg" },
  { id: 8, name: "Namecheap", img: "/Brands/Namecheap.svg" },
];

const renderLogos = (brands) => {
  return brands.map((brand) => (
    <li key={brand.id}>{renderIcon(brand.name)}</li>
  ));
};

const renderIcon = (name) => {
  switch (name) {
    case "DigitalOcean":
      return <FaDigitalOcean className="h-12 w-12" />;
    case "Neferdata":
      return <SiOreilly className="h-12 w-12" />;
    case "JetBrains":
      return <SiJetbrains className="h-12 w-12" />;
    case "Vercel":
      return <IoLogoVercel className="h-12 w-12" />;
    case "WP":
      return <SiWpengine className="h-12 w-12" />;
    case "Udacity":
      return <SiUdacity className="h-12 w-12" />;
    case "Namecheap":
      return <SiNamecheap className="h-12 w-12" />;
    case "Microsoft":
      return <FaMicrosoft className="h-12 w-12" />;
    case "Amazon":
      return <FaAmazon className="h-12 w-12" />;
    default:
      return null;
  }
};

export default function Trusted() {
  const logosRef = useRef(null);
  const [loadedBrands, setLoadedBrands] = useState(brands.slice(0, 10));

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        // Load more brands
        const nextBrands = brands.slice(0, loadedBrands.length + 10);
        setLoadedBrands(nextBrands);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadedBrands]);

  return (
    <>
      <div className="relative font-inter  grid place-items-center antialiased">
        <div className={styles.sec3_main_container_title}>
          Trusted by 70+ Partners
        </div>

        <div className={styles.boujee_text}>
          <p>Thank You For Trusting Us</p>
        </div>
        <main className="relative flex flex-col justify-center max-w-[1400px] overflow-hidden">
          <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
            <div className="text-center">
              {/* Logo Carousel animation */}
              <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul
                  ref={logosRef}
                  className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none "
                >
                  {renderLogos(loadedBrands)}
                </ul>
              </div>
              {/* End: Logo Carousel animation */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
