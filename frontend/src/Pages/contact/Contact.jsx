import React from "react";
import contact1 from "../../assets/contact1.png"; // Image file
import Navbar from "../../Components/Navbar";
import Contacthome from "./components/contacthome";
import Statistics from "./components/Statistics";
import Answer from "./components/Answer";
import Map from "./components/Map";
 import Footer from '../../Components/Footer'
function Contact() {
  return (
    <>
    <Navbar/>
    <section className="relative w-full h-[850px]    rounded-xl">
      {/* Background Image */}
      <img
        src={contact1}
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
        <h1 className="text-5xl md:text-5xl font-semibold text-white drop-shadow-lg mb-4 tracking-wide">
          Contact Us
           
        </h1>
       

        <p
        
        className="text-gray-200 text-sm md:text-base max-w-2xl leading-relaxed drop-shadow-md">
          <hr className="border-t border-white my-4" />
          Odio cras proin sit quis fringilla aliquet. Consectetur elementum
          viverra egestas egestas nulla ullamcorper varius quam.
        </p>
      </div>
    </section>
    <Contacthome/>
    <Statistics/>
    <Answer/>
    <Map/>
    <Footer/>

    </>
  );
}

export default Contact;
