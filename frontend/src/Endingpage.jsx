import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Group from './assets/Group.png'

// Replace with your actual image paths

import logoIcon from './assets/home.png';
import endingpage from './assets/endingpage.png'

function Endingpage() {
  return (
    <div className="font-sans text-gray-800 bg-white overflow-hidden">
      
      {/* 🌿 Hero Section */}
      <section
        className="relative flex items-center justify-start h-[70vh] bg-cover bg-center px-6 md:px-16 lg:px-28"
        style={{ backgroundImage: `url(${endingpage})` }}
      >
        {/* <div className="relative z-10 max-w-lg text-white">
          <p className="text-green-200 text-lg md:text-xl italic font-light mb-2">
            100% <span className="text-green-400">Natural</span>
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-snug mb-4">
            Discover Our <br /> Skincare Products
          </h1>
          <p className="text-base md:text-lg font-light mb-8">
            Made using clean, Natural ingredients
          </p>
          <button className="bg-white text-green-600 font-medium px-6 py-3 rounded-full shadow-md flex items-center hover:bg-gray-100 transition duration-300">
            Discover Now
            <span className="ml-2 text-lg">→</span>
          </button>
        </div> */}
      </section>

      {/* 🌱 Footer Section */}
      <footer className="bg-[#DDEADE] pt-16 pb-6 rounded-t-[60px] -mt-12 relative z-20 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={Group} alt="Mindveda Logo" className="w-8 h-8 mr-2" />
              <span className="text-2xl font-semibold text-[#679F35]">Mindveda</span>
            </div>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Feel free to call us in working hours Mon - Fri {`{8:00 - 16.00}`}. 
              Our team will be happy to help answer your queries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-[#6BA50F] flex items-center justify-center hover:bg-green-600 transition">
                <FaFacebookF className="text-white text-sm" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#6BA50F] flex items-center justify-center hover:bg-green-600 transition">
                <FaTwitter className="text-white text-sm" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#6BA50F] flex items-center justify-center hover:bg-green-600 transition">
                <FaLinkedinIn className="text-white text-sm" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#6BA50F] flex items-center justify-center hover:bg-green-600 transition">
                <FaInstagram className="text-white text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800">Company</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-green-700 transition">Home</a></li>
              <li><a href="#" className="hover:text-green-700 transition">About Us</a></li>
              <li><a href="#" className="hover:text-green-700 transition">Courses</a></li>
              <li><a href="#" className="hover:text-green-700 transition">Programs</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800">Services</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-green-700 transition">Individual Therapy</a></li>
              <li><a href="#" className="hover:text-green-700 transition">Group Therapy</a></li>
              <li><a href="#" className="hover:text-green-700 transition">Family Counseling</a></li>
              <li><a href="#" className="hover:text-green-700 transition">Couples Counseling</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800">Subscribe To Newsletter</h4>
            <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-2 lg:space-x-0 lg:space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto lg:w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700"
              />
              <button className="bg-[#C9FF70] text-gray-900 px-6 py-3 rounded-full shadow-md hover:bg-[#b4ff4b] transition font-semibold">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-12 pt-6 text-center text-gray-500 text-sm">
          Copyright © 2026 Mindveda
        </div>
      </footer>
    </div>
  );
}

export default Endingpage;
