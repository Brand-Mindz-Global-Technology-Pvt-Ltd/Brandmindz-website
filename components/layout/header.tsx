'use client';

import { useState, useEffect } from "react";
import '../../style/header/header.css';
import Image from 'next/image';
import logo from '../../assets/logo/logo.png';
import { FiMenu, FiX, FiChevronDown, FiChevronUp, FiPhone } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

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
      hasDropdown: false,
      dropdownItems: [],
      path: "/about"
    },
    {
      name: 'Our Services',
      hasDropdown: true,
      dropdownItems: ['Web Development', 'UI/UX Design', 'Digital Marketing', 'SEO']
    },
    {
      name: 'Industries',
      hasDropdown: true,
      dropdownItems: ['Technology', 'Healthcare', 'Finance', 'E-commerce']
    },
    {
      name: 'Case Studies',
      hasDropdown: true,
      dropdownItems: ['Project 1', 'Project 2', 'Project 3']
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
      dropdownItems: ['Blog', 'Guides', 'Whitepapers', 'Tools']
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

  return (
    <div className="header-top">

      <div className="header-wrapper">
        {/* Availability Pill - Hidden on mobile */}
        <div className="availability-wrapper">
          <div className="availability-pill"></div>

          <div className="availability-text">
            <div className="dot"></div>
            <span>Available To Help You Grow</span>
          </div>
        </div>


        <header className="bm-header">
          <div className="bm-header__container">

            {/* Logo */}
            <div className="bm-header__logo">
              <Image
                src={logo}
                alt="Brand Mindz"

                priority // Optional: for LCP optimization
              />
            </div>

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
                    className={`${item.hasDropdown ? 'has-dropdown' : ''} ${activeDropdown === item.name ? 'active' : ''}`}
                    onClick={(e) => {
                      if (!item.hasDropdown) {
                        handleMenuItemClick(item.name);
                      }
                      if (item.hasDropdown && isMobile) {
                        //   toggleDropdown(item.name);
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
                            //   toggleDropdown(item.name);
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
                            onClick={() => handleMenuItemClick(dropdownItem)}
                          >
                            {dropdownItem}
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