
// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { FadeIn } from "@/components/animations/fade-in";
// import Image from "next/image";
// import "../../style/aboutus/aboutus.css";
// import aboutpic from '../../assets/about/Frame 2147226233 (2).png'
// import founder1 from '../../assets/about/Frame 2147226233 (2).png'
// import founder2 from '../../assets/about/Frame 2147226233 (2).png'
// import founder3 from '../../assets/about/Frame 2147226233 (2).png'
// import founder4 from '../../assets/about/Frame 2147226233 (2).png'
// import founder5 from '../../assets/about/founder5.png'

// const Paragraph = {
//   paragraph1: "R. Vasanth Kumar, Founder & CEO of Brand Mindz Global Technology Pvt Ltd, brings over 10 years of experience leading marketing teams in large corporates and mentoring over 20,000 entrepreneurs across India. Vasanth founded Brand Mindz with a singular mission: to help businesses grow digitally through strategic, outcome-driven approaches. His commitment to accountability and ethical business practices is guided by a personal principle: 'Promise what you deliver, and deliver what you promised.'",
//   paragraph2: "Inspired by his own family's entrepreneurial journey and the challenges faced by startups, Vasanth is passionate about supporting the entrepreneur community. He serves as an official mentor for Mentor TN, a government initiative aimed at nurturing startups and guiding them toward sustainable growth. Under his leadership, Brand Mindz has become a trusted partner for ethical, value-driven businesses, combining corporate-grade expertise with a mission-driven approach to empower entrepreneurs and create measurable digital impact."
// }

// // Founder data in JSON format
// const founderData = [
//   {
//     id: 1,
//     name: "R. Vasanth Kumar",
//     role: "Founder & CEO",
//     image: aboutpic,
//     paragraph1: "R. Vasanth Kumar, Founder & CEO of Brand Mindz Global Technology Pvt Ltd, brings over 10 years of experience leading marketing teams in large corporates and mentoring over 20,000 entrepreneurs across India. Vasanth founded Brand Mindz with a singular mission: to help businesses grow digitally through strategic, outcome-driven approaches. His commitment to accountability and ethical business practices is guided by a personal principle: 'Promise what you deliver, and deliver what you promised.'",
//     paragraph2: "Inspired by his own family's entrepreneurial journey and the challenges faced by startups, Vasanth is passionate about supporting the entrepreneur community. He serves as an official mentor for Mentor TN, a government initiative aimed at nurturing startups and guiding them toward sustainable growth. Under his leadership, Brand Mindz has become a trusted partner for ethical, value-driven businesses, combining corporate-grade expertise with a mission-driven approach to empower entrepreneurs and create measurable digital impact."
//   },
//   {
//     id: 2,
//     name: "Priya Sharma",
//     role: "Co-Founder & Creative Director",
//     image: founder1,
//     paragraph1: "Priya Sharma brings 12 years of creative leadership experience from top advertising agencies. Her innovative approach to brand storytelling has helped over 500 businesses establish their visual identity. She believes that great design is not just about aesthetics but about creating meaningful connections between brands and their audiences.",
//     paragraph2: "Under her creative direction, Brand Mindz has won multiple awards for digital campaigns. She specializes in translating complex business goals into simple, powerful visual narratives. Her philosophy centers on 'design thinking' - putting the end-user at the heart of every creative decision."
//   },
//   {
//     id: 3,
//     name: "Arun Prakash",
//     role: "Chief Technology Officer",
//     image: founder2,
//     paragraph1: "Arun Prakash is a full-stack architect with 15 years of experience in building scalable digital products. Previously at Amazon and Flipkart, he has led engineering teams handling millions of transactions daily. At Brand Mindz, he ensures that every technical solution is robust, secure, and future-ready.",
//     paragraph2: "Arun is passionate about mentoring young developers and has built Brand Mindz's engineering culture around continuous learning and excellence. He believes that technology should empower businesses without adding complexity, making enterprise-grade solutions accessible to growing companies."
//   },
//   {
//     id: 4,
//     name: "Kavitha Krishnan",
//     role: "Head of Strategy",
//     image: founder3,
//     paragraph1: "Kavitha Krishnan comes with a decade of consulting experience from McKinsey & Company. She specializes in growth strategy and market entry for D2C brands. Her data-driven approach has helped numerous startups achieve product-market fit and scale profitably in competitive markets.",
//     paragraph2: "She leads Brand Mindz's strategic planning vertical, ensuring that every marketing decision is backed by thorough research and measurable objectives. Kavitha is also a visiting faculty at leading business schools, teaching digital transformation and brand strategy."
//   },
//   {
//     id: 5,
//     name: "Suresh Rajan",
//     role: "Head of Client Success",
//     image: founder4,
//     paragraph1: "Suresh Rajan has spent 14 years building client partnerships at leading PR and marketing firms. He believes that client success is the only true metric of agency performance. His empathetic approach to account management has resulted in 95% client retention rate at Brand Mindz.",
//     paragraph2: "Suresh pioneered the 'partnership-first' service model at Brand Mindz, where clients are treated as collaborators rather than customers. He regularly conducts workshops on effective client-agency relationships and is known for turning challenging projects into long-term partnerships."
//   }
// ];

