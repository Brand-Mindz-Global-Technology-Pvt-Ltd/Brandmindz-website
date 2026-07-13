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
                <ScrollLine key={idx} content={sentence + (idx < sentences.length - 1 ? " " : "")} />
            ))}
        </>
    );
};

export const YoutubeMarketing = () => {
    const router = useRouter();
    const [index, setIndex] = useState(0);

    const statsData = [
        { number: "2X+", label: "Higher Engagement Rate" },
        { number: "300+", label: "Brands Growing with Video Funnels" },
        { number: "40%+", label: "Increase in Watch Time" },
        { number: "60%+", label: "Higher Lead Trust Through Video Authority" },
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
                    <h2 className="bl-subtitle">Grow Authority with Strategic Video Content</h2>
                    <h3 className="bl-headline-light"> Build brand trust through consistent visibility.</h3>
                    <h1 className="bl-headline-bold">
                        Turn your YouTube Into <span>a Revenue Engine.</span>
                    </h1>
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
                            <span className="bl-client-list">Be part of</span>
                            <span className="bl-client-stat"> 300+ Brands Scaling Through Video</span>
                        </div>
                    </div>

                    <hr className="bl-card-divider" />

                    <p className="bl-client-desc">
                        Collaborate with our team to transform your YouTube channel into a structured growth platform that increases watch time, builds subscriber loyalty, and drives measurable leads through strategic content funnels.
                    </p>
                </div>
            </div>

            <div className="bl-content-layout">
                <div className="bl-feature-card">
                    <div className="bl-feature-img-box">
                        <Image src={BrandingownerImage} alt="YouTube Marketing" />
                    </div>
                    <div className="bl-feature-points">
                        <div className="bl-point">
                            <div className="bl-point-icon"><Image src={Vector1} alt="Vector1" /></div>
                            <div className="bl-point-txt">
                                <h4>Strategy & Channel Positioning</h4>
                                <p>We design your YouTube growth roadmap by defining niche positioning, content pillars, search-based topic clustering, competitor gap analysis, and audience intent mapping. Our strategy aligns YouTube SEO with Google search visibility and AI-driven discovery systems to maximize long-term organic reach.</p>
                            </div>
                        </div>
                        <div className="bl-point">
                            <div className="bl-point-icon"><Image src={Vector2} alt="Vector2" /></div>
                            <div className="bl-point-txt">
                                <h4>Content Production & Optimization</h4>
                                <p>We create high-retention video formats, thumbnail strategy frameworks, keyword-optimized titles, metadata structuring, and audience-focused scripting. From educational videos to authority-building series, we ensure every upload is optimized for search, suggested videos, and homepage discovery.</p>
                            </div>
                        </div>
                        <div className="bl-point">
                            <div className="bl-point-icon"><Image src={Vector3} alt="Vector3" /></div>
                            <div className="bl-point-txt">
                                <h4>Growth & Conversion Optimization</h4>
                                <p>We manage analytics tracking, audience retention improvement, CTR optimization, subscriber funnel mapping, and lead integration through website and remarketing flows. Our structured approach improves average watch duration, engagement rate, and revenue performance.</p>
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
                                Get expert YouTube marketing support and turn views into qualified leads. We help you increase subscribers, improve watch time, and convert video engagement into measurable business growth.
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
                <div className="bl-footer-section">
                    <div className="bl-footer-description">
                        <p className="bm-about-paragraph-branding">
                            <ScrollSpan>YouTube reaches more than 2.5 billion logged-in users each month and remains one of the most visited platforms in the world. Viewers collectively consume billions of hours of content every single day, making video one of the most powerful digital formats available. Over 80% of internet users watch video content weekly, and a majority say online videos influence their buying decisions. Brands that consistently publish strategic video content experience stronger brand recall, higher engagement rates, and improved customer trust. With YouTube integrated into Google search results and AI-driven recommendations, businesses gain long-term organic visibility and measurable revenue impact.</ScrollSpan>
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