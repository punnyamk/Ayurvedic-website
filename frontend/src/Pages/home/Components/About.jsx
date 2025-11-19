import React from "react";
import { Leaf, Truck, ShieldCheck, UserCheck, Sprout } from "lucide-react";
import pd1 from '../../../assets/pd1.jpg';
import pd2 from '../../../assets/pd2.jpg';
import pd3 from '../../../assets/pd3.jpg';
import pd4 from '../../../assets/pd4.jpg';
import ab1 from '../../../assets/ab1.png'
import ab2 from '../../../assets/ab2.png'
import ab3 from '../../../assets/ab3.png'
import ab4 from '../../../assets/ab4.png'
import ab5 from '../../../assets/ab5.png'
import ab6 from '../../../assets/ab6.png'

const products = [
  { title: "SkinCare Products", img: pd1 },
  { title: "HairCare Products", img: pd2 },
  { title: "Mother & BabyCare Products", img: pd3 },
  { title: "HealthCare Products", img: pd4 },
];

const About = () => {
  return (
    <>
      {/* ✅ Product Section (unchanged) */}
      <section className="bg-[#E8F8D7] py-6 px-6 h-130">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16 justify-items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative rounded-[25px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] w-[230px]
                ${index % 2 === 0 ? "mt-0 md:mt-0" : "mt-12 md:mt-12"}`}
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-[340px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                <p className="text-[#BFFFB3] text-sm mb-1 font-medium">
                  Shop Now
                </p>
                <h3 className="text-lg font-semibold">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ About Section (updated to match image) */}
      <section className="bg-white rounded-3xl py-16 px-8 md:px-20 text-center shadow-sm my-12 relative overflow-hidden">
        {/* Decorative Leaves */}
        {/* <Leaf className="absolute top-6 left-8 text-[#557632] opacity-80" size={40} />
        <Sprout className="absolute top-6 right-8 text-[#557632] opacity-80" size={40} /> */}

        <img src={ab5} alt="" className="absolute top-6 left-8 text-[#557632] opacity-80" />
        <img src={ab6} alt="" className="absolute top-6 right-8 text-[#557632] opacity-80" />

        <h4 className="text-[#3A6B35] font-medium text-sm tracking-widest mb-2">
          ABOUT US
        </h4>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#557632] mb-6">
          About mindveda
        </h2>

        <p className="text-[#557632] max-w-4xl mx-auto leading-relaxed mb-14 text-[17px] italic">
          <span className="italic font-medium text-[#557632]">
            Mind Veda Ayurvedic Clinic
          </span>{" "}
          offers authentic Ayurvedic healing rooted in traditional wisdom and holistic care. Located
          in Kerala, we focus on restoring balance to body, mind, and spirit through personalized
          treatments, natural therapies, and expert guidance. Our experienced doctors and therapists
          provide customized care for stress, lifestyle disorders, and overall wellness.
        </p>

        {/* ✅ Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6 text-[#3A6B35] place-items-center">
    <div className="flex  items-center text-center gap-5">
      <img src={ab1} alt="" />
      <p className="mt-3 font-medium">Free Shipping & Returns</p>
    </div>
    <div className="flex gap-5 items-center text-center">
      <img src={ab2} alt="" />
      <p className="mt-3 font-medium">Secure Payment</p>
    </div>
    <div className="flex gap-5 items-center text-center">
      <img src={ab3} alt="" />
      <p className="mt-3 font-medium">Top Customer</p>
    </div>
    <div className="flex gap-5 items-center text-center">
      <img src={ab4} alt="" />
      <p className="mt-3 font-medium">Real Organic Herbal</p>
    </div>
        </div>
      </section>
    </>
  );
};

export default About;
