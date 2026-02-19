"use client";

import React, { useState, useRef, useEffect } from "react";
import "../../../style/home/aboutus.css";
import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowLeft } from "lucide-react";

import founderImg from "../../../assets/branding/Frame.png";



export const Bradingabount = () => {
  const [activeTab, setActiveTab] = useState(1);

  const menuItems = [
    {
      id: 1,
      label: "Personal Branding for Startup Founders",
      type: "standard",
      subtitle: "Personal Branding for Startup Founders",
      title: `Lead Your Startup. <br/>Own Your Story.`,
      img: founderImg,
      desc: [
        "As a startup founder, your personal brand is your most powerful asset. We help you define your vision, showcase your expertise, and position yourself as a credible leader who inspires investors, partners, and customers. Turn your ideas into a brand that builds trust, influence, and growth.",
        "We help startup founders craft a personal brand that reflects their vision and expertise. Your story becomes your strongest asset, attracting investors, partners, and the right audience. We position you as a credible leader in your industry, building trust and influence."
      ],
      quote: "Persona crafting",
      btn: true
    },
    {
      id: 2,
      label: "Personal Branding for SaaS Product Foundersr",
      type: "standard",
      subtitle: "Personal Branding for SaaS Product Foundersr",
      title: "Personal Branding for SaaS Product Foundersr",
      img: founderImg,
      desc: [
        "As a startup founder, your personal brand is your most powerful asset. We help you define your vision, showcase your expertise, and position yourself as a credible leader who inspires investors, partners, and customers. Turn your ideas into a brand that builds trust, influence, and growth.",
        "We help startup founders craft a personal brand that reflects their vision and expertise. Your story becomes your strongest asset, attracting investors, partners, and the right audience. We position you as a credible leader in your industry, building trust and influence."
      ]
      , 
      quote: "Persona crafting",
      btn: false

    },
    {
      id: 4,
      label: "Personal Branding for Creators & Solopreneurs",
      type: "standard",
      subtitle: "Personal Branding for Creators & Solopreneurs",
      title: "Personal Branding for Creators & Solopreneurs",
      img:founderImg,
     desc: [
        "As a startup founder, your personal brand is your most powerful asset. We help you define your vision, showcase your expertise, and position yourself as a credible leader who inspires investors, partners, and customers. Turn your ideas into a brand that builds trust, influence, and growth.", 
        "We help startup founders craft a personal brand that reflects their vision and expertise. Your story becomes your strongest asset, attracting investors, partners, and the right audience. We position you as a credible leader in your industry, building trust and influence." 
      ],
      quote: "Persona crafting",
      btn: false

    },
    {
      id: 5,
      label: "Personal Branding for Influencers",
      type: "standard",
      subtitle: "Personal Branding for Influencers",
      title: "Personal Branding for Influencers",
      img:founderImg,
      desc: [
        "As a startup founder, your personal brand is your most powerful asset. We help you define your vision, showcase your expertise, and position yourself as a credible leader who inspires investors, partners, and customers. Turn your ideas into a brand that builds trust, influence, and growth.", 
        "We help startup founders craft a personal brand that reflects their vision and expertise. Your story becomes your strongest asset, attracting investors, partners, and the right audience. We position you as a credible leader in your industry, building trust and influence." 
      ],
      quote: "Persona crafting",
      btn: false

    }, {
      id: 8,
      label: "Personal Branding for Entrepreneurs",
      subtitle: "Personal Branding for Entrepreneurs",
      type: "standard",
      title: "Personal Branding for Entrepreneurs",
      img:founderImg,
      subdesc: "",
     desc: [
        "As a startup founder, your personal brand is your most powerful asset. We help you define your vision, showcase your expertise, and position yourself as a credible leader who inspires investors, partners, and customers. Turn your ideas into a brand that builds trust, influence, and growth.", 
        "We help startup founders craft a personal brand that reflects their vision and expertise. Your story becomes your strongest asset, attracting investors, partners, and the right audience. We position you as a credible leader in your industry, building trust and influence." 
      ],
      quote: "Persona crafting",
    },
    {
      id: 9, label: "Personal Branding for Coaches, Consultants & Public Speakers",
      subtitle: "Personal Branding for Coaches, Consultants & Public Speakers",

      title: "Personal Branding for Coaches, Consultants & Public Speakers",
      subdesc: "",
      img: founderImg,
      quote: "Persona crafting",
     desc: [
        "As a startup founder, your personal brand is your most powerful asset. We help you define your vision, showcase your expertise, and position yourself as a credible leader who inspires investors, partners, and customers. Turn your ideas into a brand that builds trust, influence, and growth.", 
        "We help startup founders craft a personal brand that reflects their vision and expertise. Your story becomes your strongest asset, attracting investors, partners, and the right audience. We position you as a credible leader in your industry, building trust and influence." 
      ],
    },

  ];

  const current = menuItems.find(item => item.id === activeTab) || menuItems[0];
  const [openImg, setOpenImg] = useState(null);


  const ScrollLine = ({ content }) => {
    const [isPassed, setIsPassed] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const triggerPoint = window.innerHeight * 0.5;

          if (rect.top < triggerPoint) {
            setIsPassed(true);
          } else {
            setIsPassed(false);
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check

      return () => window.removeEventListener("scroll", handleScroll);
    },[]);

    return (
      <span
        ref={ref}
        className={`bm-scroll-line ${isPassed ? "active" : ""}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  const ScrollParagraph = ({ text }) => {
    const lines = text.split(/(?<=\. )/g);

    return (
      <p className="bm-paragraph-wrapper">
        {lines.map((line, idx) => (
          <ScrollLine key={idx} content={line} />
        ))}
      </p>
    );
  };


  const renderContent = () => {
    switch (current.type) {
      default:
        return (
          <div className="bm-standard-layout">
            <div className="bm-about-text-side">
              <p className="bm-about-subtitle">{current.subtitle}</p>
<h2
  className="bm-about-main-title"
  dangerouslySetInnerHTML={{ __html: current.title }}
></h2>              {
                current.subdesc && (
                  <div className="bm-about-subdesc">
                    {current?.subdesc}
                  </div>
                )
              }

              <div
                className="bm-about-description"
              >
                {current.desc.map((text, index) => (
                  <ScrollParagraph key={index} text={text} />
                ))}
              </div>
              {
                current.btn && (
                  <button className="bm-about-learn-btn">Learn More</button>

                )
              }
            </div>
            <div className="bm-about-image-side">
              <div className="bm-about-img-frame">
                <Image src={current.img} alt={current.label} priority />
                <div className="bm-about-quote-overlay-branding">
                  {current.quote}
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="bm-about-section">
      <div className="bm-about-container">
        {/* Sidebar */}
        <div className="bm-about-sidebar">
          <ul className="bm-about-menu">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`bm-about-menu-item ${activeTab === item.id ? "active" : ""}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="bm-about-id">{item.id.toString().padStart(2, "0")}</span>
                <span className="bm-about-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dynamic Content Area */}
        <div className="bm-about-content-wrapper">
          <FadeIn key={activeTab} delay={0.2}>
            {renderContent()}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

