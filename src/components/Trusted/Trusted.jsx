import React from "react";
import Image from "next/image";
import styles from "./Trusted.module.css";
import Link from "next/link";

const Trusted = () => {
  const brands = [
    { id: 1, name: "DigitalOcean", img: "/Brands/DigitalOcean.svg" },
    { id: 2, name: "Neferdata", img: "/Brands/neferdata-logo.png" },
    { id: 4, name: "JetBrains", img: "/Brands/JetBreans.svg" },
    { id: 5, name: "Vercel", img: "/Brands/Vercel.svg" },
    { id: 6, name: "WP", img: "/Brands/WP-2.svg" },
    { id: 7, name: "Udacity", img: "/Brands/udacity.svg" },
    { id: 8, name: "Namecheap", img: "/Brands/Namecheap.svg" },
  ];

  return (
    <div className="absolute h-[300px] flex flex-col items-center box-border pt-5 bottom-0 z-30 w-full bg-gray-700/90 md:bg-gray-50/0">
      <Link
        href="/Gallary"
        className="text-xl border-2 px-3 py-1 rounded-full font-semibold !opacity-50 hover:!opacity-100 transition-all"
      >
        Go To Gallary
      </Link>

      <section className={`${styles.sec3} backdrop-blur-sm`}>
        <div className={styles.sec3_main_container_title}>
          Trusted by 30+ Partners
        </div>

        <div className={styles.boujee_text}>
          <p>Thank You For Trusting Us</p>
        </div>

        <div className={styles.sec3_main_container}>
          <div className="flex flex-wrap p-3 gap-7 text-purple-50">
            {brands.map((brand) => (
              <div key={brand.id} className="flex">
                <Image
                  className={styles.svg_property}
                  src={brand.img}
                  alt={brand.name}
                  width={400}
                  height={400}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trusted;
