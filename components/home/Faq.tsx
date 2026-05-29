"use client";

import React, { useState } from 'react';
import '../../style/home/faq.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What services does your digital agency offer?",
      answer: "We provide comprehensive digital solutions including website development, mobile application development, digital marketing, performance advertising (Meta and Google Ads), SEO, social media management, UI/UX design, branding, and digital strategy consulting. Our services are designed to support businesses across different growth stages, from startups to established enterprises."
    },
    { question: "Which industries do you work with?", answer: "We work across various sectors including E-commerce, Healthcare, Real Estate, and Tech." },
    { question: "How is your agency different from other digital marketing and development companies?", answer: "Our focus on ROI and measurable results sets us apart." },
    { question: "Do you work with startups and small businesses?", answer: "Yes, we have specialized packages for growing businesses." },
    { question: "What is your project onboarding process?", answer: "It starts with a deep discovery session followed by strategy mapping." },
    { question: "How long does it take to develop a website or mobile app?", answer: "Timeline depends on complexity, typically ranging from 4 to 12 weeks." },
    { question: "Do you provide post-launch support and maintenance?", answer: "Yes, we offer ongoing maintenance to ensure peak performance." },
    { question: "How do we get started with your agency?", answer: "Simply book a call via our contact button to begin the discovery process." }
  ];

  // Split FAQs into two columns as seen in the image
  const leftColumn = faqs.slice(0, 4);
  const rightColumn = faqs.slice(4);

  return (
    <section className="bm-faq-section">
      <div className="bm-faq-header">
        <p className="bm-faq-subtitle">Frequently Asked Questions</p>
        <h2 className="bm-faq-title">Got Questions? We've Got Answers</h2>
      </div>

      <div className="bm-faq-grid">
        <div className="bm-faq-col">
          {leftColumn.map((faq, index) => (
            <div 
              key={index} 
              className={`bm-faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="bm-faq-q-box">
                <span>{faq.question}</span>
                {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              {activeIndex === index && (
                <div className="bm-faq-a-box">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="bm-faq-col">
          {rightColumn.map((faq, index) => {
            const actualIndex = index + 4;
            return (
              <div 
                key={actualIndex} 
                className={`bm-faq-item ${activeIndex === actualIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(actualIndex)}
              >
                <div className="bm-faq-q-box">
                  <span>{faq.question}</span>
                  {activeIndex === actualIndex ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {activeIndex === actualIndex && (
                  <div className="bm-faq-a-box">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;