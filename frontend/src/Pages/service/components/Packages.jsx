import React from "react";
import { Check } from "lucide-react";
import Star1 from '../../../assets/Star1.png';

function Packages() {
  const plans = [
    {
      name: "Standard Plan",
      price: "$200",
      bg: "bg-white",
      text: "text-gray-800",
      features: [
        "Sessions: 4 sessions /month",
        "Duration: 60 minutes",
        "Individual Therapy",
        "Features: Online Resources",
      ],
    },
    {
      name: "Premium Plan",
      price: "$500",
      bg: "bg-lime-100",
      text: "text-gray-800",
      features: [
        "Sessions: Unlimited sessions",
        "Duration: 60 minutes",
        "Individual & Group",
        "Features: 24/7 Support",
      ],
    },
    {
      name: "Family Plan",
      price: "$600",
      bg: "bg-white",
      text: "text-gray-800",
      features: [
        "Sessions: 8 sessions /month",
        "Duration: 90 minutes",
        "Family & Group",
        "Features: Group Workshops",
      ],
    },
  ];

  return (
    <div className="w-full py-20 bg-[#f8f8f8]">
      {/* Heading Section */}
      <div className="text-center max-w-3xl mx-auto">

        {/* Star + Pricing Title */}
        <p className="text-sm tracking-widest text-gray-900 font-semibold pb-7 flex items-center justify-center gap-2">
          <img src={Star1} alt="star" className="w-4 h-4" />
          PRICING PLANS
        </p>

        <h2 className="text-5xl  mt-2">Affordable Care Packages</h2>

        <p className="text-gray-500 mt-4">
          Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut.
          Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${plan.bg} rounded-3xl p-10 shadow-md`}
          >
            {/* Plan Title */}
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <p className="text-gray-500 mt-2">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
            </p>

            {/* Price */}
            <h2 className="text-4xl font-bold text-lime-600 mt-6">
              {plan.price}
              <span className="text-gray-600 text-lg font-normal"> /month</span>
            </h2>

            {/* Features Title */}
            <p className="mt-8 font-semibold">Service Included:</p>

            {/* Line */}
            <hr className="border border-gray-300 my-4" />

            {/* Features List */}
            <ul className="space-y-4">
              {plan.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <Check className="text-white bg-lime-600 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-10">
              <button className="w-full bg-black text-lime-300 py-3 rounded-full font-semibold hover:bg-gray-900">
                GET STARTED
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
