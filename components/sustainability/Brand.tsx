import React, { useState } from 'react'

import NoPoverty1 from '../../assets/HomeSection/about/nopoverty1.webp'
import Zero2 from '../../assets/HomeSection/about/zero2.webp'
import Good3 from '../../assets/HomeSection/about/good3.webp'
import Quality4 from '../../assets/HomeSection/about/quality4.webp'
import Equallity5 from '../../assets/HomeSection/about/equallity5.webp'
import Clean6 from '../../assets/HomeSection/about/clean6.webp'
import Energy7 from '../../assets/HomeSection/about/energy7.webp'
import Growth8 from '../../assets/HomeSection/about/growth8.webp'
import Infr9 from '../../assets/HomeSection/about/infr9.webp'
import Reduced10 from '../../assets/HomeSection/about/reduced10.webp'
import Communities11 from '../../assets/HomeSection/about/communities11.webp'
import Production12 from '../../assets/HomeSection/about/production12.webp'
import Action13 from '../../assets/HomeSection/about/action13.webp'
import Life14 from '../../assets/HomeSection/about/life14.webp'
import Lifeland15 from '../../assets/HomeSection/about/lifeland15.webp'
import Peace16 from '../../assets/HomeSection/about/peace16.webp'
import Goals17 from '../../assets/HomeSection/about/goals17.webp'
import Image from "next/image";
import "../../style/sustainability/brandsustainability.css";

import { ArrowLeft } from "lucide-react";

