"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React, { useRef } from "react";
import { raleway } from "../fonts";

function Services({ data }: { data: any }) {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services">
      <div className={`${raleway.className}`}>
        <div className="h-[5rem] bg-[linear-gradient(180deg,rgba(241,245,248,0.00)_0%,#F1F5F8_100%)]"></div>
        <div className="py-16 pl-16 flex items-center gap-32 bg-[linear-gradient(180deg,#F1F5F8_0%,#cdced7_100%)]">
          <div className="space-y-6 basis-[22.5%]">
            <h1 className="text-4xl font-bold text-[#333435]">
              {data.service_title}
            </h1>
            <div className="w-20 h-1 bg-[#919EAB]" />
            <p>{data.service_desc}</p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  const slider = sliderRef.current;
                  slider!.scrollLeft = slider!.scrollLeft - 250;
                }}
              >
                <Image
                  src="/assets/arrow-prev-service.svg"
                  alt="next"
                  width={48}
                  height={48}
                />
              </button>
              <button
                onClick={() => {
                  const slider = sliderRef.current;
                  slider!.scrollLeft = slider!.scrollLeft + 250;
                }}
              >
                <Image
                  src="/assets/arrow-next-service.svg"
                  alt="next"
                  width={48}
                  height={48}
                />
              </button>
            </div>
          </div>
          <div
            className="flex h-[22.5rem] gap-8 overflow-x-scroll basis-[77.5%] text-white scroll-smooth scrollbar-none"
            ref={sliderRef}
          >
            <div className="flex-none w-[22.5rem] h-full rounded-xl relative px-6 pb-6 pt-40 overflow-hidden group">
              <div className="space-y-4 z-20 relative">
                <div className="flex justify-between items-center">
                  <span className="font-black">MULTIMEDIA</span>
                  <ArrowRight size={20} weight="bold" />
                </div>
                <hr className="border-[1.5px] border-white" />
                <p>
                  Highly multimedia content, UI/UX Design, video editing, film
                  and animation, social media management, script writting,
                  Photography, Logo design and visual graphic design for your
                  product.
                </p>
              </div>
              <div className="absolute -inset-2 bg-[url('/assets/service-1.svg')] bg-cover bg-no-repeat group-hover:scale-125 duration-300 ease-linear"></div>
              <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
            </div>
            <div className="flex-none w-[22.5rem] h-full rounded-xl relative px-6 pb-6 pt-40 overflow-hidden">
              <div className="space-y-4 z-20 relative">
                <div className="flex justify-between items-center">
                  <span className="font-black">CRM</span>
                  <ArrowRight size={20} weight="bold" />
                </div>
                <hr className="border-[1.5px] border-white" />
                <p>
                  Customer Relationship Management app help you to improved your
                  customer experience by giving personalized and responsive
                  automation services.
                </p>
              </div>
              <div className="absolute -inset-2 bg-[url('/assets/service-2.svg')] bg-cover bg-no-repeat"></div>
              <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
            </div>
            <div className="flex-none w-[22.5rem] h-full rounded-xl relative px-6 pb-6 pt-40 overflow-hidden">
              <div className="space-y-4 z-20 relative">
                <div className="flex justify-between items-center">
                  <span className="font-black">SYSTEM INTEGRATOR</span>
                  <ArrowRight size={20} weight="bold" />
                </div>
                <hr className="border-[1.5px] border-white" />
                <p>
                  Create a seamless integrations within some app effectively,
                  system integrator can enhance efficiency of system
                  communication and minimize the compatibilities issue to saving
                  your cost.
                </p>
              </div>
              <div className="absolute -inset-2 bg-[url('/assets/service-3.svg')] bg-cover bg-no-repeat"></div>
              <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
            </div>
            <div className="flex-none w-[22.5rem] h-full rounded-xl relative px-6 pb-6 pt-40 overflow-hidden">
              <div className="space-y-4 z-20 relative">
                <div className="flex justify-between items-center">
                  <span className="font-black">MULTIMEDIA</span>
                  <ArrowRight size={20} weight="bold" />
                </div>
                <hr className="border-[1.5px] border-white" />
                <p>
                  Highly multimedia content, UI/UX Design, video editing, film
                  and animation, social media management, script writting,
                  Photography, Logo design and visual graphic design for your
                  product.
                </p>
              </div>
              <div className="absolute -inset-2 bg-[url('/assets/service-1.svg')] bg-cover bg-no-repeat"></div>
              <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
            </div>
            <div className="flex-none w-[22.5rem] h-full rounded-xl relative px-6 pb-6 pt-40 overflow-hidden">
              <div className="space-y-4 z-20 relative">
                <div className="flex justify-between items-center">
                  <span className="font-black">CRM</span>
                  <ArrowRight size={20} weight="bold" />
                </div>
                <hr className="border-[1.5px] border-white" />
                <p>
                  Customer Relationship Management app help you to improved your
                  customer experience by giving personalized and responsive
                  automation services.
                </p>
              </div>
              <div className="absolute -inset-2 bg-[url('/assets/service-2.svg')] bg-cover bg-no-repeat"></div>
              <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
            </div>
            <div className="flex-none w-[22.5rem] h-full rounded-xl relative px-6 pb-6 pt-40 overflow-hidden">
              <div className="space-y-4 z-20 relative">
                <div className="flex justify-between items-center">
                  <span className="font-black">SYSTEM INTEGRATOR</span>
                  <ArrowRight size={20} weight="bold" />
                </div>
                <hr className="border-[1.5px] border-white" />
                <p>
                  Create a seamless integrations within some app effectively,
                  system integrator can enhance efficiency of system
                  communication and minimize the compatibilities issue to saving
                  your cost.
                </p>
              </div>
              <div className="absolute -inset-2 bg-[url('/assets/service-3.svg')] bg-cover bg-no-repeat"></div>
              <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
