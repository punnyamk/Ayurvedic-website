import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react'; 
import arrowup from '../../assets/arrowup.png'
import arrowup1 from '../../assets/arrowup1.png'

import appointment2 from '../../assets/appointment2.png'
import Star1 from '../../assets/Star1.png'
// Note: Ensure you have 'lucide-react' installed: npm install lucide-react

const faqs = [
  {
    question: "How can I schedule an appointment?",
    answer: "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla."
  },
  {
    question: "Do you accept insurance?",
    answer: ""
  },
  {
    question: "What types of payment do you accept?",
    answer: ""
  },
  {
    question: "Are your services confidential?",
    answer: ""
  },
];

const Answer = () => {
  // State to manage which FAQ item is open. Set the first item (index 0) open by default.
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleFAQ = (index) => {
    // If the currently open item is clicked, close it (set to null); otherwise, open the new item.
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    // Main container with max width, padding, and background
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Grid layout for two main sections (FAQ content and image) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* === Left Section: FAQ Content and Accordion === */}
        <div className="flex flex-col space-y-8">
          <p className="text-xs  uppercase tracking-widest text-black pr-4 flex items-center">
           <img src={Star1} alt="" />
            FAQ
          </p>
          
          {/* Main Heading */}
          <h1 className="text-6xl font-normal leading-tight text-gray-900">
            Your Questions <br /> Answered
          </h1>
          
          {/* FAQ Accordion */}
          <div className="space-y-4 pt-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div key={index} className="rounded-xl overflow-hidden  ">
                  {/* Question Header Button */}
                  <button
                    className={`flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-lg focus:outline-none transition-all duration-300 ease-in-out
                                ${isOpen ? 'bg-lime-200/50 text-gray-900' : 'bg-gray-50 text-gray-800 hover:bg-gray-100'}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <img src={arrowup1} alt="" />
                    ) : (
                        <img src={arrowup} alt="" />
                     
                    )}
                  </button>
                  
                  
                  {/* Answer Content - Only rendered when open */}
                  {isOpen && (
                    <div 
                      className="px-6 py-4 bg-white/50 text-gray-700 text-base leading-relaxed transition-all duration-500 ease-in-out"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Right Section: Image with Overlays --- */}
        {/* Note: I've added subtle animation to the blobs for a more dynamic effect,
             though it requires configuration in your tailwind.config.js for 'blob' animation.
             If you skip the animation config, they will remain static like in the image. */}
        <div className="relative h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center rounded-xl overflow-hidden shadow-lg">
          <img
            src={appointment2}
            alt="Stacked stones representing balance and stability"
            className="absolute inset-0 w-full h-full object-cover"
          />
         
        </div>
      </div>
    </div>
  );
};

export default Answer;