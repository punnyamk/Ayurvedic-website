import React from "react";
import Icon from '../../../assets/Icon.png'

function Ourstory() {
  return (
    <div className="w-full bg-white py-16 px-5 md:px-20 ">
      {/* Heading */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Our Story
        </h2>

        <button className="bg-[#9FDC5E] text-white px-6 py-2 rounded-full font-medium text-sm ">
          LEARN MORE
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-[#F0F6ED] rounded-[40px] px-8 py-10 space-y-12 ">

        {/* ----- Row 1 ----- */}
        <div className="flex items-start justify-between border-b border-gray-300 pb-8 w-300">
          <h3 className="text-2xl font-medium w-20 mr-40 text-gray-700">2010</h3>

          <div className="flex-1 px-5">
            <h4 className="text-3xl font-medium mb-4">Inception of MindVeda</h4>
            <p className="text-gray-600 leading-relaxed text-[20px] ">
              Zenlift was founded in 2010 with a mission to revolutionize mental
              health care by providing compassionate and personalized services to our
              community. Our journey began with a vision to create a safe space for
              individuals to prioritize their mental well-being.
              
            </p>
          </div>

          <button className="w-10 h-10 flex items-center justify-center bg-[#C8EEA0] rounded-full ml-30">
           <img src={Icon} alt="" />
          </button>
        </div>

        {/* ----- Row 2 ----- */}
        <div className="flex items-start justify-between border-b border-gray-300 pb-8 w-300">
          <h3 className="text-2xl font-medium w-20 mr-40 text-gray-700">2017</h3>

          <div className="flex-1 px-5">
            <h4 className="text-3xl font-medium mb-4">Inception of MindVeda</h4>
            <p className="text-gray-600 leading-relaxed text-[20px] ">
             In 2013, we expanded our offerings to include a comprehensive range of therapy sessions, psychiatric consultations, and mindfulness workshops. This expansion allowed us to better meet the diverse needs of our clients and promote holistic mental wellness.
              
            </p>
          </div>

          <button className="w-10 h-10 flex items-center justify-center bg-[#C8EEA0] rounded-full ml-30">
          <img src={Icon} alt="" />
          </button>
        </div>
       <div className="flex items-start justify-between border-b border-gray-300 pb-8 w-300">
          <h3 className="text-2xl font-medium w-20 mr-40 text-gray-700">2020</h3>

          <div className="flex-1 px-5">
            <h4 className="text-3xl font-medium mb-4">Inception of MindVeda</h4>
            <p className="text-gray-600 leading-relaxed text-[20px] ">
              "In 2020, Zenlift embraced digital innovation by introducing teletherapy services, providing convenient and accessible mental health care to individuals in need. This step forward reflected our commitment to evolving with the times while maintaining our core values of empathy and effectiveness.
              
            </p>
          </div>

          <button className="w-10 h-10 flex items-center justify-center bg-[#C8EEA0] rounded-full ml-30">
           <img src={Icon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ourstory;
