"use client";

import React, { useState, useRef, useEffect } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/aboutus/aboutus.css";
import "../../style/contactus/contactus.css";

// Import your assets
import bgPattern from "../../assets/contact/Group (3).png";
import clientLogo1 from "../../assets/contact/Frame 7 89.png";
import arrowIcon from "../../assets/contact/right.png";
import leftIcon from "../../assets/contact/left.png";
import contactIcon from "../../assets/contact/Vector (1).png";
import whitecontact from "../../assets/contact/Vector White.png";
import bgImage from "../../assets/contact/Group5.png";

interface CountryItem {
  name: string;
  code: string;
  flag: string;
}

interface FormDataState {
  name: string;
  companyName: string;
  designation: string;
  phone: string;
  email: string;
  location: string;
  industry: string;
  requirement: string;
  timeline: string;
  contactMode: string;
  help: string;
  otherRequirement?: string;
  connectionDate?: string;
}

export const ResourcesForm = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const countries: CountryItem[] = [
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
    { name: "Mexico", code: "+52", flag: "https://flagcdn.com/w40/mx.png" }
  ];

  const [selectedCountry, setSelectedCountry] = useState<CountryItem>(countries[0]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    "Lead Generation",
    "Website Development",
    "",
    "App Development",
    "SEO & Content Marketing",
    "",
    "E-Commerce Listing",
    "Branding & Creative",
    "Others"
  ];

  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    companyName: "",
    designation: "",
    phone: "",
    email: "",
    location: "",
    industry: "",
    requirement: "",
    timeline: "Immediately",
    contactMode: "Phone Call",
    help: "",
    otherRequirement: "",
    connectionDate: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleService = (service: string) => {
    if (service === "") return;
    let currentHelp = formData.help || "";
    let servicesArray = currentHelp.split(", ").filter((s) => s !== "");

    if (servicesArray.includes(service)) {
      servicesArray = servicesArray.filter((s) => s !== service);
    } else {
      servicesArray.push(service);
    }

    const updatedHelp = servicesArray.join(", ");
    setFormData({ ...formData, help: updatedHelp });

    if (errors.services) {
      const { services: _, ...rest } = errors;
      setErrors(rest);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      const { [name]: _, ...rest } = errors;
      setErrors(rest);
    }
  };

  const validateStep = (step: number) => {
    let newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.companyName.trim()) newErrors.companyName = "Company Name is required";
      if (!formData.designation.trim()) newErrors.designation = "Designation is required";
      if (!formData.location.trim()) newErrors.location = "Location is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";

      if (!formData.help || formData.help.trim() === "") {
        newErrors.services = "Please select at least one service";
      }

      if (formData.help.includes("Others")) {
        if (!formData.otherRequirement || !formData.otherRequirement.trim()) {
          newErrors.otherRequirement = "Please specify your requirement";
        }
      }

      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
    }

    if (step === 2) {
      if (!formData.industry) newErrors.industry = "Please select your industry";
      if (!formData.requirement.trim()) {
        newErrors.requirement = "Please share your requirements";
      } else if (formData.requirement.length < 10) {
        newErrors.requirement = "Requirement should be at least 10 characters";
      }
    }

    if (step === 3) {
      if (!formData.timeline) newErrors.timeline = "Please select a project timeline";
      if (!formData.contactMode) newErrors.contactMode = "Please select contact mode";
      if (!formData.connectionDate) newErrors.connectionDate = "Please choose a date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (currentStep: number) => {
    if (validateStep(currentStep)) {
      setActiveStep(currentStep + 1);
    }
  };

  const clientLogos = [
    { id: 1, src: clientLogo1, alt: "Client 1" }
  ];

  return (
    <section className="bm-getstarted-section" style={{ borderTop: "1px solid #f0f0f0" }}>
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

      <div className="bm-getstarted-container-fluid">
        <div className="bm-getstarted-content-container">
          <div className="bm-getstarted-grid">
            <FadeIn delay={0.1}>
              {/* LEFT COLUMN */}
              <div
                className="bm-left-column border"
                style={{
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#ffffff"
                }}
              >
                <div className="bm-left-content">
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
            </FadeIn>

            {/* RIGHT COLUMN */}
            <div className="bm-right-column">
              {activeStep !== 4 && (
                <FadeIn delay={0.2}>
                  <div className="bm-right-content">
                    <div className="bm-progress-steps">
                      <div className={`bm-step-item ${activeStep === 1 ? "bm-step-active" : ""} ${activeStep > 1 ? "bm-step-completed" : ""}`}>
                        <div className="bm-step-circle">1</div>
                      </div>
                      <div className="bm-step-line"></div>
                      <div className={`bm-step-item ${activeStep === 2 ? "bm-step-active" : ""} ${activeStep > 2 ? "bm-step-completed" : ""}`}>
                        <div className="bm-step-circle">2</div>
                      </div>
                      <div className="bm-step-line"></div>
                      <div className={`bm-step-item ${activeStep === 3 ? "bm-step-active" : ""}`}>
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
                                width={30}
                                height={30}
                                className="bm-client-img"
                              />
                            </div>
                          ))}
                        </div>
                        <p className="bm-clients-text text-grey">
                          Join the list of <span className="text-black">300+ Successful Clients</span>
                        </p>
                      </div>

                      <h3 className="bm-trusted-heading">
                        India's Most Trusted Digital Agency
                      </h3>

                      {activeStep === 1 && (
                        <div className="bm-form-fields">
                          {/* Row 1: Name & Company */}
                          <div className="bm-form-row">
                            <div className="bm-form-group">
                              <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                className={`bm-form-input ${errors.name ? "error-border" : ""}`}
                                onChange={handleInputChange}
                              />
                              {errors.name && <span className="error-text">{errors.name}</span>}
                            </div>
                            <div className="bm-form-group">
                              <input
                                type="text"
                                name="companyName"
                                placeholder="Company Name"
                                value={formData.companyName}
                                className={`bm-form-input ${errors.companyName ? "error-border" : ""}`}
                                onChange={handleInputChange}
                              />
                              {errors.companyName && <span className="error-text">{errors.companyName}</span>}
                            </div>
                          </div>

                          {/* Row 2: Designation & Phone */}
                          <div className="bm-form-row">
                            <div className="bm-form-group">
                              <input
                                type="text"
                                name="designation"
                                placeholder="Designation"
                                value={formData.designation}
                                className={`bm-form-input ${errors.designation ? "error-border" : ""}`}
                                onChange={handleInputChange}
                              />
                              {errors.designation && <span className="error-text">{errors.designation}</span>}
                            </div>

                            <div className="bm-form-group bm-phone-group" ref={dropdownRef}>
                              <div
                                className="bm-country-selector"
                                style={{ height: errors.designation ? "65%" : "100%" }}
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                              >
                                <div className="bm-flag-container">
                                  <img
                                    src={selectedCountry.flag}
                                    alt="flag"
                                    width={24}
                                    height={16}
                                  />
                                </div>
                                <span className="bm-code-text">{selectedCountry.code}</span>
                                <span className={`bm-arrow-icon ${isDropdownOpen ? "open" : ""}`}>▾</span>
                              </div>

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
                                      <img src={country.flag} alt="" width="20" />
                                      <span className="bm-option-code">{country.code}</span>
                                    </div>
                                  ))}
                                </div>
                              )}

                              <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                className={`bm-form-input-Phone ${errors.phone ? "error-border" : ""}`}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>

                          {/* Row 3: Email & Location */}
                          <div className="bm-form-row">
                            <div className="bm-form-group">
                              <input
                                type="email"
                                name="email"
                                placeholder="Email ID"
                                value={formData.email}
                                className={`bm-form-input ${errors.email ? "error-border" : ""}`}
                                onChange={handleInputChange}
                              />
                              {errors.email && <span className="error-text">{errors.email}</span>}
                            </div>
                            <div className="bm-form-group">
                              <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={formData.location}
                                className={`bm-form-input ${errors.location ? "error-border" : ""}`}
                                onChange={handleInputChange}
                              />
                              {errors.location && <span className="error-text">{errors.location}</span>}
                            </div>
                          </div>

                          {/* Services help segment */}
                          <div className="bm-services-section">
                            <p className="bm-services-title">How do you want Brand Mindz to help you?</p>

                            <div className="bm-services-grid">
                              {services.map((service, index) => {
                                if (service === "") {
                                  return <div key={`empty-${index}`} className="hidden md:block" />;
                                }
                                const isSelected = formData.help.split(", ").includes(service);
                                return (
                                  <div
                                    key={index}
                                    className={`bm-service-item-rounded ${isSelected ? "bm-service-selected-rounded" : ""}`}
                                    onClick={() => toggleService(service)}
                                  >
                                    <span className="bm-service-checkbox-rounded">
                                      {isSelected && (
                                        <svg width="18" height="18" viewBox="0 0 12 12" fill="none">
                                          <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                      )}
                                    </span>
                                    <span className="bm-service-label-rounded">{service}</span>
                                  </div>
                                );
                              })}
                            </div>
                            {errors.services && <p className="error-text text-center mt-2">{errors.services}</p>}

                            {formData.help.includes("Others") && (
                              <div className="bm-form-group mt-4">
                                <input
                                  type="text"
                                  name="otherRequirement"
                                  placeholder="Please specify how we can help..."
                                  className={`bm-form-input ${errors.otherRequirement ? "error-border" : ""}`}
                                  value={formData.otherRequirement || ""}
                                  onChange={handleInputChange}
                                />
                                {errors.otherRequirement && <p className="error-text">{errors.otherRequirement}</p>}
                              </div>
                            )}
                          </div>

                          <p className="bm-privacy-text-center">
                            We respect your privacy. No spam. One strategy call only.
                          </p>

                          <div className="bm-buttons-row-center">
                            <button
                              className="bm-s2-prev-btn"
                              type="button"
                              onClick={() => alert("Check back later whenever you are ready!")}
                            >
                              <span className="bm-btn-icon">
                                <Image src={leftIcon} alt="prev" width={18} height={18} />
                              </span>
                              Check later
                            </button>

                            <button
                              className="bm-s2-next-btn"
                              type="button"
                              onClick={() => handleNext(1)}
                            >
                              <span className="bm-btn-icon">
                                <Image src={arrowIcon} alt="next" width={18} height={18} />
                              </span>
                              Get Started
                            </button>
                          </div>
                        </div>
                      )}

                      {activeStep === 2 && (
                        <div className="bm-s2-step-container">
                          <div className="bm-s2-form-group">
                            <label className="bm-s2-label">Which Industry Do You Belong To?</label>
                            <div className={`bm-s2-select-wrapper ${errors.industry ? "error-border" : ""}`}>
                              <select
                                name="industry"
                                className="bm-s2-input bm-s2-select"
                                value={formData.industry}
                                onChange={handleInputChange}
                              >
                                <option value="">Select Industry</option>
                                <option value="it">Information Technology / SaaS</option>
                                <option value="ecommerce">E-commerce</option>
                                <option value="healthcare">Healthcare</option>
                                <option value="education">Education</option>
                                <option value="realestate">Real Estate</option>
                              </select>
                              <span className="bm-s2-select-arrow">▾</span>
                            </div>
                            {errors.industry && <span className="error-text">{errors.industry}</span>}
                          </div>

                          <div className="bm-s2-form-group">
                            <label className="bm-s2-label">Share Your Detailed Requirement</label>
                            <textarea
                              name="requirement"
                              className={`bm-s2-textarea ${errors.requirement ? "error-border" : ""}`}
                              placeholder="This helps us prepare a more relevant growth strategy before the call."
                              value={formData.requirement}
                              onChange={handleInputChange}
                            ></textarea>
                            {errors.requirement && <span className="error-text">{errors.requirement}</span>}
                          </div>

                          <div className="bm-s2-info-bar">
                            <span className="bm-s2-info-label">Submit now</span>
                            <div className="bm-s2-info-divider"></div>
                            <div className="bm-s2-info-content">
                              <span className="bm-s2-phone-icon">
                                <Image src={contactIcon} alt="contact" width={12} height={12} />
                              </span>
                              <p>You'll receive a call from our growth expert within 24 hours.</p>
                            </div>
                          </div>

                          <div className="bm-s2-nav-footer">
                            <button
                              className="bm-s2-prev-btn"
                              onClick={() => setActiveStep(1)}
                            >
                              <span className="bm-btn-icon">
                                <Image src={leftIcon} alt="arrow" width={18} height={18} />
                              </span>
                              Previous
                            </button>

                            <button
                              className="bm-s2-next-btn"
                              onClick={() => handleNext(2)}
                            >
                              <span className="bm-btn-icon">
                                <Image src={arrowIcon} alt="arrow" width={18} height={18} />
                              </span>{" "}
                              Proceed To Final Step
                            </button>
                          </div>
                        </div>
                      )}

                      {activeStep === 3 && (
                        <div className="bm-final-step">
                          <p className="bm-step-hint">
                            Help us! <strong>Reach you at the right time</strong>, in the way you prefer
                          </p>

                          <div className="bm-connect-row">
                            <h3 className="bm-section-heading">When can we connect?</h3>

                            {showCalendar && (
                              <input
                                type="date"
                                className="bm-date-input"
                                onChange={(e) => {
                                  const rawDate = e.target.value;
                                  const formatted = new Date(rawDate).toLocaleDateString("en-GB");
                                  setFormData({
                                    ...formData,
                                    connectionDate: formatted
                                  });
                                }}
                              />
                            )}
                          </div>

                          <div className="bm-date-selector">
                            {["Yesterday", "Today", "Tomorrow", "Choose a Date"].map((date) => (
                              <div
                                key={date}
                                className={`bm-date-tab ${formData.connectionDate === date ? "active" : ""} ${date === "Yesterday" ? "bm-disabled" : ""}`}
                                onClick={() => {
                                  if (date === "Choose a Date") {
                                    setShowCalendar(true);
                                    setFormData({ ...formData, connectionDate: date });
                                  } else if (date !== "Yesterday") {
                                    setFormData({ ...formData, connectionDate: date });
                                    setShowCalendar(false);
                                  }
                                }}
                              >
                                {date === "Yesterday" ? <>You Missed<br />Yesterday</> : date}
                              </div>
                            ))}
                          </div>
                          {errors.connectionDate && <span className="error-text">{errors.connectionDate}</span>}

                          <h3 className="bm-section-heading">When Would You Like To Start The Project?</h3>
                          <div className="bm-options-grid">
                            {["Immediately", "Within 7 Days", "Within 15 Days", "Within 30 Days", "Just Exploring", "Need Consultation"].map((item) => (
                              <label key={item} className="bm-custom-radio">
                                <input
                                  type="radio"
                                  name="timeline"
                                  value={item}
                                  checked={formData.timeline === item}
                                  onChange={handleInputChange}
                                />
                                <span className="bm-radio-circle"></span>
                                <span className="bm-radio-label">{item}</span>
                              </label>
                            ))}
                          </div>

                          <h3 className="bm-section-heading">Preferred Mode of Contact?</h3>
                          <div className="bm-options-grid bm-grid-3">
                            {["Phone Call", "WhatsApp", "Google Meet"].map((mode) => (
                              <label key={mode} className="bm-custom-radio">
                                <input
                                  type="radio"
                                  name="contactMode"
                                  value={mode}
                                  checked={formData.contactMode === mode}
                                  onChange={handleInputChange}
                                />
                                <span className="bm-radio-circle"></span>
                                <span className="bm-radio-label">{mode}</span>
                              </label>
                            ))}
                          </div>

                          <div className="bm-s2-info-bar light">
                            <span className="bm-s2-info-label">Submit now</span>
                            <div className="bm-s2-info-divider"></div>
                            <div className="bm-s2-info-content">
                              <span className="bm-s2-phone-icon dark">
                                <Image src={whitecontact} alt="contact" width={12} height={12} />
                              </span>
                              <p>You'll receive a call from our growth expert within 24 hours.</p>
                            </div>
                          </div>

                          <div className="bm-s2-nav-footer">
                            <button className="bm-s2-prev-btn" onClick={() => setActiveStep(2)}>
                              <span className="bm-btn-icon">
                                <Image src={leftIcon} alt="arrow" width={18} height={18} />
                              </span>
                              Previous
                            </button>

                            <button className="bm-s2-next-btn" onClick={() => handleNext(3)}>
                              <span className="bm-btn-icon">
                                <Image src={arrowIcon} alt="arrow" width={18} height={18} />
                              </span>
                              Begin My Growth Journey
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
                  <Image
                    src={bgImage.src}
                    alt="Success Pattern"
                    fill
                    priority
                    quality={100}
                    className="bm-client-img-bm-right-conten"
                  />
                  <div className="bm-white-shadow-bottom"></div>

                  <div className="bm-s4-card">
                    <div className="bm-s4-header">
                      <span className="bm-s4-check-icon">✓</span>
                      <h1 className="bm-s4-thank">
                        Thank <span className="bm-s4-gray">You!</span>
                      </h1>
                    </div>

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
                        onClick={() => alert("Your custom brand growth blueprint is downloading...")}
                      >
                        <span className="bm-btn-icon">
                          <Image src={arrowIcon} alt="arrow" width={18} height={18} />
                        </span>
                        Download Your Growth Plan
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
