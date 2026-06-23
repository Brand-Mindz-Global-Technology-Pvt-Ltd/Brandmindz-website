"use client";

import React from 'react';
import { FadeIn } from "@/components/animations/fade-in";
import { Phone } from 'lucide-react';
import "../../../style/branding/BrandingPackages.css";
import { useDevelopmentContext } from "./DevelopmentContext";
import { useRouter } from 'next/navigation';

const packagesData = [
  {
    titlePart1: "Tailored Static Development Packages",
    titlePart2: "Built for Businesses Ready to Expand",
    subtitle: "Strategy and execution delivered by experienced professionals focused on building strong digital presence and measurable growth.",
    bonus: "Complimentary Digital Growth Audit for New Clients",
    footerText: "Need a customized development roadmap?",
    footerBtn: "Schedule a Development Strategy Call",
    packages: [
      {
        title: "Foundation",
        subtitle: "For Emerging Businesses",
        features: [
          "Business positioning and digital strategy overview",
          "Website content structure recommendations",
          "Brand messaging and identity guidelines",
          "Social media profile optimization basics",
          "Content planning framework",
          "Monthly visibility insights report",
          "Guidance on digital platform setup",
          "Customer engagement strategy suggestions",
          "Dedicated strategy consultation support"
        ],
        highlight: false,
        recommended: false,
      },
      {
        title: "Growth",
        subtitle: "For Expanding Businesses",
        features: [
          "Advanced brand positioning strategy",
          "Competitor and market research analysis",
          "Website and content optimization plan",
          "Social media profile enhancement across platforms",
          "Content development strategy for brand authority",
          "Platform visibility and engagement improvement plan",
          "Performance tracking and improvement insights",
          "Digital campaign planning recommendations",
          "Strategic brand consultation and guidance"
        ],
        highlight: true,
        recommended: true,
      },
      {
        title: "Scale",
        subtitle: "For High-Growth Brands",
        features: [
          "Complete digital presence optimization strategy",
          "Multi-platform brand visibility planning",
          "Advanced content authority framework",
          "Customer experience and engagement improvements",
          "Brand positioning and market expansion strategy",
          "Visual presentation and communication alignment",
          "Conversion and growth performance analysis",
          "Continuous monitoring and strategic improvements",
          "Dedicated growth strategy support team"
        ],
        highlight: false,
        recommended: false,
      }
    ]
  },
  {
    titlePart1: "Tailored E-Commerce Development Packages",
    titlePart2: "Built for Businesses Ready to Grow Online",
    subtitle: "Strategy and implementation delivered by experienced developers focused on building scalable online stores and seamless digital shopping experiences.",
    bonus: "Free E-Commerce Website Audit for New Clients",
    footerText: "Need a customized development roadmap?",
    footerBtn: "Schedule a Development Strategy Call",
    packages: [
      {
        title: "Foundation",
        subtitle: "For New Online Stores",
        features: [
          "Business requirements analysis & store planning",
          "Basic e-commerce website setup",
          "Product catalog structure planning",
          "Standard product page layout development",
          "Secure checkout and payment gateway integration",
          "Basic design customization & branding setup",
          "Mobile responsive store configuration",
          "Initial product upload guidance",
          "Dedicated development support"
        ],
        highlight: false,
        recommended: false,
      },
      {
        title: "Growth",
        subtitle: "For Expanding Online Businesses",
        features: [
          "Advanced e-commerce platform development strategy",
          "Custom store design and UI improvements",
          "Product catalog optimization and filtering structure",
          "Product page experience optimization",
          "Secure multi-payment gateway integration",
          "Shopping cart and checkout experience enhancement",
          "Performance optimization for faster loading",
          "Customer account and order management setup",
          "Strategic consultation for store growth"
        ],
        highlight: true,
        recommended: true,
      },
      {
        title: "Scale",
        subtitle: "For High-Growth E-Commerce Brands",
        features: [
          "Complete enterprise e-commerce platform development",
          "Custom feature and functionality implementation",
          "Large catalog management system development",
          "Advanced search and product filtering experience",
          "Integrated inventory and order management systems",
          "Conversion-focused user experience improvements",
          "High-performance store optimization and scalability",
          "Advanced analytics and performance tracking setup",
          "Dedicated e-commerce development support team"
        ],
        highlight: false,
        recommended: false,
      }
    ]
  },
  {
    titlePart1: "Tailored Mobile App Development Packages",
    titlePart2: "Built for Businesses Ready to Launch Powerful Mobile Applications",
    subtitle: "Strategy and development delivered by experienced mobile app specialists focused on creating scalable, user-friendly, and high-performance applications.",
    bonus: "Free Mobile App Strategy Consultation for New Clients",
    footerText: "Need a customized development roadmap?",
    footerBtn: "Schedule a Development Strategy Call",
    packages: [
      {
        title: "Foundation",
        subtitle: "For New Mobile App Projects",
        features: [
          "Mobile app concept analysis and planning",
          "Basic UI/UX design structure for mobile screens",
          "Core feature development for essential app functions",
          "User authentication and account setup integration",
          "Mobile responsive interface development",
          "Basic database configuration and backend setup",
          "App navigation flow implementation",
          "Initial testing and functionality review",
          "Dedicated development support"
        ],
        highlight: false,
        recommended: false,
      },
      {
        title: "Growth",
        subtitle: "For Expanding Mobile Applications",
        features: [
          "Advanced mobile application development strategy",
          "Custom UI/UX design improvements for better usability",
          "Integration of APIs and third-party services",
          "Secure payment gateway and transaction setup",
          "Performance optimization for faster app response",
          "Push notification and user engagement features",
          "User data and activity management system",
          "Multi-device compatibility testing",
          "Strategic app development consultation"
        ],
        highlight: true,
        recommended: true,
      },
      {
        title: "Scale",
        subtitle: "For Enterprise Mobile Platforms",
        features: [
          "Complete mobile platform architecture development",
          "Advanced feature implementation and scalability planning",
          "Large user data management and backend infrastructure",
          "Advanced security protocols and authentication systems",
          "High-performance application optimization",
          "Integration with enterprise systems and services",
          "Advanced analytics and performance monitoring",
          "Continuous updates and feature enhancement strategy",
          "Dedicated mobile app development support team"
        ],
        highlight: false,
        recommended: false,
      }
    ]
  },
  {
    titlePart1: "Tailored Web App Development Packages",
    titlePart2: "Built for Businesses Ready to Launch Scalable Web Applications",
    subtitle: "Strategy and development delivered by experienced engineers focused on building reliable, secure, and high-performance web applications.",
    bonus: "Free Web Application Consultation for New Clients",
    footerText: "Need a customized development roadmap?",
    footerBtn: "Schedule a Development Strategy Call",
    packages: [
      {
        title: "Foundation",
        subtitle: "For New Web Applications",
        features: [
          "Business requirement analysis and feature planning",
          "Basic web application architecture design",
          "Core user interface and navigation setup",
          "User registration and authentication system",
          "Database configuration and backend setup",
          "Responsive interface for multiple devices",
          "Initial module development and testing",
          "Deployment guidance and basic documentation",
          "Dedicated development support"
        ],
        highlight: false,
        recommended: false,
      },
      {
        title: "Growth",
        subtitle: "For Expanding Web Platforms",
        features: [
          "Advanced application architecture planning",
          "Custom UI/UX improvements for better usability",
          "API integrations and third-party service connectivity",
          "Secure data handling and role-based access setup",
          "Performance optimization for faster response times",
          "Workflow automation and feature enhancements",
          "Multi-device compatibility testing",
          "User activity tracking and reporting tools",
          "Strategic development consultation"
        ],
        highlight: true,
        recommended: true,
      },
      {
        title: "Scale",
        subtitle: "For Enterprise Web Applications",
        features: [
          "Complete enterprise-level web platform development",
          "Advanced feature implementation and scalability planning",
          "Large-scale database and infrastructure management",
          "High-security authentication and access systems",
          "Performance optimization for heavy user traffic",
          "Integration with enterprise software and systems",
          "Advanced analytics and application monitoring",
          "Continuous upgrades and feature expansion strategy",
          "Dedicated web application development team"
        ],
        highlight: false,
        recommended: false,
      }
    ]
  }
];

