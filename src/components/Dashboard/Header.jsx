import React from "react";
import { FaSearch } from "react-icons/fa";
import { ModeToggle } from "../mode-toggle";
import { Icons } from "../icons";
import { Avatar, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Header = () => {
  const links = [
    {
      icon: <Icons.crown />,
    },
    {
      icon: <ModeToggle />,
    },
    {
      icon: <Icons.notification />,
    },
    {
      icon: <Icons.setting />,
    },
    {
      icon: (
        <Image
          src="/pexels.jpeg"
          width={20}
          height={20}
          className=" w-10 h-10 rounded-full"
          alt="avatar"
        />
      ),
    },
  ];

  return (
    <div className="dark:bg-[#14181f] bg-[white] flex justify-between py-4 px-8 h-20 items-center border-b-2">
      <div className="relative">
        <input
          type="text"
          placeholder="| Search"
          className="pl-8 pr-4 py-2 w-64 bg-white dark:bg-[#14181f] text-black border-[2px]  rounded-lg"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-500" />
        </div>
      </div>
      <div className="text-black dark:text-white">
        <ul className="flex">
          {links.map(({ icon }, index) => (
            <li key={index} className="px-4 flex justify-center items-center">
              <div
                className={cn("rounded-md p-3", {
                  "bg-[#F6F9FE] dark:bg-[#1E2229]": index !== 4,
                  "bg-none": index === 4,
                })}
              >
                {icon}
              </div>
            </li>
          ))}
          <li className="px-4 mt-2"></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
