import React from 'react';

import Footer from '../../../Components/Footer';



// import logoIcon from './assets/home.png';
import endingpage from '../../../assets/endingpage.png'

function Endingpage() {
  return (
   <>

    <div className="font-sans text-gray-800 bg-white overflow-hidden">
      
      {/* 🌿 Hero Section */}
      <section
        className="relative flex items-center justify-start h-[70vh] bg-cover bg-center px-6 md:px-16 lg:px-28"
        style={{ backgroundImage: `url(${endingpage})` }}
      >
        {/* <div className="relative z-10 max-w-lg text-white">
          <p className="text-green-200 text-lg md:text-xl italic font-light mb-2">
            100% <span className="text-green-400">Natural</span>
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-snug mb-4">
            Discover Our <br /> Skincare Products
          </h1>
          <p className="text-base md:text-lg font-light mb-8">
            Made using clean, Natural ingredients
          </p>
          <button className="bg-white text-green-600 font-medium px-6 py-3 rounded-full shadow-md flex items-center hover:bg-gray-100 transition duration-300">
            Discover Now
            <span className="ml-2 text-lg">→</span>
          </button>
        </div> */}
      </section>

      
     
    </div>
    <Footer/>
    </>
  );
}

export default Endingpage;
