import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/aboutus/aboutus.css";

// Import assets
import worldMap from '../../assets/about/Group (2).png';


export const GlobalPresenceSection = () => {
  
  const countries = [
    { name: "USA", top: "22%", left: "18%" },
    { name: "Canada", top: "18%", left: "15%" },
    { name: "UK", top: "28%", left: "45%" },
    { name: "Germany", top: "32%", left: "48%" },
    { name: "UAE", top: "48%", left: "55%" },
    { name: "India", top: "55%", left: "68%" },
    { name: "Singapore", top: "62%", left: "72%" },
    { name: "Malaysia", top: "58%", left: "70%" },
    { name: "Indonesia", top: "65%", left: "75%" },
    { name: "Australia", top: "78%", left: "88%" },
  ];



  return (
    <section className="bm-global-presence-wrapper">
      <div className="bm-global-presence-section">
        
        {/* Gray Container with Rounded-xl and Margin */}
        <div className="bm-global-gray-container">
          
          {/* Left Column - Map Section */}
          <div className="bm-global-map-column">
            
            {/* Our Global Presence Heading */}
            <FadeIn delay={0.1}>
              <h2 className="bm-global-map-heading">
                Our Global Presence
              </h2>
            </FadeIn>

            {/* Map Container - Transparent Background */}
            <div className="bm-global-map-container">
              <div className="bm-global-map-wrapper">
                {/* World Map Image - Transparent BG */}
                <Image 
                  src={worldMap}
                  alt="World Map"
                  className="bm-global-map-image"
                  priority
                />
                
                {/* Country Markers */}
                <div className="bm-global-markers">
                  {countries.map((country, index) => (
                    <div 
                      key={index}
                      className="bm-global-marker"
                      style={{ top: country.top, left: country.left }}
                    >
                      <div className="bm-global-badge">
                        <svg className="bm-global-triangle" viewBox="0 0 24 24">
                          <path d="M12 2L22 21H2L12 2Z" fill="white" />
                        </svg>
                        <span className="bm-global-country">{country.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* We Don't Sell Words - We Create Brands */}
        

          </div>

       

        </div>

      </div>
    </section>
  );
};