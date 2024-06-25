import React from "react";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import Image from "next/image";
import RegisterStudent from "../icons/landing/register-student";

const Features = () => {
  const feature = [
    "Interactive Learning",
    "Personalized Content",
    "Increased Retention",
    "Accessible Anytime",
  ];

  return (
    <div className="bg-white dark:bg-[#02061700] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex justify-between pt-10 sm:pt-20 lg:pt-44 pb-28 lg:pb-44">
          {/* Left Column */}
          <div className="relative w-full lg:w-[350px]">
            <div className="absolute w-8 h-8 rounded-full pt bg-[#E95C5C] left-[270px] sm:left-[340px] lg:left-[242px] top-[200px] sm:top-[340px] lg:top-[370px]" />
            <h3 className="text-[25px] font-bold py-10 sm:py-0 sm:w-[520px] lg:w-[590px] xl:w-[500px] text-charcoal-cloudburst dark:text-white leading-7 sm:leading-[40px] xl:leading-[45px]">
              Enabling <span className="text-[#6BD270]">Student</span> Success
              <br />
              through Enhanced
              <span className="text-[#E95C5C]"> Lecture Delivery</span>
            </h3>
            <p className="hidden sm:block w-[570px] text-base lg:text-sm pt-6 mb-5 xl:mb-10">
              VoxEdu's AI-driven platform enhances the learning experience by
              delivering interactive and engaging lectures, fostering better
              understanding and retention for students.
            </p>
            <div className="space-y-9 sm:space-y-5 mb-7 sm:mb-5 xl:mb-10 mt-9">
              {feature.map((text, index) => (
                <div key={index} className="flex items-center gap-4 sm:gap-4">
                  <Icons.verified className="w-[30px] h-auto" />
                  <p className="text-sm sm:text-lg lg:text-base text-charcoal-cloudburst dark:text-white font-semibold">
                    {text}
                  </p>
                </div>
              ))}
              <Button className="px-8 text-white py-6 hover:bg-[#3D89FB] bg-[#3D89FB] font-bold">
                Try For Free
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative w-full lg:w-[350px] sm:w-[480px] xl:w-[530px] 2xl:w-[618px] mx-auto lg:mx-0 h-[285px] sm:h-[385px] xl:h-[440px] 2xl:h-[514px] z-10 mt-28 sm:mt-40 md:mt-32 lg:mt-0">
            <Image
              src={"/landing/dots.svg"}
              width={160}
              height={160}
              alt="Dots Image"
              className="absolute xl:w-[184px] 2xl:w-[284px] xl:h-[184px] 2xl:h-[284px] bottom-0 right-0"
            />
            <Image
              src={"/landing/man.svg"}
              width={500}
              height={600}
              alt="Student Image"
              className="absolute w-[190px] sm:w-[260px] 2xl:w-[346px] right-4 sm:right-5 2xl:right-[30px]"
            />
            <RegisterStudent className="absolute w-[280px] xl:w-[230px] 2xl:w-[280px] h-[90px] sm:h-[80px] xl:h-[70px] 2xl:h-[100px] -bottom-10 sm:bottom-[20px] sm:left-0" />
            <Image
              src={"/landing/girl.svg"}
              width={600}
              height={500}
              alt="Girl Image"
              className="object-cover absolute w-[130px] 2xl:w-[214px]"
            />
            <Image
              src={"/landing/arrow.svg"}
              width={100}
              height={100}
              alt="Arrow Image"
              className="absolute sm:w-[130px] md:w-[160px] lg:w-[190px] xl:w-[230px] 2xl:w-[260px] sm:h-[120px] md:h-[150px] lg:h-[180px] xl:h-[204px] 2xl:h-[224px] bottom-[50px] sm:bottom-[90px] md:bottom-[72px] -left-[70px] sm:-left-[60px] md:-left-[115px] lg:-left-[140px] xl:-left-[180px] -z-10"
            />
            <Icons.circle className="h-[50px] text-[#6BD270] absolute 2xl:w-[80px] 2xl:h-[60px] bottom-0 left-[90px] sm:left-[100px] xl:left-[125px]" />
            <Icons.circle className="w-[50px] sm:w-[100px] h-[50px] sm:h-[100px] text-[#7F829A] dark:text-white absolute sm:-top-[69px] right-10 2xl:-top-[100px] sm:-right-[23px] -z-10" />
            <Icons.circle className="w-10 h-10 text-[#FFCB5A] absolute sm:-top-[80px] sm:left-[120px] -z-10" />
            <div className="absolute w-10 h-10 rounded-full bg-[#6BD270] right-16 sm:-left-[30px] md:-left-[70px] -bottom-[90px] sm:-bottom-[60px]" />
            <div className="absolute w-6 h-6 rounded-full bg-[#F4A627] left-[160px] sm:left-[330px] top-[70px] sm:-top-[140px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
