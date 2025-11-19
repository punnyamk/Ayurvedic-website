import React from "react";
import serviceending1 from "../../../assets/serviceending1.png"; // Replace with your image path
import Star1 from '../../../assets/Star1.png';

function Ending() {
  return (
    <section className="relative w-full h-[730px] rounded-3xl overflow-hidden mt-12">
      {/* Background Image */}
      <img
        src={serviceending1}
        alt="Wellness Journey"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-4">
        <p className="text-gray-50 text-[10px] tracking-wIDER flex items-center gap-2">
          <img src={Star1} alt="" /> START YOUR JOURNEY
        </p>

        <h2 className="text-3xl md:text-4xl text-white mt-3 leading-snug">
          Begin Your Path to Wellness
        </h2>

        <p className="text-gray-200 text-sm md:text-[15px] max-w-xl leading-relaxed mt-3">
          Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales
          sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra
          purus sed ac ultricies sem nulla.
        </p>

        {/* Buttons stacked vertically */}
        <div className="flex flex-col items-center mt-7 space-y-3">
          <button className="bg-[#caf08a] px-6 py-3 rounded-full text-green-950 hover:bg-[#A6D45D] transition-all duration-300">
            SCHEDULE A CONSULTATION
          </button>

          <button className="bg-neutral-900 text-lime-700 px-6 py-3 rounded-full text-sm  transition-all duration-300">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
}

export default Ending;
