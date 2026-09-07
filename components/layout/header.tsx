'use client';

import { useState, useEffect } from "react";
import '../../style/header/header.css';
import Image from 'next/image';
import logo from '../../assets/logo/logo.webp';
import officeImage from '../../assets/header/office.webp';
import { FiMenu, FiX, FiChevronDown, FiChevronUp, FiPhone } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BookCallModal from "./BookCallModal";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [activeMegaCategory, setActiveMegaCategory] = useState<Record<string, number>>({
    'Our Services': 0,
    Industries: 0,
  });


  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1180);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close menu on desktop resize
  useEffect(() => {
    if (window.innerWidth > 1180 && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen || isBookCallOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen, isBookCallOpen]);

  // Open the shared modal from every existing or future "Book a Call" button.
  useEffect(() => {
    const handleBookCallClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>('button, a, [role="button"]');

      if (trigger?.textContent?.replace(/\s+/g, ' ').trim().toLowerCase() === 'book a call') {
        event.preventDefault();
        event.stopPropagation();
        setIsMobileMenuOpen(false);
        setIsBookCallOpen(true);
      }
    };

    document.addEventListener('click', handleBookCallClick, true);
    return () => document.removeEventListener('click', handleBookCallClick, true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };


  const menuItems = [
    {
      name: 'Home',
      hasDropdown: false,
      dropdownItems: [],
      path: "/"
    },
   {
  name: 'About us',
  hasDropdown: true,
  dropdownItems: [
    { label: 'About Brand Mindz', path: '/about' },
    { label: 'Work Culture', path: '/work-culture' },
    { label: 'Global Capability', path: '/global-capability' },
    { label: 'Brand Mindz Promise', path: '/brand-mindz-promise' },
    { label: 'Leadership & Execution Team', path: '/leadership-execution-team' },
    { label: 'Partner With Us', path: '/partner-with-us' },
    { label: 'Brand Mindz Connect™️', path: '/brand-mindz-connect' }
  ]
},
    {
      name: 'Our Services',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Branding', path: '/services/branding' },
        { label: 'Designing', path: '/services/designing' },
        { label: 'Development', path: '/services/development' },
        { label: 'Digital Marketing', path: '/services/digital-marketing' },
        { label: 'E-Commerce listing', path: '/services/ecommerce' }
      ]
    },
    {
      name: 'Industries',
      hasDropdown: true,
      dropdownItems: [
        { label: 'IT & SaaS Solutions', path: '/industries?tab=it' },
        { label: 'E-Commerce Brands', path: '/industries?tab=ecommerce' },
        { label: 'Healthcare & Biotech', path: '/industries?tab=healthcare' },
        { label: 'Education & E-Learning', path: '/industries?tab=education' },
        { label: 'Real Estate & Property', path: '/industries?tab=realestate' }
      ],
      path: "/industries"
    },
    {
      name: 'Case Studies',
      hasDropdown: false,
      dropdownItems: [],
      path: "/case-studies"
    },
    {
      name: 'Sustainability',
      hasDropdown: false,
      dropdownItems: [],
      path: "/sustainability"
    },
    {
      name: 'Resources',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Blog', path: '/blog' },
        { label: 'Glossary', path: '/resources' }
      ],
      path: "/resources"
    },
    {
      name: 'Contact us',
      hasDropdown: false,
      dropdownItems: [],
      path: "/contact"
    },
  ];

  const megaMenuData = {
    'Our Services': {
      eyebrow: 'Our Services',
      viewAllPath: '/services/branding',
      viewAllLabel: 'View all',
      cardTitle: <>Structured execution.<br />Measurable growth.</>,
      cardLinkLabel: 'Explore all services',
      categories: [
        {
          name: 'Branding',
          path: '/services/branding',
          links: [
            { label: 'Personal Branding', path: '/services/branding?tab=personal-branding' },
            { label: 'Company Branding', path: '/services/branding?tab=company-branding' },
            { label: 'Brand Strategy', path: '/services/branding?tab=brand-strategy' },
            { label: 'Video Creation and Editing', path: '/services/branding?tab=video-creation' },
            { label: 'Brand Consulting', path: '/services/branding?tab=brand-consulting' },
          ],
        },
        {
          name: 'Designing',
          path: '/services/designing',
          links: [
            { label: 'Logo Designing', path: '/services/designing?tab=logo-designing' },
            { label: 'Graphic Designing', path: '/services/designing?tab=graphic-designing' },
            { label: 'UI/UX Designing', path: '/services/designing?tab=ui-ux-designing' },
            { label: 'Print Designing', path: '/services/designing?tab=print-designing' },
          ],
        },
        {
          name: 'Development',
          path: '/services/development',
          links: [
            { label: 'Static Website Development', path: '/services/development?tab=static' },
            { label: 'E-Commerce Development', path: '/services/development?tab=ecommerce' },
            { label: 'Mobile App Development', path: '/services/development?tab=mobile-app' },
            { label: 'Web Application Development', path: '/services/development?tab=web-application' },
          ],
        },
        {
          name: 'Digital Marketing',
          path: '/services/digital-marketing',
          links: [
            { label: 'SEO', path: '/services/digital-marketing?tab=seo' },
            { label: 'Meta Ads', path: '/services/digital-marketing?tab=meta-ads' },
            { label: 'Google Ads', path: '/services/digital-marketing?tab=google-ads' },
            { label: 'LinkedIn Marketing', path: '/services/digital-marketing?tab=linkedin' },
            { label: 'WhatsApp Marketing', path: '/services/digital-marketing?tab=whatsapp' },
            { label: 'YouTube Marketing', path: '/services/digital-marketing?tab=youtube' },
            { label: 'Social Media Management', path: '/services/digital-marketing?tab=social-media' },
          ],
        },
        {
          name: 'E-Commerce Listing',
          path: '/services/ecommerce',
          links: [
            { label: 'Flipkart Listing', path: '/services/ecommerce?tab=flipkartListing' },
            { label: 'Amazon Listing', path: '/services/ecommerce?tab=amazonListing' },
            { label: 'Meesho Listing', path: '/services/ecommerce?tab=meeshoListing' },
            { label: 'Myntra Listing', path: '/services/ecommerce?tab=myntraListing' },
            { label: 'JioMart Listing', path: '/services/ecommerce?tab=jiomartListing' },
            { label: 'Seller Account Management', path: '/services/ecommerce?tab=sellerAccountManagement' },
          ],
        },
      ],
    },
    Industries: {
      eyebrow: 'Industries',
      viewAllPath: '/industries',
      viewAllLabel: 'View all',
      cardTitle: <>Industry insight.<br />Focused outcomes.</>,
      cardLinkLabel: 'Explore all industries',
      categories: [
        { name: 'IT & SaaS Solutions', path: '/industries?tab=it', links: [
          { label: 'SaaS Growth Marketing', path: '/industries?tab=it' },
          { label: 'B2B Lead Generation', path: '/industries?tab=it' },
          { label: 'Technology Brand Positioning', path: '/industries?tab=it' },
        ] },
        { name: 'E-Commerce Brands', path: '/industries?tab=ecommerce', links: [
          { label: 'Marketplace Growth', path: '/industries?tab=ecommerce' },
          { label: 'Performance Marketing', path: '/industries?tab=ecommerce' },
          { label: 'Conversion Optimisation', path: '/industries?tab=ecommerce' },
        ] },
        { name: 'Healthcare & Biotech', path: '/industries?tab=healthcare', links: [
          { label: 'Healthcare Brand Strategy', path: '/industries?tab=healthcare' },
          { label: 'Patient Acquisition', path: '/industries?tab=healthcare' },
          { label: 'Medical Content Marketing', path: '/industries?tab=healthcare' },
        ] },
        { name: 'Education & E-Learning', path: '/industries?tab=education', links: [
          { label: 'Student Acquisition', path: '/industries?tab=education' },
          { label: 'Education Brand Building', path: '/industries?tab=education' },
          { label: 'Course Promotion', path: '/industries?tab=education' },
        ] },
        { name: 'Real Estate & Property', path: '/industries?tab=realestate', links: [
          { label: 'Property Lead Generation', path: '/industries?tab=realestate' },
          { label: 'Project Branding', path: '/industries?tab=realestate' },
          { label: 'Real Estate Digital Marketing', path: '/industries?tab=realestate' },
        ] },
      ],
    },
  };

  const handleMenuItemClick = (itemName: string) => {
    console.log(`Clicked: ${itemName}`);
    if (isMobile) {
      closeMobileMenu();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  const isActive = (path?: string) => {
    if (!path) return false;
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };


  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isMegaMenu = (name: string): name is keyof typeof megaMenuData =>
    name === 'Our Services' || name === 'Industries';

  const renderMegaMenu = (name: keyof typeof megaMenuData) => {
    const menu = megaMenuData[name];
    const selectedIndex = activeMegaCategory[name] ?? 0;
    const selectedCategory = menu.categories[selectedIndex] ?? menu.categories[0];

    return (
      <div className="bm-mega-menu" onClick={(event) => event.stopPropagation()}>
        <div className="bm-mega-menu__categories">
          {menu.categories.map((category, categoryIndex) => (
            <button
              type="button"
              key={category.name}
              className={`bm-mega-menu__category ${selectedIndex === categoryIndex ? 'active' : ''}`}
              onMouseEnter={() => setActiveMegaCategory((current) => ({ ...current, [name]: categoryIndex }))}
              onFocus={() => setActiveMegaCategory((current) => ({ ...current, [name]: categoryIndex }))}
              onClick={() => setActiveMegaCategory((current) => ({ ...current, [name]: categoryIndex }))}
            >
              <span className="bm-mega-menu__number">{String(categoryIndex + 1).padStart(2, '0')}</span>
              <span>{category.name}</span>
              <span className="bm-mega-menu__chevron">›</span>
            </button>
          ))}
        </div>

        <div className="bm-mega-menu__content">
          <div className="bm-mega-menu__content-head">
            <div>
              <span className="bm-mega-menu__eyebrow">{menu.eyebrow}</span>
              <h2>{selectedCategory.name}</h2>
            </div>
            <Link href={selectedCategory.path} className="bm-mega-menu__view-all">
              {menu.viewAllLabel} ↗
            </Link>
          </div>
          <div className="bm-mega-menu__links">
            {selectedCategory.links.map((link) => (
              <Link key={link.label} href={link.path} className="bm-mega-menu__link">
                <span>{link.label}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>

        <Link href={selectedCategory.path} className="bm-mega-menu__visual">
          <Image src={officeImage} alt="Brand Mindz office" fill sizes="360px" />
          <div className="bm-mega-menu__visual-shade" />
          <span className="bm-mega-menu__visual-brand">BRAND MINDZ</span>
          <strong>{menu.cardTitle}</strong>
          <span className="bm-mega-menu__visual-link">{menu.cardLinkLabel} →</span>
        </Link>
      </div>
    );
  };

  return (
    <div  className={show ?"header-top" :"header-top-matgin" }>

      <div className="header-wrapper">
        <AnimatePresence>
          {show && (
            <motion.div
              className="availability-wrapper"
              initial={{ y: -50, opacity: 0 }} // Starts 50px above and invisible
              animate={{ y: 0, opacity: 1 }}   // Slides to position and fades in
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <div className="availability-pill"></div>
              <div className="availability-text">
                <div className="dot"></div>
                <span>Available To Help You Grow</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>


        <header className="bm-header">
          <div className="bm-header__container">

            {/* Logo */}
            <Link href="/" className="bm-header__logo">
              <Image
                src={logo}
                alt="Brand Mindz"
                priority
              />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Navigation */}
            <nav className={`bm-header__nav ${isMobileMenuOpen ? 'active' : ''}`}>
              <ul className="bm-header__menu">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className={`${item.hasDropdown ? 'has-dropdown' : ''} ${isMegaMenu(item.name) ? 'has-mega-menu' : ''} ${isActive(item.path) ? 'active' : ''}`}
                    onClick={(e) => {
                      if (!item.hasDropdown) {
                        handleMenuItemClick(item.name);
                      }
                      if (item.hasDropdown && isMobile) {
                          toggleDropdown(item.name);
                        e.stopPropagation();
                      }
                    }}
                  >


                    <div className="menu-item-wrapper">
                      <span
                        className="menu-text"
                        onClick={() => !item.hasDropdown && handleMenuItemClick(item.name)}
                      >
                        {item.path ? (
                          <Link href={item.path}>{item.name}</Link>
                        ) : (
                          <span>{item.name}</span>
                        )}

                        {/* {item.name} */}
                      </span>

                      {item.hasDropdown && (
                        <span
                          className="arrow"
                          onClick={(e) => {
                            e.stopPropagation();
                              toggleDropdown(item.name);
                          }}
                        >
                          {activeDropdown === item.name ? <FiChevronUp /> : <FiChevronDown />}
                        </span>
                      )}
                    </div>
                    {item.hasDropdown && isMegaMenu(item.name) && !isMobile
                      ? renderMegaMenu(item.name)
                      : item.hasDropdown && (
                        <div className={`dropdown-content ${activeDropdown === item.name ? 'show' : ''}`}>
                          {item.dropdownItems.map((dropdownItem, idx) => (
                            <div
                              key={idx}
                              className="dropdown-item"
                              onClick={() => {
                                handleMenuItemClick(dropdownItem.label);
                                if (isMobile) closeMobileMenu();
                              }}
                            >
                              <Link href={dropdownItem.path} style={{ display: 'block', width: '100%' }}>
                                {dropdownItem.label}
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                  </li>
                ))}
              </ul>

              {/* Mobile Call Button */}
              <div className="mobile-call-button">
                <button
                  className="bm-header__btn mobile"
                  onClick={() => {
                    closeMobileMenu();
                    setIsBookCallOpen(true);
                  }}
                >
                  <div className="icon-circle">
                    <FiPhone />
                  </div>
                  Book a Call
                </button>
              </div>
            </nav>

            {/* Desktop Button with Phone Icon */}
            <div className="bm-header__action desktop">
              <button
                className="bm-header__btn"
                onClick={() => {
                  setIsBookCallOpen(true);
                }}
              >
                <div className="icon-circle">
                  <FiPhone />
                </div>
                Book a Call
              </button>
            </div>

          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div
          className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={closeMobileMenu}
        />
      </div>
      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />
    </div>

  );
};

export default Header;
