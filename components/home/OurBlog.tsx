

"use client";

import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Animation components import
import {
    FadeIn,
    TextReveal,
    StaggerChildren,
    StaggerItem,
    MagneticButton
} from "../animations";

import '../../style/home/ourblog.css';
import left from '../../assets/HomeSection/Ourblog/leftside.jpg';
import bottomleft from '../../assets/HomeSection/Ourblog/bottomleft.jpg';
import bottomright from '../../assets/HomeSection/Ourblog/bottomright.jpg';
import map from '../../assets/HomeSection/Ourblog/map.jpg';

const OurBlog = () => {
    const sidePosts = [1, 2, 3];
    const ITEMS_PER_VIEW = 2;
    const [currentIndex, setCurrentIndex] = useState(0);

    const newBlogsData = [
        { id: 1, image: bottomleft, date: "08-11-2021", category: "Business", title: "How Color Influences Perception and Success in Modern Design" },
        { id: 2, image: bottomright, date: "08-11-2021", category: "Business", title: "How Color Influences Perception and Success in Modern Design" },
        { id: 3, image: bottomright, date: "08-11-2021", category: "Business", title: "How Color Influences Perception and Success in Modern Design" },
        { id: 4, image: bottomleft, date: "08-11-2021", category: "Business", title: "How Color Influences Perception and Success in Modern Design" },
    ];

    const handleNext = () => {
        if (currentIndex + ITEMS_PER_VIEW < newBlogsData.length) {
            setCurrentIndex(currentIndex + ITEMS_PER_VIEW);
        }
    };

    const handlePrev = () => {
        if (currentIndex - ITEMS_PER_VIEW >= 0) {
            setCurrentIndex(currentIndex - ITEMS_PER_VIEW);
        }
    };

    return (
        <section className="bm-blog-section">
            {/* Header Area */}
            <div className="bm-blog-header">
                <div>
                    <FadeIn direction="down" delay={0.1}>
                        <p className='bm-why-subtitle'>Our Blog</p>
                    </FadeIn>
                    <TextReveal
                        as="h2"
                        className="bm-blog-title"
                        text="Insights That Matter"
                        delay={0.2}
                    />
                </div>

                    <button className="bm-blog-all-btn">See All Blog Posts</button>
            </div>

            <div className="bm-blog-container">
                {/* Left Side: Featured Large Post */}
                <FadeIn direction="left" delay={0.4} className="bm-blog-featured">
                    <div className="bm-featured-card">
                        <Image src={left} alt="Balloons" className="hover-zoom" />
                        <div className="bm-featured-overlay  absolute bottom-0 left-0 right-0 p-[30px] bg-black/30 backdrop-blur-[12px] border-t border-white/20 text-white text-start">
                            <span className="bm-post-meta">08-11-2021 | Business</span>
                            <h3>How Color Influences Perception and Success in Modern Design</h3>
                            <p>Quitting is easy but greatness is built by those who refuse to stop. Every journey worth taking comes with obstacles, doubts, and moments where giving up feels tempting.</p>
                        </div>
                    </div>
                </FadeIn>

                {/* Right Side: List and Slider */}
                <div className="bm-blog-right-column">
                    {/* Top 3 List Posts with Stagger */}
                    <StaggerChildren className="bm-blog-list" staggerDelay={0.1} initialDelay={0.5}>
                        {sidePosts.map((_, index) => (
                            <StaggerItem key={index} className="bm-blog-list-item">
                                <Image src={map} alt="Meeting" />
                                <div className="bm-list-item-content">
                                    <span className="bm-post-meta" style={{ color: 'black' }}>08-11-2021  Business</span>
                                    <h4>How Color Influences Perception and Success in Modern Design</h4>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerChildren>

                    {/* Bottom Section: Slider with Animation */}
                    <div className="bm-new-blogs-section">
                        <div className="bm-new-blogs-header">
                            <FadeIn direction="none" delay={0.7}>
                                <h3>New Blogs</h3>
                            </FadeIn>

                            <div className="bm-slider-controls">
                                    <button
                                        className="bm-control-btn"
                                        onClick={handlePrev}
                                        disabled={currentIndex === 0}
                                    >
                                        <FiChevronLeft />
                                    </button>

                                    <button
                                        className="bm-control-btn"
                                        onClick={handleNext}
                                        disabled={currentIndex + ITEMS_PER_VIEW >= newBlogsData.length}
                                    >
                                        <FiChevronRight />
                                    </button>
                            </div>
                        </div>

                        {/* Slider Content with Framer Motion AnimatePresence */}
                        <div className="bm-new-blogs-grid">
                            <AnimatePresence mode="wait">
                                {newBlogsData
                                    .slice(currentIndex, currentIndex + ITEMS_PER_VIEW)
                                    .map((blog) => (
                                        <motion.div
                                            className="bm-mini-card"
                                            key={blog.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <Image src={blog.image} alt={blog.category} />
                                            <div className=" bm-mini-card-overlay  backdrop-blur-md border-t border-white/10 ">
                                                <span className="text-sm font-light opacity-80 mb-2 block">
                                                    {blog.date} &nbsp; {blog.category}
                                                </span>
                                                <h5 className="text-xl font-semibold leading-snug">
                                                    {blog.title}
                                                </h5>
                                            </div>
                                        </motion.div>
                                    ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurBlog;