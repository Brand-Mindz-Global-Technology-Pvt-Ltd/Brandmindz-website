"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn,
  FaYoutube, FaInstagram, FaGooglePlusG,
  FaPinterestP, FaBehance, FaDribbble,
  FaMapMarkerAlt, FaChevronDown, FaChevronUp
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Styles import
import styles from '../../style/footer/Footer.module.css';

// Assets imports
import logo from '../../assets/logo/logo.png'
import Image0 from '../../assets/Footer/5a3c8c71acdddaa4740210c8170c51773e0e0543.png'
import Image1 from '../../assets/Footer/a07119e2e776b18257a77e888622077bb8f4f6c1.png'
import Image2 from '../../assets/Footer/e11c902dd32153b2abe7a4d93637a06c7597b932.png'
import back from '../../assets/HomeSection/banner/Group (1).png'

const Footer = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Resources", path: "/resources" },
    // { name: "Careers", path: "/careers" },
    // { name: "Blog", path: "/blog" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <footer className={styles.footerContainer}>
      {/* Background City Image */}
      <div
        className={styles.backgroundOverlay}
        style={{ backgroundImage: `url(${back.src})` }}
      />

      <div className={styles.contentWrapper}>
        {/* <div className="grid grid-cols-1 md:grid-cols-12 " 
> */}
        <div className="flex flex-col md:flex-row justify-between gap-5">

          {/* Column 1: Brand */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className={styles.brandColumn}>
              <div className={styles.logoContainer}>
                <Link href="/">
                  <Image src={logo} alt="Brand Mindz" width={200} height={55} priority />
                </Link>
                <p className={styles.brandDescription} >
                  Brand Mindz is built by people who genuinely care about your growth.
                </p>
              </div>

              <div className={styles.socialLinks}>
                {/* {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaGooglePlusG, FaPinterestP, FaBehance, FaDribbble].map((Icon, i) => (
                  <Link key={i} href="#" className={styles.socialIcon}><Icon /></Link>
                ))} */}
                {[
                  {
                    icon: FaFacebookF,
                    link: "https://www.facebook.com/p/Brand-Mindz-Global-100093914452560/",
                  },
                  {
                    icon: FaLinkedinIn,
                    link: "https://in.linkedin.com/company/brand-mindz-global",
                  },
                  {
                    icon: FaYoutube,
                    link: "https://youtube.com/@brandmindzglobal?si=ljAGQQjLqyEMIOFD",
                  },
                  {
                    icon: FaInstagram,
                    link: "https://www.instagram.com/brandmindzglobal/",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                    >
                      <Icon />
                    </Link>
                  );
                })}
              </div>

              <div className={styles.statusBadge}>
                <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-[linear-gradient(180deg,#00C950,#006328)]"></div>
                <span className={styles.statusText}>All Systems Operational</span>
              </div>

              <div className="">
                <p className="text-[22px] text-gray-400 mb-5  tracking-widest">Proud  <span className={styles.widest}>Members of</span></p>
                <div className="flex  items-center gap-6" style={{ marginTop: "20px" }}>
                  <Image src={Image2} alt="BNI" className="h-8 w-auto" />
                  <Image src={Image0} alt="JCI" className="h-9 w-auto" />
                  <Image src={Image1} alt="YES" className="h-14 w-auto" />
                </div>

              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          {/* <div className="md:col-span-2 lg:col-span-2 md:pl-8">
            <h3 className={styles.sectionTitle} >Home</h3>
            <ul className={styles.linkList}>
              {["About us", "Our Services", "Industries", "Case Studies", "Sustainability", "Resources", "Careers", "Blog", "Contact us"].map((item) => (
                <li key={item} className={styles.linkItem}>
                  <Link href="#" className={styles.navLink}>{item}</Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div className="md:col-span-2 lg:col-span-2 md:pl-8">
            <h3 className={styles.sectionTitle} style={{ fontSize: "24px" }}>Quick Links</h3>

            <ul className={styles.linkList}>
              {footerLinks.map((item) => {
                if (item.name === "Our Services") {
                  return (
                    <li key={item.name} className={styles.linkItem}>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={styles.dropdownToggleBtn}
                        aria-expanded={isServicesOpen}
                      >
                        {item.name}
                        {isServicesOpen ? (
                          <FaChevronUp className={styles.chevronIcon} />
                        ) : (
                          <FaChevronDown className={styles.chevronIcon} />
                        )}
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className={styles.dropdownList}
                          >
                            {[
                              { label: 'Branding', path: '/services/branding' },
                              { label: 'Designing', path: '/services/designing' },
                              { label: 'Development', path: '/services/development' },
                              { label: 'Digital Marketing', path: '/services/digital-marketing' },
                              { label: 'E-Commerce listing', path: '/services/ecommerce' }
                            ].map((subItem) => (
                              <li key={subItem.label} className={styles.dropdownLinkItem}>
                                <Link href={subItem.path} className={styles.dropdownNavLink}>
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
                  <li key={item.name} className={styles.linkItem}>
                    <Link href={item.path} className={styles.navLink}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>


          {/* Column 3: Reach Us */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className={styles.sectionTitle} style={{ fontSize: "24px" }}>Reach Us</h3>
            <div className="space-y-8 ">
              <div className="flex gap-3 justifi-content-center align-items-center " style={{ marginBottom: '20px' }}>
                <FaMapMarkerAlt className="text-black hidden md:block" style={{ marginTop: '10px' }} />
                <div>
                  <h4 className="font-bold text-[20px] mb-1">Chennai Office</h4>
                  <p className="text-[19px] text-gray-500 leading-snug">
                    Workflow, Greeta Towers, 99,<br />
                    Rajiv Gandhi Salai, Industrial Estate,<br />
                    Perungudi, Chennai, Tamil Nadu 600096
                  </p>
                </div>
              </div>
             <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <FaMapMarkerAlt className="text-black hidden md:block " style={{ marginTop: '10px' }} />
                <div>
                  <h4 className="font-bold text-[20px] mb-1">Tirunelveli Office</h4>
                  <p className="text-[19px] text-gray-500 leading-snug">
                    Startup TN, Tirunelveli Municipal<br />
                    Corporation Incubation Centre,<br />
                    SN Highway, Tirunelveli 627002.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="md:col-span-3 lg:col-span-3">
            <div className={styles.contactInfo}>
              <div className={styles.contactGroup}>
                <h4>For Sales</h4>
                <p className={styles.emailLink}>+91 90806 77945</p>
                <Link href="mailto:business@brandmindz.com" className={styles.emailLink}>business@brandmindz.com</Link>
              </div>
              <div className={styles.contactGroup}>
                <h4>For B2B</h4>
                <p className={styles.emailLink}>+91 84282 76993</p>
                <Link href="mailto:headoffice@brandmindz.com" className={styles.emailLink}>headoffice@brandmindz.com</Link>
              </div>
              <div className={styles.contactGroup}>
                <h4>For HR</h4>
                <p className={styles.emailLink}>+91 84282 76993</p>
                <Link href="mailto:brandmindzteam@gmail.com" className={styles.emailLink}>brandmindzteam@gmail.com</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>
            © 2026 <span className={styles.semibold}>Brand Mindz.</span> All Rights Reserved.
          </p>
          {/* Media Kit */}
          <div className={styles.bottomLinks}>
            {[, "Terms of Service", "Privacy Policy", "Cookies Policy", "Refund Policy", "CSR Policy"].map((p) => {
              let href = "#";
              if (p === "Privacy Policy") href = "/privacy-policy";
              else if (p === "Terms of Service") href = "/terms-of-service";
              else if (p === "Cookies Policy") href = "/cookie-policy";
              else if (p === "Refund Policy") href = "/refund-policy";
              else if (p === "CSR Policy") href = "/csr-policy";
              return (
                <Link key={p} href={href} className="hover:text-black transition-colors">{p}</Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;