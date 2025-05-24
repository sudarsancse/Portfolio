import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

function Footer({ isDark }) {
  return (
    <div className=" mt-20">
      <div className=" text-center">
        <Image
          src={isDark ? assets.logo_dark : assets.logo}
          alt="logo"
          className=" w-40 mx-auto mb-2"
        />
        <div className=" w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDark ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail_icon"
            className=" w-6"
          />
          sudarsansarkarcst@gmail.com
        </div>
      </div>
      <div className=" text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&#169; 2025 Sudarsan sarkar. All rights reserved</p>
        <ul className=" flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/sudarsancse">
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sudarsan-sarkar-a59b2825a/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
