"use client";

import React from 'react';
import { FaMapMarkerAlt, FaHandHoldingUsd, FaStopwatch, FaMedal } from 'react-icons/fa';

const Hero2nd2 = () => {
  return (
    <div className="bg-[#b885aa] w-full py-20 px-6 lg:px-32 text-center">
      <h2 className="text-white text-4xl lg:text-5xl font-bold mb-16">Why You Should Choose Us</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Card 1 */}
        <div className="bg-orange-300 hover:bg-orange-700 p-10 rounded-2xl flex flex-col items-center justify-center shadow-xl min-h-[250px]">
          <FaMapMarkerAlt className="text-6xl mb-6 text-black" />
          <p className="text-xl font-semibold text-gray-800">Convenient Location</p>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-300  hover:bg-blue-700 p-10 rounded-2xl flex flex-col items-center justify-center shadow-xl min-h-[250px]">
          <FaHandHoldingUsd className="text-6xl mb-6 text-black" />
          <p className="text-xl font-semibold text-gray-800">Affordable Prices</p>
        </div>

        {/* Card 3 */}
        <div className="bg-green-200  hover:bg-green-700 p-10 rounded-2xl flex flex-col items-center justify-center shadow-xl min-h-[250px]">
          <FaStopwatch className="text-6xl mb-6 text-black" />
          <p className="text-xl font-semibold text-gray-800">Quick Service</p>
        </div>

        {/* Card 4 */}
        <div className="bg-pink-300  hover:bg-pink-700 p-10 rounded-2xl flex flex-col items-center justify-center shadow-xl min-h-[250px]">
          <FaMedal className="text-6xl mb-6 text-black" />
          <p className="text-xl font-semibold text-gray-800 text-center">High-Quality<br />Standards</p>
        </div>
      </div>
    </div>
  );
};

export default Hero2nd2;