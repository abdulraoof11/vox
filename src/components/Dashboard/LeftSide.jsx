"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icons } from "../icons";
const links = [
  {
    href: "/dashboard",
    text: "Dashboard",
    icon: (
      <Icons.dashboard className="text-[#c5c5c5] dark:group-hover:text-white group-hover:text-white" />
    ),
  },
  {
    href: "/dashboard/Routes/templates",
    text: "Template",
    icon: (
      <Icons.templates className="text-[#c5c5c5] dark:group-hover:text-white group-hover:text-white" />
    ),
  },
  {
    href: "/dashboard/Routes/creations",
    text: "Creations",
    icon: (
      <Icons.creations className="text-[#c5c5c5] dark:group-hover:text-white group-hover:text-white" />
    ),
  },
  {
    href: "/dashboard/Routes/assets",
    text: "Your Assets",
    icon: (
      <Icons.assets className="text-[#c5c5c5] dark:group-hover:text-white group-hover:text-white" />
    ),
  },
  {
    href: "/dashboard/Routes/bots",
    text: "Bots",
    icon: (
      <Icons.bots className="text-[#c5c5c5] dark:group-hover:text-white group-hover:text-white" />
    ),
  },
  {
    href: "/dashboard/Routes/avatar",
    text: "Avatar",
    icon: (
      <Icons.avatar className="text-[#c5c5c5] dark:group-hover:text-white group-hover:text-white" />
    ),
  },
  {
    href: "/dashboard/Routes/anay",
    text: "Analytics",
    icon: (
      <Icons.anay className="text-[#c5c5c5] dark:group-hover:text-white group-hover:text-white" />
    ),
  },
];

const LeftSide = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div
      className={`transition-all h-auto duration-300 ${
        sidebarVisible ? "w-[300px]" : "w-20"
      }`}
    >
      <div className="flex flex-col items-center text-black dark:bg-[#191D24] dark:text-white py-2 h-[80px]  border-b-2 border-r-2  px-6 w-full">
        <div className="flex justify-center  py-3 items-center w-full">
          {sidebarVisible ? <Icons.logo /> : <Icons.logo2 />}
          {sidebarVisible && (
            <button
              onClick={toggleSidebar}
              className="ml-auto bg-[white] dark:bg-[#1e2229] w-10 flex justify-center   items-center h-10 shadow rounded-md"
            >
              <span>
                <Icons.closeButton />
              </span>
            </button>
          )}
        </div>
        {!sidebarVisible && (
          <button
            onClick={toggleSidebar}
            className="text-white bg-[white] w-12 h-14 flex justify-center items-center shadow rounded-md   "
          >
            <span>
              <Icons.openButton />
            </span>
          </button>
        )}
      </div>
      <ul className="text-white bg-white py-5 h-[880px]  border-r-[2px] dark:bg-[#191D24] items-center ">
        {links.map(({ icon, href, text }, index) => (
          <li
            key={index}
            className="group py-6 px-4 hover:bg-blue-500 rounded-md"
          >
            <Link href={href}>
              <div className="flex ml-5 items-center text-black dark:text-white rounded-2xl">
                {icon}
                {sidebarVisible && <span className="ml-2">{text}</span>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSide;
