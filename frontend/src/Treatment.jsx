import React from "react";
import { ArrowRight } from "lucide-react";
import ayur1 from "./assets/ayur1.jpg";
import Frame1 from "./assets/Frame1.png";
import frame2 from "./assets/frame2.jpg";
import frame3 from "./assets/frame3.jpg";
import Frame4 from "./assets/Frame4.jpg";
import dental1 from "./assets/dental1.png";
import dental2 from "./assets/dental2.png";
import dental3 from "./assets/dental3.png";
import dental4 from "./assets/dental4.png";

const treatments = [
  {
    title: "Stress Management",
    desc: "Find balance and calm with effective stress management techniques.",
    img: Frame1,
    icon: dental1,
  },
  {
    title: "Weight Management",
    desc: "Achieve a healthy balance through proper diet, exercise, and lifestyle habits.",
    img: frame2,
    icon: dental2,
  },
  {
    title: "Postnatal Care",
    desc: "Comprehensive care for mothers after childbirth to ensure recovery and nourishment.",
    img: frame3,
    icon: dental3,
  },
  {
    title: "Panchakarma Detoxification",
    desc: "Ancient Ayurvedic cleansing therapy that detoxifies the body naturally.",
    img: Frame4,
    icon: dental4,
  },
];

const Treatment = () => {
  return (
    <section className="bg-[#D4FFA66E] rounded-3xl py-16">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-10 px-9">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#679F35]">
          Best Ayurvedic Treatment
        </h2>
        <button className="flex items-center gap-2 bg-[#679F35] text-white px-5 py-2 rounded-full hover:bg-[#2f522c] transition text-sm">
          Make An Appointment <ArrowRight size={16} />
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-9">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-2 mb-3">
              <img
                src={treatment.icon}
                alt={treatment.title + " icon"}
                className="w-6 h-6 object-contain"
              />
              <h3 className="text-md font-semibold text-[#3A6B35] ">
                {treatment.title}
              </h3>
            
            </div>
 <hr className="border-t-1 border-gray-600 mb-4 w-full" />
            {/* Description */}
            <p className="text-gray-500 text-sm mb-4  pb-4">
              {treatment.desc}{" "}
              <span className="text-[#4f9ede] font-medium">More</span>
            </p>

            {/* Image */}
            <img
              src={treatment.img}
              alt={treatment.title}
              className="rounded-xl h-48 w-full object-cover mb-4"
            />

            {/* Button */}
            <button className="flex items-center gap-2 text-[#327ceb] font-medium text-sm hover:underline mt-auto">
              Make An Appointment <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Wellness Banner */}
      <div className="relative mt-16 overflow-hidden">
        <img
          src={ayur1}
          alt="Wellness"
          className="w-full h-[800px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <p className="text-sm text-white tracking-widest mb-2">
            START YOUR JOURNEY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Begin Your Path to Wellness
          </h2>
          <p className="text-gray-200 max-w-xl mb-6 text-sm md:text-base">
            Vulpulate bibendum erat morbi interdum sit amet gravida sociis sed
            nibh. At eget amet gravida egestas amet eu purus sed eros sem nulla.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#D8FF9A] text-green-900 px-6 py-2 rounded-full font-medium hover:bg-[#aee0a1] transition pl-10">
              SCHEDULE A CONSULTATION
            </button>
          </div>
          <button className="bg-black text-green-400 px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition mt-4">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Treatment;
