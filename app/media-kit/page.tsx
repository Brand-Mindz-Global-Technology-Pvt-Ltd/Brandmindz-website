import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { Download } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import whiteLogoPreview from "../../assets/Footer/media kit/previews/white-logo-preview.png";
import blackLogoPreview from "../../assets/Footer/media kit/previews/black-logo-preview.png";
import styles from "./media-kit.module.css";

export const metadata: Metadata = {
  title: "Media Kit | Brand Mindz Global",
  description:
    "Download official Brand Mindz Global logos for approved media, press, and partnership use.",
  alternates: {
    canonical: "https://www.brandmindz.com/media-kit",
  },
};

interface LogoAsset {
  title: string;
  description: string;
  image: StaticImageData;
  downloadSlug: string;
  fileName: string;
  fileType: "WEBP" | "PNG";
  background: "dark" | "light";
  transparent: boolean;
}

const logoAssets: LogoAsset[] = [
  {
    title: "White Text Color Logo",
    description:
      "Use this version on dark backgrounds where the complete Brand Mindz logo needs maximum contrast.",
    image: whiteLogoPreview,
    downloadSlug: "white-logo",
    fileName: "Brand-Mindz-White-Logo.webp",
    fileType: "WEBP",
    background: "dark",
    transparent: false,
  },
  {
    title: "White Text Logo — Transparent",
    description:
      "A background-free white logo for dark photography, videos, presentations, and digital artwork.",
    image: whiteLogoPreview,
    downloadSlug: "white-logo-transparent",
    fileName: "Brand-Mindz-White-Logo-Transparent.png",
    fileType: "PNG",
    background: "dark",
    transparent: true,
  },
  {
    title: "Black Text Color Logo",
    description:
      "Use this primary dark version on white or light backgrounds for print and digital communication.",
    image: blackLogoPreview,
    downloadSlug: "black-logo",
    fileName: "Brand-Mindz-Black-Logo.webp",
    fileType: "WEBP",
    background: "light",
    transparent: false,
  },
  {
    title: "Black Text Logo — Transparent",
    description:
      "A background-free black logo designed for placement on clean, light-colored surfaces.",
    image: blackLogoPreview,
    downloadSlug: "black-logo-transparent",
    fileName: "Brand-Mindz-Black-Logo-Transparent.png",
    fileType: "PNG",
    background: "light",
    transparent: true,
  },
];

export default function MediaKitPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Brand resources</p>
            <h1>Media Kit</h1>
            <p>
              Official Brand Mindz assets for press, partnerships, presentations,
              and approved brand communication.
            </p>
          </div>
        </section>

        <section className={styles.assetsSection} aria-labelledby="logos-heading">
          <div className={styles.sectionIntro}>
            <p className={styles.sectionNumber}>01</p>
            <div>
              <h2 id="logos-heading">Logos</h2>
              <p>
                Choose the version that provides the clearest contrast for your
                background. Please do not stretch, recolor, crop, or modify the logo.
              </p>
            </div>
          </div>

          <div className={styles.assetList}>
            {logoAssets.map((asset) => (
              <article className={styles.assetRow} key={asset.title}>
                <div className={styles.assetContent}>
                  <p className={styles.assetLabel}>Official logo asset</p>
                  <h3>{asset.title}</h3>
                  <p className={styles.assetDescription}>{asset.description}</p>

                  <div className={styles.assetMeta}>
                    <div>
                      <span>File format</span>
                      <strong>{asset.fileType}</strong>
                    </div>
                    <div>
                      <span>Background</span>
                      <strong>{asset.transparent ? "Transparent" : "Included"}</strong>
                    </div>
                  </div>

                  <a
                    className={styles.downloadButton}
                    href={`/api/media-kit/${asset.downloadSlug}`}
                    download={asset.fileName}
                  >
                    <Download size={18} aria-hidden="true" />
                    Download logo
                  </a>
                </div>

                <div
                  className={`${styles.assetPreview} ${
                    asset.background === "dark" ? styles.darkPreview : styles.lightPreview
                  }`}
                >
                  <Image
                    src={asset.image}
                    alt={`${asset.title} preview`}
                    sizes="(max-width: 768px) 90vw, 42vw"
                    className={styles.logoImage}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.usageNote}>
          <p className={styles.sectionNumber}>02</p>
          <div>
            <h2>Using our brand assets</h2>
            <p>
              Maintain clear space around the logo and use only the supplied files.
              For press enquiries or a format not listed here, contact
              {" "}<a href="mailto:business@brandmindz.com">business@brandmindz.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer theme="mediaKit" />
    </>
  );
}
