"use client";

import React, { useState, useRef, useEffect } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/aboutus/aboutus.css";

// Import your images
import bgPattern from '../../assets/contact/Group (3).png';
import clientLogo1 from '../../assets/contact/Frame 7 89.png';
import indiaFlag from '../../assets/contact/emojione-v1_flag-for-india.png';
import arrowIcon from '../../assets/contact/right.png';
import leftIcon from '../../assets/contact/left.png';
import contact from '../../assets/contact/Vector (1).png'


export const GetStartedSection = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [activeStep, setActiveStep] = useState(1);
  const [isCheckLaterDisabled, setIsCheckLaterDisabled] = useState(false);

  const countries = [
    { name: "India", code: "+91", flag: "https://flagcdn.com/w40/in.png" },
    { name: "United States", code: "+1", flag: "https://flagcdn.com/w40/us.png" },
    { name: "United Kingdom", code: "+44", flag: "https://flagcdn.com/w40/gb.png" },
    { name: "United Arab Emirates", code: "+971", flag: "https://flagcdn.com/w40/ae.png" },
    { name: "Australia", code: "+61", flag: "https://flagcdn.com/w40/au.png" },
    { name: "Canada", code: "+1", flag: "https://flagcdn.com/w40/ca.png" },
    { name: "Germany", code: "+49", flag: "https://flagcdn.com/w40/de.png" },
    { name: "France", code: "+33", flag: "https://flagcdn.com/w40/fr.png" },
    { name: "Singapore", code: "+65", flag: "https://flagcdn.com/w40/sg.png" },
    { name: "Malaysia", code: "+60", flag: "https://flagcdn.com/w40/my.png" },
    { name: "Japan", code: "+81", flag: "https://flagcdn.com/w40/jp.png" },
    { name: "China", code: "+86", flag: "https://flagcdn.com/w40/cn.png" },
    { name: "Italy", code: "+39", flag: "https://flagcdn.com/w40/it.png" },
    { name: "Spain", code: "+34", flag: "https://flagcdn.com/w40/es.png" },
    { name: "Netherlands", code: "+31", flag: "https://flagcdn.com/w40/nl.png" },
    { name: "Switzerland", code: "+41", flag: "https://flagcdn.com/w40/ch.png" },
    { name: "Saudi Arabia", code: "+966", flag: "https://flagcdn.com/w40/sa.png" },
    { name: "South Africa", code: "+27", flag: "https://flagcdn.com/w40/za.png" },
    { name: "Brazil", code: "+55", flag: "https://flagcdn.com/w40/br.png" },
    { name: "Mexico", code: "+52", flag: "https://flagcdn.com/w40/mx.png" },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const dropdownRef = useRef(null);

  // 3. Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
                }}
                >

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


            <div className="bm-right-column">
              {activeStep !== 4 && (
                <FadeIn delay={0.2}>
                  <div className="bm-right-content">

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

                    <div>
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

                      <h3 className="bm-trusted-heading">
                        India's Most Trusted Digital Agency
                      </h3>
                      {
                        activeStep === 1 && (
                          <div className="bm-form-fields">

                            <div className="bm-form-row">
                              <div className="bm-form-group">
                                <input type="text" placeholder="Name" className="bm-form-input" />
                              </div>
                              <div className="bm-form-group">
                                <input type="text" placeholder="Company Name" className="bm-form-input" />
                              </div>
                            </div>

                            <div className="bm-form-row">
                              <div className="bm-form-group">
                                <input type="text" placeholder="Designation" className="bm-form-input" />
                              </div>

                              <div className="bm-form-group bm-phone-group" ref={dropdownRef}>
                                <div
                                  className="bm-country-selector"
                                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                  <div className="bm-flag-container">
                                    <Image
                                      src={selectedCountry.flag}
                                      alt={selectedCountry.name}
                                      width={24}
                                      height={16}
                                      className="bm-flag-icon"
                                    />
                                  </div>
                                  <span className="bm-code-text">{selectedCountry.code}</span>
                                  <span className={`bm-arrow-icon ${isDropdownOpen ? 'open' : ''}`}>▾</span>
                                </div>

                                {/* Dropdown List */}
                                {isDropdownOpen && (
                                  <div className="bm-country-dropdown-list">
                                    {countries.map((country, idx) => (
                                      <div
                                        key={idx}
                                        className="bm-country-option"
                                        onClick={() => {
                                          setSelectedCountry(country);
                                          setIsDropdownOpen(false);
                                        }}
                                      >
                                        <img src={typeof country.flag === 'string' ? country.flag : country.flag.src} alt="" width="20" />
                                        {/* <span className="bm-option-name">{country.name}</span> */}
                                        <span className="bm-option-code">{country.code}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                <input type="tel" placeholder="Phone Number" className="bm-form-input" />
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
                              {/* <button className="bm-get-started-btn"
                                onClick={() => { setActiveStep(2) }}
                              >
                                <span className="bm-btn-icon">
                                  <Image
                                    src={arrowIcon}
                                    alt="arrow"
                                    width={16}
                                    height={16}
                                  />
                                </span>
                                Get Started
                              </button> */}
                               <button
                              className="bm-s2-next-btn"
                              onClick={() => setActiveStep(2)}
                            >
                              <span className="bm-btn-icon">
                                <Image
                                  src={arrowIcon}
                                  alt="arrow"
                                  width={18}
                                  height={18}
                                />
                              </span>  Get Started
                            </button>
                            </div>

                          </div>
                        )
                      }
                      {activeStep === 2 && (
                        <div className="bm-s2-step-container">
                          {/* Industry Selection */}
                          <div className="bm-s2-form-group">
                            <label className="bm-s2-label">Which Industry Do You Belong To?</label>
                            <div className="bm-s2-select-wrapper">
                              <select className="bm-s2-input bm-s2-select">
                                <option value="">Information Technology / SaaS</option>
                                <option value="ecommerce">E-commerce</option>
                                <option value="healthcare">Healthcare</option>
                                <option value="education">Education</option>
                                <option value="realestate">Real Estate</option>
                              </select>
                              <span className="bm-s2-select-arrow">▾</span>
                            </div>
                          </div>

                          {/* Requirement Textarea */}
                          <div className="bm-s2-form-group">
                            <label className="bm-s2-label">Share Your Detailed Requirement</label>
                            <textarea
                              className="bm-s2-textarea"
                              placeholder="This helps us prepare a more relevant growth strategy before the call."
                            ></textarea>
                          </div>

                          {/* The Black Info Bar from Screenshot */}
                          <div className="bm-s2-info-bar">
                            <span className="bm-s2-info-label">Submit now</span>
                            <div className="bm-s2-info-divider"></div>
                            <div className="bm-s2-info-content">
                              <span className="bm-s2-phone-icon">
                                <Image
                                  src={contact}
                                  alt="contact"
                                  width={12} // Slightly smaller for better padding inside the circle
                                  height={12}
                                />
                              </span>
                              <p>You'll receive a call from our growth expert within 24 hours.</p>
                            </div>
                          </div>

                          {/* Bottom Navigation Row */}
                          <div className="bm-s2-nav-footer">
                            <button
                              className="bm-s2-prev-btn"
                              onClick={() => setActiveStep(1)}
                            >
                              {/* <span className="bm-s2-chevron-left"> 
                              </span>  */}
                              <span className="bm-btn-icon">
                                <Image
                                  src={leftIcon}
                                  alt="arrow"
                                  width={18}
                                  height={18}
                                />
                              </span>
                              Previous
                            </button>

                            <button
                              className="bm-s2-next-btn"
                              onClick={() => setActiveStep(3)}
                            >
                              <span className="bm-btn-icon">
                                <Image
                                  src={arrowIcon}
                                  alt="arrow"
                                  width={18}
                                  height={18}
                                />
                              </span> Proceed To Final Step
                            </button>
                          </div>
                        </div>
                      )}
                      {activeStep === 3 && (
                        <div className="bm-final-step">
                          <p className="bm-step-hint">Help us! <strong>Reach you at the right time</strong>, in the way you prefer</p>

                          {/* Section 1: Connection Time (Date Tabs) */}
                          <h3 className="bm-section-heading">When can we connect?</h3>
                          <div className="bm-date-selector">
                            <div className="bm-date-tab active ">You Missed<br />Yesterday</div>
                            <div className="bm-date-tab ">Today</div>
                            <div className="bm-date-tab">Tomorrow</div>
                            <div className="bm-date-tab">Choose a Date</div>
                          </div>

                          {/* Section 2: Project Timeline */}
                          <h3 className="bm-section-heading">When Would You Like To Start The Project?</h3>
                          <div className="bm-options-grid">
                            {["Immediately", "Within 7 Days", "Within 15 Days", "Within 30 Days", "Just Exploring", "Need Consultation"].map((item) => (
                              <label key={item} className="bm-custom-radio">
                                <input type="radio" name="timeline" value={item} defaultChecked={item === "Immediately"} />
                                <span className="bm-radio-circle"></span>
                                <span className="bm-radio-label">{item}</span>
                              </label>
                            ))}
                          </div>

                          {/* Section 3: Contact Method */}
                          <h3 className="bm-section-heading">Preferred Mode of Contact?</h3>
                          <div className="bm-options-grid bm-grid-3">
                            {["Phone Call", "WhatsApp", "Google Meet"].map((mode) => (
                              <label key={mode} className="bm-custom-radio">
                                <input type="radio" name="contactMode" value={mode} defaultChecked={mode === "Phone Call"} />
                                <span className="bm-radio-circle"></span>
                                <span className="bm-radio-label">{mode}</span>
                              </label>
                            ))}
                          </div>

                          {/* The Info Bar & Buttons from your previous step (kept for consistency) */}
                          <div className="bm-s2-info-bar light">
                            <span className="bm-s2-info-label">Submit now</span>
                            <div className="bm-s2-info-divider"></div>
                            <div className="bm-s2-info-content">
                              <span className="bm-s2-phone-icon dark">
                                <Image
                                  src={contact}
                                  alt="contact"
                                  width={12}
                                  height={12}
                                />
                              </span>
                              <p>You'll receive a call from our growth expert within 24 hours.</p>
                            </div>
                          </div>

                          <div className="bm-s2-nav-footer">
                            <button
                              className="bm-s2-prev-btn"
                              onClick={() => setActiveStep(2)}
                            >

                              <span className="bm-btn-icon">
                                <Image
                                  src={leftIcon}
                                  alt="arrow"
                                  width={18}
                                  height={18}
                                />
                              </span>
                              Previous
                            </button>


                            <button
                              className="bm-s2-next-btn"
                              onClick={() => setActiveStep(4)}
                            >
                              <span className="bm-btn-icon">
                                <Image
                                  src={arrowIcon}
                                  alt="arrow"
                                  width={18}
                                  height={18}
                                />
                              </span>Begin My Growth Journey
                            </button>
                          </div>
                        </div>
                      )}

                    </div>


                  </div>
                </FadeIn>
              )}

              {activeStep === 4 && (
                <div className="bm-right-content-bm-s4">
                  <div className="bm-s4-card">
                    {/* Success Header */}
                    <div className="bm-s4-header">
                      <span className="bm-s4-check-icon">✓</span>
                      <h1 className="bm-s4-thank">Thank <span className="bm-s4-gray">You!</span></h1>
                    </div>

                    {/* Connection Text */}
                    <div className="bm-s4-connection-box">
                      <h2 className="bm-s4-expert-text">
                        Our Growth Expert <span className="bm-s4-gray">Will Connect</span>
                      </h2>
                      <h2 className="bm-s4-expert-text">
                        With You Within <span className="bm-s4-bold">24 Hours.</span>
                      </h2>
                    </div>

                    <div className="bm-s4-gift-content">
                      <h3 className="bm-s4-gift-title">We Have A Gift For You</h3>

                      <button
                        className="bm-s2-next-btn m-auto"
                        onClick={() => setActiveStep(4)}
                      >
                        <span className="bm-btn-icon">
                          <Image
                            src={arrowIcon}
                            alt="arrow"
                            width={18}
                            height={18}
                          />
                        </span> Download Your Growth Plan
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};