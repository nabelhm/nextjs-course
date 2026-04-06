import Link from "next/link";
import React from "react";

interface Props {
  icon: React.ReactNode;
  path: string;
  title: string;
}

export const SidebarItem = ({ icon, path, title }: Props) => {
  {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */ }
  return (
    <>
      <li>
        <Link
          href={path}
          className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
          {icon}
          <span className="-mr-1 font-medium">{title}</span>
        </Link>
      </li>
    </>
  )
}
