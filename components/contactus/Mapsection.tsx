"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/aboutus/aboutus.css";

// Import circle background
import circleBg from '../../assets/contact/ellipse1.webp';
// Import location marker icon
import locationMarker from '../../assets/contact/image3.webp'; // Your marker image

export const MapSection = () => {
  return (
    <section className="bm-map-section">
      <div className="bm-map-container">


        {/* Two Maps Grid - col-6 col-6 */}
        <div className="bm-map-grid">

          {/* Chennai Office Map */}
          <div className="bm-map-item">
            <FadeIn delay={0.2}>
              <div className="bm-map-card">


                {/* Map Container */}
                <div className="bm-map-image-container">

                  {/* Google Map - NO FILTER, normal colors */}
                  <div className="bm-map-wrapper">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985685789643!2d80.2494875!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d5d8c8b7c3d%3A0x5b8c8c8c8c8c8c!2sGreeta%20Towers%2C%20Rajiv%20Gandhi%20Salai%2C%20Perungudi%2C%20Chennai%2C%20Tamil%20Nadu%20600096!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="bm-map-frame"
                    ></iframe>

                    {/* Circle Background - Center of map */}
                    <div className="bm-circle-bg-center">
                      <Image
                        src={circleBg}
                        alt=""
                        width={140}
                        height={140}
                        className="bm-circle-image-center"
                      />
                    </div>

                    {/* Location Marker - Exact address location */}
                    <div className="bm-location-marker">
                      <Image
                        src={locationMarker}
                        alt="Location"
                        width={40}
                        height={40}
                        className="bm-marker-icon"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

          {/* Tirunelveli Office Map */}
          <div className="bm-map-item">
            <FadeIn delay={0.3}>
              <div className="bm-map-card">



                {/* Map Container */}
                <div className="bm-map-image-container">

                  <div className="bm-map-wrapper">
                    <iframe
                      src="https://www.google.com/maps?q=Startup+TN,+Tirunelveli+Municipal+Corporation+Incubation+Centre,+SN+Highway,+Tirunelveli+627002&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="bm-map-frame"
                    ></iframe>

                    {/* Circle Background - Center of map */}
                    <div className="bm-circle-bg-center">
                      <Image
                        src={circleBg}
                        alt=""
                        width={140}
                        height={140}
                        className="bm-circle-image-center"
                      />
                    </div>

                    {/* Location Marker - Exact address location */}
                    <div className="bm-location-marker">
                      <Image
                        src={locationMarker}
                        alt="Location"
                        width={40}
                        height={40}
                        className="bm-marker-icon"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};