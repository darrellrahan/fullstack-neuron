import Image from "next/image";
import React from "react";
import { raleway } from "../fonts";

function About({ data }: { data: any }) {
  return (
    <section id="about">
      <div className="py-32 px-16">
        <div className="flex flex-col items-center gap-2 mb-10">
          <h1 className="text-4xl font-bold text-[#333435]">
            {data.about.about_title}
          </h1>
          <div className="w-20 h-1 bg-[#919EAB]"></div>
        </div>
        <div className="flex flex-col items-center gap-4 px-[15rem] mb-24">
          <p className="text-[#637381] text-center">{data.about.about_desc}</p>
          <button className="px-5 py-3 rounded-lg text-[#D61924] border-2 border-[#D61924] font-medium text-lg">
            Learn more
          </button>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-rose-800 rounded-xl shadow flex items-center gap-10 p-12">
          <Image
            src="/assets/about-thumbnail.svg"
            alt="Neuron 3.0 Program"
            width={1000}
            height={1000}
            className="w-[15rem] h-[15rem]"
          />
          <div className={`space-y-6 text-white ${raleway.className}`}>
            <h1 className="text-5xl font-bold">{data.program.title}</h1>
            <div className="w-20 h-1 bg-white" />
            <p>{data.program.desc}</p>
            <h4 className="font-black">{data.program.tagline}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
