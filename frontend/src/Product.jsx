import React from "react";
import product1 from './assets/product1.png'
import product2 from './assets/product2.png'
import product3 from './assets/product3.png'
import product5 from './assets/product5.png'
import turmeric from "./assets/turmeric.jpg";
import ficon from './assets/ficon.png'


function Product() {
  return (
    <section className="px-8 py-16 bg-white  w-350">
      <div className=" mx-auto grid md:grid-cols-2 gap-50 w-300 ">
        {/* LEFT SIDE - Banner */}
        <div className="relative rounded-3xl ">
          <img
            src={turmeric}
            alt="Turmeric Oil"
            className="w-[900px] h-[720px] object-cover "
          />

          {/* Overlay: Tag Top Left */}
          <div className="absolute top-4 left-4">
            <button className="bg-[#679F35]  text-white text-sm px-4 py-1 rounded-tr-full rounded-bl-full w-40 h-15">
              See All →
            </button>
          </div>

          {/* Overlay: Text Box */}
          <div className="absolute top-10 right-8 bg-white px-5 py-3 rounded-xl shadow-md text-sm leading-tight">
            <p className="text-[#679F35] font-semibold italic flex">Our Favorite  <img src={ficon} alt="" className="w-5 h-5 ml-7 ml-3" /></p> 
            <p className="text-[#679F35] italic">This Season Products</p>
          </div>

          {/* Overlay: Bottom Right Button */}
        <button className="absolute bottom-6 right-0 translate-x-0/3 bg-white px-6 py-2 rounded-tl-2xl h-13 rounded-bl-2xl text-green-700 font-medium shadow hover:bg-green-100 transition mb-10 italic">
  Explore Now
</button>


          {/* Overlay: Bottom Left Text */}
          <p className="absolute bottom-8 left-8 text-green-800 italic text-lg font-medium">
            The herbal choice is a <br /> Healthy choice.
          </p>
        </div>

        {/* RIGHT SIDE - Product Cards */}
        <div className="grid sm:grid-cols-2 gap-16 items-start w-120">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={product1}
              alt="Amrit Kalash Ambrosia Tablets"
              className="w-full h-40 object-contain"
            />
            <h3 className="mt-3 font-semibold text-gray-800 text-lg">
              Amrit Kalash Ambrosia Tablets
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Revolutionary Ayurvedic formulation for holistic wellness.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={product2}
              alt="Murivenna Ayurvedic Oil"
              className="w-full h-40 object-contain"
            />
            <h3 className="mt-3 font-semibold text-gray-800 text-lg">
              Murivenna Ayurvedic Oil
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Expertly crafted oil trusted by Ayurveda practitioners.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={product3}
              alt="Ayurvedic Weight Loss Supplements"
              className="w-full h-40 object-contain"
            />
            <h3 className="mt-3 font-semibold text-gray-800 text-lg">
              Ayurvedic Weight Loss Supplements
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Natural herbs that help manage weight and improve metabolism.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={product5}
              alt="Authentic Ayurvedic Online"
              className="w-full h-40 object-contain"
            />
            <h3 className="mt-3 font-semibold text-gray-800 text-lg">
              Authentic Ayurvedic Online
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Quality herbal products and expert Ayurvedic guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
