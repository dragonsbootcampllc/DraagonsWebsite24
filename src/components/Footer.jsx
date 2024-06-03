import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="z-[60] bottom-0 w-full bg-gray-900/40 font-sans font-semibold duration-500 hover:text-red-500 justify-center text-center  py-8 text-gray-300">
      <Link
        style={{ fontFamily: "Poppins-Bold", width: "400" }}
        href="/"
        passHref
        className="text-white duration-500 hover:text-red-500"
      >
        DRAGONS BOOTCAMP LLC © - 2024 All Rights Reserved
      </Link>
    </footer>
  );
}

export default Footer;
