import React from "react";
import { Leaf } from "lucide-react";
import ap1 from '../../../assets/ap1.jpg'
import ap2 from '../../../assets/ap2.jpg'
import ap3 from '../../../assets/ap3.jpg'
import ap4 from '../../../assets/ap4.jpg'
import ap5 from '../../../assets/ap5.jpg'


const Appointment = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className=" mx-auto grid lg:grid-cols-3 gap-1 items-center">
        {/* Left Image Grid */}
        <div className="lg:col-span-2 flex gap-6 justify-center">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {/* Top Image */}
            <div className="relative w-62 h-64 rounded-[28px] overflow-hidden shadow-lg">
              <img
                src={ap3}
                alt="Back Massage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end justify-center pb-3">
                <p className="text-white text-sm font-medium bg-black/40 px-5 py-1 rounded-full">
                  Back Massage
                </p>
              </div>
              <button className="absolute top-3 right-3 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="white"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.933 0-3.611 1.09-4.5 2.708C10.611 4.84 8.933 3.75 7 3.75 4.239 3.75 2 5.765 2 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>

            {/* Bottom Image */}
            <div className="relative w-62 h-57 rounded-[28px] overflow-hidden shadow-lg">
              <img
                src={ap4}
                alt="Aroma Candle"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-3 right-3 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="white"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.933 0-3.611 1.09-4.5 2.708C10.611 4.84 8.933 3.75 7 3.75 4.239 3.75 2 5.765 2 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {/* Top Small Image */}
            <div className="relative w-62 h-24 rounded-b-4xl overflow-hidden shadow-md">
              <img
                src= {ap1}
                alt="Oil Bowl"
                className="w-full h-full object-cover"
              />
              {/* <button className="absolute top-3 right-3  rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="white"
                  className="w-4 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.933 0-3.611 1.09-4.5 2.708C10.611 4.84 8.933 3.75 7 3.75 4.239 3.75 2 5.765 2 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button> */}
            </div>

            {/* Middle Large Image */}
            <div className="relative w-62 h-60 rounded-[28px] overflow-hidden shadow-lg">
              <img
                src={ap2}
                alt="Head Massage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end justify-center pb-3">
                <p className="text-white text-sm font-medium bg-black/40 px-5 py-1 rounded-full">
                  Head Massage
                </p>
              </div>
              <button className="absolute top-3 right-3  rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="white"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.933 0-3.611 1.09-4.5 2.708C10.611 4.84 8.933 3.75 7 3.75 4.239 3.75 2 5.765 2 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>

            {/* Bottom Small Image */}
            <div className="relative w-62 h-28 rounded-[28px] overflow-hidden shadow-md">
              <img
                src={ap5}
                alt="Leaf"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2F5939] mb-4 leading-snug ">
            Authentic Ayurvedic <br /> Massage Therapies...
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Rejuvenate your mind, body, and soul with the healing touch of
            Ayurveda. Our traditional therapies use pure herbal oils and
            age-old techniques to restore balance, relieve stress, and promote
            natural wellness.{" "}
            <Leaf size={18} className="inline ml-1 text-[#2F5939]" />
          </p>

          <div className="flex gap-4">
            <button className="bg-[#2F5939] text-white px-6 py-2 rounded-full hover:bg-[#22452C] transition">
              Make Appointment
            </button>
            <button className="border border-[#2F5939] text-[#2F5939] px-6 py-2 rounded-full hover:bg-[#EAF4E1] transition">
              Learn More..
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
