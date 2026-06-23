"use client";

import React, { useState, useRef, useEffect } from "react";
import "../../../style/branding/BrandingAbout.css";
import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowRight } from "lucide-react";
import { useDevelopmentContext } from "./DevelopmentContext";

import founderImg from "../../../assets/branding/Braddingabount.png";

export const Developmentabout = () => {
  const { activeDevelopmentTab } = useDevelopmentContext();
  const [activeTab, setActiveTab] = useState(1);

  // Reset activeTab when parent activeDevelopmentTab changes
  useEffect(() => {
    setActiveTab(1);
  }, [activeDevelopmentTab]);

  const menuItemsStatic = [
    {
      id: 1,
      label: "Static Development for Corporate Websites",
      subtitle: "Static Development for Corporate Websites",
      title: "Build High-Performance Corporate Websites.<br/>Deliver Speed, Stability, and Credibility.",
      img: founderImg,
      desc: [
        "Build Fast Corporate Websites. Strengthen Brand Credibility Online.",
        "Static development for corporate websites ensures high speed, security, and reliability for professional business presence. Research shows that 53% of users leave websites that take more than three seconds to load. Static sites load significantly faster due to lightweight architecture and minimal server processing. We create structured layouts, responsive pages, and SEO-friendly code that improves search visibility and user trust. Corporate websites built with static frameworks also reduce maintenance costs by up to 40%. Our approach focuses on performance, accessibility, and scalability, helping enterprises deliver stable digital experiences that enhance credibility, engagement, and long-term online authority."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Digital Presence Is Your Foundation.",
      quoteLine2: "Speed <span class='bm-grey-text normal'>is the</span> <span class='bm-grey-text'>Credibility.</span>",
      quoteOverlay: "Performance Focus",
      btn: true
    },
    {
      id: 2,
      label: "Static Development for Startup Businesses",
      subtitle: "Static Development for Startup Businesses",
      title: "Launch Faster Digital Presence.<br/>Scale With Reliable Website Performance.",
      img: founderImg,
      desc: [
        "Launch Faster Digital Presence. Build Trust From Day One.",
        "Static development for startup businesses enables rapid website deployment with high performance and lower hosting costs. Studies indicate that startups with fast-loading websites achieve up to 32% higher user engagement. Static sites offer improved security, reduced downtime, and simplified infrastructure, making them ideal for early-stage growth. We design clean UI structures, SEO-optimized pages, and mobile-responsive layouts that support brand positioning. Faster load times also reduce bounce rates significantly and improve first impressions. Our static development strategy helps startups establish a credible online presence, attract investors, and scale efficiently with stable, high-performing websites built for long-term growth."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Agility Is Your Strength.",
      quoteLine2: "Scale <span class='bm-grey-text normal'>with</span> <span class='bm-grey-text'>Reliability.</span>",
      quoteOverlay: "Performance Focus",
      btn: true
    },
    {
      id: 3,
      label: "Static Development for E-commerce Brands",
      subtitle: "Static Development for E-commerce Brands",
      title: "Create Fast Storefront Experiences.<br/>Drive Conversions With Optimized Performance.",
      img: founderImg,
      desc: [
        "Create High-Speed Storefront Experiences. Improve Conversion Performance.",
        "Static development for e-commerce brands enhances website speed, which directly influences purchase decisions. Data shows that a one-second delay in page load can reduce conversions by up to 7%. Static storefront pages load faster, improve SEO indexing, and provide secure browsing experiences for users. We build optimized product pages, structured navigation, and lightweight designs that enhance product visibility and user experience. Static architecture also reduces server load and improves site stability during high traffic periods. Our development approach helps e-commerce brands deliver fast, secure, and visually consistent websites that increase engagement, improve trust, and support consistent online sales growth."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Storefront Is Your Engine.",
      quoteLine2: "Speed <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Conversions.</span>",
      quoteOverlay: "Performance Focus",
      btn: true
    },
    {
      id: 4,
      label: "Static Development for Educational Institutions",
      subtitle: "Static Development for Educational Institutions",
      title: "Build Reliable Educational Platforms.<br/>Ensure Fast Access to Information.",
      img: founderImg,
      desc: [
        "Deliver Reliable Educational Websites. Enhance Information Accessibility.",
        "Static development for educational institutions ensures stable, fast-loading websites for students, parents, and faculty access. Reports show that over 68% of users expect educational websites to load within three seconds. Static websites reduce technical complexity while improving uptime and security. We develop structured course pages, admission sections, and SEO-friendly content architecture that improves search visibility and user navigation. Lightweight coding also enhances accessibility across mobile and low-bandwidth regions. Educational institutions benefit from reduced maintenance costs and consistent performance. Our static development solutions support clear communication, improved engagement, and reliable digital infrastructure for schools, colleges, and training platforms."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Knowledge Is Your Value.",
      quoteLine2: "Access <span class='bm-grey-text normal'>builds</span> <span class='bm-grey-text'>Trust.</span>",
      quoteOverlay: "Performance Focus",
      btn: true
    },
    {
      id: 5,
      label: "Static Development for Healthcare & Clinics",
      subtitle: "Static Development for Healthcare & Clinics",
      title: "Develop Secure Healthcare Websites.<br/>Enhance Trust Through Performance.",
      img: founderImg,
      desc: [
        "Build Secure Healthcare Websites. Improve Patient Trust Online.",
        "Static development for healthcare and clinics provides secure, fast, and compliant digital platforms for patient information access. Studies show that 75% of patients research healthcare providers online before booking appointments. Slow or outdated websites reduce credibility and patient trust. Static websites offer enhanced security, faster load times, and reliable performance without heavy backend dependencies. We create structured service pages, appointment information sections, and mobile-optimized layouts for better accessibility. High-speed healthcare websites also improve SEO rankings and patient engagement. Our static development approach helps clinics deliver trustworthy digital experiences that enhance visibility, credibility, and consistent patient communication."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Care Is Your Promise.",
      quoteLine2: "Security <span class='bm-grey-text normal'>ensures</span> <span class='bm-grey-text'>Trust.</span>",
      quoteOverlay: "Performance Focus",
      btn: true
    },
    {
      id: 6,
      label: "Static Development for Service-Based Businesses",
      subtitle: "Static Development for Service-Based Businesses",
      title: "Establish Strong Service Websites.<br/>Generate Leads With Clear Structure.",
      img: founderImg,
      desc: [
        "Establish Professional Online Presence. Generate Qualified Business Leads.",
        "Static development for service-based businesses ensures fast, stable, and conversion-focused websites that highlight services clearly. Research shows that 70% of customers judge a company’s credibility based on its website design and performance. Static sites improve page speed, security, and SEO performance while reducing hosting and maintenance costs. We design structured service pages, optimized landing sections, and mobile-friendly layouts that guide visitors toward enquiry actions. Faster websites also improve user retention and reduce bounce rates significantly. Our static development solutions help service businesses build trust, improve online visibility, and generate consistent, high-quality leads through performance-driven web experiences."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Service Is Your Core.",
      quoteLine2: "Clarity <span class='bm-grey-text normal'>generates</span> <span class='bm-grey-text'>Leads.</span>",
      quoteOverlay: "Performance Focus",
      btn: true
    }
  ];

  const menuItemsOther = [
    {
      id: 1,
      label: "Coming Soon",
      subtitle: "Coming Soon",
      title: "Stay Tuned.",
      img: founderImg,
      desc: ["More content for this development section will be added soon."],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Growth Is Approaching.",
      quoteLine2: "We <span class='bm-grey-text normal'>are</span> <span class='bm-grey-text'>Building.</span>",
      quoteOverlay: "Future Update",
      btn: false
    }
  ];

  const menuItemsEcom = [
    {
      id: 1,
      label: "E-commerce Development for D2C Brands",
      subtitle: "E-commerce Development for D2C Brands",
      title: "Build Direct-to-Customer Online Stores.<br/>Increase Brand Control & Conversions.",
      img: founderImg,
      desc: [
        "Sell Direct. Scale Faster With Smart Stores.",
        "E-commerce development for D2C brands focuses on building high-conversion online stores that improve customer experience and repeat purchases. Reports show that D2C brands grow 2.5x faster with optimized ecommerce platforms and seamless checkout systems. We develop fast-loading product pages, mobile-first designs, and conversion-focused user journeys that reduce cart abandonment and increase sales. Structured navigation, secure payment integration, and performance optimization improve trust and engagement. A well-developed D2C ecommerce website can boost conversion rates by up to 30%. Our ecommerce development approach helps D2C brands strengthen brand control, improve customer retention, and achieve sustainable digital revenue growth."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Store Is Your Asset.",
      quoteLine2: "Conversions <span class='bm-grey-text normal'>drive</span> <span class='bm-grey-text'>Growth.</span>",
      quoteOverlay: "E-commerce Focus",
      btn: true
    },
    {
      id: 2,
      label: "E-commerce Development for B2B Wholesale Businesses",
      subtitle: "E-commerce Development for B2B Wholesale Businesses",
      title: "Develop Scalable B2B Commerce Platforms.<br/>Simplify Bulk Ordering & Client Management.",
      img: founderImg,
      desc: [
        "Streamline Bulk Orders. Improve Business Efficiency.",
        "E-commerce development for B2B wholesale businesses requires structured platforms that support bulk ordering, pricing tiers, and secure transactions. Studies show that 73% of B2B buyers prefer purchasing through digital portals instead of traditional methods. We build scalable ecommerce systems with custom catalogs, role-based access, and automated order management features. Optimized dashboards and fast product search improve user experience and operational efficiency. Secure architecture and performance-focused development ensure reliability during high-volume transactions. Our ecommerce development solutions help B2B businesses reduce manual workload, improve order accuracy, and increase long-term client retention through stable and efficient digital commerce platforms."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Platform Is Your Hub.",
      quoteLine2: "Efficiency <span class='bm-grey-text normal'>scales</span> <span class='bm-grey-text'>Business.</span>",
      quoteOverlay: "E-commerce Focus",
      btn: true
    },
    {
      id: 3,
      label: "E-commerce Development for Food & Beverage Businesses",
      subtitle: "E-commerce Development for Food & Beverage Businesses",
      title: "Create Fast Online Ordering Platforms.<br/>Enhance Customer Convenience & Retention.",
      img: founderImg,
      desc: [
        "Deliver Fast Ordering Experiences Online.",
        "E-commerce development for food and beverage businesses plays a key role in improving online orders and customer convenience. Research indicates that over 60% of consumers prefer ordering food products online due to ease and accessibility. We develop user-friendly ecommerce websites with quick product browsing, secure checkout, and mobile-optimized interfaces that enhance ordering experience. Fast-loading pages and structured product categories improve engagement and reduce bounce rates. Integrated inventory and delivery modules ensure smooth operations. Our ecommerce development strategy helps food brands increase online visibility, boost repeat orders, and maintain consistent digital sales growth in highly competitive marketplaces."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Menu Is Your Identity.",
      quoteLine2: "Convenience <span class='bm-grey-text normal'>builds</span> <span class='bm-grey-text'>Loyalty.</span>",
      quoteOverlay: "E-commerce Focus",
      btn: true
    },
    {
      id: 4,
      label: "E-commerce Development for Beauty & Skincare Brands",
      subtitle: "E-commerce Development for Beauty & Skincare Brands",
      title: "Design Trust-Focused Beauty E-commerce Stores.<br/>Improve Product Discovery & Engagement.",
      img: founderImg,
      desc: [
        "Enhance Product Discovery. Build Buyer Trust.",
        "E-commerce development for beauty and skincare brands focuses on creating visually engaging and trust-driven online stores. Studies show that 70% of beauty shoppers research products online before purchasing. We develop aesthetically structured ecommerce platforms with clear product descriptions, ingredient sections, and high-quality visual layouts that improve credibility and conversions. Mobile-first design and fast page speed enhance browsing experience significantly. Secure checkout systems and personalized product displays increase customer satisfaction. Our ecommerce development approach helps beauty brands improve product visibility, strengthen brand perception, and increase conversion rates through seamless digital shopping experiences and optimized store performance."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Quality Is Your Signature.",
      quoteLine2: "Trust <span class='bm-grey-text normal'>fuels</span> <span class='bm-grey-text'>Engagement.</span>",
      quoteOverlay: "E-commerce Focus",
      btn: true
    },
    {
      id: 5,
      label: "E-commerce Development for Electronics & Gadget Stores",
      subtitle: "E-commerce Development for Electronics & Gadget Stores",
      title: "Build High-Performance Gadget Stores.<br/>Showcase Features With Structured Layouts.",
      img: founderImg,
      desc: [
        "Showcase Features. Improve Purchase Confidence.",
        "E-commerce development for electronics and gadget stores requires structured product architecture and detailed specifications for informed buying decisions. Research shows that 75% of electronics buyers compare features online before making a purchase. We develop high-performance ecommerce websites with detailed product pages, comparison layouts, and fast-loading interfaces that enhance user clarity. Optimized search filters and structured navigation improve product discovery and engagement. Secure payment gateways and scalable infrastructure support high traffic during peak sales. Our ecommerce development solutions help electronics businesses increase buyer confidence, reduce return rates, and drive consistent online sales through reliable and performance-focused digital platforms."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Features Are Your Edge.",
      quoteLine2: "Clarity <span class='bm-grey-text normal'>improves</span> <span class='bm-grey-text'>Confidence.</span>",
      quoteOverlay: "E-commerce Focus",
      btn: true
    },
    {
      id: 6,
      label: "E-commerce Development for Baby & Kids Product Stores",
      subtitle: "E-commerce Development for Baby & Kids Product Stores",
      title: "Develop Safe & User-Friendly Online Stores.<br/>Highlight Product Safety & Clarity.",
      img: founderImg,
      desc: [
        "Build Safe, Trustworthy Shopping Platforms.",
        "E-commerce development for baby and kids product stores must prioritize clarity, safety information, and easy navigation. Reports show that over 78% of parents carefully review product details before purchasing online. We build secure ecommerce platforms with structured product pages, safety highlights, and mobile-friendly layouts that enhance trust and usability. Fast-loading websites reduce bounce rates and improve engagement across devices. Clear categorization and optimized checkout flows simplify the buying journey for parents. Our ecommerce development strategy helps baby product brands increase customer confidence, improve repeat purchases, and achieve steady online growth through reliable and user-focused digital store experiences."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Safety Is Your Priority.",
      quoteLine2: "Care <span class='bm-grey-text normal'>builds</span> <span class='bm-grey-text'>Trust.</span>",
      quoteOverlay: "E-commerce Focus",
      btn: true
    }
  ];

  const menuItemsMobileApp = [
    {
      id: 1,
      label: "Mobile App Development for Corporate Businesses",
      subtitle: "Mobile App Development for Corporate Businesses",
      title: "Build Enterprise-Grade Mobile Applications.<br/>Deliver Stability, Security, and Performance.",
      img: founderImg,
      desc: [
        "Create Professional Business Apps That Scale Efficiently.",
        "Mobile app development for corporate businesses ensures secure, scalable, and high-performance applications for internal operations and customer engagement. Research shows that enterprise mobile apps can improve workflow efficiency by up to 34%. We develop structured dashboards, secure integrations, and responsive mobile interfaces that support business productivity and data management. Optimized app architecture improves speed, reduces crashes, and enhances user experience. Our development approach focuses on reliability, security standards, and scalability, helping corporations deploy stable mobile solutions that improve operational efficiency, strengthen digital presence, and support long-term enterprise growth."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Operation Is Your Engine.",
      quoteLine2: "Mobility <span class='bm-grey-text normal'>scales</span> <span class='bm-grey-text'>Efficiency.</span>",
      quoteOverlay: "Mobile App Focus",
      btn: true
    },
    {
      id: 2,
      label: "Mobile App Development for Startup Businesses",
      subtitle: "Mobile App Development for Startup Businesses",
      title: "Launch Fast and Scalable Mobile Products.<br/>Accelerate Growth With Smart App Solutions.",
      img: founderImg,
      desc: [
        "Build Investor-Ready Apps From Day One.",
        "Mobile app development for startup businesses enables rapid product launch with scalable architecture and cost-efficient development. Studies indicate that startups with mobile apps experience up to 27% higher customer engagement. We build lightweight, user-friendly applications with intuitive navigation and growth-ready frameworks that support quick scaling. Faster performance and seamless UI improve first impressions and retention rates significantly. Our mobile app development strategy helps startups validate ideas, attract early users, and establish a strong digital presence with stable, high-performing applications designed for continuous growth and market expansion."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Vision Is Your Power.",
      quoteLine2: "Speed <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Momentum.</span>",
      quoteOverlay: "Mobile App Focus",
      btn: true
    },
    {
      id: 3,
      label: "Mobile App Development for E-commerce Brands",
      subtitle: "Mobile App Development for E-commerce Brands",
      title: "Create Conversion-Focused Shopping Apps.<br/>Enhance User Experience and Sales Performance.",
      img: founderImg,
      desc: [
        "Build High-Speed Mobile Commerce Platforms.",
        "Mobile app development for e-commerce brands directly impacts customer engagement and purchase behavior. Reports show that mobile commerce accounts for over 70% of online sales globally. Slow or complex apps increase cart abandonment and reduce revenue. We develop optimized shopping apps with smooth navigation, secure checkout systems, and fast-loading product pages that improve user experience. Structured UI and performance optimization enhance browsing and buying flow. Our mobile app development approach helps e-commerce brands increase conversions, improve customer retention, and deliver seamless shopping experiences that support consistent digital revenue growth."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> App Is Your Storefront.",
      quoteLine2: "Experience <span class='bm-grey-text normal'>boosts</span> <span class='bm-grey-text'>Conversions.</span>",
      quoteOverlay: "Mobile App Focus",
      btn: true
    },
    {
      id: 4,
      label: "Mobile App Development for Educational Platforms",
      subtitle: "Mobile App Development for Educational Platforms",
      title: "Build Interactive Learning Applications.<br/>Ensure Accessibility and Consistent Performance.",
      img: founderImg,
      desc: [
        "Deliver Seamless Digital Learning Experiences.",
        "Mobile app development for educational platforms improves accessibility, engagement, and student interaction. Research shows that mobile learning apps can increase student engagement by up to 60%. We develop structured course interfaces, progress tracking features, and user-friendly navigation that enhance learning experiences across devices. Fast-loading architecture ensures smooth access even in low-bandwidth environments. Secure data handling and scalable frameworks support long-term platform growth. Our development approach helps educational institutions deliver reliable, engaging, and performance-driven mobile applications that improve communication, accessibility, and digital learning efficiency."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Content Is Your Strength.",
      quoteLine2: "Access <span class='bm-grey-text normal'>empowers</span> <span class='bm-grey-text'>Learning.</span>",
      quoteOverlay: "Mobile App Focus",
      btn: true
    },
    {
      id: 5,
      label: "Mobile App Development for Healthcare & Clinics",
      subtitle: "Mobile App Development for Healthcare & Clinics",
      title: "Develop Secure Healthcare Mobile Solutions.<br/>Improve Patient Access and Communication.",
      img: founderImg,
      desc: [
        "Build Reliable Medical App Experiences.",
        "Mobile app development for healthcare and clinics enables secure patient interaction, appointment management, and information access. Studies show that over 65% of patients prefer mobile apps for healthcare communication. Slow or outdated apps reduce patient trust and engagement. We create secure, fast, and user-friendly healthcare applications with structured interfaces and reliable performance. Optimized mobile architecture improves accessibility and usability across devices. Our development strategy focuses on compliance, stability, and seamless functionality, helping healthcare providers enhance patient experience, improve communication efficiency, and maintain consistent digital reliability."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Care Is Your Core.",
      quoteLine2: "Security <span class='bm-grey-text normal'>guarantees</span> <span class='bm-grey-text'>Trust.</span>",
      quoteOverlay: "Mobile App Focus",
      btn: true
    },
    {
      id: 6,
      label: "Mobile App Development for Service-Based Businesses",
      subtitle: "Mobile App Development for Service-Based Businesses",
      title: "Build Lead-Generating Service Applications.<br/>Improve Customer Interaction and Retention.",
      img: founderImg,
      desc: [
        "Create High-Performance Business Apps.",
        "Mobile app development for service-based businesses strengthens customer engagement and service accessibility. Research shows that businesses with mobile apps see up to 30% higher customer retention. We develop structured service interfaces, booking features, and responsive app layouts that simplify user interaction. Fast performance and intuitive navigation improve enquiry rates and customer satisfaction. Scalable frameworks ensure long-term reliability and easy updates. Our mobile app development solutions help service businesses enhance digital presence, generate qualified leads, and deliver consistent, user-friendly experiences that support sustainable business growth."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Service Is Your Value.",
      quoteLine2: "Engagement <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Retention.</span>",
      quoteOverlay: "Mobile App Focus",
      btn: true
    }
  ];

  const menuItemsWebApp = [
    {
      id: 1,
      label: "Web Application Development for Healthcare & Hospitals",
      subtitle: "Web Application Development for Healthcare & Hospitals",
      title: "Build Secure Healthcare Applications.<br/>Improve Patient Experience and Efficiency.",
      img: founderImg,
      desc: [
        "Web application development for healthcare and hospitals focuses on secure data handling, fast access, and reliable digital workflows.",
        "Studies show that over 80% of patients prefer online appointment systems and digital health records for faster service. Poorly built systems cause delays, errors, and reduced trust. We develop structured, secure, and scalable healthcare web applications with HIPAA-ready architecture, optimized dashboards, and seamless user interfaces. Fast-loading medical portals improve engagement and operational efficiency. Our development approach enhances data accuracy, patient communication, and system reliability while supporting long-term digital transformation for modern healthcare institutions."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Healthcare Is Your Focus.",
      quoteLine2: "Security <span class='bm-grey-text normal'>builds</span> <span class='bm-grey-text'>Trust.</span>",
      quoteOverlay: "Web App Focus",
      btn: true
    },
    {
      id: 2,
      label: "Web Application Development for SaaS Companies",
      subtitle: "Web Application Development for SaaS Companies",
      title: "Create Scalable SaaS Web Platforms.<br/>Boost User Adoption and Retention.",
      img: founderImg,
      desc: [
        "Web application development for SaaS companies is critical for user onboarding, feature usage, and subscription growth.",
        "Research shows that 70% of SaaS churn happens due to poor usability and complex interfaces. We build high-performance SaaS web applications with intuitive dashboards, structured workflows, and scalable architecture that supports thousands of users simultaneously. Optimized UI structure and fast backend systems improve retention and engagement. Secure cloud-ready applications also enhance performance and uptime. Our SaaS development strategy focuses on usability, scalability, and stability to help businesses deliver seamless digital products that drive consistent growth and long-term customer retention."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Platform Is Your Value.",
      quoteLine2: "Usability <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Adoption.</span>",
      quoteOverlay: "Web App Focus",
      btn: true
    },
    {
      id: 3,
      label: "Web Application Development for Startups & Tech Companies",
      subtitle: "Web Application Development for Startups & Tech Companies",
      title: "Launch Fast Digital Products.<br/>Scale With Smart Application Architecture.",
      img: founderImg,
      desc: [
        "Web application development for startups and tech companies enables rapid product launch and faster market validation.",
        "Studies indicate that startups with functional MVP web apps reach market traction 35% faster. Slow or unstable applications reduce investor confidence and user trust. We build lightweight, scalable, and performance-focused web applications with clean code, responsive interfaces, and optimized user flows. Strong architecture reduces future development costs and improves scalability. Our startup-focused development approach supports innovation, faster iterations, and stable performance, helping tech companies launch reliable digital products that attract users, investors, and long-term business opportunities."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Innovation Is Your Edge.",
      quoteLine2: "Architecture <span class='bm-grey-text normal'>scales</span> <span class='bm-grey-text'>Growth.</span>",
      quoteOverlay: "Web App Focus",
      btn: true
    },
    {
      id: 4,
      label: "Web Application Development for Manufacturing Industries",
      subtitle: "Web Application Development for Manufacturing Industries",
      title: "Digitize Operations With Smart Applications.<br/>Improve Workflow and Productivity Efficiency.",
      img: founderImg,
      desc: [
        "Web application development for manufacturing industries streamlines operations, inventory tracking, and production management.",
        "Reports show that digital manufacturing systems can improve operational efficiency by up to 30%. Manual systems often lead to delays, data errors, and poor coordination. We develop structured web applications with real-time dashboards, automated reporting, and secure data systems that enhance operational visibility. Scalable architecture supports integration with ERP and supply chain tools. Our manufacturing web applications focus on accuracy, speed, and system reliability, helping industries improve productivity, reduce downtime, and achieve consistent digital process optimization across departments."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Operation Is Your Engine.",
      quoteLine2: "Digitization <span class='bm-grey-text normal'>boosts</span> <span class='bm-grey-text'>Efficiency.</span>",
      quoteOverlay: "Web App Focus",
      btn: true
    },
    {
      id: 5,
      label: "Web Application Development for Educational & EdTech Platforms",
      subtitle: "Web Application Development for Educational & EdTech Platforms",
      title: "Build Reliable Learning Platforms.<br/>Enhance Digital Education Experiences.",
      img: founderImg,
      desc: [
        "Web application development for educational and EdTech platforms ensures stable, accessible, and scalable learning environments.",
        "Research shows that over 75% of students prefer online learning platforms with structured dashboards and fast navigation. Poor platform performance reduces engagement and course completion rates. We build secure and user-friendly educational web applications with course management systems, student dashboards, and responsive design. Optimized performance improves accessibility across devices and bandwidth levels. Our development strategy supports seamless content delivery, better student interaction, and long-term platform stability, helping institutions provide effective digital learning experiences and improved educational outcomes."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Knowledge Is Your Service.",
      quoteLine2: "Stability <span class='bm-grey-text normal'>ensures</span> <span class='bm-grey-text'>Learning.</span>",
      quoteOverlay: "Web App Focus",
      btn: true
    },
    {
      id: 6,
      label: "Web Application Development for Travel & Tourism Businesses",
      subtitle: "Web Application Development for Travel & Tourism Businesses",
      title: "Create Seamless Travel Booking Platforms.<br/>Increase User Engagement and Conversions.",
      img: founderImg,
      desc: [
        "Web application development for travel and tourism businesses improves booking efficiency, customer experience, and operational management.",
        "Studies reveal that 65% of travelers prefer online booking platforms with fast search and smooth navigation. Slow or confusing systems lead to booking drop-offs and revenue loss. We develop high-performance travel web applications with real-time booking systems, secure payment integration, and responsive user interfaces. Structured design improves usability and trust. Our development approach enhances user journey, reduces bounce rates, and helps travel businesses deliver fast, reliable, and conversion-focused digital experiences that drive consistent bookings and customer satisfaction."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Journey Is Your Goal.",
      quoteLine2: "Speed <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Bookings.</span>",
      quoteOverlay: "Web App Focus",
      btn: true
    }
  ];

  const getActiveMenuItems = () => {
    switch (activeDevelopmentTab) {
      case 0:
        return menuItemsStatic;
      case 1:
        return menuItemsEcom;
      case 2:
        return menuItemsMobileApp;
      case 3:
        return menuItemsWebApp;
      default:
        return menuItemsOther;
    }
  };

  const menuItems = getActiveMenuItems();
  const current = menuItems.find(item => item.id === activeTab) || menuItems[0];

  const ScrollLine = ({ content }) => {
    const [isPassed, setIsPassed] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

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

  const ScrollParagraph = ({ text }: { text: string }) => {
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
          <FadeIn key={`${activeDevelopmentTab}-${activeTab}`} delay={0.2}>
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
                    <div>
                      Start<span> Development</span>
                    </div>
                  </button>
                )}
              </div>

              <div className="bm-about-image-side-branding">
                <div className="bm-about-quote-container-branding">
                  {/* Decorative Quote Icon - 78x74px */}
                  <svg className="bm-about-quote-icon-branding" viewBox="0 0 78 74" fill="currentColor">
                    <path d="M19.5 0C8.73 0 0 8.73 0 19.5V74H34V39.5H14.5V19.5C14.5 16.74 16.74 14.5 19.5 14.5H34V0H19.5ZM63.5 0C52.73 0 44 8.73 44 19.5V74H78V39.5H58.5V19.5C58.5 16.74 60.74 14.5 63.5 14.5H78V0H63.5Z" />
                  </svg>
                  {/* <h4 className="bm-about-quote-text-branding" dangerouslySetInnerHTML={{ __html: current.quoteLine1 }}></h4>
                  <h4 className="bm-about-quote-text-branding" dangerouslySetInnerHTML={{ __html: current.quoteLine2 }}></h4> */}
                  <h4 className="bm-about-quote-text-branding"><span className='bm-grey-text '>Your</span> Startup Is Your Product.</h4>
                  <h4 className="bm-about-quote-text-branding">You <span className='bm-grey-text'>are</span> the <span className='bm-grey-text'>Brand.</span></h4>

                </div>

                {/* Image Frame - Exact 379x541px */}
                <div className="bm-about-img-frame-branding">
                  <Image src={current.img} alt={current.label} priority width={379} height={541} />
                  <div className="bm-about-quote-overlay-branding">
                    {/* {current.quoteOverlay} */} Persona crafting
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
