// SideBar.jsx
import React from "react";
import { Icons } from "../icons";

const SideBar = () => {
  const links = [
    { text: "Home", url: "#", icon: <Icons.home /> },
    { text: "About", url: "#", icon: <Icons.about /> },
    { text: "Services", url: "#", icon: <Icons.pricing /> },
    { text: "Contact", url: "#", icon: <Icons.contact /> },
  ];

  return (
    <div className="h-[872px] w-[370px] bg-white border-t-2 text-black dark:text-white dark:bg-[#17202F] relative z-50 ">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="py-6 px-4 flex  hover:bg-[#3D89FB]"
        >
          <div className="mr-2">{link.icon}</div>
          <div>{link.text}</div>
        </a>
      ))}
    </div>
  );
};

export default SideBar;
