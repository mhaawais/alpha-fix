"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaPhoneAlt } from "react-icons/fa";

const Header2 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`bg-[#b885aa] flex justify-center items-center px-1 sm:px-2 md:px-6 lg:px-14 py-5 sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className=" bg-white w-full max-w-7xl flex justify-between items-center px-6 sm:px-12 py-1 rounded-bl-[60px] rounded-br-[60px]">
        {/* Logo with scroll-to-top       bg-[#d1e7d7]     */}
        <div className="flex items-center h-16 sm:h-20 w-auto ml-2 sm:ml-4 mr-2 sm:mr-4 pl-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative h-full w-[160px] sm:w-[200px] focus:outline-none"
          >
            <Image
              src="/assets/logo/Alpha-fix.jpg"
              alt="Fix Zone Logo"
              fill
              className="object-left object-contain"
              sizes="(max-width: 768px) 160px, 200px"
              priority
            />
          </button>
        </div>

        {/* Call Us Button */}
        <a href="tel:(346) 464-2742" className="no-underline">
          <button className="bg-[#b885aa] hover:bg-pink-600 text-black font-semibold rounded-full px-5 py-2 sm:py-2.5 text-sm sm:text-base flex items-center gap-2 hover:scale-105 transition whitespace-nowrap">
            <FaPhoneAlt className="inline mr-1" />
            Call Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header2;