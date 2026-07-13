import React, { useState } from 'react'

import NoPoverty1 from '../../assets/HomeSection/about/NoPoverty1.jpg'
import Zero2 from '../../assets/HomeSection/about/Zero2.jpg'
import Good3 from '../../assets/HomeSection/about/Good3.jpg'
import Quality4 from '../../assets/HomeSection/about/Quality4.jpg'
import Equallity5 from '../../assets/HomeSection/about/Equallity5.jpg'
import Clean6 from '../../assets/HomeSection/about/Clean6.jpg'
import Energy7 from '../../assets/HomeSection/about/Energy7.jpg'
import Growth8 from '../../assets/HomeSection/about/Growth8.jpg'
import Infr9 from '../../assets/HomeSection/about/Infr9.jpg'
import Reduced10 from '../../assets/HomeSection/about/Reduced10.jpg'
import Communities11 from '../../assets/HomeSection/about/Communities11.jpg'
import Production12 from '../../assets/HomeSection/about/Production12.jpg'
import Action13 from '../../assets/HomeSection/about/Action13.jpg'
import Life14 from '../../assets/HomeSection/about/Life14.jpg'
import Lifeland15 from '../../assets/HomeSection/about/Lifeland15.jpg'
import Peace16 from '../../assets/HomeSection/about/Peace16.jpg'
import Goals17 from '../../assets/HomeSection/about/Goals17.jpg'
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
                    tag: "Direct Alignment",
                    image: Quality4,
                    description: "Through education and skill-focused CSR initiatives, Brand Mindz contributes to improving access to learning and career readiness, especially for youth and underserved communities.",
                    contributions: [
                      "Education and learning support programs",

                       "Digital education and technology access initiatives ",

                       "Career readiness and vocational skill development "
                    ],
                    subtitle: "Quality Education",

                    footerNote: ""
                },
                {
                    id: 5,
                    title: "Leadership knows No Gender",
                    tag: "Strong and Direct Alignment",
                    image: Equallity5,
                    description: `Brand Mindz prioritizes women-led businesses, women entrepreneurs, and women professionals across its CSR initiatives and organizational practices. 
<br/>
In addition to external CSR programs, the Company actively promotes gender inclusion in employment by prioritizing opportunities for women talents across functions. `,
                    contributions: [
                        "Entrepreneurship and skill development initiatives for women",

                          "Digital literacy and financial awareness programs ",

                         "Inclusive hiring practices that promote women participation in the workforce" 
                    ],
                    subtitle: "Gender Equality",
                    footerNote: "This alignment is directly supported by CSR Focus Area 5.1 – Women Empowerment."
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
                    tag: "Strong and Direct Alignment ",
                    image: Growth8,
                    description: "Brand Mindz actively supports decent work and economic growth by enabling employment opportunities for first-generation graduates and women talents, particularly from Tier 2 and emerging regions. <br/>The Company consciously builds teams from Tier 2 cities, creating global exposure and growth opportunities through technology, digital services, and international-standard work environments.",
                    contributions: ["Prioritizing employment for first-generation graduates ",

     "Creating structured growth opportunities for women professionals", 

"Providing skill development and real-world digital exposure ",

"Supporting entrepreneurship and employability initiatives through CSR programs"],
                    footerNote: "This approach directly supports sustainable livelihoods and inclusive economic participation. ",
                    subtitle: "Decent Work  Economic Growth",

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
                    tag: "Indirect but Meaningful Alignment ",
                    image: Reduced10,
                    description: "By prioritizing talent from Tier 2 regions, first-generation graduates, women professionals, and underserved communities, Brand Mindz helps reduce geographic, social, and economic inequalities. ",
                    contributions: ["Inclusive hiring beyond metro-centric talent pools", 

                                  "Digital access and career opportunities for regional talent ",

                                "Community-focused CSR initiatives"
                            ],
                    footerNote: "",
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
                    tag: "Selective Alignment",
                    image: Action13,
                    description: "The Company supports environmental responsibility through awareness initiatives and digital campaigns that promote sustainable practices and conservation, in line with its CSR Policy. ",
                    contributions: [],
                    footerNote: "",
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