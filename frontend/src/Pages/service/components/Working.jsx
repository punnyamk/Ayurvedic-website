import React from "react";
import yoga from "../../../assets/yoga.png";
import workingimg from '../../../assets/workingimg.jpg'
import star2 from '../../../assets/star2.png'
import star3 from '../../../assets/star3.png'
import star4 from '../../../assets/star4.png'
import star5 from '../../../assets/star5.png'
import arrow from '../../../assets/arrow.png'
import Star1 from '../../../assets/Star1.png'
import working2 from '../../../assets/working2.png'



function Working() {
  return (
    <div className="bg-[#DDEADE] rounded-3xl p-10 md:p-16">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center ml-35">
        {/* Left Text */}
        <div>
          <p className="text-sm tracking-widest text-gray-700 flex items-center gap-2">
            <img src={Star1} alt="" /> HOW IT WORKS
          </p>

          <h2 className="text-4xl font-semibold mt-3 leading-snug text-gray-900">
            Understanding Our <br /> Approach
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
            sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
            placerat viverra purus sed ac ultricies sem nulla.
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img
  src={working2}
  alt="therapy"
  className="rounded-xl w-full max-w-3xl h-70 object-cover object-top mr-30"
/>

        </div>
      </div>

      {/* Steps Section */}
      <div className="mt-16 grid md:grid-cols-4 text-center gap-10">
        
        {/* STEP 1 */}
        <div>
          <div className="w-14 h-14 bg-[#6BA50F] text-white flex items-center justify-center rounded-full mx-auto">
            <img src={star2} alt="" />
            
          </div>
          <img src={arrow} alt=""  className="ml-85"/>
          <p className="text-xs text-gray-500 mt-3 tracking-[2px]">STEP 1</p>
          <p className="mt-2 font-medium text-gray-900">
            Consultation and <br /> Assessment
          </p>

        </div>

        {/* STEP 2 */}
        <div>
          <div className="w-14 h-14 bg-[#6BA50F] text-white flex items-center justify-center rounded-full mx-auto">
            <img src={star3} alt="" />
          </div>
          <img src={arrow} alt=""  className="ml-85"/>
          <p className="text-xs text-gray-500 mt-3 tracking-[2px]">STEP 2</p>
          <p className="mt-2 font-medium text-gray-900">
            Personalized <br /> Treatment Plan
          </p>
        </div>

        {/* STEP 3 */}
        <div>
          <div className="w-14 h-14 bg-[#6BA50F] text-white flex items-center justify-center rounded-full mx-auto">
            <img src={star4} alt="" />
          </div>
          <img src={arrow} alt=""  className="ml-85"/>
          <p className="text-xs text-gray-500 mt-3 tracking-[2px]">STEP 3</p>
          <p className="mt-2 font-medium text-gray-900">
            Therapeutic <br /> Interventions
          </p>
        </div>

        {/* STEP 4 */}
        <div>
          <div className="w-14 h-14 bg-[#6BA50F] text-white flex items-center justify-center rounded-full mx-auto">
          <img src={star5} alt="" />
          </div>
          <img  alt=""  className="ml-85"/>
          <p className="text-xs text-gray-500 mt-3 tracking-[2px]">STEP 4</p>
          <p className="mt-2 font-medium text-gray-900">
            Ongoing Support and <br /> Progress
          </p>
        </div>
      </div>
    </div>
  );
}

export default Working;
