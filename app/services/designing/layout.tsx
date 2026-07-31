import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Creative Design Services | UI/UX, Logo & Graphic Design | Brand Mindz Global",
  },
  description: "Elevate your brand with Brand Mindz Global's UI/UX, graphic, logo, and packaging design services that create engaging experiences and lasting impact.",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.brandmindz.com/services/designing",
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

export default function DesigningLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
