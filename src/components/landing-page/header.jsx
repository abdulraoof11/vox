"use client";
import React, { useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import Image from "next/image";
import { Icons } from "../icons";
import SideBar from "./SideBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full z-50 top-0 bg-white text-black  dark:text-white dark:bg-[#17202F] border-b-2 dark:border-b-1 h-[100px] flex items-center ">
      <div className="container mx-auto flex justify-between items-center">
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <Icons.menuLeft /> : <Icons.menuRight />}
        </button>
        <nav className="flex">
          <ul
            className={`lg:flex  items-center gap-12  ${
              isOpen ? "hidden" : "hidden"
            }`}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="flex-shrink-7 flex justify-center relative -left-12 lg:justify-start items-center md:justify-between">
          <Image src="/landing/logo.svg" alt="Logo" width={42} height={26} />
        </div>

        <div className="text-lg font-bold flex justify-center items-center ">
          <ModeToggle className="px-6" />
          <Button
            className={`lg:flex items-center bg-[#3d89fb] hover:bg-[#3d89fb] text-white ml-9 w-[150px] h-[52px] space-x-4 ${
              isOpen ? "hidden" : "hidden"
            }`}
          >
            Get Started
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute left-0 top-full bg-white shadow-lg ">
          <SideBar />
        </div>
      )}
    </header>
  );
};

export default Header;
