"use client";

import React, { useState, useRef, useEffect } from "react";
import "../../style/home/aboutus.css";
import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowLeft } from "lucide-react";

// Asset Imports (Replace with your actual paths)
import founderImg from "../../assets/HomeSection/about/frame.webp";
import founderImg1 from "../../assets/HomeSection/about/210446c72e34182875e9edee3773a3ddc673e220.webp";
import vision1 from "../../assets/HomeSection/about/mingcute_target-line.webp";
import vision2 from "../../assets/HomeSection/about/material-symbols_target.webp";
import vision3 from "../../assets/HomeSection/about/lets-icons_target.webp";


import NoPoverty1 from '../../assets/HomeSection/about/nopoverty1.webp'
import Zero2 from '../../assets/HomeSection/about/zero2.webp'
import Good3 from '../../assets/HomeSection/about/good3.webp'
import Quality4 from '../../assets/HomeSection/about/quality4.webp'
import Equallity5 from '../../assets/HomeSection/about/equallity5.webp'
import Clean6 from '../../assets/HomeSection/about/clean6.webp'
import Energy7 from '../../assets/HomeSection/about/energy7.webp'
import Growth8 from '../../assets/HomeSection/about/growth8.webp'
import Infr9 from '../../assets/HomeSection/about/infr9.webp'
import Reduced10 from '../../assets/HomeSection/about/reduced10.webp'
import Communities11 from '../../assets/HomeSection/about/communities11.webp'
import Production12 from '../../assets/HomeSection/about/production12.webp'
import Action13 from '../../assets/HomeSection/about/action13.webp'
import Life14 from '../../assets/HomeSection/about/life14.webp'
import Lifeland15 from '../../assets/HomeSection/about/lifeland15.webp'
import Peace16 from '../../assets/HomeSection/about/peace16.webp'
import Goals17 from '../../assets/HomeSection/about/goals17.webp'

