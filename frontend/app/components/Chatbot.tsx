"use client";

import { X } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useState } from "react";

function Chatbot() {
  const [className, setClassName] = useState("w-0 h-0 -bottom-32 -right-32");

  return (
    <section id="chatbot">
      <button
        onClick={() => setClassName("w-[450px] h-[550px] bottom-8 right-16")}
        className="fixed bottom-8 right-16 z-50 w-[78px] h-[78px] bg-white rounded-full flex items-center justify-center shadow-lg"
      >
        <Image src="/assets/chatbot.svg" alt="chatbot" width={40} height={40} />
      </button>
      <div
        className={`fixed z-[9999] bg-[#F1F5F8] rounded-2xl p-4 shadow-lg duration-300 ease-linear ${className}`}
      >
        <div className="shadow rounded-2xl mb-4">
          <div className="p-4 bg-white rounded-t-2xl flex justify-between items-start z-20 relative">
            <div className="flex gap-4 items-center">
              <Image
                src="/assets/neubot.svg"
                alt="neubot"
                width={60}
                height={60}
              />
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#11D78F] rounded-full"></div>
                  <span className="font-bold">Neubot</span>
                </div>
                <p className="text-[#919EAB] text-sm">
                  You are connected with NeuBot
                </p>
              </div>
            </div>
            <button
              onClick={() => setClassName("w-0 h-0 -bottom-32 -right-32")}
            >
              <X size={20} color="#919EAB" weight="bold" />
            </button>
          </div>
          <div className="p-2 text-center bg-[#919EAB10] rounded-b-2xl text-[#637381] text-sm z-20 relative">
            Alternate contact via Whatsapp (+62) 85159380018
          </div>
        </div>
        <div className="w-[300px] bg-white z-20 relative rounded-tl-xl rounded-tr-xl rounded-br-xl shadow px-6 py-5">
          <p className="mb-1">
            Neubot is here,
            <br />
            What can I help you with?
          </p>
          <p className="text-[#919EAB]">08.24 AM</p>
        </div>
        <input
          type="text"
          className="absolute bottom-0 z-20 py-4 inset-x-0 h-[72px] bg-white rounded-b-2xl outline-none pl-6 pr-20"
          placeholder="Type your message"
        />
        <button className="absolute bottom-3 right-4 z-30 w-[48px] h-[48px] bg-[#D61924] rounded-full flex items-center justify-center">
          <Image
            src="/assets/submit-chatbot.svg"
            alt="send"
            width={24}
            height={24}
          />
        </button>
        <div className="absolute inset-0 bg-[url('/assets/doodles.svg')] bg-cover"></div>
      </div>
    </section>
  );
}

export default Chatbot;
