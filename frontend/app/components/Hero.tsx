"use client";

import { CaretLeft } from "@phosphor-icons/react";
import { CaretRight } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { raleway } from "../fonts";

function Hero({ data }: { data: any }) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  function nextSlide() {
    setCarouselIndex(carouselIndex === 3 ? 0 : carouselIndex + 1);
  }
  function prevSlide() {
    setCarouselIndex(carouselIndex === 0 ? 3 : carouselIndex - 1);
  }

  useEffect(() => {
    const id = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(id);
    };
  }, [carouselIndex]);

  return (
    <section id="hero">
      <div className="h-screen bg-[url('/assets/hero-bg.svg')] bg-no-repeat bg-cover grid grid-cols-2 items-center text-white overflow-hidden">
        <div className="pl-40">
          <div className="relative h-[20rem] overflow-hidden flex items-center">
            {data.hero_title.map((item: any, index: number) => {
              let className = "translate-x-full opacity-0";

              if (index === carouselIndex) {
                className = "translate-x-0 opacity-100";
              }
              if (
                index === carouselIndex - 1 ||
                (index === 2 && carouselIndex === 0)
              ) {
                className = "-translate-x-full opacity-0";
              }

              return (
                <div
                  key={item.hero_title}
                  className={`absolute inset-0 space-y-8 mb-24 duration-300 ease-linear ${className}`}
                >
                  <h1 className={`${raleway.className} text-5xl font-bold`}>
                    {item.hero_title}
                  </h1>
                  <p className={`${raleway.className} text-lg`}>
                    {item.hero_desc}
                  </p>
                  <div className="flex gap-2">
                    <button className="px-5 py-3 bg-white rounded-lg text-[#D61924] border-2 border-white font-medium text-lg">
                      Learn more
                    </button>
                    <button className="px-5 py-3 bg-transparent rounded-lg text-white border-2 border-white font-medium text-lg">
                      Contact us
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={prevSlide}>
              <CaretLeft size={24} weight="bold" />
            </button>
            <button
              onClick={() => setCarouselIndex(0)}
              className={`w-8 h-1.5 ${
                carouselIndex === 0 ? "bg-white" : "bg-[#33343532]"
              } rounded-full duration-300 ease-linear`}
            ></button>
            <button
              onClick={() => setCarouselIndex(1)}
              className={`w-8 h-1.5 ${
                carouselIndex === 1 ? "bg-white" : "bg-[#33343532]"
              } rounded-full duration-300 ease-linear`}
            ></button>
            <button
              onClick={() => setCarouselIndex(2)}
              className={`w-8 h-1.5 ${
                carouselIndex === 2 ? "bg-white" : "bg-[#33343532]"
              } rounded-full duration-300 ease-linear`}
            ></button>
            <button
              onClick={() => setCarouselIndex(3)}
              className={`w-8 h-1.5 ${
                carouselIndex === 3 ? "bg-white" : "bg-[#33343532]"
              } rounded-full duration-300 ease-linear`}
            ></button>
            <button onClick={nextSlide}>
              <CaretRight size={24} weight="bold" />
            </button>
          </div>
        </div>
        <div className="h-full flex items-center justify-center py-28 translate-y-4">
          <div className="w-[35rem] h-[35rem] relative">
            <div className="absolute inset-0 border-2 border-dashed border-[rgba(241,245,248,0.32)] rounded-full animate-rotate-slow">
              <Image
                src="/assets/ic-hero-image.svg"
                alt="image"
                width={48}
                height={48}
                className="absolute left-3 bottom-28"
              />
              <Image
                src="/assets/ic-hero-video.svg"
                alt="video"
                width={48}
                height={48}
                className="absolute left-[4.5rem] top-10"
              />
              <Image
                src="/assets/ic-hero-code.svg"
                alt="code"
                width={48}
                height={48}
                className="absolute right-12 top-16"
              />
            </div>
            <div className="absolute inset-12 border-2 border-[rgba(241,245,248,0.48)] rounded-full animate-rotate-normal">
              <Image
                src="/assets/ic-hero-cart.svg"
                alt="cart"
                width={48}
                height={48}
                className="absolute left-1/2 -top-5"
              />
              <Image
                src="/assets/ic-hero-person.svg"
                alt="person"
                width={48}
                height={48}
                className="absolute -right-5 bottom-40"
              />
            </div>
            <div className="absolute inset-24 border-2 border-dashed border-[rgba(241,245,248,0.64)] rounded-full animate-rotate-fast">
              <Image
                src="/assets/ic-hero-headphone.svg"
                alt="headphone"
                width={48}
                height={48}
                className="absolute -left-6 top-32"
              />
            </div>
            <div className="absolute inset-[7.5rem] translate-y-3 rounded-full bg-cover bg-[url('/assets/hero-team.svg')]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
