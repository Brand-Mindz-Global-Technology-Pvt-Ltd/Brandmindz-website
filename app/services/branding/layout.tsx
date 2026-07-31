import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Branding Agency | Build Powerful Brands with Brand Mindz Global",
  },
  description: "Build a memorable brand with Brand Mindz Global. We create powerful brand strategies, visual identities, and positioning that drive trust, growth, and recognition.",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.brandmindz.com/services/branding",
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

export default function BrandingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
