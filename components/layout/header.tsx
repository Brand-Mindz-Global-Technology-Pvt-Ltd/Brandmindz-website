'use client';

import { useState, useEffect } from "react";
import '../../style/header/header.css';
import Image from 'next/image';
import logo from '../../assets/logo/logo.webp';
import { FiMenu, FiX, FiChevronDown, FiChevronUp, FiPhone } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const [show, setShow] = useState(false);


  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close menu on desktop resize
  useEffect(() => {
    if (window.innerWidth > 768 && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

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
                    className={` ${item.hasDropdown ? 'has-dropdown' : ''} ${isActive(item.path) ? 'active' : ''}`}
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
                    {item.hasDropdown && (
                      <div className={`dropdown-content ${activeDropdown === item.name ? 'show' : ''}`}>
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <div
                            key={idx}
                            className="dropdown-item"
                            onClick={() => {
                              handleMenuItemClick(dropdownItem.label); // Logic for logging/closing menu
                              if (isMobile) closeMobileMenu();
                            }}
                          >
                            {/* Wrap the label in a Link to the specific page */}
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
                    console.log('Book a Call clicked');
                    closeMobileMenu();
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
                  console.log('Book a Call clicked');
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
    </div>

  );
};

export default Header;