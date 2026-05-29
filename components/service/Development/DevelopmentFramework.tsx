"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import "../../../style/branding/FrameworkSection.css";
import { useDevelopmentContext } from "./DevelopmentContext";

const frameworkData = [
  {
    title: "Our 6-Step Growth Strategy Framework",
    subtitle: "Discover our structured approach designed to help businesses strengthen their digital presence, build customer trust, and create consistent growth across online platforms.",
    steps: [
      {
        title: "Business Analysis & Goal Definition",
        description: "We begin by understanding your business, target audience, and long-term goals. This stage focuses on identifying growth opportunities, challenges, and defining a clear direction for your digital strategy."
      },
      {
        title: " Market Research & Competitor Insights",
        description: "Our team studies your industry landscape and competitor activities to uncover market trends and customer behavior. This helps us design strategies that position your brand effectively in the competitive environment."
      },
      {
        title: "Brand Messaging & Content Planning",
        description: "Clear communication builds strong brand recognition. We develop meaningful messaging, structured content strategies, and communication guidelines that align with your brand identity and audience expectations."
      },
      {
        title: "Digital Presence Optimization",
        description: "We refine your digital assets including website structure, content flow, and platform positioning to ensure your brand presents a professional and trustworthy image across all online channels."
      },
      {
        title: "Visual Presentation & User Experience",
        description: "Design and presentation play an important role in customer engagement. We focus on improving visual consistency, user experience, and overall presentation to make your digital platforms more engaging and easy to navigate."
      },
      {
        title: "Performance Tracking & Continuous Improvement",
        description: "After implementation, we monitor performance metrics and analyze engagement trends. Continuous improvements ensure your strategy adapts to changing market behavior and delivers sustainable growth over time."
      }
    ]
  },
  {
    title: "Our Proven 6-Step E-Commerce Development Framework",
    subtitle: "Discover our structured e-commerce development process designed to build high-performing online stores, improve customer experience, and support consistent sales growth through scalable digital commerce platforms.",
    steps: [
      {
        title: "Business Research & Customer Journey Planning",
        description: "We study your business model, target customers, and product categories to understand how buyers interact with online stores. This insight helps us design an e-commerce platform that supports smooth navigation and better purchase decisions."
      },
      {
        title: "Store Architecture & Product Structure",
        description: "A well-organized store structure improves usability and product discoverability. We plan category hierarchy, product grouping, and filtering systems that allow customers to quickly find relevant products within your online store."
      },
      {
        title: "Product Page Content & UX Optimization",
        description: "We design product pages that clearly present important information such as features, specifications, benefits, and pricing. Well-structured product content improves customer understanding and encourages confident buying decisions."
      },
      {
        title: "Platform Development & Store Functionality",
        description: "Our development process ensures your store includes essential e-commerce features such as secure checkout, payment gateway integration, inventory management, and smooth navigation across all devices."
      },
      {
        title: "Visual Design & Product Presentation",
        description: "We focus on clean visual layouts and clear product presentation to improve customer engagement. Well-designed product galleries, banners, and interface elements create a professional shopping experience."
      },
      {
        title: " Performance Monitoring & Store Optimization",
        description: "After launch, we monitor store performance, user behavior, and conversion trends. Continuous improvements help maintain website performance, improve customer experience, and support long-term business growth."
      }
    ]
  },
  {
    title: "Our Proven 6-Step Mobile App Development Framework",
    subtitle: "Discover our structured mobile development process designed to build high-performance applications, enhance user engagement, and support long-term digital growth through scalable mobile solutions.",
    steps: [
      {
        title: " Requirement Analysis & User Research",
        description: "We begin by understanding your business objectives, target users, and app requirements. This helps us define the right features, functionality, and user flow needed to create an effective mobile application."
      },
      {
        title: "App Architecture & Feature Planning",
        description: "A strong technical foundation is essential for mobile applications. We design the app architecture, feature structure, and navigation flow to ensure the application performs efficiently across different devices and platforms."
      },
      {
        title: "03. UI Design & User Experience Optimization",
        description: "Our design team focuses on creating intuitive user interfaces and seamless user experiences. Clear layouts, interactive elements, and thoughtful design improve usability and encourage long-term user engagement."
      },
      {
        title: " App Development & Core Functionality",
        description: "Using modern development frameworks, we build the core functionality of the mobile application. This includes secure backend integration, database management, and smooth interaction between features."
      },
      {
        title: "Testing & Performance Optimization",
        description: "Before launch, the application undergoes comprehensive testing to identify and resolve bugs, ensuring optimal performance and reliability across devices."
      },
      // {
      //   title: "06. Launch & Continuous Improvement",
      //   description: "After deployment, we monitor app performance, user behavior, and engagement trends to continuously improve functionality and ensure long-term success."
      // }
    ]
  },
  {
    title: "Our Proven 6-Step Web App Development Framework",
    subtitle: "Discover our structured development process designed to build scalable web applications, enhance user experience, and support consistent digital growth through reliable and high-performance web platforms.",
    steps: [
      {
        title: " Requirement Analysis & User Intent Research",
        description: "We begin by studying your business objectives, user expectations, and functional requirements to identify the key features your web application must deliver."
      },
      {
        title: "Application Architecture & System Planning",
        description: "A strong technical structure ensures long-term performance. We design the application architecture, data flow, and feature framework to support efficient operation and future scalability."
      },
      {
        title: "Interface Design & User Experience Optimization",
        description: "Our design approach focuses on intuitive interfaces, clear navigation, and responsive layouts that allow users to interact with the web application easily across devices."
      },
      {
        title: "Application Development & Feature Implementation",
        description: "Using modern development technologies, we build the core functionality of the web application, including secure backend systems, databases, and smooth integration between modules."
      },
      {
        title: "Performance Testing & Security Optimization",
        description: "Before launch, the application undergoes thorough testing to ensure stability, security, and fast performance across browsers and devices."
      },
      {
        title: "Monitoring & Continuous Improvement",
        description: "After deployment, we track user activity, system performance, and usage patterns to continuously improve functionality and maintain reliable application performance over time."
      }
    ]
  }
];

export const DevelopmentFramework = () => {
  const { activeDevelopmentTab } = useDevelopmentContext();
  const currentContent = frameworkData[activeDevelopmentTab] || frameworkData[0];

  return (
    <section className="bm-framework-section">
      <div className="bm-framework-container">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-framework-header">
            <h2 className="bm-framework-title">
              {currentContent.title}
            </h2>
            <p className="bm-framework-subtitle">
              {currentContent.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="bm-framework-grid">
          {currentContent.steps.map((step, index) => (
            <FadeIn key={index} direction="up" delay={0.1 + index * 0.1}>
              <div className="bm-framework-card">
                <h3 className="bm-card-title">
                  {step.title}
                </h3>
                <p className="bm-card-description">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.8}>
          <div className="bm-framework-footer">
            <button className="bm-btn-strategy">
              Get Custom Strategy
            </button>
            <button className="bm-btn-meeting">
              Book a Meeting
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
