import React from "react";
import LogoFooter from "../icons/landing/Footer-Logo";
import { Icons } from "../icons";

const Footer = () => {
  return (
    <div>
      <footer class="w-full bg-[#F6F9FE] dark:bg-[#02061700] text-black dark:text-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
            <a href="#" class="flex justify-center ">
              <LogoFooter />
            </a>
            <ul class="text-lg text-center  sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
              <li>
                <a href="javascript:;" class=" hover:text-gray-400">
                  Home
                </a>
              </li>
              <li class="sm:my-0 my-2">
                <a href="javascript:;" class=" hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="javascript:;" class=" hover:text-gray-400">
                  Service
                </a>
              </li>
              <li class="sm:my-0 my-2">
                <a href="javascript:;" class=" hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex items-center  space-x-4 sm:justify-center">
              <Icons.facebook
                key="facebook"
                className="h-8 w-8 rounded-full group bg-white dark:bg-[#112036] hover:bg-[#3D89FB] p-1 transition-colors duration-300 ease-in-out"
              />
              <Icons.camera
                key="camera"
                className="h-8 w-8 rounded-full group bg-white dark:bg-[#112036] hover:bg-[#3D89FB] p-1 transition-colors duration-300 ease-in-out"
              />
              <Icons.video
                key="video"
                className="h-8 w-8 rounded-full group bg-white dark:bg-[#112036] hover:bg-[#3D89FB] p-1 transition-colors duration-300 ease-in-out"
              />
              <Icons.whatsup
                key="whatsup"
                className="h-8 w-8 rounded-full group bg-white dark:bg-[#112036] hover:bg-[#3D89FB] p-1 transition-colors duration-300 ease-in-out"
              />
              <Icons.iconX
                key="iconX"
                className="h-8 w-8 rounded-full group bg-white dark:bg-[#112036] hover:bg-[#3D89FB] p-1 transition-colors duration-300 ease-in-out"
              />
            </div>
          </div>
          <div class="py-7 border-t border-gray-700">
            <div class="flex items-center justify-center">
              <span class="flex  items-center text-gray-400">
                <Icons.envelope className="h-5 group w-5 mr-1" />
                <span class="mr-4">voxai@gmail.com</span>
                <span class="flex items-center">
                  <Icons.call className="h-5  group w-5 mr-1" />
                  <span>Terms of Service</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
