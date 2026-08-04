"use client";

import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import { FadeIn } from "../../animations";
import { useRouter } from "next/navigation";
import BrandingownerImage from "../../../assets/branding/gemini_generate.webp";
import OurImage from "../../../assets/branding/ourimage.webp";
import Vector1 from "../../../assets/branding/vector1.webp";
import Vector2 from "../../../assets/branding/group5.webp";
import Vector3 from "../../../assets/branding/vector3.webp";
import Person1 from '../../../assets/HomeSection/various/person1.webp'
import Person2 from '../../../assets/HomeSection/various/person2.webp'
import Person3 from '../../../assets/HomeSection/various/person3.webp'

export const SocialMediaManagement = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const statsData = [
    { number: "7+", label: "Social Platforms Supported" },
    { number: "10+", label: "Integrated Management Services" },
    { number: "12+", label: "Industries Served" },
    { number: "100%", label: "Brand-Customised Content" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % statsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [statsData.length]);

  return (
    <div className="bl-banner">
      <div className="bl-hero-grid">
        <div className="bl-hero-text">
          <h2 className="bl-subtitle">Social Media Management Services</h2>
          <h3 className="bl-headline-light">Build a Brand People Remember.</h3>
          <h1 className="bl-headline-bold">Not Just a Page <span>They Follow.</span></h1>
        </div>

        <div className="bl-client-card">
          <div className="bl-card-top">
            <div className="bl-avatars">
              <div className="bl-avatar-img"  style={{ backgroundImage: `url(${Person1.src})` }}></div>
              <div className="bl-avatar-img"  style={{ backgroundImage: `url(${Person2.src})` }}></div>
              <div className="bl-avatar-img"  style={{ backgroundImage: `url(${Person3.src})` }}></div>
              <div className="bl-avatar-count">7+</div>
            </div>
            <div className="bl-client-title-group">
              <span className="bl-client-list">Build trust across</span>
              <span className="bl-client-stat">Leading Social Platforms</span>
            </div>
          </div>
          <hr className="bl-card-divider" />
          <p className="bl-client-desc">
            Your customers are already spending hours on social media every day. The question isn&apos;t whether your business should be there—it&apos;s whether you&apos;re creating a presence that builds trust, starts conversations, and drives business growth.
          </p>
        </div>
      </div>

      <div className="bl-content-layout">
        <div className="bl-feature-card">
          <div className="bl-feature-img-box">
            <Image src={BrandingownerImage} alt="Social Media Management" />
          </div>
          <div className="bl-feature-points">
            <div className="bl-point">
              <div className="bl-point-icon"><Image src={Vector1} alt="" /></div>
              <div className="bl-point-txt">
                <h4>Strategy & Content Planning</h4>
                <p>We begin by understanding your business, audience, competitors, and goals before developing a platform-specific content and communication strategy.</p>
              </div>
            </div>
            <div className="bl-point">
              <div className="bl-point-icon"><Image src={Vector2} alt="" /></div>
              <div className="bl-point-txt">
                <h4>Creative Development & Publishing</h4>
                <p>Our team designs creatives, writes captions, produces reels and short-form videos, and prepares monthly content calendars aligned with your brand tone.</p>
              </div>
            </div>
            <div className="bl-point">
              <div className="bl-point-icon"><Image src={Vector3} alt="" /></div>
              <div className="bl-point-txt">
                <h4>Community & Performance Management</h4>
                <p>We publish approved content, engage with your audience, monitor performance, identify opportunities, and continuously refine the strategy.</p>
              </div>
            </div>
          </div>
        </div>

        <FadeIn direction="left" delay={0.4} className="bm-offering-promo-card">
          <Image src={OurImage} alt="Social media consultation" className="bm-offering-promo-img" priority />
          <div className="bm-offering-promo-overlay">
            <FadeIn delay={0.6}>
              <h3>Need clarity?</h3>
              <p>Our team is ready to guide you.</p>
            </FadeIn>
            <div className="need_btn">
              <div className="bm-offering-promo-text">
                At Brand Mindz, we manage social media with purpose. Every post, campaign, design, and interaction is planned to strengthen your brand, engage your audience, and support your business objectives.
              </div>
              <button className="bm-offering-book-btn" onClick={() => router.push("/contact")}>
                <div className="icon-circle">☎</div>
                Get a Free Consultation
              </button>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="bl-content-layout" style={{ marginTop: "30px" }}>
        <div className="bl-footer-section">
          <div className="bl-footer-description">
            <h3 className="bl-headline-light">Social Media That Builds Businesses, Not Just Engagement</h3>
            <p className="bm-about-paragraph-branding">
              Social media is no longer just a marketing channel. It is where customers discover brands, compare businesses, build trust, and make buying decisions.
            </p>
            <p className="bm-about-paragraph-branding">
              A consistent and professional social media presence helps businesses establish credibility, communicate expertise, and stay connected with their audience. However, successful social media management requires much more than publishing attractive designs.
            </p>
            <p className="bm-about-paragraph-branding">
              At Brand Mindz, we combine strategy, creativity, audience insights, content planning, and performance analysis to build social media ecosystems that support long-term business growth. Our goal isn&apos;t simply to increase likes or followers—it is to create meaningful engagement that contributes to your brand reputation and business success.
            </p>
          </div>
        </div>
        <div>
          <div className="bl-stat-card social-media-stat-card">
            <h2>{statsData[index].number}</h2>
            <p>{statsData[index].label}</p>
            <div className="bl-dots">
              {statsData.map((_, itemIndex) => <span key={itemIndex} className={itemIndex === index ? "active" : ""}></span>)}
            </div>
          </div>
          <FadeIn delay={0.5}>
            <div className="bm-hero-action social-media-cta-action">
              <button className="bm-hero-btn-bl" onClick={() => router.push("/contact")}>
                <div className="bm-hero-btn__icon-bl"><FiChevronRight /></div>
                <span className="bm-hero-btn__text-bl">Free <strong>Consultation</strong></span>
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
