"use client";

import React, { useState, useRef, useEffect } from "react";
import "../../../style/branding/BrandingAbout.css";
import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowRight } from "lucide-react";

import founderImg from "../../../assets/branding/Braddingabount.png";

export const Ecommerceabout = () => {
  const [activeTab, setActiveTab] = useState(1);

  const menuItems = [
    {
      id: 1,
      label: "Personal Branding for Startup Founders",
      subtitle: "Personal Branding for Startup Founders",
      title: `Lead Your Startup.<br/> Own Your Story.`,
      img: founderImg,
      desc: [
        "As a startup founder, your personal brand is your most powerful asset. We help you define your vision, showcase your expertise, and position yourself as a credible leader who inspires investors, partners, and customers. Turn your ideas into a brand that builds trust, influence, and growth.",
        `We help startup founders craft a personal brand that reflects their vision and expertise. Your story becomes your strongest asset, attracting investors, partners, and the right audience. We position you as a credible leader in your industry, building trust and influence.We help startup founders craft a personal brand that reflects their vision and expertise. Your story becomes your strongest asset, attracting investors, partners, and the right audience. We position you as a credible leader in your industry, building trust and influence. Your story becomes your strongest asset, attracting investors, partners, and the right audience. We position you as a credible leader in your industry, building trust and influence.
Your story becomes your strongest asset, attracting investors, partners, and the right audience. We position you as a credible leader in your industry, building trust and influence. We position you as a credible leader in your industry, buildin influence.`],
      quoteLine1: "<span class='bm-grey-text '>Your</span> Startup Is Your Product.",
      quoteLine2: "You <span class='bm-grey-text'>are</span> the <span class='bm-grey-text'>Brand.</span>",
      quoteOverlay: "Persona crafting",
      btn: true
    },
    {
      id: 2,
      label: "Personal Branding for SaaS Product Founders",
      subtitle: "Personal Branding for SaaS Product Founders",
      title: "Scale Your SaaS. <br/>Build Authority.",
      img: founderImg,
      desc: [
        "Position yourself as the face of your product. We help SaaS founders build authority that translates into higher LTV, lower CAC, and a more loyal user base through strategic personal branding.",
        "Your expertise is the ultimate competitive advantage in a crowded market. Let's showcase it."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Software Is Your Tool.",
      quoteLine2: "You <span class='bm-grey-text normal'>are the</span> <span class='bm-grey-text'>Authority.</span>",
      quoteOverlay: "Persona crafting",
      btn: true
    },
    {
      id: 3,
      label: "Personal Branding for Creators & Solopreneurs",
      subtitle: "Personal Branding for Creators & Solopreneurs",
      title: "Own Your Audience. <br/>Monetize Your Mind.",
      img: founderImg,
      desc: [
        "Turn your unique perspective into a scalable personal brand. We help creators and solopreneurs build a platform that attracts opportunities while they sleep.",
        "Don't just create content. Build an ecosystem of trust."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Content Is Your Asset.",
      quoteLine2: "You <span class='bm-grey-text normal'>are the</span> <span class='bm-grey-text'>Platform.</span>",
      quoteOverlay: "Persona crafting",
      btn: true
    },
    {
      id: 4,
      label: "Personal Branding for Influencers",
      subtitle: "Personal Branding for Influencers",
      title: "From Influence. <br/>To Impact.",
      img: founderImg,
      desc: [
        "Move beyond likes and views. We help influencers evolve into thought leaders and business owners by refining their brand architecture and messaging.",
        "Scale your influence into a sustainable professional legacy."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Reach Is Your Power.",
      quoteLine2: "You <span class='bm-grey-text normal'>are the</span> <span class='bm-grey-text'>Impact.</span>",
      quoteOverlay: "Persona crafting",
      btn: true
    },
    {
      id: 5,
      label: "Personal Branding for Entrepreneurs",
      subtitle: "Personal Branding for Entrepreneurs",
      title: "Legacy Building. <br/>Brand Mastery.",
      img: founderImg,
      desc: [
        "Serial entrepreneurs need a consistent personal brand that bridges their various ventures. We craft a narrative that connects your past successes to your future vision.",
        "Build a brand that outlasts any single business."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Business Is Your Work.",
      quoteLine2: "You <span class='bm-grey-text normal'>are the</span> <span class='bm-grey-text'>Legacy.</span>",
      quoteOverlay: "Persona crafting",
      btn: true
    },
    {
      id: 6,
      label: "Personal Branding for Freelancers",
      subtitle: "Personal Branding for Freelancers",
      title: "Stand Out. <br/>Charge What You're Worth.",
      img: founderImg,
      desc: [
        "Stop competing on price. We help high-level freelancers position themselves as specialists so they can attract premium clients and higher-ticket projects.",
        "Turn your skills into a high-demand personal brand."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Skill Is Your Service.",
      quoteLine2: "You <span class='bm-grey-text normal'>are the</span> <span class='bm-grey-text'>Specialist.</span>",
      quoteOverlay: "Persona crafting",
      btn: true
    },
    {
      id: 7,
      label: "Personal Branding for Coaches & Speakers",
      subtitle: "Personal Branding for Coaches, Consultants & Speakers",
      title: "Master the Stage. <br/>Own the Room.",
      img: founderImg,
      desc: [
        "Your voice is your product. We help coaches and speakers refine their messaging and visual presence to dominate stages and consultation rooms worldwide.",
        "Be the expert that everyone wants to hear from."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Voice Is Your Message.",
      quoteLine2: "You <span class='bm-grey-text normal'>are the</span> <span class='bm-grey-text'>Expert.</span>",
      quoteOverlay: "Persona crafting",
      btn: true
    }
  ];

  const current = menuItems.find(item => item.id === activeTab) || menuItems[0];

  const ScrollLine = ({ content }) => {
    const [isPassed, setIsPassed] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const triggerPoint = window.innerHeight * 0.5;
          setIsPassed(rect.top < triggerPoint);
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <span
        ref={ref}
        className={`bm-scroll-line-branding ${isPassed ? "active" : ""}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  const ScrollParagraph = ({ text }) => {
    const lines = text.split(/(?<=\. )/g);
    return (
      <p className="bm-about-paragraph-branding">
        {lines.map((line, idx) => (
          <ScrollLine key={idx} content={line} />
        ))}
      </p>
    );
  };

  return (
    <section className="bm-about-section-branding">
      <div className="bm-about-container-branding">
        {/* Sidebar - 20% width via CSS */}
        <div className="bm-about-sidebar-branding">
          <ul className="bm-about-menu-branding">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`bm-about-menu-item-branding ${activeTab === item.id ? "active" : ""}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="bm-about-id-branding">{item.id.toString().padStart(2, "0")}</span>
                <span className="bm-about-label-branding">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="bm-about-content-wrapper-branding">
          <FadeIn key={activeTab} delay={0.2}>
            <div className="bm-standard-layout-branding">
              <div className="bm-about-text-side-branding">
                <p className="bm-about-subtitle-branding">{current.subtitle}</p>
                <h2
                  className="bm-about-main-title-branding"
                  dangerouslySetInnerHTML={{ __html: current.title }}
                ></h2>
                
                <div className="bm-about-description-branding">
                  {current.desc.map((text, index) => (
                    <ScrollParagraph key={index} text={text} />
                  ))}
                </div>

                {current.btn && (
                  <button className="bm-about-learn-btn-branding">
                    <div className="bm-btn-icon-branding">
                      <ArrowRight size={18} />
                    </div>
                    Brand Yourself
                  </button>
                )}
              </div>

              <div className="bm-about-image-side-branding">
                <div className="bm-about-quote-container-branding">
                  {/* Decorative Quote Icon - 78x74px */}
                  <svg className="bm-about-quote-icon-branding" viewBox="0 0 78 74" fill="currentColor">
                    <path d="M19.5 0C8.73 0 0 8.73 0 19.5V74H34V39.5H14.5V19.5C14.5 16.74 16.74 14.5 19.5 14.5H34V0H19.5ZM63.5 0C52.73 0 44 8.73 44 19.5V74H78V39.5H58.5V19.5C58.5 16.74 60.74 14.5 63.5 14.5H78V0H63.5Z" />
                  </svg>
                  <h4 className="bm-about-quote-text-branding" dangerouslySetInnerHTML={{ __html: current.quoteLine1 }}></h4>
                  <h4 className="bm-about-quote-text-branding" dangerouslySetInnerHTML={{ __html: current.quoteLine2 }}></h4>
                </div>
                
                {/* Image Frame - Exact 379x541px */}
                <div className="bm-about-img-frame-branding">
                  <Image src={current.img} alt={current.label} priority width={379} height={541} />
                  <div className="bm-about-quote-overlay-branding">
                    {current.quoteOverlay}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

