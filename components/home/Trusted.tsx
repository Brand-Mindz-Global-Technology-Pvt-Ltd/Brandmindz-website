import React, { useEffect, useState } from "react";
import "../../style/home/trusted.css";
import Image from "next/image";
import Bioneemtec from "../../assets/HomeSection/brand/Bioneemtec.png";
import Cheranacademy from "../../assets/HomeSection/brand/Cheranacademy.png";
import nailsandbeyonds from "../../assets/HomeSection/brand/nailsandbeyonds.png";
import SevenStarLogo from "../../assets/HomeSection/brand/SevenStarLogo.png";
import Shortfundly from "../../assets/HomeSection/brand/Shortfundly.png";
import swotle from "../../assets/HomeSection/brand/swotle.png";
import tancoir from "../../assets/HomeSection/brand/tancoir.png";
import TEDx from "../../assets/HomeSection/brand/TEDx.png";

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
          <div className="bm-trusted-logos-track">
            {[...brandLogos, ...brandLogos].map((item, index) => (
              <div className="bm-trusted-logo-item" key={index}>
                 <Image
                src={item.img}
                alt={item.alt}
                height={60} 
                style={{ width: 'auto', height: 'auto' }} // Keeps aspect ratio
                priority
              />
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};
