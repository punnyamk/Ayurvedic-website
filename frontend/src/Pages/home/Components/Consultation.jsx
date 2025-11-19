import React from "react";
import { Quote } from "lucide-react";

import pp1 from "../../../assets/pp1.jpg";
import pp2 from "../../../assets/pp2.png";
import pp3 from "../../../assets/pp3.jpg";
import pp4 from "../../../assets/pp4.png";
import pp5 from "../../../assets/pp5.jpg";
import pp6 from "../../../assets/pp6.png";
import pp7 from "../../../assets/pp7.jpg";
import pp8 from "../../../assets/pp8.png";
import pp9 from "../../../assets/pp9.jpg";
import pp10 from "../../../assets/pp9.jpg";
import pp11 from "../../../assets/pp9.jpg";
import doctor from "../../../assets/doctor.png";
import ppp from "../../../assets/ppp.jpg";
import pppp from "../../../assets/pppp.png";
import consultation from "../../../assets/consultation.jpg"; // add your consultation image

function Testimonials() {
  const people = [
    { img: pp4, top: "10%", left: "50%", size: "w-26 h-26" },
    { img: pp2, top: "10%", left: "20%", size: "w-22 h-23" },
    { img: pp5, top: "5%", left: "70%", size: "w-18 h-18" },
    { img: pp8, top: "32%", left: "70%", size: "w-20 h-20" },
    { img: pp6, top: "30%", left: "35%", size: "w-27 h-26" },
    { img: pp7, top: "35%", left: "55%", size: "w-21 h-21" },
    { img: pp3, top: "-2%", left: "34%", size: "w-22 h-22" },
    { img: doctor, top: "55%", left: "55%", size: "w-17 h-17" },
    { img: pp1, top: "28%", left: "14%", size: "w-18 h-18" },
    { img: pp10, top: "54%", left: "40%", size: "w-18 h-18" },
    { img: ppp, top: "64%", left: "70%", size: "w-16 h-16" },
  ];

  return (
    <div className="space-y-20">
      {/* ========================= TESTIMONIALS SECTION ========================= */}
      <section className="bg-[#9FDC5E] py-20 px-6 md:px-20 rounded-[40px] relative overflow-hidden m-8">
        <div className="grid md:grid-cols-2 items-center gap-12 relative">
          {/* LEFT SIDE */}
          <div className="relative flex justify-center items-center min-h-[500px]">
            {/* Abstract bottom-left shapes */}
            <div className="absolute bg-[#679F35] w-[150px] h-[260px] rounded-2xl rounded-tr-[90px] rounded-bl-[90px] bottom-0 left-0 pt-20"></div>
            <div className="absolute bg-[#679F35] w-[130px] h-[120px] rounded-xl rounded-tl-[50px] rounded-br-[50px] bottom-10 left-40 mt-[25px]"></div>

            {/* Floating circular profile images */}
            {people.map((p, i) => (
              <img
                key={i}
                src={p.img}
                alt="person"
                className={`${p.size} rounded-full object-cover border-4 border-[#9DDE8B] shadow-lg absolute`}
                style={{ top: p.top, left: p.left }}
              />
            ))}
          </div>

          {/* RIGHT SIDE - Text + Card */}
          <div>
            <h4 className="uppercase text-[#558B2F] font-bold mb-2 tracking-wide">
              Testimonials
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug mb-8">
              Check what our patients say about us
            </h2>

            <div className="bg-[#c8eb9a] p-6 md:p-8 rounded-2xl text-gray-800 shadow-lg">
              <Quote
  className="text-white mb-3 transform -scale-x-100"
  size={28}
/>

              <p className="text-sm md:text-base leading-relaxed mb-4">
                The latest equipment, high-precision digital technologies and
                the best achievements of modern world medicine have allowed us
                to create a completely new, unprecedented level of painless,
                safe and comfortable treatment for patients.
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={pppp}
                  alt="Dr. Irina Petrova"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    Dr. Irina Petrova
                  </p>
                  <div className="text-yellow-500 text-sm">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= FREE CONSULTATION SECTION ========================= */}
      <div className="bg-[#E8F8D8] rounded-3xl p-10 md:p-16 grid md:grid-cols-2 items-center gap-10">
        {/* Left Image */}
        <div>
          <img
            src={consultation}
            alt="Consultation"
            className="rounded-2xl w-full h-[400px] object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Free Consultation
          </h2>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="I’m interested in*"
              className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Email*"
              className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </form>

          <button className="mt-6 bg-[#63B84A] hover:bg-[#56a73d] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition w-170">
            Get a Free Consultation →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
