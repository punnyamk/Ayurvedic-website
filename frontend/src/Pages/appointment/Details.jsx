import React from 'react';
import { Phone, Clock, MapPin, Star } from 'lucide-react'; 
import Star1 from '../../assets/Star1.png'

// Note: Ensure you have 'lucide-react' installed: npm install lucide-react

const Details = () => {
    // Data for the three top cards
    const cardsData = [
        {
          title: "How to Schedule an Appointment",
          description: "Id nisi lacus penatibus bibendum vitae lectus et a. Lorem nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim."
        },
        {
          title: "Services Offered at MindVeda",
          description: "Id nisi lacus penatibus bibendum vitae lectus et a. Lorem nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim."
        },
        {
          title: "Understanding Mental Health Conditions",
          description: "Id nisi lacus penatibus bibendum vitae lectus et a. Lorem nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim."
        },
    ];

    // Common style variables for the Contact Block
    const iconWrapperStyle = "w-10 h-10 rounded-full bg-lime-500  flex items-center justify-center mr-4 flex-shrink-0";
    const iconColor = "text-white w-5 h-5";

    return (
        <div className="bg-white">
            
            {/* --------------------------------- */}
            {/* === 1. Top Information Cards === */}
            {/* --------------------------------- */}
            <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cardsData.map((card, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition duration-300">
                            {/* Question Mark Icon (Green) */}
                            <div className="w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center mb-4">
                                <span className="text-white font-bold text-lg">?</span>
                            </div>
                            
                            {/* Title and Description */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --------------------------------- */}
            {/* === 2. Bottom Contact Block === */}
            {/* --------------------------------- */}
            <div className="bg-gray-50 pt-16 pb-20 mt-12 rounded-t-3xl">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Left Side: Heading and Text Content */}
                    <div className="flex flex-col space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-black  flex items-center">
                            <img src={Star1} alt=""  className='pr-3'/>
                            GET IN TOUCH
                        </p>
                        
                        <h2 className="text-5xl font-normal leading-tight text-gray-900">
                            We'd Love to Hear <br /> From You
                        </h2>
                        
                        <p className="text-gray-600 text-base max-w-lg">
                            Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.
                        </p>
                    </div>

                    {/* Right Side: Contact Details */}
                    <div className="grid grid-cols-1 gap-y-6 lg:gap-y-10 lg:pl-16 pt-8">
                        
                        {/* Phone Number */}
                        <div className="flex items-start">
                            <div className={iconWrapperStyle}>
                                <Phone className={iconColor} />
                            </div>
                            <div>
                                <p className="text-xl font-semibold text-gray-800">Phone Number</p>
                                <p className="text-gray-600 text-sm">+987 654 3210</p>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="flex items-start">
                            <div className={iconWrapperStyle}>
                                <Clock className={iconColor} />
                            </div>
                            <div>
                                <p className="text-xl font-semibold text-gray-800">Business Hours</p>
                                <p className="text-gray-600 text-sm">Mon-Fri, 07:00-16:00</p>
                            </div>
                        </div>
                        
                        {/* Address */}
                        <div className="flex items-start">
                            <div className={iconWrapperStyle}>
                                <MapPin className={iconColor} />
                            </div>
                            <div>
                                <p className="text-xl font-semibold text-gray-800">Address</p>
                                <p className="text-gray-600 text-sm">7676 Arden Avenue, Ginashire</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;