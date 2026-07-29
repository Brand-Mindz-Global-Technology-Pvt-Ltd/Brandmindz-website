"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/contactus/contactus.css";

// Import icons (replace with your actual icon images)
import phoneIcon from '../../assets/about/ic_baseline-call.webp';
import emailIcon from '../../assets/about/vector18.webp';
import locationIcon from '../../assets/about/vector19.webp';
import userIcon from '../../assets/about/vector20.webp';

export const ContactCardsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contactCards = [
    {
      id: 1,
      title: "For Sales",
      icon: phoneIcon,
      content: [
        { label: "For Sales", value: "+91 90806 77945" },
        { label: "For HR", value: "+91 84282 76993" }
      ],
      type: "phone"
    },
    {
      id: 2,
      title: "For Sales",
      icon: emailIcon,
      content: [
        { label: "For Sales", value: "business@brandmindz.com" },
        { label: "For HR", value: "brandmindzteam@gmail.com" }
      ],
      type: "email"
    },
    {
      id: 3,
      title: "Chennai Office",
      icon: locationIcon,
      content: [
        { label: "Chennai Office", value: "Workflow, Greeta Towers, 99, Rajiv Gandhi Salai, Industrial Estate, Perungudi, Chennai, Tamil Nadu 600096." },
        { label: "Tirunelveli Office", value: "Startup TN, Tirunelveli Municipal Corporation Incubation Centre, SN Highway, Tirunelveli 627002." }
      ],
      type: "location"
    },
    {
      id: 4,
      title: "Careers",
      icon: userIcon,
      content: [
        { label: "Careers", value: "brandmindzteam@gmail.com" },
        { label: "For B2B", value: "headoffice@brandmindz.com" }
      ],
      type: "careers"
    }
  ];

  return (
    <section className="bm-contact-cards-section">
      <div className="bm-contact-cards-container">



        {/* Four Cards Grid */}
        <div className="bm-cards-grid">
          {contactCards.map((card) => (
            <FadeIn key={card.id} delay={0.1 + card.id * 0.05}>
              <div
                className={`bm-contact-card ${hoveredCard === card.id ? 'bm-card-hovered' : ''} ${card.type === 'careers' ? 'bm-careers-card' : ''}`}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon */}
                <div className="bm-card-icon">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={40}
                    height={40}
                    className="bm-icon-image"
                  />
                </div>

                {/* Card Content */}
                <div className="bm-card-content">
                  {card.content.map((item, index) => (
                    <div key={index} className="bm-card-item">
                      <span className={card.id === 3 ? "bm-card-label-address" : "bm-card-label"}>{item.label}</span>
                      <span className={card.id === 3 ? "bm-card-value-address" : "bm-card-value"}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};