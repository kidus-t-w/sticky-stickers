'use client';
import React, { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  { question: 'Headline 1', answer: 'This is the answer to question 1.' },
  { question: 'Headline 2', answer: 'This is the answer to question 2.' },
  { question: 'Headline 3', answer: 'This is the answer to question 3.' },
  { question: 'Headline 4', answer: 'This is the answer to question 4.' },
  { question: 'Headline 5', answer: 'This is the answer to question 5.' },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