export const DevelopmentPackages = () => {
  const { activeDevelopmentTab } = useDevelopmentContext();
  const currentContent = packagesData[activeDevelopmentTab] || packagesData[0];
  const router = useRouter();
  return (
    <section className="bm-pkg-section">
      <div className="bm-pkg-container">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-pkg-header">
            <h2 className="bm-pkg-title">
              {currentContent.titlePart1} <br />
              <span className='bm-pkg-title-span'>{currentContent.titlePart2}</span>
            </h2>
            <p className="bm-pkg-subtitle">
              {currentContent.subtitle}
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="bm-pkg-bonus-banner">
            <p className="bm-pkg-bonus-text">
              <strong>Exclusive Bonus:</strong> {currentContent.bonus}
            </p>
          </div>
        </FadeIn>

        <div className="bm-pkg-grid">
          {currentContent.packages.map((pkg, index) => (
            <FadeIn key={index} direction="up" delay={0.1 + index * 0.1}>
              <div className={`bm-pkg-card`}>
                {pkg.recommended && (
                  <div className="bm-pkg-tag">Recommended</div>
                )}
                <h3 className="bm-pkg-card-title">{pkg.title}</h3>
                <p className="bm-pkg-card-desc">{pkg.subtitle}</p>
                
                <ul className="bm-pkg-list">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="bm-pkg-list-item">
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="bm-pkg-btn">
                  Get a Proposal
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.5}>
          <div className="bm-pkg-footer">
            <p className="bm-pkg-footer-text">
              {currentContent.footerText}
            </p>
            <div className="bm-pkg-cta" onClick={() => router.push("/contact")}>
              <div className="bm-pkg-cta-icon-wrapper">
                <Phone size={15} color="white" fill="white" />
              </div>
              <span>{currentContent.footerBtn}</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
