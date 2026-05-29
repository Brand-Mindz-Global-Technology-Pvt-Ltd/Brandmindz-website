'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { privacyPolicyData } from '@/lib/privacy-policy-data';
import '../../style/privacy-policy/privacy-policy.css';

interface Subsection {
    heading: string;
    content: string;
}

interface PolicySection {
    id: string;
    heading: string;
    content: string;
    subsections?: Subsection[];
}

export default function PrivacyPolicyPage() {
    const [activeSection, setActiveSection] = useState(privacyPolicyData.sections[0].id);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.privacy-section');
            let current = '';

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id') || '';
                }
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 160,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <Header />
            <main className="privacy-main">
                <div className="privacy-header-container">
                    <h1 className="privacy-heading">Privacy <span>Policy</span></h1>
                </div>
                <div className="privacy-container">
                    <aside className="privacy-sidebar">
                        <nav className="sidebar-nav">
                            {privacyPolicyData.sections.map((section) => (
                                <a
                                    key={section.id}
                                    className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                                    onClick={() => scrollToSection(section.id)}
                                >
                                    {section.heading}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    <div className="privacy-content">
                        {(privacyPolicyData.sections as PolicySection[]).map((section: PolicySection) => (
                            <section
                                key={section.id}
                                id={section.id}
                                className="privacy-section"
                            >
                                <h2 className="section-heading">{section.heading}</h2>
                                <div
                                    className="section-text"
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                                {section.subsections?.map((sub: Subsection, index: number) => (
                                    <div key={index} className="subsection">
                                        <h3 className="subsection-heading">{sub.heading}</h3>
                                        <div
                                            className="section-text"
                                            dangerouslySetInnerHTML={{ __html: sub.content }}
                                        />
                                    </div>
                                ))}
                            </section>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
