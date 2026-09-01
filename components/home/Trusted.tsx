import React, { useEffect, useState } from "react";
import "../../style/home/trusted.css";
import Image from "next/image";
import Bioneemtec from "../../assets/HomeSection/brand/bioneemtec.webp";
import Cheranacademy from "../../assets/HomeSection/brand/cheranacademy.webp";
import nailsandbeyonds from "../../assets/HomeSection/brand/nailsandbeyonds.webp";
import SevenStarLogo from "../../assets/HomeSection/brand/sevenstarlogo.webp";
import Shortfundly from "../../assets/HomeSection/brand/shortfundly.webp";
import swotle from "../../assets/HomeSection/brand/swotle.webp";
import tancoir from "../../assets/HomeSection/brand/tancoir.webp";
import TEDx from "../../assets/HomeSection/brand/tedx.webp";
import naturals from "../../assets/about/naturals_header_logo.webp";
import resonance from "../../assets/about/Scroll_logos/resonance-logo.webp";
import spacemanCraft from "../../assets/about/Scroll_logos/oip.webp";
import tukaBaby from "../../assets/about/Scroll_logos/tukababy.webp";
import tymerz from "../../assets/about/Scroll_logos/tymerz-2048x933.webp";
import faggro from "../../assets/about/Scroll_logos/faggro1.webp";
import marketCloud from "../../assets/about/Scroll_logos/market-cloud.webp";
import logo01 from "../../assets/about/Scroll_logos/01-logo.webp";
import aasi from "../../assets/about/Scroll_logos/aasi_logo.webp";
import annamDental from "../../assets/about/Scroll_logos/copyofannam-dental-logo.webp";
import dicTenkasi from "../../assets/about/Scroll_logos/dictenkasi.webp";
import ettik from "../../assets/about/Scroll_logos/ettik.webp";
import hrLogo from "../../assets/about/Scroll_logos/hr-logo-1.webp";
import jcom from "../../assets/about/Scroll_logos/jcom-photoroom.webp";
import magic20 from "../../assets/about/Scroll_logos/magic-20-e.webp";
import nellaiTours from "../../assets/about/Scroll_logos/nellai-tours-logo.webp";
import ourStudios from "../../assets/about/Scroll_logos/ourstudios1.webp";
import protonImages from "../../assets/about/Scroll_logos/proton-images.webp";
import sheTheSakthi from "../../assets/about/Scroll_logos/she_the_sakthi_logo-photoroom.webp";
import surprisorStories from "../../assets/about/Scroll_logos/surprisorstorieslogo.webp";
import bridalArtisans from "../../assets/about/Scroll_logos/thebridalartisans.webp";
import truckTaxi from "../../assets/about/Scroll_logos/truck-taxi-logo-e17321041147211.webp";

export const Trusted = () => {
  const brandLogos = [
    { id: 1, img: Cheranacademy, alt: "Cheran Academy" },
    { id: 2, img: Shortfundly, alt: "Shortfundly" },
    { id: 3, img: SevenStarLogo, alt: "Seven Star" },
    { id: 4, img: nailsandbeyonds, alt: "Nails and Beyonds" },
    { id: 5, img: TEDx, alt: "TEDx" },
    { id: 6, img: tancoir, alt: "Tancoir" },
    { id: 7, img: swotle, alt: "Swotle" },
    { id: 8, img: Bioneemtec, alt: "Bioneemtec" },
    { id: 9, img: naturals, alt: "Naturals" },
    { id: 10, img: resonance, alt: "Resonance" },
    { id: 11, img: spacemanCraft, alt: "Spaceman Craft" },
    { id: 12, img: tukaBaby, alt: "Tuka Baby" },
    { id: 13, img: tymerz, alt: "Tymerz" },
    { id: 14, img: faggro, alt: "Faggro" },
    { id: 15, img: marketCloud, alt: "Market Cloud" },
    { id: 16, img: logo01, alt: "Client brand" },
    { id: 17, img: aasi, alt: "Aasi" },
    { id: 18, img: annamDental, alt: "Annam Dental Hospital" },
    { id: 19, img: dicTenkasi, alt: "DIC Tenkasi" },
    { id: 20, img: ettik, alt: "Ettik" },
    { id: 21, img: hrLogo, alt: "HR" },
    { id: 22, img: jcom, alt: "JCOM" },
    { id: 23, img: magic20, alt: "Magic 20" },
    { id: 24, img: nellaiTours, alt: "Nellai Tours" },
    { id: 25, img: ourStudios, alt: "Our Studios" },
    { id: 26, img: protonImages, alt: "Proton Images" },
    { id: 27, img: sheTheSakthi, alt: "She The Sakthi" },
    { id: 28, img: surprisorStories, alt: "Surprisor Stories" },
    { id: 29, img: bridalArtisans, alt: "The Bridal Artisans" },
    { id: 30, img: truckTaxi, alt: "Truck Taxi" },
  ];
  const [count, setCount] = useState(0);
  const target = 300;
  useEffect(() => {
    let start = 0;
    const duration = 3000; // 2 seconds
    const increment = target / (duration / 16); // 60fps

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="bm-trusted-section">
      <div className="bm-trusted-container">

        <div className="bm-trusted-header">
          <span className="bm-trusted-label">Trusted by</span>
          <h2 className="bm-trusted-title">{count}+ Global Clients</h2>
        </div>

        {/* <div className="bm-trusted-logos">
          {brandLogos.map((item) => (
            <div className="bm-trusted-logo-item" key={item.id}>
              <Image
                src={item.img}
                alt={item.alt}
                height={60} 
                style={{ width: 'auto', height: 'auto' }} // Keeps aspect ratio
                priority
              />
            </div>
          ))}
        </div> */}
        <div className="bm-trusted-logos-scroll">
          <div
            className="bm-trusted-logos-track"
            style={{ "--bm-logo-count": brandLogos.length } as React.CSSProperties}
          >
            {[0, 1].map((groupIndex) => (
              <div
                className="bm-trusted-logos-group"
                aria-hidden={groupIndex === 1 ? "true" : undefined}
                key={groupIndex}
              >
                {brandLogos.map((item) => (
                  <div
                    className={`bm-trusted-logo-item ${
                      item.id === 25 ? "bm-trusted-logo-item--dark" : ""
                    } ${item.id === 4 || item.id === 5 ? "bm-trusted-logo-item--compact" : ""}`}
                    key={`${groupIndex}-${item.id}`}
                  >
                    <Image
                      src={item.img}
                      alt={groupIndex === 0 ? item.alt : ""}
                      height={60}
                      priority
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};
