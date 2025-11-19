import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // For the expand/collapse icons
import arrowup from '../../assets/arrowup.png'
import arrowup1 from '../../assets/arrowup1.png'

// Note: Ensure you have 'lucide-react' installed in your project:
// npm install lucide-react

const faqCategories = [
  {
    category: "Therapy Sessions",
    questions: [
      {
        q: "What types of therapy do you offer?",
        a: ""
       },
      {
        q: "How long does each therapy session last?",
        a:""
     },
    ]
  },
  {
    category: "Psychiatric Consultations",
    questions: [
      {
        q: "What happens during a psychiatric consultation?",
        a: ""
     },
      {
        q: "Do I need a referral for a psychiatric consultation?",
        a: ""
      },
    ]
  },
  {
    category: "Mindfulness Workshops",
    questions: [
      {
        q: "What should I bring to a mindfulness workshop?",
        a: ""
      },
      {
        q: "Do I need prior experience in meditation to attend the workshops?",
        a: ""
      },
    ]
  },
  {
    category: "Teletherapy Services",
    questions: [
      {
        q: "How do teletherapy sessions work?",
        a:""
      },
      {
        q: "Are teletherapy sessions as effective as in-person sessions?",
        a:"" },
    ]
  },
];

const Ending = () => {
  // State to manage which FAQ item is open. Uses an object to allow multiple categories/questions to be open.
  const [openStates, setOpenStates] = useState({});

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenStates(prevStates => ({
      ...prevStates,
      [key]: !prevStates[key] // Toggle the state for this specific question
    }));
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
        {faqCategories.map((categoryData, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            <h2 className="text-3xl  text-gray-900 mb-6">
              {categoryData.category}
            </h2>
            <div className="space-y-4">
              {categoryData.questions.map((faq, questionIndex) => {
                const key = `${categoryIndex}-${questionIndex}`;
                const isOpen = openStates[key];

                return (
                  <div key={questionIndex} className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                    {/* Question Button */}
                    <button
                      className={`flex justify-between items-center w-full px-6 py-4 text-left font-medium text-lg focus:outline-none transition-all duration-300 ease-in-out
                                  ${isOpen ? 'bg-lime-50 text-gray-900' : 'bg-gray-100 text-gray-800 hover:bg-gray-50'}`}
                      onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                       <img src={arrowup1} alt="" />
                      ) : (
                         <img src={arrowup} alt="" />
                      )}
                    </button>
                    
                    {/* Answer Content */}
                    {isOpen && (
                      <div className="px-6 py-4 bg-lime-50 text-gray-700 text-base leading-relaxed animate-accordion-down">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ending;