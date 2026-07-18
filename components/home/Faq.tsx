"use client";

import React, { useEffect, useState } from 'react';
import '../../style/home/faq.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

interface FaqItem {
  question: string;
  answer: string;
}

const Faq = ({ activeTabKey }: { activeTabKey: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pathname = usePathname();


  const [faqs, setFaqs] = useState<FaqItem[]>([]);


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
          answer:
            "We provide comprehensive digital solutions including website development, mobile application development, digital marketing, performance advertising (Meta and Google Ads), SEO, social media management, UI/UX design, branding, and digital strategy consulting. Our services are designed to support businesses across different growth stages, from startups to established enterprises."
        },
        {
          question: "Which industries do you work with?",
          answer:
            "We work across multiple industries including retail, e-commerce, education, healthcare, manufacturing, real estate, professional services, and startups. Our approach is industry-agnostic but strategy-driven, allowing us to adapt our execution based on business goals, audience behavior, and market dynamics."
        },
        {
          question: "How is your agency different from other digital marketing and development companies?",
          answer:
            "Our focus is on business outcomes rather than isolated deliverables. We combine strategic planning, technical execution, and performance-driven marketing under one roof. This ensures consistency across platforms, faster execution, and accountability at every stage of the engagement."
        },
        {
          question: "Do you work with startups and small businesses?",
          answer:
            "Yes. We work with startups, small and medium businesses, as well as established brands. Our engagement models are flexible and scalable, allowing businesses to start with essential services and expand as their digital requirements grow."
        },
        {
          question: "What is your project onboarding process?",
          answer:
            "Once an engagement is confirmed, we initiate a structured onboarding process that includes requirement validation, scope alignment, timeline confirmation, and access setup. This ensures clarity on deliverables, responsibilities, and execution timelines before work begins."
        },
        {
          question: "How long does it take to develop a website or mobile app?",
          answer:
            "Project timelines depend on the scope, complexity, and client inputs. A standard business website typically takes 10–20 working days, while mobile applications and custom platforms follow milestone-based timelines. Final timelines are shared after requirement assessment."
        },
        {
          question: "Do you provide post-launch support and maintenance?",
          answer:
            "Yes. We offer optional post-launch support and maintenance services for websites, applications, and digital marketing campaigns. This includes performance monitoring, updates, issue resolution, and ongoing optimization based on business needs."
        },
        {
          question: "How do we get started with your agency?",
          answer:
            "You can get started by contacting us through our website or scheduling an initial consultation. Our team will understand your requirements, recommend suitable solutions, and share a detailed proposal outlining scope, timelines, and commercials."
        }
      ]);
    }

    else if (pathname === "/services/designing") {
      if (activeTabKey === "uiuxDesign") {
        setFaqs([
          {
            question: "What UI/UX design services do you offer?",
            answer:
              "We provide user interface (UI) and user experience (UX) design services for websites, web applications, mobile applications, and digital platforms, focusing on usability, clarity, and brand consistency."
          },
          {
            question: "How do you approach UI/UX design projects?",
            answer:
              "Our approach includes requirement understanding, user flow planning, wireframing, visual design, and design validation to ensure a user-centric experience."
          },
          {
            question: "Do you design for both web and mobile platforms?",
            answer:
              "Yes. We design interfaces for websites, web applications, Android apps, and iOS apps with platform-specific considerations."
          },
          {
            question: "Will the designs align with our brand identity?",
            answer:
              "Yes. Designs are aligned with the client’s branding guidelines, visual language, and business positioning."
          },
          {
            question: "Do you provide design prototypes?",
            answer:
              "Yes. Interactive or static prototypes can be shared to visualize user journeys and screen flows before development."
          },
          {
            question: "How many revisions are included in UI/UX design?",
            answer:
              "The number of revisions is defined in the project scope. Additional iterations can be accommodated through change requests."
          },
          {
            question: "Can your designs be directly handed over to developers?",
            answer:
              "Yes. Design files are shared in standard formats suitable for development handover, along with necessary guidelines."
          },
          {
            question: "Do you redesign existing digital products?",
            answer:
              "Yes. We offer redesign and UX improvement services for existing websites, apps, and platforms."
          }
        ]);
      }
      else {
        setFaqs(defaultFaqs);
      }
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
    question: "What is a web application?",
    answer:
      "A web application is a functional platform designed to manage workflows, data processing, and user interactions beyond informational websites."
  },
  {
    question: "Do you build custom web applications?",
    answer:
      "Yes. We develop custom web applications tailored to specific business processes and operational requirements."
  },
  {
    question: "Which industries use web applications?",
    answer:
      "Web applications are used across industries such as education, healthcare, logistics, finance, SaaS, and enterprise operations."
  },
  {
    question: "Are your web applications scalable?",
    answer:
      "Yes. Applications are developed with scalability and performance considerations to support future growth."
  },
  {
    question: "Can web applications integrate with third-party tools?",
    answer:
      "Yes. Integration with APIs, CRMs, ERPs, payment systems, and analytics platforms is supported."
  },
  {
    question: "How secure are your web applications?",
    answer:
      "Security best practices are followed during development, including access control, data protection, and secure architecture principles."
  },
  {
    question: "Will the application work across browsers?",
    answer:
      "Yes. Applications are tested for compatibility across major modern browsers."
  },
  {
    question: "Do you offer post-deployment support?",
    answer:
      "Yes. Ongoing support and enhancement services are available based on engagement terms."
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
      else if (activeTabKey === "staticDevelopment") {
        setFaqs([
          {
            question: "What types of websites do you develop?",
            answer:
              "We develop corporate websites, business websites, landing pages, portfolio websites, and custom websites based on branding, functionality, and scalability requirements."
          },
          {
            question: "Will the website be mobile-responsive?",
            answer:
              "Yes. All websites are designed to be fully responsive and optimized for desktops, tablets, and mobile devices."
          },
          {
            question: "Is the website built with SEO best practices?",
            answer:
              "Yes. Websites are developed following SEO-friendly structure, clean code practices, optimized page speed, and proper content hierarchy."
          },
          {
            question: "Can we manage website content after launch?",
            answer:
              "Yes. Websites are built using content management systems or custom admin panels, allowing clients to update content independently."
          },
          {
            question: "How long does website development take?",
            answer:
              "Timelines depend on scope and complexity. Standard business websites generally take a few weeks, while custom solutions follow milestone-based timelines."
          },
          {
            question: "Will you assist with domain and hosting?",
            answer:
              "Domain and hosting can be client-provided or assisted by us based on requirements. Ownership always remains with the client."
          },
          {
            question: "Is post-launch support available?",
            answer:
              "Yes. Optional support and maintenance services are available for updates, monitoring, and issue resolution."
          },
          {
            question: "Who owns the website after completion?",
            answer:
              "Upon project completion and full payment, ownership of the website and related assets is transferred to the client."
          }
        ]);
      }
      else {
        setFaqs([
          {
            question: "What types of websites do you develop?",
            answer:
              "We develop corporate websites, business websites, landing pages, portfolio websites, and custom websites based on branding, functionality, and scalability requirements."
          },
          {
            question: "Will the website be mobile-responsive?",
            answer:
              "Yes. All websites are designed to be fully responsive and optimized for desktops, tablets, and mobile devices."
          },
          {
            question: "Is the website built with SEO best practices?",
            answer:
              "Yes. Websites are developed following SEO-friendly structure, clean code practices, optimized page speed, and proper content hierarchy."
          },
          {
            question: "Can we manage website content after launch?",
            answer:
              "Yes. Websites are built using content management systems or custom admin panels, allowing clients to update content independently."
          },
          {
            question: "How long does website development take?",
            answer:
              "Timelines depend on scope and complexity. Standard business websites generally take a few weeks, while custom solutions follow milestone-based timelines."
          },
          {
            question: "Will you assist with domain and hosting?",
            answer:
              "Domain and hosting can be client-provided or assisted by us based on requirements. Ownership always remains with the client."
          },
          {
            question: "Is post-launch support available?",
            answer:
              "Yes. Optional support and maintenance services are available for updates, monitoring, and issue resolution."
          },
          {
            question: "Who owns the website after completion?",
            answer:
              "Upon project completion and full payment, ownership of the website and related assets is transferred to the client."
          }
        ]);
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