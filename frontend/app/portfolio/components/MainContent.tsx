"use client";

import { CaretDown } from "@phosphor-icons/react/dist/ssr/CaretDown";
import React, { useRef, useState } from "react";

function MainContent({ data }: { data: any }) {
  const [defaultDisplay, setDefaultDisplay] = useState("hidden");
  const [tab, setTab] = useState(data[0].name);
  const loadMore = useRef<HTMLButtonElement>(null);

  const filteredData = data.find((item: any) => item.name === tab);

  console.log(filteredData);

  return (
    <div className="py-12 px-32">
      <div className="flex justify-between mb-12">
        <div className="relative w-fit">
          <input
            type="search"
            placeholder="Search Portfolio"
            className="w-[445px] h-[56px] px-4 rounded-lg border border-gray-300 pr-16"
          />
          <img
            src="/assets/search.svg"
            alt="search"
            className="absolute top-4 right-4"
          />
        </div>
        <div className="relative">
          <select className="rounded-lg text-[#333435] border border-gray-300 p-4 w-[211px] h-[56px] appearance-none">
            <option value="">Newest first</option>
            <option value="">Oldest first</option>
          </select>
          <CaretDown className="absolute right-5 top-4" size={24} />
        </div>
      </div>
      <div className="flex gap-6 text-lg text-[#637381] mb-8">
        {data.map((item: any) => (
          <button
            onClick={() => setTab(item.name)}
            className={`border-b-[3px] pb-3 font-medium text-[#333435] duration-300 ease-linear ${
              tab === item.name
                ? "border-[#D61924] text-black"
                : "border-white text-[#637381]"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <h1 className="text-[#333435] font-bold text-5xl mb-6">
        {filteredData.name}
      </h1>
      <p className="text-[#637381] mb-12 text-lg">{filteredData.desc}</p>
      <div className="grid grid-cols-3 gap-8 mb-12">
        {filteredData.portofolio.map((item: any) => (
          <div className="shadow-xl rounded-[32px]">
            <img
              src="/assets/porto-project.svg"
              alt="Multimedia Photo 1"
              width={500}
              height={500}
              className="w-full rounded-t-[32px]"
            />
            <div className="py-4 px-6">
              <h4 className="text-[#333435] font-medium mb-2">{item.name}</h4>
              <p className="text-[#333435] mb-1">{item.customer_name}</p>
              <p className="text-[#637381]">
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                }).format(new Date(item.created_at))}{" "}
                - Now
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          ref={loadMore}
          onClick={() => {
            setDefaultDisplay("block");
            loadMore.current!.style.display = "none";
          }}
          className="text-[#637381]"
        >
          Load more
        </button>
        <p className={`${defaultDisplay} text-[#637381] text-center`}>
          All portfolios shown
        </p>
      </div>
    </div>
  );
}

export default MainContent;
