"use client";

import React, { useState, useRef } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/aboutus/aboutus.css";

// Import your video banner image
import videoBanner from '../../assets/about/1 5645761 (1).png'; // Replace with your actual image

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bm-video-section">
      <div className="bm-video-container">
        
        <FadeIn delay={0.1}>
          <div className="bm-video-wrapper">
            
            {/* Video Element */}
            <video
              ref={videoRef}
              className="bm-video-player"
              controls={false}
              playsInline
              style={{ display: isPlaying ? 'block' : 'none' }}
            >
              <source src="/your-video-file.mp4" type="video/mp4" />
            </video>

            {/* Banner Image - ALWAYS Visible when video not playing */}
            <div 
              className="bm-video-image-container" 
              onClick={handlePlayPause}
              style={{ display: isPlaying ? 'none' : 'block' }}
            >
              <Image 
                src={videoBanner}
                alt="Video Banner"
                className="bm-video-banner-image"
                fill
                priority
              />
              
              {/* Play/Pause Button - ABSOLUTE CENTERED ON IMAGE */}
              <div className="bm-video-center-button">
                {isPlaying ? (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <rect x="6" y="5" width="4" height="14" fill="black" />
                    <rect x="14" y="5" width="4" height="14" fill="black" />
                  </svg>
                ) : (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5V19L19 12L8 5Z" fill="black" />
                  </svg>
                )}
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};