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

export const VideoCreation = () => {
    const router = useRouter();
    const [index, setIndex] = useState(0);

    const statsData = [
        { number: "130+", label: "Global Countries" },
        { number: "500+", label: "Clients Worldwide" },
        { number: "1200+", label: "Completed" },
        { number: "50+", label: "Awards Won" },
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
                    <h2 className="bl-subtitle">Create Videos That Capture Attention</h2>
                    <h3 className="bl-headline-light">Shape How Your Audience Sees and Remembers Your Brand.</h3>
                    <h1 className="bl-headline-bold">Turn Your Message Into <span>High-Impact Visual Content.</span></h1>
                </div>

                <div className="bl-client-card">
                    <div className="bl-card-top">
                        <div className="bl-avatars">
                            <div className="bl-avatar-img" style={{ backgroundImage: 'url(/path-to-img1.jpg)' }}></div>
                            <div className="bl-avatar-img" style={{ backgroundImage: 'url(/path-to-img2.jpg)' }}></div>
                            <div className="bl-avatar-img" style={{ backgroundImage: 'url(/path-to-img3.jpg)' }}></div>
                            <div className="bl-avatar-count">15K</div>
                        </div>

                        <div className="bl-client-title-group">
                            <span className="bl-client-list">Join the list of</span>
                            <span className="bl-client-stat">300+ Growing Businesses</span>
                        </div>
                    </div>

                    <hr className="bl-card-divider" />

                    <p className="bl-client-desc">
                        Work with our team to transform your ideas into professional, engaging, and conversion-focused videos that increase brand recall, strengthen audience trust, and drive measurable engagement across digital platforms.
                    </p>
                </div>
            </div>

            <div className="bl-content-layout">
                <div className="bl-feature-card">
                    <div className="bl-feature-img-box">
                        <Image src={BrandingownerImage} alt="Video Creation" />
                    </div>
                    <div className="bl-feature-points">
                        <div className="bl-point">
                            <div className="bl-point-icon"><Image src={Vector1} alt="Vector1" /></div>
                            <div className="bl-point-txt">
                                <h4>Video Strategy & Concept</h4>
                                <p>We plan structured video strategies by defining objectives, target audience, content angle, and platform format to ensure every video delivers clarity, impact, and value.</p>
                            </div>
                        </div>
                        <div className="bl-point">
                            <div className="bl-point-icon"><Image src={Vector2} alt="Vector2" /></div>
                            <div className="bl-point-txt">
                                <h4>Professional Production & Editing</h4>
                                <p>We produce high-quality visuals with cinematic shooting, clean transitions, sound design, and precision editing that maintain audience attention.</p>
                            </div>
                        </div>
                        <div className="bl-point">
                            <div className="bl-point-icon"><Image src={Vector3} alt="Vector3" /></div>
                            <div className="bl-point-txt">
                                <h4>Performance-Focused Optimization</h4>
                                <p>We optimize video formats, pacing, hooks, captions, and thumbnails to improve engagement, retention, and conversion performance.</p>
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
                            <p>Our video specialists are ready to guide you.</p>
                        </FadeIn>

                        <div className="need_btn">
                            <div className="bm-offering-promo-text">
                                Get expert support to create powerful video content with confidence. We help you plan, shoot, edit, and optimize videos that strengthen brand visibility and drive consistent audience engagement.
                            </div>
                            <button className="bm-offering-book-btn" onClick={() => router.push('/contact')}>
                                <div className="icon-circle">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 10.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                Launch Your Strategy
                            </button>
                        </div>
                    </div>
                </FadeIn>
            </div>

            <div className="bl-content-layout" style={{ marginTop: "30px" }}>
                <div className="bl-footer-section">
                    <div className="bl-footer-description">
                        <p className="bm-about-paragraph-branding">
                            <ScrollSpan>
                                Many businesses lose potential customers because their video content lacks structure, clarity, and audience focus. Studies show that viewers retain up to 95% of a message when delivered through video compared to 10% through text. Poorly edited or low-quality videos reduce trust instantly. We deliver high-impact video creation and editing solutions with professional scripting, structured storytelling, clean visuals, and optimized formats that improve retention, engagement, and conversion performance across platforms.
                            </ScrollSpan>
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
                                    Create <strong>With Us</strong>
                                </span>
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};
