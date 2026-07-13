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

interface BrandConsultingProps {
    data?: {
        stats?: { number: string; label: string }[];
        subtitle?: string;
        headlineLight?: string;
        headlineBold?: string;
        clientList?: string;
        clientStat?: string;
        clientDesc?: string;
        featureImage?: any;
        features?: any[];
        promoText?: string;
        scrollParagraph?: string;
        rightsidsubtitle?: string;
    };
}

export const BrandConsulting = ({ data }: BrandConsultingProps) => {
    const router = useRouter();
    const [index, setIndex] = useState(0);

    const defaultStats = [
       { number: "130+", label: "Global Countries" },
        { number: "500+", label: "Clients Worldwide" },
        { number: "1200+", label: "Completed" },
        { number: "50+", label: "Awards Won" },
    ];

    const statsData = data?.stats && data.stats.length > 0 ? data.stats : defaultStats;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % statsData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [statsData.length]);

    return (
        <div className='bl-banner'>
            <div className="bl-hero-grid">
                <div className="bl-hero-text">
                    <h2 className="bl-subtitle">{data?.subtitle || "Build a Brand That Commands Authority"}</h2>
                    <h3 className="bl-headline-light">{data?.headlineLight || "Define How the Market Understands and Trusts Your Business."}</h3>
                    <h1 className="bl-headline-bold" dangerouslySetInnerHTML={{ __html: data?.headlineBold || "Turn Your Vision Into a <span>Scalable Brand Strategy.</span>" }}></h1>
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
                            <span className="bl-client-list">{data?.clientList || "Join the list of"}</span>
                            <span className="bl-client-stat">{data?.clientStat || "300+ Growing Businesses"}</span>
                        </div>
                    </div>

                    <hr className="bl-card-divider" />

                    <p className="bl-client-desc">
                        {data?.clientDesc || "Work with our team to transform your company into a clearly positioned, strategically differentiated, and market-ready brand that strengthens credibility, improves perception, and drives sustainable business growth across competitive industries."}
                    </p>
                </div>
            </div>

            <div className="bl-content-layout">
                <div className="bl-feature-card">
                    <div className="bl-feature-img-box">
                        <Image src={data?.featureImage || BrandingownerImage} alt="Brand Consulting" />
                    </div>
                    <div className="bl-feature-points">
                        {data?.features && data.features.length > 0 ? (
                            data.features.map((feature: any, idx: number) => (
                                <div className="bl-point" key={idx}>
                                    <div className="bl-point-icon"><Image src={feature.icon} alt={feature.title} /></div>
                                    <div className="bl-point-txt">
                                        <h4>{feature.title}</h4>
                                        <p>{feature.desc}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <>
                                <div className="bl-point">
                                    <div className="bl-point-icon"><Image src={Vector1} alt="Vector1" /></div>
                                    <div className="bl-point-txt">
                                        <h4>Brand Strategy & Positioning</h4>
                                        <p>We design structured brand consulting frameworks by defining your mission clarity, competitive positioning, audience perception, and long-term market direction.</p>
                                    </div>
                                </div>
                                <div className="bl-point">
                                    <div className="bl-point-icon"><Image src={Vector2} alt="Vector2" /></div>
                                    <div className="bl-point-txt">
                                        <h4>Brand Architecture & Communication</h4>
                                        <p>We build strong brand foundations through messaging alignment, value proposition refinement, tone clarity, and strategic differentiation.</p>
                                    </div>
                                </div>
                                <div className="bl-point">
                                    <div className="bl-point-icon"><Image src={Vector3} alt="Vector3" /></div>
                                    <div className="bl-point-txt">
                                        <h4>Growth-Oriented Brand Advisory</h4>
                                        <p>We provide strategic consulting that connects brand positioning with business expansion goals. Structured brand guidance improves pricing power and strengthens customer loyalty.</p>
                                    </div>
                                </div>
                            </>
                        )}
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
                            <p>{data?.rightsidsubtitle || "Our brand consultants are ready to guide you."}</p>
                        </FadeIn>

                        <div className="need_btn">
                            <div className="bm-offering-promo-text">
                                {data?.promoText || "Get expert support to build a strong brand consulting strategy with confidence. We help you refine positioning, strengthen perception, and create a structured growth roadmap that supports long-term market leadership."}
                            </div>
                            <button className="bm-offering-book-btn" onClick={() => router.push('/contact')}>
                                <div className="icon-circle">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 10.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                Start Your Journey
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
                                {data?.scrollParagraph || "Many businesses struggle because their brand lacks direction, clarity, and differentiation. Research shows consistent brand presentation across channels can increase revenue by up to 23%. Weak positioning reduces trust and limits growth potential. We deliver structured brand consulting solutions focused on clarity, differentiation, and sustainable authority. Our advisory approach strengthens market perception, improves customer confidence, and aligns brand identity with measurable business objectives."}
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
                                    Consult <strong>With Us</strong>
                                </span>
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};
