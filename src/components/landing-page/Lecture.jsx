"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import cn from "classnames";
import Image from "next/image";
import { Icons } from "../icons";

const Lecture = () => {
  const [activeButton, setActiveButton] = useState("All");
  const ListItem = ["All", "Doctor", "BSCS", "Machine Learning", "Ai"];
  const Card = [
    {
      img: "/men.jpeg",
      text: "Exploring Quantum Physics: From Theory to Applications",
      category: "Doctor",
      time: "3h 20m",
    },
    {
      img: "/men.jpeg",
      text: "Exploring Quantum Physics: From Theory to Applications",
      category: "Doctor",
      time: "3h 20m",
    },
    {
      img: "/men.jpeg",
      text: "Exploring Quantum Physics: From Theory to Applications",
      category: "Doctor",
      time: "3h 20m",
    },
    {
      img: "/men.jpeg",
      text: "Exploring Quantum Physics: From Theory to Applications",
      category: "Doctor",
      time: "3h 20m",
    },
    {
      img: "/men.jpeg",
      text: "Exploring Quantum Physics: From Theory to Applications",
      category: "Doctor",
      time: "3h 20m",
    },
    {
      img: "/men.jpeg",
      text: "Exploring Quantum Physics: From Theory to Applications",
      category: "Doctor",
      time: "3h 20m",
    },
    {
      img: "/men.jpeg",
      text: "Exploring Quantum Physics: From Theory to Applications",
      category: "Doctor",
      time: "3h 20m",
    },
    {
      img: "/men.jpeg",
      text: "Exploring Quantum Physics: From Theory to Applications",
      category: "Doctor",
      time: "3h 20m",
    },
  ];

  const handleButtonClick = (item) => {
    setActiveButton(item);
  };

  return (
    <div className="bg-white dark:bg-[#02061700]">
      <div className="container pt-[60px] 2xl:pb-20 pb-10 md:pb-[80px]">
        <h1 className="text-2xl font-bold sm:text-[30px] md:text-[40px] text-charcoal-cloudburst dark:text-white text-center">
          <span className="text-[#F4A627]">Our Special</span> Lecture’s for You
        </h1>

        <div className=" flex items-center justify-center gap-[8px] sm:gap-[20px] md:gap-[30px] pt-4 sm:pt-8">
          {ListItem.map((item, i) => (
            <Button
              key={i}
              onClick={() => handleButtonClick(item)}
              className={cn(
                "text-xs sm:text-lg md:text-xl bg-white text-black hover:bg-[#ebf2ff] dark:text-white dark:bg-[#020817] font-medium",
                item === activeButton
                  ? "bg-blue-500 dark:bg-blue-500  text-white"
                  : " "
              )}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {Card.map((card, index) => (
            <div
              key={index}
              className="bg-[#F6F9FEE5] dark:bg-[#191D24] w-[290px] rounded-2xl hover:shadow-[0px_4px_8px_0px_rgba(61,137,251,0.25)]"
            >
              <Image
                src={card.img}
                width={1500}
                height={1000}
                alt="car"
                className="w-full object-cover rounded-t-2xl"
              />
              <div className="px-5 py-3">
                <p className="text-xs text-black dark:text-white font-semibold pt-1">
                  {card.text}
                </p>
                {/* Icons */}
                <div className="flex items-center justify-between mt-2">
                  <Icons.ratting />
                  <div className="flex items-center gap-2">
                    <Icons.clocks />
                    <p className="text-xs">{card.time}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lecture;
