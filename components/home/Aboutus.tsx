"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../../style/home/aboutus.css";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowLeft } from "lucide-react";

// Asset Imports (Replace with your actual paths)
import founderImg from "../../assets/HomeSection/about/frame.webp";
import founderImg5 from "../../assets/about/frame2147226233.webp";
import founderImg6 from "../../assets/about/frame2147226233-2.webp";
import founderImg1 from "../../assets/about/foundern-1.webp";
import founderImg2 from "../../assets/about/foundern-2.webp";
import founderImg3 from "../../assets/about/foundern-3.webp";
import founderImg4 from "../../assets/about/foundern-n.webp";
import team1 from "../../assets/about/team.webp";
import trademarkLogo from "../../assets/about/news18tamil11.webp";
import dpiitLogo from "../../assets/about/sunnews11.webp";
import msmeLogo from "../../assets/about/MSME_Logo.svg";
import privateLimitedLogo from "../../assets/about/pl.webp";
import gstLogo from "../../assets/about/gst.webp";
import gemLogo from "../../assets/about/gem.png";

import promisingStartupAward from "../../assets/about/awards/a1.webp";
import startupAward from "../../assets/about/awards/a2.webp";


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

interface SdgItem {
  id: number;
  title: string;
  tag: string;
  image: StaticImageData;
  description: string;
  contributions: string[];
  footerNote: string;
  subtitle?: string;
}

interface CertificateItem {
  title: string;
  image: StaticImageData;
}

interface MenuItem {
  id: number;
  label: string;
  type?: "standard" | "vision" | "sustainability" | "awards" | "certification";
  subtitle?: string;
  title: string;
  img?: StaticImageData;
  desc?: string | string[];
  quote?: string;
  btn?: boolean;
  subdesc?: string;
  visions?: Array<{ title: string; text: string }>;
  sdgs?: SdgItem[];
  certificates?: CertificateItem[];
  awards?: CertificateItem[];
}

