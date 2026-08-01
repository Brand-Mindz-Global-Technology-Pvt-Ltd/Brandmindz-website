"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiCheck, FiX } from "react-icons/fi";
import brandVisual from "../../assets/contact/group5.webp";
import clientAvatars from "../../assets/contact/frame789.webp";
import "../../style/header/book-call-modal.css";

const testimonials = [
  {
    quote:
      "Brand Mindz did an excellent job promoting our event. We achieved 140% growth in footfalls, which exceeded our expectations.",
    name: "Mrs. Aarthi Dayashankar",
    role: "Co-Founder",
  },
  {
    quote:
      "The Brand Mindz team’s efforts were truly outstanding. They clearly understand client needs and ensure complete satisfaction.",
    name: "Ms. Akshaya Sivaraj",
    role: "Co-Founder",
  },
  {
    quote:
      "We are extremely satisfied with Brand Mindz for their outstanding work on our new website. Highly recommended for top-notch web development services.",
    name: "Mr. Vasu Karthi",
    role: "Founder",
  },
  {
    quote:
      "The website designed by Brand Mindz is very close to my heart. It truly reflects our quality and vision.",
    name: "Ms. Menaga",
    role: "Founder",
  },
  {
    quote:
      "Perfect brand creators. They turned my dream into reality. I can assure Brand Mindz stays in everyone’s mind once you work with them.",
    name: "Mr. Kannan",
    role: "Founder",
  },
];

const services = [
  "Lead Generation / Performance Marketing",
  "Website Design & Development",
  "App Development",
  "Branding & Creative",
  "E-commerce Listing (Amazon, Flipkart, Meesho, etc.)",
  "SEO & Content Marketing",
  "Social Media Management",
  "Complete Growth Package",
];

const industries = [
  "Information Technology / SaaS",
  "Digital Marketing / Advertising",
  "E-commerce",
  "Retail",
  "Manufacturing",
  "FMCG",
  "Healthcare",
  "Hospitals & Clinics",
  "Pharmaceuticals",
  "Education / EdTech",
  "Training & Coaching",
  "Real Estate",
  "Construction",
  "Architecture & Interior Design",
  "Finance",
  "FinTech",
  "Banking",
  "Insurance",
  "Legal Services",
  "Logistics & Supply Chain",
  "Transportation",
  "Travel & Tourism",
  "Hospitality (Hotels / Resorts)",
  "Food & Beverage",
  "Restaurants & Cafes",
  "Cloud Kitchens",
  "Agriculture",
  "AgriTech",
  "Food Processing",
  "Fashion & Apparel",
  "Jewellery",
  "Beauty & Cosmetics",
  "Wellness & Fitness",
  "Sports & Fitness Centres",
  "Media & Entertainment",
  "Events & Exhibitions",
  "Film & Production",
  "Printing & Publishing",
  "NGOs & Trusts",
  "Government / PSU",
  "Startups",
  "Professional Services",
  "Consulting",
  "HR & Recruitment",
  "Staffing",
  "Telecommunications",
  "Electronics",
  "Electrical & Automation",
  "Energy & Renewables",
  "Automobile",
  "EV & Mobility",
  "Other",
];

const connectTimes = [
  "Today",
  "Tomorrow",
  "In 2–3 working days",
  "Next week",
  "I’ll schedule later",
];

const startTimelines = [
  "Immediately",
  "Within 7 days",
  "Within 15 days",
  "Within 30 days",
  "Just exploring / planning",
];

const communicationTypes = ["Phone Call", "WhatsApp", "Google Meet / Zoom", "Email"];

type BookCallModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormState = {
  name: string;
  companyName: string;
  designation: string;
  phone: string;
  email: string;
  services: string[];
  industry: string;
  requirement: string;
  connectTime: string;
  startTimeline: string;
  communicationTypes: string[];
};

