
import Navbar from '../../Components/Navbar'

import React from 'react';
import appointment1 from '../../assets/appointment1.png'
import Details from './Details';
import Ending from './Ending';
import Footer from '../../Components/Footer';
import Answer from './answer';

const HeroHelpCenter = () => {
  return (
    <>
    <Navbar/>
    
    <div className="relative w-full h-[800px] overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
          // Placeholder image source matching the theme of the original image (physiotherapy/wellness)
          src={appointment1}
          alt="A person receiving physical therapy or massage on the neck and shoulder"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay to improve text readability */}
        <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
      </div>

      {/* Text Content Container (Centered) */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
        
        {/* Main Heading */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-light text-white mb-6 tracking-tight">
          Help Center
        </h1>
        
        {/* Decorative Line (above text) */}
        <div className="w-24 h-px bg-white/70 my-2"></div>

        {/* Sub-text */}
        <p className="text-lg text-white max-w-xl mx-auto font-normal">
          Odio cras proin proin sit quis fringilla aliquet. Consectetur elementum viverra egestas egestas nulla ullamcorper varius quam.
        </p>

        {/* Decorative Line (below text) */}
        <div className="w-24 h-px bg-white/70 my-2"></div>
      </div>

      {/* White area break at the bottom (optional, but visible in the image crop) */}
      <div className="absolute bottom-0 w-full h-24 bg-white"></div>

    </div>
    <Answer/>
    <Details/>
    <Ending/>
    <Footer/>
    </>
  );
};

export default HeroHelpCenter;