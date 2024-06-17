"use client"
import React from 'react';
import Link from "next/link";

interface SubNavbarLinkProps {
  Icon: React.ComponentType;
  title: string;
  path: string;
  color: string;
  clear: () => void;
}

export default function SubNavbarLink_V2({ Icon, title, path, clear, color }: SubNavbarLinkProps) {

  return (
    <Link href={path} className={`group/subLink flex justify-start items-center gap-2 font-semibold p-3 pl-0 text-sm`} onClick={clear}>
      <span className={`rounded-lg p-[4px] text-base transition-all ${color ? `bg-[${color}]` : 'bg-[#112b65]'} group-hover/subLink:bg-[#1c1c36] group-hover/subLink:rotate-6 group-hover/subLink:scale-95 duration-500`}>
        <Icon />
      </span>
      <span className={`text-sm ${color ? `text-[${color}]` : 'text-[#112b65]'} group-hover/subLink:text-[#efefef]`}>{title}</span>

      {/* To generate classes in tailwindCSS */}
      <input type="hidden" className='
      bg-[#8e44ad] text-[#8e44ad]
      
      ' />
    </Link>
  );
}
