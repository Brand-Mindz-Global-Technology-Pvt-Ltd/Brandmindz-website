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
import whitecontact from '../../assets/contact/Vector White.png'
import bgImage from '../../assets/contact/Group5.png'

export const GetStartedSection = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [activeStep, setActiveStep] = useState(1);
  const [isCheckLaterDisabled, setIsCheckLaterDisabled] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
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
  const industryDropdownRef = useRef(null);
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const [industrySearchQuery, setIndustrySearchQuery] = useState("");

  const industriesList = [
    { value: "information-technology-saas", label: "Information Technology / SaaS" },
    { value: "digital-marketing-advertising", label: "Digital Marketing / Advertising" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "retail", label: "Retail" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "fmcg", label: "FMCG" },
    { value: "healthcare", label: "Healthcare" },
    { value: "hospitals-clinics", label: "Hospitals & Clinics" },
    { value: "pharmaceuticals", label: "Pharmaceuticals" },
    { value: "education-edtech", label: "Education / EdTech" },
    { value: "training-coaching", label: "Training & Coaching" },
    { value: "real-estate", label: "Real Estate" },
    { value: "construction", label: "Construction" },
    { value: "architecture-interior-design", label: "Architecture & Interior Design" },
    { value: "finance", label: "Finance" },
    { value: "fintech", label: "FinTech" },
    { value: "banking", label: "Banking" },
    { value: "insurance", label: "Insurance" },
    { value: "legal-services", label: "Legal Services" },
    { value: "logistics-supply-chain", label: "Logistics & Supply Chain" },
    { value: "transportation", label: "Transportation" },
    { value: "travel-tourism", label: "Travel & Tourism" },
    { value: "hospitality", label: "Hospitality (Hotels / Resorts)" },
    { value: "food-beverage", label: "Food & Beverage" },
    { value: "restaurants-cafes", label: "Restaurants & Cafes" },
    { value: "cloud-kitchens", label: "Cloud Kitchens" },
    { value: "agriculture", label: "Agriculture" },
    { value: "agritech", label: "AgriTech" },
    { value: "food-processing", label: "Food Processing" },
    { value: "fashion-apparel", label: "Fashion & Apparel" },
    { value: "jewellery", label: "Jewellery" },
    { value: "beauty-cosmetics", label: "Beauty & Cosmetics" },
    { value: "wellness-fitness", label: "Wellness & Fitness" },
    { value: "sports-fitness-centres", label: "Sports & Fitness Centres" },
    { value: "media-entertainment", label: "Media & Entertainment" },
    { value: "events-exhibitions", label: "Events & Exhibitions" },
    { value: "film-production", label: "Film & Production" },
    { value: "printing-publishing", label: "Printing & Publishing" },
    { value: "ngos-trusts", label: "NGOs & Trusts" },
    { value: "government-psu", label: "Government / PSU" },
    { value: "startups", label: "Startups" },
    { value: "professional-services", label: "Professional Services" },
    { value: "consulting", label: "Consulting" },
    { value: "hr-recruitment", label: "HR & Recruitment" },
    { value: "staffing", label: "Staffing" },
    { value: "telecommunications", label: "Telecommunications" },
    { value: "electronics", label: "Electronics" },
    { value: "electrical-automation", label: "Electrical & Automation" },
    { value: "energy-renewables", label: "Energy & Renewables" },
    { value: "automobile", label: "Automobile" },
    { value: "ev-mobility", label: "EV & Mobility" },
    { value: "other", label: "Other" }
  ];

  // 3. Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (industryDropdownRef.current && !industryDropdownRef.current.contains(event.target)) {
        setIsIndustryDropdownOpen(false);
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
    "",
    "Social Media Management",
    "Complete Growth Package",
    "Others"
  ];

  const toggleService = (service) => {
    let currentHelp = formData.help || "";
    let servicesArray = currentHelp.split(', ').filter(s => s !== "");

    if (servicesArray.includes(service)) {
      // Remove if already exists
      servicesArray = servicesArray.filter(s => s !== service);
    } else {
      // Add new service
      servicesArray.push(service);
    }

    const updatedHelp = servicesArray.join(', ');
    setFormData({ ...formData, help: updatedHelp });

    // Error clear panna
    if (errors.services) {
      setErrors({ ...errors, services: '' });
    }
  };
  const handleCheckLater = () => {
    setIsCheckLaterDisabled(true);
  };

  const clientLogos = [
    { id: 1, src: clientLogo1, alt: "Client 1" },
  ];
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    designation: '',
    phone: '',
    email: '',
    location: '',
    industry: '',
    requirement: '',
    timeline: 'Immediately',
    contactMode: [],
    help: "",
    connectionDate: "Tomorrow"
  });


  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'contactMode') {
      // Toggle selection in array
      const newModes = checked
        ? [...formData.contactMode, value]
        : formData.contactMode.filter((m) => m !== value);
      setFormData({ ...formData, contactMode: newModes });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    // Clear error when user types
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateStep = (step) => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.companyName.trim()) newErrors.companyName = "Company Name is required";
      if (!formData.designation.trim()) newErrors.designation = "Designation is required";
      if (!formData.location.trim()) newErrors.location = "Location is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";


      if (!formData.phone.trim()) {
        newErrors.phone = "Phone is required";
      } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
        newErrors.phone = "Enter a valid 10-digit phone number";
      }

      // Help (Services) Validation
      if (!formData.help || formData.help.trim() === "") {
        newErrors.services = "Please select at least one service";
      }

      // If Others is selected, check if they typed something
      if (formData.help.includes("Others")) {
        if (!formData.otherRequirement || !formData.otherRequirement.trim()) {
          newErrors.otherRequirement = "Please specify your requirement";
        }
      }

      // Email Validation
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
    }

    if (step === 2) {
      if (!formData.industry) newErrors.industry = "Please select your industry";
      // if (!formData.requirement.trim()) {
      //   newErrors.requirement = "Please share your requirements";
      // } else if (formData.requirement.length < 10) {
      //   newErrors.requirement = "Requirement should be at least 10 characters";
      // }
    }

    if (step === 3) {
      if (!formData.timeline) newErrors.timeline = "Please select a project timeline";
      if (!formData.contactMode || formData.contactMode.length === 0) newErrors.contactMode = "Please select contact mode";
      if (!formData.connectionDate) newErrors.connectionDate = "Please choose a date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleNext = (nextStep) => {
    if (validateStep(nextStep)) {
      setActiveStep(nextStep + 1);
    }
  };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        industryDropdownRef.current &&
        !industryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsIndustryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbylboHU_WyOf0fvqmnnYLRF54rloqhojNcUxq7R_GIjQtUPIa5VT-cMulNGnrbvKN9K/exec";

  const submitLead = async (leadData) => {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(leadData),
    });

    return await response.json();
  };
  const handleSubmitLead = async () => {
    // Validate Step 3
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    try {
      const payload = {

        name: formData.name,
        companyName: formData.companyName,
        designation: formData.designation,
        phone: `${selectedCountry.code} ${formData.phone}`,
        email: formData.email,
        location: formData.location,
        serviceRequired: formData.help,
        industry: formData.industry,
        detailedRequirement: formData.requirement,
        preferredConnection: formData.connectionDate,
        projectStart: formData.timeline,
        contactMode: formData.contactMode.join(", ")
      };


      const response = await submitLead(payload);

      if (response.success) {
        setActiveStep(4); // Success page
      } else {
        alert(response.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <div className="bm-left-column"

                style={{
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: "#ffffff",
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
                                width={30}
                                height={30}
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
                            {/* Row 1: Name & Company */}
                            <div className="bm-form-row">
                              <div className="bm-form-group">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Name"
                                  value={formData.name}
                                  className={`bm-form-input ${errors.name ? 'error-border' : ''}`}
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
                                  className="bm-form-input"
                                  onChange={handleInputChange}
                                />
                                {errors.companyName && <span className="error-text">{errors.companyName}</span>}

                              </div>
                            </div>

                            <div className="bm-form-row">
                              <div className="bm-form-group">
                                <input
                                  type="text"
                                  name="designation"
                                  placeholder="Designation"
                                  value={formData.designation}
                                  className="bm-form-input"
                                  onChange={handleInputChange}
                                />
                                {errors.designation && <span className="error-text">{errors.designation}</span>}

                              </div>

                              <div className="bm-form-group">
                                <div className="bm-phone-group" ref={dropdownRef}>
                                  <div
                                    className="bm-country-selector"
                                    style={{ height: errors.designation ? "65%" : "100%" }}
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                  >
                                    <div className="bm-flag-container">
                                      <Image
                                        src={selectedCountry.flag}
                                        alt="flag"
                                        width={24}
                                        height={16}
                                      />
                                    </div>
                                    <span className="bm-code-text">{selectedCountry.code}</span>
                                    <span className={`bm-arrow-icon ${isDropdownOpen ? 'open' : ''}`}>▾</span>
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
                                    className={`bm-form-input-Phone ${errors.phone ? 'error-border' : ''}`}
                                    onChange={handleInputChange}
                                  />
                                </div>
                                {errors.phone && <span className="error-text">{errors.phone}</span>}
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
                                  className={`bm-form-input ${errors.email ? 'error-border' : ''}`}
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
                                  className="bm-form-input"
                                  onChange={handleInputChange}
                                />
                                {errors.location && <span className="error-text">{errors.location}</span>}

                              </div>
                            </div>

                            <div className="bm-services-section">
                              <p className="bm-services-title">How do you want Brand Mindz to help you?</p>

                              <div className="bm-services-grid">
                                {services.map((service, index) => {
                                  // formData.help string-la indha service irukka nu check pannuthu
                                  const isSelected = formData.help.split(', ').includes(service);

                                  return (
                                    <div
                                      key={index}
                                      className={`bm-service-item-rounded ${isSelected ? 'bm-service-selected-rounded' : ''}`}
                                      onClick={() => toggleService(service)}
                                    >
                                      {
                                        service !== "" && (
                                          <span className="bm-service-checkbox-rounded">
                                            {isSelected && (
                                              <svg width="18" height="18" viewBox="0 0 12 12" fill="none">
                                                <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                              </svg>
                                            )}
                                          </span>
                                        )
                                      }

                                      <span className="bm-service-label-rounded">{service}</span>
                                    </div>
                                  );
                                })}
                              </div>
                              {errors.services && <p className="error-text text-center">{errors.services}</p>}

                              {/* --- Others Input Logic --- */}
                              {formData.help.includes("Others") && (
                                <div className="bm-form-group mt-4 animate-fade-in">
                                  <input
                                    type="text"
                                    name="otherRequirement" // Custom field for Others
                                    placeholder="Please specify how we can help..."
                                    className={`bm-form-input ${errors.otherRequirement ? 'error-border' : ''}`}
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
                              <button className="bm-s2-prev-btn" type="button">
                                <span className="bm-btn-icon">
                                  <Image src={leftIcon} alt="prev" width={18} height={18} />
                                </span>
                                I will check you later
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
                        )
                      }
                      {activeStep === 2 && (
                        <div className="bm-s2-step-container">
                          <div className="bm-s2-form-group">
                            <label className="bm-s2-label">Which Industry Do You Belong To?</label>
                            <div className={`bm-s2-select-wrapper ${errors.industry ? 'error-border' : ''}`} ref={industryDropdownRef}>
                              <div
                                className="bm-s2-input bm-s2-select"
                                onClick={() => setIsIndustryDropdownOpen(!isIndustryDropdownOpen)}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
                              >
                                <span style={{ color: formData.industry ? '#000' : '#757575' }}>
                                  {formData.industry
                                    ? industriesList.find(i => i.value === formData.industry)?.label || "Select Industry"
                                    : "Select Industry"}
                                </span>
                                <span className={`bm-s2-select-arrow ${isIndustryDropdownOpen ? 'open' : ''}`}>▾</span>
                              </div>

                              {isIndustryDropdownOpen && (
                                <div className="bm-industry-dropdown-list" style={{
                                  position: 'absolute',
                                  top: '100%',
                                  left: 0,
                                  width: '100%',
                                  background: 'white',
                                  border: '1px solid #e5e7eb',
                                  borderRadius: '8px',
                                  marginTop: '4px',
                                  maxHeight: '250px',
                                  overflowY: 'auto',
                                  zIndex: 1000,
                                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                                }}>
                                  <div style={{ padding: '8px', position: 'sticky', top: 0, background: 'white', zIndex: 2, borderBottom: '1px solid #e5e7eb' }}>
                                    <input
                                      type="text"
                                      placeholder="Search industry..."
                                      value={industrySearchQuery}
                                      onChange={(e) => setIndustrySearchQuery(e.target.value)}
                                      style={{
                                        width: '100%',
                                        padding: '8px 12px',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '6px',
                                        outline: 'none',
                                        fontSize: '14px'
                                      }}
                                      onClick={(e) => e.stopPropagation()}
                                    />
                                  </div>
                                  <div style={{ padding: '4px 0' }}>
                                    {industriesList
                                      .filter(ind => ind.label.toLowerCase().includes(industrySearchQuery.toLowerCase()))
                                      .map((ind, idx) => (
                                        <div
                                          key={idx}
                                          onClick={() => {
                                            setFormData({ ...formData, industry: ind.value });
                                            if (errors.industry) setErrors({ ...errors, industry: '' });
                                            setIsIndustryDropdownOpen(false);
                                            setIndustrySearchQuery("");
                                          }}
                                          style={{
                                            padding: '10px 16px',
                                            cursor: 'pointer',
                                            transition: 'background 0.2s',
                                            fontSize: '15px'
                                          }}
                                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        >
                                          {ind.label}
                                        </div>
                                      ))}
                                    {industriesList.filter(ind => ind.label.toLowerCase().includes(industrySearchQuery.toLowerCase())).length === 0 && (
                                      <div style={{ padding: '10px 16px', color: '#6b7280', textAlign: 'center', fontSize: '15px' }}>
                                        No industry found
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                            {errors.industry && <span className="error-text">{errors.industry}</span>}
                          </div>

                          <div className="bm-s2-form-group">
                            <label className="bm-s2-label">Share Your Detailed Requirement</label>
                            <textarea
                              name="requirement"
                              className={`bm-s2-textarea ${errors.requirement ? 'error-border' : ''}`}
                              placeholder="This helps us prepare a more relevant growth strategy before the call."
                              value={formData.requirement}
                              onChange={handleInputChange}
                            ></textarea>
                            {errors.requirement && <span className="error-text">{errors.requirement}</span>}
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
                              onClick={() => handleNext(2)}
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
                                  const rawDate = e.target.value; // yyyy-mm-dd
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
                                className={`bm-date-tab ${formData.connectionDate === date ? "active" : ""} ${date === "Yesterday" ? "bm-disabled" : ""
                                  }`}
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
                            {["Immediately", "Within 7 Days", "Within 15 Days", "Within 30 Days", "Just Exploring", "Just exploring / planning"].map((item) => (
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
                            {["Phone Call", "WhatsApp", "Google Meet", "Email"].map((mode) => (
                              <label key={mode} className="bm-custom-radio">
                                <input
                                  type="checkbox"
                                  name="contactMode"
                                  value={mode}
                                  checked={formData.contactMode.includes(mode)}
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

                            <button
                              className="bm-s2-next-btn"
                              onClick={handleSubmitLead}
                              disabled={isSubmitting}
                            >
                              <span className="bm-btn-icon">
                                <Image src={arrowIcon} alt="arrow" width={18} height={18} />
                              </span>

                              {isSubmitting ? "Submitting..." : "Begin My Growth Journey"}
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
                    alt={bgImage.alt}
                    fill
                    priority
                    quality={100}
                    className="bm-client-img-bm-right-conten"
                  />


                  {/* WHITE SHADOW FADE */}
                  <div className="bm-white-shadow-bottom"></div>

                  <div className="bm-s4-card">
                    {/* Success Header */}
                    <div className="bm-s4-header">
                      <span className="bm-s4-check-icon">✓</span>
                      <h1 className="bm-s4-thank">
                        Thank <span className="bm-s4-gray">You!</span>
                      </h1>
                    </div>

                    {/* Message */}
                    <div className="bm-s4-connection-box">
                      <h2 className="bm-s4-expert-text">
                        Our Growth Expert <span className="bm-s4-gray">Will Connect</span> with you within <span className="bm-s4-bold">24 Hours</span>.
                      </h2>
                    </div>

                    {/* Quick actions */}
                    <div className="bm-s4-quick-actions" style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1rem" }}>
                      <button className="bm-quick-btn" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        {/* Placeholder icon */}
                        <span>📞</span>
                        WhatsApp Us Now
                      </button>
                      <button className="bm-quick-btn" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        {/* Placeholder icon */}
                        <span>📅</span>
                        Book a Strategy Call
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