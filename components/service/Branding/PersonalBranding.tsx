// import React, { useEffect, useState } from 'react';
// import { FiChevronRight } from "react-icons/fi";
// import { Phone, ArrowRight } from 'lucide-react';
// import Image from 'next/image';

// import {
//     FadeIn,
//     TextReveal,
//     StaggerChildren,
//     StaggerItem,
//     MagneticButton
// } from "../../animations";

// import BrandingownerImage from '../../../assets/branding/gemini_generate.webp'
// import OurImage from '../../../assets/branding/ourimage.webp'

// import Vector1 from '../../../assets/branding/vector1.webp'
// import Vector2 from '../../../assets/branding/group5.webp'
// import Vector3 from '../../../assets/branding/vector3.webp'
// export const PersonalBranding = () => {
//     const [index, setIndex] = useState(0);

//     const statsData = [
//         { number: "130+", label: "Global Countries" },
//         { number: "500+", label: "Clients Worldwide" },
//         { number: "1200+", label: "Completed" },
//         { number: "50+", label: "Awards Won" },
//     ];
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prev) => (prev + 1) % statsData.length);
//         }, 5000);

//         return () => clearInterval(interval);
//     }, []);
//     return (
//         <div className='bl-banner'>
//             <div className="bl-hero-grid">
//                 <div className="bl-hero-text">
//                     <h2 className="bl-subtitle">Build your identity with purpose</h2>
//                     <h3 className="bl-headline-light">Shape how the world sees you.</h3>
//                     <h1 className="bl-headline-bold">Turn your <span>Name Into A Powerful Brand.</span></h1>
//                 </div>

//                 <div className="bl-client-card">
//                     {/* Top Section: Avatars and Stats side-by-side */}
//                     <div className="bl-card-top">
//                         <div className="bl-avatars">
//                             <div className="bl-avatar-img" style={{ backgroundImage: 'url(/path-to-img1.jpg)' }}></div>
//                             <div className="bl-avatar-img" style={{ backgroundImage: 'url(/path-to-img2.jpg)' }}></div>
//                             <div className="bl-avatar-img" style={{ backgroundImage: 'url(/path-to-img3.jpg)' }}></div>
//                             <div className="bl-avatar-count">15K</div>
//                         </div>

//                         <div className="bl-client-title-group">
//                             <span className="bl-client-list">Join the list of</span>
//                             <span className="bl-client-stat">300+ Successful Clients</span>
//                         </div>
//                     </div>

//                     {/* The Horizontal Line from the screenshot */}
//                     <hr className="bl-card-divider" />

//                     {/* Description Section */}
//                     <p className="bl-client-desc">
//                         Work with our team to transform your ideas into powerful, results-driven solutions that create real business impact.
//                     </p>
//                 </div>
//             </div>
//             <div className="bl-content-layout">
//                 {/* Left Large Card */}
//                 <div className="bl-feature-card">

//                     <div className="bl-feature-img-box">
//                         <Image src={BrandingownerImage} alt="Personal Branding" />
//                     </div>

//                     <div className="bl-feature-points">
//                         <div className="bl-point">
//                             <div className="bl-point-icon"><Image src={Vector1} alt="Vector1" /></div>
//                             <div className="bl-point-txt">
//                                 <h4>Identity & Positioning</h4>
//                                 <p>We define your personal brand by highlighting your strengths, values, and what makes you unique in your industry.</p>
//                             </div>
//                         </div>
//                         <div className="bl-point">
//                             <div className="bl-point-icon"><Image src={Vector2} alt="Vector2" /></div>
//                             <div className="bl-point-txt">
//                                 <h4>Visual & Communication Style</h4>
//                                 <p>We design a consistent look and voice that represents you professionally across all platforms.</p>
//                             </div>
//                         </div>
//                         <div className="bl-point">
//                             <div className="bl-point-icon"><Image src={Vector3} alt="Vector3" /></div>
//                             <div className="bl-point-txt">
//                                 <h4>Influence & Growth Strategy</h4>
//                                 <p>We build your credibility and authority through strategic branding that creates long-term impact.</p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>


