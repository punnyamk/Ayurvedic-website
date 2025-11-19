import React from "react";
import { Linkedin } from "lucide-react";
import team1 from "../../../assets/team1.jpg";
import team2 from "../../../assets/team2.jpg";
import team3 from "../../../assets/team3.jpg";
import Star1 from '../../../assets/Star1.png' 
import linkdin from '../../../assets/linkdin.png'

function Team() {
  return (
    <div className="w-full bg-white px-6 py-20 md:px-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
        <div>
          <p className="text-sm font-medium text-green-600 flex items-center gap-2">
            <img src={Star1} alt="" />
            OUR TEAM
          </p>

          <h2 className="text-4xl md:text-5xl  mt-3 leading-tight">
            Team of Compassionate <br /> Experts
          </h2>
        </div>

        <button className="   bg-[#9FDC5E] text-white px-3 py-2 rounded-full shadow-md hover:bg-green-600 transition">
          JOIN OUR TEAM
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Card 1 */}
        <div className="flex flex-col">
          <div className="w-[400px] h-[480px] rounded-2xl border shadow-sm overflow-hidden">
            <img src={team1} className="w-full h-full object-cover object-top" alt="Team" />
          </div>

          {/* Name + Icon Row */}
          <div className="flex items-center justify-between mt-4">
            <div>
              <h3 className="text-xl font-semibold">Militan Parker</h3>
              <p className="text-sm text-gray-500">Co-Founder</p>
            </div>

            <div className=" flex items-center justify-center rounded-full">
          <img src={linkdin} alt="" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col">
          <div className="w-[400px] h-[480px] rounded-2xl border shadow-sm overflow-hidden">
            <img src={team2} className="w-[600px] h-full object-cover " alt="Team" />
          </div>

          {/* Name + Icon Row */}
          <div className="flex items-center justify-between mt-4">
            <div>
              <h3 className="text-xl font-semibold">Renee Wilkinson</h3>
              <p className="text-sm text-gray-500">Clinical Psychologist</p>
            </div>

            <div className=" flex items-center justify-center rounded-full">
            <img src={linkdin} alt="" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col">
          <div className="w-[400px] h-[480px] rounded-2xl border shadow-sm overflow-hidden">
            <img src={team3} className="w-[550px] h-full object-cover " alt="Team" />
          </div>

          {/* Name + Icon Row */}
          <div className="flex items-center justify-between mt-4">
            <div>
              <h3 className="text-xl font-semibold">Wilbert Larkin</h3>
              <p className="text-sm text-gray-500">Clinical Psychologist</p>
            </div>

            <div className="  flex items-center justify-center rounded-full">
              <img src={linkdin} alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Team;