// export const AboutFounderContentSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const carousel = carouselRef.current;
//     if (carousel) {
//       carousel.style.animation = 'none';
//       setTimeout(() => {
//         carousel.style.animation = '';
//       }, 10);
//     }

//     // Update active index based on animation timing
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % 5);
//     }, 5000); // Change every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bm-about-content-section">
//       <div className="bm-about-container">
//         <div className="bm-section-bg">
//           <FadeIn delay={0.1}>
//             <div className="bm-about-badge">
//               <span>About Founder</span>
//             </div>
//           </FadeIn>
//           <div className="bm-about-grid-founder">
//             <div>

//               <div className="bm-founder-carousel-container">
//                 <div className="bm-founder-slider" ref={carouselRef}>
//                   {founderData.map((founder, index) => (
//                     <div className="bm-slide" key={index}>
//                       <div className="bm-about-image-container">
//                         <Image
//                           src={founder.image}
//                           alt={founder.name}
//                           // className="w-full h-full object-cover"
//                           priority={index === 0}
//                         // sizes="(max-width: 768px) 100vw, 50vw"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Dots Inside Image - Bottom Center */}
//                 <div className="bm-dots-inside">
//                   {founderData.map((_, index) => (
//                     <div
//                       key={index}
//                       className={`bm-dot-inside ${index === activeIndex ? 'active' : ''}`}
//                     ></div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - EXACTLY YOUR ORIGINAL LAYOUT, ONLY CONTENT CHANGES WITH FADEIN */}
//             <div className="bm-about-Right">
//               <FadeIn delay={0.2}>
//                 <h2 className="bm-about-heading">
//                   <span className="bm-text-black">Built By A Founder Who Respects</span>
//                   <br />
//                   <span className="bm-text-gray">every business as someone's dream.</span>
//                 </h2>
//               </FadeIn>

//               {/* Content changes based on active slide - ONLY FADEIN, NO SLIDER */}
//               <div>
//                 {/* <FadeIn key={`p1-${activeIndex}`} delay={0.3}> */}
//                 <p className="bm-about-paragraph bm-text-black">
//                   {/* {founderData[activeIndex].paragraph1} */}
//                   {Paragraph.paragraph1}
//                 </p>
//                 {/* </FadeIn> */}

//                 {/* <FadeIn key={`p2-${activeIndex}`} delay={0.4}> */}
//                 <p className="bm-about-paragraph">
//                   <span className="bm-text-gray">
//                     {/* {founderData[activeIndex].paragraph2} */}
//                     {Paragraph.paragraph2}

