

"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    FaUserTie, FaBullhorn, FaChessKing, FaLightbulb,
    FaPaintBrush, FaLaptopCode, FaChartLine, FaShoppingCart
} from "react-icons/fa";

import icon1 from '../../assets/HomeSection/OurOfferings/icon1.png'
import icon2 from '../../assets/HomeSection/OurOfferings/icon2.png'
import icon3 from '../../assets/HomeSection/OurOfferings/icon3.png'
import icon4 from '../../assets/HomeSection/OurOfferings/icon4.png'

// Importing your custom animation components
import {
    FadeIn,
    TextReveal,
    StaggerChildren,
    StaggerItem,
    MagneticButton
} from "../animations";

import "../../style/home/ouroffering.css";
import promoImage from "../../assets/HomeSection/OurOfferings/OurImage.png";
import PersonalBranding from '../../assets/HomeSection/OurOfferings/PersonalBranding.png'
import BrandConsulting from '../../assets/HomeSection/OurOfferings/BrandConsulting.png'
import BrandStrategy from '../../assets/HomeSection/OurOfferings/BrandStrategy.png'
import CompanyBranding from '../../assets/HomeSection/OurOfferings/CompanyBranding.png'

const Ouroffering = () => {
    const [activeTab, setActiveTab] = useState("Branding");

    const offeringsData = {
        Branding: [
            {
                icon: icon2, title: "Personal Branding",
                hover: PersonalBranding,
                desc: "Build a credible, authentic personal brand that positions you as a leader in your industry. We help founders and professionals create visibility, trust and influence that drives opportunities."
            },
            {
                icon: icon1, title: "Company Branding",
                hover: CompanyBranding,
                desc: "Define your brand identity clearly from positioning and messaging to visual consistency. We help companies stand out, stay relevant and build long-term recall across markets."
            },
            {
                icon: icon3, title: "Brand Strategy",
                hover: BrandStrategy, desc: "A strong brand starts with strategy. We develop structured brand frameworks that align vision, audience insights, and competitive positioning  creating a clear roadmap for growth."
            },
            {
                icon: icon4, title: "Brand Consulting",
                hover: BrandConsulting, desc: "For businesses facing confusion or stagnation, we offer clarity. Our consulting focuses on identifying gaps, refining direction, and aligning brand decisions with business outcomes."
            }
        ],
        Designing: [
            { icon: <FaPaintBrush />, title: "UI / UX Design", desc: "Design intuitive experiences focused on usability and conversion." },
            { icon: <FaPaintBrush />, title: "Graphic Design", desc: "Visually compelling creatives aligned with brand identity." }
        ],
        Development: [
            { icon: <FaLaptopCode />, title: "Web Development", desc: "Fast, scalable, SEO-friendly websites built with modern tech." },
            { icon: <FaLaptopCode />, title: "App Development", desc: "Modern frontend and backend systems for mobile and web." }
        ],
        "Digital Marketing": [
            { icon: <FaChartLine />, title: "Performance Marketing", desc: "ROI-driven ad campaigns that scale your business." },
            { icon: <FaChartLine />, title: "SEO & Growth", desc: "Long-term organic growth strategies to dominate search." }
        ],
        "E-Commerce listing": [
            { icon: <FaShoppingCart />, title: "Product Listing", desc: "Optimized listings for global marketplaces." },
            { icon: <FaShoppingCart />, title: "Catalog Management", desc: "End-to-end catalog handling for your store." }
        ]
    };

    const tabs = Object.keys(offeringsData);
    return (
        <section className="bm-offering-section container">
            {/* 1. Header with Text Reveal Animation */}
            <div className="text-center mb-12">
                <FadeIn delay={0.1}>
                    <div className="bm-offering-badge">Our Offerings</div>
                </FadeIn>
                <FadeIn delay={0.1}>

                    <h2 className="bm-offering-title">
                        Collaborate with Us <span className="text-black">and turn Ideas into  <br />Impactful,</span>
                        <span className="text-yellow"> Measurable results</span>
                    </h2>
                </FadeIn>

            </div>

            {/* 2. Tabs with Stagger Animation */}
            <StaggerChildren className="bm-offering-tabs" staggerDelay={0.05}>
                {tabs.map(tab => (
                    <StaggerItem key={tab}>
                        <button
                            className={`bm-offering-tab-btn ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    </StaggerItem>
                ))}
            </StaggerChildren>

            {/* 3. Grid Content */}
            <div className="bm-offering-grid">

                {/* Left Side: Promo Card with Magnetic Button */}
                <FadeIn direction="left" delay={0.4} className="bm-offering-promo-card">
                    <Image
                        src={promoImage}
                        alt="Promo"
                        className="bm-offering-promo-img"
                        priority
                    />
                    <div className="bm-offering-promo-overlay">
                        <FadeIn delay={0.6}>
                            <h3>Need clarity?</h3>
                            <p>Our team is ready to guide you</p>
                        </FadeIn>

                        <div className="need_btn">

                            <div className="bm-offering-promo-text">
                                Get expert support and move forward with confidence. We help you make informed decisions with clarity.
                            </div>
                            <button className="bm-offering-book-btn">
                                <div className="icon-circle">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 10.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                Book a Call
                            </button>
                        </div>

                    </div>
                </FadeIn>

                {/* Right Side: Services List with Staggered Reveal */}
                <StaggerChildren
                    key={activeTab} // Tab marumpothu animation reset aagum
                    className="bm-offering-services-list"
                    staggerDelay={0.1}
                >
                    {offeringsData[activeTab].map((item, index) => (
                        <StaggerItem key={index}>
                            <div
                                className="bm-service-item"
                                style={{
                                    '--hover-bg': `url(${item.hover?.src || item.hover})`
                                }}
                            >
                                <div className="bm-service-header">
                                    <Image
                                        src={item.icon}
                                        alt="service icon"
                                        className="service-icon"
                                        width={35}
                                        height={35}
                                        priority
                                    />
                                    <h4>{item.title}</h4>
                                </div>
                                <p>{item.desc}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerChildren>
            </div>
        </section>
    );
};

export default Ouroffering;