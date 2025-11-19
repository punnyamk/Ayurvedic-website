import React from 'react';
import MASSAGE_IMAGE_URL from '../../../assets/blog1.jpg';
import BLOOD_IMAGE_URL from '../../../assets/blog2.jpg';
import AYURVEDA_IMAGE_URL from '../../../assets/blog3.jpg';
import Vector from '../../../assets/Vector.png'
import blog4 from '../../../assets/blog4.jpg'
function Service() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      
      <div className="flex items-center mb-8 md:mb-12">
        <img src={Vector} alt=""  className='mr-32'/>
        {/* <span className="w-6 h-6 mr-2 bg-green-700 rounded-full hidden sm:inline-block"></span>  */}
        <h1 className="font-serif italic text-3xl md:text-4xl text-[#679F35] ml-48 ">
          Look at the Latest Blogs
        </h1>
        
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left big card */}
        <div className="flex-2 lg:w-2/3  rounded-lg overflow-hidden">
          <img src={MASSAGE_IMAGE_URL} alt="Ayurvedic massage" className="w-full object-cover h-64 md:h-96" />
          <div className="p-4 md:p-6">
            <p className="text-gray-700 text-base mb-3">
              <span className="font-bold text-[17px]" >Njavarakkizhi</span> is a time-tested Ayurvedic treatment that uses warm bundles of medicinal Njavara rice soaked in herbal decoctions. This gentle massage therapy helps relieve joint pain, strengthen muscles, and improve circulation.
            </p>
            <span className="text-sm font-bold text-green-700">TIPS May 1, 2021</span>
          </div>
        </div>

        {/* Right two cards */}
        <div className="flex-1 lg:w-1/3 flex flex-col gap-6">
          <div className="flex bg-white  overflow-hidden  h-60 ">
            <div className="flex-shrink-0 w-2/5 md:w-1/3 lg:w-1/2">
              <img src={BLOOD_IMAGE_URL} alt="Blood handling safety" className="w-full h-full object-cover min-h-32 rounded-[14px]" />
            </div>
            <div className="flex-grow p-3 flex flex-col justify-between">
              <p className="text-gray-700 text-[17px] mb-2 font-medium">
  How can blood contamination be prevented? Use gloves, masks, gowns, and eye protection when handling blood or body fluids.
</p>
<span className="text-[17px] font-bold text-[#679F35] ">TIPS August 1, 2021</span>

             
            </div>
          </div>

<div className="flex-1 lg:w-100 flex flex-col gap-6 ">
          <div className="flex bg-white  overflow-hidden h-60  ">
            <div className="flex-shrink-0 w-2/5 md:w-1/3 lg:w-1/2">
              <img src={blog4} alt="Blood handling safety" className="w-full h-full object-cover min-h-32 rounded-[14px]" />
            </div>
            <div className="flex-grow p-3 flex flex-col justify-between">
              <p className="text-gray-700 text-[17px] mb-2 font-medium">
  How can blood contamination be prevented? Use gloves, masks, gowns, and eye protection when handling blood or body fluids.
</p>
              <span className="text-[17px] font-bold text-[#679F35] ">TIPS August 1, 2021</span>
            </div>
          </div>









          

          {/* <div className="flex flex-row-reverse bg-gray-50 shadow-md rounded-lg overflow-hidden border">
            <div className="flex-shrink-0 w-2/5 md:w-1/3 lg:w-1/2">
              <img src={AYURVEDA_IMAGE_URL} alt="Ayurveda tools" className="w-full h-full object-cover min-h-32" />
            </div>
            <div className="flex-grow p-3 text-right flex flex-col justify-between items-end">
              <p className="text-gray-700 text-sm mb-2">
                When done by a trained therapist, it’s generally safe. Minor skin sensitivity may occur in rare cases.
              </p>
              <span className="text-xs font-bold text-green-700 mt-1">TIPS October 1, 2021</span>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
