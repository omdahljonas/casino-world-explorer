
import React, { useState } from 'react';
import { faqData } from '@/utils/helpers';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  
  const toggleAccordion = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-casino-medium-blue">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Find answers to common questions about the world's best hotel casinos and what makes them exceptional destinations.
        </p>
        
        <div className="mt-12 max-w-3xl mx-auto">
          {faqData.map((item) => (
            <div 
              key={item.id} 
              className={`mb-4 bg-casino-dark-blue rounded-lg overflow-hidden ${
                openItem === item.id ? 'shadow-lg shadow-casino-gold/10' : ''
              }`}
            >
              <button
                className="w-full text-left p-4 md:p-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={openItem === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <h3 className="text-lg md:text-xl font-bold text-white pr-8">{item.question}</h3>
                <span className={`text-casino-gold transition-transform duration-300 ${
                  openItem === item.id ? 'rotate-180' : ''
                }`}>
                  <i className="fas fa-chevron-down"></i>
                </span>
              </button>
              
              <div 
                id={`faq-answer-${item.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === item.id ? 'max-h-96 ease-in' : 'max-h-0 ease-out'
                }`}
                aria-hidden={openItem !== item.id}
              >
                <div className="p-4 md:p-6 pt-0 md:pt-0 border-t border-gray-700">
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">Have more questions about the world's premier casino hotels?</p>
          <button 
            onClick={() => document.getElementById('vip-club')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Join Our Community <i className="fas fa-users ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
