import React from "react";
import { Check } from "lucide-react";
import pricing2 from '../../../assets/pricing2.png'
import pricing3 from '../../../assets/pricing3.png'
import Star1 from '../../../assets/Star1.png'
import working2 from '../../../assets/working2.png'
const points = [
  "Expert Team of Professionals",
  "Personalized Treatment Plans",
  "Holistic Approach to Wellness",
  "Comprehensive Range of Services",
];

function Trust() {
  return (
    <section className="w-full bg-white rounded-3xl px-6 md:px-14 py-14 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT — IMAGE BLOCK */}
        <div className="relative">
          <img
            src={pricing3}
            alt="Therapy"
            className="w-full h-[450px]  object-cover object-top rounded-[30px]"
          />
          {/* Soft green gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#C5DBB5]/60 via-transparent rounded-b-[30px]"></div>
        </div>

        {/* RIGHT — CONTENT BLOCK */}
        <div>
          <p className="text-sm font-medium text-black tracking-wider flex items-center gap-2">
             <img src={Star1} alt="" />
            WHY CHOOSE US
          </p>
         

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mt-3">
            Why Trust Us with <br /> Your Mental Health
          </h2>

          <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mt-3 mb-6 pr-2">
            Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
            sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
            placerat viverra purus sed ac ultricies sem nulla.
          </p>

          <ul className="space-y-3 mb-8">
            {points.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check size={18} className="text-[#6EC174] mt-[2px]" />
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <button className="bg-black text-lime-500 px-7 py-3 rounded-full text-sm font-medium hover:bg-[#3A6B35] transition-all duration-300">
            GET STARTED TODAY
          </button>
        </div>
      </div>
    </section>
  );
}

export default Trust;
