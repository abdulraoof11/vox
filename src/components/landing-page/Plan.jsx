import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../icons";

const Plan = () => {
  const feature = [
    "Custom Pricing",
    "Priority Support and Onboarding",
    "API access for integrations",
  ];

  return (
    <div className="relative overflow-hidden py-20 bg-white dark:bg-[#02061700] pt-[20px] sm:pt-[60px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between gap-6 lg:gap-0">
        <div className="w-full sm:w-[350px] top-32 relative md:w-[425px]">
          <h1 className="text-2xl sm:text-[48px] md:text-[32px] lg:text-[38px] 2xl:text-[36px] font-bold dark:text-white">
            <span className="text-[#F4A627]">Find</span> The Right Solution
          </h1>
          <p className="text-sm sm:text-lg md:text-base pt-4 sm:pt-6 leading-6">
            "Innovative AI tools streamline educational slide creation. Vox
            Education offer AI features for effortless design. Enter content,
            enable subtitles, and enhance design with AI suggestions.
          </p>
          <p className="text-sm sm:text-lg md:text-base pt-4 sm:pt-6 leading-6">
            Customize layouts, review for clarity, and preview the presentation.
            Export in preferred format and share seamlessly."
          </p>

          <Button className="mt-5 bg-[#3D89FB] hover:bg-[#3D89FB] text-white rounded-2xl">
            Enterprise
          </Button>
        </div>
        <div className="relative w-full sm:left-0 sm:w-[350px] 2xl:left-32   2xl:top-48 md:w-[420px] lg:w-[420px] xl:w-[370px] 2xl:w-[420px]">
          <div className="absolute inset-0 h-[50px] top-56 bg-[#ECF4FF] dark:bg-[#282D37] rounded-2xl"></div>
          <div className="relative w-full h-[240px] rounded-2xl overflow-hidden">
            <Image
              src={"/men.jpeg"}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
              alt="Men Image"
            />
          </div>
          <div className="absolute inset-0  h-10 top-[200px] border-[2px] border-[#3D89FB]/10 rounded-2xl"></div>
        </div>
        <div className="w-full relative sm:w-[350px] md:w-[350px] lg:w-[420px] xl:w-[370px] 2xl:w-[420px] mx-auto md:mx-0 bg-[#FFFFFF] dark:bg-[#112036] border-[2px] border-[#E4F0FF] dark:border-vox-blue hover:border-[2px] hover:border-[#3D89FB] rounded-2xl px-[30px] py-10 md:py-8 lg:py-10 mt-10 sm:mt-20 md:mt-0 shadow-[0px_4px_24px_0px_rgba(61,137,251,0.10)]">
          <h5 className="text-[32px] md:text-[28px] lg:text-[32px]  font-bold text-black dark:text-white">
            Enterprise Solution
          </h5>
          <p className="text-base pt-5">
            Tailored AI-driven educational tools for institutions and
            universities.
          </p>
          <h3 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl text-black dark:text-white font-black pt-4 sm:pt-8 md:pt-4 lg:pt-8">
            Custom <span className="text-base font-semibold">/ Month</span>
          </h3>
          <Button className="text-white w-full font-bold py-6 rounded-[26px] mt-6 sm:mt-[30px] md:mt-6 bg-[#3D89FB] hover:bg-[#3D89FB] lg:mt-[30px] mb-10 md:mb-6 lg:mb-10">
            Contact Sales
          </Button>

          <div className="space-y-5 sm:space-y-3">
            {feature.map((text, index) => (
              <div key={index} className="flex items-center gap-4">
                <Icons.verified className="w-[30px] h-auto" />
                <p className="text-charcoal-cloudburst dark:text-white font-semibold">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
