"use client";

import React, { useState, useMemo } from "react";
import { FiSearch, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface TermItem {
  term: string;
  definition: string; // for searchability and interactive tooltips/modals if needed
}

const GLOSSARY_DATA: Record<string, TermItem[]> = {
  "#": [
    { term: "360 Degree Feedback", definition: "A system or process in which employees receive confidential, anonymous feedback from the people who work around them." },
    { term: "4DX", definition: "The 4 Disciplines of Execution (Focus, Leverage, Engagement, Accountability) framework for corporate execution." },
    { term: "7th Pay Matrix", definition: "A structured pay-scale system used in the Indian public sector to determine employee salary grades." },
    { term: "80/20 Rule (Pareto Principle)", definition: "A principle stating that roughly 80% of consequences come from 20% of causes in business and operations." },
    { term: "9 Box Grid", definition: "An HR tool used to evaluate an organization's talent pool based on performance and potential levels." }
  ],
  A: [
    { term: "Abilene Paradox", definition: "A paradox where a group of people collectively decide on a course of action that is counter to the preferences of many in the group." },
    { term: "Absconding", definition: "The act of an employee leaving their job suddenly and without notice, authorization, or formal resignation." },
    { term: "Absence Management", definition: "The policies and procedures that an organization uses to handle, reduce, and monitor employee absenteeism." },
    { term: "Absent With Out Leave (AWOL)", definition: "A serious HR status when an employee is absent from duty without prior approval or valid authorization." },
    { term: "Absenteeism", definition: "An employee's habitual lack of presence at work, which goes beyond reasonable or excused boundaries." },
    { term: "Absolute ratings", definition: "A performance appraisal system where employees are evaluated against fixed standards rather than compared to peers." },
    { term: "Accrued Leave", definition: "Paid time off that an employee earns over time but has not yet used, often subject to carryover rules." },
    { term: "Acqui-Hiring", definition: "The practice of acquiring a company primarily to recruit its talented employees, rather than for its products." },
    { term: "Active Candidates", definition: "Job seekers who are actively searching for new employment opportunities and submitting applications." },
    // Extra items to showcase "Show All" expander
    { term: "Adaptive Learning", definition: "An educational method that uses algorithms to orchestrate the interaction with the learner." },
    { term: "Applicant Tracking System (ATS)", definition: "Software that manages the recruiting and hiring process, including job postings and resumes." },
    { term: "Appraisal Interview", definition: "A formal discussion between employee and manager to review job performance and future goals." },
    { term: "Attrition Rate", definition: "The rate at which employees leave an organization over a given period of time." }
  ],
  B: [
    { term: "Baby Boomers", definition: "The demographic cohort following the Silent Generation, born approximately between 1946 and 1964." },
    { term: "Backfill", definition: "The process of hiring a replacement employee to fill a position left vacant by a promotion, transfer, or departure." },
    { term: "Background screening", definition: "The verification process of an applicant's commercial, criminal, and financial background prior to hiring." },
    { term: "Backup Server", definition: "A secondary server designed to take over operations if the primary server fails, preventing data loss." },
    { term: "Balance Of Payments (BOP)", definition: "A statement of all transactions made between entities in one country and the rest of the world." },
    { term: "Balance Score Card (BSC)", definition: "A strategic management performance metric used to identify and improve various internal business functions." },
    { term: "Bank Statement", definition: "A formal document issued by a bank summarizing all account transactions over a specific period." },
    { term: "Basic Salary", definition: "The fundamental rate of pay for an employee before any additional bonuses, allowances, or deductions are applied." },
    { term: "Before-Tax Deduction", definition: "Any amount subtracted from gross salary before income tax is calculated, reducing taxable income." },
    // Extra items to showcase "Show All" expander
    { term: "Behavioral Anchored Scale (BARS)", definition: "An appraisal scale that measures employee performance against specific behavioral examples." },
    { term: "Benchmarking", definition: "Comparing business processes and performance metrics to industry bests or best practices." },
    { term: "Bereavement Leave", definition: "Paid or unpaid time off granted to an employee following the death of a close family member." },
    { term: "Bonus Structure", definition: "The formal framework defining how additional performance-based monetary awards are calculated." }
  ],
  C: [
    { term: "C Level Executive", definition: "High-ranking senior executives responsible for making agency-wide strategic decisions (e.g., CEO, COO)." },
    { term: "C-Level Jobs", definition: "Executive positions that represent the highest tier of leadership within a corporate hierarchy." },
    { term: "Calibration", definition: "An HR process that ensures different managers evaluate employee performances against a unified standard." },
    { term: "Campus Hiring", definition: "Recruiting events and hiring processes carried out directly at academic universities to hire fresh graduates." },
    { term: "Candidate", definition: "A job seeker who has applied for a vacant position and is undergoing review, testing, or interviewing." },
    { term: "Candidate Call Back Rate", definition: "The percentage of job applicants who are contacted by recruiters for initial interviews." },
    { term: "Candidate Centric Recruiting", definition: "A recruiting methodology that prioritizes candidate experience and needs throughout the hiring lifecycle." },
    { term: "Candidate Engagement", definition: "The continuous communication and relationship-building process between recruiters and active candidates." },
    { term: "Candidate Experience", definition: "The comprehensive perception of a job seeker regarding an employer's hiring process and touchpoints." },
    // Extra items to showcase "Show All" expander
    { term: "Career Pathing", definition: "The process of mapping out a clear roadmap for employee advancement and developmental steps." },
    { term: "Chief Talent Officer (CTO)", definition: "An executive responsible for managing and developing human capital strategies within a firm." },
    { term: "Coaching & Mentoring", definition: "Professional developmental relationships aimed at enhancing skillsets and career trajectories." }
  ],
  D: [
    { term: "Data Breach", definition: "An operational security incident where sensitive, protected, or confidential data is copied or viewed without authorization." },
    { term: "Data Driven Recruitment", definition: "The use of talent analytics and data insights to make objective, successful hiring decisions." },
    { term: "Database Management", definition: "The systematic storage, retrieval, updating, and administration of organized corporate records." },
    { term: "Dearness Allowance (DA)", definition: "A cost-of-living adjustment allowance paid to public sector employees in India to mitigate inflation." },
    { term: "Decentralization", definition: "The transfer of decision-making authority and operational control from central management to lower tiers." },
    { term: "Deductions", definition: "Specific amounts subtracted from gross salary (taxes, insurance, retirement) to arrive at net salary." },
    { term: "Defamation", definition: "An act of communication that causes damage to a person or business's reputation via false statements." },
    { term: "Deferred Compensation", definition: "A portion of an employee's compensation set aside to be paid at a later date, such as retirement." },
    { term: "Delayering", definition: "The corporate restructuring process of removing layers of middle management to improve communication." },
    // Extra items to showcase "Show All" expander
    { term: "Demotion", definition: "A reduction in job rank, responsibility level, or pay grade due to performance or structural changes." },
    { term: "Development Plan", definition: "An actionable roadmap designed to improve employee skills, knowledge, and career capabilities." }
  ],
  E: [
    { term: "E-Recruitment", definition: "The web-based recruitment process of using internet job boards, social media, and software to hire talent." },
    { term: "Earnings", definition: "The total monetary compensation received by an employee, including basic salary, bonuses, and overtime." },
    { term: "EDLI", definition: "Employees' Deposit Linked Insurance Scheme, a life insurance benefit provided by the EPFO in India." },
    { term: "EFQM", definition: "The European Foundation for Quality Management excellence model used to structure organizational improvement." },
    { term: "Electronic Challan cum Return (ECR)", definition: "A monthly online return filed by Indian employers summarizing PF contributions." },
    { term: "Electronic Signature", definition: "A legally binding digital signature used to execute employment contracts and formal policy files." },
    { term: "Emotional Intelligence", definition: "The capacity to be aware of, control, and express one's emotions, and handle interpersonal relations." },
    { term: "Employee Assessment", definition: "A structured evaluation of an employee's competencies, strengths, weaknesses, and potential." },
    { term: "Employee Assistance Program (EAP)", definition: "A work-based intervention program designed to assist employees in resolving personal problems." },
    // Extra items to showcase "Show All" expander
    { term: "Employee Engagement", definition: "The emotional commitment an employee has to their organization and its core business objectives." },
    { term: "Employee Relations", definition: "The HR effort to manage and maintain positive, constructive relationships between employers and staff." },
    { term: "Employer Brand", definition: "An organization's reputation and popularity as an employer, and its value proposition to job seekers." }
  ]
};

export const Glossary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState<string>("ALL");
  const [expandedColumns, setExpandedColumns] = useState<Record<string, boolean>>({});

  const alphabet = useMemo(() => {
    // Generate custom sorted alphabet array, keeping '#' at the front
    const sortedKeys = Object.keys(GLOSSARY_DATA).sort((a, b) => {
      if (a === "#") return -1;
      if (b === "#") return 1;
      return a.localeCompare(b);
    });
    return ["ALL", ...sortedKeys];
  }, []);

  const filteredData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const result: Record<string, TermItem[]> = {};

    Object.entries(GLOSSARY_DATA).forEach(([letter, items]) => {
      // Letter filter logic
      if (activeLetter !== "ALL" && letter !== activeLetter) {
        return;
      }

      // Search query filtering
      const matchingItems = items.filter(
        (item) =>
          item.term.toLowerCase().includes(query) ||
          item.definition.toLowerCase().includes(query)
      );

      if (matchingItems.length > 0) {
        result[letter] = matchingItems;
      }
    });

    return result;
  }, [searchQuery, activeLetter]);

  const isEmpty = useMemo(() => {
    return Object.keys(filteredData).length === 0;
  }, [filteredData]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  const toggleExpandColumn = (letter: string) => {
    setExpandedColumns((prev) => ({
      ...prev,
      [letter]: !prev[letter],
    }));
  };

  return (
    <div>
      {/* Search Input Bar */}
      <div className="glossary-search-wrapper">
        <input
          type="text"
          className="glossary-search-bar"
          placeholder="Search glossary terms..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery ? (
          <button
            className="glossary-search-btn"
            onClick={clearSearch}
            aria-label="Clear search"
          >
            <FiX size={20} />
          </button>
        ) : (
          <button className="glossary-search-btn" aria-label="Search">
            <FiSearch size={20} />
          </button>
        )}
      </div>

      {/* Alphabet scroll navigator */}
      <div className="alphabet-navigation-container">
        <div className="alphabet-navigation">
          {alphabet.map((letter) => {
            const isLetterActive = activeLetter === letter;
            return (
              <React.Fragment key={letter}>
                {letter === "A" && <span className="alphabet-divider" />}
                <button
                  onClick={() => setActiveLetter(letter)}
                  className={`alphabet-letter ${isLetterActive ? "active" : ""}`}
                >
                  {letter}
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Glossary Multi-column Directory */}
      <section className="glossary-directory-section">
        <AnimatePresence mode="popLayout">
          {isEmpty ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glossary-empty-state"
            >
              <span className="glossary-empty-icon">🔍</span>
              <h3 className="glossary-empty-title">No Matches Found</h3>
              <p className="glossary-empty-desc">
                We couldn't find any terms matching "{searchQuery}" under the selected filter.
                Try adjusting your search queries or resetting filters.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="glossary-directory-grid"
            >
              {Object.entries(filteredData)
                .sort(([a], [b]) => {
                  if (a === "#") return -1;
                  if (b === "#") return 1;
                  return a.localeCompare(b);
                })
                .map(([letter, items]) => {
                  const isExpanded = !!expandedColumns[letter];
                  const hasMore = items.length > 9;
                  const displayItems = hasMore && !isExpanded ? items.slice(0, 9) : items;

                  return (
                    <div key={letter} className="glossary-column">
                      <h2 className="glossary-column-header">{letter}</h2>
                      
                      <ul className="glossary-column-list">
                        {displayItems.map((item) => (
                          <li
                            key={item.term}
                            className="glossary-term-item"
                            title={item.definition} // Native accessibility tooltip showing the exact definition
                          >
                            {item.term}
                          </li>
                        ))}
                      </ul>

                      {hasMore && (
                        <button
                          onClick={() => toggleExpandColumn(letter)}
                          className="glossary-show-all"
                        >
                          {isExpanded ? (
                            <>
                              Show Less <FiChevronUp />
                            </>
                          ) : (
                            <>
                              Show All <FiChevronDown />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  );
                })}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};
