import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Agency | SEO, PPC & Growth Experts | Brand Mindz Global",
  },
  description: "Accelerate your business with Brand Mindz Global. Expert SEO, Google Ads, Meta Ads, social media, and performance marketing that delivers real growth.",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.brandmindz.com/services/digital-marketing",
  },
  openGraph: {
    type: "website",
    url: "https://brandmindz.com",
    title: "Our Services | Branding, Design, Development, Digital Marketing & E-commerce Solutions – Brand Mindz Global",
    description: "Grow your business with Brand Mindz Global's 360° services, including branding, web development, digital marketing, SEO, social media, and e-commerce solutions.",
    images: [
      {
        url: "/logo.png",
        alt: "Brand Mindz Global services – Branding, Design, Development, Digital Marketing & E-commerce Solutions",
      },
    ],
  },
};

export default function DigitalMarketingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
