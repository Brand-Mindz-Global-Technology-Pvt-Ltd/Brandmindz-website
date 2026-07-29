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

import BrandingownerImage from '../../../assets/branding/gemini_generate.webp'
import OurImage from '../../../assets/branding/ourimage.webp'

import Vector1 from '../../../assets/branding/vector1.webp'
import Vector2 from '../../../assets/branding/group5.webp'
import Vector3 from '../../../assets/branding/vector3.webp'

import Person1 from '../../../assets/HomeSection/various/person1.webp'
import Person2 from '../../../assets/HomeSection/various/person2.webp'
import Person3 from '../../../assets/HomeSection/various/person3.webp'
import Person4 from '../../../assets/HomeSection/various/person4.webp'
import Person5 from '../../../assets/HomeSection/various/person5.webp'
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

export const StaticDevelopment = () => {
    const [index, setIndex] = useState(0);
    const router = useRouter();

    const statsData = [
        { number: "1,200+", label: "Static Pages Developed" },
        { number: " 350+", label: " Businesses Served" },
        { number: "45%+", label: "Speed Performance Improvement" },
        { number: "90%+", label: " Better Core Web Vitals" },
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

                    <h2 className="bl-subtitle">Build your static website with precision</h2>
                    <h3 className="bl-headline-light"> Stand strong with fast loading performance.</h3>
                    <h1 className="bl-headline-bold">
 Turn your  <span>Website Into A High Credibility Asset.</span></h1>
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
                            <span className="bl-client-stat"> 300+ Growing Brands</span>
                        </div>
                    </div>

                    <hr className="bl-card-divider" />

                    <p className="bl-client-desc">
                        Work with our team to develop structured, SEO-friendly static websites that load faster, improve performance, and enhance user trust across all digital platforms.
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
                                <h4>Performance Optimization</h4>
                                <p> We build lightweight static websites with clean code, fast loading architecture, and optimized assets to improve speed and overall performance.</p>
                            </div>
                        </div>
                        <div className="bl-point">
                            <div className="bl-point-icon"><Image src={Vector2} alt="Vector2" /></div>
                            <div className="bl-point-txt">
                                <h4>Structured Development</h4>
                                <p> We develop well-organized static pages with clear layouts, responsive structure, and SEO-ready coding that enhances usability and credibility.</p>
                            </div>
                        </div>
                        <div className="bl-point">
                            <div className="bl-point-icon"><Image src={Vector3} alt="Vector3" /></div>
                            <div className="bl-point-txt">
                                <h4>Scalability & Stability</h4>
                                <p> We plan development frameworks, hosting readiness, and future scalability to ensure stable performance and long-term digital reliability.</p>
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
                            <h3>Need clarity?</h3>
                            <p>Our team is ready to guide you.</p>
                        </FadeIn>

                        <div className="need_btn">
                            <div className="bm-offering-promo-text">

 Get expert assistance to build fast, secure, and high-performance static websites that strengthen your online presence.
 
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
                              Many businesses lose potential customers because their websites are slow, unstructured, and not optimized for performance or user experience. Research shows that 53% of users leave a website if it takes more than three seconds to load. Poorly developed static pages reduce credibility and engagement instantly. We build high-performance static development solutions with clean coding, fast loading architecture, and SEO-friendly structure that improve site speed, usability, and visibility. Our static website development approach focuses on stability, responsiveness, and structured layouts that enhance user trust, reduce bounce rates, and deliver consistent digital performance across devices.</ScrollSpan>
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
                                    Brand <strong>Yourself</strong>
                                </span>
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};