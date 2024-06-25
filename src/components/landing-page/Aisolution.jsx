import React from "react";
import { Icons } from "../icons";

const Aisolution = () => {
  // Sample array of content for the cards
  const cardContent = [
    {
      cardContent: "AI-Assisted Content Creation",
      content:
        "Quickly generate lecture materials with the help of advanced AI algorithms.",
      icon: <Icons.AIAssisted />,
    },
    {
      cardContent: "Customizable Templates",
      content:
        "Tailor your presentations with a variety of professional templates designed for education.",
      icon: <Icons.customizable />,
    },
    {
      cardContent: "Interactive Multimedia Elements",
      content:
        "Incorporate videos, quizzes, and interactive graphics to enhance student engagement.",
      icon: <Icons.Interactive />,
    },
    {
      cardContent: "AI Avatar Delivery",
      content:
        "Use AI avatars to present lectures in an engaging and innovative manner",
      icon: <Icons.AIAvatar />,
    },
  ];

  return (
    <div className="bg-white dark:bg-[#02061700]">
      <div className="container">
        <h1 className="font-bold lg:text-4xl leading-10 font-Segoe-ui dark:text-white text-center pt-5">
          <span className="text-[#F4A627]">AI-Powered</span> Presentations for
          Modern Education
        </h1>
        <p className="text-[#7F829A] text-sm lg:text-base md:w-[620px] lg:w-[759px] mx-auto text-center pt-6 leading-5">
          For students presentation slides, Vox Education offers free,
          professionally designed templates that are easily customizable. It
          saves time, ensures a professional look, and is budget-friendly.
        </p>
      </div>
      <div className="flex container items-center flex-wrap gap-5 my-[80px] ml-auto">
        {cardContent.map((content, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-[#14181F] rounded-lg shadow-lg p-6 mr-4 w-full md:w-[45%] h-[250px] lg:w-[22%] transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className=" hover:text-blue-700">
              {content.icon}
              <h1 className="font-bold text-xl py-5">{content.cardContent}</h1>
            </div>
            <p>{content.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aisolution;
