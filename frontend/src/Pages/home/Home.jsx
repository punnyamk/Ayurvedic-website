import React from "react";
import { PlayCircle, Leaf } from "lucide-react";
import homenew from "../../assets/homenew.png";

import Group from '../../assets/Group4.png'
import hicon1 from '../../assets/hicon1.png';
import hicon2 from '../../assets/hicon2.jpg'
import Navbar from "../../Components/Navbar";

import Appointment from '../../Pages/home/Components/Appoinment'
import Treatment from '../../Pages/home/Components/Treatment'
import About from '../../Pages/home/Components/About'
import Product from '../../Pages/home/Components/Product'
import Consultation from '../../Pages/home/Components/Consultation'
import Service from '../../Pages/home/Components/Service'
import Endingpage from '../../Pages/home/Components/Endingpage'

const Home = () => {
  return (
    <>
    <div className="w-full font-sans text-gray-800">
     <Navbar/>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start px-6 md:px-16 overflow-hidden">
        {/* Mirrored Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transform -scale-x-100"
          style={{
            backgroundImage: `url(${homenew})`,
          }}
        ></div>

       

        {/* Hero Content */}
        <div className="relative z-10 max-w-xl text-white mt-20 md:mt-0">
          <div className="flex w-58 ml-280  h-8 gap-2 ">
            <img src={hicon2} alt="" className="w-12 rounded-full h-12 border border-amber-50 mb-2 " />
           
            <h1>Watch Our Story</h1>
             <img src={ hicon1} alt="" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-md w-128 mb-9">
            Your Path to <br /> Mental Wellness Starts Here
          </h1>
            <hr className="border-t border-gray-300 mt-4" />

          <p className="text-gray-100 mb-6 leading-relaxed drop-shadow-md">
            Experience natural healing and wellness at our Ayurvedic clinic —
            where traditional therapies meet modern care for a healthier you.
          </p>
        
          <div className="flex gap-4 items-center">
            <button className="bg-[#D8FF9A] text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-[#8FCB5D] transition">
              LEARN MORE
            </button>

            <button className="flex items-center gap-2 text-white hover:text-[#A8D97F] transition">
            
            </button>
          </div>
        </div>
      </section>

      {/* Logo Strip */}
      <div className="bg-[#679F3582] py-3 flex justify-center items-center space-x-4 overflow-hidden h-10 -7">
        {Array(5)
          .fill("MindVeda")
          .map((text, i) => (
            <div
              key={i}
              className="flex items-center space-x-1 text-[#679F3580]  text-5xl"
            >
              <img src={Group} alt="" />
              <span>{text}</span>
            </div>
          ))}
      </div>
    </div>

   <Appointment/>
         <Treatment/>
         <About/>
         <Product/>
         <Consultation/>
         <Service/>
         <Endingpage/>
    </>
  );
};

export default Home;
