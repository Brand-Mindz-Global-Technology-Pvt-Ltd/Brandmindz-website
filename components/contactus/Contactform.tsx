"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/aboutus/aboutus.css";

// Import your images
import bgPattern from '../../assets/contact/Group (3).png';
import clientLogo1 from '../../assets/contact/Frame 7 89.png';
import indiaFlag from '../../assets/contact/emojione-v1_flag-for-india.png';
import arrowIcon from '../../assets/contact/ooui_next-ltr.png';

export const GetStartedSection = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [activeStep, setActiveStep] = useState(1);
  const [isCheckLaterDisabled, setIsCheckLaterDisabled] = useState(false);

  const services = [
    "Lead Generation",
    "Website Development",
    "App Development",
    "SEO & Content Marketing",
    "E-Commerce Listing",
    "Branding & Creative",
    "Others"
  ];

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleCheckLater = () => {
    setIsCheckLaterDisabled(true);
  };

  const clientLogos = [
    { id: 1, src: clientLogo1, alt: "Client 1" },
  ];

  return (
    <section className="bm-getstarted-section">
      {/* Background Pattern - Fluid Full Width - FIXED: Brighter background */}
      <div className="bm-getstarted-bg-fluid">
        <Image
          src={bgPattern}
          alt="Background Pattern"
          fill
          className="bm-bg-pattern"
          priority
        />
        <div className="bm-bg-overlay-fixed"></div>
      </div>

      {/* Content Container */}
      <div className="bm-getstarted-container-fluid">
        <div className="bm-getstarted-content-container">
          <div className="bm-getstarted-grid">
            <FadeIn delay={0.1}>
              {/* LEFT COLUMN - Image with Google Rating */}
              <div className="bm-left-column border"

                style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: "#E5E7EB",
                }}>

                <div className="bm-left-content">

                  <div

                  >
                    {/* Google Rating with Stars - Bottom center inside image */}
                    <div className="bm-google-rating-card-inside">
                      <div className="bm-rating-stars">
                        <span className="bm-star">★</span>
                        <span className="bm-star">★</span>
                        <span className="bm-star">★</span>
                        <span className="bm-star">★</span>
                        <span className="bm-star">★</span>
                      </div>
                      <span className="bm-rating-text">4.9 Google Rating</span>
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>


            {/* RIGHT COLUMN - Form Content */}
            <div className="bm-right-column">
              <FadeIn delay={0.2}>
                <div className="bm-right-content">

                  {/* Progress Steps - 1,2,3 with Green Circles */}
                  <div className="bm-progress-steps">
                    <div className={`bm-step-item ${activeStep === 1 ? 'bm-step-active' : ''} ${activeStep > 1 ? 'bm-step-completed' : ''}`}>
                      <div className="bm-step-circle">1</div>
                    </div>
                    <div className="bm-step-line"></div>
                    <div className={`bm-step-item ${activeStep === 2 ? 'bm-step-active' : ''} ${activeStep > 2 ? 'bm-step-completed' : ''}`}>
                      <div className="bm-step-circle">2</div>
                    </div>
                    <div className="bm-step-line"></div>
                    <div className={`bm-step-item ${activeStep === 3 ? 'bm-step-active' : ''}`}>
                      <div className="bm-step-circle">3</div>
                    </div>
                  </div>

                  {/* Clients Row - Join the list of 300+ Successful Clients */}
                  <div className="bm-clients-row">
                    <div className="bm-client-logos">
                      {clientLogos.map((logo) => (
                        <div key={logo.id} className="bm-client-logo">
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={40}
                            height={40}
                            className="bm-client-img"
                          />
                        </div>
                      ))}
                    </div>
                    <p className="bm-clients-text text-grey">Join the list of <span className="text-black">300+ Successful Clients</span></p>
                  </div>

                  {/* Trusted Agency Heading */}
                  <h3 className="bm-trusted-heading">
                    India's Most Trusted Digital Agency
                  </h3>

                  {/* Form Fields - ALL ROWS with 2 columns each */}
                  <div className="bm-form-fields">

                    {/* Row 1: Name & Company - 2 columns */}
                    <div className="bm-form-row">
                      <div className="bm-form-group">
                        <input type="text" placeholder="Name" className="bm-form-input" />
                      </div>
                      <div className="bm-form-group">
                        <input type="text" placeholder="Company Name" className="bm-form-input" />
                      </div>
                    </div>

                    {/* Row 2: Designation & Country - 2 columns */}
                    <div className="bm-form-row">
                      <div className="bm-form-group">
                        <input type="text" placeholder="Designation" className="bm-form-input" />
                      </div>
                      <div className="bm-form-group bm-phone-group">
                        <div className="bm-country-code">
                          <div className="bm-flag-container">
                            <Image
                              src={indiaFlag}
                              alt="India"
                              width={24}
                              height={16}
                              className="bm-flag-icon"
                            />
                          </div>
                          <span className="bm-code-text">+91</span>
                        </div>
                        <input type="tel" placeholder="Phone Number" className="bm-form-input bm-phone-input" />
                      </div>
                    </div>

                    {/* Row 3: Email & Location - 2 columns */}
                    <div className="bm-form-row">
                      <div className="bm-form-group">
                        <input type="email" placeholder="Email ID" className="bm-form-input" />
                      </div>
                      <div className="bm-form-group">
                        <input type="text" placeholder="Location" className="bm-form-input" />
                      </div>
                    </div>

                    <div className="bm-services-section">
                      <p className="bm-services-title">
                        How do you want Brand Mindz to help you?
                      </p>

                      <div className="bm-services-grid">
                        {services.map((service, index) => (
                          <div
                            key={index}
                            className={`bm-service-item-rounded ${selectedServices.includes(service) ? 'bm-service-selected-rounded' : ''}`}
                            onClick={() => toggleService(service)}
                          >
                            <span className="bm-service-checkbox-rounded">
                              {selectedServices.includes(service) && (
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                  <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                              )}
                            </span>
                            <span className="bm-service-label-rounded">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Privacy Text - Centered */}
                    <p className="bm-privacy-text-center">
                      We respect your privacy. No spam. One strategy call only.
                    </p>

                    {/* Buttons Row - Not Full Width, With Icon */}
                    <div className="bm-buttons-row-center">
                      <button
                        className={`bm-check-later-btn ${isCheckLaterDisabled ? 'bm-btn-disabled' : 'bm-btn-secondary'}`}
                        onClick={handleCheckLater}
                        disabled={isCheckLaterDisabled}
                      >
                        I will check you later
                      </button>
                      <button className="bm-get-started-btn">
                        <span className="bm-btn-icon">
                          <Image
                            src={arrowIcon}
                            alt="arrow"
                            width={16}
                            height={16}
                          />
                        </span>
                        Get Started
                      </button>
                    </div>

                  </div>

                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};