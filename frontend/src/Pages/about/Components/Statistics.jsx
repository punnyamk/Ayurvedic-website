import React from "react";
import yoga from "../../../assets/yoga.png"; // ← replace with your image
import Star1 from '../../../assets/Star1.png' 

function Statistics() {
  return (
    <div className="w-full px-6 md:px-20 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="relative ml-30">
          <img
            src={yoga}
            alt="Meditation"
            className="rounded-3xl w-140  object-cover shadow-md h-130"
          />

         
         
        </div>

        {/* Right Text Section */}
        <div>
          <p className="flex text-[#232323] tracking-[4px] font-semibold text-sm mb-3 gap-2">
            <img src={Star1} alt="" />
            STATISTIC
          </p>

          <h2 className="text-3xl md:text-4xl  mb-4 text-gray-900">
            Mental Health by the Numbers
          </h2>

          <p className="text-gray-600 max-w-md mb-10 leading-relaxed">
            Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
            sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
            placerat viverra purus sed ac ultricies sem nulla.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-10 mt-6">
            <div>
              <h3 className="text-4xl ">1500+</h3>
              <p className="text-gray-500 text-sm tracking-wide mt-1">
                SATISFIED CLIENTS
              </p>
            </div>

            <div>
              <h3 className="text-4xl ">1200+</h3>
              <p className="text-gray-500 text-sm tracking-wide mt-1">
                POSITIVE REVIEWS
              </p>
            </div>

            <div>
              <h3 className="text-4xl ">200+</h3>
              <p className="text-gray-500 text-sm tracking-wide mt-1">
                WORKSHOPS HELD
              </p>
            </div>

            <div>
              <h3 className="text-4xl ">1800+</h3>
              <p className="text-gray-500 text-sm tracking-wide mt-1">
                THERAPY SESSIONS
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Statistics;
