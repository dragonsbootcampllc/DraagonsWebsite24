"use client"
import React from 'react';
import PropTypes from 'prop-types';
import Link from "next/link";

// NavbarLink component. Each link element in the navbar
const NavbarLink = ({ path, title, closeNavigation, isActive}) => {
  // Tailwind CSS classes for the Link component
  const linkClasses = 'px-4 min-[1096px]:h-full max-[1096px]:py-8 text-white/70 text-lg md:text-sm lg:text-md  xl:text-lg hover:text-white font-semibold after:bg-white  transition-all max-[1130px]:w-full flex items-center justify-center duration-[.45s] max-[991px]:hover:bg-transparent max-[991px]:px-0 relative after:absolute after:h-[2px] after:bg-[#121212] after:w-0 after:left-1/2 after:-translate-x-1/2 after:hover:w-full after:transition-all after:bottom-0';
  
  return (
    <Link href={path} className={`${linkClasses} ${isActive? 'after:w-full text-white' :'after:w-0 text-white/70'}`} onClick={closeNavigation}>
      {title} 
    </Link>
  );
}

// PropTypes for props typechecking
NavbarLink.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  closeNavigation: PropTypes.func.isRequired
}

export default NavbarLink;