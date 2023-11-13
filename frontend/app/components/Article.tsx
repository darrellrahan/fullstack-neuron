import React from "react";
import { raleway } from "../fonts";

function Article({ data }: { data: any }) {
  return (
    <section id="article">
      <div
        className={`bg-[url('/assets/article-bg.svg')] bg-cover bg-no-repeat relative px-16 py-20 text-white ${raleway.className}`}
      >
        <div className="absolute inset-0 opacity-90 mix-blend-multiply bg-gradient-to-br from-red-500 to-rose-800"></div>
        <div className="flex items-center justify-between z-10 relative mb-8">
          <div>
            <h1 className="text-5xl font-bold mb-4">{data.article_title}</h1>
            <p className="text-lg">{data.article_desc}</p>
          </div>
          <button className="px-5 py-3 bg-transparent rounded-lg text-white border-2 border-white font-medium">
            View more
          </button>
        </div>
        <div className="grid grid-cols-4 gap-8 h-[20rem] z-10 relative">
          <div className="h-full overflow-hidden rounded-xl relative">
            <div className="absolute -inset-4 bg-[url('/assets/article-1.svg')] bg-cover bg-no-repeat rounded-xl"></div>
          </div>
          <div className="h-full overflow-hidden rounded-xl relative p-6 flex items-end">
            <div className="z-10">
              <h3 className="font-bold mb-1">
                Rapat leader evaluasi pencapaian OKR 2023
              </h3>
              <p>04 Sep 2023</p>
            </div>
            <div className="absolute -inset-4 bg-[url('/assets/article-2.svg')] bg-cover bg-no-repeat rounded-xl"></div>
            <div className="absolute inset-x-0 bottom-0 h-60 bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_10.42%,rgba(0,0,0,0.72)_70.83%)] rounded-xl"></div>
          </div>
          <div className="h-full overflow-hidden rounded-xl relative p-6 flex items-end">
            <div className="z-10">
              <h3 className="font-bold mb-1">
                Neuron Techno Day 2021 | Gaining Skill to Create Great Code and
                Become Highly Effective Programmer
              </h3>
              <p>03 Sep 2023</p>
            </div>
            <div className="absolute -inset-4 bg-[url('/assets/article-3.svg')] bg-cover bg-no-repeat rounded-xl"></div>
            <div className="absolute inset-x-0 bottom-0 h-60 bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_10.42%,rgba(0,0,0,0.72)_70.83%)] rounded-xl"></div>
          </div>
          <div className="h-full overflow-hidden rounded-xl relative p-6 flex items-end">
            <div className="z-10">
              <h3 className="font-bold mb-1">KECE | Kerja di Cafe</h3>
              <p>08 Oct 2023</p>
            </div>
            <div className="absolute -inset-4 bg-[url('/assets/article-4.svg')] bg-cover bg-no-repeat rounded-xl"></div>
            <div className="absolute inset-x-0 bottom-0 h-60 bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_10.42%,rgba(0,0,0,0.72)_70.83%)] rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Article;
