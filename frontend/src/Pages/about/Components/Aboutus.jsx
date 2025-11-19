import React from "react";
import { Sparkles } from "lucide-react";
import Star1 from '../../../assets/Star1.png'
import  aboutimg  from '../../../assets/aboutimg.jpg';
import logo1 from '../../../assets/logo1.png';
import logo2 from '../../../assets/logo2.png';
import logo3 from '../../../assets/logo3.png';
import logo4 from '../../../assets/logo4.png';
import logo5 from '../../../assets/logo5.png';

function Aboutus() {
  return (
    <div className="px-6 md:px-20 lg:px-28 py-16 bg-white ">

      {/* GRID WRAPPER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pl-26">

        {/* ---------------- LEFT SIDE ---------------- */}
        <div>

          {/* ABOUT TITLE */}
          <p className="text-black flex items-center gap-2">
            <img src={Star1} alt="" />
             ABOUT US
          </p>

          <h1 className="text-4xl md:text-5xl  leading-tight text-gray-900 mt-3 mb-10">
            Transforming Lives <br /> Through Care
          </h1>

          {/* CEO CARD */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-sm  flex flex-col md:flex-row items-start gap-6 mb-12 h-80">

            {/* Image */}
            <img
              src={aboutimg}
              alt="CEO"
              className="w-full  rounded-xl object-cover h-80"
            />

            {/* Text */}
            <div>
              <h2 className="text-2xl   mb-3 pt-8 pl-8">
                Welcome Message from Our CEO
              </h2>

              <p className="text-gray-400  leading-relaxed mb-4 pl-8 pr-8">
               Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.
              </p>

              <p className=" text-[20px]  text-gray-900 pl-8">Joseph Doolenan</p>
              <p className="text-[#6BA50F]  pl-8">CEO, Zenlift</p>
            </div>
          </div>

          {/* LOGO SECTION */}
          <div className="flex flex-wrap items-center justify-start gap-30 mt-40 w-300">
            <img src={logo1} alt=""  className="w-35" /> 
             <img src={logo2} alt="" className="w-35" /> 
              <img src={logo3} alt=""className="w-35"  /> 
               <img src={logo4} alt="" className="w-35" />  
               <img src={logo5} alt=""className="w-35"  /> 
          </div>
        </div>

        {/* ---------------- RIGHT SIDE ---------------- */}
        <div>
          {/* Mission Title Box */}
          <div className="bg-[#F0FFD9] px-6 py-4 rounded-xl inline-block mb-8 w-150 pb-6 pt-6 pl-13">
            <h3 className=" font-semibold text-3xl text-gray-800">Our Mission</h3>
          </div>

          {/* Mission Bullet Points */}
          <div className="space-y-10">

            {/* 1 */}
            <div>
              <p className="flex items-center gap-2  text-2xl text-gray-900">
                <img src={Star1} alt="" />
                Promoting Mental Wellness
              </p>
              <p className="text-gray-400 mt-2 leading-relaxed w-150">
               
                Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.
              </p>
            </div>

            {/* 2 */}
            <div>
              <p className="flex items-center gap-2 text-2xl text-gray-900">
               <img src={Star1} alt="" />
                Empowering Individuals
              </p>
              <p className="text-gray-400 mt-2 leading-relaxed w-150">
               
                Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.
              </p>
            </div>

            {/* 3 */}
            <div>
              <p className="flex items-center gap-2 text-2xl text-gray-900">
                <img src={Star1} alt="" />
                Supporting Personal Growth
              </p>
              <p className="text-gray-400 mt-2 leading-relaxed w-150">
               
                Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
