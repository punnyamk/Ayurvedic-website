import React from 'react';
import { Phone, Clock, MapPin, Star } from 'lucide-react'; 
import Star1 from '../../../assets/Star1.png'

// npm install lucide-react

const contacthome = () => {
  // Common style for the icon background
  const iconStyle = "w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center mr-4 flex-shrink-0";
  // Common style for the icon itself
  const iconColor = "text-white w-5 h-5 ";

  return (
    // Main container with max width and padding
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
      {/* Grid layout for two main sections (text/info and form) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* === Left Section: Heading and Contact Info === */}
        <div className="flex flex-col space-y-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-black  flex items-center">
            <img src={Star1} alt=""  className='pr-4'/>
            GET IN TOUCH
          </p>
          
          {/* Main Heading */}
          <h1 className="text-6xl font-normal leading-tight text-gray-900">
            We'd Love to Hear <br /> From You
          </h1>
          
          {/* Descriptive Text */}
          <p className="text-gray-600 text-lg max-w-lg">
            Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.
          </p>

          <div className="space-y-6 pt-4">
            
            {/* Phone Number */}
            <div className="flex items-start">
              <div className={iconStyle}>
                <Phone className={iconColor} />
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-800">Phone Number</p>
                <p className="text-gray-600">+987 654 3210</p>
              </div>
            </div>
            <hr className="border-gray-200" /> {/* Separator line */}

            {/* Business Hours */}
            <div className="flex items-start">
              <div className={iconStyle}>
                <Clock className={iconColor} />
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-800">Business Hours</p>
                <p className="text-gray-600">Mon-Fri, 07:00-16:00</p>
              </div>
            </div>
            <hr className="border-gray-200" /> {/* Separator line */}

            {/* Address */}
            <div className="flex items-start">
              <div className={iconStyle}>
                <MapPin className={iconColor} />
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-800">Address</p>
                <p className="text-gray-600">7676 Arden Avenue, Ginashire</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Section: Contact Form --- */}
        {/* Background color and padding for the form container */}
        <div className="bg-neutral-200 p-12 rounded-xl shadow-lg">
          <form className="space-y-6">
            
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-800 mb-2 ">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition duration-150 ease-in-out placeholder-gray-500 bg-white"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-800 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition duration-150 ease-in-out placeholder-gray-500"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-800 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="7" // Controls the height of the textarea
                placeholder="Enter your message"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition duration-150 ease-in-out resize-none placeholder-gray-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full lg:w-auto mt-6 px-10 py-3 text-base font-semibold text-gray-800 bg-lime-300 rounded-full hover:bg-lime-400 transition duration-150 ease-in-out shadow-md"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contacthome;