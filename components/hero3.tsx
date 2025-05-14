"use client";

import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Hero3 = () => {
  return (
    <div className="bg-[#1c6fb5] w-full px-4 lg:px-20 py-16">
      {/* Top Headings */}
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl lg:text-5xl font-bold mb-8">We Are Just A Call Away</h2>
        <p className="text-white text-lg lg:text-xl">
          If you want to ask any questions, feel free to contact us. Our team will be happy to guide you!
        </p>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
        {/* Map Embed */}
        <div className="w-full lg:w-2/3 h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.972439010181!2d-95.68721000000001!3d29.700124700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dfd3afca5287%3A0xa0b970859946ea50!2sAlpha%20Fix%20%7C%2015%20Minutes%20Repair!5e1!3m2!1sen!2s!4v1747087209293!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Info Box */}
        <div className="w-full lg:w-1/3 bg-green-100 rounded-2xl p-10 shadow-lg min-h-[400px] flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">Contact Info</h2>

          {/* Location Info */}
          <div className="flex items-start mb-8">
            <div className="bg-gray-300 p-3 rounded-full mr-4">
              <FaMapMarkerAlt className="text-xl text-gray-800" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-black">Our Location</h3>
              <p className="text-gray-700">7119 FM 1464, Richmond, TX 77407, United States</p>
            </div>
          </div>

          {/* Phone Info */}
          <div className="flex items-start">
            <div className="bg-gray-300 p-3 rounded-full mr-4">
              <FaPhoneAlt className="text-xl text-gray-800" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-black">Phone Number</h3>
              <a href="tel:(346) 702-9909" className="text-gray-700">
               (346) 702-9909
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;