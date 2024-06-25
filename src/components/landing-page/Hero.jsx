import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Icons } from "../icons";

const Hero = () => {
  return (
    <div className="relative ">
      <div className="relative container  mx-auto flex flex-col sm:flex-row  justify-between items-center text-black dark:text-white px-4 sm:px-6 lg:px-8 py-[130px] my-48 ">
        {/* absolut grid img */}
        <Image
          src="/landing/grid.svg"
          width={264}
          height={84}
          alt="grid"
          className="absolute inset-0 w-full h-full"
        />
        {/* left content */}
        <div className="flex flex-col sm:w-[450px]">
          <p className="font-Segoe-ui font-bold text-4xl sm:text-6xl gap-y-3">
            Empowering Educators with{" "}
            <span className="text-[#F4A627]">AI-Powered</span> Presentations
          </p>
          <p className="font-base text-sm mt-4 sm:mt-8 font-Segoe-ui ">
            VoxEdu simplifies lecture preparation, enhances interactivity, and
            streamlines educational delivery with dynamic AI-powered
            presentations.
          </p>
          <div className="py-14">
            <Button className="px-12 pt-8 text-white py-6 hover:bg-[#3D89FB] bg-[#3D89FB] font-bold flex items-center">
              <Icons.button className="mr-2" /> Generate Slides
            </Button>
          </div>
        </div>
        {/* right img */}
        <div className="mt-8 sm:mt-0 text-lg flex justify-between relative">
          <div className="flex flex-col items-center relative">
            <Image
              src="/landing/Group 4335.svg"
              width={381}
              height={393}
              className=""
            />
            <Image
              src="/landing/Group 4332.svg"
              width={264}
              height={84}
              className=""
            />
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 opacity-20 rounded-full"
              style={{
                filter: "blur(150px)",
                borderRadius: "557px",
                height: "557px",
              }}
            ></div>
            <div className="flex flex-col items-center mt-8 sm:mt-0 relative">
              <Image
                src="/landing/Group 4334.svg"
                width={329}
                height={244}
                className="mt-4 sm:ml-6"
              />
              <Image src="/landing/Group 4350.svg" width={307} height={144} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
