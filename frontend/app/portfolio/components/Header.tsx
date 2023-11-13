"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Header() {
  const [currentStyle, setCurrentStyle] = useState({
    className: "py-8 bg-white",
  });

  useEffect(() => {
    const onPageScroll = () => {
      setCurrentStyle(
        window.pageYOffset > 16
          ? {
              className: "py-6 bg-white/90 shadow-2xl",
            }
          : {
              className: "py-8 bg-white",
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
            <Image
              src="/assets/logo-dark.svg"
              alt="logo"
              width={200}
              height={30}
            />
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
            className="hover:text-[#D61924] duration-300 ease-linear"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#D61924] duration-300 ease-linear"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-[#D61924] duration-300 ease-linear"
          >
            Portfolio
          </Link>
          <Link
            href="/product"
            className="hover:text-[#D61924] duration-300 ease-linear"
          >
            Product
          </Link>
          <Link
            href="/methodology"
            className="hover:text-[#D61924] duration-300 ease-linear"
          >
            Methodology
          </Link>
          <Link
            href="/article"
            className="hover:text-[#D61924] duration-300 ease-linear"
          >
            Article
          </Link>
          <Link
            href="/gallery"
            className="hover:text-[#D61924] duration-300 ease-linear"
          >
            Gallery
          </Link>
          <Link
            href="/career"
            className="hover:text-[#D61924] duration-300 ease-linear"
          >
            Career
          </Link>
        </div>
      </header>
    </section>
  );
}

export default Header;
