"use client";

import React from "react";
import Image from "next/image";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Hero2nd = () => {
  return (
    <div className="bg-[#b37da4] w-full">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 py-12 gap-8">
        
        {/* Left Content */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-8">
            No More Worrying <br /> About Smart Device <br /> Problems
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="tel:(346) 464-2742">
              <button className="bg-[#d6e9da] hover:bg-green-300 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:scale-105 transition">
                <FaPhoneAlt />
                Call Us
              </button>
            </a>
            <a
              href="https://www.google.com/maps/place/Alpha+Fix+%7C+15+Minutes+Repair/@29.5798519,-95.7664605,615m/data=!3m2!1e3!4b1!4m6!3m5!1s0x86411f7faf0dd083:0xcad9aaf3956bf8a4!8m2!3d29.5798519!4d-95.7664605!16s%2Fg%2F11spc720sd!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#d6e9da]  hover:bg-green-300 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:scale-105 transition">
                <FaMapMarkerAlt />
                Get Direction
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] xl:w-[520px] h-auto">
            <Image
              src="https://igadgetdoc.us/assets/img/lp1.webp"
              alt="Broken Devices"
              width={600}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2nd;