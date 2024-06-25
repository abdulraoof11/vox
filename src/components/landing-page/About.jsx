import React from "react";
import Image from "next/image";
import { Icons } from "../icons";

const About = () => {
  return (
    <div className="container px-4 py-24 overflow-hidden sm:px-8 md:px-16 relative">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full sm:w-[300px] md:w-[500px]">
          <h1 className="text-white py-4 font-segoe text-4xl font-bold leading-normal">
            Seamless Onboarding for Educators
          </h1>
          <Icons.verify className="mt-4" />
          <div className="relative mb-8">
            <div className="w-[2px] top-4 relative left-4 h-[65px] dark:bg-white bg-black"></div>
            <div className="absolute left-8 w-full sm:w-[250px] md:w-[450px]">
              <h1 className="absolute -top-24 left-3">Create your Account</h1>
              <p className="absolute -top-12 left-4 w-[400px] text-xs">
                Easily sign up and start using VoxEdu in minutes. Our intuitive
                process gets you up and running quickly, so you can focus on
                what matters most - teaching.
              </p>
            </div>
          </div>
          <Icons.Circle className="absolute left-0" />
          <Icons.verify className="mt-4" />
          <div className="relative mb-8">
            <div className="w-[2px] top-4 relative left-4 h-[65px] dark:bg-white bg-black"></div>
            <div className="absolute left-8 w-full sm:w-[250px] md:w-[450px]">
              <h1 className="absolute -top-24 left-3">Create your Account</h1>
              <p className="absolute -top-12 w-[400px] left-4 text-xs">
                Easily sign up and start using VoxEdu in minutes. Our intuitive
                process gets you up and running quickly, so you can focus on
                what matters most - teaching.
              </p>
            </div>
          </div>
          <Icons.verify className="mt-4" />
          <div className="relative  mb-8">
            <div className="w-[2px] top-4 relative left-4 h-[65px] dark:bg-white bg-black"></div>
            <div className="absolute left-8 w-full sm:w-[250px] md:w-[450px]">
              <h1 className="absolute -top-24 left-3">Create your Account</h1>
              <p className="absolute -top-12  w-[400px] left-4 text-xs">
                Easily sign up and start using VoxEdu in minutes. Our intuitive
                process gets you up and running quickly, so you can focus on
                what matters most - teaching.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 flex items-center justify-center w-full">
          <div className="relative w-[350px] sm:w-[500px] mx-auto lg:mx-0  xl:w-[620px] 2xl:w-[720px] h-[350px] xl:h-[395px] 2xl:h-[450px]  mt-40 right-0 lg:mt-0  ">
            <h1 className="h-[24px] w-[24px] rounded-full bg-[#F4A627] absolute -top-16 2xl:left-[450px] left-64"></h1>
            <Image
              src="/men.jpeg"
              width={1000}
              height={1000}
              alt="customer"
              className="absolute top-0 2xl:left-36 w-full mx-auto h-full object-cover rounded-2xl"
            />
            <Image
              src={"/profile.png"}
              width={200}
              height={10}
              alt="profile card"
              className="absolute sm:w-[220px]  xl:w-[280px] sm:h-[80] xl:h-[100px] -bottom-12 2xl:left-36 left-8 sm:left-10 rounded-2xl"
            />
            <Icons.circle className="text-[#7F829A] dark:text-[#FFFFFF] absolute w-[60px] md:w-[100px] h-[60px] md:h-[100px] -top-[70px]  md:-top-[100px] lg:-top-[120px] right-0 sm:-right-[50px] md:-right-[100px] lg:-right-[150px]" />
            <Icons.circle className="text-[#6BD270] absolute w-[60px] h-[60px]  -bottom-28 right-6 sm:right-20" />
            <Icons.circle className="text-[#FFCB5A] absolute w-[40px] h-[40px] -top-[70px] left-[60px] sm:left-[100px] 2xl:left-52 xl:left-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