const Aboutus = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(1);
  

  const menuItems: MenuItem[] = [
    {
      id: 1,
      label: "About Us",
      type: "standard",
      subtitle: "About Brand Mindz Global",
      title: "A Results Driven Digital Agency Focused on Growth",
      img: founderImg5,
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
      img: founderImg6,
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
      title: "Our values shape every result.",
      img: founderImg1,
      desc: [
        `We believe sustainable growth comes from doing the right things consistently—with honesty, creativity, accountability, and a clear focus on measurable impact.`,
        `<b>Honesty & Transparency</b> We believe strong partnerships begin with trust. We communicate openly, and maintain transparency in our strategies, processes, and results.`,
        `<b>Measurable Impact</b> We focus on outcomes, not vanity metrics. Every strategy is designed around meaningful business objectives, measurable performance, and long-term growth.`,
        `<b>Customer First</b> Our clients are at the heart of everything we do. We take time to understand their business, audience, challenges, and ambitions before creating solutions that truly fit their needs.`,
        `<b>Long-Term Thinking</b> We don't believe in shortcuts that deliver temporary results. Our focus is on building strong brands, sustainable marketing systems, and lasting business value.`
      ], quote: "Our promise is simple: think boldly, act responsibly, measure what matters, and create growth that lasts.",
      btn: false

    },
    {
      id: 5,
      label: "Our Growth",
      type: "standard",
      subtitle: "Our Growth",
      title: "We grow by growing businesses.",
      img: founderImg2,
      desc: [
        `What began as a vision for stronger brands is now a growing technology and marketing ecosystem.`,
        `<b>Growing Through Innovation</b> The digital landscape changes rapidly. We continuously explore new technologies, platforms, marketing strategies, and creative approaches to help our clients stay competitive and relevant.`,
        `<b>Growing Our Capabilities</b> Our journey has expanded beyond individual marketing services. Today, our capabilities bring together strategy, branding, creativity, technology, and digital growth to provide businesses with more connected solutions.`,
        `<b>Growing With Purpose</b> Growth is not simply about numbers. For us, it means creating stronger brands, delivering better experiences, developing meaningful partnerships, and creating measurable value for the businesses we work with.`
      ], quote: "Our journey is still evolving. We are committed to learning, innovating, and growing—while helping our clients move forward with confidence.",
      btn: false

    },

    {
      id: 6, label: "Customer Service Philosophy", title: "Committed to clarity, consistency, and customer success.",
      img: founderImg3,
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
    tag: "CSR Focus Area",
    image: Quality4,
    description: `At Brand Mindz, we believe education can open doors to better opportunities. Learning is not only about classrooms or certificates. Having access to useful knowledge, digital tools, and practical skills can help people become more confident in their work and make better decisions about their future.

As a digital marketing and technology-focused company, we understand the value of learning in a changing digital world. New tools, platforms, and technologies are introduced every day, so continuous learning has become an important part of professional growth. At Brand Mindz, we encourage our team to learn new skills, share their knowledge with others, and keep improving their understanding of digital marketing, technology, design, and business.

We also see digital literacy as an important part of education today. Knowing how to use online platforms, find reliable information, communicate effectively, and make responsible use of digital tools can be valuable for students, professionals, and people starting their own businesses. Through knowledge sharing and practical learning, we aim to make useful digital knowledge easier to understand and apply.

Our focus is on creating a workplace where people have the opportunity to learn and grow. We encourage employees to develop both their professional and personal skills and believe that sharing experience within a team can be just as valuable as formal training. As Brand Mindz grows, we hope to support more learning opportunities and initiatives that help people build skills for the future.`,
    contributions: [],
    subtitle: "Quality Education",
    footerNote: "CSR Focus Area: Education, Digital Literacy & Skill Development"
},
        {
                    id: 5,
                    title: "Leadership knows No Gender",
                    tag: "Strong and Direct Alignment",
                    image: Equallity5,
                    description: `Brand Mindz aligns its CSR and organizational
                    practices with the United Nations Sustainable Development Goals
                    (SDGs), especially SDG 5: Gender Equality. The company promotes
                     women empowerment, supports women-led enterprises and women entrepreneurs,
                     and ensures equal opportunity employment. Through inclusive growth, diversity
                      and inclusion, and responsible business practices, Brand Mindz contributes to
                      sustainable development and long-term social impact.
                       <br/>
                       <br/>
                       Key contributions include a strong focus on empowering women
                        through entrepreneurship and skill development initiatives
                        that enhance their employability and economic independence.
                         These programs are designed to equip women with practical
                         skills, leadership abilities, and business knowledge, enabling them
                         to build sustainable livelihoods and actively participate in economic growth.
                       <br/>
                       <br/>
                         In addition, digital literacy and financial awareness programs
                          are implemented to improve access to technology and financial systems,
                           helping women gain confidence in using digital tools, managing personal finances,
                          and understanding savings, credit, and investment opportunities.
                       <br/>
                          <br/>
                          This strategic alignment is directly supported by CSR Focus Area 5.1 –
                           Women Empowerment, reinforcing the commitment to advancing gender
                           equality, economic inclusion, and long-term social impact.`,
                    contributions: [],
                    subtitle: "Gender Equality",
                    footerNote: ""
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
    tag: "CSR Focus Area",
    image: Growth8,
    description: `At Brand Mindz, we believe that a growing business should also create better opportunities for the people who work with it. A good workplace is not only about completing work on time. It is also about respect, learning, fair opportunities, and giving people the space to develop their skills. We want our team to feel that their work matters and that they have room to grow.

The digital industry changes quickly, so learning new skills is a regular part of the job. We encourage our team to keep learning and improving their knowledge in areas such as SEO, digital marketing, web development, branding, and design. Sharing ideas and learning from one another also helps our team handle new challenges with more confidence.

We believe that people do better work when they are given the right support and a positive working environment. Clear responsibilities, teamwork, open communication, and respect are important parts of the way we work. We also encourage team members to take ownership of their work and make use of opportunities to improve their professional skills.

As Brand Mindz continues to grow, we want that growth to benefit both the business and our people. Our goal is to create meaningful work opportunities, support skill development, and build a workplace where people can develop their careers over time.`,
    contributions: [],
    footerNote: "CSR Focus Area: Decent Work, Skill Development & Sustainable Economic Growth",
    subtitle: "Decent Work & Economic Growth",
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
                    description: `At Brand Mindz, we believe everyone should get a fair chance to learn, work, and build their career. People have different backgrounds, experiences, and skills, and we believe these differences should be respected. What matters to us is giving people the opportunity to contribute, improve their skills, and move forward in their professional journey.

Technology can also help create more opportunities when it is made easier to understand and use. Digital skills can help people look for jobs, start a business, reach customers, and learn new things without being limited by where they live. As a digital-focused company, we see value in sharing our knowledge and making digital information easier to understand.

Inside our workplace, we encourage people to communicate openly and share their ideas. Everyone should feel comfortable being part of discussions and working with others. We believe that listening to different opinions and experiences helps create a better working environment and allows teams to learn from each other.

For us, reducing inequalities is about the small things we do every day — treating people fairly, respecting different perspectives, and giving people opportunities to learn and grow. As Brand Mindz continues to develop, we will continue to support an inclusive workplace where people have a fair opportunity to participate and progress.`,
                    contributions: [],
                    footerNote: "CSR Focus Area: Inclusion, Equal Opportunity & Reduced Inequalities",
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
    tag: "CSR Focus Area",
    image: Action13,
    description: `At Brand Mindz, we believe that protecting the environment is something businesses can contribute to through everyday choices. Since much of our work is digital, we try to reduce unnecessary use of paper, printing, and other physical resources wherever possible. Simple changes in the way we work can help us operate more responsibly.

We make use of digital communication and online collaboration to reduce the need for unnecessary travel and paperwork. Our team also tries to be mindful of electricity and other resources used in our day-to-day operations. These may seem like small steps, but they are practical changes that can become part of how we work every day.

We do not see climate action as a one-time activity. It is an ongoing effort to understand our impact and find better ways to reduce it. As Brand Mindz grows, we will continue looking for practical and responsible ways to make our workplace and business practices more environmentally conscious.

Our climate action efforts focus on reducing unnecessary paper and printing, using digital-first communication, being mindful of energy consumption, limiting avoidable travel through online meetings, and encouraging responsible environmental practices among our team.`,
    contributions: [],
    footerNote: "CSR Focus Area: Climate & Environmental Responsibility",
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
      img: team1,
      subdesc: "Ubuntu — “I am because we are; because we are, you are.”",
      desc: [
        `This philosophy guides how we work together as one team. We believe in shared ownership, mutual respect, and collective accountability in everything we do. By supporting one another and working toward common goals, we create an environment where every contribution matters and success is achieved through unity, trust, and collaboration.`,
        `We believe progress is strongest when it is built together. Our approach is rooted in cooperation, fairness, and a sense of responsibility toward one another. By encouraging open dialogue and shared decision-making, we strengthen trust and alignment across teams and partners. `
      ],
      quote: "Promise what you deliver, and deliver what you promised.",
    },
    {
      id: 9, label: "Awards & Accolades",
      type: "awards",
      subtitle: "Awards & Accolades",
      title: "Celebrating Milestones of Excellence",
      img: founderImg4,
      quote: "Promise what you deliver, and deliver what you promised.",
      awards: [
        { title: "Promising Startup Award 2023", image: promisingStartupAward },
        { title: "Best Startup Award 2024", image: startupAward },
        { title: "Best Startup Entrepreneur Award 2024", image: startupAward },
        { title: "Promising Growth Startup 2025", image: startupAward },
        { title: "Startup Icon Award 2025", image: startupAward },
        { title: "Outstanding Growth Award 2026", image: startupAward },
      ]
    }, {
      id: 10,
      label: "Certification",
      type: "certification",
      title: "Our Registrations & Certifications",
      subtitle: "Certifications & Registrations",
      img: founderImg1,
      quote: "Promise what you deliver, and deliver what you promised.",
      certificates: [
        { title: "Registered Trademark", image: trademarkLogo },
        { title: "DPIIT - Registered Startup", image: dpiitLogo },
        { title: "MSME Certified", image: msmeLogo },
        { title: "Registered Private Limited", image: privateLimitedLogo },
        { title: "GST Certificate", image: gstLogo },
        { title: "GEM Registered", image: gemLogo },
      ]
    },
  ];

  const current = menuItems.find(item => item.id === activeTab) || menuItems[0];
  const [openImg, setOpenImg] = useState<SdgItem | null>(null);


  const ScrollLine = ({ content }: { content: string }) => {
    const [isPassed, setIsPassed] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

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

  const ScrollParagraph = ({ text }: { text: string }) => {
    // We split the paragraph into sentences using regex to ensure line-by-line highlighting
    const lines = text.split(/(?<=\. )/g);

    return (
      <p className="bm-paragraph-wrapper">
        {lines.map((line: string, idx: number) => (
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
                  {i < (current.visions?.length ?? 0) - 1 && <div className="bm-vision-divider"></div>}
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
              {current.sdgs?.map((sdg, i) => (
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

      case "awards":
        return (
          <div className="bm-awards-layout">
            <div className="bm-awards-content">
              <div className="bm-awards-header">
                <p className="bm-about-subtitle">{current.subtitle}</p>
                <h2 className="bm-about-main-title">{current.title}</h2>
              </div>

              <div className="bm-awards-grid">
                {current.awards?.map((award) => (
                  <article className="bm-award-card" key={award.title}>
                    <div className="bm-award-image">
                      <Image
                        src={award.image}
                        alt={award.title}
                        sizes="(max-width: 480px) 30vw, (max-width: 1024px) 20vw, 9vw"
                      />
                    </div>
                    <h3>{award.title}</h3>
                  </article>
                ))}
              </div>
            </div>

            {current.img && (
              <div className="bm-about-image-side bm-awards-founder">
                <div className="bm-about-img-frame">
                  <Image src={current.img} alt="Brand Mindz founder" priority />
                  <div className="bm-about-quote-overlay">&quot;{current.quote}&quot;</div>
                </div>
              </div>
            )}
          </div>
        );

      case "certification":
        return (
          <div className="bm-certification-layout">
            <div className="bm-certification-content">
              <div className="bm-certification-header">
                <p className="bm-about-subtitle">{current.subtitle}</p>
                <h2 className="bm-about-main-title">{current.title}</h2>
                <p className="bm-certification-intro">
                  Recognised registrations that reflect our commitment to trusted and compliant business practices.
                </p>
              </div>

              <div className="bm-certificate-grid">
                {current.certificates?.map((certificate) => (
                  <article className="bm-certificate-card" key={certificate.title}>
                    <div className="bm-certificate-image">
                      <Image
                        src={certificate.image}
                        alt={certificate.title}
                        sizes="(max-width: 480px) 42vw, (max-width: 1024px) 28vw, 15vw"
                      />
                    </div>
                    <h3>{certificate.title}</h3>
                  </article>
                ))}
              </div>
            </div>

            {current.img && (
              <div className="bm-about-image-side bm-certification-founder">
                <div className="bm-about-img-frame">
                  <Image src={current.img} alt="Brand Mindz founder" priority />
                  <div className="bm-about-quote-overlay">&quot;{current.quote}&quot;</div>
                </div>
              </div>
            )}
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
                {Array.isArray(current.desc) && current.desc.map((text, index) => (
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
                {Array.isArray(current.desc) && current.desc.map((text, index) => (
                  current.id === 4 ? (
                    <p
                      key={index}
                      className={index === 0 ? "" : "bm-core-value-card"}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ) : (
                    <ScrollParagraph key={index} text={text} />
                  )
                ))}
              </div>
              {
  current.btn && (
    <button
      className="bm-about-learn-btn"
      onClick={() => router.push("/about")}
    >
      Learn More
    </button>
  )
}
            </div>
            {current.img && <div className="bm-about-image-side">
              <div className="bm-about-img-frame">
                <Image src={current.img} alt={current.label} priority />
                <div className="bm-about-quote-overlay">
                  "{current.quote}"
                </div>
              </div>
            </div>}
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
                className={`bm-about-menu-item ${item.id === 3 || item.id === 9 ? "bm-about-small-size" : ""} ${activeTab === item.id ? "active" : ""}`}
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
