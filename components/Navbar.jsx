import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function Navbar({ isDark, setIsDark }) {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = " translatex(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = " translatex(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className=" fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="Bgcolor" className=" w-full" />
      </div>
      <nav
        className={` w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top" className="w-[300px]">
          <Image
            src={isDark ? assets.logo_dark : assets.logo}
            alt="logo"
            width={300}
            height={100}
            className="cursor-pointer mr-14"
          />
        </a>
        <ul
          className={` hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a href="#top" className=" font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className=" font-Ovo">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className=" font-Ovo">
              Srvices
            </a>
          </li>
          <li>
            <a href="#work" className=" font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className=" font-Ovo">
              Contact Me
            </a>
          </li>
        </ul>
        <div className=" flex items-center gap-4">
          <button onClick={() => setIsDark((prev) => !prev)}>
            <Image
              src={isDark ? assets.sun_icon : assets.moon_icon}
              alt="moon_icon"
              className=" w-6"
            />
          </button>
          <a
            href="#contact"
            className=" hidden lg:flex items-center gap-3 px-10 font-Ovo py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50"
          >
            Contact
            <Image
              src={isDark ? assets.arrow_icon_dark : assets.arrow_icon}
              className=" w-3"
              alt="arrow"
              width={12} // w-3 = 0.75rem = 12px
              height={12}
            />
          </a>
          <button className=" block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDark ? assets.menu_white : assets.menu_black}
              alt="menu_black"
              className=" w-6"
            />
          </button>
          {/* -----------Mobaile - menu---------------- */}
          <ul
            ref={sideMenuRef}
            className=" flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 translate duration-500 dark:bg-darkHover dark:text-white"
          >
            <div className=" absolute right-6 top-6" onClick={closeMenu}>
              <Image
                src={isDark ? assets.close_white : assets.close_black}
                alt="close_black"
                className=" w-5 cursor-pointer"
              />
            </div>
            <li>
              <a href="#top" className=" font-Ovo" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className=" font-Ovo" onClick={closeMenu}>
                About Me
              </a>
            </li>
            <li>
              <a href="#services" className=" font-Ovo" onClick={closeMenu}>
                Srvices
              </a>
            </li>
            <li>
              <a href="#work" className=" font-Ovo" onClick={closeMenu}>
                My Work
              </a>
            </li>
            <li>
              <a href="#contact" className=" font-Ovo" onClick={closeMenu}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
