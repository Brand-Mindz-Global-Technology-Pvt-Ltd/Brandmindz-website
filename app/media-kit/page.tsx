import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { Download, ExternalLink, FileText } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import whiteLogoPreview from "../../assets/Footer/media kit/previews/white-logo-preview.png";
import blackLogoPreview from "../../assets/Footer/media kit/previews/black-logo-preview.png";
import founderFormal from "../../assets/media-kit/founder/founder-formal.webp";
import founderOffice from "../../assets/media-kit/founder/founder-office.webp";
import founderSpeaking from "../../assets/about/foundern-2.webp";
import founderPodium from "../../assets/about/foundern-3.webp";
import mediaKitHero from "../../assets/media-kit/media-kit-hero.jpg";
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

const founderImages = [
  { image: founderFormal, alt: "R. Vasanth Kumar formal founder portrait", slug: "founder-formal" },
  { image: founderOffice, alt: "R. Vasanth Kumar office portrait", slug: "founder-office" },
  { image: founderSpeaking, alt: "R. Vasanth Kumar speaking at a business meeting", slug: "founder-speaking" },
  { image: founderPodium, alt: "R. Vasanth Kumar delivering a keynote address", slug: "founder-podium" },
];

export default function MediaKitPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <Image
            src={mediaKitHero}
            alt="Creative workspace with a laptop and design tools"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} aria-hidden="true" />
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
                <div
                  className={`${styles.assetPreview} ${
                    asset.background === "dark" ? styles.darkPreview : styles.lightPreview
                  }`}
                >
                  <Image
                    src={asset.image}
                    alt={`${asset.title} preview`}
                    sizes="(max-width: 600px) 100vw, 50vw"
                    className={styles.logoImage}
                  />
                </div>

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
              </article>
            ))}
          </div>
        </section>

        <section className={styles.founderSection} aria-labelledby="founder-heading">
          <div className={styles.sectionIntro}>
            <p className={styles.sectionNumber}>02</p>
            <div>
              <h2 id="founder-heading">Founder Profile</h2>
              <p>
                Approved biography, press-ready facts, and official photographs of
                R. Vasanth Kumar, Founder &amp; CEO of Brand Mindz Global Technology Pvt Ltd.
              </p>
            </div>
          </div>

          <article className={styles.founderProfileCard}>
            <div className={styles.founderProfileCopy}>
              <p className={styles.assetLabel}>Official press resource</p>
              <FileText className={styles.pdfIcon} size={42} aria-hidden="true" />
              <h3>R. Vasanth Kumar</h3>
              <p className={styles.founderRole}>Founder &amp; CEO</p>
              <p className={styles.assetDescription}>
                A three-page PDF containing the approved founder biography, leadership
                profile, key facts, short bio, and media-ready positioning.
              </p>
              <div className={styles.assetMeta}>
                <div><span>File format</span><strong>PDF</strong></div>
                <div><span>Pages</span><strong>3 pages</strong></div>
              </div>
              <a
                className={styles.downloadButton}
                href="/api/media-kit/founder-profile"
                download="Brand-Mindz-Founder-Profile.pdf"
              >
                <Download size={18} aria-hidden="true" />
                Download founder profile
              </a>
            </div>

            <div className={styles.founderFeatureImage}>
              <Image
                src={founderFormal}
                alt="R. Vasanth Kumar, Founder and CEO of Brand Mindz Global"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
          </article>

          <div className={styles.founderGalleryHeader}>
            <div>
              <p className={styles.assetLabel}>Approved photography</p>
              <h3>Founder images</h3>
            </div>
            <p>Download and use without cropping, filters, or visual alterations.</p>
          </div>

          <div className={styles.founderGallery}>
            {founderImages.map((item, index) => (
              <article className={styles.founderImageCard} key={item.slug}>
                <div className={styles.founderImageFrame}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw"
                  />
                </div>
                <div className={styles.founderImageFooter}>
                  <span>Image {String(index + 1).padStart(2, "0")}</span>
                  <a href={`/api/media-kit/${item.slug}`} download>
                    <Download size={16} aria-hidden="true" />
                    Download
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.seeMoreFounderImages}>
            <p>Browse the complete collection of approved founder photographs.</p>
            <a
              href="https://drive.google.com/drive/folders/1JupNZNe2c4UzxCWqjdO8Qz7MpnPlZDeH"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more founder images
              <ExternalLink size={17} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className={styles.usageNote}>
          <p className={styles.sectionNumber}>03</p>
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
