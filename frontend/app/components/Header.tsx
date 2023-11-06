"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function Header() {
  const [currentStyle, setCurrentStyle] = useState({
    className: "py-8 bg-white",
    iconColor: "white",
    logoColor: ["#ED2024", "#8B181A", "black"],
  });

  useEffect(() => {
    const onPageScroll = () => {
      setCurrentStyle(
        window.pageYOffset > 16
          ? {
              className: "py-6 bg-white/90 shadow-lg",
              iconColor: "#D61924",
              logoColor: ["#ED2024", "#8B181A", "black"],
            }
          : {
              className: "py-8 bg-white",
              iconColor: "white",
              logoColor: ["#ED2024", "#8B181A", "black"],
            }
      );
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section id="header">
      <header
        className={`flex justify-between items-center fixed top-0 inset-x-0 px-16 z-30 ${currentStyle.className} duration-300 ease-linear`}
        style={{ backdropFilter: "blur(5px)" }}
      >
        <div className="flex justify-between items-center gap-12">
          <Link href="/">
            <Image src="/assets/logo.svg" alt="agus" width={200} height={30} />
          </Link>
          <div className="flex items-center gap-8">
            <select className="bg-transparent w-12 cursor-pointer border-none outline-none">
              <option className="text-black" value="EN">
                EN
              </option>
              <option className="text-black" value="EN">
                ID
              </option>
            </select>
          </div>
        </div>
        <div className="flex gap-6">
          <Link
            href="/"
            className={`hover:text-[#D61924] duration-300 ease-linear ${
              usePathname() === "/" ? "text-[#D61924]" : "text-black"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-[#D61924] duration-300 ease-linear ${
              usePathname() === "/about" ? "text-[#D61924]" : "text-black"
            }`}
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className={`hover:text-[#D61924] duration-300 ease-linear ${
              usePathname() === "/portfolio" ? "text-[#D61924]" : "text-black"
            }`}
          >
            Portfolio
          </Link>
          <Link
            href="/product"
            className={`hover:text-[#D61924] duration-300 ease-linear ${
              usePathname() === "/product" ? "text-[#D61924]" : "text-black"
            }`}
          >
            Product
          </Link>
          <Link
            href="/methodology"
            className={`hover:text-[#D61924] duration-300 ease-linear ${
              usePathname() === "/methodology" ? "text-[#D61924]" : "text-black"
            }`}
          >
            Methodology
          </Link>
          <Link
            href="/article"
            className={`hover:text-[#D61924] duration-300 ease-linear ${
              usePathname() === "/article" ? "text-[#D61924]" : "text-black"
            }`}
          >
            Article
          </Link>
          <Link
            href="/gallery"
            className={`hover:text-[#D61924] duration-300 ease-linear ${
              usePathname() === "/gallery" ? "text-[#D61924]" : "text-black"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/career"
            className={`hover:text-[#D61924] duration-300 ease-linear ${
              usePathname() === "/career" ? "text-[#D61924]" : "text-black"
            }`}
          >
            Career
          </Link>
        </div>
      </header>
    </section>
  );
}

export default Header;