const Aboutus = () => {
  const [activeTab, setActiveTab] = useState(1);
  

  const menuItems = [
    {
      id: 1,
      label: "About Us",
      type: "standard",
      subtitle: "About Brand Mindz Global",
      title: "A Results Driven Digital Agency Focused on Growth",
      img: founderImg,
      desc: [
        "We are a full-stack marketing agency built to help businesses grow with clarity, structure, and accountability. We work at the intersection of design, marketing, and technology, enabling brands to build strong digital foundations and scale with confidence.",
        "Our approach is strategy-led and execution-focused. Every engagement is driven by clear objectives, disciplined processes, and measurable outcomes. We partner with startups, growing businesses, and enterprises that value long-term thinking, ethical practices, and consistency in delivery."
      ],
      quote: "Promise what you deliver, and deliver what you promised.",
      btn: true
    },
    {
      id: 2,
      label: "About Founder",
      type: "standard",
      subtitle: "Our Founder",
      title: "Founder of ideas that turn into successful brands",
      img: founderImg1,
      desc: [
        `R.Vasanth Kumar, Founder & CEO of Brand Mindz Global Technology Pvt Ltd, brings over 10+ years of experience leading marketing teams in large corporates, conducting 500+ training program as a guest speaker and mentoring 20,000+ entrepreneurs across India. An Ex-Google & HCL expert and an official mentor appointed by the Government of Tamil Nadu, he works closely with startups to help them scale into strong, trusted brands. `,
        `What began as a family business failure became his driving force motivating Vasanth to guide founders toward sustainable growth and long-term success. Vasanth is passionate about supporting entrepreneurs and serves as an official mentor for Mentor TN, a government initiative for startup growth.`
      ], quote: "Promise what you deliver, and deliver what you promised.",
      btn: false

    },
    {
      id: 3,
      label: "Vision & Mission & Goal",
      type: "vision",
      subtitle: "Our Roadmap",
      title: "Driven by vision, guided by mission, and focused on helping brands grow",
      visions: [
        { title: "Our Vision", text: "To become India's most trusted full stack marketing and digital distribution partner." },
        { title: "Our Goal", text: "To help 1000+ brands achieve sustainable digital transformation by 2030." },
        { title: "Our Mission", text: "To drive scalable business growth through experience-led marketing and technology." },
      ]
    },
    {
      id: 4,
      label: "Our Core Values",
      type: "standard",
      subtitle: "Our Core Values",
      title: "We value honesty, bold ideas, and measurable impact.",
      img: founderImg1,
      desc: [
        `R. Vasanth Kumar, Founder & CEO of Brand Mindz Global Technology Pvt Ltd, brings over 10+ years of experience leading marketing teams in large corporates, conducting 500+ training program as a guest speaker and mentoring 20,000+ entrepreneurs across India. An Ex-Google & HCL expert and an official mentor appointed by the Government of Tamil Nadu, he works closely with startups to help them scale into strong, trusted brands.`,
        `What began as a family business failure became his driving force motivating Vasanth to guide founders toward sustainable growth and long-term success. Vasanth is passionate about supporting entrepreneurs and serves as an official mentor for Mentor TN, a government initiative for startup growth.`
      ], quote: "Promise what you deliver, and deliver what you promised.",
      btn: false

    },
    {
      id: 5,
      label: "Our Growth",
      type: "standard",
      subtitle: "Our Growth",
      title: "We value honesty, bold ideas, and measurable impact.",
      img: founderImg1,
      desc: [
        `R. Vasanth Kumar, Founder & CEO of Brand Mindz Global Technology Pvt Ltd, brings over 10+ years of experience leading marketing teams in large corporates, conducting 500+ training program as a guest speaker and mentoring 20,000+ entrepreneurs across India. An Ex-Google & HCL expert and an official mentor appointed by the Government of Tamil Nadu, he works closely with startups to help them scale into strong, trusted brands.`,
        `What began as a family business failure became his driving force motivating Vasanth to guide founders toward sustainable growth and long-term success. Vasanth is passionate about supporting entrepreneurs and serves as an official mentor for Mentor TN, a government initiative for startup growth.`
      ], quote: "Promise what you deliver, and deliver what you promised.",
      btn: false

    },

    {
      id: 6, label: "Customer Service Philosophy", title: "Committed to clarity, consistency, and customer success.",
      img: founderImg1,
      subtitle: "Customer Service Philosophy",

      quote: "Promise what you deliver, and deliver what you promised.",

      desc: [
        `We operate as responsible partners, not just service vendors. We take full ownership of every project and every promise we make. Our work is driven by transparency, clear communication, and accountability at every stage. We believe real success comes from long-term collaboration, not short-term tasks. That’s why we focus on delivering meaningful results that create trust, value, and sustainable growth for the brands we work with.`,
        `We operate as responsible partners, not just service vendors. We take full ownership of every project and every promise we make. Our work is driven by transparency, accountability, and clear communication at every stage. We focus on building long-term relationships while delivering meaningful results that create trust, value, and sustainable growth.`]
    },

    {
      id: 7,
      label: "Sustainability",
      type: "sustainability",
      subtitle: "Sustainability",
      title: "Building growth that respects people and the planet",
      desc: "Brand Mindz aligns its CSR and organizational practices with the United Nations Sustainable Development Goals (SDGs).",
      sdgs: [
        {
          id: 1,
          title: "No Poverty",
          tag: "Alignment Type",
          image: NoPoverty1,
          description: "Detailed description for SDG 1...",
          contributions: [
            "Contribution point 1",
            "Contribution point 2",
            "Contribution point 3"
          ],
          footerNote: "This alignment is supported by CSR Focus Area..."
        },
        {
          id: 2,
          title: "Zero Hunger",
          tag: "Alignment Type",
          image: Zero2,
          description: "Detailed description for SDG 2...",
          contributions: [
            "Contribution point 1",
            "Contribution point 2"
          ],
          footerNote: "This alignment is supported by CSR Focus Area..."
        },
        {
          id: 3,
          title: "Good Health and Well-being",
          tag: "Alignment Type",
          image: Good3,
          description: "Detailed description for SDG 3...",
          contributions: [
            "Contribution point 1",
            "Contribution point 2",
            "Contribution point 3"
          ],
          footerNote: "This alignment is supported by CSR Focus Area..."
        },
        {
          id: 4,
          title: "Quality Education",
          tag: "Alignment Type",
          image: Quality4,
          description: "Brand Mindz aligns its CSR and organizational practices with the United Nations Sustainable Development Goals (SDGs), especially SDG 5: Gender Equality. The company promotes women empowerment, supports women-led enterprises and women entrepreneurs, and ensures equal opportunity employment.",
          contributions: [
            "Entrepreneurship and skill development initiatives for women",
            "Digital literacy and financial awareness programs",
            "Inclusive hiring practices that promote women participation in the workforce"
          ],
          subtitle: "Quality Education",

          footerNote: "This alignment is directly supported by CSR Focus Area 5.1 – Women Empowerment."
        },
        {
          id: 5,
          title: "Leadership knows No Gender",
          tag: "Strong and Direct Alignment",
          image: Equallity5,
          description: "Brand Mindz aligns its CSR and organizational practices with the United Nations Sustainable Development Goals (SDGs), especially SDG 5: Gender Equality. The company promotes women empowerment, supports women-led enterprises and women entrepreneurs, and ensures equal opportunity employment.",
          contributions: [
            "Entrepreneurship and skill development initiatives for women",
            "Digital literacy and financial awareness programs",
            "Inclusive hiring practices that promote women participation in the workforce"
          ],
          subtitle: "Gender Equality",
          footerNote: "This alignment is directly supported by CSR Focus Area 5.1 – Women Empowerment."
        },
        {
          id: 6,
          title: "Clean Water and Sanitation",
          tag: "Alignment Type",
          image: Clean6,
          description: "Detailed description for SDG 6...",
          contributions: [
            "Contribution point 1",
            "Contribution point 2",
            "Contribution point 3"
          ],
          footerNote: "This alignment is supported by CSR Focus Area..."
        },
        {
          id: 6,
          title: "Clean Water and Sanitation",
          tag: "Alignment Type",
          image: Clean6,
          description: "Clean water initiatives...",
          contributions: ["Water projects", "Sanitation programs"],
          footerNote: "Supported by CSR Focus Area..."
        },

        {
          id: 7,
          title: "Affordable and Clean Energy",
          tag: "Alignment Type",
          image: Energy7,
          description: "Energy initiatives...",
          contributions: ["Solar awareness"],
          footerNote: "Supported by CSR Focus Area..."
        },

        {
          id: 8,
          title: "Decent Work and Economic Growth",
          tag: "Alignment Type",
          image: Growth8,
          description: "Economic growth initiatives...",
          contributions: ["Job training"],
          footerNote: "Supported by CSR Focus Area...",
          subtitle: "Decent Work  Economic Growth",

        },

        {
          id: 9,
          title: "Industry, Innovation and Infrastructure",
          tag: "Alignment Type",
          image: Infr9,
          description: "Innovation initiatives...",
          contributions: ["Tech innovation"],
          footerNote: "Supported by CSR Focus Area..."
        },

        {
          id: 10,
          title: "Reduced Inequalities",
          tag: "Alignment Type",
          image: Reduced10,
          description: "Inclusive programs...",
          contributions: ["Equality initiatives"],
          footerNote: "Supported by CSR Focus Area...",
          subtitle: "Reduced Inequalities",

        },

        {
          id: 11,
          title: "Sustainable Cities and Communities",
          tag: "Alignment Type",
          image: Communities11,
          description: "Community initiatives...",
          contributions: ["Smart cities"],
          footerNote: "Supported by CSR Focus Area..."
        },

        {
          id: 12,
          title: "Responsible Consumption and Production",
          tag: "Alignment Type",
          image: Production12,
          description: "Sustainable production...",
          contributions: ["Waste reduction"],
          footerNote: "Supported by CSR Focus Area..."
        },

        {
          id: 13,
          title: "Climate Action",
          tag: "Alignment Type",
          image: Action13,
          description: "Climate initiatives...",
          contributions: ["Carbon reduction"],
          footerNote: "Supported by CSR Focus Area...",
          subtitle: "Climate Action",

        },

        {
          id: 14,
          title: "Life Below Water",
          tag: "Alignment Type",
          image: Life14,
          description: "Ocean protection...",
          contributions: ["Ocean cleanup"],
          footerNote: "Supported by CSR Focus Area..."
        },

        {
          id: 15,
          title: "Life on Land",
          tag: "Alignment Type",
          image: Lifeland15,
          description: "Forest protection...",
          contributions: ["Tree plantation"],
          footerNote: "Supported by CSR Focus Area..."
        },

        {
          id: 16,
          title: "Peace, Justice and Strong Institutions",
          tag: "Alignment Type",
          image: Peace16,
          description: "Justice initiatives...",
          contributions: ["Legal awareness"],
          footerNote: "Supported by CSR Focus Area..."
        },

        {
          id: 17,
          title: "Partnerships for the Goals",
          tag: "Alignment Type",
          image: Goals17,
          description: "Global partnerships...",
          contributions: ["CSR partnerships"],
          footerNote: "Supported by CSR Focus Area..."
        }
      ]
    },
    {
      id: 8,
      label: "Our Work Culture",
      subtitle: "Our Work Culture",
      type: "standard",
      title: "Respect, Responsibility, and Growth for All",
      img: founderImg1,
      subdesc: "Ubuntu — “I am because we are; because we are, you are.”",
      desc: [
        `This philosophy guides how we work together as one team. We believe in shared ownership, mutual respect, and collective accountability in everything we do. By supporting one another and working toward common goals, we create an environment where every contribution matters and success is achieved through unity, trust, and collaboration.`,
        `We believe progress is strongest when it is built together. Our approach is rooted in cooperation, fairness, and a sense of responsibility toward one another. By encouraging open dialogue and shared decision-making, we strengthen trust and alignment across teams and partners. `
      ],
      quote: "Promise what you deliver, and deliver what you promised.",
    },
    {
      id: 9, label: "Awards & Accolades",
      subtitle: "Awards & Accolades",

      title: "Respect, Responsibility, and Growth for All",
      subdesc: "Ubuntu — “I am because we are; because we are, you are.”",
      img: founderImg1,
      quote: "Promise what you deliver, and deliver what you promised.",
      desc: [
        `This philosophy guides how we work together as one team. We believe in shared ownership, mutual respect, and collective accountability in everything we do. By supporting one another and working toward common goals, we create an environment where every contribution matters and success is achieved through unity, trust, and collaboration.`,
        `We believe progress is strongest when it is built together. Our approach is rooted in cooperation, fairness, and a sense of responsibility toward one another. By encouraging open dialogue and shared decision-making, we strengthen trust and alignment across teams and partners. `]
    }, {
      id: 10,
      label: "Certification",
      title: "Respect, Responsibility, and Growth for All",
      subtitle: "Awards & Accolades",
      img: founderImg1,
      subdesc: "Ubuntu — “I am because we are; because we are, you are.”",
      quote: "Promise what you deliver, and deliver what you promised.",
      desc: [
        `This philosophy guides how we work together as one team. We believe in shared ownership, mutual respect, and collective accountability in everything we do. By supporting one another and working toward common goals, we create an environment where every contribution matters and success is achieved through unity, trust, and collaboration.`,
        `We believe progress is strongest when it is built together. Our approach is rooted in cooperation, fairness, and a sense of responsibility toward one another. By encouraging open dialogue and shared decision-making, we strengthen trust and alignment across teams and partners. `]
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
          const triggerPoint = window.innerHeight * 0.2;

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
    }, []);

    return (
      <span
        ref={ref}
        className={`bm-scroll-line ${isPassed ? "active" : ""}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  const ScrollParagraph = ({ text }) => {
    // We split the paragraph into sentences using regex to ensure line-by-line highlighting
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
      case "vision":
        return (
          <div className="bm-vision-layout">
            <div className="bm-vision-header">
              <p className="bm-about-subtitle">{current.subtitle}</p>
              <h2 className="bm-about-main-title" style={{ width: '80%' }}>{current.title}</h2>
            </div>

            <div className="bm-vision-grid-container">
              {current.visions?.map((v, i) => (
                <React.Fragment key={i}>
                  <div className="bm-vision-card">
                    <div className="bm-vision-icon-wrapper">
                      <div className="bm-vision-icon-circle">
                        {i === 1 && <Image src={vision1} alt="Vision" />}
                        {i === 0 && <Image src={vision2} alt="Mission" />}
                        {i === 2 && <Image src={vision3} alt="Goal" />}
                      </div>
                    </div>

                    <h3 className="bm-vision-card-title">
                      Our <span>{v.title.split(' ')[1]}</span>
                    </h3>

                    <p className="bm-vision-card-text">{v.text}</p>

                    {/* <div className="bm-vision-bottom-icon">
                      {i === 1 && <Image src={vision1} alt="icon" width={60} height={60} className="grayscale-icon" />}
                      {i === 0 && <Image src={vision2} alt="icon" width={60} height={60} className="grayscale-icon" />}
                      {i === 2 && <Image src={vision3} alt="icon" width={60} height={60} className="grayscale-icon" />}
                    </div> */}
                  </div>
                  {i < current.visions.length - 1 && <div className="bm-vision-divider"></div>}
                </React.Fragment>

              ))}
            </div>
          </div>
        );


      case "sustainability":
        if (openImg) {
          return (
            <div className="bm-sdg-detail-view">
              <div
                className="bm-sdg-breadcrumb"
                onClick={() => setOpenImg(null)}
                style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <ArrowLeft size={20} color={"black"} />
                Sustainability &gt; {openImg?.subtitle ? ` ${openImg.subtitle}` : "Preview"}
              </div>


              <h2 className="bm-sdg-detail-title" >{openImg.title}</h2>

              <div className="bm-sdg-alignment-tag">{openImg.tag}</div>

              <div className="bm-sdg-detail-flex">
                <div className="bm-sdg-image-main">
                  <Image src={openImg.image} alt="SDG Icon" />
                </div>

                <div className="bm-sdg-content-main">
                  <p>{openImg.description}</p>

                  <div className="bm-sdg-contributions">
                    <span>Key contributions include:</span>
                    <ul>
                      {openImg.contributions?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="bm-sdg-footer-note">{openImg.footerNote}</p>
                </div>
              </div>
            </div>
          );
        }

        return (
          <div className="bm-sdg-container">
            <div className="bm-vision-header">
              <p className="bm-about-subtitle">{current.subtitle}</p>
              <h2 className="bm-about-main-title" style={{ width: '50%', letterSpacing: 0.5, marginTop: '10px' }}>{current.title}</h2>
            </div>

            <div className="bm-sdg-grid">
              {current.sdgs.map((sdg, i) => (
                <div
                  key={i}
                  className={`sdg-box sdg-${sdg.id}`}
                  onClick={() => setOpenImg(sdg)} // Set the whole object, not just URL
                >
                  <Image src={sdg.image} alt={`SDG ${sdg.id}`} />
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="bm-standard-layout">
            <div className="bm-about-text-side">
              <p className="bm-about-subtitle">{current.subtitle}</p>
              <h2 className="bm-about-main-title">{current.title}</h2>
              {
                current.subdesc && (
                  <div className="bm-about-subdesc">
                    {current?.subdesc}
                  </div>
                )
              }
              {/* <div
                className="bm-about-description"
                style={{
                  lineHeight: current.subtitle === "About Brand Mindz Global" ? "30px" : "24px",
                }}
              >
                {current.desc.map((text, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
              </div> */}
              <div
                className="bm-about-description"
                style={{
                  lineHeight: current.subtitle === "About Brand Mindz Global" ? "34px" : "28px",
                  fontSize: current.subtitle === "Customer Service Philosophy" ? "19px" : "20px",
                }}
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
                <div className="bm-about-quote-overlay">
                  "{current.quote}"
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

export default Aboutus;