const initialForm: FormState = {
  name: "",
  companyName: "",
  designation: "",
  phone: "",
  email: "",
  services: [],
  industry: "",
  requirement: "",
  connectTime: "Tomorrow",
  startTimeline: "",
  communicationTypes: ["Phone Call", "WhatsApp"],
};

export default function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const [step, setStep] = useState(1);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const interval = window.setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % testimonials.length);
    }, 5500);
    return () => window.clearInterval(interval);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setErrors({});
      setIsComplete(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const industrySuggestions = useMemo(() => {
    const query = form.industry.trim().toLowerCase();
    if (!query) return industries.slice(0, 8);
    return industries
      .filter((industry) => industry.toLowerCase().includes(query))
      .slice(0, 8);
  }, [form.industry]);

  if (!isOpen) return null;

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: "" }));
  };

  const toggleArrayValue = (
    key: "services" | "communicationTypes",
    value: string,
  ) => {
    const currentValues = form[key];
    updateField(
      key,
      currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value],
    );
  };

  const validateStep = () => {
    const nextErrors: Record<string, string> = {};

    if (step === 1) {
      if (!form.name.trim()) nextErrors.name = "Name is required.";
      if (!form.companyName.trim()) nextErrors.companyName = "Company name is required.";
      if (!form.designation.trim()) nextErrors.designation = "Designation is required.";
      if (!form.phone.trim()) nextErrors.phone = "Contact number is required.";
      if (!form.email.trim()) nextErrors.email = "Email ID is required.";
      else if (!/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = "Enter a valid email ID.";
    }

    if (step === 2) {
      if (!form.services.length) nextErrors.services = "Select at least one service.";
      if (!form.industry.trim()) nextErrors.industry = "Industry is required.";
    }

    if (step === 3) {
      if (!form.connectTime) nextErrors.connectTime = "Select a preferred time.";
      if (!form.startTimeline) nextErrors.startTimeline = "Select a project timeline.";
      if (!form.communicationTypes.length) {
        nextErrors.communicationTypes = "Select at least one communication method.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goNext = () => {
    if (validateStep()) setStep((current) => Math.min(current + 1, 3));
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateStep()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    setIsSubmitting(false);
    setIsComplete(true);
  };

  const activeTestimonial = testimonials[testimonialIndex];

  return (
    <div
      className="book-call-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-call-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="book-call-modal__panel">
        <button
          type="button"
          className="book-call-modal__close"
          onClick={onClose}
          aria-label="Close book a call form"
        >
          <FiX />
        </button>

        <aside className="book-call-modal__trust-panel">
          <div className="book-call-modal__visual" aria-hidden="true">
            <Image src={brandVisual} alt="" priority />
            <span>Strategy-led growth</span>
          </div>

          <div className="book-call-modal__testimonial" aria-live="polite">
            <div className="book-call-modal__stars" aria-label="5 star rating">
              ★★★★★
            </div>
            <blockquote>
              “
              {activeTestimonial.quote.split("140%").map((part, index, parts) => (
                <span key={`${testimonialIndex}-${index}`}>
                  {part}
                  {index < parts.length - 1 && <strong>140%</strong>}
                </span>
              ))}
              ”
            </blockquote>
            <p>
              <strong>— {activeTestimonial.name}</strong>
              <span>{activeTestimonial.role}</span>
            </p>
            <div className="book-call-modal__testimonial-dots" aria-hidden="true">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={index === testimonialIndex ? "active" : ""}
                />
              ))}
            </div>
          </div>

          <div className="book-call-modal__trust-stack">
            <strong>★★★★★ <span>4.9 Google Rating</span></strong>
            <p>Worked with 300+ brands across India &amp; abroad</p>
            <small>
              We work best with organizations that value structure, transparency,
              and long-term thinking.
            </small>
          </div>
        </aside>

        <section className="book-call-modal__form-panel">
          {!isComplete ? (
            <form onSubmit={submitForm}>
              <div className="book-call-modal__progress">
                {[1, 2, 3].map((item, index) => (
                  <div className="book-call-modal__progress-part" key={item}>
                    <div
                      className={`book-call-modal__progress-circle ${
                        item <= step ? "active" : ""
                      }`}
                    >
                      {item < step ? <FiCheck /> : item}
                    </div>
                    {index < 2 && (
                      <span
                        className={`book-call-modal__progress-line ${
                          item < step ? "active" : ""
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {step === 1 && (
                <div className="book-call-modal__step">
                  <div className="book-call-modal__clients-row">
                    <Image src={clientAvatars} alt="" aria-hidden />
                    <p>
                      Join the list of <strong>300+ Successful Projects</strong>
                    </p>
                  </div>
                  <h2 id="book-call-title">India’s Most Trusted Digital Agency</h2>

                  <div className="book-call-modal__field-grid">
                    <label>
                      <span>Name*</span>
                      <input
                        autoFocus
                        placeholder="Name"
                        value={form.name}
                        onChange={(event) => updateField("name", event.target.value)}
                      />
                      {errors.name && <small>{errors.name}</small>}
                    </label>
                    <label>
                      <span>Company Name*</span>
                      <input
                        placeholder="Company Name"
                        value={form.companyName}
                        onChange={(event) => updateField("companyName", event.target.value)}
                      />
                      {errors.companyName && <small>{errors.companyName}</small>}
                    </label>
                    <label>
                      <span>Designation*</span>
                      <input
                        placeholder="Designation"
                        value={form.designation}
                        onChange={(event) => updateField("designation", event.target.value)}
                      />
                      {errors.designation && <small>{errors.designation}</small>}
                    </label>
                    <label>
                      <span>Contact Number*</span>
                      <div className="book-call-modal__phone">
                        <span>🇮🇳 +91</span>
                        <input
                          inputMode="tel"
                          placeholder="Phone Number"
                          value={form.phone}
                          onChange={(event) => updateField("phone", event.target.value)}
                        />
                      </div>
                      {errors.phone && <small>{errors.phone}</small>}
                    </label>
                    <label className="book-call-modal__field-wide">
                      <span>Email ID*</span>
                      <input
                        type="email"
                        placeholder="Email ID"
                        value={form.email}
                        onChange={(event) => updateField("email", event.target.value)}
                      />
                      {errors.email && <small>{errors.email}</small>}
                    </label>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="book-call-modal__step">
                  <p className="book-call-modal__eyebrow">Requirement details</p>
                  <h2 id="book-call-title">Tell us how we can help you grow</h2>

                  <fieldset>
                    <legend>
                      How do you want Brand Mindz to help you?*
                      <span>Multiple selections allowed</span>
                    </legend>
                    <div className="book-call-modal__choices two-column">
                      {services.map((service) => (
                        <label key={service} className={form.services.includes(service) ? "selected" : ""}>
                          <input
                            type="checkbox"
                            checked={form.services.includes(service)}
                            onChange={() => toggleArrayValue("services", service)}
                          />
                          <span><FiCheck /></span>
                          {service}
                        </label>
                      ))}
                    </div>
                    {errors.services && <small className="book-call-modal__error">{errors.services}</small>}
                  </fieldset>

                  <label className="book-call-modal__industry">
                    <span>Industry*</span>
                    <input
                      list="book-call-industries"
                      placeholder="Start typing your industry"
                      value={form.industry}
                      onChange={(event) => updateField("industry", event.target.value)}
                    />
                    <datalist id="book-call-industries">
                      {industrySuggestions.map((industry) => (
                        <option key={industry} value={industry} />
                      ))}
                    </datalist>
                    {errors.industry && <small>{errors.industry}</small>}
                  </label>

                  <label>
                    <span>Share your detailed requirement</span>
                    <textarea
                      rows={3}
                      placeholder="Share your detailed requirement"
                      value={form.requirement}
                      onChange={(event) => updateField("requirement", event.target.value)}
                    />
                    <em>This helps us prepare a more relevant growth strategy before the call.</em>
                  </label>
                  <p className="book-call-modal__reassurance">
                    You’ll receive a call from our growth expert within 24 hours.
                  </p>
                </div>
              )}

              {step === 3 && (
                <div className="book-call-modal__step">
                  <p className="book-call-modal__eyebrow">Connect &amp; confirm</p>
                  <h2 id="book-call-title">Schedule your preferred connection</h2>
                  <p className="book-call-modal__subtext">
                    Help us reach you at the right time, in the way you prefer.
                  </p>

                  <fieldset>
                    <legend>Preferred time to connect*</legend>
                    <div className="book-call-modal__segmented">
                      {connectTimes.map((time) => (
                        <label key={time} className={form.connectTime === time ? "selected" : ""}>
                          <input
                            type="radio"
                            name="connect-time"
                            checked={form.connectTime === time}
                            onChange={() => updateField("connectTime", time)}
                          />
                          {time}
                        </label>
                      ))}
                    </div>
                    {errors.connectTime && <small className="book-call-modal__error">{errors.connectTime}</small>}
                  </fieldset>

                  <fieldset>
                    <legend>Expected project start timeline*</legend>
                    <div className="book-call-modal__segmented">
                      {startTimelines.map((timeline) => (
                        <label key={timeline} className={form.startTimeline === timeline ? "selected" : ""}>
                          <input
                            type="radio"
                            name="start-timeline"
                            checked={form.startTimeline === timeline}
                            onChange={() => updateField("startTimeline", timeline)}
                          />
                          {timeline}
                        </label>
                      ))}
                    </div>
                    {errors.startTimeline && <small className="book-call-modal__error">{errors.startTimeline}</small>}
                  </fieldset>

                  <fieldset>
                    <legend>
                      How would you like us to connect?*
                      <span>Multiple selections allowed</span>
                    </legend>
                    <div className="book-call-modal__choices communication">
                      {communicationTypes.map((type) => (
                        <label key={type} className={form.communicationTypes.includes(type) ? "selected" : ""}>
                          <input
                            type="checkbox"
                            checked={form.communicationTypes.includes(type)}
                            onChange={() => toggleArrayValue("communicationTypes", type)}
                          />
                          <span><FiCheck /></span>
                          {type}
                        </label>
                      ))}
                    </div>
                    {errors.communicationTypes && (
                      <small className="book-call-modal__error">{errors.communicationTypes}</small>
                    )}
                  </fieldset>
                </div>
              )}

              <div className="book-call-modal__footer">
                <p>We respect your privacy. No spam. One strategy call only.</p>
                <div>
                  {step > 1 && (
                    <button type="button" className="secondary" onClick={() => setStep((current) => current - 1)}>
                      <FiArrowLeft /> Previous
                    </button>
                  )}
                  {step < 3 ? (
                    <button type="button" className="primary" onClick={goNext}>
                      {step === 1 ? "Get Started" : "Proceed to Final Step"} <FiArrowRight />
                    </button>
                  ) : (
                    <button type="submit" className="primary" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting your request…" : "Submit Request"}
                      {!isSubmitting && <FiArrowRight />}
                    </button>
                  )}
                </div>
              </div>
            </form>
          ) : (
            <div className="book-call-modal__success">
              <span><FiCheck /></span>
              <p className="book-call-modal__eyebrow">Request received</p>
              <h2 id="book-call-title">Thank you!</h2>
              <p>Our growth expert will connect with you within 24 hours.</p>
              <div>
                <a
                  href="https://wa.me/919080677945"
                  target="_blank"
                  rel="noreferrer"
                  className="primary"
                >
                  WhatsApp Us Now
                </a>
                <Link href="/contact" className="secondary" onClick={onClose}>
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
