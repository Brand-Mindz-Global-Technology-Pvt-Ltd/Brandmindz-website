"use client";

import React, { useEffect, useState } from 'react';
import '../../style/home/faq.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const Faq = ({ activeTabKey }: { activeTabKey: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pathname = usePathname();


  const [faqs, setFaqs] = useState<any>()


  console.log(activeTabKey, 'activeTabKey')



  const defaultFaqs = [
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
  ]

  useEffect(() => {

    if (pathname === "/") {
      setFaqs([
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
      ]);
    }

    else if (pathname === "/services/digital-marketing") {
      if (activeTabKey === "seo") {
        setFaqs([
          {
            question: "What SEO services do you provide?",
            answer:
              "We provide on-page SEO, technical SEO, content optimization, keyword research, site audits, and performance tracking aligned with search engine best practices."
          },
          {
            question: "How do you select keywords for SEO?",
            answer:
              "Keyword selection is based on search intent, competition analysis, relevance to business offerings, and long-term growth potential."
          },
          {
            question: "How long does SEO take to show results?",
            answer:
              "SEO is a long-term process. Measurable improvements typically take a few months of consistent optimization, depending on competition and website health."
          },
          {
            question: "Do you follow search engine guidelines?",
            answer:
              "Yes. All SEO activities are carried out in compliance with search engine policies and ethical optimization practices."
          },
          {
            question: "Will SEO help improve website traffic?",
            answer:
              "SEO helps improve organic visibility, relevant traffic, and long-term search presence when executed consistently."
          },
          {
            question: "Is technical SEO included?",
            answer:
              "Yes. Technical aspects such as site structure, page speed, mobile usability, and indexing are part of the SEO process."
          },
          {
            question: "Do you provide SEO reports?",
            answer:
              "Yes. Periodic reports are shared to provide visibility into rankings, traffic trends, and optimization efforts."
          },
          {
            question: "Is SEO suitable for all businesses?",
            answer:
              "SEO can benefit most businesses, though strategies and timelines vary based on industry, competition, and goals."
          }
        ]);
      }
      
    }

    else if (pathname === "/services/development") {

      if (activeTabKey === "webApplicationsDevelopment") {
        setFaqs([
          {
            question: "What kind of static websites do you develop?",
            answer: "We develop fast, secure, and responsive static websites suitable for business profiles, portfolios, landing pages, and informational websites."
          },
          {
            question: "Are static websites mobile-friendly?",
            answer: "Yes. All static websites are designed to be fully responsive and optimized for desktops, tablets, and mobile devices."
          },
          {
            question: "Can I update the content later?",
            answer: "Yes. Content updates can be handled by our team, or a suitable content management approach can be implemented based on project requirements."
          },
          {
            question: "Will the website be SEO-friendly?",
            answer: "Yes. Static websites are developed following SEO best practices, including optimized structure, metadata, and performance."
          },
          {
            question: "How long does it take to build a static website?",
            answer: "The timeline depends on the number of pages and design requirements, but most projects are completed within the agreed project schedule."
          },
          {
            question: "Can you redesign my existing static website?",
            answer: "Yes. We provide redesign and modernization services for existing static websites."
          },
          {
            question: "Will the website load quickly?",
            answer: "Yes. Static websites are optimized for speed and performance to ensure fast loading times."
          },
          {
            question: "Do you provide post-launch support?",
            answer: "Yes. Maintenance and support services are available after project delivery."
          }
        ]);
      }
      else if (activeTabKey === "mobileAppDevelopment") {
        setFaqs([
          {
            question: "Do you develop Android and iOS mobile applications?",
            answer: "Yes. We develop mobile applications for both Android and iOS platforms."
          },
          {
            question: "Do you offer native or cross-platform development?",
            answer: "The development approach is selected based on performance needs, timelines, and budget considerations."
          },
          {
            question: "Can you develop apps for startups and enterprises?",
            answer: "Yes. We work with startups, SMEs, and enterprises, adapting architecture and features accordingly."
          },
          {
            question: "Will the app be scalable for future updates?",
            answer: "Yes. Applications are built with modular architecture to support future feature additions and updates."
          },
          {
            question: "Do you assist with app store deployment?",
            answer: "Yes. We assist with app submission and deployment processes as per platform guidelines."
          },
          {
            question: "Is app security considered during development?",
            answer: "Yes. Security and data protection are considered during architecture and development phases."
          },
          {
            question: "Will the app integrate with existing systems?",
            answer: "Yes. Mobile apps can be integrated with websites, APIs, databases, and third-party services."
          },
          {
            question: "Do you provide post-launch support?",
            answer: "Yes. Optional maintenance and support services are available after app launch."
          }
        ]);
      }
      else if (activeTabKey === "ecomDevelopment") {
        setFaqs([
          {
            question: "What kind of e-commerce websites do you build?",
            answer:
              "We build scalable e-commerce websites for B2C and B2B businesses, including product-based stores and catalog-driven platforms."
          },
          {
            question: "Which e-commerce platforms do you work with?",
            answer:
              "Platform selection is based on business needs, product volume, and growth plans. Both platform-based and custom solutions are supported."
          },
          {
            question: "Do you integrate payment gateways?",
            answer:
              "Yes. Secure payment gateway integration is provided based on regional and business requirements."
          },
          {
            question: "Can shipping and logistics be integrated?",
            answer:
              "Yes. Shipping partners, order tracking, and logistics integrations can be configured as required."
          },
          {
            question: "Is the e-commerce website mobile-friendly?",
            answer:
              "Yes. All e-commerce websites are designed to deliver a seamless shopping experience across devices."
          },
          {
            question: "Can the store handle future growth?",
            answer:
              "Yes. The architecture is designed for scalability, allowing product expansion, traffic growth, and feature enhancements."
          },
          {
            question: "Do you provide training to manage the store?",
            answer:
              "Basic training or documentation can be provided to help clients manage products, orders, and content."
          },
          {
            question: "Is post-launch technical support available?",
            answer:
              "Yes. Optional maintenance and support services are available after launch."
          }
        ]);
      }

      else {
        setFaqs(defaultFaqs);
      }
    }

    else if (pathname === "/services/ecommerce") {

      if (activeTabKey === "flipkartListing" || activeTabKey === "amazonListing") {
        setFaqs([
          {
            question: "What Amazon and Flipkart listing services do you provide?",
            answer:
              "We provide end-to-end marketplace listing services including product listing creation, catalog setup, keyword optimization, image guidelines alignment, and content structuring in compliance with Amazon and Flipkart policies."
          },
          {
            question: "Do you create new product listings or optimize existing ones?",
            answer:
              "We support both new product listing creation and optimization of existing listings to improve visibility, relevance, and conversion potential."
          },
          {
            question: "Is keyword research included in marketplace listing services?",
            answer:
              "Yes. Relevant keyword research is conducted to align product titles, descriptions, and backend search terms with marketplace search behavior."
          },
          {
            question: "Will the listings comply with Amazon and Flipkart guidelines?",
            answer:
              "Yes. All listings are created in accordance with platform-specific policies, category requirements, and content standards."
          },
          {
            question: "Do you handle product image guidelines for marketplaces?",
            answer:
              "We ensure that product images meet platform specifications. Image creation or editing is supported based on client inputs and scope."
          },
          {
            question: "Can you manage multiple products or categories?",
            answer:
              "Yes. We support single-product listings as well as bulk listings across multiple categories, depending on business needs."
          },
          {
            question: "How long does it take to complete a listing?",
            answer:
              "Timelines depend on the number of products, data availability, and platform approval processes. Estimated timelines are shared after scope confirmation."
          },
          {
            question: "Do you provide ongoing marketplace support?",
            answer:
              "Yes. Optional ongoing support is available for listing updates, content optimization, and catalog maintenance."
          }
        ]);
      }


      // setFaqs([
      //   {
      //     question: "What kind of e-commerce websites do you build?",
      //     answer:
      //       "We build scalable e-commerce websites for B2C and B2B businesses, including product-based stores and catalog-driven platforms."
      //   },
      //   {
      //     question: "Which e-commerce platforms do you work with?",
      //     answer:
      //       "Platform selection is based on business needs, product volume, and growth plans. Both platform-based and custom solutions are supported."
      //   },
      //   {
      //     question: "Do you integrate payment gateways?",
      //     answer:
      //       "Yes. Secure payment gateway integration is provided based on regional and business requirements."
      //   },
      //   {
      //     question: "Can shipping and logistics be integrated?",
      //     answer:
      //       "Yes. Shipping partners, order tracking, and logistics integrations can be configured as required."
      //   },
      //   {
      //     question: "Is the e-commerce website mobile-friendly?",
      //     answer:
      //       "Yes. All e-commerce websites are designed to deliver a seamless shopping experience across devices."
      //   },
      //   {
      //     question: "Can the store handle future growth?",
      //     answer:
      //       "Yes. The architecture is designed for scalability, allowing product expansion, traffic growth, and feature enhancements."
      //   },
      //   {
      //     question: "Do you provide training to manage the store?",
      //     answer:
      //       "Basic training or documentation can be provided to help clients manage products, orders, and content."
      //   },
      //   {
      //     question: "Is post-launch technical support available?",
      //     answer:
      //       "Yes. Optional maintenance and support services are available after launch."
      //   }
      // ]);
    }




    else {
      setFaqs([]);
    }
  }, [pathname, activeTabKey]);

  // Split FAQs into two columns as seen in the image
  const leftColumn = faqs?.slice(0, 4);
  const rightColumn = faqs?.slice(4);

  return (
    <section className="bm-faq-section">
      <div className="bm-faq-header">
        <p className="bm-faq-subtitle">Frequently Asked Questions</p>
        <h2 className="bm-faq-title">Got Questions? We've Got Answers</h2>
      </div>

      <div className="bm-faq-grid">
        <div className="bm-faq-col">
          {leftColumn?.map((faq, index) => (
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
          {rightColumn?.map((faq, index) => {
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