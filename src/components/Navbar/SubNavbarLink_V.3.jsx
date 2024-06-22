"use client"
import React from 'react';
import Link from "next/link";
import PropTypes from 'prop-types';

const SubNavbarLink_V3 = ({ Icon, title, path, clear }) => {

  return (
    <Link href={path} className={`active:scale-90 group flex justify-between items-center gap-2 rounded-lg font-semibold p-3 transition-all group/subLink bg-[#8e44ad]/50 hover:bg-[#8e44ad] w-full`} onClick={clear}>
      <span className="text-lg group-hover/subLink:animate-pulse text-white">{title}</span>
      <span className={`rounded-lg text-lg transition-all group-hover/subLink:-rotate-12  group-hover/subLink:scale-105 duration-500 !text-white `}>
        <Icon />
      </span>
    </Link>
  );

}

SubNavbarLink_V3.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  clear: PropTypes.func.isRequired,
}

export default SubNavbarLink_V3;