//                   </span>
//                 </p>
//                 {/* </FadeIn> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


"use client";

import React, { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/aboutus/aboutus.css";
import aboutpic from '../../assets/about/Frame 2147226233 (2).png'
import founder1 from '../../assets/about/Frame 2147226233 (2).png'
import founder2 from '../../assets/about/Frame 2147226233 (2).png'
import founder3 from '../../assets/about/Frame 2147226233 (2).png'
import founder4 from '../../assets/about/Frame 2147226233 (2).png'

// --- Only Adding the Logic Components ---
const ScrollLine = ({ content }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Entry: black | Exit: gray back
        setIsHighlighted(entry.isIntersecting);
      },
      {
        rootMargin: "-20% 0px -20% 0px", // Trigger zone in the middle
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

const Paragraph = {
  paragraph1: "R. Vasanth Kumar, Founder & CEO of Brand Mindz Global Technology Pvt Ltd, brings over 10 years of experience leading marketing teams in large corporates and mentoring over 20,000 entrepreneurs across India. Vasanth founded Brand Mindz with a singular mission: to help businesses grow digitally through strategic, outcome-driven approaches. His commitment to accountability and ethical business practices is guided by a personal principle: 'Promise what you deliver, and deliver what you promised.'",
  paragraph2: "Inspired by his own family's entrepreneurial journey and the challenges faced by startups, Vasanth is passionate about supporting the entrepreneur community. He serves as an official mentor for Mentor TN, a government initiative aimed at nurturing startups and guiding them toward sustainable growth. Under his leadership, Brand Mindz has become a trusted partner for ethical, value-driven businesses, combining corporate-grade expertise with a mission-driven approach to empower entrepreneurs and create measurable digital impact."
}

const founderData = [
  { id: 1, name: "R. Vasanth Kumar", role: "Founder & CEO", image: aboutpic },
  { id: 2, name: "Priya Sharma", role: "Co-Founder", image: founder1 },
  { id: 3, name: "Arun Prakash", role: "CTO", image: founder2 },
  { id: 4, name: "Kavitha Krishnan", role: "Head of Strategy", image: founder3 },
  { id: 5, name: "Suresh Rajan", role: "Head of Success", image: founder4 }
];

export const AboutFounderContentSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.animation = 'none';
      setTimeout(() => {
        carousel.style.animation = '';
      }, 10);
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bm-about-content-section">
      {/* <div className="bm-about-container"> */}
        <div className="bm-section-bg">
          <FadeIn delay={0.1}>
            <div className="bm-about-badge">
              <span>About Founder</span>
            </div>
          </FadeIn>
          
          <div className="bm-about-grid-founder">
            {/* Left Column - Carousel (Kept Exactly Same) */}
            <div>
              <div className="bm-founder-carousel-container">
                <div className="bm-founder-slider" ref={carouselRef}>
                  {founderData.map((founder, index) => (
                    <div className="bm-slide" key={index}>
                      <div className="bm-about-image-container">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bm-dots-inside">
                  {founderData.map((_, index) => (
                    <div
                      key={index}
                      className={`bm-dot-inside ${index === activeIndex ? 'active' : ''}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Highlight Logic Added ONLY to Paragraphs */}
            <div className="bm-about-Right">
              <FadeIn delay={0.2}>
                <h2 className="bm-about-heading">
                  <span className="bm-text-black">Built By A Founder Who Respects</span>
                  <br />
                  <span className="bm-text-gray">Every Business As Someone's Dream.</span>
                </h2>
              </FadeIn>

              <div>
                <p className="bm-about-paragraph-founder">
                  <ScrollSpan>
                    {Paragraph.paragraph1}
                  </ScrollSpan>
                </p>

                <p className="bm-about-paragraph-founder">
                   <ScrollSpan>
                    {Paragraph.paragraph2}
                  </ScrollSpan>
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};