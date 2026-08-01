import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/aboutus/aboutus.css";
import eesahImage from "../../assets/about/eesah.webp";

export const VideoSection = () => {
  return (
    <section className="bm-video-section">
      <div className="bm-video-container">
        <FadeIn delay={0.1}>
          <div className="bm-video-wrapper">
            <div className="bm-video-image-container">
              <Image
                src={eesahImage}
                alt="Brand Mindz team"
                className="bm-video-banner-image"
                fill
                priority
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
