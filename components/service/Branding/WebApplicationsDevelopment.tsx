"use client";

import React, { useEffect, useRef, useState } from 'react';
import { FiChevronRight } from "react-icons/fi";
import { Phone, ArrowRight } from 'lucide-react';
import Image from 'next/image';

import {
    FadeIn,
    TextReveal,
    StaggerChildren,
    StaggerItem,
    MagneticButton
} from "../../animations";

import BrandingownerImage from '../../../assets/branding/Gemini_Generate.png'
import OurImage from '../../../assets/branding/OurImage.png'

import Vector1 from '../../../assets/branding/Vector (1).png'
import Vector2 from '../../../assets/branding/Group (5).png'
import Vector3 from '../../../assets/branding/Vector (3).png'

import Person1 from '../../../assets/HomeSection/various/Person1.webp'
import Person2 from '../../../assets/HomeSection/various/Person2.webp'
import Person3 from '../../../assets/HomeSection/various/Person3.webp'
import Person4 from '../../../assets/HomeSection/various/Person4.webp'
import Person5 from '../../../assets/HomeSection/various/Person5.webp'
import { useRouter } from 'next/navigation';

// --- SCROLL HIGHLIGHT LOGIC ---
const ScrollLine = ({ content }) => {
    const [isHighlighted, setIsHighlighted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHighlighted(entry.isIntersecting);
            },
            {
                rootMargin: "-20% 0px -20% 0px",
                threshold: 0.1,
            }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <span
            ref={ref}
            style={{
                color: isHighlighted ? "#000000" : "#9ca3af",
                transition: "color 0.8s ease-in-out",
                display: "inline",
            }}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

const ScrollSpan = ({ children }) => {
    if (typeof children !== 'string') return <span>{children}</span>;
    const sentences = children.split(/(?<=\. )/g);
    return (
        <>
            {sentences.map((sentence, idx) => (
                <ScrollLine key={idx} content={sentence} />
            ))}
        </>
    );
};

export const WebApplicationsDevelopment = () => {
    const router = useRouter();
    const [index, setIndex] = useState(0);

    const statsData = [
        { number: "1,100+", label: "Web Applications Developed" },
        { number: "320+", label: "Businesses Served" },
        { number: "50%+", label: "Workflow Efficiency Improvement" },
        { number: "95%+", label: "System Performance Stability" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % statsData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bl-banner'>
            <div className="bl-hero-grid">
                <div className="bl-hero-text">
                    <h2 className="bl-subtitle">Build your web application with strong architecture</h2>
                    <h3 className="bl-headline-light">Stand ahead with scalable performance and functionality.</h3>
                    <h1 className="bl-headline-bold">Turn your <span>Application Into A Business Growth Engine.</span></h1>
                </div>

                <div className="bl-client-card">
                    <div className="bl-card-top">
                        <div className="bl-avatars">
                            <div
  className="bl-avatar-img"
  style={{ backgroundImage: `url(${Person1.src})` }}
></div>
                            <div className="bl-avatar-img"  style={{ backgroundImage: `url(${Person2.src})` }}></div>
                            <div className="bl-avatar-img"  style={{ backgroundImage: `url(${Person3.src})` }}></div>
                            <div className="bl-avatar-img"  style={{ backgroundImage: `url(${Person4.src})` }}></div>
                            <div className="bl-avatar-count">15K</div>
                        </div>

                        <div className="bl-client-title-group">
                            <span className="bl-client-list">Trusted by</span>
                            <span className="bl-client-stat">300+ Growing Brands</span>
                        </div>
                    </div>

                    <hr className="bl-card-divider" />

                    <p className="bl-client-desc">
                        Work with our team to develop secure, scalable, and high-performance web applications that streamline operations, improve user experience, and support long-term digital growth across industries.
                    </p>
                </div>
            </div>

            <div className="bl-content-layout">
                <div className="bl-feature-card">
                    <div className="bl-feature-img-box">
                        <Image src={BrandingownerImage} alt="Personal Branding" />
                    </div>
                    <div className="bl-feature-points">
                        <div className="bl-point">
                            <div className="bl-point-icon"><Image src={Vector1} alt="Vector1" /></div>
                            <div className="bl-point-txt">
                                <h4>Architecture Planning</h4>
                                <p>We design robust web application structures with clean frameworks, modular coding, and optimized workflows for stable performance.</p>
                            </div>
                        </div>
                        <div className="bl-point">
                            <div className="bl-point-icon"><Image src={Vector2} alt="Vector2" /></div>
                            <div className="bl-point-txt">
                                <h4>Custom Development</h4>
                                <p>We build feature-rich web applications with responsive interfaces, secure integrations, and user-focused functionality tailored to business needs.</p>
                            </div>
                        </div>
                        <div className="bl-point">
                            <div className="bl-point-icon"><Image src={Vector3} alt="Vector3" /></div>
                            <div className="bl-point-txt">
                                <h4>Security & Scalability</h4>
                                <p>We implement secure coding standards, scalable infrastructure, and future-ready systems to ensure reliability and long-term application stability.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <FadeIn direction="left" delay={0.4} className="bm-offering-promo-card">
                    <Image
                        src={OurImage}
                        alt="Promo"
                        className="bm-offering-promo-img"
                        priority
                    />
                    <div className="bm-offering-promo-overlay">
                        <FadeIn delay={0.6}>
                            <h3>Need support?</h3>
                            <p>Our team is ready to guide you.</p>
                        </FadeIn>

                        <div className="need_btn">
                            <div className="bm-offering-promo-text">
                                Get expert assistance to develop secure, scalable, and high-performance web applications that enhance efficiency and business productivity.
                            </div>
                            <button className="bm-offering-book-btn" onClick={() => router.push('/contact')}>
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
            </div>

            <div className="bl-content-layout" style={{ marginTop: "30px" }}>
                {/* Paragraph with Scroll Highlight Applied */}
                <div className="bl-footer-section">
                    <div className="bl-footer-description">
                        <p className="bm-about-paragraph-branding">
                            <ScrollSpan>
                                Many businesses struggle with outdated systems, slow dashboards, and inefficient workflows that reduce productivity and user satisfaction. Studies show that companies using custom web applications improve operational efficiency by up to 40% and reduce manual errors significantly. Poorly developed applications cause delays, security risks, and low user engagement. We develop high-performance web application solutions with scalable architecture, secure frameworks, and optimized user flows that improve speed, usability, and system reliability. Our web application development approach focuses on performance, automation, and seamless functionality to enhance user experience, increase efficiency, and deliver consistent digital performance across business platforms.</ScrollSpan>
                        </p>
                    </div>
                </div>

                <div>
                    <div className="bl-stat-card">
                        <h2>{statsData[index].number}</h2>
                        <p>{statsData[index].label}</p>

                        <div className="bl-dots">
                            {statsData.map((_, i) => (
                                <span key={i} className={i === index ? "active" : ""}></span>
                            ))}
                        </div>
                    </div>
                    <FadeIn delay={0.5}>
                        <div className="bm-hero-action">
                            <button className="bm-hero-btn-bl">
                                <div className="bm-hero-btn__icon-bl">
                                    <FiChevronRight />
                                </div>
                                <span className="bm-hero-btn__text-bl">
                                    Start <strong>Development</strong>
                                </span>
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};