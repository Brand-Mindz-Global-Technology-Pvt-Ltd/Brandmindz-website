"use client";

import React, { useState, useRef, useEffect } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import "../../style/aboutus/aboutus.css";

// Import images
import dinamalar from '../../assets/about/Ellipse 365 (1).png';
import news18 from '../../assets/about/Ellipse 365 (2).png';
import sunnews from '../../assets/about/Ellipse 365.png';
import vikatan from '../../assets/about/Ellipse 365 (3).png';

// Testimonials Data
const testimonialsData = [
  {
    id: 1,
    name: "Akshaya Sivaraj",
    position: "Founder & CEO",
    company: "Brand Mindz",
    year: "2025",
    quote: "Your team’s efforts were truly outstanding. The designs were impressive, and your team clearly knows how to manage clients and ensure complete satisfaction. Keep up the great work and keep growing. Let’s grow together! Thank you, Vasanth bro and the entire Brand mindz team.",
    rating: 5,
    image: vikatan,
    place:"tirunelveli"
  },
  {
    id: 2,
    name: "M.Ganesh Jothi",
    position: "Marketing Director",
    company: "Dinamalar",
    year: "2025",
    quote: "I've approached Brand Mindz Vasanth for Digital Marketing, They've give me expert consultation and support for my business growth. Thank you team for your timely support.",
    rating: 5,
    image: dinamalar,
    place:"chennai"
  },
  {
    id: 3,
    name: "Anand Vignesh",
    position: "CEO",
    company: "News 18 Tamil",
    year: "2025",
    quote: "From what I've seen, their work stands out with sleek designs and effective strategies. I've heard great feedback from businesses they've helped, praising their expertise and personalized approach. If you're searching for a team to elevate your online presence,Brand Mindz,seems like a solid choice.",
    rating: 5,
    image: news18,
    place:"coimbatore"
  },
  {
    id: 4,
    name: "velu",
    position: "Head of Digital",
    company: "Sun News",
    year: "2026",
    quote: "Had a chance to work with Vasanth last month for a project; he is truly determined, and really glad working with him and his team! They are focused Customer Friendly, and Approachable! Long way to go team, Brand Mindz, keep your enthusiasm level even more high!",
    rating: 4,
    image: sunnews,
    place:"chennai"
  },
  {
    id: 5,
    name: "Arun Kumar",
    position: "Brand Manager",
    company: "Vikatan",
    year: "2024",
    quote: "They don't just deliver services, they deliver growth. Highly recommended!",
    rating: 5,
    image: vikatan,
    place:"chennai"
  },
  {
    id: 6,
    name: "Divya Bharathi",
    position: "Product Head",
    company: "Dinamalar",
    year: "2024",
    quote: "Outstanding work ethics and remarkable marketing strategies that drive real revenue.",
    rating: 5,
    image: dinamalar,
     place:"madurai"
  }
];

export const TestimonialsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const speed = useRef(0.5); // Scroll speed - adjust as needed
  
  // Duplicate data for infinite scroll
  const allTestimonials = [...testimonialsData, ...testimonialsData];

  useAnimationFrame(() => {
    if (!isHovered && containerRef.current) {
      const container = containerRef.current;
      const maxScroll = -(container.scrollWidth / 2); // Scroll only half (since duplicated)
      
      // Get current x value
      let currentX = x.get();
      
      // Move left slowly
      currentX -= speed.current;
      
      // Reset when we've scrolled half way (to create infinite loop)
      if (currentX <= maxScroll) {
        currentX = 0;
      }
      
      x.set(currentX);
    }
  });

  return (
    <section className="bm-testimonials-section">
      <div className="bm-testimonials-container">
        
        {/* Section Header - Centered, 60px Font Size */}
        <FadeIn delay={0.1}>
          <div className="bm-testimonials-header">
            <h2 className="bm-testimonials-title">Testimonials</h2>
          </div>
        </FadeIn>

        {/* Horizontal Scrolling Cards - Compact Size */}
        <div 
          className="bm-testimonials-scroll-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bm-testimonials-scroll-container">
            <motion.div 
              ref={containerRef}
              className="bm-testimonials-track-horizontal"
              style={{ x }}
            >
              {allTestimonials.map((testimonial, index) => (
                <div key={`testimonial-${index}`} className="bm-testimonial-card-compact">
                  {/* Stars */}
                  <div className="bm-compact-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="bm-compact-star">★</span>
                    ))}
                  </div>

                  {/* Quote - Small */}
                  <p className="bm-compact-quote">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Row - Compact */}
                  <div className="bm-compact-author">
                    <div className="bm-compact-author-image">
                      <Image 
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={32}
                        height={32}
                        className="bm-compact-author-img"
                      />
                    </div>
                    <div className="bm-compact-author-info">
                      <span className="bm-compact-author-name">{testimonial.name}</span>
                      <span className="bm-compact-author-detail">
                        {testimonial.position}, {testimonial.place} • {testimonial.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};