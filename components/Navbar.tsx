import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import colors from "../constants/colors";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState(colors.white);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(colors.white);
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor(colors.white);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const _renderLogo = () => {
    return (
      <div
        data-aos="fade-out"
        data-aos-duration="2000"
        className="pl-4 cursor-pointer"
        style={{ width: 130 }}
      >
        {textColor === colors.white ? (
          <img src="/edc_white.svg" />
        ) : (
          <img src="/edc_black.svg" />
        )}
      </div>
    );
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 shadow-sm"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">{_renderLogo()}</Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li
            data-aos="fade-out"
            data-aos-duration="2000"
            className="navbar__link py-4 px-2"
          >
            <Link href="/#about">ABOUT</Link>
          </li>
          <li
            data-aos="fade-out"
            data-aos-duration="2000"
            data-aos-delay="100"
            className="navbar__link py-4 px-2"
          >
            <Link href="/#contact">BLOG</Link>
          </li>
          <li
            data-aos="fade-out"
            data-aos-duration="2000"
            data-aos-delay="200"
            className="navbar__link py-4 px-2"
          >
            <Link href="/#contact">CONTACT</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center w-full h-screen mobile-nav text-right ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center w-full h-screen mobile-nav text-right ease-in duration-300"
          }
        >
          <ul className="mt-12 px-4">
            <li
              onClick={handleNav}
              className="py-2 text-3xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="py-2 text-3xl hover:text-gray-500"
            >
              <Link href="/work">About Us</Link>
            </li>
            <li
              onClick={handleNav}
              className="py-2 text-3xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