//                 <FadeIn direction="left" delay={0.4} className="bm-offering-promo-card">
//                     <Image
//                         src={OurImage}
//                         alt="Promo"
//                         className="bm-offering-promo-img"
//                         priority
//                     />
//                     <div className="bm-offering-promo-overlay">
//                         <FadeIn delay={0.6}>
//                             <h3>Need clarity?</h3>
//                             <p>Our team is ready to guide you</p>
//                         </FadeIn>

//                         <div className="need_btn">

//                             <div className="bm-offering-promo-text">
//                                 Get expert support and move forward with confidence. We help you make informed decisions with clarity.
//                             </div>
//                             <button className="bm-offering-book-btn" onClick={() => router.push('/contact')}>
//                                 <div className="icon-circle">
//                                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                                         <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 10.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//                                     </svg>
//                                 </div>
//                                 Book a Call
//                             </button>
//                         </div>

//                     </div>
//                 </FadeIn>
//             </div>
//             <div className="bl-content-layout" style={{ marginTop: "30px" }}>

//                 {/* Right Side Paragraph */}
//                 <div className="bl-footer-section">
//                     <div className="bl-footer-description">
//                         <p>
//                             We help you shape the way the world perceives you, turning your name into a powerful, purposeful, and unforgettable brand that leaves a lasting impression.
//                             We help you shape the way the world perceives you, turning your name into a powerful, purposeful, and unforgettable brand that leaves a lasting impression.
//                             We help you shape the way the world perceives you, turning your name into a powerful, purposeful, and unforgettable brand that leaves a lasting impression.
//                             <span className="bl-text-fade">
//                                 We help you shape the way the world perceives you, turning your name into a powerful, purposeful, and unforgettable brand that leaves a lasting impression.
//                             </span>
//                         </p>
//                     </div>
//                 </div>
//                 <div>
//                     {/* <div className="bl-stat-card">
//                             <h2>130+</h2>
//                             <p>Global <span> Countries</span> </p>

//                             <div className="bl-dots">
//                                 <span className="active"></span>
//                                 <span></span>
//                                 <span></span>
//                                 <span></span>
//                             </div>
//                         </div> */}
//                     <div className="bl-stat-card">
//                         <h2>{statsData[index].number}</h2>
//                         <p>{statsData[index].label}</p>

//                         <div className="bl-dots">
//                             {statsData.map((_, i) => (
//                                 <span key={i} className={i === index ? "active" : ""}></span>
//                             ))}
//                         </div>
//                     </div>
//                     <FadeIn delay={0.5}>
//                         <div className="bm-hero-action">
//                             <button className="bm-hero-btn-bl">
//                                 <div className="bm-hero-btn__icon-bl">
//                                     <FiChevronRight />
//                                 </div>
//                                 <span className="bm-hero-btn__text-bl">
//                                     Brand <strong>Yourself</strong>
//                                 </span>
//                             </button>
//                         </div>
//                     </FadeIn>
//                 </div>
//             </div>
//         </div>
//     )
// }



"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
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

export const PersonalBranding = ({ data }: { data: any }) => {
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

    if (!data) return null;

    return (
        <div className='bl-banner'>
            <div className="bl-hero-grid">
                <div className="bl-hero-text">
                    <h2 className="bl-subtitle">{data.subtitle}</h2>
                    <h3 className="bl-headline-light">{data.headlineLight}</h3>
                    <h1 className="bl-headline-bold" dangerouslySetInnerHTML={{ __html: data.headlineBold }}></h1>
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
                            <span className="bl-client-list">{data.clientList}</span>
                            <span className="bl-client-stat">{data.clientStat}</span>
                        </div>
                    </div>

                    <hr className="bl-card-divider" />

                    <p className="bl-client-desc">{data.clientDesc}</p>
                </div>
            </div>

            <div className="bl-content-layout">
                <div className="bl-feature-card">
                    <div className="bl-feature-img-box">
                        <Image src={data.featureImage} alt="Branding" />
                    </div>
                    <div className="bl-feature-points">
                        {data.features.map((feature: any, idx: number) => (
                            <div className="bl-point" key={idx}>
                                <div className="bl-point-icon"><Image src={feature.icon} alt={feature.title} /></div>
                                <div className="bl-point-txt">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
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
                            <p>{data?.rightsidsubtitle}</p>
                        </FadeIn>

                        <div className="need_btn">
                            <div className="bm-offering-promo-text">
                                {data.promoText}
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
                            <ScrollSpan>
                                {data.scrollParagraph}
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
