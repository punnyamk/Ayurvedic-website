import React from "react";
import pricing2 from '../../../assets/pricing2.png';
import star2 from '../../../assets/star2.png';
import Star1 from '../../../assets/Star1.png';

const values = [
  { title: "Compassion", text: "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut." },
  { title: "Integrity", text: "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut." },
  { title: "Excellence", text: "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut." },
  { title: "Collaboration", text: "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut." },
];

function Value() {
  return (
    <section className="w-full bg-[#E7F1E8] rounded-3xl px-6 md:px-14 py-12 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-medium text-gray-950 tracking-wider flex items-center gap-2">
            <img src={Star1} alt="" /> OUR VALUE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mt-3">
            The MindVeda <br /> Guiding Principles
          </h2>

          {/* VALUES LIST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {values.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-[#79C15D] p-2 rounded-full">
                  <img src={star2} alt="" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE + BADGE */}
        <div className="relative w-full">
          <img
            src={pricing2}
            alt="Massage"
            className="w-full h-[350px] object-cover rounded-[30px]"
          />

          {/* ONE-LINE BADGE */}
          <div className="absolute left-0 -translate-x-1/3 top-10 bg-white rounded-full px-6 py-2 shadow-md flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">25+</span>
            <span className="text-sm text-gray-600">Qualified Professionals</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Value;
