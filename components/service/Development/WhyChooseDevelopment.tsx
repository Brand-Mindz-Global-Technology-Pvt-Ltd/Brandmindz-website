"use client";

import React from 'react';
import { FadeIn } from "@/components/animations/fade-in";
import "../../../style/branding/WhyChooseBranding.css";
import Image from 'next/image';

// Import assets from root assets folder
import FrameIcon from "../../../assets/branding/frame.webp";
import GroupIcon from "../../../assets/branding/group.webp";
import Group1Icon from "../../../assets/branding/group1.webp";
import { useDevelopmentContext } from "./DevelopmentContext";

const whyChooseData = [
  {
    title: "Why Choose Brand Mindz for Static Development?",
    subtitle: "Many websites look good but perform poorly. We build fast, secure, and well-structured static websites that deliver better performance, reliability, and user experience.",
    reasons: [
      {
        number: "1",
        icon: FrameIcon,
        title: "Performance-Focused Development",
        desc: "Our static websites are designed for speed and efficiency, ensuring faster page load times and smooth browsing experiences across devices."
      },
      {
        number: "2",
        icon: GroupIcon,
        title: "Clean & Structured Code",
        desc: "We build websites with well-organized and lightweight code that improves maintainability, stability, and overall website performance."
      },
      {
        number: "3",
        icon: Group1Icon,
        title: "SEO-Friendly Architecture",
        desc: "Our development process follows SEO best practices so that search engines can easily crawl and index your website content."
      },
      {
        number: "4",
        icon: Group1Icon,
        title: "Mobile-Responsive Design",
        desc: "Every static website we build is fully responsive, ensuring a seamless experience on desktops, tablets, and mobile devices."
      },
      {
        number: "5",
        icon: GroupIcon,
        title: "Secure & Reliable Hosting",
        desc: "Static websites have fewer vulnerabilities. Our approach focuses on security, stability, and dependable hosting environments."
      },
      {
        number: "6",
        icon: FrameIcon,
        title: "Scalable Website Structure",
        desc: "We design websites that are easy to expand in the future, allowing your business to grow without needing a complete rebuild."
      }
    ]
  },
  {
    title: "Why Choose Brand Mindz for E-Commerce Development?",
    subtitle: "Many agencies only build online stores. At Brand Mindz, we create structured e-commerce platforms designed to improve customer experience, strengthen product discoverability, and support long-term online business growth.",
    reasons: [
      {
        number: "1",
        icon: FrameIcon,
        title: "Strategy-Driven Store Development",
        desc: "Our e-commerce solutions begin with detailed business analysis, customer behavior insights, and platform planning to ensure the store structure supports scalable growth."
      },
      {
        number: "2",
        icon: GroupIcon,
        title: "Product Catalog & Store Architecture Expertise",
        desc: "We design organized product catalogs with proper categories, filters, and navigation so customers can easily discover and explore products."
      },
      {
        number: "3",
        icon: Group1Icon,
        title: "Conversion-Focused Product Pages",
        desc: "We build product pages with clear content structure, essential product details, and user-friendly layouts that encourage confident purchase decisions."
      },
      {
        number: "4",
        icon: Group1Icon,
        title: "Engaging Visual Store Experience",
        desc: "Our design approach focuses on strong visual presentation, structured product displays, and consistent brand identity across the entire store."
      },
      {
        number: "5",
        icon: GroupIcon,
        title: "Transparent Insights & Performance Monitoring",
        desc: "We help businesses track store activity, customer behavior, and conversion performance using structured analytics and reporting tools."
      },
      {
        number: "6",
        icon: FrameIcon,
        title: "Long-Term E-Commerce Growth",
        desc: "Our goal is to build scalable online stores that support future expansion, continuous improvements, and sustainable digital commerce success."
      }
    ]
  },
  {
    title: "Why Choose Brand Mindz for Mobile App Development?",
    subtitle: "Many companies simply build apps and stop there. At Brand Mindz, we design structured mobile applications that deliver strong performance, smooth user experiences, and scalable digital solutions for long-term growth.",
    reasons: [
      {
        number: "1",
        icon: FrameIcon,
        title: "Strategy-Driven App Development",
        desc: "Our mobile development process begins with detailed research on business goals, user expectations, and app functionality to create a clear development strategy."
      },
      {
        number: "2",
        icon: GroupIcon,
        title: "App Architecture & Feature Expertise",
        desc: "We design robust application structures that support smooth navigation, secure functionality, and efficient performance across different mobile platforms."
      },
      {
        number: "3",
        icon: Group1Icon,
        title: "User-Focused App Experience",
        desc: "Our team builds intuitive interfaces and feature flows that make mobile applications easy to use while improving engagement and user satisfaction."
      },
      {
        number: "4",
        icon: Group1Icon,
        title: "Modern Visual & Interface Design",
        desc: "We create visually appealing mobile interfaces that highlight key features, improve usability, and maintain consistent brand identity."
      },
      {
        number: "5",
        icon: GroupIcon,
        title: "Transparent Development Insights",
        desc: "We provide clear development updates, progress tracking, and performance insights throughout the mobile app development process."
      },
      {
        number: "6",
        icon: FrameIcon,
        title: "Long-Term Mobile Platform Growth",
        desc: "Our goal is to build scalable mobile applications that can evolve with new features, updates, and user demands over time."
      }
    ]
  },
  {
    title: "Why Choose Brand Mindz for Web App Development?",
    subtitle: "Many companies build web applications without a clear strategy. At Brand Mindz, we develop structured web applications that improve user experience, streamline business operations, and support long-term digital growth.",
    reasons: [
      {
        number: "1",
        icon: FrameIcon,
        title: "Strategy-Focused Development Approach",
        desc: "Our development process begins with detailed planning based on business goals, user requirements, and platform functionality to ensure the application delivers real value."
      },
      {
        number: "2",
        icon: GroupIcon,
        title: "Application Architecture & System Expertise",
        desc: "We design reliable application structures that support secure data handling, smooth navigation, and scalable performance for growing digital platforms."
      },
      {
        number: "3",
        icon: Group1Icon,
        title: "User-Centered Application Design",
        desc: "Our team creates intuitive interfaces and structured workflows that allow users to interact with web applications easily and efficiently."
      },
      {
        number: "4",
        icon: Group1Icon,
        title: "High-Quality Interface & Visual Experience",
        desc: "We focus on modern design standards and clear visual presentation to ensure web applications remain engaging, accessible, and consistent across devices."
      },
      {
        number: "5",
        icon: GroupIcon,
        title: "Transparent Development Process",
        desc: "Clients receive regular progress updates, development insights, and clear communication throughout the entire web application development cycle."
      },
      {
        number: "6",
        icon: FrameIcon,
        title: "Scalable Digital Platform Growth",
        desc: "Our goal is to build web applications that can evolve with your business, supporting future upgrades, feature expansions, and long-term performance improvements."
      }
    ]
  }
];

export const WhyChooseDevelopment = () => {
  const { activeDevelopmentTab } = useDevelopmentContext();
  const currentContent = whyChooseData[activeDevelopmentTab] || whyChooseData[0];

  return (
    <section className="bm-why-branding-section">
      <div className="bm-why-branding-container">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-why-branding-header">
            <h2 className="bm-why-branding-title">
              {currentContent.title}
            </h2>
            <p className="bm-why-branding-subtitle">
              {currentContent.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="bm-why-branding-grid">
          {currentContent.reasons.map((reason, index) => (
            <FadeIn key={index} direction="up" delay={0.2 + index * 0.1}>
              <div className="bm-why-branding-card">
                <div className="bm-why-branding-number">{reason.number}</div>
                <div className="bm-why-branding-icon-box">
                  <Image src={reason.icon} alt={reason.title} className="bm-why-branding-icon" />
                </div>
                <div className="bm-why-branding-content">
                  <h3 className="bm-why-branding-card-title">{reason.title}</h3>
                  <p className="bm-why-branding-card-desc">{reason.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