const Brandsustainability = () => {
    const [activeTab, setActiveTab] = useState(7);

    const menuItems = [
        {
            id: 7,
            label: "Sustainability",
            type: "sustainability",
            subtitle: "Sustainability",
            title: "Building growth that respects people and the planet",
            desc: "Brand Mindz aligns its CSR and organizational practices with the United Nations Sustainable Development Goals (SDGs).",
            sdgs: [
                {
                    id: 1,
                    title: "No Poverty",
                    tag: "Alignment Type",
                    image: NoPoverty1,
                    description: "Detailed description for SDG 1...",
                    contributions: [
                        "Contribution point 1",
                        "Contribution point 2",
                        "Contribution point 3"
                    ],
                    footerNote: "This alignment is supported by CSR Focus Area..."
                },
                {
                    id: 2,
                    title: "Zero Hunger",
                    tag: "Alignment Type",
                    image: Zero2,
                    description: "Detailed description for SDG 2...",
                    contributions: [
                        "Contribution point 1",
                        "Contribution point 2"
                    ],
                    footerNote: "This alignment is supported by CSR Focus Area..."
                },
                {
                    id: 3,
                    title: "Good Health and Well-being",
                    tag: "Alignment Type",
                    image: Good3,
                    description: "Detailed description for SDG 3...",
                    contributions: [
                        "Contribution point 1",
                        "Contribution point 2",
                        "Contribution point 3"
                    ],
                    footerNote: "This alignment is supported by CSR Focus Area..."
                },
               {
    id: 4,
    title: "Quality Education",
    tag: "CSR Focus Area",
    image: Quality4,
    description: `At Brand Mindz, we believe education can open doors to better opportunities. Learning is not only about classrooms or certificates. Having access to useful knowledge, digital tools, and practical skills can help people become more confident in their work and make better decisions about their future.

As a digital marketing and technology-focused company, we understand the value of learning in a changing digital world. New tools, platforms, and technologies are introduced every day, so continuous learning has become an important part of professional growth. At Brand Mindz, we encourage our team to learn new skills, share their knowledge with others, and keep improving their understanding of digital marketing, technology, design, and business.

We also see digital literacy as an important part of education today. Knowing how to use online platforms, find reliable information, communicate effectively, and make responsible use of digital tools can be valuable for students, professionals, and people starting their own businesses. Through knowledge sharing and practical learning, we aim to make useful digital knowledge easier to understand and apply.

Our focus is on creating a workplace where people have the opportunity to learn and grow. We encourage employees to develop both their professional and personal skills and believe that sharing experience within a team can be just as valuable as formal training. As Brand Mindz grows, we hope to support more learning opportunities and initiatives that help people build skills for the future.`,
    contributions: [],
    subtitle: "Quality Education",
    footerNote: "CSR Focus Area: Education, Digital Literacy & Skill Development"
},
                {
                    id: 5,
                    title: "Leadership knows No Gender",
                    tag: "Strong and Direct Alignment",
                    image: Equallity5,
                    description: `Brand Mindz aligns its CSR and organizational
                    practices with the United Nations Sustainable Development Goals
                    (SDGs), especially SDG 5: Gender Equality. The company promotes
                     women empowerment, supports women-led enterprises and women entrepreneurs,
                     and ensures equal opportunity employment. Through inclusive growth, diversity
                      and inclusion, and responsible business practices, Brand Mindz contributes to
                      sustainable development and long-term social impact.
                       <br/>
                       <br/>
                       Key contributions include a strong focus on empowering women
                        through entrepreneurship and skill development initiatives
                        that enhance their employability and economic independence.
                         These programs are designed to equip women with practical
                         skills, leadership abilities, and business knowledge, enabling them
                         to build sustainable livelihoods and actively participate in economic growth.
                       <br/>
                       <br/>
                         In addition, digital literacy and financial awareness programs
                          are implemented to improve access to technology and financial systems,
                           helping women gain confidence in using digital tools, managing personal finances,
                          and understanding savings, credit, and investment opportunities.
                       <br/>
                          <br/>
                          This strategic alignment is directly supported by CSR Focus Area 5.1 –
                           Women Empowerment, reinforcing the commitment to advancing gender
                           equality, economic inclusion, and long-term social impact.`,
                    contributions: [],
                    subtitle: "Gender Equality",
                    footerNote: ""
                },
                {
                    id: 6,
                    title: "Clean Water and Sanitation",
                    tag: "Alignment Type",
                    image: Clean6,
                    description: "Detailed description for SDG 6...",
                    contributions: [
                        "Contribution point 1",
                        "Contribution point 2",
                        "Contribution point 3"
                    ],
                    footerNote: "This alignment is supported by CSR Focus Area..."
                },
                // {
                //     id: 6,
                //     title: "Clean Water and Sanitation",
                //     tag: "Alignment Type",
                //     image: Clean6,
                //     description: "Clean water initiatives...",
                //     contributions: ["Water projects", "Sanitation programs"],
                //     footerNote: "Supported by CSR Focus Area..."
                // },

                {
                    id: 7,
                    title: "Affordable and Clean Energy",
                    tag: "Alignment Type",
                    image: Energy7,
                    description: "Energy initiatives...",
                    contributions: ["Solar awareness"],
                    footerNote: "Supported by CSR Focus Area..."
                },

               {
    id: 8,
    title: "Decent Work and Economic Growth",
    tag: "CSR Focus Area",
    image: Growth8,
    description: `At Brand Mindz, we believe that a growing business should also create better opportunities for the people who work with it. A good workplace is not only about completing work on time. It is also about respect, learning, fair opportunities, and giving people the space to develop their skills. We want our team to feel that their work matters and that they have room to grow.

The digital industry changes quickly, so learning new skills is a regular part of the job. We encourage our team to keep learning and improving their knowledge in areas such as SEO, digital marketing, web development, branding, and design. Sharing ideas and learning from one another also helps our team handle new challenges with more confidence.

We believe that people do better work when they are given the right support and a positive working environment. Clear responsibilities, teamwork, open communication, and respect are important parts of the way we work. We also encourage team members to take ownership of their work and make use of opportunities to improve their professional skills.

As Brand Mindz continues to grow, we want that growth to benefit both the business and our people. Our goal is to create meaningful work opportunities, support skill development, and build a workplace where people can develop their careers over time.`,
    contributions: [],
    footerNote: "CSR Focus Area: Decent Work, Skill Development & Sustainable Economic Growth",
    subtitle: "Decent Work & Economic Growth",
},

                {
                    id: 9,
                    title: "Industry, Innovation and Infrastructure",
                    tag: "Alignment Type",
                    image: Infr9,
                    description: "Innovation initiatives...",
                    contributions: ["Tech innovation"],
                    footerNote: "Supported by CSR Focus Area..."
                },

                {
                    id: 10,
                    title: "Reduced Inequalities",
                    tag: "Alignment Type",
                    image: Reduced10,
                    description: `At Brand Mindz, we believe everyone should get a fair chance to learn, work, and build their career. People have different backgrounds, experiences, and skills, and we believe these differences should be respected. What matters to us is giving people the opportunity to contribute, improve their skills, and move forward in their professional journey.

Technology can also help create more opportunities when it is made easier to understand and use. Digital skills can help people look for jobs, start a business, reach customers, and learn new things without being limited by where they live. As a digital-focused company, we see value in sharing our knowledge and making digital information easier to understand.

Inside our workplace, we encourage people to communicate openly and share their ideas. Everyone should feel comfortable being part of discussions and working with others. We believe that listening to different opinions and experiences helps create a better working environment and allows teams to learn from each other.

For us, reducing inequalities is about the small things we do every day — treating people fairly, respecting different perspectives, and giving people opportunities to learn and grow. As Brand Mindz continues to develop, we will continue to support an inclusive workplace where people have a fair opportunity to participate and progress.`,
                    contributions: [],
                    footerNote: "CSR Focus Area: Inclusion, Equal Opportunity & Reduced Inequalities",
                    subtitle: "Reduced Inequalities",

                },

                {
                    id: 11,
                    title: "Sustainable Cities and Communities",
                    tag: "Alignment Type",
                    image: Communities11,
                    description: "Community initiatives...",
                    contributions: ["Smart cities"],
                    footerNote: "Supported by CSR Focus Area..."
                },

                {
                    id: 12,
                    title: "Responsible Consumption and Production",
                    tag: "Alignment Type",
                    image: Production12,
                    description: "Sustainable production...",
                    contributions: ["Waste reduction"],
                    footerNote: "Supported by CSR Focus Area..."
                },

                {
    id: 13,
    title: "Climate Action",
    tag: "CSR Focus Area",
    image: Action13,
    description: `At Brand Mindz, we believe that protecting the environment is something businesses can contribute to through everyday choices. Since much of our work is digital, we try to reduce unnecessary use of paper, printing, and other physical resources wherever possible. Simple changes in the way we work can help us operate more responsibly.

We make use of digital communication and online collaboration to reduce the need for unnecessary travel and paperwork. Our team also tries to be mindful of electricity and other resources used in our day-to-day operations. These may seem like small steps, but they are practical changes that can become part of how we work every day.

We do not see climate action as a one-time activity. It is an ongoing effort to understand our impact and find better ways to reduce it. As Brand Mindz grows, we will continue looking for practical and responsible ways to make our workplace and business practices more environmentally conscious.

Our climate action efforts focus on reducing unnecessary paper and printing, using digital-first communication, being mindful of energy consumption, limiting avoidable travel through online meetings, and encouraging responsible environmental practices among our team.`,
    contributions: [],
    footerNote: "CSR Focus Area: Climate & Environmental Responsibility",
    subtitle: "Climate Action",
},
                {
                    id: 14,
                    title: "Life Below Water",
                    tag: "Alignment Type",
                    image: Life14,
                    description: "Ocean protection...",
                    contributions: ["Ocean cleanup"],
                    footerNote: "Supported by CSR Focus Area..."
                },

                {
                    id: 15,
                    title: "Life on Land",
                    tag: "Alignment Type",
                    image: Lifeland15,
                    description: "Forest protection...",
                    contributions: ["Tree plantation"],
                    footerNote: "Supported by CSR Focus Area..."
                },

                {
                    id: 16,
                    title: "Peace, Justice and Strong Institutions",
                    tag: "Alignment Type",
                    image: Peace16,
                    description: "Justice initiatives...",
                    contributions: ["Legal awareness"],
                    footerNote: "Supported by CSR Focus Area..."
                },

                {
                    id: 17,
                    title: "Partnerships for the Goals",
                    tag: "Alignment Type",
                    image: Goals17,
                    description: "Global partnerships...",
                    contributions: ["CSR partnerships"],
                    footerNote: "Supported by CSR Focus Area..."
                }
            ]
        },
    ];

    const current = menuItems.find(item => item.id === activeTab) || menuItems[0];
    const [openImg, setOpenImg] = useState(current.sdgs[4]);


    return (
        <section className="bm-about-section-sustainability">
            <div className="bm-about-container-branding">
                {/* Dynamic Content Area */}
                <div className="bm-about-content-wrapper">


                    <div className="bm-sdg-grid">
                        {current.sdgs.map((sdg, i) => (
                            <div
                                key={i}
                                className={`sdg-box sdg-${sdg.id}`}
                                onClick={() => setOpenImg(sdg)} // Set the whole object, not just URL
                            >
                                <Image src={sdg.image} alt={`SDG ${sdg.id}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bm-about-container-branding ">
                <div className="bm-sdg-detail-view-branding">
                    <div className="bm-sdg-alignment-tag-branding  bm-sdg-alignment-tag-sustainability">{openImg?.tag}</div>

                    <div className="bm-sdg-detail-flex-branding">
                        <div className="bm-sdg-image-main">
                            <Image src={openImg?.image} alt="SDG Icon" />
                        </div>

                        <div className="bm-sdg-content-main">
                            <p
                                dangerouslySetInnerHTML={{ __html: openImg?.description }}
                            ></p>
                            {openImg?.contributions?.length > 0 && (
                                <div className="bm-sdg-contributions">
                                    <span>Key contributions include:</span>
                                    <ul>
                                        {openImg?.contributions.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {openImg?.footerNote !== "" && (
                                <p className="bm-sdg-footer-note">{openImg?.footerNote}</p>
                            )}


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brandsustainability
