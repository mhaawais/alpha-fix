"use client";

import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt } from "react-icons/fa";

const Hero1 = () => {
  return (
    <div className="bg-[#1c6fb5] w-full flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 py-10">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="https://igadgetdoc.us/assets/img/lp2.webp"
            alt="Broken Phone"
            width={600}
            height={400}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 text-white flex flex-col items-start px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">What We Do</h2>
        {/* <p className="text-lg leading-relaxed mb-6">
          Is your smart gadget not working like it is supposed to? Well, in that case, you have come to the right place.<b> FIX ZONE </b> has a solution to every problem you have with your device. Whether a broken screen on a cell phone is bothering you or your laptop is overheating, we can deal with everything. All you have to do is visit us, and our trained team will take care of the rest. They’ll listen to your problems and give you tailored solutions. So, why wait anymore? Visit us today!
        </p> */}

        <p className='text-lg leading-relaxed mb-6'>
          Is your smart device acting up? Don’t worry — ALPHA FIX is here to help! From cracked screens to laptops that overheat, we handle it all. Just bring your device to us, and our skilled technicians will take care of everything. We’ll listen to your concerns and provide customized solutions that suit your needs.
        </p>

        {/* Call Button */}
        <a
          href="tel:(346) 702-9909"
          className="bg-green-200 text-orange-600 rounded-lg px-6 py-4 flex items-center gap-3 font-semibold shadow-md hover:bg-green-300 transition w-full lg:w-auto"
        >
          <FaPhoneAlt className="text-2xl text-orange-500" />
          <div className="text-left">
            <p className="text-sm text-black">Call us anytime</p>
            <p className="text-lg font-bold">(346) 702-9909</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero1;