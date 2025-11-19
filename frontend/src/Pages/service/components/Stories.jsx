import React from "react";
import { Play } from "lucide-react";
import stories1 from "../../../assets/stories1.png"; 
import stories2 from "../../../assets/stories2.png"; 
import playicon from '../../../assets/playicon.png'

const stories = [
  {
    title: "Overcoming Anxiety and Finding Peace",
    name: "Sarah Johnson",
    role: "Marketing Manager",
    img: stories1,
  },
  {
    title: "Strengthening Our Relationship",
    name: "Emily and James Parker",
    role: "Teacher and Graphic Designer",
    img: stories2,
  },
];

function Stories() {
  return (
    <section className="w-full px-6 md:px-14 py-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl md:text-4xl  text-gray-900">
          Real Stories, Real Impact
        </h2>

        <button className="bg-black text-lime-500 px-5 py-2 rounded-full text-sm hover:bg-[#3A6B35] transition-all duration-300">
          SEE ALL
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT COLUMN */}
        <div>
          {/* Small Title Row */}
          <div className="flex items-center gap-2 mb-5">
            <img src={playicon} alt="" />
            <p className="font-medium text-gray-800 text-[15px]">
              Overcoming Anxiety and Finding Peace
            </p>
          </div>

          {/* Story Card */}
          <div className="relative rounded-[22px] overflow-hidden">
            <img
              src={stories1}
              alt="Story 1"
              className="w-full h-[260px] md:h-[300px] object-cover"
            />
            {/* Gradient Overlay */}
           

            {/* Text */}
            <div className="absolute bottom-5 left-130 text-white">
              <h4 className="text-lg font-semibold">Sarah Johnson</h4>
              <p className="text-sm">Marketing Manager</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <div className="relative rounded-[22px] overflow-hidden mb-5">
            <img
              src={stories2}
              alt="Story 2"
              className="w-full h-[260px] md:h-[300px] object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#C5DBB5]/60 via-transparent"></div>

            <div className="absolute bottom-5 left-110 text-white">
              <h4 className="text-lg font-semibold">Emily and James Parker</h4>
              <p className="text-sm">Teacher and Graphic Designer</p>
            </div>
          </div>

          {/* Small Title Row */}
          <div className="flex items-center gap-2">
            <img src={playicon} alt="" />
            <p className="font-medium text-gray-800 text-[15px]">
              Strengthening Our Relationship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;
