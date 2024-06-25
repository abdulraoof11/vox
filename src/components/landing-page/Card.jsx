"use client";
import React from "react";
import MultipleLectureTab from "../icons/landing/multiple-lecture-tab";
import VerifiedTeacherTab from "../icons/landing/verified-teacher-tab";
import UserDataTab from "../icons/landing/user-data-tab";
import Image from "next/image";

const benefits = [
  {
    icon: "/landing/benefit/text.svg",
    text: "Simplified Lecture Preparation",
  },
  { icon: "/landing/benefit/topic.svg", text: "Enhanced Engagement" },
  {
    icon: "/landing/benefit/languages.svg",
    text: "Interactive Lectures",
  },
  {
    icon: "/landing/benefit/avatar.svg",
    text: "Avatar Presentations",
  },
];

export default function Card() {
  return (
    <div className="bg-white dark:bg-[#161e2f00] relative  z-20 py-[100px]">
      <div className="container lg:flex justify-between items-center">
        <div className="sm:opacity-0 sm:absolute top-[-9999px] flex flex-col gap-2 bg-vox-gray-lighter dark:bg-charcoal-dark rounded-2xl ">
          <MultipleLectureTab className="w-[90%] mx-auto h-auto" />
          <VerifiedTeacherTab className="w-[90%] mx-auto h-auto" />
          <UserDataTab className="w-[90%] mx-auto h-auto " />
        </div>

        <div className="bg-[#F6F9FE] sm:block hidden dark:bg-[#191D24] relative w-[450px] h-[420px]  rounded-2xl">
          <VerifiedTeacherTab className="w-[270px]  h-[350px]  absolute top-10 left-[8] " />
          <MultipleLectureTab className="absolute w-[250px]  top-5  right-[-70px] " />
          <UserDataTab className="absolute w-[250px]  h-[350px] top-[150px] bottom-0  right-[-30px] " />
        </div>
        <div className=" sm:w-[500px] lg:w-[410px] xl:w-[450px] 2xl:w-[530px] mx-auto lg:mx-0 mt-12">
          <h3 className="text-2xl sm:text-4xl text-black dark:text-white">
            Benefits of <span className="text-attention">Vox Education</span>
          </h3>
          <div className="flex items-center gap-2 pt-5">
            <div className="w-[3px] h-6 bg-roman rounded-[2px]" />
            <p className="text-manatee text-xs 2xl:text-sm leading-5 2xl:leading-6">
              VoxEdu transforms the way educators create and deliver content.
              Our platform simplifies lecture preparation with AI tools,
              enhances student engagement through interactive features, and
              offers innovative presentationoptions like AI avatars
            </p>
          </div>
          <div className="flex items-center gap-2 pt-5">
            <div className="w-[3px] h-6 flex-shrink-0 bg-roman rounded-[2px]" />
            <p className="text-manatee  text-xs 2xl:text-sm leading-5 2xl:leading-6">
              Empower your teaching with AI-driven tools, boosting interaction
              and captivating students with dynamic presentations.
            </p>
          </div>
          <div className=" grid grid-cols-2 gap-4 sm:gap-5 lg:gap-5 xl:gap-6 2xl:gap-8 my-8 xl:my-9 ">
            {benefits.map(({ icon, text }, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image src={icon} width={40} height={40} alt="Presentation" />
                <p className="text-base  dark:text-white font-normal">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
