"use client";

import React, { useState, useMemo } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface TermItem {
  term: string;
  definition: string;
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
    { term: "Employee Engagement", definition: "The emotional commitment an employee has to their organization and its core business objectives." },
    { term: "Employee Relations", definition: "The HR effort to manage and maintain positive, constructive relationships between employers and staff." },
    { term: "Employer Brand", definition: "An organization's reputation and popularity as an employer, and its value proposition to job seekers." }
  ],
  F: [
    { term: "Factor Comparison", definition: "A systematic method of job evaluation that determines the relative value of jobs by comparing them component by component." },
    { term: "Factory Act", definition: "A set of labor laws governing the working conditions, health, and safety of workers in factory environments." },
    { term: "Fair Labor Standards Act (FLSA)", definition: "A federal law establishing minimum wage, overtime pay eligibility, recordkeeping, and child labor standards." },
    { term: "FIFO (First In First Out)", definition: "An inventory valuation method where the first items placed in inventory are assumed to be sold first." },
    { term: "Financial Incentives", definition: "Monetary rewards offered to employees to motivate higher performance or achievement of specific milestones." },
    { term: "Financial Year", definition: "A 12-month period used by organizations for accounting, budgeting, and financial reporting purposes." },
    { term: "Flat Pay", definition: "A fixed salary rate paid to employees regardless of the number of hours worked or individual performance levels." },
    { term: "Flexible Benefits", definition: "A benefits plan allowing employees to choose from a variety of options to customize their compensation package." },
    { term: "Flexible Benefits Plan", definition: "A formal program that lets staff allocate pre-tax dollars toward health insurance, savings, or wellness programs." }
  ],
  G: [
    { term: "Gamification", definition: "The integration of game-like mechanics (points, badges, leaderboards) into business processes to increase motivation." },
    { term: "Gender Discrimination", definition: "Unfair treatment of individuals in the workplace based solely on their gender or gender expression." },
    { term: "Gender Identity", definition: "An individual's personal, internal sense of their own gender, which may or may not align with their sex at birth." },
    { term: "Gender Wage Gap", definition: "The statistical difference in average annual earnings between male and female employees in the workforce." },
    { term: "Generation X", definition: "The demographic cohort born between approximately 1965 and 1980, preceding the Millennials." },
    { term: "Generation Y (Millennials)", definition: "The demographic cohort born between approximately 1981 and 1996, known for tech-savviness." },
    { term: "Ghosting", definition: "The practice of suddenly cutting off all communication without explanation, common during recruitment processes." },
    { term: "Goal Cascading", definition: "The process of translating high-level corporate goals down into specific, actionable goals for teams and individuals." },
    { term: "Golden Handcuffs", definition: "Financial incentives offered to key employees to encourage them to remain with the company long-term." }
  ],
  H: [
    { term: "Halo Effect", definition: "A cognitive bias where an overall positive impression of a person influences specific evaluations of their traits." },
    { term: "Harassment", definition: "Unwelcome conduct in the workplace that is based on race, color, religion, sex, age, or disability." },
    { term: "Hard Skills", definition: "Teachable, quantifiable abilities (coding, writing, machine operation) acquired through education and training." },
    { term: "Hay System", definition: "A widely used job evaluation methodology that profiles jobs based on know-how, problem-solving, and accountability." },
    { term: "Headhunter", definition: "An executive recruiter or agency hired to find and recruit highly qualified candidates for specific senior roles." },
    { term: "HIPAA", definition: "Health Insurance Portability and Accountability Act, safeguarding sensitive patient health information in the US." },
    { term: "HSA", definition: "Health Savings Account, a tax-advantaged account created for individuals covered under high-deductible health plans." },
    { term: "Hiring", definition: "The end-to-end operational process of finding, selecting, and appointing new employees to fill vacancies." },
    { term: "Hiring Journey", definition: "The comprehensive end-to-end candidate experience from initial job application to final onboarding." },
    { term: "Hiring Manager", definition: "The specific team lead or manager responsible for selecting the final candidate and overseeing their work." },
    { term: "Hiring Process", definition: "The structured sequence of steps (resume screening, interview rounds, background check) to acquire new talent." }
  ],
  I: [
    { term: "In-House Talent", definition: "Employees who are already working within the organization and can be promoted or reassigned." },
    { term: "In-Basket Technique", definition: "A training method where candidates are presented with a mock business scenario to test prioritizing and decision-making." },
    { term: "In-House Training", definition: "Educational programs developed and delivered by an organization's own experts for its employees." },
    { term: "Informal Inbound Recruiting", definition: "Attracting talent through organic employee advocacy, social media shares, and employer branding." },
    { term: "Incentive Pay", definition: "Performance-based financial compensation paid to employees who exceed predefined targets or standards." },
    { term: "Incentives", definition: "Rewards or stimuli offered to employees to encourage specific actions, behaviors, or productivity levels." },
    { term: "Inclusion", definition: "The organizational effort to ensure all employees are treated fairly, respectfully, and have equal opportunities." },
    { term: "Inclusive Workforce", definition: "A workforce composed of individuals with diverse backgrounds, perspectives, cultures, and capabilities." }
  ],
  J: [
    { term: "Job Analysis", definition: "The systematic study of a job to determine its duties, responsibilities, demands, and qualifications." },
    { term: "Job Board", definition: "An online platform where employers advertise open positions and job seekers search for employment." },
    { term: "Job Classification", definition: "Grouping jobs into categories based on complexity, responsibility levels, and required skillsets." },
    { term: "Job Description", definition: "A formal document summarizing the duties, reporting structures, and key requirements of a job." },
    { term: "Job Dissatisfaction", definition: "An employee's state of unhappiness or discontent with their job duties, environment, or compensation." },
    { term: "Job Enlargement", definition: "Increasing the scope of a job by adding more tasks of similar complexity, preventing monotony." },
    { term: "Job Enrichment", definition: "Adding more meaningful tasks, responsibilities, and autonomy to a job to increase satisfaction." },
    { term: "Job Evaluation", definition: "Determining the relative value and grade of a job in comparison to other jobs within the organization." },
    { term: "Job Hopper", definition: "An employee who frequently changes jobs or employers, spending short intervals at each company." }
  ],
  K: [
    { term: "Kanban", definition: "A visual system for managing work as it moves through a process, using boards to represent work items." },
    { term: "Key Performance Indicators (KPI)", definition: "Quantifiable measures used to evaluate the success of an employee, team, or organization in meeting goals." },
    { term: "Key Result Areas (KRA)", definition: "General areas of outcomes or outputs for which a specific role is fully responsible and accountable." },
    { term: "Knowledge Based Pay", definition: "A compensation system that links employee salary increases directly to the acquisition of new skills." },
    { term: "Knowledge Management", definition: "The conscious process of creating, sharing, using, and managing the knowledge of an organization." },
    { term: "Knowledge Transfer", definition: "The practical sharing of information, skills, or expertise from one part of the organization to another." },
    { term: "KSA", definition: "Knowledge, Skills, and Abilities—the foundational requirements defined for job applicants." }
  ],
  L: [
    { term: "Labor Union", definition: "An organized association of workers formed to protect and further their rights, wages, and working conditions." },
    { term: "Labor Welfare Fund (LWF)", definition: "A statutory fund managed by state authorities to finance welfare facilities and security benefits." },
    { term: "Layoff", definition: "The temporary or permanent suspension of an employee's employment, typically due to business downturns." },
    { term: "Leadership Development", definition: "Structured training programs aimed at expanding the leadership capacities and strategic skills of staff." },
    { term: "Learning And Development (L&D)", definition: "A dedicated HR department focusing on upgrading employee skills, talent, and team training." },
    { term: "Learning Management System (LMS)", definition: "A software application for administering, tracking, and delivering educational courses." }
  ],
  M: [
    { term: "Management By Objectives (MBO)", definition: "A strategic management model that aims to improve organizational performance by clearly defining agreed objectives." },
    { term: "Management Styles", definition: "The distinct methods managers use to direct, organize, plan, and motivate their teams." },
    { term: "Matrix Organization", definition: "An organizational structure where employees report to multiple managers (typically functional and project-based)." },
    { term: "Mentoring", definition: "A professional relationship in which an experienced colleague guides the career growth of a less experienced peer." },
    { term: "Merit Pay", definition: "Performance-related pay increases granted to employees based on their individual appraisal ratings." }
  ],
  N: [
    { term: "National Pension Scheme (NPS)", definition: "A voluntary long-term retirement savings scheme designed to provide social security in India." },
    { term: "Nepotism", definition: "The practice among those with power of favoring relatives or friends, especially by giving them jobs." },
    { term: "Net Pay", definition: "The actual take-home salary received by an employee after all statutory deductions are subtracted." },
    { term: "New Hire Turnover", definition: "The rate at which newly recruited employees leave the company within their first 6 to 12 months." },
    { term: "New Hire Reporting", definition: "A statutory requirement for employers to report newly hired staff to government registries." },
    { term: "Non-Disclosure Agreement (NDA)", definition: "A legally binding contract establishing a confidential relationship to protect sensitive business data." }
  ],
  O: [
    { term: "Objectives", definition: "Specific, measurable, and time-bound targets that individuals or teams aim to achieve." },
    { term: "Objectives And Key Results (OKR)", definition: "A collaborative goal-setting framework used by teams to track outcomes with ambitious goals." },
    { term: "Onboarding", definition: "The systematic process of integrating new employees into the organization and its operational culture." },
    { term: "Offboarding", definition: "The transition process when an employee leaves the company (exit interview, asset collection, deprovisioning)." }
  ],
  P: [
    { term: "Paid Leave", definition: "Time off from work during which the employee continues to receive regular pay (sick leave, holidays)." },
    { term: "Performance Appraisal", definition: "A systematic review and evaluation of an employee's job performance and achievements." },
    { term: "Performance Improvement Plan (PIP)", definition: "A structured plan with clear targets given to underperforming employees to help them meet standards." },
    { term: "Probation Period", definition: "A trial period at the start of employment during which an employee is evaluated before becoming permanent." }
  ],
  Q: [
    { term: "Qualitative Feedback", definition: "Descriptive, non-numerical feedback focusing on behaviors, skills, and leadership traits." },
    { term: "Quantitative Targets", definition: "Measurable, numerical targets (sales volume, revenue generated) set for performance tracking." },
    { term: "Quality of Hire", definition: "An HR metric measuring the value and performance contribution that a new recruit brings to the organization." },
    { term: "Quality of Work Life (QWL)", definition: "The overall quality of an employee's working life, including stress levels and work-life balance." }
  ],
  R: [
    { term: "Recruitment", definition: "The process of identifying, attracting, interviewing, and hiring candidates for open positions." },
    { term: "Resignation", definition: "The formal act of an employee notifying their employer of their intention to leave their job." },
    { term: "Retaining Talent", definition: "The policies and strategic practices organizations use to prevent valuable employees from leaving." }
  ],
  S: [
    { term: "Salaried Employee", definition: "An employee who is paid a fixed salary rather than hourly wages, exempt from overtime tracking." },
    { term: "Skill Assessment", definition: "A test or evaluation designed to measure a candidate's practical abilities or technical knowledge." },
    { term: "Succession Planning", definition: "The strategic process of identifying and developing internal talent to fill key leadership roles in the future." }
  ],
  T: [
    { term: "Talent Acquisition", definition: "The strategic process of attracting, finding, and hiring highly qualified professionals to meet business needs." },
    { term: "Time Off", definition: "Approved periods during which an employee is excused from work, either paid or unpaid." },
    { term: "Training Needs Analysis", definition: "A systematic process of identifying the training and development needs of employees to improve performance." }
  ],
  U: [
    { term: "Unfair Dismissal", definition: "The termination of an employee's employment in a harsh, unjust, or unreasonable manner." },
    { term: "Unskilled Labor", definition: "Work segments that require minimal training, education, or specialized abilities to execute successfully." },
    { term: "Upskilling", definition: "The process of providing employees with additional training to improve their skills and advance their careers." }
  ],
  V: [
    { term: "Vacancy", definition: "An unoccupied position or job within an organization that is actively being recruited for." },
    { term: "Virtual Recruiting", definition: "The use of digital technologies (video interviews, online assessments) to attract and hire candidates." },
    { term: "Voluntary Attrion", definition: "When employees choose to leave the organization on their own accord (resignation, retirement)." }
  ],
  W: [
    { term: "Wage Theft", definition: "The illegal practice of employers denying employees the wages, overtime pay, or benefits they are legally owed." },
    { term: "Work-Life Balance", definition: "The healthy division of time and energy between professional work duties and personal life activities." },
    { term: "Workplace Wellness", definition: "Programs and policies designed to support the physical, mental, and emotional well-being of employees." }
  ],
  X: [
    { term: "Xenon-level Talents", definition: "Extremely rare, highly specialized experts in state-of-the-art tech or research fields." },
    { term: "Xerox Mentality", definition: "An organizational defect where managers seek exact copies of past ideas rather than encouraging innovation." }
  ],
  Y: [
    { term: "Yield Ratio", definition: "A recruitment metric showing the percentage of candidates who advance from one stage of the hiring process to the next." },
    { term: "Young Professionals", definition: "Early-career employees who show high potential for development and leadership within the organization." }
  ],
  Z: [
    { term: "Zero-Hours Contract", definition: "An employment agreement where the employer is not obliged to provide any minimum working hours." },
    { term: "Zero-Tolerance Policy", definition: "An absolute policy where specific misconduct (harassment, theft) results in immediate dismissal." }
  ]
};

interface ResourcesDirectoryProps {
  searchQuery: string;
  activeLetter: string;
}

export const ResourcesDirectory: React.FC<ResourcesDirectoryProps> = ({
  searchQuery,
  activeLetter
}) => {
  const [expandedColumns, setExpandedColumns] = useState<Record<string, boolean>>({});

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

  const toggleExpandColumn = (letter: string) => {
    setExpandedColumns((prev) => ({
      ...prev,
      [letter]: !prev[letter]
    }));
  };

  return (
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
                          title={item.definition}
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
  );
};
