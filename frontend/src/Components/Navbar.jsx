import React from 'react';
import { Link } from "react-router-dom";
import Group4 from '../assets/Group4.png';

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 shadow-sm bg-white fixed top-0 left-0 w-full z-50 rounded-[30px] h-14 mt-4.5">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-[#3A6B35] font-semibold text-xl h-4">
          <img src={Group4} alt="logo" className="w-8 h-8" />
          <span>MindVeda</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-[20px]">
          <Link to="/" className="hover:text-[#3A6B35] cursor-pointer">Home</Link>
          <Link to="/about" className="hover:text-[#3A6B35] cursor-pointer">About</Link>
          <Link to="/services" className="hover:text-[#3A6B35] cursor-pointer">Services</Link>
          

          <Link to="/products" className="hover:text-[#3A6B35] cursor-pointer">Products</Link>
          <Link to="/pricing" className="hover:text-[#3A6B35] cursor-pointer">Pricing</Link>
          <Link to="/contact" className="hover:text-[#3A6B35] cursor-pointer">Contacts</Link>
           
        </ul>
         <Link to="/appointment" className="border border-[#3A6B35] text-[#679F35] rounded-full px-4 py-1.5 font-semibold hover:bg-[#3A6B35] hover:text-white transition">Make appointment</Link>
        

       

      </nav>
    </>
  );
}

export default Navbar;
