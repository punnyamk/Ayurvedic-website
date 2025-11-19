import React from 'react'
import Navbar from '../../Components/Navbar'
import abouthome from '../../assets/abouthome.jpg';
import Aboutus from './Components/Aboutus';
import Ourstory from './Components/Ourstory';
 import Statistics from './Components/Statistics';
 import Working from './Components/Working';
 import Team from './Components/Team';
 import Endingpage from './Components/Endingpage';
 import Footer from '../../Components/Footer'
function Homeabout() {
  return (
    <>
    <Navbar/>

    <section
        className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white relative"
        style={{
          
          backgroundImage: `url(${abouthome})`,

        }}
      >
       

        {/* TEXT CONTENT */}
        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Odio cras proin proin sit quis fringilla aliquet. Consectetur elementum
            viverra egestas egestas nulla ullamcorper varius quam.
          </p>
        </div>
      </section>
      <Aboutus/>
      <Ourstory/>
      <Statistics/>
      <Working/>
      <Team/>
      <Endingpage/>
      <Footer/>
    </>
  )
}

export default Homeabout