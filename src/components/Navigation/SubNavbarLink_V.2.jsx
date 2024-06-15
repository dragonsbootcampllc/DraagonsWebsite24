"use client"
import React from 'react';
import Link from "next/link";
import PropTypes from 'prop-types';

const SubNavbarLink_V2 = ({ Icon, title, path, clear, color }) => {

  return (
    <Link href={path} className={`group flex justify-start items-center gap-2 font-semibold p-3 pl-0 group/subLink ${color ? `text-[${color}]` : 'text-[#112b65]'} hover:text-[#121212] text-sm`} onClick={clear}>
      <span className={`rounded-lg p-[4px] text-base transition-all ${color ? `bg-[${color}]` : 'bg-[#112b65]'} group-hover/subLink:bg-[#121212] group-hover/subLink:rotate-6 group-hover/subLink:scale-95 duration-500 !text-white `}>
        <Icon />
      </span>
      <span className="text-sm group-hover/subLink:animate-pulse">{title}</span>
      
      {/* To generate classes in tailwindCSS */}
      <input type="hidden" className='
      bg-[#02c2ab] text-[#02c2ab]

      ' />
    </Link>
  );

}

SubNavbarLink_V2.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  clear: PropTypes.func.isRequired,
}

export default SubNavbarLink_V2;