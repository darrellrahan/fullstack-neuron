"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { raleway } from "../fonts";

function Testimonial({ data }: { data: any }) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  function nextSlide() {
    setCarouselIndex(carouselIndex === 4 ? 0 : carouselIndex + 1);
  }
  function prevSlide() {
    setCarouselIndex(carouselIndex === 0 ? 4 : carouselIndex - 1);
  }

  useEffect(() => {
    const id = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(id);
    };
  }, [carouselIndex]);

  return (
    <section id="testimonial">
      <div className={`${raleway.className} py-16 px-48`}>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-[#333435]">
            {data.partner.partner_title}
          </h1>
          <div className="w-20 h-1 bg-[#919EAB]"></div>
          <p className="text-[#637381] text-center px-28">
            {data.partner.partner_desc}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 my-12">
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-1.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-2.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-3.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-4.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-5.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-6.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-7.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-8.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-9.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-10.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-11.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-12.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-13.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-14.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-15.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-16.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-60">
          <div className="relative h-[165px] w-[820px] overflow-hidden flex items-center">
            {data.testimonials.map((item: any, index: number) => {
              let className = "translate-x-full opacity-0";

              if (index === carouselIndex) {
                className = "translate-x-0 opacity-100";
              }
              if (
                index === carouselIndex - 1 ||
                (index === 4 && carouselIndex === 0)
              ) {
                className = "-translate-x-full opacity-0";
              }

              return (
                <div
                  key={item.job}
                  className={`${className} absolute inset-0 duration-300 ease-linear`}
                >
                  <div className="space-y-3 mb-8">
                    <p className="text-lg">{item.desc}</p>
                    <div className="w-20 h-1 bg-[#919EAB]"></div>
                    <h4 className="font-bold text-gray-500">
                      {item.name} - {item.job}
                    </h4>
                  </div>
                  <Image
                    src="/assets/five-star.svg"
                    alt="five star"
                    width={135}
                    height={24}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex gap-3">
            <button onClick={prevSlide}>
              <Image
                src="/assets/arrow-prev-service.svg"
                alt="prev"
                width={48}
                height={48}
              />
            </button>
            <button onClick={nextSlide}>
              <Image
                src="/assets/arrow-next-service.svg"
                alt="next"
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
