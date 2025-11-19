import React from "react";
import ending1 from '../../../assets/ending1.png'
import ending2 from '../../../assets/ending2.png'

function Endingpage() {
  return (
    <div className="w-full bg-white px-6 py-16 md:px-20">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-center mb-12">
        Learn More About Us
      </h2>

      {/* Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Card 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-md">
            <img
              src={ending1}
              alt="Service"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-2xl  mt-6">
            Our Comprehensive Services
          </h3>

          <p className="text-gray-600 mt-2 px-4">
            Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
            sodales sed nibh ut. Ac fringilla fames eget a aliquet.
          </p>

          <button className="mt-6 bg-[#679F35] text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition">
            LEARN MORE
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-md">
            <img
              src={ending2}
              alt="Community Impact"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-2xl  mt-6">
            Our Community Impact
          </h3>

          <p className="text-gray-600 mt-2 px-4">
            Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
            sodales sed nibh ut. Ac fringilla fames eget a aliquet.
          </p>

          <button className="mt-6 bg-[#679F35] text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition mb-10">
            LEARN MORE
          </button>
        </div>

      </div>
    </div>
  );
}

export default Endingpage;
