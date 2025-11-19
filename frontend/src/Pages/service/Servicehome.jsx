import React from "react";
import Navbar from "../../Components/Navbar";
import pricing1 from "../../assets/pricing1.png"; // <-- your yoga image
import Packages from "./components/Packages";
import Value from "./components/Value";
import Trust from "./components/Trust";
import Working from "./components/Working";
import Stories from "./components/Stories";
import Ending from "./components/Ending";
import Footer from "../../Components/Footer";
function Servicehome() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[900px]">
        {/* Background Image */}
        <img
          src={pricing1}
          alt="Pricing background"
          className="absolute inset-0 w-full h-full object-cover"
        />

       

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-semibold mb-4">Pricing</h1>

          <div className="w-24 h-[2px] bg-white mb-4"></div>

          <p className="max-w-2xl text-lg leading-relaxed">
            Odio cras proin proin sit quis fringilla aliquet. Consectetur elementum
            viverra egestas egestas nulla ullamcorper varius quam.
          </p>
        </div>
      </div>
      <Packages/>
      <Value/>
      <Trust/>
      <Working/>
      <Stories/>
      <Ending/>
      <Footer/>
    </>
  );
}

export default Servicehome;
