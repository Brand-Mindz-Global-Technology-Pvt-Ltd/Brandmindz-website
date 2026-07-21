"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

const primaryServices = ["Digital Marketing", "Web Development", "Branding", "Growth Consulting", "Full-Service Agency", "Other"];
const volumes = ["1–3", "4–8", "9–15", "15+"];
const markets = ["India", "USA", "UK", "Middle East", "Asia-Pacific", "Multi-Market"];
const outsourceServices = ["Paid Advertising", "SEO Execution", "Website Development", "App Development", "Branding Systems", "Analytics & Reporting"];
const budgets = ["Below ₹1L", "₹1L–₹5L", "₹5L–₹10L", "₹10L+"];
const ndaOptions = ["Yes", "No", "To be discussed"];
const timelines = ["Immediately", "Within 30 days", "Within 90 days", "Exploring options"];

export default function PartnershipForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [serviceError, setServiceError] = useState("");

  const toggleService = (service: string) => {
    setServiceError("");
    setSelectedServices((current) =>
      current.includes(service) ? current.filter((item) => item !== service) : [...current, service]
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedServices.length === 0) {
      setServiceError("Select at least one service you want to outsource.");
      return;
    }
    const form = new FormData(event.currentTarget);
    const values = [
      `Agency Name: ${form.get("agencyName") ?? ""}`,
      `Agency Website: ${form.get("website") ?? ""}`,
      `Primary Service: ${form.get("primaryService") ?? ""}`,
      `Monthly Project Volume: ${form.get("volume") ?? ""}`,
      `Target Market: ${form.get("market") ?? ""}`,
      `Services to Outsource: ${selectedServices.join(", ") || "Not selected"}`,
      `Monthly Budget: ${form.get("budget") ?? ""}`,
      `NDA Requirement: ${form.get("nda") ?? ""}`,
      `Expected Start: ${form.get("timeline") ?? ""}`,
      `Partnership Expectations: ${form.get("expectations") ?? ""}`,
    ];
    window.location.href = `mailto:business@brandmindz.com?subject=${encodeURIComponent("Agency Partnership Request")}&body=${encodeURIComponent(values.join("\n"))}`;
  };

  return (
    <form className="pw-form" onSubmit={handleSubmit}>
      <div className="pw-form-grid">
        <label className="pw-field">
          <span>Agency Name <b>*</b></span>
          <input name="agencyName" type="text" placeholder="Your agency name" required />
        </label>
        <label className="pw-field">
          <span>Agency Website URL <b>*</b></span>
          <input name="website" type="url" placeholder="https://youragency.com" required />
        </label>
        <label className="pw-field">
          <span>Primary Services You Offer</span>
          <select name="primaryService" defaultValue="" required>
            <option value="" disabled>Select primary service</option>
            {primaryServices.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="pw-field">
          <span>Average Monthly Project Volume</span>
          <select name="volume" defaultValue="" required>
            <option value="" disabled>Select project volume</option>
            {volumes.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="pw-field">
          <span>Target Market</span>
          <select name="market" defaultValue="" required>
            <option value="" disabled>Select target market</option>
            {markets.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="pw-field">
          <span>Monthly Outsourcing Budget Range</span>
          <select name="budget" defaultValue="" required>
            <option value="" disabled>Select monthly budget</option>
            {budgets.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="pw-field">
          <span>NDA Requirement</span>
          <select name="nda" defaultValue="" required>
            <option value="" disabled>Select NDA requirement</option>
            {ndaOptions.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="pw-field">
          <span>Expected Start Timeline</span>
          <select name="timeline" defaultValue="" required>
            <option value="" disabled>Select timeline</option>
            {timelines.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <fieldset className="pw-service-fieldset">
        <legend>Services You Want to Outsource</legend>
        <div className="pw-checkbox-grid">
          {outsourceServices.map((service) => {
            const selected = selectedServices.includes(service);
            return (
              <label className={`pw-checkbox-card ${selected ? "selected" : ""}`} key={service}>
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => toggleService(service)}
                />
                <span className="pw-checkbox-icon">{selected ? <Check size={14} strokeWidth={3} /> : null}</span>
                {service}
              </label>
            );
          })}
        </div>
        {serviceError ? <p className="pw-field-error" role="alert">{serviceError}</p> : null}
      </fieldset>

      <label className="pw-field pw-field-full">
        <span>Describe Your Partnership Expectations</span>
        <textarea name="expectations" rows={5} placeholder="Tell us about your delivery needs, expected outcomes, and partnership model..." required />
      </label>

      <label className="pw-confirmation">
        <input type="checkbox" required />
        <span className="pw-confirmation-box"><Check size={14} strokeWidth={3} /></span>
        <span>We understand Brand Mindz operates under structured governance and confidentiality policies.</span>
      </label>

      <div className="pw-form-footer">
        <div className="pw-form-security"><ShieldCheck size={20} /> Your information is used only to evaluate partnership fit.</div>
        <button className="pw-submit" type="submit">Prepare Partnership Request <ArrowRight size={18} /></button>
      </div>
    </form>
  );
}


