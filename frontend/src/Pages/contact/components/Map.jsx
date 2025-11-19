import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Map = () => {
  const contactItemStyle = "flex items-center text-white space-x-3";
  const iconColor = "w-5 h-5 flex-shrink-0";

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      
      {/* === REAL GOOGLE MAP === */}
      <iframe
        title="MindVeda Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1107087684833!2d144.9560543153168!3d-37.817209979751954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1b4578b%3A0xf4c7fdc5e5f96365!2sVictoria%20Harbour!5e0!3m2!1sen!2sin!4v1699438182914!5m2!1sen!2sin"
        className="absolute inset-0 w-full h-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Blue Map Marker */}
      <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg z-10"></div>

      {/* Floating Contact Card */}
      <div className="absolute top-1/4 left-8 lg:left-16 z-20">
        <div className="bg-lime-700 p-8 rounded-xl shadow-2xl space-y-5 w-72">
          
          <p className="text-sm font-semibold uppercase tracking-wider text-lime-200">
            Contacts
          </p>
          
          <div className="space-y-4">
            <div className={contactItemStyle}>
              <MapPin className={iconColor} />
              <p className="text-white text-sm">MindVeda</p>
            </div>

            <div className={contactItemStyle}>
              <Phone className={iconColor} />
              <p className="text-white text-sm">010-10926888</p>
            </div>

            <div className={contactItemStyle}>
              <Mail className={iconColor} />
              <p className="text-white text-sm">mindveda@email.com</p>
            </div>

            <div className="h-px bg-lime-600 w-full pt-2"></div>

            <div className={contactItemStyle}>
              <Clock className={iconColor} />
              <div>
                <p className="text-white text-sm">Mon-Fri 08.00-20.00</p>
                <p className="text-white text-sm">Sat 09.00-18.00</p>
                <p className="text-white text-sm">Sun 09.00-18.00</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Design Bar */}
      <div className="absolute bottom-0 w-full h-16 bg-lime-100/70"></div>
    </div>
  );
};

export default Map;
